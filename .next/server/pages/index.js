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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CircularProgress = ({
  className
}) => __jsx("div", {
  className: `loader ${className}`
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
  size: "large"
}));
/* harmony default export */ __webpack_exports__["default"] = (CircularProgress);
CircularProgress.defaultProps = {
  className: ''
};

/***/ }),

/***/ "./app/components/Metrics/TrafficRaiseCard.js":
/*!****************************************************!*\
  !*** ./app/components/Metrics/TrafficRaiseCard.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const data = [{
  name: 'Page A',
  traffic: 200
}, {
  name: 'Page B',
  traffic: 1100
}, {
  name: 'Page C',
  traffic: 800
}, {
  name: 'Page D',
  traffic: 1700
}, {
  name: 'Page D',
  traffic: 600
}, {
  name: 'Page D',
  traffic: 1800
}, {
  name: 'Page D',
  traffic: 600
}];
const TrafficRaiseCard = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "gx-align-items-center"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24
  }, __jsx("div", {
    className: "gx-actchart gx-px-3"
  }, __jsx("p", {
    className: "gx-mb-3 gx-text-light"
  }, "Lorem ipsum"), __jsx("h2", {
    className: "gx-fs-xxxl gx-font-weight-medium gx-mb-1 gx-text-black"
  }, "950.22")))));
};
/* harmony default export */ __webpack_exports__["default"] = (TrafficRaiseCard);

/***/ }),

