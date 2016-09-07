var fs = require('fs');

var kii = require('./lib/kii-cloud-sdk-v2.1.34.js').create();
var thingif = require('./lib/thing-if-sdk.js');

var APP_JSON = './app.json';
var THING_JSON = './thing.json';
var DATA_JSON = './data.json';
// GPIO channel number. see http://elinux.org/RPi_Low-level_peripherals#Interfacing_with_GPIO_pins
var GPIO_18 = 12

var APP = JSON.parse(fs.readFileSync(APP_JSON));
if (APP.SITE in kii.KiiSite) {
  APP.SITE = kii.KiiSite[APP.SITE];
}
var THING = JSON.parse(fs.readFileSync(THING_JSON));

function ts() {
  return new Date().toLocaleString();
}

function registerThing(id, password, type, savePath) {
  return kii.KiiThing.register({
    _vendorThingID: id,
    _password: password,
    _thingType: type
  }).then(
    function(thing) {
      fs.writeFileSync(savePath, JSON.stringify({
        THING_ID: thing.getThingID()
      }));
      console.log(ts(), 'thing :', thing);
      return Promise.resolve(thing);
    },
    function(error) {
      console.error(ts(), 'error :', error);
      return Promise.reject(error);
    }
  );
}

function loadThing(id, password) {
  var user = new kii.KiiUser();
  user._username = 'VENDOR_THING_ID:' + id;
  user._password = password;
  return new Promise(function(fulfill, reject) {
    user._authenticate({
      success: function(user) { fulfill(user); },
      failure: function(user, error) { reject(error); }
    });
  }).then(
    function(user) {
      return kii.KiiThing.loadWithVendorThingID(THING.VENDOR_ID);
    }
  ).then(
    function(thing) {
      var apiAuthor = new thingif.APIAuthor(
          user.getAccessToken(),
          new thingif.App(
            kii.Kii.getAppID(),
            kii.Kii.getAppKey(),
            "https://api-jp.kii.com")
          );
      var onboardRequest = new thingif.OnboardWithVendorThingIDRequest(id, password);
      return Promise.all([apiAuthor.onboardWithVendorThingID(onboardRequest), thing]);
    }
  );
}

function exponentialBackoff(name, fn, maxRetry, interval, retryCount) {
  if (interval == null) {
    interval = 1000;
  }
  if (retryCount == null) {
    retryCount = 0;
  }
  return fn().then(
    function(value) {
      if (retryCount > 0) {
        console.log(ts(), name, "success with retry (" + retryCount + '/' + maxRetry + ")");
      }
      return Promise.resolve(value);
    },
    function(error) {
      if (retryCount >= maxRetry) {
        return Promise.reject(error);
      }
      return new Promise(function(fulfill, reject) {
        ++retryCount;
        console.log(ts(), name, "retry (" + retryCount + '/' + maxRetry + ") after " + interval + " msecs:", error);
        setTimeout(function() {
          exponentialBackoff(name, fn, maxRetry, interval * 2, retryCount).then(
            function(value) { fulfill(value); },
            function(error) { reject(error); }
          );
        }, interval);
      });
    }
  );
}

function setupThing(thing, savePath) {
  var id = thing.VENDOR_ID;
  var pass = thing.PASSWORD;
  return loadThing(id, pass);
}

function startMonitor(thing) {
  var BME280 = require('node-adafruit-bme280');
  setInterval(function() {
    var t = new Date();
    var sec = t.getSeconds();
    if ((sec % 60) == 59) {
      BME280.probe(function(temperature, pressure, humidity) {
        saveData(thing.getThingID(), {temperature: temperature, humidity: humidity})
      });
    }
  }, 1000);
  //setInterval(putDummyData, 1000);
}

function saveData(thingId, state) {
  https = require('https');
  var path = '/thing-if/apps/'+ APP.ID + '/targets/thing:' + thingId + '/states';
  console.log("path", path);
  var req = https.request(
      {
        hostname: 'api-jp.kii.com',
        port: 443,
        path: path,
        method: 'PUT',
        headers: {
          authorization: 'Bearer ' + kii.KiiUser.getCurrentUser().getAccessToken(),
          'content-type': 'application/json'
        }
      },
      function(res) {
        console.log(ts(), 'post data status: ' + res.statusCode);
      });
  req.write(JSON.stringify(state));
  req.end();
}

function blinkLED(gpio, port, count) {
  var current = 0;
  var on = false;
  var id = setInterval(function() {
      if(current == count) {
        gpio.write(port, false);
        clearInterval(id);
      }

      if(on) {
        gpio.write(port, false);
        on = false;
      } else {
        gpio.write(port, true);
        on = true;
        current++;
      }
  }, 300);
}

function startMQTT(onboard) {
  var endpoint = onboard.mqttEndPoint;
  // console.log("endpoint: ", endpoint);
  var mqtt    = require('mqtt');
  var client  = mqtt.connect('mqtt://' + endpoint.host + ':' + endpoint.port,
      {username:endpoint.username, password:endpoint.password, clientId:endpoint.mqttTopic} );

  client.on('error', function (error) {
      console.error("MQTT error ", error);
      });

  client.on('connect', function () {
      console.log(ts(), "connected");
      client.subscribe(endpoint.mqttTopic);
      });

  var gpio = require('rpi-gpio');
  gpio.setup(GPIO_18, gpio.DIR_OUT);
  client.on('message', function (topic, message) {
      // message is Buffer 
      // message is like {"schema":"prototype","schemaVersion":1,"commandID":"03675d40-7509-11e6-b753-22000b07265b","actions":[{"mythingsAction":{"payload":"{\"test\":0}","id":1}}],"issuer":"user:d009f7a00022-5308-6e11-e443-0222ec98"}
      msgJSON = JSON.parse(message);
      console.log(ts(), message.toString());
      blinkLED(gpio, GPIO_18, msgJSON.actions[0].mythingsAction.id);
    });
}


kii.Kii.initializeWithSite(APP.ID, APP.KEY, APP.SITE);

exponentialBackoff('setup', function() {
  return setupThing(THING, DATA_JSON);
}, 5, 1000).then(
  function(resp) {
      console.log(ts(), resp);
      startMQTT(resp[0]);
      startMonitor(resp[1]);
  },
  function(error) { console.error(ts(), 'setup failed:', error); }
);
