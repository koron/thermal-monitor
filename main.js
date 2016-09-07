var fs = require('fs');

var kii = require('./lib/kii-cloud-sdk-v2.1.34.js').create();
var thingif = require('./lib/thing-if-sdk.js');

var APP_JSON = './app.json';
var THING_JSON = './thing.json';
var DATA_JSON = './data.json';

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
  var data;
  try {
    data = JSON.parse(fs.readFileSync(savePath));
  } catch (err) {
  }
  var id = thing.VENDOR_ID;
  var pass = thing.PASSWORD;
  if (data == null) {
    return registerThing(id, pass, thing.TYPE, savePath).then(
      function(thing) { return loadThing(id, pass); }
    );
  } else {
    return loadThing(id, pass);
  }
}

function startMonitor(thing) {
  var BME280 = require('node-adafruit-bme280');
  setInterval(function() {
    var t = new Date();
    var sec = t.getSeconds();
    if ((sec % 60) == 59) {
      BME280.probe(function(temperature, pressure, humidity) {
        saveData(thing.getID(), {temperature: temperature, humidity: humidity})
      });
    }
  }, 1000);
  //setInterval(putDummyData, 1000);
}

function saveData(thingId, state) {
  https = require('https');
  var req = https.request(
      {
        hostname: 'api-jp.kii.com',
        port: 443,
        path: '/thing-if/apps/'+ APP.ID + '/targets/thing:'
          + thingId + '/status',
        method: 'POST',
        headers: {
          authorization: 'Bearer ' + kii.KiiUser.getCurrentUser().getAccessToken()
        }
      },
      function(res) {
        console.log(ts(), 'post data status: ' + res.statusCode);
      });
  req.write();
  req.end();
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

  client.on('message', function (topic, message) {
    // message is Buffer 
    console.log(ts(), message.toString());
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
