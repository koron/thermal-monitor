(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("es6-promise"), require("popsicle"), require("make-error-cause"));
	else if(typeof define === 'function' && define.amd)
		define("ThingIF", ["es6-promise", "popsicle", "make-error-cause"], factory);
	else if(typeof exports === 'object')
		exports["ThingIF"] = factory(require("es6-promise"), require("popsicle"), require("make-error-cause"));
	else
		root["ThingIF"] = factory(root["es6-promise"], root["popsicle"], root["make-error-cause"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(2));
	__export(__webpack_require__(30));
	__export(__webpack_require__(31));
	__export(__webpack_require__(24));
	__export(__webpack_require__(16));
	__export(__webpack_require__(23));
	__export(__webpack_require__(11));
	__export(__webpack_require__(22));
	__export(__webpack_require__(18));
	__export(__webpack_require__(15));
	__export(__webpack_require__(21));
	__export(__webpack_require__(25));
	__export(__webpack_require__(32));
	__export(__webpack_require__(33));
	__export(__webpack_require__(8));
	__export(__webpack_require__(13));
	__export(__webpack_require__(20));
	__export(__webpack_require__(17));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var OnboardingOps_1 = __webpack_require__(3);
	var CommandOps_1 = __webpack_require__(14);
	var TriggerOps_1 = __webpack_require__(19);
	var StateOps_1 = __webpack_require__(26);
	var ThingOps_1 = __webpack_require__(27);
	var PushOps_1 = __webpack_require__(28);
	var PromiseWrapper = __webpack_require__(29);
	var APIAuthor = (function () {
	    function APIAuthor(token, app) {
	        this._token = token;
	        this._app = app;
	    }
	    Object.defineProperty(APIAuthor.prototype, "token", {
	        get: function () {
	            return this._token;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(APIAuthor.prototype, "app", {
	        get: function () {
	            return this._app;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    APIAuthor.prototype.onboardWithVendorThingID = function (onboardRequest, onCompletion) {
	        return PromiseWrapper.promise((new OnboardingOps_1.default(this)).onboardWithVendorThingID(onboardRequest), onCompletion);
	    };
	    APIAuthor.prototype.onboardWithThingID = function (onboardRequest, onCompletion) {
	        return PromiseWrapper.promise((new OnboardingOps_1.default(this)).onboardWithThingID(onboardRequest), onCompletion);
	    };
	    APIAuthor.prototype.postNewCommand = function (target, command, onCompletion) {
	        return PromiseWrapper.promise((new CommandOps_1.default(this, target)).postNewCommand(command), onCompletion);
	    };
	    APIAuthor.prototype.getCommand = function (target, commandID, onCompletion) {
	        return PromiseWrapper.promise((new CommandOps_1.default(this, target)).getCommand(commandID), onCompletion);
	    };
	    APIAuthor.prototype.listCommands = function (target, listOptions, onCompletion) {
	        return PromiseWrapper.promise((new CommandOps_1.default(this, target)).listCommands(listOptions), onCompletion);
	    };
	    APIAuthor.prototype.postCommandTrigger = function (target, requestObject, onCompletion) {
	        return PromiseWrapper.promise((new TriggerOps_1.default(this, target)).postCommandTrigger(requestObject), onCompletion);
	    };
	    APIAuthor.prototype.postServerCodeTrigger = function (target, requestObject, onCompletion) {
	        return PromiseWrapper.promise((new TriggerOps_1.default(this, target)).postServerCodeTrigger(requestObject), onCompletion);
	    };
	    APIAuthor.prototype.getTrigger = function (target, triggerID, onCompletion) {
	        return PromiseWrapper.promise((new TriggerOps_1.default(this, target)).getTrigger(triggerID), onCompletion);
	    };
	    APIAuthor.prototype.patchCommandTrigger = function (target, triggerID, requestObject, onCompletion) {
	        return PromiseWrapper.promise((new TriggerOps_1.default(this, target)).patchCommandTrigger(triggerID, requestObject), onCompletion);
	    };
	    APIAuthor.prototype.patchServerCodeTrigger = function (target, triggerID, requestObject, onCompletion) {
	        return PromiseWrapper.promise((new TriggerOps_1.default(this, target)).patchServerCodeTrigger(triggerID, requestObject), onCompletion);
	    };
	    APIAuthor.prototype.enableTrigger = function (target, triggerID, enable, onCompletion) {
	        return PromiseWrapper.promise((new TriggerOps_1.default(this, target)).enableTrigger(triggerID, enable), onCompletion);
	    };
	    APIAuthor.prototype.deleteTrigger = function (target, triggerID, onCompletion) {
	        return PromiseWrapper.promise((new TriggerOps_1.default(this, target)).deleteTrigger(triggerID), onCompletion);
	    };
	    APIAuthor.prototype.listTriggers = function (target, listOptions, onCompletion) {
	        return PromiseWrapper.promise((new TriggerOps_1.default(this, target)).listTriggers(listOptions), onCompletion);
	    };
	    APIAuthor.prototype.listServerCodeExecutionResults = function (target, triggerID, listOptions, onCompletion) {
	        return PromiseWrapper.promise((new TriggerOps_1.default(this, target)).listServerCodeResults(triggerID, listOptions), onCompletion);
	    };
	    APIAuthor.prototype.getState = function (target, onCompletion) {
	        return PromiseWrapper.promise((new StateOps_1.default(this, target)).getState(), onCompletion);
	    };
	    APIAuthor.prototype.getVendorThingID = function (thingID, onCompletion) {
	        return PromiseWrapper.promise((new ThingOps_1.default(this, thingID)).getVendorThingID(), onCompletion);
	    };
	    APIAuthor.prototype.updateVendorThingID = function (thingID, newVendorThingID, newPassword, onCompletion) {
	        return PromiseWrapper.voidPromise((new ThingOps_1.default(this, thingID)).updateVendorThingID(newVendorThingID, newPassword), onCompletion);
	    };
	    APIAuthor.prototype.installFCM = function (installationRegistrationID, development, onCompletion) {
	        return PromiseWrapper.promise((new PushOps_1.default(this)).installFCM(installationRegistrationID, development), onCompletion);
	    };
	    APIAuthor.prototype.uninstallPush = function (installationID, onCompletion) {
	        return PromiseWrapper.voidPromise((new PushOps_1.default(this)).uninstall(installationID), onCompletion);
	    };
	    return APIAuthor;
	}());
	exports.APIAuthor = APIAuthor;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var es6_promise_1 = __webpack_require__(4);
	var Request_1 = __webpack_require__(5);
	var OnboardingResult_1 = __webpack_require__(11);
	var ThingIFError_1 = __webpack_require__(8);
	var KiiUtil = __webpack_require__(9);
	var BaseOp_1 = __webpack_require__(12);
	var OnboardingOps = (function (_super) {
	    __extends(OnboardingOps, _super);
	    function OnboardingOps(au) {
	        _super.call(this, au);
	        this.au = au;
	    }
	    OnboardingOps.prototype.onboardWithThingID = function (onboardRequest) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!onboardRequest.thingID) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "thingID is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(onboardRequest.thingID)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "thingID is not string"));
	                return;
	            }
	            if (!onboardRequest.thingPassword) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "thingPassword is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(onboardRequest.thingPassword)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "thingPassword is not string"));
	                return;
	            }
	            if (!onboardRequest.owner) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "owner is null"));
	                return;
	            }
	            _this.onboard("application/vnd.kii.OnboardingWithThingIDByOwner+json", onboardRequest).then(function (result) {
	                resolve(result);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    OnboardingOps.prototype.onboardWithVendorThingID = function (onboardRequest) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!onboardRequest.vendorThingID) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "vendorThingID is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(onboardRequest.vendorThingID)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "vendorThingID is not string"));
	                return;
	            }
	            if (!onboardRequest.thingPassword) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "thingPassword is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(onboardRequest.thingPassword)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "thingPassword is not string"));
	                return;
	            }
	            _this.onboard((onboardRequest.owner
	                ? "application/vnd.kii.OnboardingWithVendorThingIDByOwner+json"
	                : "application/vnd.kii.OnboardingWithVendorThingIDByThing+json"), onboardRequest).then(function (result) {
	                resolve(result);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    OnboardingOps.prototype.onboard = function (contentType, onboardRequest) {
	        var _this = this;
	        var onboardUrl = this.au.app.getThingIFBaseUrl() + "/onboardings";
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            var headers = _this.addHeader("Content-Type", contentType);
	            var req = {
	                method: "POST",
	                headers: headers,
	                url: onboardUrl,
	                body: onboardRequest,
	            };
	            Request_1.default(req).then(function (res) {
	                var result = new OnboardingResult_1.OnboardingResult(res.body.thingID, res.body.accessToken, res.body.mqttEndpoint);
	                resolve(result);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    return OnboardingOps;
	}(BaseOp_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OnboardingOps;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var es6_promise_1 = __webpack_require__(4);
	var popsicle = __webpack_require__(6);
	var Response_1 = __webpack_require__(7);
	var ThingIFError_1 = __webpack_require__(8);
	var KiiUtil = __webpack_require__(9);
	function default_1(options) {
	    return new es6_promise_1.Promise(function (resolve, reject) {
	        popsicle.request(options)
	            .use(popsicle.plugins.parse(['json'], false))
	            .then(function (res) {
	            if (res.statusType() == 2) {
	                var response = new Response_1.Response(res.status, res.body, res.headers);
	                resolve(response);
	            }
	            else {
	                var err;
	                if (KiiUtil.isObject(res.body)) {
	                    err = new ThingIFError_1.HttpRequestError(res.status, res.body.message, res.body);
	                }
	                else {
	                    err = new ThingIFError_1.HttpRequestError(res.status, "", res.body);
	                }
	                reject(err);
	            }
	        }).catch(function (err) {
	            if (err instanceof popsicle.PopsicleError) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.NetworkError, err.message, err));
	                return;
	            }
	            reject(err);
	        });
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	var Response = (function () {
	    function Response(status, body, headers) {
	        this.status = status;
	        this.body = body;
	        this.headers = headers;
	    }
	    Response.prototype.isSucceeded = function () {
	        if (this.status >= 200 && this.status < 300) {
	            return true;
	        }
	        return false;
	    };
	    return Response;
	}());
	exports.Response = Response;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var KiiUtil = __webpack_require__(9);
	var makeErrorCause = __webpack_require__(10);
	exports.Errors = {
	    ArgumentError: "ArgumentError",
	    HttpError: "HttpRequestError",
	    IlllegalStateError: "IlllegalStateError",
	    NetworkError: "NetworkError"
	};
	var ThingIFError = (function (_super) {
	    __extends(ThingIFError, _super);
	    function ThingIFError(name, message, original) {
	        _super.call(this, message, original);
	        this.name = name;
	    }
	    return ThingIFError;
	}(makeErrorCause.BaseError));
	exports.ThingIFError = ThingIFError;
	var ErrorResponseBody = (function () {
	    function ErrorResponseBody(errorCode, message, rawData) {
	        this.errorCode = errorCode,
	            this.message = message;
	        this.rawData = rawData;
	    }
	    return ErrorResponseBody;
	}());
	exports.ErrorResponseBody = ErrorResponseBody;
	var HttpRequestError = (function (_super) {
	    __extends(HttpRequestError, _super);
	    function HttpRequestError(status, message, body) {
	        _super.call(this, exports.Errors.HttpError, message);
	        this.status = status;
	        if (KiiUtil.isObject(body)) {
	            this.body = new ErrorResponseBody(body.errorCode, body.message, JSON.stringify(body));
	        }
	        else if (KiiUtil.isString(body)) {
	            this.body = new ErrorResponseBody(null, null, body);
	        }
	    }
	    return HttpRequestError;
	}(ThingIFError));
	exports.HttpRequestError = HttpRequestError;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	function isString(mayStr) {
	    return (getType(mayStr) == "[object String]");
	}
	exports.isString = isString;
	function isNumber(mayNum) {
	    return (getType(mayNum) == "[object Number]");
	}
	exports.isNumber = isNumber;
	function isBoolean(mayBool) {
	    return (getType(mayBool) == "[object Boolean]");
	}
	exports.isBoolean = isBoolean;
	function isObject(mayObject) {
	    return (getType(mayObject) == "[object Object]");
	}
	exports.isObject = isObject;
	function isArray(mayObject) {
	    return (getType(mayObject) == "[object Array]");
	}
	exports.isArray = isArray;
	function getType(obj) {
	    return Object.prototype.toString.call(obj);
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var OnboardingResult = (function () {
	    function OnboardingResult(thingID, accessToken, mqttEndPoint) {
	        this.thingID = thingID;
	        this.accessToken = accessToken;
	        this.mqttEndPoint = mqttEndPoint;
	    }
	    return OnboardingResult;
	}());
	exports.OnboardingResult = OnboardingResult;
	var MqttEndpoint = (function () {
	    function MqttEndpoint(installationID, host, mqttTopic, username, password, portSSL, portTCP, portWS, portWSS, ttl) {
	        this.installationID = installationID;
	        this.host = host;
	        this.mqttTopic = mqttTopic;
	        this.username = username;
	        this.password = password;
	        this.portSSL = portSSL;
	        this.portTCP = portTCP;
	        this.portWS = portWS;
	        this.portWSS = portWSS;
	        this.ttl = ttl;
	    }
	    return MqttEndpoint;
	}());
	exports.MqttEndpoint = MqttEndpoint;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ThingIFSDKInfo_1 = __webpack_require__(13);
	var BaseOp = (function () {
	    function BaseOp(au) {
	        this.au = au;
	        var headers = {
	            "X-Kii-SDK": "sn=jsi;sv=" + ThingIFSDKInfo_1.getSDKVersion()
	        };
	        if (!!this.au.token) {
	            headers["Authorization"] = "Bearer " + this.au.token;
	        }
	        this.headers = headers;
	    }
	    BaseOp.prototype.addHeaders = function (headers) {
	        for (var key in headers) {
	            if (headers.hasOwnProperty(key)) {
	                this.headers[key] = headers[key];
	            }
	        }
	        return this.headers;
	    };
	    BaseOp.prototype.addHeader = function (key, value) {
	        this.headers[key] = value;
	        return this.headers;
	    };
	    BaseOp.prototype.getHeaders = function () {
	        return this.headers;
	    };
	    return BaseOp;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BaseOp;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	function getSDKVersion() {
	    return "0.1.3";
	}
	exports.getSDKVersion = getSDKVersion;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var es6_promise_1 = __webpack_require__(4);
	var Request_1 = __webpack_require__(5);
	var BaseOp_1 = __webpack_require__(12);
	var RequestObjects_1 = __webpack_require__(15);
	var Command_1 = __webpack_require__(16);
	var ThingIFError_1 = __webpack_require__(8);
	var KiiUtil = __webpack_require__(9);
	var TypedID_1 = __webpack_require__(17);
	var QueryResult_1 = __webpack_require__(18);
	var CommandOps = (function (_super) {
	    __extends(CommandOps, _super);
	    function CommandOps(au, targetID) {
	        _super.call(this, au);
	        this.au = au;
	        this.targetID = targetID;
	        this.baseUrl = this.au.app.getThingIFBaseUrl() + "/targets/" + this.targetID.toString() + "/commands";
	    }
	    CommandOps.prototype.postNewCommand = function (requestObject) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!requestObject.schema) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "schema is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(requestObject.schema)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "schema is not string"));
	                return;
	            }
	            if (!requestObject.schemaVersion) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "schemaVersion is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isNumber(requestObject.schemaVersion)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "schemaVersion is not number"));
	                return;
	            }
	            if (!requestObject.actions) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "actions is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isArray(requestObject.actions)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "actions is not array"));
	                return;
	            }
	            if (!requestObject.issuer) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "issuer is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(requestObject.issuer)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "issuer is not string"));
	                return;
	            }
	            var headers = _this.addHeader("Content-Type", "application/json");
	            var req = {
	                method: "POST",
	                headers: headers,
	                url: _this.baseUrl,
	                body: requestObject,
	            };
	            Request_1.default(req).then(function (res) {
	                var newCommand = new Command_1.Command(_this.targetID, TypedID_1.TypedID.fromString(requestObject.issuer), requestObject.schema, requestObject.schemaVersion, requestObject.actions);
	                newCommand.commandID = res.body.commandID;
	                resolve(newCommand);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    CommandOps.prototype.listCommands = function (listOptions) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            var url = _this.baseUrl;
	            if (!!listOptions) {
	                var queryString = RequestObjects_1.ListQueryOptions.getQueryString(listOptions);
	                if (queryString) {
	                    url = url + "?" + queryString;
	                }
	            }
	            var headers = _this.addHeader("Content-Type", "application/json");
	            var req = {
	                method: "GET",
	                headers: headers,
	                url: url
	            };
	            Request_1.default(req).then(function (res) {
	                var rawCmds = res.body["commands"];
	                var commands = new Array();
	                for (var i in rawCmds) {
	                    var rawCmd = rawCmds[i];
	                    var command = Command_1.Command.fromJson(rawCmd);
	                    commands.push(command);
	                }
	                var paginationKey = res.body["nextPaginationKey"];
	                var result = new QueryResult_1.QueryResult(commands, paginationKey);
	                resolve(result);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    CommandOps.prototype.getCommand = function (commandID) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!commandID) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "commandID is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(commandID)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "commandID is not string"));
	                return;
	            }
	            var headers = _this.addHeader("Content-Type", "application/json");
	            var req = {
	                method: "GET",
	                headers: headers,
	                url: _this.baseUrl + "/" + commandID
	            };
	            Request_1.default(req).then(function (res) {
	                resolve(Command_1.Command.fromJson(res.body));
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    return CommandOps;
	}(BaseOp_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CommandOps;


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	var OnboardWithVendorThingIDRequest = (function () {
	    function OnboardWithVendorThingIDRequest(vendorThingID, thingPassword, ownerID, thingType, thingProperties) {
	        this.vendorThingID = vendorThingID;
	        this.thingPassword = thingPassword;
	        if (!!ownerID) {
	            this.owner = ownerID.toString();
	        }
	        this.thingType = thingType;
	        this.thingProperties = thingProperties;
	    }
	    return OnboardWithVendorThingIDRequest;
	}());
	exports.OnboardWithVendorThingIDRequest = OnboardWithVendorThingIDRequest;
	var OnboardWithThingIDRequest = (function () {
	    function OnboardWithThingIDRequest(thingID, thingPassword, ownerID) {
	        this.thingID = thingID;
	        this.thingPassword = thingPassword;
	        if (!!ownerID) {
	            this.owner = ownerID.toString();
	        }
	    }
	    return OnboardWithThingIDRequest;
	}());
	exports.OnboardWithThingIDRequest = OnboardWithThingIDRequest;
	var PostCommandRequest = (function () {
	    function PostCommandRequest(schema, schemaVersion, actions, issuerID, title, description, metaData) {
	        this.schema = schema;
	        this.schemaVersion = schemaVersion;
	        this.actions = actions;
	        if (!!issuerID && !!issuerID.id && !!issuerID.type) {
	            this.issuer = issuerID.toString();
	        }
	        this.title = title;
	        this.description = description;
	        this.metaData = metaData;
	    }
	    return PostCommandRequest;
	}());
	exports.PostCommandRequest = PostCommandRequest;
	var ListQueryOptions = (function () {
	    function ListQueryOptions(bestEffortLimit, paginationKey) {
	        this.bestEffortLimit = bestEffortLimit;
	        this.paginationKey = paginationKey;
	    }
	    ListQueryOptions.getQueryString = function (options) {
	        var arr = [];
	        if (!!options.bestEffortLimit) {
	            arr.push("bestEffortLimit=" + options.bestEffortLimit);
	        }
	        if (!!options.paginationKey) {
	            arr.push("paginationKey=" + options.paginationKey);
	        }
	        return arr.join('&');
	    };
	    return ListQueryOptions;
	}());
	exports.ListQueryOptions = ListQueryOptions;
	var CommandTriggerRequest = (function () {
	    function CommandTriggerRequest(schema, schemaVersion, actions, predicate, issuerID) {
	        this.schema = schema;
	        this.schemaVersion = schemaVersion;
	        this.actions = actions;
	        this.predicate = predicate;
	        this.issuerID = issuerID;
	    }
	    return CommandTriggerRequest;
	}());
	exports.CommandTriggerRequest = CommandTriggerRequest;
	var ServerCodeTriggerRequest = (function () {
	    function ServerCodeTriggerRequest(serverCode, predicate) {
	        this.serverCode = serverCode;
	        this.predicate = predicate;
	    }
	    return ServerCodeTriggerRequest;
	}());
	exports.ServerCodeTriggerRequest = ServerCodeTriggerRequest;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var TypedID_1 = __webpack_require__(17);
	var Command = (function () {
	    function Command(targetID, issuerID, schema, schemaVersion, actions) {
	        this.targetID = targetID;
	        this.issuerID = issuerID;
	        this.schema = schema;
	        this.schemaVersion = schemaVersion;
	        this.actions = actions;
	    }
	    Command.prototype.toJson = function () {
	        var jsonObject = {};
	        if (!!this.commandID) {
	            jsonObject.commandID = this.commandID;
	        }
	        if (!!this.targetID) {
	            jsonObject.target = this.targetID.toString();
	        }
	        if (!!this.issuerID) {
	            jsonObject.issuer = this.issuerID.toString();
	        }
	        if (!!this.schema) {
	            jsonObject.schema = this.schema;
	        }
	        if (!!this.schemaVersion) {
	            jsonObject.schemaVersion = this.schemaVersion;
	        }
	        if (!!this.actions) {
	            jsonObject.actions = this.actions;
	        }
	        if (!!this.actionResults) {
	            jsonObject.actionResults = this.actionResults;
	        }
	        if (!!this.title) {
	            jsonObject.title = this.title;
	        }
	        if (!!this.description) {
	            jsonObject.description = this.description;
	        }
	        if (!!this.metadata) {
	            jsonObject.metadata = this.metadata;
	        }
	        return jsonObject;
	    };
	    Command.fromJson = function (obj) {
	        if (!obj.target || !obj.issuer || !obj.schema || !obj.schemaVersion || !obj.actions) {
	            return null;
	        }
	        var command = new Command(TypedID_1.TypedID.fromString(obj.target), TypedID_1.TypedID.fromString(obj.issuer), obj.schema, obj.schemaVersion, obj.actions);
	        command.commandID = obj.commandID;
	        command.actionResults = obj.actionResults;
	        command.commandState = obj.commandState;
	        command.firedByTriggerID = obj.firedByTriggerID;
	        command.title = obj.title;
	        command.description = obj.description;
	        command.metadata = obj.metadata;
	        if (!!obj.createdAt) {
	            command.created = new Date(obj.createdAt);
	        }
	        if (!!obj.modifiedAt) {
	            command.modified = new Date(obj.modifiedAt);
	        }
	        return command;
	    };
	    return Command;
	}());
	exports.Command = Command;
	exports.CommandState = {
	    SENDING: "SENDING",
	    DELIVERED: "DELIVERED",
	    INCOMPLETE: "INCOMPLETE",
	    DONE: "DONE"
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	exports.Types = {
	    Group: 0,
	    User: 1,
	    Thing: 2
	};
	var TypedID = (function () {
	    function TypedID(type, id) {
	        this._type = type;
	        this._id = id;
	    }
	    Object.defineProperty(TypedID.prototype, "type", {
	        get: function () {
	            return this._type;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TypedID.prototype, "id", {
	        get: function () {
	            return this._id;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TypedID.prototype.toString = function () {
	        var typeString;
	        switch (this._type) {
	            case exports.Types.Group:
	                typeString = "group";
	                break;
	            case exports.Types.User:
	                typeString = "user";
	                break;
	            case exports.Types.Thing:
	                typeString = "thing";
	                break;
	            default:
	                break;
	        }
	        return typeString + ":" + this._id;
	    };
	    TypedID.fromString = function (str) {
	        var arr = str.split(":");
	        if (arr.length < 2) {
	            return null;
	        }
	        var t = arr[0].toLowerCase();
	        var id = arr[1];
	        if (t == "user") {
	            return new TypedID(exports.Types.User, id);
	        }
	        else if (t == "group") {
	            return new TypedID(exports.Types.Group, id);
	        }
	        else if (t == "thing") {
	            return new TypedID(exports.Types.Thing, id);
	        }
	        else {
	            return null;
	        }
	    };
	    return TypedID;
	}());
	exports.TypedID = TypedID;


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	var QueryResult = (function () {
	    function QueryResult(results, paginationKey) {
	        this.results = results;
	        this.paginationKey = paginationKey;
	    }
	    Object.defineProperty(QueryResult.prototype, "hasNext", {
	        get: function () {
	            return !!this.paginationKey;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return QueryResult;
	}());
	exports.QueryResult = QueryResult;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var es6_promise_1 = __webpack_require__(4);
	var Request_1 = __webpack_require__(5);
	var BaseOp_1 = __webpack_require__(12);
	var Trigger_1 = __webpack_require__(20);
	var QueryResult_1 = __webpack_require__(18);
	var RequestObjects_1 = __webpack_require__(15);
	var ThingIFError_1 = __webpack_require__(8);
	var Command_1 = __webpack_require__(16);
	var ServerCodeResult_1 = __webpack_require__(25);
	var KiiUtil = __webpack_require__(9);
	var TriggerOps = (function (_super) {
	    __extends(TriggerOps, _super);
	    function TriggerOps(au, target) {
	        _super.call(this, au);
	        this.au = au;
	        this.target = target;
	    }
	    TriggerOps.prototype.postCommandTrigger = function (requestObject) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!requestObject) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "requestObject is null"));
	                return;
	            }
	            if (!requestObject.schema) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "schema is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(requestObject.schema)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "schema is not string"));
	                return;
	            }
	            if (requestObject.schemaVersion === null || requestObject.schemaVersion === undefined) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "schemaVersion is null"));
	                return;
	            }
	            if (!requestObject.actions) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "actions is null"));
	                return;
	            }
	            if (!requestObject.predicate) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "predicate is null"));
	                return;
	            }
	            var command = new Command_1.Command(_this.target, requestObject.issuerID, requestObject.schema, requestObject.schemaVersion, requestObject.actions);
	            var resuestBody = {
	                predicate: requestObject.predicate.toJson(),
	                triggersWhat: Trigger_1.TriggersWhat.COMMAND,
	                command: command.toJson()
	            };
	            _this.postTrigger(resuestBody).then(function (res) {
	                var command = new Command_1.Command(_this.target, requestObject.issuerID, requestObject.schema, requestObject.schemaVersion, requestObject.actions);
	                var trigger = new Trigger_1.Trigger(requestObject.predicate, command, null);
	                trigger.triggerID = res.body.triggerID;
	                trigger.disabled = false;
	                resolve(trigger);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    TriggerOps.prototype.postServerCodeTrigger = function (requestObject) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!requestObject) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "requestObject is null"));
	                return;
	            }
	            if (!requestObject.serverCode) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "serverCode is null"));
	                return;
	            }
	            if (!requestObject.predicate) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "predicate is null"));
	                return;
	            }
	            var resuestBody = {
	                predicate: requestObject.predicate.toJson(),
	                triggersWhat: Trigger_1.TriggersWhat.SERVER_CODE,
	                serverCode: requestObject.serverCode.toJson()
	            };
	            _this.postTrigger(resuestBody).then(function (res) {
	                var trigger = new Trigger_1.Trigger(requestObject.predicate, null, requestObject.serverCode);
	                trigger.triggerID = res.body.triggerID;
	                trigger.disabled = false;
	                resolve(trigger);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    TriggerOps.prototype.postTrigger = function (requestBody) {
	        var _this = this;
	        var url = this.au.app.getThingIFBaseUrl() + "/targets/" + this.target.toString() + "/triggers";
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            var headers = _this.addHeader("Content-Type", "application/json");
	            var req = {
	                method: "POST",
	                headers: headers,
	                url: url,
	                body: requestBody
	            };
	            Request_1.default(req).then(function (res) {
	                resolve(res);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    TriggerOps.prototype.getTrigger = function (triggerID) {
	        var _this = this;
	        var url = this.au.app.getThingIFBaseUrl() + "/targets/" + this.target.toString() + "/triggers/" + triggerID;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!triggerID) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "triggerID is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(triggerID)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "triggerID is not string"));
	                return;
	            }
	            var headers = _this.getHeaders();
	            var req = {
	                method: "GET",
	                headers: headers,
	                url: url
	            };
	            Request_1.default(req).then(function (res) {
	                resolve(Trigger_1.Trigger.fromJson(res.body));
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    TriggerOps.prototype.patchCommandTrigger = function (triggerID, requestObject) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!triggerID) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "triggerID is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(triggerID)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "triggerID is not string"));
	                return;
	            }
	            if (!requestObject) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "requestObject is null"));
	                return;
	            }
	            if (!requestObject.schema) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "schema is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(requestObject.schema)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "schema is not string"));
	                return;
	            }
	            if (requestObject.schemaVersion === null || requestObject.schemaVersion === undefined) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "schemaVersion is null"));
	                return;
	            }
	            if (!requestObject.actions && !requestObject.predicate) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "must specify actions or predicate"));
	                return;
	            }
	            var command = new Command_1.Command(_this.target, requestObject.issuerID, requestObject.schema, requestObject.schemaVersion, requestObject.actions);
	            var resuestBody = {
	                predicate: requestObject.predicate.toJson(),
	                triggersWhat: Trigger_1.TriggersWhat.COMMAND,
	                command: command.toJson()
	            };
	            _this.patchTriggger(triggerID, resuestBody).then(function (result) {
	                resolve(result);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    TriggerOps.prototype.patchServerCodeTrigger = function (triggerID, requestObject) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!triggerID) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "triggerID is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(triggerID)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "triggerID is not string"));
	                return;
	            }
	            if (!requestObject) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "requestObject is null"));
	                return;
	            }
	            if (!requestObject.serverCode && !requestObject.predicate) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "must specify serverCode or predicate"));
	                return;
	            }
	            var resuestBody = {
	                predicate: requestObject.predicate.toJson(),
	                triggersWhat: Trigger_1.TriggersWhat.SERVER_CODE,
	                serverCode: requestObject.serverCode.toJson()
	            };
	            _this.patchTriggger(triggerID, resuestBody).then(function (result) {
	                resolve(result);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    TriggerOps.prototype.patchTriggger = function (triggerID, requestBody) {
	        var _this = this;
	        var url = this.au.app.getThingIFBaseUrl() + "/targets/" + this.target.toString() + "/triggers/" + triggerID;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            var headers = _this.addHeader("Content-Type", "application/json");
	            var req = {
	                method: "PATCH",
	                headers: headers,
	                url: url,
	                body: requestBody
	            };
	            Request_1.default(req).then(function (res) {
	                _this.getTrigger(triggerID).then(function (trigger) {
	                    resolve(trigger);
	                }).catch(function (err) {
	                    reject(err);
	                });
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    TriggerOps.prototype.enableTrigger = function (triggerID, enable) {
	        var _this = this;
	        var operation = (enable ? "enable" : "disable");
	        var url = this.au.app.getThingIFBaseUrl() + "/targets/" + this.target.toString() + "/triggers/" + triggerID + "/" + operation;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!triggerID) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "triggerID is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(triggerID)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "triggerID is not string"));
	                return;
	            }
	            if (enable === null || enable === undefined) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "enable is null"));
	                return;
	            }
	            else if (!KiiUtil.isBoolean(enable)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "enable is not boolean"));
	                return;
	            }
	            var headers = _this.getHeaders();
	            var req = {
	                method: "PUT",
	                headers: headers,
	                url: url
	            };
	            Request_1.default(req).then(function (res) {
	                _this.getTrigger(triggerID).then(function (trigger) {
	                    resolve(trigger);
	                }).catch(function (err) {
	                    reject(err);
	                });
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    TriggerOps.prototype.deleteTrigger = function (triggerID) {
	        var _this = this;
	        var url = this.au.app.getThingIFBaseUrl() + "/targets/" + this.target.toString() + "/triggers/" + triggerID;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!triggerID) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "triggerID is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(triggerID)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "triggerID is not string"));
	                return;
	            }
	            var headers = _this.getHeaders();
	            var req = {
	                method: "DELETE",
	                headers: headers,
	                url: url
	            };
	            Request_1.default(req).then(function (res) {
	                resolve(triggerID);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    TriggerOps.prototype.listTriggers = function (listOptions) {
	        var _this = this;
	        var url = this.au.app.getThingIFBaseUrl() + "/targets/" + this.target.toString() + "/triggers";
	        if (!!listOptions) {
	            var queryString = RequestObjects_1.ListQueryOptions.getQueryString(listOptions);
	            if (queryString) {
	                url = url + "?" + queryString;
	            }
	        }
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            var headers = _this.getHeaders();
	            var req = {
	                method: "GET",
	                headers: headers,
	                url: url
	            };
	            Request_1.default(req).then(function (res) {
	                var triggers = [];
	                var paginationKey = res.body.nextPaginationKey ? res.body.nextPaginationKey : null;
	                for (var _i = 0, _a = res.body.triggers; _i < _a.length; _i++) {
	                    var json = _a[_i];
	                    triggers.push(Trigger_1.Trigger.fromJson(json));
	                }
	                resolve(new QueryResult_1.QueryResult(triggers, paginationKey));
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    TriggerOps.prototype.listServerCodeResults = function (triggerID, listOptions) {
	        var _this = this;
	        var url = this.au.app.getThingIFBaseUrl() + "/targets/" + this.target.toString() + "/triggers/" + triggerID + "/results/server-code";
	        if (!!listOptions) {
	            var queryString = RequestObjects_1.ListQueryOptions.getQueryString(listOptions);
	            if (queryString) {
	                url = url + "?" + queryString;
	            }
	        }
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!triggerID) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "triggerID is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(triggerID)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "triggerID is not string"));
	                return;
	            }
	            var headers = _this.getHeaders();
	            var req = {
	                method: "GET",
	                headers: headers,
	                url: url
	            };
	            Request_1.default(req).then(function (res) {
	                var results = [];
	                var paginationKey = res.body.nextPaginationKey ? res.body.nextPaginationKey : null;
	                for (var _i = 0, _a = res.body.triggerServerCodeResults; _i < _a.length; _i++) {
	                    var json = _a[_i];
	                    results.push(ServerCodeResult_1.ServerCodeResult.fromJson(json));
	                }
	                resolve(new QueryResult_1.QueryResult(results, paginationKey));
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    return TriggerOps;
	}(BaseOp_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TriggerOps;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Command_1 = __webpack_require__(16);
	var ServerCode_1 = __webpack_require__(21);
	var Predicate_1 = __webpack_require__(22);
	var Trigger = (function () {
	    function Trigger(predicate, command, serverCode) {
	        this.predicate = predicate;
	        this.command = command;
	        this.serverCode = serverCode;
	    }
	    Object.defineProperty(Trigger.prototype, "triggersWhat", {
	        get: function () {
	            if (this.command) {
	                return exports.TriggersWhat.COMMAND;
	            }
	            return exports.TriggersWhat.SERVER_CODE;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Trigger.fromJson = function (obj) {
	        var predicate = Predicate_1.Predicate.fromJson(obj.predicate);
	        var command = obj.command ? Command_1.Command.fromJson(obj.command) : null;
	        var serverCode = obj.serverCode ? ServerCode_1.ServerCode.fromJson(obj.serverCode) : null;
	        var trigger = new Trigger(predicate, command, serverCode);
	        trigger.triggerID = obj.triggerID ? obj.triggerID : null;
	        trigger.disabled = obj.disabled === undefined ? null : obj.disabled;
	        trigger.disabledReason = obj.disabledReason ? obj.disabledReason : null;
	        trigger.title = obj.title ? obj.title : null;
	        trigger.description = obj.description ? obj.description : null;
	        trigger.metadata = obj.metadata ? obj.metadata : null;
	        return trigger;
	    };
	    return Trigger;
	}());
	exports.Trigger = Trigger;
	exports.TriggersWhen = {
	    CONDITION_TRUE: "CONDITION_TRUE",
	    CONDITION_FALSE_TO_TRUE: "CONDITION_FALSE_TO_TRUE",
	    CONDITION_CHANGED: "CONDITION_CHANGED"
	};
	exports.TriggersWhat = {
	    COMMAND: "COMMAND",
	    SERVER_CODE: "SERVER_CODE"
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	var ServerCode = (function () {
	    function ServerCode(endpoint, executorAccessToken, targetAppID, parameters) {
	        this.endpoint = endpoint;
	        this.executorAccessToken = executorAccessToken;
	        this.targetAppID = targetAppID;
	        this.parameters = parameters;
	    }
	    ServerCode.prototype.toJson = function () {
	        var json = { endpoint: this.endpoint };
	        if (this.executorAccessToken) {
	            json["executorAccessToken"] = this.executorAccessToken;
	        }
	        if (this.targetAppID) {
	            json["targetAppID"] = this.targetAppID;
	        }
	        if (this.parameters) {
	            json["parameters"] = this.parameters;
	        }
	        return json;
	    };
	    ServerCode.fromJson = function (obj) {
	        var endpoint = obj.endpoint;
	        var executorAccessToken = obj.executorAccessToken ? obj.executorAccessToken : null;
	        var targetAppID = obj.targetAppID ? obj.targetAppID : null;
	        var parameters = obj.parameters ? obj.parameters : null;
	        return new ServerCode(endpoint, executorAccessToken, targetAppID, parameters);
	    };
	    return ServerCode;
	}());
	exports.ServerCode = ServerCode;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Condition_1 = __webpack_require__(23);
	var Trigger_1 = __webpack_require__(20);
	var Predicate = (function () {
	    function Predicate() {
	    }
	    Predicate.fromJson = function (obj) {
	        if (obj.eventSource == exports.EventSource.STATES) {
	            return StatePredicate.fromJson(obj);
	        }
	        else if (obj.eventSource == exports.EventSource.SCHEDULE) {
	            return SchedulePredicate.fromJson(obj);
	        }
	        else if (obj.eventSource == exports.EventSource.SCHEDULE_ONCE) {
	            return ScheduleOncePredicate.fromJson(obj);
	        }
	        return null;
	    };
	    return Predicate;
	}());
	exports.Predicate = Predicate;
	exports.EventSource = {
	    STATES: "STATES",
	    SCHEDULE: "SCHEDULE",
	    SCHEDULE_ONCE: "SCHEDULE_ONCE"
	};
	var StatePredicate = (function () {
	    function StatePredicate(condition, triggersWhen) {
	        this.condition = condition;
	        this.triggersWhen = triggersWhen;
	    }
	    StatePredicate.prototype.getEventSource = function () {
	        return exports.EventSource.STATES;
	    };
	    StatePredicate.prototype.toJson = function () {
	        return {
	            condition: this.condition.clause.toJson(),
	            eventSource: exports.EventSource.STATES,
	            triggersWhen: this.triggersWhen
	        };
	    };
	    StatePredicate.fromJson = function (obj) {
	        var condition = Condition_1.Condition.fromJson(obj.condition);
	        var triggersWhen = Trigger_1.TriggersWhen[obj.triggersWhen];
	        return new StatePredicate(condition, triggersWhen);
	    };
	    return StatePredicate;
	}());
	exports.StatePredicate = StatePredicate;
	var SchedulePredicate = (function () {
	    function SchedulePredicate(schedule) {
	        this.schedule = schedule;
	    }
	    SchedulePredicate.prototype.getEventSource = function () {
	        return exports.EventSource.SCHEDULE;
	    };
	    SchedulePredicate.prototype.toJson = function () {
	        return {
	            schedule: this.schedule,
	            eventSource: exports.EventSource.SCHEDULE
	        };
	    };
	    SchedulePredicate.fromJson = function (obj) {
	        var schedule = obj.schedule;
	        return new SchedulePredicate(schedule);
	    };
	    return SchedulePredicate;
	}());
	exports.SchedulePredicate = SchedulePredicate;
	var ScheduleOncePredicate = (function () {
	    function ScheduleOncePredicate(scheduleAt) {
	        this.scheduleAt = scheduleAt;
	    }
	    ScheduleOncePredicate.prototype.getEventSource = function () {
	        return exports.EventSource.SCHEDULE_ONCE;
	    };
	    ScheduleOncePredicate.prototype.toJson = function () {
	        return {
	            scheduleAt: this.scheduleAt,
	            eventSource: exports.EventSource.SCHEDULE_ONCE
	        };
	    };
	    ScheduleOncePredicate.fromJson = function (obj) {
	        var scheduleAt = obj.scheduleAt;
	        return new ScheduleOncePredicate(scheduleAt);
	    };
	    return ScheduleOncePredicate;
	}());
	exports.ScheduleOncePredicate = ScheduleOncePredicate;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Clause_1 = __webpack_require__(24);
	var Condition = (function () {
	    function Condition(clause) {
	        this.clause = clause;
	    }
	    Condition.fromJson = function (obj) {
	        return new Condition(Clause_1.Clause.fromJson(obj));
	    };
	    return Condition;
	}());
	exports.Condition = Condition;


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Clause = (function () {
	    function Clause() {
	    }
	    Clause.fromJson = function (obj) {
	        if (obj.type == "eq") {
	            return Equals.fromJson(obj);
	        }
	        else if (obj.type == "not") {
	            return NotEquals.fromJson(obj);
	        }
	        else if (obj.type == "and") {
	            return And.fromJson(obj);
	        }
	        else if (obj.type == "or") {
	            return Or.fromJson(obj);
	        }
	        else if (obj.type == "range") {
	            return Range.fromJson(obj);
	        }
	        return null;
	    };
	    return Clause;
	}());
	exports.Clause = Clause;
	var Equals = (function (_super) {
	    __extends(Equals, _super);
	    function Equals(field, value) {
	        _super.call(this);
	        this.field = field;
	        this.value = value;
	    }
	    Equals.prototype.toJson = function () {
	        return {
	            type: "eq",
	            field: this.field,
	            value: this.value
	        };
	    };
	    Equals.fromJson = function (obj) {
	        var field = obj.field;
	        var value = obj.value;
	        return new Equals(field, value);
	    };
	    return Equals;
	}(Clause));
	exports.Equals = Equals;
	var NotEquals = (function (_super) {
	    __extends(NotEquals, _super);
	    function NotEquals(field, value) {
	        _super.call(this);
	        this.field = field;
	        this.value = value;
	    }
	    NotEquals.prototype.toJson = function () {
	        return {
	            type: "not",
	            clause: {
	                type: "eq",
	                field: this.field,
	                value: this.value
	            }
	        };
	    };
	    NotEquals.fromJson = function (obj) {
	        var field = obj.clause.field;
	        var value = obj.clause.value;
	        return new NotEquals(field, value);
	    };
	    return NotEquals;
	}(Clause));
	exports.NotEquals = NotEquals;
	var And = (function (_super) {
	    __extends(And, _super);
	    function And() {
	        var clauses = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            clauses[_i - 0] = arguments[_i];
	        }
	        _super.call(this);
	        this.clauses = clauses;
	    }
	    And.prototype.toJson = function () {
	        var json = { type: "and" };
	        var clauses = new Array();
	        for (var _i = 0, _a = this.clauses; _i < _a.length; _i++) {
	            var clause = _a[_i];
	            clauses.push(clause.toJson());
	        }
	        json["clauses"] = clauses;
	        return json;
	    };
	    And.fromJson = function (obj) {
	        var clauses = new Array();
	        var array = obj.clauses;
	        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
	            var json = array_1[_i];
	            clauses.push(Clause.fromJson(json));
	        }
	        var and = new And();
	        and.clauses = clauses;
	        return and;
	    };
	    return And;
	}(Clause));
	exports.And = And;
	var Or = (function (_super) {
	    __extends(Or, _super);
	    function Or() {
	        var clauses = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            clauses[_i - 0] = arguments[_i];
	        }
	        _super.call(this);
	        this.clauses = clauses;
	    }
	    Or.prototype.toJson = function () {
	        var json = { type: "or" };
	        var clauses = new Array();
	        for (var _i = 0, _a = this.clauses; _i < _a.length; _i++) {
	            var clause = _a[_i];
	            clauses.push(clause.toJson());
	        }
	        json["clauses"] = clauses;
	        return json;
	    };
	    Or.fromJson = function (obj) {
	        var clauses = new Array();
	        var array = obj.clauses;
	        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
	            var json = array_2[_i];
	            clauses.push(Clause.fromJson(json));
	        }
	        var or = new Or();
	        or.clauses = clauses;
	        return or;
	    };
	    return Or;
	}(Clause));
	exports.Or = Or;
	var Range = (function (_super) {
	    __extends(Range, _super);
	    function Range(field, upperLimit, upperIncluded, lowerLimit, lowerIncluded) {
	        _super.call(this);
	        this.field = field;
	        this.upperLimit = upperLimit;
	        this.upperIncluded = upperIncluded;
	        this.lowerLimit = lowerLimit;
	        this.lowerIncluded = lowerIncluded;
	    }
	    Range.greaterThan = function (field, lowerLimit) {
	        return new Range(field, null, null, lowerLimit, false);
	    };
	    Range.greaterThanEquals = function (field, lowerLimit) {
	        return new Range(field, null, null, lowerLimit, true);
	    };
	    Range.lessThan = function (field, upperLimit) {
	        return new Range(field, upperLimit, false, null, null);
	    };
	    Range.lessThanEquals = function (field, upperLimit) {
	        return new Range(field, upperLimit, true, null, null);
	    };
	    Range.prototype.toJson = function () {
	        var json = { type: "range", field: this.field };
	        if (this.upperLimit != null && this.upperLimit != undefined) {
	            json["upperLimit"] = this.upperLimit;
	        }
	        if (this.upperIncluded != null && this.upperIncluded != undefined) {
	            json["upperIncluded"] = this.upperIncluded;
	        }
	        if (this.lowerLimit != null && this.lowerLimit != undefined) {
	            json["lowerLimit"] = this.lowerLimit;
	        }
	        if (this.lowerIncluded != null && this.lowerIncluded != undefined) {
	            json["lowerIncluded"] = this.lowerIncluded;
	        }
	        return json;
	    };
	    Range.fromJson = function (obj) {
	        var field = obj.field;
	        var upperLimit = obj.upperLimit ? obj.upperLimit : null;
	        var upperIncluded = obj.upperIncluded ? obj.upperIncluded : null;
	        var lowerLimit = obj.lowerLimit ? obj.lowerLimit : null;
	        var lowerIncluded = obj.lowerIncluded ? obj.lowerIncluded : null;
	        return new Range(field, upperLimit, upperIncluded, lowerLimit, lowerIncluded);
	    };
	    return Range;
	}(Clause));
	exports.Range = Range;


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	var ServerCodeResult = (function () {
	    function ServerCodeResult(succeeded, returnedValue, executedAt, endpoint, error) {
	        this.succeeded = succeeded;
	        this.returnedValue = returnedValue;
	        this.executedAt = executedAt;
	        this.endpoint = endpoint;
	        this.error = error;
	    }
	    ServerCodeResult.fromJson = function (obj) {
	        var succeeded = obj.succeeded;
	        var returnedValue = obj.returnedValue ? obj.returnedValue : null;
	        var executedAt = obj.executedAt ? obj.executedAt : null;
	        var endpoint = obj.endpoint ? obj.endpoint : null;
	        var error = obj.error ? ServerError.fromJson(obj.error) : null;
	        return new ServerCodeResult(succeeded, returnedValue, executedAt, endpoint, error);
	    };
	    return ServerCodeResult;
	}());
	exports.ServerCodeResult = ServerCodeResult;
	var ServerError = (function () {
	    function ServerError(errorCode, errorMessage, detailMessage) {
	        this.errorCode = errorCode;
	        this.errorMessage = errorMessage;
	        this.detailMessage = detailMessage;
	    }
	    ServerError.fromJson = function (obj) {
	        var errorMessage = obj.errorMessage;
	        var errorCode = obj.details ? obj.details.errorCode : null;
	        var detailMessage = obj.details ? obj.details.message : null;
	        return new ServerError(errorCode, errorMessage, detailMessage);
	    };
	    return ServerError;
	}());
	exports.ServerError = ServerError;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var es6_promise_1 = __webpack_require__(4);
	var Request_1 = __webpack_require__(5);
	var BaseOp_1 = __webpack_require__(12);
	var StateOps = (function (_super) {
	    __extends(StateOps, _super);
	    function StateOps(au, targetID) {
	        _super.call(this, au);
	        this.au = au;
	        this.targetID = targetID;
	        this.baseUrl = this.au.app.getThingIFBaseUrl() + "/targets/" + this.targetID.toString() + "/states";
	    }
	    StateOps.prototype.getState = function () {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            var req = {
	                method: "GET",
	                headers: _this.getHeaders(),
	                url: _this.baseUrl
	            };
	            Request_1.default(req).then(function (res) {
	                resolve(res.body);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    return StateOps;
	}(BaseOp_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = StateOps;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var es6_promise_1 = __webpack_require__(4);
	var Request_1 = __webpack_require__(5);
	var BaseOp_1 = __webpack_require__(12);
	var KiiUtil = __webpack_require__(9);
	var ThingIFError_1 = __webpack_require__(8);
	var ThingOps = (function (_super) {
	    __extends(ThingOps, _super);
	    function ThingOps(au, thingID) {
	        _super.call(this, au);
	        this.au = au;
	        this.thingID = thingID;
	        this.baseUrl = this.au.app.getKiiCloudBaseUrl() + "/things/" + this.thingID;
	    }
	    ThingOps.prototype.getVendorThingID = function () {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            var req = {
	                method: "GET",
	                headers: _this.getHeaders(),
	                url: _this.baseUrl + "/vendor-thing-id"
	            };
	            Request_1.default(req).then(function (res) {
	                resolve(res.body["_vendorThingID"]);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    ThingOps.prototype.updateVendorThingID = function (newVendorThingID, newPassword) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!newVendorThingID) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "newVendorThingID is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(newVendorThingID)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "newVendorThingID is not string"));
	                return;
	            }
	            if (!newPassword) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "newPassword is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(newPassword)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "newPassword is not string"));
	                return;
	            }
	            var req = {
	                method: "PUT",
	                headers: _this.addHeader("Content-Type", "application/vnd.kii.VendorThingIDUpdateRequest+json"),
	                url: _this.baseUrl + "/vendor-thing-id",
	                body: {
	                    "_vendorThingID": newVendorThingID,
	                    "_password": newPassword
	                }
	            };
	            Request_1.default(req).then(function (res) {
	                resolve();
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    return ThingOps;
	}(BaseOp_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ThingOps;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var es6_promise_1 = __webpack_require__(4);
	var Request_1 = __webpack_require__(5);
	var ThingIFError_1 = __webpack_require__(8);
	var BaseOp_1 = __webpack_require__(12);
	var KiiUtil = __webpack_require__(9);
	var CommandOps = (function (_super) {
	    __extends(CommandOps, _super);
	    function CommandOps(au) {
	        _super.call(this, au);
	        this.au = au;
	    }
	    CommandOps.prototype.installPush = function (requestBody) {
	        var _this = this;
	        var url = this.au.app.getKiiCloudBaseUrl() + "/installations";
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            var headers = _this.addHeaders({ 'Content-Type': 'application/vnd.kii.InstallationCreationRequest+json' });
	            Request_1.default({
	                method: "POST",
	                headers: headers,
	                url: url,
	                body: requestBody,
	            }).then(function (res) {
	                resolve(res);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    CommandOps.prototype.installFCM = function (installationRegistrationID, development) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!installationRegistrationID) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "installationRegistrationID is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(installationRegistrationID)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "installationRegistrationID is not a string"));
	                return;
	            }
	            if (!development) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "development is null"));
	                return;
	            }
	            else if (!KiiUtil.isBoolean(development)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "development is not boolean"));
	                return;
	            }
	            var requestBody = {
	                installationRegistrationID: installationRegistrationID,
	                deviceType: "ANDROID",
	                development: development
	            };
	            _this.installPush(requestBody).then(function (res) {
	                var body = res.body;
	                var installationID = body.installationID;
	                resolve(installationID);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    CommandOps.prototype.uninstall = function (installationID) {
	        var _this = this;
	        var url = this.au.app.getKiiCloudBaseUrl() + "/installations/" + installationID;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (!installationID) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "installationID is null or empty"));
	                return;
	            }
	            else if (!KiiUtil.isString(installationID)) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.ArgumentError, "installationID is not string"));
	                return;
	            }
	            Request_1.default({
	                method: "DELETE",
	                headers: _this.getHeaders(),
	                url: url,
	            }).then(function (res) {
	                resolve();
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    return CommandOps;
	}(BaseOp_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CommandOps;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var es6_promise_1 = __webpack_require__(4);
	function promise(orgPromise, onCompletion) {
	    if (!!onCompletion) {
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            orgPromise.then(function (res) {
	                onCompletion(null, res);
	                resolve(res);
	            }, function (err) {
	                onCompletion(err, null);
	                reject(err);
	            });
	        });
	    }
	    else {
	        return orgPromise;
	    }
	}
	exports.promise = promise;
	function voidPromise(orgPromise, onCompletion) {
	    if (!!onCompletion) {
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            orgPromise.then(function (res) {
	                onCompletion(null);
	                resolve();
	            }, function (err) {
	                onCompletion(err);
	                reject(err);
	            });
	        });
	    }
	    else {
	        return orgPromise;
	    }
	}
	exports.voidPromise = voidPromise;


/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	var App = (function () {
	    function App(appID, appKey, site) {
	        this.appID = appID;
	        this.appKey = appKey;
	        this.site = site;
	    }
	    App.prototype.getThingIFBaseUrl = function () {
	        return this.site + "/thing-if/apps/" + this.appID;
	    };
	    App.prototype.getKiiCloudBaseUrl = function () {
	        return this.site + "/api/apps/" + this.appID;
	    };
	    return App;
	}());
	exports.App = App;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var App_1 = __webpack_require__(30);
	var AppBuilder = (function () {
	    function AppBuilder() {
	    }
	    AppBuilder.buildWithSite = function (appID, appKey, site) {
	        return new App_1.App(appID, appKey, site);
	    };
	    AppBuilder.buildWithHostname = function (appID, appKey, hostname, urlSchema) {
	        if (urlSchema === void 0) { urlSchema = "https"; }
	        return new App_1.App(appID, appKey, urlSchema + "://" + hostname);
	    };
	    return AppBuilder;
	}());
	exports.AppBuilder = AppBuilder;


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	exports.Site = {
	    US: "https://api.kii.com",
	    JP: "https://api-jp.kii.com",
	    CN3: "https://api-cn3.kii.com",
	    SG: "https://api-sg.kii.com",
	    EU: "https://api-eu.kii.com"
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var es6_promise_1 = __webpack_require__(4);
	var TypedID_1 = __webpack_require__(17);
	var APIAuthor_1 = __webpack_require__(2);
	var PromiseWrapper = __webpack_require__(29);
	var ThingIFError_1 = __webpack_require__(8);
	var OnboardingOps_1 = __webpack_require__(3);
	var CommandOps_1 = __webpack_require__(14);
	var TriggerOps_1 = __webpack_require__(19);
	var StateOps_1 = __webpack_require__(26);
	var ThingOps_1 = __webpack_require__(27);
	var PushOps_1 = __webpack_require__(28);
	var ThingIFAPI = (function () {
	    function ThingIFAPI(owner, token, app, target) {
	        this._owner = owner;
	        this._au = new APIAuthor_1.APIAuthor(token, app);
	        this._target = target;
	    }
	    Object.defineProperty(ThingIFAPI.prototype, "token", {
	        get: function () {
	            return this._au.token;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ThingIFAPI.prototype, "app", {
	        get: function () {
	            return this._au.app;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ThingIFAPI.prototype, "target", {
	        get: function () {
	            return this._target;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ThingIFAPI.prototype.onboardWithVendorThingID = function (onboardRequest, onCompletion) {
	        var _this = this;
	        if (!onboardRequest.owner) {
	            onboardRequest.owner = this._owner.toString();
	        }
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            (new OnboardingOps_1.default(_this._au)).onboardWithVendorThingID(onboardRequest).then(function (result) {
	                _this._target = new TypedID_1.TypedID(TypedID_1.Types.Thing, result.thingID);
	                resolve(result);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.onboardWithThingID = function (onboardRequest, onCompletion) {
	        var _this = this;
	        if (!onboardRequest.owner) {
	            onboardRequest.owner = this._owner.toString();
	        }
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            (new OnboardingOps_1.default(_this._au)).onboardWithThingID(onboardRequest).then(function (result) {
	                _this._target = new TypedID_1.TypedID(TypedID_1.Types.Thing, result.thingID);
	                resolve(result);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.postNewCommand = function (command, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            if (!command.issuer) {
	                command.issuer = _this._owner.toString();
	            }
	            (new CommandOps_1.default(_this._au, _this._target)).postNewCommand(command).then(function (cmd) {
	                resolve(cmd);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.getCommand = function (commandID, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new CommandOps_1.default(_this._au, _this._target)).getCommand(commandID).then(function (cmd) {
	                resolve(cmd);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.listCommands = function (listOptions, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new CommandOps_1.default(_this._au, _this._target)).listCommands(listOptions).then(function (result) {
	                resolve(result);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.postCommandTrigger = function (requestObject, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new TriggerOps_1.default(_this._au, _this._target)).postCommandTrigger(requestObject)
	                .then(function (trigger) {
	                resolve(trigger);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.postServerCodeTrigger = function (requestObject, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new TriggerOps_1.default(_this._au, _this._target)).postServerCodeTrigger(requestObject)
	                .then(function (trigger) {
	                resolve(trigger);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.getTrigger = function (triggerID, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new TriggerOps_1.default(_this._au, _this._target)).getTrigger(triggerID)
	                .then(function (trigger) {
	                resolve(trigger);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.patchCommandTrigger = function (triggerID, requestObject, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new TriggerOps_1.default(_this._au, _this._target)).patchCommandTrigger(triggerID, requestObject)
	                .then(function (trigger) {
	                resolve(trigger);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.patchServerCodeTrigger = function (triggerID, requestObject, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new TriggerOps_1.default(_this._au, _this._target)).patchServerCodeTrigger(triggerID, requestObject)
	                .then(function (trigger) {
	                resolve(trigger);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.enableTrigger = function (triggerID, enable, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new TriggerOps_1.default(_this._au, _this._target)).enableTrigger(triggerID, enable)
	                .then(function (trigger) {
	                resolve(trigger);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.deleteTrigger = function (triggerID, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new TriggerOps_1.default(_this._au, _this._target)).deleteTrigger(triggerID)
	                .then(function (triggerID) {
	                resolve(triggerID);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.listTriggers = function (listOptions, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new TriggerOps_1.default(_this._au, _this._target)).listTriggers(listOptions)
	                .then(function (triggers) {
	                resolve(triggers);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.listServerCodeExecutionResults = function (triggerID, listOptions, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new TriggerOps_1.default(_this._au, _this._target)).listServerCodeResults(triggerID, listOptions)
	                .then(function (results) {
	                resolve(results);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.getState = function (onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new StateOps_1.default(_this._au, _this._target)).getState().then(function (state) {
	                resolve(state);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.getVendorThingID = function (onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new ThingOps_1.default(_this._au, _this._target.id)).getVendorThingID().then(function (vendorThingID) {
	                resolve(vendorThingID);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.updateVendorThingID = function (newVendorThingID, newPassword, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new ThingOps_1.default(_this._au, _this._target.id)).updateVendorThingID(newVendorThingID, newPassword).then(function () {
	                resolve();
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.voidPromise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.installFCM = function (installationRegistrationID, development, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new PushOps_1.default(_this._au)).installFCM(installationRegistrationID, development)
	                .then(function (installationID) {
	                resolve(installationID);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.promise(orgPromise, onCompletion);
	    };
	    ThingIFAPI.prototype.uninstallPush = function (installationID, onCompletion) {
	        var _this = this;
	        var orgPromise = new es6_promise_1.Promise(function (resolve, reject) {
	            if (!_this._target) {
	                reject(new ThingIFError_1.ThingIFError(ThingIFError_1.Errors.IlllegalStateError, "target is null, please onboard first"));
	                return;
	            }
	            (new PushOps_1.default(_this._au)).uninstall(installationID)
	                .then(function () {
	                resolve();
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	        return PromiseWrapper.voidPromise(orgPromise, onCompletion);
	    };
	    return ThingIFAPI;
	}());
	exports.ThingIFAPI = ThingIFAPI;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=thing-if-sdk.js.map