/***/ "./app/components/Widget/index.js":
/*!****************************************!*\
  !*** ./app/components/Widget/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Widget = ({
  title,
  children,
  styleName,
  cover,
  extra,
  actions
}) => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: title,
    actions: actions,
    cover: cover,
    className: `gx-card-widget ${styleName}`,
    extra: extra
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (Widget);
Widget.defaultProps = {
  styleName: ''
};
Widget.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  extra: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  cover: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_Metrics_TrafficRaiseCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/components/Metrics/TrafficRaiseCard */ "./app/components/Metrics/TrafficRaiseCard.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TabPane = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"].TabPane;
const Dashboard = () => {
  const callback = key => {};
  return __jsx("div", null, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, __jsx("h1", {
    className: "gx-font-weight-semi-bold",
    style: {
      fontSize: "30px"
    }
  }, "Lorem ipsum dolor"), __jsx("div", {
    style: {
      width: "33%",
      marginTop: "20px"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      background: "#fff",
      border: "1px solid #C2C2C2",
      width: "38%"
    },
    htmlType: "button"
  }, "+ Lorem ipsum"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      background: "#D3F36B",
      border: "1px solid #C2C2C2",
      width: "38%"
    },
    htmlType: "button"
  }, "+ Lorem ipsum"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "3",
    onChange: callback
  }, __jsx(TabPane, {
    tab: "Lorem",
    key: "1"
  }), __jsx(TabPane, {
    tab: "Ipsum",
    key: "2"
  }), __jsx(TabPane, {
    tab: "Dolor",
    key: "3"
  })), __jsx("div", {
    className: "search-bar"
  }, __jsx("img", {
    style: {
      width: "15px"
    },
    src: "/images/search.svg"
  }), __jsx("span", {
    className: "gx-ml-2 gx-text-light"
  }, "Search"), __jsx("div", {
    style: {
      float: "right"
    },
    className: "gx-mr-4"
  }, __jsx("img", {
    style: {
      width: "13px"
    },
    src: "/images/share.svg"
  }), __jsx("span", {
    className: "gx-ml-1"
  }, "Share")), __jsx("div", {
    style: {
      float: "right"
    },
    className: "gx-mr-4"
  }, __jsx("img", {
    style: {
      width: "16px"
    },
    src: "/images/sortby.svg"
  }), __jsx("span", {
    className: "gx-ml-1"
  }, "Sort By"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "gx-mt-4"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 8,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Metrics_TrafficRaiseCard__WEBPACK_IMPORTED_MODULE_2__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 8,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Metrics_TrafficRaiseCard__WEBPACK_IMPORTED_MODULE_2__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 8,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Metrics_TrafficRaiseCard__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
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
  baseURL: `https://api.sevensafeservices.com/api/`,
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
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post('login', data).then(({
      data
    }) => {
      if (data) {
        fetchSuccess();
        _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
        const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
        cookies.set('token', data.token);
        getAuthUser();
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
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post('logout').then(({
      data
    }) => {
      if (data) {
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
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].get('me').then(({
      data
    }) => {
      if (data) {
        fetchSuccess();
        setAuthUser(data);
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
      // cookies.remove('token');
      // httpClient.defaults.headers.common['Authorization'] = '';
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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTWV0cmljcy9UcmFmZmljUmFpc2VDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1dpZGdldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2lnbmluLmpzIiwid2VicGFjazovLy8uL3V0aWwvQXBpLmpzIiwid2VicGFjazovLy8uL3V0aWwvYXN5bmNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC91c2UtYXV0aC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnRsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWNoYXJ0c1wiIl0sIm5hbWVzIjpbIkNpcmN1bGFyUHJvZ3Jlc3MiLCJjbGFzc05hbWUiLCJkZWZhdWx0UHJvcHMiLCJkYXRhIiwibmFtZSIsInRyYWZmaWMiLCJUcmFmZmljUmFpc2VDYXJkIiwiV2lkZ2V0IiwidGl0bGUiLCJjaGlsZHJlbiIsInN0eWxlTmFtZSIsImNvdmVyIiwiZXh0cmEiLCJhY3Rpb25zIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJUYWJQYW5lIiwiVGFicyIsIkRhc2hib2FyZCIsImNhbGxiYWNrIiwia2V5IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJmbG9hdCIsImhvbWVQYWdlIiwiYXV0aFVzZXIiLCJ1c2VBdXRoIiwiU2lnbkluIiwiYXN5bmNDb21wb25lbnQiLCJTaWduSW5QYWdlIiwiaHR0cENsaWVudCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJpbXBvcnRDb21wb25lbnQiLCJkeW5hbWljIiwibG9hZGluZyIsImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUNvbnRleHQiLCJzZXRBdXRoVXNlciIsInVzZVN0YXRlIiwiaXNMb2FkaW5nVXNlciIsInNldExvYWRpbmdVc2VyIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaFN0YXJ0IiwiZmV0Y2hTdWNjZXNzIiwiZmV0Y2hFcnJvciIsInVzZXJMb2dpbiIsImNhbGxiYWNrRnVuIiwicG9zdCIsInRoZW4iLCJkZWZhdWx0cyIsImNvbW1vbiIsInRva2VuIiwiY29va2llcyIsIkNvb2tpZXMiLCJzZXQiLCJnZXRBdXRoVXNlciIsImNhdGNoIiwibWVzc2FnZSIsInVzZXJTaWdudXAiLCJyZXN1bHQiLCJhY2Nlc3NfdG9rZW4iLCJ1c2VyU2lnbk91dCIsInJlbW92ZSIsImdldCIsInVzZUVmZmVjdCIsInVzZXIiLCJpc1VuUmVzdHJpY3RlZFJvdXRlIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFF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eUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBDaXJjdWxhclByb2dyZXNzID0gKHtjbGFzc05hbWV9KSA9PiA8ZGl2IGNsYXNzTmFtZT17YGxvYWRlciAke2NsYXNzTmFtZX1gfT5cclxuICAgPFNwaW4gc2l6ZT1cImxhcmdlXCIgLz5cclxuPC9kaXY+O1xyXG5leHBvcnQgZGVmYXVsdCBDaXJjdWxhclByb2dyZXNzO1xyXG5DaXJjdWxhclByb2dyZXNzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjbGFzc05hbWU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0xpbmUsIExpbmVDaGFydCwgUmVzcG9uc2l2ZUNvbnRhaW5lciwgVG9vbHRpcH0gZnJvbSBcInJlY2hhcnRzXCI7XHJcbmltcG9ydCB7Q29sLCBSb3d9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7bmFtZTogJ1BhZ2UgQScsIHRyYWZmaWM6IDIwMH0sXHJcbiAge25hbWU6ICdQYWdlIEInLCB0cmFmZmljOiAxMTAwfSxcclxuICB7bmFtZTogJ1BhZ2UgQycsIHRyYWZmaWM6IDgwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCB0cmFmZmljOiAxNzAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHRyYWZmaWM6IDYwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCB0cmFmZmljOiAxODAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHRyYWZmaWM6IDYwMH0sXHJcbl07XHJcblxyXG5jb25zdCBUcmFmZmljUmFpc2VDYXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2lkZ2V0PlxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cImd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYWN0Y2hhcnQgZ3gtcHgtM1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtbWItMyBneC10ZXh0LWxpZ2h0XCI+TG9yZW0gaXBzdW08L3A+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJneC1mcy14eHhsIGd4LWZvbnQtd2VpZ2h0LW1lZGl1bSBneC1tYi0xIGd4LXRleHQtYmxhY2tcIj45NTAuMjJcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIHsvKiA8Q29sIGxnPXsxMn0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9ezEwMH0+XHJcbiAgICAgICAgICAgIDxMaW5lQ2hhcnQgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49e3t0b3A6IDUsIHJpZ2h0OiA1LCBsZWZ0OiA1LCBib3R0b206IDV9fT5cclxuICAgICAgICAgICAgICA8VG9vbHRpcC8+XHJcbiAgICAgICAgICAgICAgPExpbmUgZGF0YUtleT1cInRyYWZmaWNcIiBzdHJva2U9XCIjMDM4RkRFXCIgc3Ryb2tlV2lkdGg9ezJ9Lz5cclxuICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XHJcbiAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFmZmljUmFpc2VDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHt0aXRsZSwgY2hpbGRyZW4sIHN0eWxlTmFtZSwgY292ZXIsIGV4dHJhLCBhY3Rpb25zfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgdGl0bGU9e3RpdGxlfSBhY3Rpb25zPXthY3Rpb25zfSBjb3Zlcj17Y292ZXJ9IGNsYXNzTmFtZT17YGd4LWNhcmQtd2lkZ2V0ICR7c3R5bGVOYW1lfWB9IGV4dHJhPXtleHRyYX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FyZD5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XHJcbldpZGdldC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc3R5bGVOYW1lOiAnJyxcclxufTtcclxuXHJcbldpZGdldC5wcm9wVHlwZXMgPSB7XHJcbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxyXG4gIGV4dHJhOiBQcm9wVHlwZXMubm9kZSxcclxuICBjb3ZlcjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgYWN0aW9uczogUHJvcFR5cGVzLm5vZGUsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb2wsIFRhYnMsIEJ1dHRvbiwgUm93fSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgVHJhZmZpY1JhaXNlQ2FyZCBmcm9tIFwiLi4vLi4vYXBwL2NvbXBvbmVudHMvTWV0cmljcy9UcmFmZmljUmFpc2VDYXJkXCI7XHJcblxyXG5jb25zdCBUYWJQYW5lID0gVGFicy5UYWJQYW5lO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG5cdGNvbnN0IGNhbGxiYWNrID0gKGtleSkgPT4ge1xyXG59O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQnIHN0eWxlPXt7Zm9udFNpemU6IFwiMzBweFwifX0+TG9yZW0gaXBzdW0gZG9sb3I8L2gxPlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3sgICAgd2lkdGg6IFwiMzMlXCIsbWFyZ2luVG9wOiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI2ZmZlwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNDMkMyQzJcIiwgd2lkdGg6IFwiMzglXCJ9fSBodG1sVHlwZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQrIExvcmVtIGlwc3VtXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiZ3gtbWItMCBkZXNpZ24tYnV0dG9uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcIiNEM0YzNkJcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjQzJDMkMyXCIsIHdpZHRoOiBcIjM4JVwifX0gaHRtbFR5cGU9XCJidXR0b25cIj5cclxuXHRcdFx0XHRcdFx0KyBMb3JlbSBpcHN1bVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHRcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIzXCIgb25DaGFuZ2U9e2NhbGxiYWNrfT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJMb3JlbVwiIGtleT1cIjFcIj48L1RhYlBhbmU+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiSXBzdW1cIiBrZXk9XCIyXCI+PC9UYWJQYW5lPlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIkRvbG9yXCIga2V5PVwiM1wiPjwvVGFiUGFuZT5cclxuXHRcdFx0PC9UYWJzPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLWJhcic+XHJcblx0XHRcdFx0PGltZyBzdHlsZT17e3dpZHRoOiBcIjE1cHhcIn19IHNyYz0nL2ltYWdlcy9zZWFyY2guc3ZnJy8+PHNwYW4gY2xhc3NOYW1lPSdneC1tbC0yIGd4LXRleHQtbGlnaHQnPlNlYXJjaDwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19IGNsYXNzTmFtZT1cImd4LW1yLTRcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxM3B4XCJ9fSBzcmM9Jy9pbWFnZXMvc2hhcmUuc3ZnJy8+PHNwYW4gY2xhc3NOYW1lPSdneC1tbC0xJz5TaGFyZTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19IGNsYXNzTmFtZT1cImd4LW1yLTRcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxNnB4XCJ9fSBzcmM9Jy9pbWFnZXMvc29ydGJ5LnN2ZycvPjxzcGFuIGNsYXNzTmFtZT0nZ3gtbWwtMSc+U29ydCBCeTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Um93IGNsYXNzTmFtZT0nZ3gtbXQtNCc+XHJcblx0XHRcdFx0PENvbCB4bD17OH0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geHM9ezI0fT5cclxuXHRcdFx0XHRcdDxUcmFmZmljUmFpc2VDYXJkLz5cclxuXHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHQ8Q29sIHhsPXs4fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MjR9PlxyXG5cdFx0XHRcdFx0PFRyYWZmaWNSYWlzZUNhcmQvPlxyXG5cdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdDxDb2wgeGw9ezh9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcblx0XHRcdFx0XHQ8VHJhZmZpY1JhaXNlQ2FyZC8+XHJcblx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdDwvUm93PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWduSW5QYWdlIGZyb20gXCIuL3NpZ25pblwiO1xyXG5pbXBvcnQge3VzZUF1dGh9IGZyb20gXCIuLi91dGlsL3VzZS1hdXRoXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vZGFzaGJvYXJkXCI7XHJcblxyXG5jb25zdCBob21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7YXV0aFVzZXJ9ID0gdXNlQXV0aCgpO1xyXG5cclxuICByZXR1cm4gYXV0aFVzZXIgPyA8RGFzaGJvYXJkLz4gOiA8U2lnbkluUGFnZS8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFzeW5jQ29tcG9uZW50IGZyb20gJy4uL3V0aWwvYXN5bmNDb21wb25lbnQnXHJcblxyXG5jb25zdCBTaWduSW4gPSBhc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoJy4uL3JvdXRlcy91c2VyQXV0aC9TaWduSW4nKSk7XHJcblxyXG5jb25zdCBTaWduSW5QYWdlID0gKCkgPT4gPFNpZ25Jbi8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluUGFnZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBodHRwQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBgaHR0cHM6Ly9hcGkuc2V2ZW5zYWZlc2VydmljZXMuY29tL2FwaS9gLCAvL1lPVVJfQVBJX1VSTCBIRVJFXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXN5bmNDb21wb25lbnQoaW1wb3J0Q29tcG9uZW50KSB7XHJcblxyXG4gIHJldHVybiBkeW5hbWljKGltcG9ydENvbXBvbmVudCxcclxuICAgIHtcclxuICAgICAgbG9hZGluZzogKCkgPT4gPENpcmN1bGFyUHJvZ3Jlc3MvPlxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2h0dHBDbGllbnR9IGZyb20gXCIuL0FwaVwiO1xuaW1wb3J0IHtDb29raWVzfSBmcm9tIFwicmVhY3QtY29va2llXCI7XG5cbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5cbi8vIFByb3ZpZGVyIGNvbXBvbmVudCB0aGF0IHdyYXBzIGFwcCBhbmQgbWFrZXMgYXV0aCBvYmplY3QgLi5cbi8vIC4uLiBhdmFpbGFibGUgdG8gYW55IGNoaWxkIGNvbXBvbmVudCB0aGF0IGNhbGxzIHVzZUF1dGgoKS5cblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7Y2hpbGRyZW59KSB7XG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbi8vIEhvb2sgZm9yIGNoaWxkIGNvbXBvbmVudHMgdG8gZ2V0IHRoZSBhdXRoIG9iamVjdCAuLi5cbi8vIC4uLiBhbmQgcmUtcmVuZGVyIHdoZW4gaXQgY2hhbmdlcy5cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcbn07XG5cbmNvbnN0IHVzZVByb3ZpZGVBdXRoID0gKCkgPT4ge1xuICBjb25zdCBbYXV0aFVzZXIsIHNldEF1dGhVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nVXNlciwgc2V0TG9hZGluZ1VzZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBmZXRjaFN0YXJ0ID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IoJycpO1xuICB9XG5cbiAgY29uc3QgZmV0Y2hTdWNjZXNzID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIHNldEVycm9yKCcnKTtcbiAgfVxuXG4gIGNvbnN0IGZldGNoRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBzZXRFcnJvcihlcnJvcik7XG4gIH1cblxuICBjb25zdCB1c2VyTG9naW4gPSAoZGF0YSwgY2FsbGJhY2tGdW4pID0+IHtcbiAgICBmZXRjaFN0YXJ0KCk7XG4gICAgaHR0cENsaWVudC5wb3N0KCdsb2dpbicsIGRhdGEpXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgZGF0YS50b2tlbjtcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuKTtcbiAgICAgICAgICBnZXRBdXRoVXNlcigpO1xuICAgICAgICAgIGlmIChjYWxsYmFja0Z1bikgY2FsbGJhY2tGdW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXNlclNpZ251cCA9IChkYXRhLCBjYWxsYmFja0Z1bikgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2F1dGgvcmVnaXN0ZXInLCBkYXRhKVxuICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyBkYXRhLnRva2VuLmFjY2Vzc190b2tlbjtcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuLmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZldGNoRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1c2VyU2lnbk91dCA9IChjYWxsYmFja0Z1bikgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2xvZ291dCcpXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgICAgc2V0QXV0aFVzZXIoZmFsc2UpO1xuICAgICAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICcnO1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgICAgIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xuICAgICAgICAgIGlmIChjYWxsYmFja0Z1bikgY2FsbGJhY2tGdW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0QXV0aFVzZXIgPSAoKSA9PiB7XG4gICAgZmV0Y2hTdGFydCgpO1xuICAgIGh0dHBDbGllbnQuZ2V0KCdtZScpLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgIHNldEF1dGhVc2VyKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICcnO1xuICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFN1YnNjcmliZSB0byB1c2VyIG9uIG1vdW50XG4gIC8vIEJlY2F1c2UgdGhpcyBzZXRzIHN0YXRlIGluIHRoZSBjYWxsYmFjayBpdCB3aWxsIGNhdXNlIGFueSAuLi5cbiAgLy8gLi4uIGNvbXBvbmVudCB0aGF0IHV0aWxpemVzIHRoaXMgaG9vayB0byByZS1yZW5kZXIgd2l0aCB0aGUgLi4uXG4gIC8vIC4uLiBsYXRlc3QgYXV0aCBvYmplY3QuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgY29uc3QgdG9rZW4gPSBjb29raWVzLmdldChcInRva2VuXCIpO1xuICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgdG9rZW47XG5cbiAgICAgIGh0dHBDbGllbnQucG9zdChcImF1dGgvbWVcIikudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnVzZXIpIHtcbiAgICAgICAgICBzZXRBdXRoVXNlcihkYXRhLnVzZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNldExvYWRpbmdVc2VyKGZhbHNlKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAvLyBjb29raWVzLnJlbW92ZSgndG9rZW4nKTtcbiAgICAgICAgLy8gaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XG4gICAgICAgIHNldExvYWRpbmdVc2VyKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0sIFtdXG4gICk7XG5cbiAgLy8gUmV0dXJuIHRoZSB1c2VyIG9iamVjdCBhbmQgYXV0aCBtZXRob2RzXG4gIHJldHVybiB7XG4gICAgaXNMb2FkaW5nVXNlcixcbiAgICBpc0xvYWRpbmcsXG4gICAgYXV0aFVzZXIsXG4gICAgZXJyb3IsXG4gICAgc2V0QXV0aFVzZXIsXG4gICAgZ2V0QXV0aFVzZXIsXG4gICAgdXNlckxvZ2luLFxuICAgIHVzZXJTaWdudXAsXG4gICAgdXNlclNpZ25PdXQsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBpc1VuUmVzdHJpY3RlZFJvdXRlID0gKHBhdGhuYW1lKSA9PiB7XG4gIHJldHVybiBwYXRobmFtZSA9PT0gJy9zaWduaW4nIHx8IHBhdGhuYW1lID09PSAnL3NpZ251cCcgfHwgcGF0aG5hbWUgPT09ICcvZm9yZ290LXBhc3N3b3JkJyB8fCBwYXRobmFtZSA9PT0gJy9yZXNldC1wYXNzd29yZCc7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnRsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY2hhcnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=