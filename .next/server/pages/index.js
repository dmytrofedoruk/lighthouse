module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./app/components/CircularProgress/index.js":
/*!**************************************************!*\
  !*** ./app/components/CircularProgress/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CircularProgress = ({
  className
}) => __jsx("div", {
  className: `loader ${className}`
}, __jsx("img", {
  src: "/images/loader.svg",
  alt: "loader",
  style: {
    height: 60
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (CircularProgress);
CircularProgress.defaultProps = {
  className: ''
};

/***/ }),

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Dashboard = () => {
  return __jsx("div", null, "HI, This is a sample page so you can start from here");
};
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin */ "./pages/signin.js");
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/use-auth */ "./util/use-auth.js");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard */ "./pages/dashboard/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const homePage = () => {
  const {
    authUser
  } = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_2__["useAuth"])();
  return authUser ? __jsx(_dashboard__WEBPACK_IMPORTED_MODULE_3__["default"], null) : __jsx(_signin__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};
/* harmony default export */ __webpack_exports__["default"] = (homePage);

/***/ }),

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/asyncComponent */ "./util/asyncComponent.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SignIn = Object(_util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../routes/userAuth/SignIn */ "./routes/userAuth/SignIn/index.js")));
const SignInPage = () => __jsx(SignIn, null);
/* harmony default export */ __webpack_exports__["default"] = (SignInPage);

/***/ }),

/***/ "./util/Api.js":
/*!*********************!*\
  !*** ./util/Api.js ***!
  \*********************/
/*! exports provided: httpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpClient", function() { return httpClient; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const httpClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `http://g-axon.work/jwtauth/api/`,
  //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json'
  }
});

/***/ }),

/***/ "./util/asyncComponent.js":
/*!********************************!*\
  !*** ./util/asyncComponent.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return asyncComponent; });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/components/CircularProgress */ "./app/components/CircularProgress/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function asyncComponent(importComponent) {
  return next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(importComponent, {
    loading: () => __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  });
}

/***/ }),

/***/ "./util/use-auth.js":
/*!**************************!*\
  !*** ./util/use-auth.js ***!
  \**************************/
/*! exports provided: AuthProvider, useAuth, isUnRestrictedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnRestrictedRoute", function() { return isUnRestrictedRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api */ "./util/Api.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

// Provider component that wraps app and makes auth object ..
// ... available to any child component that calls useAuth().

function AuthProvider({
  children
}) {
  const auth = useProvideAuth();
  return __jsx(authContext.Provider, {
    value: auth
  }, children);
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.

const useAuth = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(authContext);
};
const useProvideAuth = () => {
  const {
    0: authUser,
    1: setAuthUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: isLoadingUser,
    1: setLoadingUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const fetchStart = () => {
    setLoading(true);
    setError('');
  };
  const fetchSuccess = () => {
    setLoading(false);
    setError('');
  };
  const fetchError = error => {
    setLoading(false);
    setError(error);
  };
  const userLogin = (data, callbackFun) => {
    fetchStart();
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post('auth/login', data).then(({
      data
    }) => {
      if (data.result) {
        fetchSuccess();
        _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;
        const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
        cookies.set('token', data.token.access_token);
        getAuthUser();
        console.log(callbackFun);
        if (callbackFun) callbackFun();
      } else {
        fetchError(data.error);
      }
    }).catch(function (error) {
      fetchError(error.message);
    });
  };
  const userSignup = (data, callbackFun) => {
    fetchStart();
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post('auth/register', data).then(({
      data
    }) => {
      if (data.result) {
        fetchSuccess();
        _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;
        const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
        cookies.set('token', data.token.access_token);
        if (callbackFun) callbackFun();
      } else {
        fetchError(data.error);
      }
    }).catch(function (error) {
      fetchError(error.message);
    });
  };
  const userSignOut = callbackFun => {
    fetchStart();
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post('auth/logout').then(({
      data
    }) => {
      if (data.result) {
        fetchSuccess();
        setAuthUser(false);
        _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = '';
        const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
        cookies.remove('token');
        if (callbackFun) callbackFun();
      } else {
        fetchError(data.error);
      }
    }).catch(function (error) {
      fetchError(error.message);
    });
  };
  const getAuthUser = () => {
    fetchStart();
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post("auth/me").then(({
      data
    }) => {
      if (data.user) {
        fetchSuccess();
        setAuthUser(data.user);
      } else {
        fetchError(data.error);
      }
    }).catch(function (error) {
      _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = '';
      fetchError(error.message);
    });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
    const token = cookies.get("token");
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = 'Bearer ' + token;
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post("auth/me").then(({
      data
    }) => {
      if (data.user) {
        setAuthUser(data.user);
      }
      setLoadingUser(false);
    }).catch(function (error) {
      cookies.remove('token');
      _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = '';
      setLoadingUser(false);
    });
  }, []);

  // Return the user object and auth methods
  return {
    isLoadingUser,
    isLoading,
    authUser,
    error,
    setAuthUser,
    getAuthUser,
    userLogin,
    userSignup,
    userSignOut
  };
};
const isUnRestrictedRoute = pathname => {
  return pathname === '/signin' || pathname === '/signup' || pathname === '/forgot-password' || pathname === '/reset-password';
};

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL2FzeW5jQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3V0aWwvdXNlLWF1dGguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnRsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiJdLCJuYW1lcyI6WyJDaXJjdWxhclByb2dyZXNzIiwiY2xhc3NOYW1lIiwiaGVpZ2h0IiwiZGVmYXVsdFByb3BzIiwiRGFzaGJvYXJkIiwiaG9tZVBhZ2UiLCJhdXRoVXNlciIsInVzZUF1dGgiLCJTaWduSW4iLCJhc3luY0NvbXBvbmVudCIsIlNpZ25JblBhZ2UiLCJodHRwQ2xpZW50IiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImltcG9ydENvbXBvbmVudCIsImR5bmFtaWMiLCJsb2FkaW5nIiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJ1c2VDb250ZXh0Iiwic2V0QXV0aFVzZXIiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZ1VzZXIiLCJzZXRMb2FkaW5nVXNlciIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hTdGFydCIsImZldGNoU3VjY2VzcyIsImZldGNoRXJyb3IiLCJ1c2VyTG9naW4iLCJkYXRhIiwiY2FsbGJhY2tGdW4iLCJwb3N0IiwidGhlbiIsInJlc3VsdCIsImRlZmF1bHRzIiwiY29tbW9uIiwidG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJjb29raWVzIiwiQ29va2llcyIsInNldCIsImdldEF1dGhVc2VyIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwibWVzc2FnZSIsInVzZXJTaWdudXAiLCJ1c2VyU2lnbk91dCIsInJlbW92ZSIsInVzZXIiLCJ1c2VFZmZlY3QiLCJnZXQiLCJpc1VuUmVzdHJpY3RlZFJvdXRlIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBO1FBQ0EsbUNBQW1DO1FBQ25DO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esa0JBQWtCLHFCQUFxQjtRQUN2QztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxjQUFjO1FBQ2QsSUFBSTtRQUNKOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN6SEEsd0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFFMUIsTUFBTUEsZ0JBQWdCLEdBQUcsQ0FBQztFQUFDQztBQUFTLENBQUMsS0FBSztFQUFLLFNBQVMsRUFBRyxVQUFTQSxTQUFVO0FBQUUsR0FDOUU7RUFBSyxHQUFHLEVBQUMsb0JBQW9CO0VBQUMsR0FBRyxFQUFDLFFBQVE7RUFBQyxLQUFLLEVBQUU7SUFBQ0MsTUFBTSxFQUFFO0VBQUU7QUFBRSxFQUFFLENBQzdEO0FBQ1NGLCtFQUFnQixFQUFDO0FBQ2hDQSxnQkFBZ0IsQ0FBQ0csWUFBWSxHQUFHO0VBQzlCRixTQUFTLEVBQUU7QUFDYixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSeUI7QUFDMUIsTUFBTUcsU0FBUyxHQUFHLE1BQU07RUFDdkIsT0FDQyxtQkFBSyxzREFFTCxDQUFNO0FBRVIsQ0FBQztBQUVjQSx3RUFBUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEU7QUFDUTtBQUNPO0FBQ0w7QUFFcEMsTUFBTUMsUUFBUSxHQUFHLE1BQU07RUFDckIsTUFBTTtJQUFDQztFQUFRLENBQUMsR0FBR0MsOERBQU8sRUFBRTtFQUU1QixPQUFPRCxRQUFRLEdBQUcsTUFBQyxrREFBUyxPQUFFLEdBQUcsTUFBQywrQ0FBVSxPQUFFO0FBQ2hELENBQUM7QUFFY0QsdUVBQVEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRztBQUN5QjtBQUVuRCxNQUFNRyxNQUFNLEdBQUdDLG9FQUFjLENBQUMsTUFBTSxtSkFBbUMsQ0FBQztBQUV4RSxNQUFNQyxVQUFVLEdBQUcsTUFBTSxNQUFDLE1BQU0sT0FBRTtBQUVuQkEseUVBQVUsRTs7Ozs7Ozs7Ozs7O0FDUHpCO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBRW5CLE1BQU1DLFVBQVUsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTSxDQUFDO0VBQ3JDQyxPQUFPLEVBQUcsaUNBQWdDO0VBQUU7RUFDNUNDLE9BQU8sRUFBRTtJQUNQLGNBQWMsRUFBRTtFQUNsQjtBQUNGLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BpQztBQUMrQjtBQUN4QztBQUVYLFNBQVNOLGNBQWMsQ0FBQ08sZUFBZSxFQUFFO0VBRXRELE9BQU9DLG1EQUFPLENBQUNELGVBQWUsRUFDNUI7SUFDRUUsT0FBTyxFQUFFLE1BQU0sTUFBQyx3RUFBZ0I7RUFDbEMsQ0FBQyxDQUFDO0FBQ04sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y0RTtBQUMzQztBQUNJO0FBRXJDLE1BQU1DLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXJDO0FBQ0E7O0FBRU8sU0FBU0MsWUFBWSxDQUFDO0VBQUNDO0FBQVEsQ0FBQyxFQUFFO0VBQ3ZDLE1BQU1DLElBQUksR0FBR0MsY0FBYyxFQUFFO0VBQzdCLE9BQU8sTUFBQyxXQUFXLENBQUMsUUFBUTtJQUFDLEtBQUssRUFBRUQ7RUFBSyxHQUFFRCxRQUFRLENBQXdCO0FBQzdFOztBQUVBO0FBQ0E7O0FBRU8sTUFBTWYsT0FBTyxHQUFHLE1BQU07RUFDM0IsT0FBT2tCLHdEQUFVLENBQUNOLFdBQVcsQ0FBQztBQUNoQyxDQUFDO0FBRUQsTUFBTUssY0FBYyxHQUFHLE1BQU07RUFDM0IsTUFBTTtJQUFBLEdBQUNsQixRQUFRO0lBQUEsR0FBRW9CO0VBQVcsSUFBSUMsc0RBQVEsQ0FBQyxJQUFJLENBQUM7RUFDOUMsTUFBTTtJQUFBLEdBQUNDLGFBQWE7SUFBQSxHQUFFQztFQUFjLElBQUlGLHNEQUFRLENBQUMsSUFBSSxDQUFDO0VBQ3RELE1BQU07SUFBQSxHQUFDRyxTQUFTO0lBQUEsR0FBRUM7RUFBVSxJQUFJSixzREFBUSxDQUFDLEtBQUssQ0FBQztFQUMvQyxNQUFNO0lBQUEsR0FBQ0ssS0FBSztJQUFBLEdBQUVDO0VBQVEsSUFBSU4sc0RBQVEsQ0FBQyxFQUFFLENBQUM7RUFFdEMsTUFBTU8sVUFBVSxHQUFHLE1BQU07SUFDdkJILFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDaEJFLFFBQVEsQ0FBQyxFQUFFLENBQUM7RUFDZCxDQUFDO0VBRUQsTUFBTUUsWUFBWSxHQUFHLE1BQU07SUFDekJKLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDakJFLFFBQVEsQ0FBQyxFQUFFLENBQUM7RUFDZCxDQUFDO0VBRUQsTUFBTUcsVUFBVSxHQUFJSixLQUFLLElBQUs7SUFDNUJELFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDakJFLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO0VBQ2pCLENBQUM7RUFFRCxNQUFNSyxTQUFTLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFQyxXQUFXLEtBQUs7SUFDdkNMLFVBQVUsRUFBRTtJQUNadkIsK0NBQVUsQ0FBQzZCLElBQUksQ0FBQyxZQUFZLEVBQUVGLElBQUksQ0FBQyxDQUNoQ0csSUFBSSxDQUFDLENBQUM7TUFBQ0g7SUFBSSxDQUFDLEtBQUs7TUFDaEIsSUFBSUEsSUFBSSxDQUFDSSxNQUFNLEVBQUU7UUFDZlAsWUFBWSxFQUFFO1FBQ2R4QiwrQ0FBVSxDQUFDZ0MsUUFBUSxDQUFDNUIsT0FBTyxDQUFDNkIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsR0FBR04sSUFBSSxDQUFDTyxLQUFLLENBQUNDLFlBQVk7UUFDekYsTUFBTUMsT0FBTyxHQUFHLElBQUlDLG9EQUFPLEVBQUU7UUFDN0JELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLE9BQU8sRUFBRVgsSUFBSSxDQUFDTyxLQUFLLENBQUNDLFlBQVksQ0FBQztRQUM3Q0ksV0FBVyxFQUFFO1FBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixXQUFXLENBQUM7UUFDeEIsSUFBSUEsV0FBVyxFQUFFQSxXQUFXLEVBQUU7TUFDaEMsQ0FBQyxNQUFNO1FBQ0xILFVBQVUsQ0FBQ0UsSUFBSSxDQUFDTixLQUFLLENBQUM7TUFDeEI7SUFDRixDQUFDLENBQUMsQ0FDRHFCLEtBQUssQ0FBQyxVQUFVckIsS0FBSyxFQUFFO01BQ3RCSSxVQUFVLENBQUNKLEtBQUssQ0FBQ3NCLE9BQU8sQ0FBQztJQUMzQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsTUFBTUMsVUFBVSxHQUFHLENBQUNqQixJQUFJLEVBQUVDLFdBQVcsS0FBSztJQUN4Q0wsVUFBVSxFQUFFO0lBQ1p2QiwrQ0FBVSxDQUFDNkIsSUFBSSxDQUFDLGVBQWUsRUFBRUYsSUFBSSxDQUFDLENBQ25DRyxJQUFJLENBQUMsQ0FBQztNQUFDSDtJQUFJLENBQUMsS0FBSztNQUNoQixJQUFJQSxJQUFJLENBQUNJLE1BQU0sRUFBRTtRQUNmUCxZQUFZLEVBQUU7UUFDZHhCLCtDQUFVLENBQUNnQyxRQUFRLENBQUM1QixPQUFPLENBQUM2QixNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsU0FBUyxHQUFHTixJQUFJLENBQUNPLEtBQUssQ0FBQ0MsWUFBWTtRQUN6RixNQUFNQyxPQUFPLEdBQUcsSUFBSUMsb0RBQU8sRUFBRTtRQUM3QkQsT0FBTyxDQUFDRSxHQUFHLENBQUMsT0FBTyxFQUFFWCxJQUFJLENBQUNPLEtBQUssQ0FBQ0MsWUFBWSxDQUFDO1FBQzdDLElBQUlQLFdBQVcsRUFBRUEsV0FBVyxFQUFFO01BQ2hDLENBQUMsTUFBTTtRQUNMSCxVQUFVLENBQUNFLElBQUksQ0FBQ04sS0FBSyxDQUFDO01BQ3hCO0lBQ0YsQ0FBQyxDQUFDLENBQ0RxQixLQUFLLENBQUMsVUFBVXJCLEtBQUssRUFBRTtNQUN0QkksVUFBVSxDQUFDSixLQUFLLENBQUNzQixPQUFPLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELE1BQU1FLFdBQVcsR0FBSWpCLFdBQVcsSUFBSztJQUNuQ0wsVUFBVSxFQUFFO0lBQ1p2QiwrQ0FBVSxDQUFDNkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUMzQkMsSUFBSSxDQUFDLENBQUM7TUFBQ0g7SUFBSSxDQUFDLEtBQUs7TUFDaEIsSUFBSUEsSUFBSSxDQUFDSSxNQUFNLEVBQUU7UUFDZlAsWUFBWSxFQUFFO1FBQ2RULFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDbEJmLCtDQUFVLENBQUNnQyxRQUFRLENBQUM1QixPQUFPLENBQUM2QixNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRTtRQUN4RCxNQUFNRyxPQUFPLEdBQUcsSUFBSUMsb0RBQU8sRUFBRTtRQUM3QkQsT0FBTyxDQUFDVSxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLElBQUlsQixXQUFXLEVBQUVBLFdBQVcsRUFBRTtNQUNoQyxDQUFDLE1BQU07UUFDTEgsVUFBVSxDQUFDRSxJQUFJLENBQUNOLEtBQUssQ0FBQztNQUN4QjtJQUNGLENBQUMsQ0FBQyxDQUNEcUIsS0FBSyxDQUFDLFVBQVVyQixLQUFLLEVBQUU7TUFDdEJJLFVBQVUsQ0FBQ0osS0FBSyxDQUFDc0IsT0FBTyxDQUFDO0lBQzNCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxNQUFNSixXQUFXLEdBQUcsTUFBTTtJQUN4QmhCLFVBQVUsRUFBRTtJQUNadkIsK0NBQVUsQ0FBQzZCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7TUFBQ0g7SUFBSSxDQUFDLEtBQUs7TUFDMUMsSUFBSUEsSUFBSSxDQUFDb0IsSUFBSSxFQUFFO1FBQ2J2QixZQUFZLEVBQUU7UUFDZFQsV0FBVyxDQUFDWSxJQUFJLENBQUNvQixJQUFJLENBQUM7TUFDeEIsQ0FBQyxNQUFNO1FBQ0x0QixVQUFVLENBQUNFLElBQUksQ0FBQ04sS0FBSyxDQUFDO01BQ3hCO0lBQ0YsQ0FBQyxDQUFDLENBQUNxQixLQUFLLENBQUMsVUFBVXJCLEtBQUssRUFBRTtNQUN4QnJCLCtDQUFVLENBQUNnQyxRQUFRLENBQUM1QixPQUFPLENBQUM2QixNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRTtNQUN4RFIsVUFBVSxDQUFDSixLQUFLLENBQUNzQixPQUFPLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0VBQ0osQ0FBQzs7RUFFRDtFQUNBO0VBQ0E7RUFDQTs7RUFFQUssdURBQVMsQ0FBQyxNQUFNO0lBQ1osTUFBTVosT0FBTyxHQUFHLElBQUlDLG9EQUFPLEVBQUU7SUFDN0IsTUFBTUgsS0FBSyxHQUFHRSxPQUFPLENBQUNhLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDbENqRCwrQ0FBVSxDQUFDZ0MsUUFBUSxDQUFDNUIsT0FBTyxDQUFDNkIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsR0FBR0MsS0FBSztJQUV2RWxDLCtDQUFVLENBQUM2QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDO01BQUNIO0lBQUksQ0FBQyxLQUFLO01BQzFDLElBQUlBLElBQUksQ0FBQ29CLElBQUksRUFBRTtRQUNiaEMsV0FBVyxDQUFDWSxJQUFJLENBQUNvQixJQUFJLENBQUM7TUFDeEI7TUFDQTdCLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUN3QixLQUFLLENBQUMsVUFBVXJCLEtBQUssRUFBRTtNQUN4QmUsT0FBTyxDQUFDVSxNQUFNLENBQUMsT0FBTyxDQUFDO01BQ3ZCOUMsK0NBQVUsQ0FBQ2dDLFFBQVEsQ0FBQzVCLE9BQU8sQ0FBQzZCLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFO01BQ3hEZixjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRSxFQUFFLENBQ047O0VBRUQ7RUFDQSxPQUFPO0lBQ0xELGFBQWE7SUFDYkUsU0FBUztJQUNUeEIsUUFBUTtJQUNSMEIsS0FBSztJQUNMTixXQUFXO0lBQ1h3QixXQUFXO0lBQ1hiLFNBQVM7SUFDVGtCLFVBQVU7SUFDVkM7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUVNLE1BQU1LLG1CQUFtQixHQUFJQyxRQUFRLElBQUs7RUFDL0MsT0FBT0EsUUFBUSxLQUFLLFNBQVMsSUFBSUEsUUFBUSxLQUFLLFNBQVMsSUFBSUEsUUFBUSxLQUFLLGtCQUFrQixJQUFJQSxRQUFRLEtBQUssaUJBQWlCO0FBQzlILENBQUMsQzs7Ozs7Ozs7Ozs7QUM1SkQsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2lyY3VsYXJQcm9ncmVzcyA9ICh7Y2xhc3NOYW1lfSkgPT4gPGRpdiBjbGFzc05hbWU9e2Bsb2FkZXIgJHtjbGFzc05hbWV9YH0+XHJcbiAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRlci5zdmdcIiBhbHQ9XCJsb2FkZXJcIiBzdHlsZT17e2hlaWdodDogNjB9fS8+XHJcbjwvZGl2PjtcclxuZXhwb3J0IGRlZmF1bHQgQ2lyY3VsYXJQcm9ncmVzcztcclxuQ2lyY3VsYXJQcm9ncmVzcy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lOiAnJ1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0SEksIFRoaXMgaXMgYSBzYW1wbGUgcGFnZSBzbyB5b3UgY2FuIHN0YXJ0IGZyb20gaGVyZVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWduSW5QYWdlIGZyb20gXCIuL3NpZ25pblwiO1xyXG5pbXBvcnQge3VzZUF1dGh9IGZyb20gXCIuLi91dGlsL3VzZS1hdXRoXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vZGFzaGJvYXJkXCI7XHJcblxyXG5jb25zdCBob21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7YXV0aFVzZXJ9ID0gdXNlQXV0aCgpO1xyXG5cclxuICByZXR1cm4gYXV0aFVzZXIgPyA8RGFzaGJvYXJkLz4gOiA8U2lnbkluUGFnZS8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFzeW5jQ29tcG9uZW50IGZyb20gJy4uL3V0aWwvYXN5bmNDb21wb25lbnQnXHJcblxyXG5jb25zdCBTaWduSW4gPSBhc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoJy4uL3JvdXRlcy91c2VyQXV0aC9TaWduSW4nKSk7XHJcblxyXG5jb25zdCBTaWduSW5QYWdlID0gKCkgPT4gPFNpZ25Jbi8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluUGFnZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBodHRwQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBgaHR0cDovL2ctYXhvbi53b3JrL2p3dGF1dGgvYXBpL2AsIC8vWU9VUl9BUElfVVJMIEhFUkVcclxuICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiLi4vYXBwL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3luY0NvbXBvbmVudChpbXBvcnRDb21wb25lbnQpIHtcclxuXHJcbiAgcmV0dXJuIGR5bmFtaWMoaW1wb3J0Q29tcG9uZW50LFxyXG4gICAge1xyXG4gICAgICBsb2FkaW5nOiAoKSA9PiA8Q2lyY3VsYXJQcm9ncmVzcy8+XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7aHR0cENsaWVudH0gZnJvbSBcIi4vQXBpXCI7XG5pbXBvcnQge0Nvb2tpZXN9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuLy8gUHJvdmlkZXIgY29tcG9uZW50IHRoYXQgd3JhcHMgYXBwIGFuZCBtYWtlcyBhdXRoIG9iamVjdCAuLlxuLy8gLi4uIGF2YWlsYWJsZSB0byBhbnkgY2hpbGQgY29tcG9uZW50IHRoYXQgY2FsbHMgdXNlQXV0aCgpLlxuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuLy8gSG9vayBmb3IgY2hpbGQgY29tcG9uZW50cyB0byBnZXQgdGhlIGF1dGggb2JqZWN0IC4uLlxuLy8gLi4uIGFuZCByZS1yZW5kZXIgd2hlbiBpdCBjaGFuZ2VzLlxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xufTtcblxuY29uc3QgdXNlUHJvdmlkZUF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IFthdXRoVXNlciwgc2V0QXV0aFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmdVc2VyLCBzZXRMb2FkaW5nVXNlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGZldGNoU3RhcnQgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcignJyk7XG4gIH1cblxuICBjb25zdCBmZXRjaFN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgc2V0RXJyb3IoJycpO1xuICB9XG5cbiAgY29uc3QgZmV0Y2hFcnJvciA9IChlcnJvcikgPT4ge1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIHNldEVycm9yKGVycm9yKTtcbiAgfVxuXG4gIGNvbnN0IHVzZXJMb2dpbiA9IChkYXRhLCBjYWxsYmFja0Z1bikgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2F1dGgvbG9naW4nLCBkYXRhKVxuICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyBkYXRhLnRva2VuLmFjY2Vzc190b2tlbjtcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuLmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgZ2V0QXV0aFVzZXIoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjYWxsYmFja0Z1bik7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZldGNoRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1c2VyU2lnbnVwID0gKGRhdGEsIGNhbGxiYWNrRnVuKSA9PiB7XG4gICAgZmV0Y2hTdGFydCgpO1xuICAgIGh0dHBDbGllbnQucG9zdCgnYXV0aC9yZWdpc3RlcicsIGRhdGEpXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xuICAgICAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgICAgIGNvb2tpZXMuc2V0KCd0b2tlbicsIGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIGNhbGxiYWNrRnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVzZXJTaWduT3V0ID0gKGNhbGxiYWNrRnVuKSA9PiB7XG4gICAgZmV0Y2hTdGFydCgpO1xuICAgIGh0dHBDbGllbnQucG9zdCgnYXV0aC9sb2dvdXQnKVxuICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgICBzZXRBdXRoVXNlcihmYWxzZSk7XG4gICAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XG4gICAgICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICAgICAgY29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZldGNoRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRBdXRoVXNlciA9ICgpID0+IHtcbiAgICBmZXRjaFN0YXJ0KCk7XG4gICAgaHR0cENsaWVudC5wb3N0KFwiYXV0aC9tZVwiKS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgIGlmIChkYXRhLnVzZXIpIHtcbiAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgIHNldEF1dGhVc2VyKGRhdGEudXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XG4gICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU3Vic2NyaWJlIHRvIHVzZXIgb24gbW91bnRcbiAgLy8gQmVjYXVzZSB0aGlzIHNldHMgc3RhdGUgaW4gdGhlIGNhbGxiYWNrIGl0IHdpbGwgY2F1c2UgYW55IC4uLlxuICAvLyAuLi4gY29tcG9uZW50IHRoYXQgdXRpbGl6ZXMgdGhpcyBob29rIHRvIHJlLXJlbmRlciB3aXRoIHRoZSAuLi5cbiAgLy8gLi4uIGxhdGVzdCBhdXRoIG9iamVjdC5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcblxuICAgICAgaHR0cENsaWVudC5wb3N0KFwiYXV0aC9tZVwiKS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICAgIHNldEF1dGhVc2VyKGRhdGEudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZ1VzZXIoZmFsc2UpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xuICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnJztcbiAgICAgICAgc2V0TG9hZGluZ1VzZXIoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSwgW11cbiAgKTtcblxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcbiAgcmV0dXJuIHtcbiAgICBpc0xvYWRpbmdVc2VyLFxuICAgIGlzTG9hZGluZyxcbiAgICBhdXRoVXNlcixcbiAgICBlcnJvcixcbiAgICBzZXRBdXRoVXNlcixcbiAgICBnZXRBdXRoVXNlcixcbiAgICB1c2VyTG9naW4sXG4gICAgdXNlclNpZ251cCxcbiAgICB1c2VyU2lnbk91dCxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzVW5SZXN0cmljdGVkUm91dGUgPSAocGF0aG5hbWUpID0+IHtcbiAgcmV0dXJuIHBhdGhuYW1lID09PSAnL3NpZ25pbicgfHwgcGF0aG5hbWUgPT09ICcvc2lnbnVwJyB8fCBwYXRobmFtZSA9PT0gJy9mb3Jnb3QtcGFzc3dvcmQnIHx8IHBhdGhuYW1lID09PSAnL3Jlc2V0LXBhc3N3b3JkJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnRsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=