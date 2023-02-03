module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./app/components/AppLink/index.js":
/*!*****************************************!*\
  !*** ./app/components/AppLink/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AppLink = ({
  href,
  children
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href
  }, __jsx("a", null, children));
};
/* harmony default export */ __webpack_exports__["default"] = (AppLink);

/***/ }),

/***/ "./app/components/AppNotification/NotificationItem.js":
/*!************************************************************!*\
  !*** ./app/components/AppNotification/NotificationItem.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NotificationItem = ({
  notification
}) => {
  const {
    icon,
    image,
    title,
    time
  } = notification;
  return __jsx("li", {
    className: "gx-media"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40 gx-mr-3",
    alt: image,
    src: image
  }), __jsx("div", {
    className: "gx-media-body gx-align-self-center"
  }, __jsx("p", {
    className: "gx-fs-sm gx-mb-0"
  }, title), __jsx("i", {
    className: `icon icon-${icon} gx-pr-2`
  }), " ", __jsx("span", {
    className: "gx-meta-date"
  }, __jsx("small", null, time))));
};
/* harmony default export */ __webpack_exports__["default"] = (NotificationItem);

/***/ }),

/***/ "./app/components/AppNotification/data.js":
/*!************************************************!*\
  !*** ./app/components/AppNotification/data.js ***!
  \************************************************/
/*! exports provided: notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifications", function() { return notifications; });
const notifications = [{
  image: 'https://via.placeholder.com/150x150',
  title: "Stella Johnson has recently posted an album",
  time: "4:10 PM",
  icon: "thumb-up gx-text-blue"
}, {
  image: 'https://via.placeholder.com/150x150',
  title: "Alex Brown has shared Martin Guptil's post",
  time: "5:18 PM",
  icon: "chat gx-text-grey"
}, {
  image: 'https://via.placeholder.com/640x420',
  title: "Domnic Brown has sent you a group invitation for Global Health",
  time: "5:36 PM",
  icon: "birthday text-info"
}, {
  image: 'https://via.placeholder.com/150x150',
  title: "John Smith has birthday today",
  time: "5:54 PM",
  icon: "birthday gx-text-warning"
}, {
  image: 'https://via.placeholder.com/150x150',
  title: "Chris has updated his profile picture",
  time: "5:25 PM",
  icon: "profile gx-text-grey"
}];

/***/ }),

/***/ "./app/components/AppNotification/index.js":
/*!*************************************************!*\
  !*** ./app/components/AppNotification/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationItem */ "./app/components/AppNotification/NotificationItem.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./app/components/AppNotification/data.js");
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AppNotification = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "gx-popover-header"
  }, __jsx("h3", {
    className: "gx-mb-0"
  }, "Notifications"), __jsx("i", {
    className: "gx-icon-btn icon icon-charvlet-down"
  })), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "gx-popover-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _data__WEBPACK_IMPORTED_MODULE_2__["notifications"].map((notification, index) => __jsx(_NotificationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    notification: notification
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (AppNotification);

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

/***/ "./app/components/MailNotification/NotificationItem.js":
/*!*************************************************************!*\
  !*** ./app/components/MailNotification/NotificationItem.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NotificationItem = ({
  notification
}) => {
  const {
    image,
    badge,
    name,
    time,
    message
  } = notification;
  return __jsx("li", {
    className: "gx-media"
  }, __jsx("div", {
    className: "gx-user-thumb gx-mr-3"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40",
    alt: image,
    src: image
  }), badge > 0 ? __jsx("span", {
    className: "gx-badge gx-badge-danger gx-text-white gx-rounded-circle"
  }, badge) : null), __jsx("div", {
    className: "gx-media-body"
  }, __jsx("div", {
    className: "gx-flex-row gx-justify-content-between gx-align-items-center"
  }, __jsx("h5", {
    className: "gx-text-capitalize gx-user-name gx-mb-0"
  }, __jsx("span", {
    className: "gx-link"
  }, name)), __jsx("span", {
    className: "gx-meta-date"
  }, __jsx("small", null, time))), __jsx("p", {
    className: "gx-fs-sm"
  }, message), __jsx("span", {
    className: "gx-btn gx-btn-sm gx-top2 gx-text-muted"
  }, __jsx("i", {
    className: "icon icon-reply gx-pr-2"
  }), "Reply"), __jsx("span", {
    className: "gx-btn gx-btn-sm gx-top2 gx-text-muted"
  }, __jsx("i", {
    className: "icon icon-custom-view gx-pr-2"
  }), "Read")));
};
/* harmony default export */ __webpack_exports__["default"] = (NotificationItem);

/***/ }),

/***/ "./app/components/MailNotification/data.js":
/*!*************************************************!*\
  !*** ./app/components/MailNotification/data.js ***!
  \*************************************************/
/*! exports provided: notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifications", function() { return notifications; });
const notifications = [{
  id: 1,
  image: "https://via.placeholder.com/150",
  name: "Domnic Brown",
  time: "6:19 PM",
  message: "There are many variations of passages of...",
  badge: 5
}, {
  id: 2,
  image: "https://via.placeholder.com/150",
  name: "John Smith",
  time: "4:18 PM",
  message: "Lorem Ipsum is simply dummy text of the..."
}, {
  id: 3,
  image: "https://via.placeholder.com/150",
  name: "John Smith",
  time: "7:10 PM",
  message: "The point of using Lorem Ipsum is that it has a...",
  badge: 8
}, {
  id: 4,
  image: "https://via.placeholder.com/150",
  name: "alex dolgove",
  time: "5:10 PM",
  message: "It is a long established fact that a reader will..."
}, {
  id: 5,
  image: "https://via.placeholder.com/150",
  name: "Domnic Harris",
  time: "7:35 PM",
  message: "All the Lorem Ipsum generators on the...",
  badge: 3
}];

/***/ }),

/***/ "./app/components/MailNotification/index.js":
/*!**************************************************!*\
  !*** ./app/components/MailNotification/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationItem */ "./app/components/MailNotification/NotificationItem.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./app/components/MailNotification/data.js");
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MailNotification = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "gx-popover-header"
  }, __jsx("h3", {
    className: "gx-mb-0"
  }, "Messages"), __jsx("i", {
    className: "gx-icon-btn icon icon-charvlet-down"
  })), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "gx-popover-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _data__WEBPACK_IMPORTED_MODULE_2__["notifications"].map((notification, index) => __jsx(_NotificationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    notification: notification
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (MailNotification);

/***/ }),

/***/ "./app/components/SearchBox/index.js":
/*!*******************************************!*\
  !*** ./app/components/SearchBox/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SearchBox = ({
  styleName,
  placeholder,
  onChange,
  value
}) => {
  return __jsx("div", {
    className: `gx-search-bar ${styleName}`
  }, __jsx("div", {
    className: "gx-form-group"
  }, __jsx("input", {
    className: "ant-input",
    type: "search",
    placeholder: placeholder,
    onChange: onChange,
    value: value
  }), __jsx("span", {
    className: "gx-search-icon gx-pointer"
  }, __jsx("i", {
    className: "icon icon-search"
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SearchBox);
SearchBox.defaultProps = {
  styleName: "",
  value: ""
};

/***/ }),

/***/ "./app/components/UserInfo/index.js":
/*!******************************************!*\
  !*** ./app/components/UserInfo/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/use-auth */ "./util/use-auth.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UserInfo = () => {
  const {
    authUser,
    userSignOut
  } = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_2__["useAuth"])();
  const userMenuOptions = __jsx("ul", {
    className: "gx-user-popover"
  }, __jsx("li", null, "My Account"), __jsx("li", null, "Connections"), __jsx("li", {
    onClick: () => userSignOut()
  }, "Logout"));
  return authUser ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: userMenuOptions,
    trigger: "click"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "https://via.placeholder.com/150",
    className: "gx-avatar gx-pointer",
    alt: ""
  })) : null;
};
/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./app/core/Layout/AppSidebar.js":
/*!***************************************!*\
  !*** ./app/core/Layout/AppSidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sidebar */ "./app/core/Sidebar/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SIDEBAR_VISIBLE_ON = [_constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE_FIXED"], _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE_DRAWER"], _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE_MINI_SIDEBAR"], _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"], _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]];
const AppSidebar = ({
  navStyle
}) => {
  const width = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(({
    settings
  }) => settings.width);
  if (width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["TAB_SIZE"] || SIDEBAR_VISIBLE_ON.includes(navStyle)) {
    return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }
  return null;
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(AppSidebar));

/***/ }),

/***/ "./app/core/Layout/index.js":
/*!**********************************!*\
  !*** ./app/core/Layout/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Topbar_HorizontalDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Topbar/HorizontalDefault */ "./app/core/Topbar/HorizontalDefault/index.js");
/* harmony import */ var _Topbar_HorizontalDark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Topbar/HorizontalDark */ "./app/core/Topbar/HorizontalDark/index.js");
/* harmony import */ var _Topbar_InsideHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Topbar/InsideHeader */ "./app/core/Topbar/InsideHeader/index.js");
/* harmony import */ var _Topbar_AboveHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Topbar/AboveHeader */ "./app/core/Topbar/AboveHeader/index.js");
/* harmony import */ var _Topbar_BelowHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Topbar/BelowHeader */ "./app/core/Topbar/BelowHeader/index.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Topbar */ "./app/core/Topbar/index.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Topbar/NoHeaderNotification */ "./app/core/Topbar/NoHeaderNotification/index.js");
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/use-auth */ "./util/use-auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_CircularProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/CircularProgress */ "./app/components/CircularProgress/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _AppSidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AppSidebar */ "./app/core/Layout/AppSidebar.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const getContainerClass = navStyle => {
  switch (navStyle) {
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DARK_HORIZONTAL"]:
      return "gx-container-wrap";
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
      return "gx-container-wrap";
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
      return "gx-container-wrap";
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_BELOW_HEADER"]:
      return "gx-container-wrap";
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_ABOVE_HEADER"]:
      return "gx-container-wrap";
    default:
      return '';
  }
};
const getNavStyles = navStyle => {
  switch (navStyle) {
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
      return __jsx(_Topbar_HorizontalDefault__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DARK_HORIZONTAL"]:
      return __jsx(_Topbar_HorizontalDark__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
      return __jsx(_Topbar_InsideHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_ABOVE_HEADER"]:
      return __jsx(_Topbar_AboveHeader__WEBPACK_IMPORTED_MODULE_6__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_BELOW_HEADER"]:
      return __jsx(_Topbar_BelowHeader__WEBPACK_IMPORTED_MODULE_7__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_FIXED"]:
      return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DRAWER"]:
      return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_MINI_SIDEBAR"]:
      return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]:
      return __jsx(_Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_10__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]:
      return __jsx(_Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_10__["default"], null);
    default:
      return null;
  }
};
const {
  Content,
  Footer
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const today = new Date();
const AppLayout = ({
  children
}) => {
  const {
    authUser,
    isLoadingUser,
    error
  } = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_11__["useAuth"])();
  const themeType = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(({
    settings
  }) => settings.themeType);
  const navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(({
    settings
  }) => settings.navStyle);
  const layoutType = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(({
    settings
  }) => settings.layoutType);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["THEME_TYPE_DARK"]) {
      document.body.classList.add('dark-theme');
    } else if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
    }
  }, [themeType]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (layoutType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["LAYOUT_TYPE_FULL"]) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('full-layout');
    } else if (layoutType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["LAYOUT_TYPE_BOXED"]) {
      document.body.classList.remove('full-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('boxed-layout');
    } else if (layoutType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["LAYOUT_TYPE_FRAMED"]) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('full-layout');
      document.body.classList.add('framed-layout');
    }
  }, [layoutType]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DEFAULT_HORIZONTAL"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DARK_HORIZONTAL"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_ABOVE_HEADER"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_BELOW_HEADER"]) {
      document.body.classList.add('full-scroll');
      document.body.classList.add('horizontal-layout');
    } else {
      document.body.classList.remove('full-scroll');
      document.body.classList.remove('horizontal-layout');
    }
  }, [navStyle]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', () => {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_14__["updateWindowWidth"])(window.innerWidth));
    });
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (error) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error.toString()).then(r => r);
    }
  }, [error]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isLoadingUser) {
      if (!authUser && !Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_11__["isUnRestrictedRoute"])(router.pathname)) {
        router.push('/signin').then(r => r);
      } else if (authUser && Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_11__["isUnRestrictedRoute"])(router.pathname)) {
        router.push('/dashboard').then(r => r);
      }
    }
  }, [authUser, isLoadingUser, router.pathname]);
  if (isLoadingUser) {
    return __jsx("div", {
      className: "gx-loader-view"
    }, __jsx(_components_CircularProgress__WEBPACK_IMPORTED_MODULE_13__["default"], null));
  }
  return Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_11__["isUnRestrictedRoute"])(router.pathname) ? children : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    className: `gx-app-layout`
  }, __jsx(_AppSidebar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    navStyle: navStyle
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, getNavStyles(navStyle), __jsx(Content, {
    className: `gx-layout-content ${getContainerClass(navStyle)}`
  }, __jsx("div", {
    className: "gx-main-content-wrapper"
  }, children))));
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./app/core/LocaleProvider/index.js":
/*!******************************************!*\
  !*** ./app/core/LocaleProvider/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lngProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lngProvider */ "./lngProvider/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const LocaleProvider = props => {
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const isDirectionRTL = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.isDirectionRTL);
  const currentAppLocale = _lngProvider__WEBPACK_IMPORTED_MODULE_4__["default"][locale.locale];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (locale) document.documentElement.lang = locale.locale;
  }, [locale]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isDirectionRTL) {
      document.documentElement.classList.add('rtl');
      document.documentElement.setAttribute('data-direction', 'rtl');
    } else {
      document.documentElement.classList.remove('rtl');
      document.documentElement.setAttribute('data-direction', 'ltr');
    }
  }, [isDirectionRTL]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["ConfigProvider"], {
    locale: currentAppLocale.antd,
    direction: isDirectionRTL ? 'rtl' : 'ltr'
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["IntlProvider"], {
    locale: currentAppLocale.locale,
    messages: currentAppLocale.messages
  }, props.children));
};
/* harmony default export */ __webpack_exports__["default"] = (LocaleProvider);

/***/ }),

/***/ "./app/core/Sidebar/AppsNavigation.js":
/*!********************************************!*\
  !*** ./app/core/Sidebar/AppsNavigation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AppsNavigation = () => __jsx("ul", {
  className: "gx-app-nav"
}, __jsx("li", null, __jsx("i", {
  className: "icon icon-search-new"
})), __jsx("li", null, __jsx("i", {
  className: "icon icon-notification"
})), __jsx("li", null, __jsx("i", {
  className: "icon icon-chat-new"
})));
/* harmony default export */ __webpack_exports__["default"] = (AppsNavigation);

/***/ }),

/***/ "./app/core/Sidebar/SidebarContent.js":
/*!********************************************!*\
  !*** ./app/core/Sidebar/SidebarContent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _SidebarLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SidebarLogo */ "./app/core/Sidebar/SidebarLogo.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserProfile */ "./app/core/Sidebar/UserProfile.js");
/* harmony import */ var _AppsNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppsNavigation */ "./app/core/Sidebar/AppsNavigation.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;
const MenuItemGroup = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].ItemGroup;
const SidebarContent = () => {
  const navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(({
    settings
  }) => settings.navStyle);
  const themeType = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(({
    settings
  }) => settings.themeType);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const getNoHeaderClass = navStyle => {
    if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const getNavStyleSubMenuClass = navStyle => {
    if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_10__["setPathName"])(router.pathname));
  }, [router.pathname]);
  const selectedKeys = router.pathname.substr(1) || 'dashboard';
  const defaultOpenKeys = selectedKeys.split('/')[1];
  console.log(defaultOpenKeys);
  console.log(selectedKeys);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SidebarLogo__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "gx-sidebar-content"
  }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-layout-sider-scrollbar"
  }, __jsx("div", {
    style: {
      margin: "0px 20px 12px 20px"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      background: "#D3F36B",
      border: "none"
    },
    htmlType: "button"
  }, "+ Lorem ipsum")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    style: {
      background: "#F9FAF5"
    },
    defaultOpenKeys: [defaultOpenKeys],
    selectedKeys: [selectedKeys],
    theme: themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["THEME_TYPE_LITE"] ? 'lite' : 'dark',
    mode: "inline"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "dashboard"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/dashboard"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "Dashboard")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "test"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/test"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "Page 2")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "sample2"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sample2"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "Page 3")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "sample3"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sample3"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "Page 4")))))), __jsx("div", {
    className: `gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`
  }, __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
};
SidebarContent.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SidebarContent);

/***/ }),

/***/ "./app/core/Sidebar/SidebarLogo.js":
/*!*****************************************!*\
  !*** ./app/core/Sidebar/SidebarLogo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SidebarLogo = () => {
  const themeType = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.themeType);
  const width = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.width);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  let navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navStyle);
  if (width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["TAB_SIZE"] && navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"]) {
    navStyle = _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_DRAWER"];
  }
  return __jsx("div", {
    className: "gx-layout-sider-header"
  }, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_MINI_SIDEBAR"] ? __jsx("div", {
    className: "gx-linebar"
  }, __jsx("i", {
    className: `gx-icon-btn icon icon-${navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_MINI_SIDEBAR"] ? 'menu-unfold' : 'menu-fold'} ${themeType !== _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["THEME_TYPE_LITE"] ? 'gx-text-white' : ''}`,
    onClick: () => {
      if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_DRAWER"]) {
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["toggleCollapsedSideNav"])(!navCollapsed));
      } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"]) {
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["onNavStyleChange"])(_constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_MINI_SIDEBAR"]));
      } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["toggleCollapsedSideNav"])(!navCollapsed));
      } else {
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["onNavStyleChange"])(_constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"]));
      }
    }
  })) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "gx-site-logo"
  }, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"] && width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["TAB_SIZE"] ? __jsx("img", {
    alt: "lo",
    src: "/images/w-logo.png"
  }) : themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["THEME_TYPE_LITE"] ? __jsx("img", {
    alt: "logo1",
    style: {
      maxWidth: "82%"
    },
    src: "/images/logo.png"
  }) : __jsx("img", {
    alt: "logo2",
    src: "/images/logo.png"
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SidebarLogo);

/***/ }),

/***/ "./app/core/Sidebar/UserProfile.js":
/*!*****************************************!*\
  !*** ./app/core/Sidebar/UserProfile.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/use-auth */ "./util/use-auth.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UserProfile = () => {
  const {
    authUser,
    userSignOut
  } = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_2__["useAuth"])();

  // const userMenuOptions = (
  //   <ul className="gx-user-popover">
  //     <li>My Account</li>
  //     <li>Connections</li>
  //     <li onClick={() => userSignOut()}>Logout
  //     </li>
  //   </ul>
  // );

  return authUser ? __jsx("div", {
    className: " gx-align-items-center gx-mb-4",
    style: {
      textAlign: "center"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "/images/Rectangle2.png",
    className: "gx-size-50 gx-pointer gx-mr-3",
    alt: ""
  }), __jsx("div", {
    className: "gx-avatar-name gx-mt-2"
  }, authUser.name), __jsx("div", {
    className: "gx-avatar-name gx-mt-2 gx-text-light"
  }, "example@test.com")) : null;
};
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./app/core/Sidebar/index.js":
/*!***********************************!*\
  !*** ./app/core/Sidebar/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarContent */ "./app/core/Sidebar/SidebarContent.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];
const Sidebar = () => {
  const themeType = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.themeType);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  const width = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.width);
  const navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navStyle);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const onToggleCollapsedNav = () => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["toggleCollapsedSideNav"])(!navCollapsed));
  };
  let drawerStyle = "gx-collapsed-sidebar";
  if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_FIXED"]) {
    drawerStyle = "";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
    drawerStyle = "gx-mini-sidebar gx-mini-custom-sidebar";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) {
    drawerStyle = "gx-custom-sidebar";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_MINI_SIDEBAR"]) {
    drawerStyle = "gx-mini-sidebar";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_DRAWER"]) {
    drawerStyle = "gx-collapsed-sidebar";
  }
  if ((navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_FIXED"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) && width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["TAB_SIZE"]) {
    drawerStyle = "gx-collapsed-sidebar";
  }
  return __jsx(Sider, {
    className: `gx-app-sidebar ${drawerStyle} ${themeType !== _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["THEME_TYPE_LITE"] ? 'gx-layout-sider-dark' : null}`,
    trigger: null,
    collapsed: width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["TAB_SIZE"] ? false : navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"],
    theme: themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["THEME_TYPE_LITE"] ? "lite" : "dark",
    collapsible: true
  }, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_DRAWER"] || width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["TAB_SIZE"] ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    className: `gx-drawer-sidebar ${themeType !== _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["THEME_TYPE_LITE"] ? 'gx-drawer-sidebar-dark' : null}`,
    placement: "left",
    closable: false,
    onClose: onToggleCollapsedNav,
    visible: navCollapsed
  }, __jsx(_SidebarContent__WEBPACK_IMPORTED_MODULE_3__["default"], null)) : __jsx(_SidebarContent__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./app/core/Topbar/AboveHeader/index.js":
/*!**********************************************!*\
  !*** ./app/core/Topbar/AboveHeader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Blog"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Apps"));
function handleMenuClick() {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}
function handleChange(value) {}
const AboveHeader = () => {
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const width = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.width);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_10__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));
  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };
  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark gx-above-header-horizontal"
  }, width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_11__["TAB_SIZE"] && __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))), __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "app.userAuth.login"
  })), __jsx("li", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "app.userAuth.signUp"
  })))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      if (width <= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_11__["TAB_SIZE"]) {
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_10__["toggleCollapsedSideNav"])(!navCollapsed));
      }
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))));
};
/* harmony default export */ __webpack_exports__["default"] = (AboveHeader);

/***/ }),

/***/ "./app/core/Topbar/BelowHeader/index.js":
/*!**********************************************!*\
  !*** ./app/core/Topbar/BelowHeader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));
function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}
function handleChange(value) {}
const BelowHeader = () => {
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const width = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.width);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_10__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));
  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };
  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark gx-below-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_10__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_14__["TAB_SIZE"] && __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (BelowHeader);

/***/ }),

/***/ "./app/core/Topbar/HorizontalDark/index.js":
/*!*************************************************!*\
  !*** ./app/core/Topbar/HorizontalDark/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));
function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}
function handleChange(value) {}
const HorizontalDark = () => {
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const width = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.width);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));
  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };
  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_14__["TAB_SIZE"] && __jsx("div", {
    className: "gx-header-horizontal-nav"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (HorizontalDark);

/***/ }),

/***/ "./app/core/Topbar/HorizontalDefault/index.js":
/*!****************************************************!*\
  !*** ./app/core/Topbar/HorizontalDefault/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));
function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}
function handleChange(value) {}
const HorizontalDefault = () => {
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const width = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.width);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));
  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };
  return __jsx("div", {
    className: "gx-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo-white.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_14__["TAB_SIZE"] && __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (HorizontalDefault);

/***/ }),

/***/ "./app/core/Topbar/HorizontalNav.js":
/*!******************************************!*\
  !*** ./app/core/Topbar/HorizontalNav.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _components_AppLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AppLink */ "./app/components/AppLink/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SubMenu = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].SubMenu;
const getNavStyleSubMenuClass = navStyle => {
  switch (navStyle) {
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
      return "gx-menu-horizontal gx-submenu-popup-curve";
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
      return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_BELOW_HEADER"]:
      return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_ABOVE_HEADER"]:
      return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
    default:
      return "gx-menu-horizontal";
  }
};
const HorizontalNav = () => {
  const navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navStyle);
  const pathname = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.pathname);
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    defaultOpenKeys: [defaultOpenKeys],
    selectedKeys: [selectedKeys],
    mode: "horizontal"
  }, __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "main",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "sidebar.main"
    })
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "dashboard",
    title: __jsx("span", null, " ", __jsx("i", {
      className: "icon icon-dasbhoard"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "sidebar.dashboard"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/dashboard/crypto"
  }, __jsx(_components_AppLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/main/dashboard/crypto"
  }, __jsx("i", {
    className: "icon icon-crypto"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "sidebar.dashboard.crypto"
  }))))));
};
HorizontalNav.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (HorizontalNav);

/***/ }),

/***/ "./app/core/Topbar/InsideHeader/index.js":
/*!***********************************************!*\
  !*** ./app/core/Topbar/InsideHeader/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));
function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}
const InsideHeader = () => {
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const width = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.width);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));
  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };
  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3 6e"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_14__["TAB_SIZE"] && __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))));
};
const mapStateToProps = ({
  settings
}) => {
  const {
    locale,
    navCollapsed
  } = settings;
  return {
    locale,
    navCollapsed
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  toggleCollapsedSideNav: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"],
  switchLanguage: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"]
})(InsideHeader));

/***/ }),

/***/ "./app/core/Topbar/NoHeaderNotification/index.js":
/*!*******************************************************!*\
  !*** ./app/core/Topbar/NoHeaderNotification/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NoHeaderNotification = () => {
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)
  // <div className="gx-no-header-horizontal">
  //   <div className="gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3">
  //     <i className="gx-icon-btn icon icon-menu"
  //        onClick={() => {
  //          dispatch(toggleCollapsedSideNav(!navCollapsed));
  //        }}
  //     />
  //   </div>
  //   <div className="gx-no-header-horizontal-top">
  //     <div className="gx-no-header-horizontal-top-center">
  //       <i className="icon icon-alert gx-mr-3"/>
  //       <p className="gx-mb-0 gx-text-truncate"><IntlMessages id="app.announced"/></p>
  //     </div>
  //   </div>
  // </div>
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (NoHeaderNotification);

/***/ }),

/***/ "./app/core/Topbar/index.js":
/*!**********************************!*\
  !*** ./app/core/Topbar/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Topbar = () => {
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(({
    settings
  }) => settings.locale);
  const width = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(({
    settings
  }) => settings.width);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  const navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(({
    settings
  }) => settings.navStyle);
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();
  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_4__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: () => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));
  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };
  return __jsx(Header, null, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["NAV_STYLE_DRAWER"] || (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["NAV_STYLE_FIXED"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["NAV_STYLE_MINI_SIDEBAR"]) && width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["TAB_SIZE"] ? __jsx("div", {
    className: "gx-linebar gx-mr-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer",
    src: "/images/w-logo.png"
  })), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    }),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["TAB_SIZE"] ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  }))))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  }), __jsx("span", {
    className: "gx-pl-2 gx-language-name"
  }, locale.name), __jsx("i", {
    className: "icon icon-chevron-down gx-pl-2"
  })))), width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["TAB_SIZE"] ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (Topbar);

/***/ }),

/***/ "./app/core/Topbar/languageData.js":
/*!*****************************************!*\
  !*** ./app/core/Topbar/languageData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const languageData = [{
  languageId: 'english',
  locale: 'en',
  name: 'English',
  icon: 'us'
}, {
  languageId: 'chinese',
  locale: 'zh',
  name: 'Chinese',
  icon: 'cn'
}, {
  languageId: 'spanish',
  locale: 'es',
  name: 'Spanish',
  icon: 'es'
}, {
  languageId: 'french',
  locale: 'fr',
  name: 'French',
  icon: 'fr'
}, {
  languageId: 'italian',
  locale: 'it',
  name: 'Italian',
  icon: 'it'
}, {
  languageId: 'saudi-arabia',
  locale: 'ar',
  name: 'Arabic',
  icon: 'sa'
}];
/* harmony default export */ __webpack_exports__["default"] = (languageData);

/***/ }),

/***/ "./constants/ActionTypes.js":
/*!**********************************!*\
  !*** ./constants/ActionTypes.js ***!
  \**********************************/
/*! exports provided: TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH, SWITCH_LANGUAGE, FETCH_START, FETCH_SUCCESS, FETCH_ERROR, SHOW_MESSAGE, HIDE_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_COLLAPSED_NAV", function() { return TOGGLE_COLLAPSED_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_WIDTH", function() { return WINDOW_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_LANGUAGE", function() { return SWITCH_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_START", function() { return FETCH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUCCESS", function() { return FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ERROR", function() { return FETCH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MESSAGE", function() { return SHOW_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_MESSAGE", function() { return HIDE_MESSAGE; });
// Customizer const
const TOGGLE_COLLAPSED_NAV = 'TOGGLE_COLLAPSE_MENU';
const WINDOW_WIDTH = 'WINDOW-WIDTH';
const SWITCH_LANGUAGE = 'SWITCH-LANGUAGE';

//Contact Module const
const FETCH_START = 'fetch_start';
const FETCH_SUCCESS = 'fetch_success';
const FETCH_ERROR = 'fetch_error';
const SHOW_MESSAGE = 'SHOW_MESSAGE';
const HIDE_MESSAGE = 'HIDE_MESSAGE';

/***/ }),

/***/ "./constants/ThemeSetting.js":
/*!***********************************!*\
  !*** ./constants/ThemeSetting.js ***!
  \***********************************/
/*! exports provided: THEME_TYPE, THEME_TYPE_LITE, THEME_TYPE_DARK, THEME_TYPE_SEMI_DARK, THEME_COLOR_SELECTION, THEME_COLOR_SELECTION_PRESET, THEME_COLOR_SELECTION_CUSTOMIZE, HORIZONTAL_NAVIGATION, HORIZONTAL_MENU_POSITION, ABOVE_THE_HEADER, INSIDE_THE_HEADER, BELOW_THE_HEADER, VERTICAL_NAVIGATION, NAV_STYLE_MINI, LAYOUT_TYPE, SET_PATH_NAME, UPDATE_RTL_STATUS, LAYOUT_TYPE_FRAMED, LAYOUT_TYPE_BOXED, LAYOUT_TYPE_FULL, NAV_STYLE, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, NAV_STYLE_DRAWER, NAV_STYLE_NO_HEADER_MINI_SIDEBAR, NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR, NAV_STYLE_DEFAULT_HORIZONTAL, NAV_STYLE_DARK_HORIZONTAL, NAV_STYLE_INSIDE_HEADER_HORIZONTAL, NAV_STYLE_BELOW_HEADER, NAV_STYLE_ABOVE_HEADER, LIGHT_PURPLE, LIGHT_PURPLE_SEC, LIGHT_PURPLE_DARK_TEXT_COLOR, RED, RED_SEC, RED_DARK_TEXT_COLOR, BLUE, BLUE_SEC, BLUE_DARK_TEXT_COLOR, DARK_BLUE, DARK_BLUE_SEC, DARK_BLUE_DARK_TEXT_COLOR, ORANGE, ORANGE_SEC, ORANGE_DARK_TEXT_COLOR, LIGHT_BLUE, LIGHT_BLUE_SEC, LIGHT_BLUE_DARK_TEXT_COLOR, DEEP_ORANGE, DEEP_ORANGE_SEC, DEEP_ORANGE_DARK_TEXT_COLOR, LIGHT_PURPLE_1, LIGHT_PURPLE_1_SEC, LIGHT_PURPLE_1_DARK_TEXT_COLOR, LIGHT_PURPLE_2, LIGHT_PURPLE_2_SEC, LIGHT_PURPLE_2_DARK_TEXT_COLOR, ACTIVE_COLOR_OPTION, TAB_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE", function() { return THEME_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE_LITE", function() { return THEME_TYPE_LITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE_DARK", function() { return THEME_TYPE_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE_SEMI_DARK", function() { return THEME_TYPE_SEMI_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_COLOR_SELECTION", function() { return THEME_COLOR_SELECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_COLOR_SELECTION_PRESET", function() { return THEME_COLOR_SELECTION_PRESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_COLOR_SELECTION_CUSTOMIZE", function() { return THEME_COLOR_SELECTION_CUSTOMIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HORIZONTAL_NAVIGATION", function() { return HORIZONTAL_NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HORIZONTAL_MENU_POSITION", function() { return HORIZONTAL_MENU_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOVE_THE_HEADER", function() { return ABOVE_THE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSIDE_THE_HEADER", function() { return INSIDE_THE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BELOW_THE_HEADER", function() { return BELOW_THE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTICAL_NAVIGATION", function() { return VERTICAL_NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_MINI", function() { return NAV_STYLE_MINI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE", function() { return LAYOUT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PATH_NAME", function() { return SET_PATH_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_RTL_STATUS", function() { return UPDATE_RTL_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE_FRAMED", function() { return LAYOUT_TYPE_FRAMED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE_BOXED", function() { return LAYOUT_TYPE_BOXED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE_FULL", function() { return LAYOUT_TYPE_FULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE", function() { return NAV_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_FIXED", function() { return NAV_STYLE_FIXED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_MINI_SIDEBAR", function() { return NAV_STYLE_MINI_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_DRAWER", function() { return NAV_STYLE_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_NO_HEADER_MINI_SIDEBAR", function() { return NAV_STYLE_NO_HEADER_MINI_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR", function() { return NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_DEFAULT_HORIZONTAL", function() { return NAV_STYLE_DEFAULT_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_DARK_HORIZONTAL", function() { return NAV_STYLE_DARK_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_INSIDE_HEADER_HORIZONTAL", function() { return NAV_STYLE_INSIDE_HEADER_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_BELOW_HEADER", function() { return NAV_STYLE_BELOW_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_ABOVE_HEADER", function() { return NAV_STYLE_ABOVE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE", function() { return LIGHT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_SEC", function() { return LIGHT_PURPLE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_DARK_TEXT_COLOR", function() { return LIGHT_PURPLE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_SEC", function() { return RED_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_DARK_TEXT_COLOR", function() { return RED_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE", function() { return BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_SEC", function() { return BLUE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_DARK_TEXT_COLOR", function() { return BLUE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE", function() { return DARK_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE_SEC", function() { return DARK_BLUE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE_DARK_TEXT_COLOR", function() { return DARK_BLUE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE", function() { return ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_SEC", function() { return ORANGE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_DARK_TEXT_COLOR", function() { return ORANGE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE", function() { return LIGHT_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE_SEC", function() { return LIGHT_BLUE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE_DARK_TEXT_COLOR", function() { return LIGHT_BLUE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE", function() { return DEEP_ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE_SEC", function() { return DEEP_ORANGE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE_DARK_TEXT_COLOR", function() { return DEEP_ORANGE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1", function() { return LIGHT_PURPLE_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1_SEC", function() { return LIGHT_PURPLE_1_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1_DARK_TEXT_COLOR", function() { return LIGHT_PURPLE_1_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2", function() { return LIGHT_PURPLE_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2_SEC", function() { return LIGHT_PURPLE_2_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2_DARK_TEXT_COLOR", function() { return LIGHT_PURPLE_2_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_COLOR_OPTION", function() { return ACTIVE_COLOR_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_SIZE", function() { return TAB_SIZE; });
// Customizer const
const THEME_TYPE = 'THEME_TYPE';
const THEME_TYPE_LITE = 'THEME_TYPE_LITE';
const THEME_TYPE_DARK = 'THEME_TYPE_DARK';
const THEME_TYPE_SEMI_DARK = 'THEME_TYPE_SEMI_DARK';
const THEME_COLOR_SELECTION = 'THEME_COLOR_SELECTION';
const THEME_COLOR_SELECTION_PRESET = 'THEME_COLOR_SELECTION_PRESET';
const THEME_COLOR_SELECTION_CUSTOMIZE = 'THEME_COLOR_SELECTION_CUSTOMIZE';
const HORIZONTAL_NAVIGATION = 'HORIZONTAL_NAVIGATION';
const HORIZONTAL_MENU_POSITION = 'HORIZONTAL_MENU_POSITION';
const ABOVE_THE_HEADER = 'ABOVE_THE_HEADER';
const INSIDE_THE_HEADER = 'INSIDE_THE_HEADER';
const BELOW_THE_HEADER = 'BELOW_THE_HEADER';
const VERTICAL_NAVIGATION = 'VERTICAL_NAVIGATION';
const NAV_STYLE_MINI = 'NAV_STYLE_MINI';
const LAYOUT_TYPE = 'LAYOUT_TYPE';
const SET_PATH_NAME = 'SET_PATH_NAME';
const UPDATE_RTL_STATUS = 'UPDATE_RTL_STATUS';
const LAYOUT_TYPE_FRAMED = 'LAYOUT_TYPE_FRAMED';
const LAYOUT_TYPE_BOXED = 'LAYOUT_TYPE_BOXED';
const LAYOUT_TYPE_FULL = 'LAYOUT_TYPE_FULL';
const NAV_STYLE = 'NAV_STYLE';
const NAV_STYLE_FIXED = 'NAV_STYLE_FIXED';
const NAV_STYLE_MINI_SIDEBAR = 'NAV_STYLE_MINI_SIDEBAR';
const NAV_STYLE_DRAWER = 'NAV_STYLE_DRAWER';
const NAV_STYLE_NO_HEADER_MINI_SIDEBAR = 'NAV_STYLE_NO_HEADER_MINI_SIDEBAR';
const NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR = 'NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR';
const NAV_STYLE_DEFAULT_HORIZONTAL = 'NAV_STYLE_DEFAULT_HORIZONTAL';
const NAV_STYLE_DARK_HORIZONTAL = 'NAV_STYLE_DARK_HORIZONTAL';
const NAV_STYLE_INSIDE_HEADER_HORIZONTAL = 'NAV_STYLE_INSIDE_HEADER_HORIZONTAL';
const NAV_STYLE_BELOW_HEADER = 'NAV_STYLE_BELOW_HEADER';
const NAV_STYLE_ABOVE_HEADER = 'NAV_STYLE_ABOVE_HEADER';
const LIGHT_PURPLE = 'light_purple';
const LIGHT_PURPLE_SEC = '#00B378';
const LIGHT_PURPLE_DARK_TEXT_COLOR = '#9799AC';
const RED = 'red';
const RED_SEC = '#00D9C9';
const RED_DARK_TEXT_COLOR = '#878BAB';
const BLUE = 'blue';
const BLUE_SEC = '#FCB53B';
const BLUE_DARK_TEXT_COLOR = '#AAA59A';
const DARK_BLUE = 'dark_blue';
const DARK_BLUE_SEC = '#17BDE5';
const DARK_BLUE_DARK_TEXT_COLOR = '#9DDAE9';
const ORANGE = 'orange';
const ORANGE_SEC = '#F1D065';
const ORANGE_DARK_TEXT_COLOR = '#ABA895';
const LIGHT_BLUE = 'light_blue';
const LIGHT_BLUE_SEC = '#59DCFF';
const LIGHT_BLUE_DARK_TEXT_COLOR = '#92A2C8';
const DEEP_ORANGE = 'deep_orange';
const DEEP_ORANGE_SEC = '#70A288';
const DEEP_ORANGE_DARK_TEXT_COLOR = '#97B8C7';
const LIGHT_PURPLE_1 = 'light_purple_1';
const LIGHT_PURPLE_1_SEC = '#E14594';
const LIGHT_PURPLE_1_DARK_TEXT_COLOR = '#8288B4';
const LIGHT_PURPLE_2 = 'light_purple_2';
const LIGHT_PURPLE_2_SEC = '#64D7D6';
const LIGHT_PURPLE_2_DARK_TEXT_COLOR = '#5782BB';
const ACTIVE_COLOR_OPTION = '#ffffff';
const TAB_SIZE = 992;

/***/ }),

/***/ "./lngProvider/entries/ar_SA.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/ar_SA.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_ar_EG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/ar_EG */ "antd/lib/locale-provider/ar_EG");
/* harmony import */ var antd_lib_locale_provider_ar_EG__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_ar_EG__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/ar_SA.json */ "./lngProvider/locales/ar_SA.json");
var _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/ar_SA.json */ "./lngProvider/locales/ar_SA.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


const saLang = {
  messages: _objectSpread({}, _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_ar_EG__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'ar'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/en-US.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/en-US.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/en_US */ "antd/lib/locale-provider/en_US");
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/en_US.json */ "./lngProvider/locales/en_US.json");
var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/en_US.json */ "./lngProvider/locales/en_US.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


const EnLang = {
  messages: _objectSpread({}, _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'en-US'
};
/* harmony default export */ __webpack_exports__["default"] = (EnLang);

/***/ }),

/***/ "./lngProvider/entries/es_ES.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/es_ES.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_es_ES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/es_ES */ "antd/lib/locale-provider/es_ES");
/* harmony import */ var antd_lib_locale_provider_es_ES__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_es_ES__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/es_ES.json */ "./lngProvider/locales/es_ES.json");
var _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/es_ES.json */ "./lngProvider/locales/es_ES.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


const saLang = {
  messages: _objectSpread({}, _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_es_ES__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'es'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/fr_FR.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/fr_FR.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/fr_FR */ "antd/lib/locale-provider/fr_FR");
/* harmony import */ var antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/fr_FR.json */ "./lngProvider/locales/fr_FR.json");
var _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/fr_FR.json */ "./lngProvider/locales/fr_FR.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


const saLang = {
  messages: _objectSpread({}, _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'fr-FR'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/it_IT.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/it_IT.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/it_IT */ "antd/lib/locale-provider/it_IT");
/* harmony import */ var antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/it_IT.json */ "./lngProvider/locales/it_IT.json");
var _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/it_IT.json */ "./lngProvider/locales/it_IT.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


const saLang = {
  messages: _objectSpread({}, _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'it-IT'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/zh-Hans-CN.js":
/*!*******************************************!*\
  !*** ./lngProvider/entries/zh-Hans-CN.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/zh_CN */ "antd/lib/locale-provider/zh_CN");
/* harmony import */ var antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/zh-Hans.json */ "./lngProvider/locales/zh-Hans.json");
var _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/zh-Hans.json */ "./lngProvider/locales/zh-Hans.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


const ZhLan = {
  messages: _objectSpread({}, _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'zh-Hans-CN'
};
/* harmony default export */ __webpack_exports__["default"] = (ZhLan);

/***/ }),

/***/ "./lngProvider/index.js":
/*!******************************!*\
  !*** ./lngProvider/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entries_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entries/en-US */ "./lngProvider/entries/en-US.js");
/* harmony import */ var _entries_zh_Hans_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entries/zh-Hans-CN */ "./lngProvider/entries/zh-Hans-CN.js");
/* harmony import */ var _entries_ar_SA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entries/ar_SA */ "./lngProvider/entries/ar_SA.js");
/* harmony import */ var _entries_it_IT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entries/it_IT */ "./lngProvider/entries/it_IT.js");
/* harmony import */ var _entries_es_ES__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entries/es_ES */ "./lngProvider/entries/es_ES.js");
/* harmony import */ var _entries_fr_FR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entries/fr_FR */ "./lngProvider/entries/fr_FR.js");






const AppLocale = {
  en: _entries_en_US__WEBPACK_IMPORTED_MODULE_0__["default"],
  zh: _entries_zh_Hans_CN__WEBPACK_IMPORTED_MODULE_1__["default"],
  ar: _entries_ar_SA__WEBPACK_IMPORTED_MODULE_2__["default"],
  it: _entries_it_IT__WEBPACK_IMPORTED_MODULE_3__["default"],
  es: _entries_es_ES__WEBPACK_IMPORTED_MODULE_4__["default"],
  fr: _entries_fr_FR__WEBPACK_IMPORTED_MODULE_5__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (AppLocale);

/***/ }),

/***/ "./lngProvider/locales/ar_SA.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/ar_SA.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.pickers, sidebar.notes, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"سيتم إصدار نسخة جديدة في 25 ديسمبر. ترّقب!\",\"sidebar.main\":\"الأساسية\",\"sidebar.dashboard\":\"لوحة القيادة\",\"sidebar.layouts\":\"تخطيطات\",\"sidebar.dashboard.crm\":\"إدارة علاقات العملاء\",\"sidebar.components\":\"المكونات\",\"sidebar.components.general\":\"جنرال لواء\",\"sidebar.general.button\":\"زر\",\"sidebar.general.icon\":\"أيقونة\",\"sidebar.components.navigation\":\"التنقل\",\"sidebar.navigation.affix\":\"لصق\",\"sidebar.navigation.breadcrumb\":\"التفصيلي\",\"sidebar.navigation.dropdown\":\"اسقاط\",\"sidebar.navigation.menu\":\"قائمة طعام\",\"sidebar.navigation.pagination\":\"ترقيم الصفحات\",\"sidebar.navigation.steps\":\"خطوات\",\"sidebar.components.dataEntry\":\"ادخال بيانات\",\"sidebar.dataEntry.autoComplete\":\"الإكمال التلقائي\",\"sidebar.dataEntry.checkbox\":\"مربع\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"منتقي التاريخ\",\"sidebar.dataEntry.form\":\"شكل\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"إدخال\",\"sidebar.dataEntry.mention\":\"أشير\",\"sidebar.dataEntry.rate\":\"معدل\",\"sidebar.dataEntry.radio\":\"راديو\",\"sidebar.dataEntry.switch\":\"مفتاح كهربائي\",\"sidebar.dataEntry.slider\":\"المنزلق\",\"sidebar.dataEntry.select\":\"تحديد\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"نقل\",\"sidebar.dataEntry.timePicker\":\"منتقي الوقت\",\"sidebar.dataEntry.upload\":\"تحميل\",\"sidebar.components.dataDisplay\":\"عرض البيانات\",\"sidebar.dataDisplay.avatar\":\"الصورة الرمزية\",\"sidebar.dataDisplay.badge\":\"شارة\",\"sidebar.dataDisplay.collapse\":\"انهدام\",\"sidebar.dataDisplay.carousel\":\"دائري\",\"sidebar.dataDisplay.card\":\"بطاقة\",\"sidebar.dataDisplay.calender\":\"التقويم\",\"sidebar.dataDisplay.list\":\"قائمة\",\"sidebar.dataDisplay.popover\":\"قائمة\",\"sidebar.dataDisplay.tree\":\"شجرة\",\"sidebar.dataDisplay.toolTips\":\"تلميحات\",\"sidebar.dataDisplay.timeLine\":\"الجدول الزمني\",\"sidebar.dataDisplay.tag\":\"بطاقة\",\"sidebar.dataDisplay.tabs\":\"علامات التبويب\",\"sidebar.dataDisplay.table\":\"الطاولة\",\"sidebar.components.feedBack\":\"ردود الفعل\",\"sidebar.feedBack.alert\":\"محزر\",\"sidebar.feedBack.modal\":\"شكلي\",\"sidebar.feedBack.message\":\"رسالة\",\"sidebar.feedBack.notification\":\"إعلام\",\"sidebar.feedBack.progress\":\"تقدم\",\"sidebar.feedBack.popConfirm\":\"البوب تأكيد\",\"sidebar.feedBack.spin\":\"غزل\",\"sidebar.components.other\":\"آخر\",\"sidebar.other.anchor\":\"مذيع الأخبار\",\"sidebar.other.backTop\":\"عودة أعلى\",\"sidebar.other.divider\":\"مقسم\",\"sidebar.widgets\":\"الحاجيات\",\"sidebar.metrics\":\"قياس\",\"sidebar.view\":\"رأي\",\"sidebar.view.basicTable\":\"الجدول الأساسي\",\"sidebar.view.dataTable\":\"جدول البيانات\",\"sidebar.extensions\":\"ملحقات\",\"sidebar.extensions.editior\":\"محرر\",\"sidebar.extensions.dragNDrop\":\"السحب والإسقاط\",\"sidebar.extensions.sweetAlert\":\"الحلو تنبيه\",\"sidebar.extensions.notification\":\"إعلام\",\"sidebar.extensions.reactDates\":\"رد فعل التواريخ\",\"sidebar.extensions.dropZone\":\"إسقاط المنطقة\",\"sidebar.googleMap\":\"خرائط جوجل\",\"sidebar.charts\":\"الرسوم البيانية\",\"sidebar.apps\":\"التطبيقات\",\"sidebar.mailApp\":\"تطبيق البريد\",\"sidebar.todoApp\":\"تودو التطبيق\",\"sidebar.contactsApp\":\"اتصالات التطبيق\",\"sidebar.chatApp\":\"تطبيق الدردشة\",\"sidebar.pickers\":\"جامعي\",\"sidebar.notes\":\"ملاحظات\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"التاريخ والوقت\",\"sidebar.pickers.colorPickers\":\"قارورة اللون\",\"sidebar.chart\":\"خريطة\",\"sidebar.chart.line\":\"خط الرسم البياني\",\"sidebar.chart.bar\":\"شريط الرسم البياني\",\"sidebar.chart.area\":\"مخطط المساحة\",\"sidebar.chart.composed\":\"الرسم البياني\",\"sidebar.chart.scatter\":\"مخطط مبعثر\",\"sidebar.chart.pie\":\"مخطط دائري\",\"sidebar.chart.radial\":\"مخطط نصف قطري\",\"sidebar.chart.radar\":\"مخطط الرادار\",\"sidebar.chart.tree\":\"مخطط شجرة\",\"sidebar.map\":\"خرائط جوجل\",\"sidebar.map.simple\":\"خرائط جوجل...\",\"sidebar.map.styled\":\"خريطة نصب\",\"sidebar.map.geoLocation\":\"الموقع الجغرافي\",\"sidebar.map.mapDirection\":\"خريطة الاتجاه\",\"sidebar.map.overlay\":\"تراكب الخريطة\",\"sidebar.map.kmLayer\":\"خريطة كم طبقة\",\"sidebar.map.popupInfo\":\"معلومات المنبثقة من الخريطة\",\"sidebar.map.trafficLayer\":\"خريطة حركة المرور\",\"sidebar.map.streetView\":\"منظر الشارع\",\"sidebar.map.eventListener\":\"مستمع الحدث\",\"sidebar.map.mapDrawing\":\"خريطة الرسم\",\"sidebar.map.mapClustering\":\"خريطة المجموعات\",\"sidebar.modules\":\"وحدات\",\"sidebar.calendar\":\"التقويم\",\"sidebar.calendar.basic\":\"الأساسية\",\"sidebar.calendar.cultures\":\"الثقافات\",\"sidebar.calendar.dnd\":\"DND\",\"sidebar.calendar.popup\":\"يظهر فجأة\",\"sidebar.calendar.rendering\":\"استدعاء\",\"sidebar.calendar.selectable\":\"اختيار\",\"sidebar.calendar.timeslots\":\"فتحات الوقت\",\"sidebar.mail.title\":\"بريد\",\"sidebar.mail.compose\":\"مؤلف موسيقى\",\"sidebar.mail.mailbox\":\"صندوق بريد\",\"sidebar.mail.filters\":\"مرشحات\",\"sidebar.mail.labels\":\"تسميات\",\"sidebar.eCommerce\":\"التجارة الإلكترونية\",\"sidebar.eCommerce.productList\":\"قائمة المنتجات\",\"sidebar.eCommerce.productGrid\":\"شبكة المنتج\",\"sidebar.extraComponents\":\"مكونات اضافية\",\"sidebar.inBuiltApp\":\"تطبيقات مدمجة\",\"sidebar.extraElements.callouts\":\"صرخ\",\"sidebar.extraElements.testimonials\":\"الشهادات - التوصيات\",\"sidebar.timeLine\":\"الجدول الزمني\",\"sidebar.timeLine.default\":\"افتراضي\",\"sidebar.timeLine.defaultwithIcons\":\"الافتراضي مع الرموز\",\"sidebar.timeLine.leftAligned\":\"اليسار الانحياز\",\"sidebar.extraElements.pricingTable\":\"جدول التسعير\",\"sidebar.customViews\":\"طرق عرض مخصصة\",\"sidebar.listType\":\"نوع القائمة\",\"sidebar.listType.extras\":\"إضافات\",\"sidebar.listType.plainListView\":\"عرض قائمة بسيطة\",\"sidebar.listType.withDivider\":\"قائمة بسيطة مع المفرق\",\"sidebar.listType.cardListView\":\"عرض قائمة البطاقات\",\"sidebar.extraPages.404\":\"404 خطأ الصفحة\",\"sidebar.extraPages.500\":\"500 خطأ الصفحة\",\"sidebar.extraPages\":\"صفحات اضافية\",\"app.userAuth\":\"مصادقة المستخدم\",\"app.userAuth.login\":\"تسجيل الدخول\",\"app.userAuth.signIn\":\"تسجيل الدخول\",\"app.userAuth.send\":\"إرسال\",\"app.userAuth.bySigning\":\"من خلال التسجيل ، يمكنك الاستفادة من الميزات الكاملة لخدماتنا.\",\"app.userAuth.or\":\"أو\",\"app.userAuth.forgotPassword\":\"هل نسيت كلمة المرور\",\"app.userAuth.forgot\":\"لا تقلق. استعادة كلمة المرور أمر سهل. فقط أخبرنا بالبريد الإلكتروني الذي قمت بالتسجيل به مع jumbo\",\"app.userAuth.signUp\":\"سجل\",\"app.userAuth.getAccount\":\"الحصول على حساب !!!\",\"app.userAuth.resetPassword\":\"إعادة ضبط كلمة المرور\",\"app.userAuth.reset\":\"إعادة تعيين\",\"app.userAuth.lockScreen\":\"اقفل الشاشة\",\"app.userAuth.unLock\":\"فتح\",\"appModule.enterPasswordUnlock\":\"أدخل كلمة المرور الخاصة بك لفتح الشاشة!\",\"appModule.enterPasswordReset\":\"أدخل كلمة مرور جديدة لحسابك\",\"appModule.loginSuccessfully\":\"تسجيل الدخول بنجاح\",\"appModule.password\":\"كلمه السر\",\"appModule.email\":\"البريد الإلكتروني\",\"appModule.name\":\"اسم\",\"appModule.phone\":\"هاتف\",\"appModule.designation\":\"تعيين\",\"appModule.regsiter\":\"تسجيل\",\"appModule.regsiterNow\":\"تسجيل رقم\",\"appModule.hvAccount\":\"لديك حساب\",\"appModule.createAccount\":\"انشئ حساب\",\"appModule.termAndCondition\":\"الشروط و الأحكام\",\"appModule.iAccept\":\"بالاشتراك ، أوافق\",\"todo\":\"لكى يفعل\",\"todo.addTask\":\"إضافة مهمة\",\"todo.all\":\"الكل\",\"todo.filters\":\"مرشحات\",\"todo.labels\":\"تسميات\",\"chat.selectUserChat\":\"اختر المستخدم لبدء الدردشة\",\"chat.selectContactChat\":\"حدد جهة اتصال لبدء الدردشة\",\"chat.chatUser\":\"دردشات\",\"chat.contacts\":\"جهات الاتصال\",\"chat.searchStartNewChat\":\"ابحث أو ابدأ محادثة جديدة\",\"chat.typeMessage\":\"اكتب واضغط على Enter لإرسال الرسالة\",\"chat.status\":\"انها حالة .... وليس يومياتك ...\",\"contact.saveContact\":\"حفظ الاتصال\",\"contact.addContact\":\"إضافة جهة اتصال\",\"contact.searchContact\":\"بحث الاتصال\",\"mail.mailbox\":\"صندوق بريد\",\"mail.compose\":\"مؤلف موسيقى\",\"mail.filters\":\"مرشحات\",\"mail.labels\":\"تسميات\",\"mail.title\":\"رسالة جديدة\",\"eCommerce.buyNow\":\"اشتري الآن\",\"eCommerce.addToCart\":\"أضف إلى السلة\",\"eCommerce.readMore\":\"اقرأ أكثر\",\"callouts.viewRange\":\"عرض النطاق\",\"callouts.basic\":\"الأساسية\",\"extraElements.callout\":\"عنصر إضافي\",\"testimonials.basic\":\"الأساسية\",\"testimonials.classic\":\"كلاسيكي\",\"testimonials.standard\":\"اساسي\",\"extraElements.testimonials\":\"الشهادات - التوصيات\",\"button.modify\":\"تعديل\",\"button.delete\":\"حذف\",\"pricingTable.basic\":\"الأساسية\",\"pricingTable.circle\":\"دائرة\",\"pricingTable.classic\":\"كلاسيكي\",\"pricingTable.dark\":\"داكن\",\"pricingTable.personal\":\"الشخصية\",\"pricingTable.easyTranslation\":\"الترجمة السهلة\",\"pricingTable.awesomeGoogleFonts\":\"رائع جوجل الخطوط\",\"pricingTable.hotelBookingSystem\":\"نظام حجز الفنادق\",\"pricingTable.emailComposeInterface\":\"البريد الإلكتروني تأليف واجهة\",\"pricingTable.locationFinderApp\":\"موقع الباحث عن التطبيق\",\"pricingTable.buyNow\":\"اشتري الآن\",\"pricingTable.business\":\"اعمال\",\"pricingTable.professional\":\"المحترفين\",\"button.yes\":\"نعم فعلا\",\"button.no\":\"لا\",\"extraPages.404Msg\":\"عفوًا ، حدث خطأ. الصفحة غير موجودة!\",\"extraPages.500Msg\":\"عذرا ، الخادم يذهب بشكل خاطئ\",\"extraPages.goHome\":\"الذهاب إلى المنزل\",\"extension.sweetAlerts\":\"تنبيهات حلوة\",\"sweetAlerts.basic\":\"الأساسية\",\"sweetAlerts.description\":\"مع الوصف\",\"sweetAlerts.success\":\"نجاح\",\"sweetAlerts.warning\":\"تحذير\",\"sweetAlerts.custom\":\"العادة\",\"sweetAlerts.htmlTag\":\"علامة Html\",\"sweetAlerts.prompt\":\"مستعجل\",\"sweetAlerts.itsBlue\":\"إنه أزرق!\",\"sweetAlerts.passwordPrompt\":\"كلمة المرور موجه\",\"sweetAlerts.customStyle\":\"نمط مخصص\",\"sweetAlerts.itPretty\":\"إنها جميلة ، أليس كذلك؟\",\"sweetAlerts.btnClicked\":\"لقد قمت بالنقر فوق الزر!\",\"sweetAlerts.youWillFind\":\"سوف تجد أنهم يصل!\",\"sweetAlerts.youWillNotAble\":\"لن تكون قادرًا على استرداد هذا الملف الوهمي!\",\"sweetAlerts.hereIsaMessage\":\"هنا رسالة!\",\"sweetAlerts.goodJob\":\"عمل جيد!\",\"sweetAlerts.yesDeleteIt\":\"نعم ، احذفها!\",\"sweetAlerts.areYouSure\":\"هل أنت واثق؟\",\"sweetAlerts.doYouLikeThumb\":\"هل تحب الإبهام؟\",\"sweetAlerts.anInput\":\"مدخلا!\",\"sweetAlerts.writeSomethingInteresting\":\"اكتب شيئًا مثيرًا للاهتمام:\",\"sweetAlerts.writeSomething\":\"أكتب شيئا\",\"sweetAlerts.youMustEnterPassword\":\"يجب عليك إدخال كلمة المرور الخاصة بك!\",\"sweetAlerts.enterPassword\":\"أدخل كلمة المرور\",\"extension.notification\":\"إعلام\",\"notification.infoMsg\":\"رسالة المعلومات\",\"notification.successMessage\":\"نجاح رسالة\",\"notification.warningMessage\":\"رسالة تحذير\",\"notification.closeAfter3000ms\":\"أغلق بعد 3000 مللي ثانية\",\"notification.errorMessage\":\"رسالة خطأ\",\"notification.titleHere\":\"العنوان هنا\",\"notification.clickMe\":\"انقر فوق لي!\",\"notification.info\":\"معلومات\",\"notification.success\":\"نجاح\",\"notification.warning\":\"تحذير\",\"notification.error\":\"خطأ\",\"sidebar.editors\":\"المحررين\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"محرر WYSIWYG\",\"picker.color.alpha\":\"الفا القاطنون\",\"picker.color.hue\":\"هيو جامعي\",\"picker.color.circle\":\"دائرة منتقي\",\"picker.color.compact\":\"القارضون المدمجة\",\"picker.color.block\":\"بلوك جامعي\",\"picker.color.chrome\":\"كروم المنتقون\",\"picker.color.github\":\"جيثب بيكرز\",\"picker.color.twitter\":\"قارعي التغريد\",\"picker.color.withRedux\":\"مع Redux\",\"picker.color.sketch\":\"صانعي رسم\",\"picker.color.material\":\"جامعي المواد\",\"picker.color.slider\":\"المتزلجون جامعي\",\"picker.color.basic\":\"القتلة الأساسيين\",\"picker.color.basicToggle\":\"تبديل الأساسي\",\"picker.color.custom\":\"جامعي مخصص\",\"picker.color.customPointer\":\"مؤشر مخصص\",\"picker.color.photoshop\":\"قارورة فوتوشوب\",\"picker.color.swatches\":\"حوامل المنتزعون\",\"picker.color.basicPositioning\":\"المواقع الأساسية\",\"sidebar.documents\":\"مستندات\",\"sidebar.documents.changelog\":\"التغيير\",\"sidebar.documents.installation\":\"التركيب\",\"sidebar.dashboard.listing\":\"قائمة\",\"sidebar.dashboard.crypto\":\"التشفير\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"مع الرسوم المتحركة\",\"sidebar.map.curved.lines\":\"مع الخطوط المنحنية\",\"sidebar.map.zooming.countries\":\"البلدان التكبير\",\"sidebar.map.patterns\":\"خريطة مع أنماط\",\"sidebar.map.capitals.map\":\"خريطة العواصم\",\"sidebar.map.markers\":\"علامات الخريطة\",\"sidebar.map.flight.routes\":\"رحلات الطيران\",\"sidebar.map.choropleth\":\"خريطة الحرارة\",\"sidebar.map.grouped.countries\":\"الدول المتجمعة\",\"sidebar.map.bubbles\":\"خريطة مع فقاعات\",\"sidebar.map.drill.down\":\"حفر أسفل الخريطة\",\"sidebar.map.multiple.areas\":\"مجالات متعددة\",\"sidebar.map.weather\":\"خريطة الطقس\",\"sidebar.extensions.shuffle\":\"خلط\",\"sidebar.extensions.profile\":\"الملف الشخصي\",\"sidebar.social\":\"التطبيقات الاجتماعية\"}");

/***/ }),

/***/ "./lngProvider/locales/en_US.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/en_US.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.wall, sidebar.notes, sidebar.crud, sidebar.pickers, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.map, sidebar.algolia, sidebar.firebase.crud, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"A new version will be released on December 25th. Stay tuned!\",\"sidebar.main\":\"Main\",\"sidebar.dashboard\":\"Dashboard\",\"sidebar.layouts\":\"Layouts\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Components\",\"sidebar.components.general\":\"General\",\"sidebar.general.button\":\"Button\",\"sidebar.general.icon\":\"Icon\",\"sidebar.components.navigation\":\"Navigation\",\"sidebar.navigation.affix\":\"Affix\",\"sidebar.navigation.breadcrumb\":\"Breadcrumb\",\"sidebar.navigation.dropdown\":\"Dropdown\",\"sidebar.navigation.menu\":\"Menu\",\"sidebar.navigation.pagination\":\"Pagination\",\"sidebar.navigation.steps\":\"Steps\",\"sidebar.components.dataEntry\":\"Data Entry\",\"sidebar.dataEntry.autoComplete\":\"AutoComplete\",\"sidebar.dataEntry.checkbox\":\"Checkbox\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Datepicker\",\"sidebar.dataEntry.form\":\"Form\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"Input\",\"sidebar.dataEntry.mention\":\"Mention\",\"sidebar.dataEntry.rate\":\"Rate\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Switch\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Select\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transfer\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Upload\",\"sidebar.components.dataDisplay\":\"Data Display\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Badge\",\"sidebar.dataDisplay.collapse\":\"Collapse\",\"sidebar.dataDisplay.carousel\":\"Carousel\",\"sidebar.dataDisplay.card\":\"Card\",\"sidebar.dataDisplay.calender\":\"Calender\",\"sidebar.dataDisplay.list\":\"List\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Tree\",\"sidebar.dataDisplay.toolTips\":\"Tooltips\",\"sidebar.dataDisplay.timeLine\":\"Timeline\",\"sidebar.dataDisplay.tag\":\"Tag\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"Table\",\"sidebar.components.feedBack\":\"Feedback\",\"sidebar.feedBack.alert\":\"Alert\",\"sidebar.feedBack.modal\":\"Modal\",\"sidebar.feedBack.message\":\"Message\",\"sidebar.feedBack.notification\":\"Notification\",\"sidebar.feedBack.progress\":\"Progress\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Spin\",\"sidebar.components.other\":\"Other\",\"sidebar.other.anchor\":\"Anchor\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divider\",\"sidebar.widgets\":\"Widgets\",\"sidebar.metrics\":\"Metrics\",\"sidebar.view\":\"View\",\"sidebar.view.basicTable\":\"Basic Table\",\"sidebar.view.dataTable\":\"Data Table\",\"sidebar.extensions\":\"Extensions\",\"sidebar.extensions.editior\":\"Editior\",\"sidebar.extensions.dragNDrop\":\"Drag & Drop\",\"sidebar.extensions.sweetAlert\":\"Sweet Alert\",\"sidebar.extensions.notification\":\"Notification\",\"sidebar.extensions.reactDates\":\"React Dates\",\"sidebar.extensions.dropZone\":\"Drop Zone\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.charts\":\"Charts\",\"sidebar.apps\":\"Apps\",\"sidebar.mailApp\":\"Mail App\",\"sidebar.todoApp\":\"Todo App\",\"sidebar.contactsApp\":\"Contacts App\",\"sidebar.chatApp\":\"Chat App\",\"sidebar.wall\":\"Wall App\",\"sidebar.notes\":\"Notes\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers\":\"Pickers\",\"sidebar.pickers.dateTimePickers\":\"Date & Time Pickers\",\"sidebar.pickers.colorPickers\":\"Color Pickers\",\"sidebar.chart\":\"Chart\",\"sidebar.chart.line\":\"Line Chart\",\"sidebar.chart.bar\":\"Bar Chart\",\"sidebar.chart.area\":\"Area Chart\",\"sidebar.chart.composed\":\"Composed Chart\",\"sidebar.chart.scatter\":\"Scatter Chart\",\"sidebar.chart.pie\":\"Pie Chart\",\"sidebar.chart.radial\":\"Radial Chart\",\"sidebar.chart.radar\":\"Radar Chart\",\"sidebar.chart.tree\":\"Tree Chart\",\"sidebar.map.simple\":\"Simple Map\",\"sidebar.map.styled\":\"Styled Map\",\"sidebar.map.geoLocation\":\"Geo Location\",\"sidebar.map.mapDirection\":\"Map Direction\",\"sidebar.map.overlay\":\"Map Overlay\",\"sidebar.map.kmLayer\":\"Map Km Layer\",\"sidebar.map.popupInfo\":\"Map Popup Info\",\"sidebar.map.trafficLayer\":\"Map Traffic Layer\",\"sidebar.map.streetView\":\"Street View\",\"sidebar.map.eventListener\":\"Event Listener\",\"sidebar.map.mapDrawing\":\"Map Drawing\",\"sidebar.map.mapClustering\":\"Map Clustering\",\"sidebar.modules\":\"Modules\",\"sidebar.calendar\":\"Calendar\",\"sidebar.calendar.basic\":\"Basic\",\"sidebar.calendar.cultures\":\"Cultures\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Popup\",\"sidebar.calendar.rendering\":\"Rendering\",\"sidebar.calendar.selectable\":\"Selectable\",\"sidebar.calendar.timeslots\":\"Timeslots\",\"sidebar.mail.title\":\"Mail\",\"sidebar.mail.compose\":\"COMPOSE\",\"sidebar.mail.mailbox\":\"Mailbox\",\"sidebar.mail.filters\":\"Filters\",\"sidebar.mail.labels\":\"Labels\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Product List\",\"sidebar.eCommerce.productGrid\":\"Product Grid\",\"sidebar.extraComponents\":\"Extra Components\",\"sidebar.inBuiltApp\":\"In-built Apps\",\"sidebar.extraElements.callouts\":\"Callout\",\"sidebar.extraElements.testimonials\":\"Testimonials\",\"sidebar.timeLine\":\"Time Line\",\"sidebar.timeLine.default\":\"Default\",\"sidebar.timeLine.defaultwithIcons\":\"Default with Icons\",\"sidebar.timeLine.leftAligned\":\"Left Aligned\",\"sidebar.extraElements.pricingTable\":\"Pricing Table\",\"sidebar.customViews\":\"Custom Views\",\"sidebar.listType\":\"List Type\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Plain List View\",\"sidebar.listType.withDivider\":\"Plain List with Divider\",\"sidebar.listType.cardListView\":\"Cards List View\",\"sidebar.extraPages.404\":\"404 Error Page\",\"sidebar.extraPages.500\":\"500 Error Page\",\"sidebar.extraPages\":\"Extra Pages\",\"app.userAuth\":\"User Auth\",\"app.userAuth.login\":\"Login\",\"app.userAuth.signIn\":\"Sign In\",\"app.userAuth.send\":\"SEND\",\"app.userAuth.bySigning\":\"By Signing Up, you can avail full features of our services.\",\"app.userAuth.or\":\"or\",\"app.userAuth.forgotPassword\":\"Forgot Password\",\"app.userAuth.forgot\":\"Don't worry. Recovering the password is easy.Just tell us the email you have registered with jumbo\",\"app.userAuth.signUp\":\"Sign Up\",\"app.userAuth.getAccount\":\"Get an account !!!\",\"app.userAuth.resetPassword\":\"Reset Password\",\"app.userAuth.reset\":\"RESET\",\"app.userAuth.lockScreen\":\"Lock Screen\",\"app.userAuth.unLock\":\"UNLOCK\",\"appModule.enterPasswordUnlock\":\"Enter your password to unlock the screen!\",\"appModule.enterPasswordReset\":\"Enter a new password for your account\",\"appModule.loginSuccessfully\":\"Login Successfully\",\"appModule.password\":\"Password\",\"appModule.email\":\"Email\",\"appModule.name\":\"Name\",\"appModule.phone\":\"Phone\",\"appModule.designation\":\"Designation\",\"appModule.regsiter\":\"Regsiter\",\"appModule.regsiterNow\":\"Regsiter No\",\"appModule.hvAccount\":\"Have an account\",\"appModule.createAccount\":\"Create an account\",\"appModule.termAndCondition\":\"Term & Condition\",\"appModule.iAccept\":\"by signing up, I accept\",\"todo\":\"To-Do\",\"todo.addTask\":\"ADD TASK\",\"todo.all\":\"All\",\"todo.filters\":\"Filters\",\"todo.labels\":\"Labels\",\"chat.selectUserChat\":\"Select User to start Chat\",\"chat.selectContactChat\":\"Select contact to start Chat\",\"chat.chatUser\":\"Chats\",\"chat.contacts\":\"Contacts\",\"chat.searchStartNewChat\":\"Search or start new chat\",\"chat.typeMessage\":\"Type and hit enter to send message\",\"chat.status\":\"it's a status....not your diary...\",\"contact.saveContact\":\"Save Contact\",\"contact.addContact\":\"Add Contact\",\"contact.searchContact\":\"Search contact\",\"mail.mailbox\":\"Mailbox\",\"mail.compose\":\"COMPOSE\",\"mail.filters\":\"Filters\",\"mail.labels\":\"Labels\",\"mail.title\":\"New Message\",\"eCommerce.buyNow\":\"Buy Now\",\"eCommerce.addToCart\":\"Add To Cart\",\"eCommerce.readMore\":\"Read More\",\"callouts.viewRange\":\"VIEW RANGE\",\"callouts.basic\":\"Basic\",\"extraElements.callout\":\"Extra Element\",\"testimonials.basic\":\"Basic\",\"testimonials.classic\":\"Classic\",\"testimonials.standard\":\"Standard\",\"extraElements.testimonials\":\"Testimonials\",\"button.modify\":\"Modify\",\"button.delete\":\"Delete\",\"pricingTable.basic\":\"Basic\",\"pricingTable.circle\":\"Circle\",\"pricingTable.classic\":\"Classic\",\"pricingTable.dark\":\"Dark\",\"pricingTable.personal\":\"PERSONAL\",\"pricingTable.easyTranslation\":\"Easy Translation\",\"pricingTable.awesomeGoogleFonts\":\"Awesome Google Fonts\",\"pricingTable.hotelBookingSystem\":\"Hotel Booking System\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Location Finder App\",\"pricingTable.buyNow\":\"buy now\",\"pricingTable.business\":\"BUSINESS\",\"pricingTable.professional\":\"PROFESSIONAL\",\"button.yes\":\"Yes\",\"button.no\":\"No\",\"extraPages.404Msg\":\"Oops, an error has occurred. Page not found!\",\"extraPages.500Msg\":\"Sorry, server goes wrong\",\"extraPages.goHome\":\"Go to Home\",\"extension.sweetAlerts\":\"Sweet Alerts\",\"sweetAlerts.basic\":\"Basic\",\"sweetAlerts.description\":\"With Description\",\"sweetAlerts.success\":\"Success\",\"sweetAlerts.warning\":\"Warning\",\"sweetAlerts.custom\":\"Custom\",\"sweetAlerts.htmlTag\":\"Html Tag\",\"sweetAlerts.prompt\":\"Prompt\",\"sweetAlerts.itsBlue\":\"It's Green!\",\"sweetAlerts.passwordPrompt\":\"Password Prompt\",\"sweetAlerts.customStyle\":\"Custom Style\",\"sweetAlerts.itPretty\":\"It's pretty, isn't it?\",\"sweetAlerts.btnClicked\":\"You clicked the button!\",\"sweetAlerts.youWillFind\":\"You will find they are up!\",\"sweetAlerts.youWillNotAble\":\"You will not be able to recover this imaginary file!\",\"sweetAlerts.hereIsaMessage\":\"Here's a message!\",\"sweetAlerts.goodJob\":\"Good job!\",\"sweetAlerts.yesDeleteIt\":\"Yes, delete it!\",\"sweetAlerts.areYouSure\":\"Are you sure?\",\"sweetAlerts.doYouLikeThumb\":\"Do you like thumbs?\",\"sweetAlerts.anInput\":\"An input!\",\"sweetAlerts.writeSomethingInteresting\":\"Write something interesting:\",\"sweetAlerts.writeSomething\":\"Write something\",\"sweetAlerts.youMustEnterPassword\":\"You must enter your password!\",\"sweetAlerts.enterPassword\":\"Enter Password\",\"extension.notification\":\"Notification\",\"notification.infoMsg\":\"Info message\",\"notification.successMessage\":\"Success message\",\"notification.warningMessage\":\"Warning message\",\"notification.closeAfter3000ms\":\"Close after 3000ms\",\"notification.errorMessage\":\"Error message\",\"notification.titleHere\":\"Title here\",\"notification.clickMe\":\"Click me!\",\"notification.info\":\"Info\",\"notification.success\":\"Success\",\"notification.warning\":\"Warning\",\"notification.error\":\"Error\",\"sidebar.editors\":\"Editors\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"WYSISWYG Editor\",\"picker.color.alpha\":\"Alpha Pickers\",\"picker.color.hue\":\"Hue Pickers\",\"picker.color.circle\":\"Circle Pickers\",\"picker.color.compact\":\"Compact Pickers\",\"picker.color.block\":\"Block Pickers\",\"picker.color.chrome\":\"Chrome Pickers\",\"picker.color.github\":\"Github Pickers\",\"picker.color.twitter\":\"Twitter Pickers\",\"picker.color.withRedux\":\"With Redux\",\"picker.color.sketch\":\"Sketch Pickers\",\"picker.color.material\":\"Material Pickers\",\"picker.color.slider\":\"Slider Pickers\",\"picker.color.basic\":\"Basic Pickers\",\"picker.color.basicToggle\":\"Basic Toggle\",\"picker.color.custom\":\"Custom Pickers\",\"picker.color.customPointer\":\"Custom Pointer\",\"picker.color.photoshop\":\"Photoshop Pickers\",\"picker.color.swatches\":\"Swatches Pickers\",\"picker.color.basicPositioning\":\"Basic Positioning\",\"sidebar.documents\":\"Documents\",\"sidebar.documents.changelog\":\"Changelog\",\"sidebar.documents.installation\":\"Installation\",\"sidebar.dashboard.listing\":\"Listing\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.map\":\"Map\",\"sidebar.algolia\":\"Algolia\",\"sidebar.firebase.crud\":\"Firebase Curd\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"With Animations\",\"sidebar.map.curved.lines\":\"With Curved Lines\",\"sidebar.map.zooming.countries\":\"Zooming Countries\",\"sidebar.map.patterns\":\"Map With Patterns\",\"sidebar.map.capitals.map\":\"Capitals Map\",\"sidebar.map.markers\":\"Map Markers\",\"sidebar.map.flight.routes\":\"Flight Routes\",\"sidebar.map.choropleth\":\"Heat Map\",\"sidebar.map.grouped.countries\":\"Grouped Countries\",\"sidebar.map.bubbles\":\"Map with Bubbles\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Multiple Areas\",\"sidebar.map.weather\":\"Weather map\",\"sidebar.extensions.shuffle\":\"Shuffle\",\"sidebar.extensions.profile\":\"Profile\",\"sidebar.social\":\"Social Apps\"}");

/***/ }),

/***/ "./lngProvider/locales/es_ES.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/es_ES.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"Se lanzará una nueva versión el 25 de diciembre. ¡Manténganse al tanto!\",\"sidebar.main\":\"Principal\",\"sidebar.dashboard\":\"Tablero\",\"sidebar.layouts\":\"Diseños\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Componentes\",\"sidebar.components.general\":\"General\",\"sidebar.general.button\":\"Botón\",\"sidebar.general.icon\":\"Icono\",\"sidebar.components.navigation\":\"Navegación\",\"sidebar.navigation.affix\":\"Afijo\",\"sidebar.navigation.breadcrumb\":\"Migaja de pan\",\"sidebar.navigation.dropdown\":\"Desplegable\",\"sidebar.navigation.menu\":\"Menú\",\"sidebar.navigation.pagination\":\"Paginación\",\"sidebar.navigation.steps\":\"Pasos\",\"sidebar.components.dataEntry\":\"Entrada de datos\",\"sidebar.dataEntry.autoComplete\":\"Autocompletar\",\"sidebar.dataEntry.checkbox\":\"Caja\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Selector de fechas\",\"sidebar.dataEntry.form\":\"Formar\",\"sidebar.dataEntry.inputNumber\":\"Número de entrada\",\"sidebar.dataEntry.input\":\"Entrada\",\"sidebar.dataEntry.mention\":\"Mencionar\",\"sidebar.dataEntry.rate\":\"Tarifa\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Cambiar\",\"sidebar.dataEntry.slider\":\"Control deslizante\",\"sidebar.dataEntry.select\":\"Seleccionar\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transferir\",\"sidebar.dataEntry.timePicker\":\"Selector de tiempo\",\"sidebar.dataEntry.upload\":\"Subir\",\"sidebar.components.dataDisplay\":\"Visualización de datos\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Distintivo\",\"sidebar.dataDisplay.collapse\":\"Colapso\",\"sidebar.dataDisplay.carousel\":\"Carrusel\",\"sidebar.dataDisplay.card\":\"Tarjeta\",\"sidebar.dataDisplay.calender\":\"Calendario\",\"sidebar.dataDisplay.list\":\"Lista\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Árbol\",\"sidebar.dataDisplay.toolTips\":\"Información sobre herramientas\",\"sidebar.dataDisplay.timeLine\":\"Cronología\",\"sidebar.dataDisplay.tag\":\"Etiqueta\",\"sidebar.dataDisplay.tabs\":\"Pestañas\",\"sidebar.dataDisplay.table\":\"Mesa\",\"sidebar.components.feedBack\":\"Realimentación\",\"sidebar.feedBack.alert\":\"Alerta\",\"sidebar.feedBack.modal\":\"Modal\",\"sidebar.feedBack.message\":\"Mensaje\",\"sidebar.feedBack.notification\":\"Notificación\",\"sidebar.feedBack.progress\":\"Progreso\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Girar\",\"sidebar.components.other\":\"Otro\",\"sidebar.other.anchor\":\"Ancla\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divisor\",\"sidebar.widgets\":\"Widgets\",\"sidebar.metrics\":\"Métrica\",\"sidebar.view\":\"Ver\",\"sidebar.view.basicTable\":\"Tabla básica\",\"sidebar.view.dataTable\":\"Tabla de datos\",\"sidebar.extensions\":\"Extensiones\",\"sidebar.extensions.editior\":\"Editor\",\"sidebar.extensions.dragNDrop\":\"Arrastrar y soltar\",\"sidebar.extensions.sweetAlert\":\"Sweet Alert\",\"sidebar.extensions.notification\":\"Notificación\",\"sidebar.extensions.reactDates\":\"Fechas de reacción\",\"sidebar.extensions.dropZone\":\"Zona de descenso\",\"sidebar.googleMap\":\"Mapa de Google\",\"sidebar.charts\":\"Gráficos\",\"sidebar.apps\":\"Aplicaciones\",\"sidebar.mailApp\":\"Aplicación de correo\",\"sidebar.todoApp\":\"Aplicación de Todo\",\"sidebar.contactsApp\":\"Aplicación Contactos\",\"sidebar.chatApp\":\"Aplicación de chat\",\"sidebar.notes\":\"Notas\",\"sidebar.pickers\":\"Pickers\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"Selector de fecha y hora\",\"sidebar.pickers.colorPickers\":\"Selector de color\",\"sidebar.chart\":\"Gráfico\",\"sidebar.chart.line\":\"Gráfico de linea\",\"sidebar.chart.bar\":\"Gráfico de barras\",\"sidebar.chart.area\":\"Carta de área\",\"sidebar.chart.composed\":\"Gráfico compuesto\",\"sidebar.chart.scatter\":\"Gráfico de dispersión\",\"sidebar.chart.pie\":\"Gráfico circular\",\"sidebar.chart.radial\":\"Gráfico radial\",\"sidebar.chart.radar\":\"Gráfico de radar\",\"sidebar.chart.tree\":\"Árbol de Carta\",\"sidebar.map\":\"Mapa de Google\",\"sidebar.map.simple\":\"Mapa simple\",\"sidebar.map.styled\":\"Mapa de estilo\",\"sidebar.map.geoLocation\":\"Ubicación geográfica\",\"sidebar.map.mapDirection\":\"Dirección del mapa\",\"sidebar.map.overlay\":\"Superposición de mapa\",\"sidebar.map.kmLayer\":\"Mapa Km Layer\",\"sidebar.map.popupInfo\":\"Mapa de información emergente\",\"sidebar.map.trafficLayer\":\"Mapa Traffic Layer\",\"sidebar.map.streetView\":\"vista de calle\",\"sidebar.map.eventListener\":\"Escucha del evento\",\"sidebar.map.mapDrawing\":\"Mapa de dibujo\",\"sidebar.map.mapClustering\":\"Agrupación de mapas\",\"sidebar.modules\":\"Módulos\",\"sidebar.calendar\":\"Calendario\",\"sidebar.calendar.basic\":\"BASIC\",\"sidebar.calendar.cultures\":\"Culturas\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Surgir\",\"sidebar.calendar.rendering\":\"Representación\",\"sidebar.calendar.selectable\":\"Seleccionable\",\"sidebar.calendar.timeslots\":\"Ranuras de tiempo\",\"sidebar.mail.title\":\"Correo\",\"sidebar.mail.compose\":\"COMPONER\",\"sidebar.mail.mailbox\":\"Buzón\",\"sidebar.mail.filters\":\"filtros\",\"sidebar.mail.labels\":\"Etiquetas\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Lista de productos\",\"sidebar.eCommerce.productGrid\":\"Cuadrícula de producto\",\"sidebar.extraComponents\":\"Componentes extra\",\"sidebar.inBuiltApp\":\"Aplicaciones integradas\",\"sidebar.extraElements.callouts\":\"Gritar\",\"sidebar.extraElements.testimonials\":\"Testimonios\",\"sidebar.timeLine\":\"Time Line\",\"sidebar.timeLine.default\":\"Defecto\",\"sidebar.timeLine.defaultwithIcons\":\"Predeterminado con iconos\",\"sidebar.timeLine.leftAligned\":\"Alineado a la izquierda\",\"sidebar.extraElements.pricingTable\":\"Tabla de precios\",\"sidebar.customViews\":\"Vistas personalizadas\",\"sidebar.listType\":\"Tipo de lista\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Vista de lista simple\",\"sidebar.listType.withDivider\":\"Lista simple con divisor\",\"sidebar.listType.cardListView\":\"Vista de lista de tarjetas\",\"sidebar.extraPages.404\":\"Página de error 404\",\"sidebar.extraPages.500\":\"500 página de error\",\"sidebar.extraPages\":\"Páginas extra\",\"app.userAuth\":\"Usuario Auth\",\"app.userAuth.login\":\"Iniciar sesión\",\"app.userAuth.signIn\":\"Registrarse\",\"app.userAuth.send\":\"ENVIAR\",\"app.userAuth.bySigning\":\"Al registrarse, puede aprovechar las características completas de nuestros servicios.\",\"app.userAuth.or\":\"o\",\"app.userAuth.forgotPassword\":\"Se te olvidó tu contraseña\",\"app.userAuth.forgot\":\"No te preocupes Recuperar la contraseña es fácil. Simplemente díganos el correo electrónico que ha registrado con jumbo\",\"app.userAuth.signUp\":\"Regístrate\",\"app.userAuth.getAccount\":\"Obtener una cuenta !!!\",\"app.userAuth.resetPassword\":\"Restablecer la contraseña\",\"app.userAuth.reset\":\"REINICIAR\",\"app.userAuth.lockScreen\":\"Bloquear pantalla\",\"app.userAuth.unLock\":\"DESBLOQUEAR\",\"appModule.enterPasswordUnlock\":\"¡Ingresa tu contraseña para desbloquear la pantalla!\",\"appModule.enterPasswordReset\":\"Ingrese una nueva contraseña para su cuenta\",\"appModule.loginSuccessfully\":\"Iniciar sesión exitosamente\",\"appModule.password\":\"Contraseña\",\"appModule.email\":\"Email\",\"appModule.name\":\"Nombre\",\"appModule.phone\":\"Teléfono\",\"appModule.designation\":\"Designacion\",\"appModule.regsiter\":\"Registro\",\"appModule.regsiterNow\":\"Registrarse No\",\"appModule.hvAccount\":\"Tener una cuenta\",\"appModule.createAccount\":\"Crea una cuenta\",\"appModule.termAndCondition\":\"Término y condición\",\"appModule.iAccept\":\"registrándome, acepto\",\"todo\":\"Que hacer\",\"todo.addTask\":\"AGREGAR TAREA\",\"todo.all\":\"Todas\",\"todo.filters\":\"Filtros\",\"todo.labels\":\"Etiquetas\",\"chat.selectUserChat\":\"Seleccionar usuario para iniciar el chat\",\"chat.selectContactChat\":\"Seleccionar contacto para iniciar el chat\",\"chat.chatUser\":\"Chats\",\"chat.contacts\":\"Contactos\",\"chat.searchStartNewChat\":\"Buscar o iniciar un chat nuevo\",\"chat.typeMessage\":\"Escribe y presiona enter para enviar el mensaje\",\"chat.status\":\"es un estado ... no es tu diario ...\",\"contact.saveContact\":\"Guardar contacto\",\"contact.addContact\":\"Agregar contacto\",\"contact.searchContact\":\"Buscar contacto\",\"mail.mailbox\":\"Buzón\",\"mail.compose\":\"COMPONER\",\"mail.filters\":\"Filtros\",\"mail.labels\":\"Etiquetas\",\"mail.title\":\"Nuevo mensaje\",\"eCommerce.buyNow\":\"Compra ahora\",\"eCommerce.addToCart\":\"AÑADIR A LA CESTA\",\"eCommerce.readMore\":\"LEE MAS\",\"callouts.viewRange\":\"VER RANGO\",\"callouts.basic\":\"BASIC\",\"extraElements.callout\":\"Elemento extra\",\"testimonials.basic\":\"BASIC\",\"testimonials.classic\":\"Clásico\",\"testimonials.standard\":\"Estándar\",\"extraElements.testimonials\":\"Testimonios\",\"button.modify\":\"Modificar\",\"button.delete\":\"Borrar\",\"pricingTable.basic\":\"BASIC\",\"pricingTable.circle\":\"Circulo\",\"pricingTable.classic\":\"Clásico\",\"pricingTable.dark\":\"Oscuro\",\"pricingTable.personal\":\"PERSONAL\",\"pricingTable.easyTranslation\":\"Traducción fácil\",\"pricingTable.awesomeGoogleFonts\":\"Fuentes increíbles de Google\",\"pricingTable.hotelBookingSystem\":\"Sistema de reserva de hotel\",\"pricingTable.emailComposeInterface\":\"Interfaz de redacción de correo electrónico\",\"pricingTable.locationFinderApp\":\"Aplicación de buscador de ubicación\",\"pricingTable.buyNow\":\"Compra ahora...\",\"pricingTable.business\":\"NEGOCIO\",\"pricingTable.professional\":\"PROFESIONAL\",\"button.yes\":\"Sí\",\"button.no\":\"No\",\"extraPages.404Msg\":\"Vaya, ha ocurrido un error. ¡Página no encontrada!\",\"extraPages.500Msg\":\"Lo siento, el servidor sale mal\",\"extraPages.goHome\":\"Ir a casa\",\"extension.sweetAlerts\":\"Sweet Alerts\",\"sweetAlerts.basic\":\"BASIC\",\"sweetAlerts.description\":\"Con descripción\",\"sweetAlerts.success\":\"Éxito\",\"sweetAlerts.warning\":\"Advertencia\",\"sweetAlerts.custom\":\"Personalizado\",\"sweetAlerts.htmlTag\":\"Etiqueta Html\",\"sweetAlerts.prompt\":\"Rápido\",\"sweetAlerts.itsBlue\":\"¡Es azul!\",\"sweetAlerts.passwordPrompt\":\"Indicación de contraseña\",\"sweetAlerts.customStyle\":\"Estilo personalizado\",\"sweetAlerts.itPretty\":\"Es lindo, ¿verdad?\",\"sweetAlerts.btnClicked\":\"Hiciste clic en el botón!\",\"sweetAlerts.youWillFind\":\"¡Encontrarás que están listos!\",\"sweetAlerts.youWillNotAble\":\"¡No podrás recuperar este archivo imaginario!\",\"sweetAlerts.hereIsaMessage\":\"¡Aquí hay un mensaje!\",\"sweetAlerts.goodJob\":\"¡Buen trabajo!\",\"sweetAlerts.yesDeleteIt\":\"Sí, eliminarlo!\",\"sweetAlerts.areYouSure\":\"¿Estás seguro?\",\"sweetAlerts.doYouLikeThumb\":\"¿Te gustan los pulgares?\",\"sweetAlerts.anInput\":\"Una entrada!\",\"sweetAlerts.writeSomethingInteresting\":\"Escribe algo interesante:\",\"sweetAlerts.writeSomething\":\"Escribe algo\",\"sweetAlerts.youMustEnterPassword\":\"¡Debes ingresar tu contraseña!\",\"sweetAlerts.enterPassword\":\"Introducir la contraseña\",\"extension.notification\":\"Notificación\",\"notification.infoMsg\":\"Mensaje de información\",\"notification.successMessage\":\"Mensaje de éxito\",\"notification.warningMessage\":\"Mensaje de advertencia\",\"notification.closeAfter3000ms\":\"Cerrar después de 3000ms\",\"notification.errorMessage\":\"Mensaje de error\",\"notification.titleHere\":\"Título aquí\",\"notification.clickMe\":\"¡Haz click en mi!\",\"notification.info\":\"Información\",\"notification.success\":\"Éxito\",\"notification.warning\":\"Advertencia\",\"notification.error\":\"Error\",\"sidebar.editors\":\"Editores\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"Editor WYSIWYG\",\"picker.color.alpha\":\"Recolectores alfa\",\"picker.color.hue\":\"Recogedores de tono\",\"picker.color.circle\":\"Seleccionadores de círculo\",\"picker.color.compact\":\"Selector compacto\",\"picker.color.block\":\"Selector de bloque\",\"picker.color.chrome\":\"Recogedores de Chrome\",\"picker.color.github\":\"Segadores Github\",\"picker.color.twitter\":\"Seleccionadores de Twitter\",\"picker.color.withRedux\":\"Con Redux\",\"picker.color.sketch\":\"Recogedores de bosquejos\",\"picker.color.material\":\"Recogedores de materiales\",\"picker.color.slider\":\"Seleccionadores de control deslizante\",\"picker.color.basic\":\"Selector básico\",\"picker.color.basicToggle\":\"Alternar básico\",\"picker.color.custom\":\"Recogedores personalizados\",\"picker.color.customPointer\":\"Puntero personalizado\",\"picker.color.photoshop\":\"Selector de Photoshop\",\"picker.color.swatches\":\"Selector de muestras\",\"picker.color.basicPositioning\":\"Posicionamiento Básico\",\"sidebar.documents\":\"Documentos\",\"sidebar.documents.changelog\":\"Registro de cambios\",\"sidebar.documents.installation\":\"Instalación\",\"sidebar.dashboard.listing\":\"Listing\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"Con animaciones\",\"sidebar.map.curved.lines\":\"Con líneas curvas\",\"sidebar.map.zooming.countries\":\"Zooming Países\",\"sidebar.map.patterns\":\"Mapa con patrones\",\"sidebar.map.capitals.map\":\"Mapa de capitales\",\"sidebar.map.markers\":\"Marcadores de mapa\",\"sidebar.map.flight.routes\":\"Rutas de vuelo\",\"sidebar.map.choropleth\":\"Mapa de calor\",\"sidebar.map.grouped.countries\":\"Países agrupados\",\"sidebar.map.bubbles\":\"Mapa con burbujas\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Áreas múltiples\",\"sidebar.map.weather\":\"Weather map\",\"sidebar.extensions.shuffle\":\"Barajar\",\"sidebar.extensions.profile\":\"Perfil\",\"sidebar.social\":\"Aplicaciones sociales\"}");

/***/ }),

/***/ "./lngProvider/locales/fr_FR.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/fr_FR.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"Une nouvelle version sortira le 25 décembre. Restez à l'écoute!\",\"sidebar.main\":\"Principale\",\"sidebar.dashboard\":\"Tableau de bord\",\"sidebar.layouts\":\"Layouts\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Composants\",\"sidebar.components.general\":\"Général\",\"sidebar.general.button\":\"Bouton\",\"sidebar.general.icon\":\"Icône\",\"sidebar.components.navigation\":\"La navigation\",\"sidebar.navigation.affix\":\"Affixe\",\"sidebar.navigation.breadcrumb\":\"Miette de pain\",\"sidebar.navigation.dropdown\":\"Menu déroulant\",\"sidebar.navigation.menu\":\"Menu\",\"sidebar.navigation.pagination\":\"Pagination\",\"sidebar.navigation.steps\":\"Pas\",\"sidebar.components.dataEntry\":\"La saisie des données\",\"sidebar.dataEntry.autoComplete\":\"Saisie semi-automatique\",\"sidebar.dataEntry.checkbox\":\"Case à cocher\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Sélecteur de date\",\"sidebar.dataEntry.form\":\"Forme\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"Contribution\",\"sidebar.dataEntry.mention\":\"Mention\",\"sidebar.dataEntry.rate\":\"Taux\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Commutateur\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Sélectionner\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transfert\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Télécharger\",\"sidebar.components.dataDisplay\":\"Affichage des données\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Badge\",\"sidebar.dataDisplay.collapse\":\"Effondrer\",\"sidebar.dataDisplay.carousel\":\"Carrousel\",\"sidebar.dataDisplay.card\":\"Carte\",\"sidebar.dataDisplay.calender\":\"Calendrier\",\"sidebar.dataDisplay.list\":\"liste\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Arbre\",\"sidebar.dataDisplay.toolTips\":\"Info-bulles\",\"sidebar.dataDisplay.timeLine\":\"Chronologie\",\"sidebar.dataDisplay.tag\":\"Marque\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"Table\",\"sidebar.components.feedBack\":\"Retour d'information\",\"sidebar.feedBack.alert\":\"Alerte\",\"sidebar.feedBack.modal\":\"Modal\",\"sidebar.feedBack.message\":\"Message\",\"sidebar.feedBack.notification\":\"Notification\",\"sidebar.feedBack.progress\":\"Le progrès\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Tourner\",\"sidebar.components.other\":\"Autre\",\"sidebar.other.anchor\":\"Ancre\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Diviseur\",\"sidebar.widgets\":\"Widgets\",\"sidebar.metrics\":\"Métrique\",\"sidebar.view\":\"Vue\",\"sidebar.view.basicTable\":\"Table de base\",\"sidebar.view.dataTable\":\"Tableau de données\",\"sidebar.extensions\":\"Extensions\",\"sidebar.extensions.editior\":\"Éditeur\",\"sidebar.extensions.dragNDrop\":\"Drag & Drop\",\"sidebar.extensions.sweetAlert\":\"Alerte douce\",\"sidebar.extensions.notification\":\"Notification\",\"sidebar.extensions.reactDates\":\"Réagissez les dates\",\"sidebar.extensions.dropZone\":\"Zone de largage\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.charts\":\"Graphiques\",\"sidebar.apps\":\"applications\",\"sidebar.mailApp\":\"Application de messagerie\",\"sidebar.todoApp\":\"Todo App\",\"sidebar.contactsApp\":\"Contacts App\",\"sidebar.chatApp\":\"App chat\",\"sidebar.notes\":\"Remarques\",\"sidebar.pickers\":\"Pickers\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"Sélecteurs de date et d'heure\",\"sidebar.pickers.colorPickers\":\"Color Pickers\",\"sidebar.chart\":\"Graphique\",\"sidebar.chart.line\":\"Graphique en ligne\",\"sidebar.chart.bar\":\"Diagramme à bandes\",\"sidebar.chart.area\":\"Graphique de zone\",\"sidebar.chart.composed\":\"Tableau composé\",\"sidebar.chart.scatter\":\"Diagramme de dispersion\",\"sidebar.chart.pie\":\"Camembert\",\"sidebar.chart.radial\":\"Graphique radial\",\"sidebar.chart.radar\":\"Graphique radar\",\"sidebar.chart.tree\":\"Arbre\",\"sidebar.map\":\"Google Map\",\"sidebar.map.simple\":\"Carte simple\",\"sidebar.map.styled\":\"Carte stylée\",\"sidebar.map.geoLocation\":\"Emplacement géographique\",\"sidebar.map.mapDirection\":\"Direction de la carte\",\"sidebar.map.overlay\":\"Superposition de carte\",\"sidebar.map.kmLayer\":\"Carte Km Layer\",\"sidebar.map.popupInfo\":\"Map Popup Info\",\"sidebar.map.trafficLayer\":\"Couche routière\",\"sidebar.map.streetView\":\"Street View\",\"sidebar.map.eventListener\":\"Event Listener\",\"sidebar.map.mapDrawing\":\"Dessin de carte\",\"sidebar.map.mapClustering\":\"Clustering de carte\",\"sidebar.modules\":\"Modules\",\"sidebar.calendar\":\"Calendrier\",\"sidebar.calendar.basic\":\"De base\",\"sidebar.calendar.cultures\":\"Des cultures\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Apparaitre\",\"sidebar.calendar.rendering\":\"Le rendu\",\"sidebar.calendar.selectable\":\"Sélectionnable\",\"sidebar.calendar.timeslots\":\"Tranches de temps\",\"sidebar.mail.title\":\"Courrier\",\"sidebar.mail.compose\":\"COMPOSER\",\"sidebar.mail.mailbox\":\"Boites aux lettres\",\"sidebar.mail.filters\":\"filtres\",\"sidebar.mail.labels\":\"Étiquettes\",\"sidebar.eCommerce\":\"commerce électronique\",\"sidebar.eCommerce.productList\":\"Liste de produits\",\"sidebar.eCommerce.productGrid\":\"Grille de produit\",\"sidebar.extraComponents\":\"Composants supplémentaires\",\"sidebar.inBuiltApp\":\"Applications intégrées\",\"sidebar.extraElements.callouts\":\"Faire appel à\",\"sidebar.extraElements.testimonials\":\"Témoignages\",\"sidebar.timeLine\":\"Chronologie\",\"sidebar.timeLine.default\":\"Défaut\",\"sidebar.timeLine.defaultwithIcons\":\"Par défaut avec des icônes\",\"sidebar.timeLine.leftAligned\":\"Aligné à gauche\",\"sidebar.extraElements.pricingTable\":\"Tableau de tarification\",\"sidebar.customViews\":\"Affichages personnalisés\",\"sidebar.listType\":\"Type de liste\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Vue en liste simple\",\"sidebar.listType.withDivider\":\"Liste simple avec diviseur\",\"sidebar.listType.cardListView\":\"Vue liste de cartes\",\"sidebar.extraPages.404\":\"404 Page d'erreur\",\"sidebar.extraPages.500\":\"500 Page d'erreur\",\"sidebar.extraPages\":\"Pages supplémentaires\",\"app.userAuth\":\"Authentification utilisateur\",\"app.userAuth.login\":\"S'identifier\",\"app.userAuth.signIn\":\"Se connecter\",\"app.userAuth.send\":\"ENVOYER\",\"app.userAuth.bySigning\":\"En vous inscrivant, vous pouvez profiter des caractéristiques complètes de nos services.\",\"app.userAuth.or\":\"ou\",\"app.userAuth.forgotPassword\":\"Mot de passe oublié\",\"app.userAuth.forgot\":\"Ne t'inquiète pas. Récupérer le mot de passe est facile. Dites-nous simplement l'email que vous avez enregistré avec jumbo\",\"app.userAuth.signUp\":\"S'inscrire\",\"app.userAuth.getAccount\":\"Avoir un compte !!!\",\"app.userAuth.resetPassword\":\"réinitialiser le mot de passe\",\"app.userAuth.reset\":\"RÉINITIALISER\",\"app.userAuth.lockScreen\":\"Écran verrouillé\",\"app.userAuth.unLock\":\"OUVRIR\",\"appModule.enterPasswordUnlock\":\"Entrez votre mot de passe pour déverrouiller l'écran!\",\"appModule.enterPasswordReset\":\"Entrez un nouveau mot de passe pour votre compte\",\"appModule.loginSuccessfully\":\"Connectez-vous avec succès\",\"appModule.password\":\"Mot de passe\",\"appModule.email\":\"Email\",\"appModule.name\":\"prénom\",\"appModule.phone\":\"Téléphone\",\"appModule.designation\":\"La désignation\",\"appModule.regsiter\":\"registre\",\"appModule.regsiterNow\":\"Inscrivez-vous Non\",\"appModule.hvAccount\":\"Avoir un compte\",\"appModule.createAccount\":\"Créer un compte\",\"appModule.termAndCondition\":\"Terme et condition\",\"appModule.iAccept\":\"en vous inscrivant, j'accepte\",\"todo\":\"Faire\",\"todo.addTask\":\"AJOUTER UNE TÂCHE\",\"todo.all\":\"Tout\",\"todo.filters\":\"Filtres\",\"todo.labels\":\"Étiquettes\",\"chat.selectUserChat\":\"Sélectionnez Utilisateur pour lancer le chat\",\"chat.selectContactChat\":\"Sélectionnez le contact pour démarrer le chat\",\"chat.chatUser\":\"Chats\",\"chat.contacts\":\"Contacts\",\"chat.searchStartNewChat\":\"Rechercher ou démarrer une nouvelle discussion\",\"chat.typeMessage\":\"Tapez et appuyez sur Entrée pour envoyer un message\",\"chat.status\":\"c'est un statut ... pas votre journal ...\",\"contact.saveContact\":\"Enregistrer le contact\",\"contact.addContact\":\"Ajouter le contact\",\"contact.searchContact\":\"Rechercher un contact\",\"mail.mailbox\":\"Boites aux lettres\",\"mail.compose\":\"COMPOSER\",\"mail.filters\":\"Filtres\",\"mail.labels\":\"Étiquettes\",\"mail.title\":\"Nouveau message\",\"eCommerce.buyNow\":\"Acheter maintenant\",\"eCommerce.addToCart\":\"AJOUTER AU PANIER\",\"eCommerce.readMore\":\"LIRE LA SUITE\",\"callouts.viewRange\":\"VOIR LA GAMME\",\"callouts.basic\":\"De base\",\"extraElements.callout\":\"Elément supplémentaire\",\"testimonials.basic\":\"De base\",\"testimonials.classic\":\"Classique\",\"testimonials.standard\":\"la norme\",\"extraElements.testimonials\":\"Témoignages\",\"button.modify\":\"Modifier\",\"button.delete\":\"Effacer\",\"pricingTable.basic\":\"De base\",\"pricingTable.circle\":\"Cercle\",\"pricingTable.classic\":\"Classique\",\"pricingTable.dark\":\"Foncé\",\"pricingTable.personal\":\"PERSONNEL\",\"pricingTable.easyTranslation\":\"Traduction facile\",\"pricingTable.awesomeGoogleFonts\":\"Impressionnant Google Fonts\",\"pricingTable.hotelBookingSystem\":\"Système de réservation d'hôtel\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Application de localisation\",\"pricingTable.buyNow\":\"Acheter maintenant\",\"pricingTable.business\":\"ENTREPRISE\",\"pricingTable.professional\":\"PROFESSIONNEL\",\"button.yes\":\"Oui\",\"button.no\":\"Non\",\"extraPages.404Msg\":\"Oups, une erreur s'est produite. Page non trouvée!\",\"extraPages.500Msg\":\"Désolé, le serveur va mal\",\"extraPages.goHome\":\"Aller à la maison\",\"extension.sweetAlerts\":\"Alertes douces\",\"sweetAlerts.basic\":\"De base\",\"sweetAlerts.description\":\"Avec description\",\"sweetAlerts.success\":\"Succès\",\"sweetAlerts.warning\":\"Attention\",\"sweetAlerts.custom\":\"Douane\",\"sweetAlerts.htmlTag\":\"Balise Html\",\"sweetAlerts.prompt\":\"Rapide\",\"sweetAlerts.itsBlue\":\"C'est bleu!\",\"sweetAlerts.passwordPrompt\":\"Invite de mot de passe\",\"sweetAlerts.customStyle\":\"Style personnalisé\",\"sweetAlerts.itPretty\":\"C'est joli, n'est-ce pas?\",\"sweetAlerts.btnClicked\":\"Vous avez cliqué sur le bouton!\",\"sweetAlerts.youWillFind\":\"Vous trouverez qu'ils sont en place!\",\"sweetAlerts.youWillNotAble\":\"Vous ne serez pas capable de récupérer ce fichier imaginaire!\",\"sweetAlerts.hereIsaMessage\":\"Voici un message!\",\"sweetAlerts.goodJob\":\"Bon travail!\",\"sweetAlerts.yesDeleteIt\":\"Oui, supprimez-le!\",\"sweetAlerts.areYouSure\":\"Êtes-vous sûr?\",\"sweetAlerts.doYouLikeThumb\":\"Aimez-vous les pouces?\",\"sweetAlerts.anInput\":\"Une entrée!\",\"sweetAlerts.writeSomethingInteresting\":\"Ecrire quelque chose d'intéressant:\",\"sweetAlerts.writeSomething\":\"Écris quelque chose\",\"sweetAlerts.youMustEnterPassword\":\"Vous devez entrer votre mot de passe!\",\"sweetAlerts.enterPassword\":\"Entrer le mot de passe\",\"extension.notification\":\"Notification\",\"notification.infoMsg\":\"Message d'information\",\"notification.successMessage\":\"Message de réussite\",\"notification.warningMessage\":\"Message d'alerte\",\"notification.closeAfter3000ms\":\"Fermer après 3000ms\",\"notification.errorMessage\":\"Message d'erreur\",\"notification.titleHere\":\"Titre ici\",\"notification.clickMe\":\"Clique moi!\",\"notification.info\":\"Info\",\"notification.success\":\"Succès\",\"notification.warning\":\"Attention\",\"notification.error\":\"Erreur\",\"sidebar.editors\":\"Éditeurs\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"Éditeur WYSIWYG\",\"picker.color.alpha\":\"Alpha Pickers\",\"picker.color.hue\":\"Pickers de teinte\",\"picker.color.circle\":\"Cueilleurs de cercle\",\"picker.color.compact\":\"Pickers compacts\",\"picker.color.block\":\"Ramasseurs de blocs\",\"picker.color.chrome\":\"Chrome Pickers\",\"picker.color.github\":\"Github Cueilleurs\",\"picker.color.twitter\":\"Capteurs Twitter\",\"picker.color.withRedux\":\"Avec Redux\",\"picker.color.sketch\":\"Sketch Pickers\",\"picker.color.material\":\"Ramasseurs de matériel\",\"picker.color.slider\":\"Sliders Pickers\",\"picker.color.basic\":\"Cueilleurs de base\",\"picker.color.basicToggle\":\"Bascule basique\",\"picker.color.custom\":\"Pickers personnalisés\",\"picker.color.customPointer\":\"Pointeur personnalisé\",\"picker.color.photoshop\":\"Photoshop Pickers\",\"picker.color.swatches\":\"Nuanciers\",\"picker.color.basicPositioning\":\"Positionnement de base\",\"sidebar.documents\":\"Documents\",\"sidebar.documents.changelog\":\"Changelog\",\"sidebar.documents.installation\":\"Installation\",\"sidebar.dashboard.listing\":\"Inscription\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"Avec des animations\",\"sidebar.map.curved.lines\":\"Avec des lignes courbes\",\"sidebar.map.zooming.countries\":\"Zoom pays\",\"sidebar.map.patterns\":\"Carte avec des motifs\",\"sidebar.map.capitals.map\":\"Carte des capitales\",\"sidebar.map.markers\":\"Marqueurs de carte\",\"sidebar.map.flight.routes\":\"Routes de vol\",\"sidebar.map.choropleth\":\"Carte de chaleur\",\"sidebar.map.grouped.countries\":\"Pays groupés\",\"sidebar.map.bubbles\":\"Map with Bubbles\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Plusieurs zones\",\"sidebar.map.weather\":\"Carte météorologique\",\"sidebar.extensions.shuffle\":\"Mélanger\",\"sidebar.extensions.profile\":\"Profil\",\"sidebar.social\":\"Applications sociales\"}");

/***/ }),

/***/ "./lngProvider/locales/it_IT.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/it_IT.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType.extras, sidebar.listType, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"Una nuova versione sarà rilasciata il 25 dicembre. Rimanete sintonizzati!\",\"sidebar.main\":\"Principale\",\"sidebar.dashboard\":\"Cruscotto\",\"sidebar.layouts\":\"Layouts\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"componenti\",\"sidebar.components.general\":\"Generale\",\"sidebar.general.button\":\"Pulsante\",\"sidebar.general.icon\":\"Icona\",\"sidebar.components.navigation\":\"Navigazione\",\"sidebar.navigation.affix\":\"Apporre\",\"sidebar.navigation.breadcrumb\":\"breadcrumb\",\"sidebar.navigation.dropdown\":\"Cadere in picchiata\",\"sidebar.navigation.menu\":\"Menu\",\"sidebar.navigation.pagination\":\"paginatura\",\"sidebar.navigation.steps\":\"passi\",\"sidebar.components.dataEntry\":\"Inserimento dati\",\"sidebar.dataEntry.autoComplete\":\"Completamento automatico\",\"sidebar.dataEntry.checkbox\":\"casella di controllo\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Date picker\",\"sidebar.dataEntry.form\":\"Modulo\",\"sidebar.dataEntry.inputNumber\":\"Numero di input\",\"sidebar.dataEntry.input\":\"Ingresso\",\"sidebar.dataEntry.mention\":\"Citare\",\"sidebar.dataEntry.rate\":\"Vota\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Interruttore\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Selezionare\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Trasferimento\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Caricare\",\"sidebar.components.dataDisplay\":\"Visualizzazione dati\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Distintivo\",\"sidebar.dataDisplay.collapse\":\"Crollo\",\"sidebar.dataDisplay.carousel\":\"Giostra\",\"sidebar.dataDisplay.card\":\"Carta\",\"sidebar.dataDisplay.calender\":\"Calendario\",\"sidebar.dataDisplay.list\":\"Elenco\",\"sidebar.dataDisplay.popover\":\"popover\",\"sidebar.dataDisplay.tree\":\"Albero\",\"sidebar.dataDisplay.toolTips\":\"Tooltips\",\"sidebar.dataDisplay.timeLine\":\"Sequenza temporale\",\"sidebar.dataDisplay.tag\":\"Etichetta\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"tavolo\",\"sidebar.components.feedBack\":\"Risposta\",\"sidebar.feedBack.alert\":\"Mettere in guardia\",\"sidebar.feedBack.modal\":\"Modale\",\"sidebar.feedBack.message\":\"Messaggio\",\"sidebar.feedBack.notification\":\"Notifica\",\"sidebar.feedBack.progress\":\"Progresso\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Rotazione\",\"sidebar.components.other\":\"Altro\",\"sidebar.other.anchor\":\"Ancora\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divisore\",\"sidebar.widgets\":\"widget\",\"sidebar.metrics\":\"Metrica\",\"sidebar.view\":\"vista\",\"sidebar.view.basicTable\":\"Tabella di base\",\"sidebar.view.dataTable\":\"Tabella dati\",\"sidebar.extensions\":\"estensioni\",\"sidebar.extensions.editior\":\"editore\",\"sidebar.extensions.dragNDrop\":\"Trascina e rilascia\",\"sidebar.extensions.sweetAlert\":\"Dolce avviso\",\"sidebar.extensions.notification\":\"Notifica\",\"sidebar.extensions.reactDates\":\"Date di Reazione\",\"sidebar.extensions.dropZone\":\"Zona di rilascio\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.charts\":\"Grafici\",\"sidebar.apps\":\"applicazioni\",\"sidebar.mailApp\":\"App di posta\",\"sidebar.todoApp\":\"App Todo\",\"sidebar.contactsApp\":\"App Contatti\",\"sidebar.chatApp\":\"App di chat\",\"sidebar.notes\":\"Gli appunti\",\"sidebar.pickers\":\"Pickers\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"Raccoglitori di data e ora\",\"sidebar.pickers.colorPickers\":\"Raccoglitori di colori\",\"sidebar.chart\":\"Grafico\",\"sidebar.chart.line\":\"Grafico a linee\",\"sidebar.chart.bar\":\"Grafico a barre\",\"sidebar.chart.area\":\"Area grafico\",\"sidebar.chart.composed\":\"Grafico composto\",\"sidebar.chart.scatter\":\"Grafico a dispersione\",\"sidebar.chart.pie\":\"Grafico a torta\",\"sidebar.chart.radial\":\"Grafico radiale\",\"sidebar.chart.radar\":\"Grafico radar\",\"sidebar.chart.tree\":\"Grafico ad albero\",\"sidebar.map\":\"Google Map\",\"sidebar.map.simple\":\"Mappa semplice\",\"sidebar.map.styled\":\"Mappa in stile\",\"sidebar.map.geoLocation\":\"Posizione geografica\",\"sidebar.map.mapDirection\":\"Direzione della mappa\",\"sidebar.map.overlay\":\"Sovrapposizione mappa\",\"sidebar.map.kmLayer\":\"Mappa Km Layer\",\"sidebar.map.popupInfo\":\"Mappa Informazioni popup\",\"sidebar.map.trafficLayer\":\"Mappa dello strato di traffico\",\"sidebar.map.streetView\":\"vista stradale\",\"sidebar.map.eventListener\":\"Listener di eventi\",\"sidebar.map.mapDrawing\":\"Disegno della mappa\",\"sidebar.map.mapClustering\":\"Raggruppamento di mappe\",\"sidebar.modules\":\"moduli\",\"sidebar.calendar\":\"Calendario\",\"sidebar.calendar.basic\":\"Di base\",\"sidebar.calendar.cultures\":\"culture\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Apparire\",\"sidebar.calendar.rendering\":\"Rendering\",\"sidebar.calendar.selectable\":\"selezionabile\",\"sidebar.calendar.timeslots\":\"Fasce orarie\",\"sidebar.mail.title\":\"posta\",\"sidebar.mail.compose\":\"COMPORRE\",\"sidebar.mail.mailbox\":\"Cassetta postale\",\"sidebar.mail.filters\":\"filtri\",\"sidebar.mail.labels\":\"etichette\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Elenco prodotti\",\"sidebar.eCommerce.productGrid\":\"Griglia del prodotto\",\"sidebar.extraComponents\":\"Componenti extra\",\"sidebar.inBuiltApp\":\"App integrate\",\"sidebar.extraElements.callouts\":\"Chiamare\",\"sidebar.extraElements.testimonials\":\"Testimonianze\",\"sidebar.timeLine\":\"Sequenza temporale\",\"sidebar.timeLine.default\":\"Predefinito\",\"sidebar.timeLine.defaultwithIcons\":\"Predefinito con icone\",\"sidebar.timeLine.leftAligned\":\"Sinistra allineata\",\"sidebar.extraElements.pricingTable\":\"Tabella dei prezzi\",\"sidebar.customViews\":\"Visualizzazioni personalizzate\",\"sidebar.listType.extras\":\"extra\",\"sidebar.listType\":\"Tipo di lista\",\"sidebar.listType.plainListView\":\"Lista semplice\",\"sidebar.listType.withDivider\":\"Lista semplice con divisore\",\"sidebar.listType.cardListView\":\"Visualizzazione elenco schede\",\"sidebar.extraPages.404\":\"404 Pagina di errore\",\"sidebar.extraPages.500\":\"500 Pagina di errore\",\"sidebar.extraPages\":\"Pagine extra\",\"app.userAuth\":\"Autenticazione dell'utente\",\"app.userAuth.login\":\"Accesso\",\"app.userAuth.signIn\":\"Registrati\",\"app.userAuth.send\":\"INVIARE\",\"app.userAuth.bySigning\":\"Con la registrazione, puoi usufruire delle funzionalità complete dei nostri servizi.\",\"app.userAuth.or\":\"o\",\"app.userAuth.forgotPassword\":\"Ha dimenticato la password\",\"app.userAuth.forgot\":\"Non ti preoccupare Recuperare la password è facile. Basta dirci l'e-mail che hai registrato con jumbo\",\"app.userAuth.signUp\":\"Iscriviti\",\"app.userAuth.getAccount\":\"Ottenere un account !!!\",\"app.userAuth.resetPassword\":\"Resetta la password\",\"app.userAuth.reset\":\"RESET\",\"app.userAuth.lockScreen\":\"Blocca schermo\",\"app.userAuth.unLock\":\"SBLOCCARE\",\"appModule.enterPasswordUnlock\":\"Inserisci la tua password per sbloccare lo schermo!\",\"appModule.enterPasswordReset\":\"Inserisci una nuova password per il tuo account\",\"appModule.loginSuccessfully\":\"Accedi con successo\",\"appModule.password\":\"Parola d'ordine\",\"appModule.email\":\"E-mail\",\"appModule.name\":\"Nome\",\"appModule.phone\":\"Telefono\",\"appModule.designation\":\"Designazione\",\"appModule.regsiter\":\"Registrare\",\"appModule.regsiterNow\":\"Registro n\",\"appModule.hvAccount\":\"Avere un conto\",\"appModule.createAccount\":\"Crea un account\",\"appModule.termAndCondition\":\"Termini e condizioni\",\"appModule.iAccept\":\"iscrivendomi, accetto\",\"todo\":\"Fare\",\"todo.addTask\":\"AGGIUNGI TASK\",\"todo.all\":\"Tutti\",\"todo.filters\":\"filtri\",\"todo.labels\":\"etichette\",\"chat.selectUserChat\":\"Seleziona Utente per avviare la chat\",\"chat.selectContactChat\":\"Seleziona contatto per avviare la chat\",\"chat.chatUser\":\"chat\",\"chat.contacts\":\"Contatti\",\"chat.searchStartNewChat\":\"Cerca o inizia nuova chat\",\"chat.typeMessage\":\"Scrivi e premi invio per inviare un messaggio\",\"chat.status\":\"è uno status .... non è il tuo diario ...\",\"contact.saveContact\":\"Salva contatto\",\"contact.addContact\":\"Aggiungi contatto\",\"contact.searchContact\":\"Cerca contatto\",\"mail.mailbox\":\"Cassetta postale\",\"mail.compose\":\"COMPORRE\",\"mail.filters\":\"filtri\",\"mail.labels\":\"etichette\",\"mail.title\":\"Nuovo messaggio\",\"eCommerce.buyNow\":\"Acquista ora\",\"eCommerce.addToCart\":\"AGGIUNGI AL CARRELLO\",\"eCommerce.readMore\":\"LEGGI DI PIÙ\",\"callouts.viewRange\":\"VISUALIZZA GAMMA\",\"callouts.basic\":\"Di base\",\"extraElements.callout\":\"Elemento extra\",\"testimonials.basic\":\"Di base\",\"testimonials.classic\":\"Classico\",\"testimonials.standard\":\"Standard\",\"extraElements.testimonials\":\"Testimonianze\",\"button.modify\":\"Modificare\",\"button.delete\":\"Elimina\",\"pricingTable.basic\":\"Di base\",\"pricingTable.circle\":\"Cerchio\",\"pricingTable.classic\":\"Classico\",\"pricingTable.dark\":\"Buio\",\"pricingTable.personal\":\"PERSONALE\",\"pricingTable.easyTranslation\":\"Traduzione semplice\",\"pricingTable.awesomeGoogleFonts\":\"Font Google fantastici\",\"pricingTable.hotelBookingSystem\":\"Sistema di prenotazione alberghiera\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Location Finder App\",\"pricingTable.buyNow\":\"acquista ora\",\"pricingTable.business\":\"ATTIVITÀ COMMERCIALE\",\"pricingTable.professional\":\"PROFESSIONALE\",\"button.yes\":\"sì\",\"button.no\":\"No\",\"extraPages.404Msg\":\"Spiacenti, si è verificato un errore. Pagina non trovata!\",\"extraPages.500Msg\":\"Spiacente, il server va male\",\"extraPages.goHome\":\"Vai a casa\",\"extension.sweetAlerts\":\"Avvisi dolci\",\"sweetAlerts.basic\":\"Di base\",\"sweetAlerts.description\":\"Con descrizione\",\"sweetAlerts.success\":\"Successo\",\"sweetAlerts.warning\":\"avvertimento\",\"sweetAlerts.custom\":\"costume\",\"sweetAlerts.htmlTag\":\"Tag HTML\",\"sweetAlerts.prompt\":\"Richiesta\",\"sweetAlerts.itsBlue\":\"È blu!\",\"sweetAlerts.passwordPrompt\":\"Richiesta password\",\"sweetAlerts.customStyle\":\"Stile personalizzato\",\"sweetAlerts.itPretty\":\"È carino, non è vero?\",\"sweetAlerts.btnClicked\":\"Hai fatto clic sul pulsante!\",\"sweetAlerts.youWillFind\":\"Scoprirai che sono su!\",\"sweetAlerts.youWillNotAble\":\"Non sarai in grado di recuperare questo file immaginario!\",\"sweetAlerts.hereIsaMessage\":\"Ecco un messaggio!\",\"sweetAlerts.goodJob\":\"Buon lavoro!\",\"sweetAlerts.yesDeleteIt\":\"Sì, cancellalo!\",\"sweetAlerts.areYouSure\":\"Sei sicuro?\",\"sweetAlerts.doYouLikeThumb\":\"Ti piacciono i pollici?\",\"sweetAlerts.anInput\":\"Un input!\",\"sweetAlerts.writeSomethingInteresting\":\"Scrivi qualcosa di interessante:\",\"sweetAlerts.writeSomething\":\"Scrivi qualcosa\",\"sweetAlerts.youMustEnterPassword\":\"Devi inserire la tua password!\",\"sweetAlerts.enterPassword\":\"Inserire la password\",\"extension.notification\":\"Notifica\",\"notification.infoMsg\":\"Messaggio informativo\",\"notification.successMessage\":\"Messaggio di successo\",\"notification.warningMessage\":\"Messaggio di avvertimento\",\"notification.closeAfter3000ms\":\"Chiudi dopo 3000 ms\",\"notification.errorMessage\":\"Messaggio di errore\",\"notification.titleHere\":\"Titolo qui\",\"notification.clickMe\":\"Cliccami!\",\"notification.info\":\"Informazioni\",\"notification.success\":\"Successo\",\"notification.warning\":\"avvertimento\",\"notification.error\":\"Errore\",\"sidebar.editors\":\"Editors\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"WYSIWYG Editor\",\"picker.color.alpha\":\"Raccoglitrici Alpha\",\"picker.color.hue\":\"Selezionatori di tinte\",\"picker.color.circle\":\"Raccoglitori di cerchi\",\"picker.color.compact\":\"Picker compatti\",\"picker.color.block\":\"Raccoglitori di blocchi\",\"picker.color.chrome\":\"Raccoglitrici di cromo\",\"picker.color.github\":\"Github Pickers\",\"picker.color.twitter\":\"Raccoglitori di Twitter\",\"picker.color.withRedux\":\"Con Redux\",\"picker.color.sketch\":\"Raccoglitori di schizzo\",\"picker.color.material\":\"Raccoglitori di materiale\",\"picker.color.slider\":\"Raccoglitori di cursori\",\"picker.color.basic\":\"Raccoglitori di base\",\"picker.color.basicToggle\":\"Toggle di base\",\"picker.color.custom\":\"Raccoglitori personalizzati\",\"picker.color.customPointer\":\"Puntatore personalizzato\",\"picker.color.photoshop\":\"Selettori di Photoshop\",\"picker.color.swatches\":\"Raccoglitrici di campioni\",\"picker.color.basicPositioning\":\"Posizionamento di base\",\"sidebar.documents\":\"Documenti\",\"sidebar.documents.changelog\":\"changelog\",\"sidebar.documents.installation\":\"Installazione\",\"sidebar.dashboard.listing\":\"listato\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"Con animazioni\",\"sidebar.map.curved.lines\":\"Con linee curve\",\"sidebar.map.zooming.countries\":\"Paesi in via di sviluppo\",\"sidebar.map.patterns\":\"Mappa con modelli\",\"sidebar.map.capitals.map\":\"Mappa dei Capitali\",\"sidebar.map.markers\":\"Indicatori di mappa\",\"sidebar.map.flight.routes\":\"Itinerari di volo\",\"sidebar.map.choropleth\":\"Mappa di calore\",\"sidebar.map.grouped.countries\":\"Paesi raggruppati\",\"sidebar.map.bubbles\":\"Mappa con bolle\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Aree multiple\",\"sidebar.map.weather\":\"Mappa del tempo\",\"sidebar.extensions.shuffle\":\"rimescolare\",\"sidebar.extensions.profile\":\"Profilo\",\"sidebar.social\":\"App sociali\"}");

/***/ }),

/***/ "./lngProvider/locales/zh-Hans.json":
/*!******************************************!*\
  !*** ./lngProvider/locales/zh-Hans.json ***!
  \******************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.dashboard.crm, sidebar.layouts, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType.extras, sidebar.listType, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"新版本将于12月25日发布。 敬请关注！\",\"sidebar.main\":\"主要\",\"sidebar.dashboard\":\"仪表板\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.layouts\":\"布局\",\"sidebar.components\":\"组件\",\"sidebar.components.general\":\"一般\",\"sidebar.general.button\":\"按键\",\"sidebar.general.icon\":\"图标\",\"sidebar.components.navigation\":\"导航\",\"sidebar.navigation.affix\":\"词缀\",\"sidebar.navigation.breadcrumb\":\"面包屑\",\"sidebar.navigation.dropdown\":\"落下\",\"sidebar.navigation.menu\":\"菜单\",\"sidebar.navigation.pagination\":\"分页\",\"sidebar.navigation.steps\":\"脚步\",\"sidebar.components.dataEntry\":\"数据输入\",\"sidebar.dataEntry.autoComplete\":\"自动完成\",\"sidebar.dataEntry.checkbox\":\"复选框\",\"sidebar.dataEntry.cascader\":\"卡斯卡德\",\"sidebar.dataEntry.datePicker\":\"日期选择器\",\"sidebar.dataEntry.form\":\"形成\",\"sidebar.dataEntry.inputNumber\":\"输入号码\",\"sidebar.dataEntry.input\":\"输入\",\"sidebar.dataEntry.mention\":\"提到\",\"sidebar.dataEntry.rate\":\"率\",\"sidebar.dataEntry.radio\":\"无线电\",\"sidebar.dataEntry.switch\":\"开关\",\"sidebar.dataEntry.slider\":\"滑块\",\"sidebar.dataEntry.select\":\"选择\",\"sidebar.dataEntry.treeSelect\":\"树选择\",\"sidebar.dataEntry.transfer\":\"转让\",\"sidebar.dataEntry.timePicker\":\"时间选择器\",\"sidebar.dataEntry.upload\":\"上传\",\"sidebar.components.dataDisplay\":\"数据显示\",\"sidebar.dataDisplay.avatar\":\"阿凡达\",\"sidebar.dataDisplay.badge\":\"徽章\",\"sidebar.dataDisplay.collapse\":\"坍方\",\"sidebar.dataDisplay.carousel\":\"圆盘传送带\",\"sidebar.dataDisplay.card\":\"卡\",\"sidebar.dataDisplay.calender\":\"日历\",\"sidebar.dataDisplay.list\":\"名单\",\"sidebar.dataDisplay.popover\":\"酥料饼\",\"sidebar.dataDisplay.tree\":\"树\",\"sidebar.dataDisplay.toolTips\":\"提示\",\"sidebar.dataDisplay.timeLine\":\"时间线\",\"sidebar.dataDisplay.tag\":\"标签\",\"sidebar.dataDisplay.tabs\":\"标签\",\"sidebar.dataDisplay.table\":\"表\",\"sidebar.components.feedBack\":\"反馈\",\"sidebar.feedBack.alert\":\"警报\",\"sidebar.feedBack.modal\":\"语气\",\"sidebar.feedBack.message\":\"信息\",\"sidebar.feedBack.notification\":\"通知\",\"sidebar.feedBack.progress\":\"进展\",\"sidebar.feedBack.popConfirm\":\"流行确认\",\"sidebar.feedBack.spin\":\"纺\",\"sidebar.components.other\":\"其他\",\"sidebar.other.anchor\":\"锚\",\"sidebar.other.backTop\":\"返回顶部\",\"sidebar.other.divider\":\"分频器\",\"sidebar.widgets\":\"小工具\",\"sidebar.metrics\":\"度量\",\"sidebar.view\":\"视图\",\"sidebar.view.basicTable\":\"基本表\",\"sidebar.view.dataTable\":\"数据表\",\"sidebar.extensions\":\"扩展\",\"sidebar.extensions.editior\":\"编辑\",\"sidebar.extensions.dragNDrop\":\"拖放\",\"sidebar.extensions.sweetAlert\":\"甜蜜警报\",\"sidebar.extensions.notification\":\"通知\",\"sidebar.extensions.reactDates\":\"反应日期\",\"sidebar.extensions.dropZone\":\"拖放区\",\"sidebar.googleMap\":\"谷歌地图\",\"sidebar.charts\":\"图表\",\"sidebar.apps\":\"应用\",\"sidebar.mailApp\":\"邮件应用\",\"sidebar.todoApp\":\"做应用程序\",\"sidebar.contactsApp\":\"联系人应用\",\"sidebar.chatApp\":\"聊天应用\",\"sidebar.notes\":\"笔记\",\"sidebar.pickers\":\"拾荒者\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"日期和时间选择器\",\"sidebar.pickers.colorPickers\":\"颜色选择器\",\"sidebar.chart\":\"图表\",\"sidebar.chart.line\":\"折线图\",\"sidebar.chart.bar\":\"条形图\",\"sidebar.chart.area\":\"面积图\",\"sidebar.chart.composed\":\"组成图表\",\"sidebar.chart.scatter\":\"散点图\",\"sidebar.chart.pie\":\"饼形图\",\"sidebar.chart.radial\":\"径向图\",\"sidebar.chart.radar\":\"雷达图\",\"sidebar.chart.tree\":\"树图\",\"sidebar.map\":\"谷歌地图\",\"sidebar.map.simple\":\"简单的地图\",\"sidebar.map.styled\":\"风格地图\",\"sidebar.map.geoLocation\":\"地理位置\",\"sidebar.map.mapDirection\":\"地图方向\",\"sidebar.map.overlay\":\"地图覆盖\",\"sidebar.map.kmLayer\":\"地图Km层\",\"sidebar.map.popupInfo\":\"地图弹出信息\",\"sidebar.map.trafficLayer\":\"映射流量层\",\"sidebar.map.streetView\":\"街景\",\"sidebar.map.eventListener\":\"事件监听器\",\"sidebar.map.mapDrawing\":\"地图绘制\",\"sidebar.map.mapClustering\":\"地图集群\",\"sidebar.modules\":\"模块\",\"sidebar.calendar\":\"日历\",\"sidebar.calendar.basic\":\"基本\",\"sidebar.calendar.cultures\":\"文化\",\"sidebar.calendar.dnd\":\"DND\",\"sidebar.calendar.popup\":\"弹出\",\"sidebar.calendar.rendering\":\"渲染\",\"sidebar.calendar.selectable\":\"可选\",\"sidebar.calendar.timeslots\":\"时隙\",\"sidebar.mail.title\":\"邮件\",\"sidebar.mail.compose\":\"撰写\",\"sidebar.mail.mailbox\":\"邮箱\",\"sidebar.mail.filters\":\"过滤器\",\"sidebar.mail.labels\":\"标签\",\"sidebar.eCommerce\":\"电子商务\",\"sidebar.eCommerce.productList\":\"产品列表\",\"sidebar.eCommerce.productGrid\":\"产品网格\",\"sidebar.extraComponents\":\"额外的组件\",\"sidebar.inBuiltApp\":\"内置应用程序\",\"sidebar.extraElements.callouts\":\"大喊\",\"sidebar.extraElements.testimonials\":\"褒奖\",\"sidebar.timeLine\":\"时间线\",\"sidebar.timeLine.default\":\"默认\",\"sidebar.timeLine.defaultwithIcons\":\"默认使用图标\",\"sidebar.timeLine.leftAligned\":\"左对齐\",\"sidebar.extraElements.pricingTable\":\"定价表\",\"sidebar.customViews\":\"自定义视图\",\"sidebar.listType.extras\":\"附加功能\",\"sidebar.listType\":\"列表类型\",\"sidebar.listType.plainListView\":\"普通列表视图\",\"sidebar.listType.withDivider\":\"带分隔线的普通列表\",\"sidebar.listType.cardListView\":\"卡列表视图\",\"sidebar.extraPages.404\":\"404错误页面\",\"sidebar.extraPages.500\":\"500错误页面\",\"sidebar.extraPages\":\"额外页面\",\"app.userAuth\":\"用户身份验证\",\"app.userAuth.login\":\"登录\",\"app.userAuth.signIn\":\"签到\",\"app.userAuth.send\":\"发送\",\"app.userAuth.bySigning\":\"通过注册，您可以利用我们服务的全部功能。\",\"app.userAuth.or\":\"要么\",\"app.userAuth.forgotPassword\":\"忘记密码\",\"app.userAuth.forgot\":\"别担心。 恢复密码很简单。只需告诉我们您已经注册过的超大型电子邮件\",\"app.userAuth.signUp\":\"注册\",\"app.userAuth.getAccount\":\"获得一个帐户！\",\"app.userAuth.resetPassword\":\"重设密码\",\"app.userAuth.reset\":\"重启\",\"app.userAuth.lockScreen\":\"锁屏\",\"app.userAuth.unLock\":\"开锁\",\"appModule.enterPasswordUnlock\":\"输入您的密码解锁屏幕！\",\"appModule.enterPasswordReset\":\"为您的帐户输入新密码\",\"appModule.loginSuccessfully\":\"成功登录\",\"appModule.password\":\"密码\",\"appModule.email\":\"电子邮件\",\"appModule.name\":\"名称\",\"appModule.phone\":\"电话\",\"appModule.designation\":\"指定\",\"appModule.regsiter\":\"寄存器\",\"appModule.regsiterNow\":\"注册编号\",\"appModule.hvAccount\":\"有一个账户\",\"appModule.createAccount\":\"创建一个帐户\",\"appModule.termAndCondition\":\"期限和条件\",\"appModule.iAccept\":\"通过注册，我接受\",\"todo\":\"去做\",\"todo.addTask\":\"添加任务\",\"todo.all\":\"所有\",\"todo.filters\":\"过滤器\",\"todo.labels\":\"标签\",\"chat.selectUserChat\":\"选择用户开始聊天\",\"chat.selectContactChat\":\"选择联系人即可开始聊天\",\"chat.chatUser\":\"聊天\",\"chat.contacts\":\"往来\",\"chat.searchStartNewChat\":\"搜索或开始新的聊天\",\"chat.typeMessage\":\"键入并按回车键发送消息\",\"chat.status\":\"这是一个地位....不是你的日记...\",\"contact.saveContact\":\"保存联系人\",\"contact.addContact\":\"增加联系人\",\"contact.searchContact\":\"搜索联系人\",\"mail.mailbox\":\"邮箱\",\"mail.compose\":\"撰写\",\"mail.filters\":\"过滤器\",\"mail.labels\":\"标签\",\"mail.title\":\"新消息\",\"eCommerce.buyNow\":\"立即购买\",\"eCommerce.addToCart\":\"添加到购物车\",\"eCommerce.readMore\":\"阅读更多\",\"callouts.viewRange\":\"查看范围\",\"callouts.basic\":\"基本\",\"extraElements.callout\":\"额外元素\",\"testimonials.basic\":\"基本\",\"testimonials.classic\":\"经典\",\"testimonials.standard\":\"标准\",\"extraElements.testimonials\":\"褒奖\",\"button.modify\":\"修改\",\"button.delete\":\"删除\",\"pricingTable.basic\":\"基本\",\"pricingTable.circle\":\"圈\",\"pricingTable.classic\":\"经典\",\"pricingTable.dark\":\"黑暗\",\"pricingTable.personal\":\"个人\",\"pricingTable.easyTranslation\":\"易于翻译\",\"pricingTable.awesomeGoogleFonts\":\"令人敬畏的Google字体\",\"pricingTable.hotelBookingSystem\":\"酒店预订系统\",\"pricingTable.emailComposeInterface\":\"电子邮件撰写界面\",\"pricingTable.locationFinderApp\":\"位置搜索器应用程序\",\"pricingTable.buyNow\":\"立即购买\",\"pricingTable.business\":\"商业\",\"pricingTable.professional\":\"专业的\",\"button.yes\":\"是\",\"button.no\":\"没有\",\"extraPages.404Msg\":\"糟糕，发生错误。 找不到网页！\",\"extraPages.500Msg\":\"对不起，服务器出错了\",\"extraPages.goHome\":\"回家\",\"extension.sweetAlerts\":\"甜蜜警报\",\"sweetAlerts.basic\":\"基本\",\"sweetAlerts.description\":\"带说明\",\"sweetAlerts.success\":\"成功\",\"sweetAlerts.warning\":\"警告\",\"sweetAlerts.custom\":\"习惯\",\"sweetAlerts.htmlTag\":\"HTML标记\",\"sweetAlerts.prompt\":\"提示\",\"sweetAlerts.itsBlue\":\"它是蓝色的！\",\"sweetAlerts.passwordPrompt\":\"密码提示\",\"sweetAlerts.customStyle\":\"自定义样式\",\"sweetAlerts.itPretty\":\"真漂亮，不是吗？\",\"sweetAlerts.btnClicked\":\"你点击了按钮！\",\"sweetAlerts.youWillFind\":\"你会发现他们已经起来了！\",\"sweetAlerts.youWillNotAble\":\"你将无法恢复这个虚构的文件！\",\"sweetAlerts.hereIsaMessage\":\"这是一条消息！\",\"sweetAlerts.goodJob\":\"做得好！\",\"sweetAlerts.yesDeleteIt\":\"是的，删除它！\",\"sweetAlerts.areYouSure\":\"你确定？\",\"sweetAlerts.doYouLikeThumb\":\"你喜欢大拇指吗？\",\"sweetAlerts.anInput\":\"一个输入！\",\"sweetAlerts.writeSomethingInteresting\":\"写点有趣的东西：\",\"sweetAlerts.writeSomething\":\"写一些东西\",\"sweetAlerts.youMustEnterPassword\":\"你必须输入你的密码！\",\"sweetAlerts.enterPassword\":\"输入密码\",\"extension.notification\":\"通知\",\"notification.infoMsg\":\"信息消息\",\"notification.successMessage\":\"成功消息\",\"notification.warningMessage\":\"警告信息\",\"notification.closeAfter3000ms\":\"3000ms后关闭\",\"notification.errorMessage\":\"错误信息\",\"notification.titleHere\":\"标题在这里\",\"notification.clickMe\":\"点击我！\",\"notification.info\":\"信息\",\"notification.success\":\"成功\",\"notification.warning\":\"警告\",\"notification.error\":\"错误\",\"sidebar.editors\":\"编者\",\"sidebar.editors.CKEditor\":\"CK编辑器的\",\"sidebar.editors.WYSISWYGEditor\":\"所见即所得的编辑器\",\"picker.color.alpha\":\"阿尔法挑选者\",\"picker.color.hue\":\"色相选择器\",\"picker.color.circle\":\"圈选手\",\"picker.color.compact\":\"紧凑型拾取器\",\"picker.color.block\":\"块挑选器\",\"picker.color.chrome\":\"铬挑选器\",\"picker.color.github\":\"Github捡拾器\",\"picker.color.twitter\":\"推特挑选者\",\"picker.color.withRedux\":\"与Redux\",\"picker.color.sketch\":\"素描选择器\",\"picker.color.material\":\"材料捡拾器\",\"picker.color.slider\":\"滑块挑选器\",\"picker.color.basic\":\"基本拾取器\",\"picker.color.basicToggle\":\"基本切换\",\"picker.color.custom\":\"自定义选取器\",\"picker.color.customPointer\":\"自定义指针\",\"picker.color.photoshop\":\"照片店采摘\",\"picker.color.swatches\":\"色板拾取器\",\"picker.color.basicPositioning\":\"基本定位\",\"sidebar.documents\":\"文件\",\"sidebar.documents.changelog\":\"更新日志\",\"sidebar.documents.installation\":\"安装\",\"sidebar.dashboard.listing\":\"清單\",\"sidebar.dashboard.crypto\":\"加密\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"谷歌地圖\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"隨著動畫\",\"sidebar.map.curved.lines\":\"有曲線\",\"sidebar.map.zooming.countries\":\"縮放國家\",\"sidebar.map.patterns\":\"地圖與模式\",\"sidebar.map.capitals.map\":\"首都地圖\",\"sidebar.map.markers\":\"地圖標記\",\"sidebar.map.flight.routes\":\"航線\",\"sidebar.map.choropleth\":\"熱圖\",\"sidebar.map.grouped.countries\":\"分組國家\",\"sidebar.map.bubbles\":\"映射與泡沫\",\"sidebar.map.drill.down\":\"深入研究地圖\",\"sidebar.map.multiple.areas\":\"多個領域\",\"sidebar.map.weather\":\"天氣圖\",\"sidebar.extensions.shuffle\":\"拖曳\",\"sidebar.extensions.profile\":\"輪廓\",\"sidebar.social\":\"社交應用\"}");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}
function addLocale(path, locale, defaultLocale) {
  if (false) {}
  return path;
}
function delLocale(path, locale) {
  if (false) {}
  return path;
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)
    let replaced = `[${repeat ? '...' : ''}${param}]`;
    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }
  return {
    params,
    result: interpolatedRoute
  };
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition
      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not
        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
          this._resolveHref(parsedHref, pages);
          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }
        window.location.href = destination;
        return new Promise(() => {});
      }
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_vendors_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/vendors/style */ "./public/vendors/style.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/store */ "./redux/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_core_LocaleProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/core/LocaleProvider */ "./app/core/LocaleProvider/index.js");
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/use-auth */ "./util/use-auth.js");
/* harmony import */ var _app_core_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/core/Layout */ "./app/core/Layout/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Page = ({
  Component,
  pageProps,
  store
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "LightHouse")), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
    store: store
  }, __jsx(_util_use_auth__WEBPACK_IMPORTED_MODULE_9__["AuthProvider"], null, __jsx(_app_core_LocaleProvider__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(_app_core_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(Component, pageProps))))));
};
/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(_redux_store__WEBPACK_IMPORTED_MODULE_6__["default"])(Page));

/***/ }),

/***/ "./public/loader.css":
/*!***************************!*\
  !*** ./public/loader.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/vendors/flag/sprite-flags-24x24.css":
/*!****************************************************!*\
  !*** ./public/vendors/flag/sprite-flags-24x24.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/vendors/gaxon/styles.css":
/*!*****************************************!*\
  !*** ./public/vendors/gaxon/styles.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/vendors/noir-pro/styles.css":
/*!********************************************!*\
  !*** ./public/vendors/noir-pro/styles.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/vendors/style.js":
/*!*********************************!*\
  !*** ./public/vendors/style.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flag_sprite_flags_24x24_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flag/sprite-flags-24x24.css */ "./public/vendors/flag/sprite-flags-24x24.css");
/* harmony import */ var _flag_sprite_flags_24x24_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flag_sprite_flags_24x24_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gaxon_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gaxon/styles.css */ "./public/vendors/gaxon/styles.css");
/* harmony import */ var _gaxon_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gaxon_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader.css */ "./public/loader.css");
/* harmony import */ var _loader_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _noir_pro_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noir-pro/styles.css */ "./public/vendors/noir-pro/styles.css");
/* harmony import */ var _noir_pro_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_noir_pro_styles_css__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./redux/actions/Common.js":
/*!*********************************!*\
  !*** ./redux/actions/Common.js ***!
  \*********************************/
/*! exports provided: fetchStart, fetchSuccess, fetchError, showMessage, hideMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStart", function() { return fetchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSuccess", function() { return fetchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchError", function() { return fetchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return hideMessage; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");

const fetchStart = () => {
  return dispatch => dispatch({
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_START"]
  });
};
const fetchSuccess = () => {
  return dispatch => dispatch({
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUCCESS"]
  });
};
const fetchError = error => {
  return dispatch => dispatch({
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ERROR"],
    payload: error
  });
};
const showMessage = message => {
  return dispatch => dispatch({
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOW_MESSAGE"],
    payload: message
  });
};
const hideMessage = () => {
  return dispatch => dispatch({
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["HIDE_MESSAGE"]
  });
};

/***/ }),

/***/ "./redux/actions/Setting.js":
/*!**********************************!*\
  !*** ./redux/actions/Setting.js ***!
  \**********************************/
/*! exports provided: toggleCollapsedSideNav, updateWindowWidth, setThemeType, onNavStyleChange, onLayoutTypeChange, setPathName, switchLanguage, setDirectionRTL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCollapsedSideNav", function() { return toggleCollapsedSideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWindowWidth", function() { return updateWindowWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setThemeType", function() { return setThemeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavStyleChange", function() { return onNavStyleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLayoutTypeChange", function() { return onLayoutTypeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPathName", function() { return setPathName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchLanguage", function() { return switchLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDirectionRTL", function() { return setDirectionRTL; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/ThemeSetting */ "./constants/ThemeSetting.js");


function toggleCollapsedSideNav(navCollapsed) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_COLLAPSED_NAV"],
    navCollapsed
  };
}
function updateWindowWidth(width) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["WINDOW_WIDTH"],
    width
  };
}
function setThemeType(themeType) {
  return {
    type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["THEME_TYPE"],
    themeType
  };
}
function onNavStyleChange(navStyle) {
  return {
    type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE"],
    navStyle
  };
}
function onLayoutTypeChange(layoutType) {
  return dispatch => {
    dispatch({
      type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_TYPE"],
      layoutType
    });
  };
}
function setPathName(pathname) {
  return {
    type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["SET_PATH_NAME"],
    pathname
  };
}
function switchLanguage(locale) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SWITCH_LANGUAGE"],
    payload: locale
  };
}
function setDirectionRTL(rtlStatus) {
  return dispatch => {
    dispatch({
      type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["UPDATE_RTL_STATUS"],
      rtlStatus
    });
  };
}

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: toggleCollapsedSideNav, updateWindowWidth, setThemeType, onNavStyleChange, onLayoutTypeChange, setPathName, switchLanguage, setDirectionRTL, fetchStart, fetchSuccess, fetchError, showMessage, hideMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setting */ "./redux/actions/Setting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleCollapsedSideNav", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["toggleCollapsedSideNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateWindowWidth", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["updateWindowWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setThemeType", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["setThemeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNavStyleChange", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["onNavStyleChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLayoutTypeChange", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["onLayoutTypeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPathName", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["setPathName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchLanguage", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["switchLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDirectionRTL", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["setDirectionRTL"]; });

/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Common */ "./redux/actions/Common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchStart", function() { return _Common__WEBPACK_IMPORTED_MODULE_1__["fetchStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSuccess", function() { return _Common__WEBPACK_IMPORTED_MODULE_1__["fetchSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchError", function() { return _Common__WEBPACK_IMPORTED_MODULE_1__["fetchError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return _Common__WEBPACK_IMPORTED_MODULE_1__["showMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return _Common__WEBPACK_IMPORTED_MODULE_1__["hideMessage"]; });




/***/ }),

/***/ "./redux/reducers/Common.js":
/*!**********************************!*\
  !*** ./redux/reducers/Common.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const INIT_STATE = {
  error: "",
  loading: false,
  message: ''
};
const commonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_START"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: '',
          message: '',
          loading: true
        });
      }
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: '',
          message: '',
          loading: false
        });
      }
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOW_MESSAGE"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: '',
          message: action.payload,
          loading: false
        });
      }
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ERROR"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: action.payload,
          message: ''
        });
      }
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["HIDE_MESSAGE"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: '',
          message: ''
        });
      }
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (commonReducer);

/***/ }),

/***/ "./redux/reducers/Settings.js":
/*!************************************!*\
  !*** ./redux/reducers/Settings.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


const initialSettings = {
  navCollapsed: true,
  navStyle: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"],
  layoutType: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_TYPE_FULL"],
  themeType: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["THEME_TYPE_LITE"],
  pathname: '',
  width: 1367,
  isDirectionRTL: false,
  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  }
};
const SettingsReducer = (state = initialSettings, action) => {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_COLLAPSED_NAV"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        navCollapsed: action.navCollapsed
      });
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["SET_PATH_NAME"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pathname: action.pathname
      });
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["UPDATE_RTL_STATUS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isDirectionRTL: action.rtlStatus
      });
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["WINDOW_WIDTH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        width: action.width
      });
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["THEME_TYPE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        themeType: action.themeType
      });
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        navStyle: action.navStyle
      });
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_TYPE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        layoutType: action.layoutType
      });
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SWITCH_LANGUAGE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        locale: action.payload
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SettingsReducer);

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings */ "./redux/reducers/Settings.js");
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Common */ "./redux/reducers/Common.js");



const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  settings: _Settings__WEBPACK_IMPORTED_MODULE_1__["default"],
  common: _Common__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./redux/store/index.js":
/*!******************************!*\
  !*** ./redux/store/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./redux/reducers/index.js");



const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};
function configureStore(initialState = {}) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a]));
}
/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./util/CustomScrollbars.js":
/*!**********************************!*\
  !*** ./util/CustomScrollbars.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const CustomScrollbars = props => __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__["Scrollbars"], _extends({}, props, {
  autoHide: true,
  universal: true,
  renderTrackHorizontal: props => __jsx("div", _extends({}, props, {
    style: {
      display: 'none'
    },
    className: "track-horizontal"
  }))
}));
/* harmony default export */ __webpack_exports__["default"] = (CustomScrollbars);

/***/ }),

/***/ "./util/IntlMessages.js":
/*!******************************!*\
  !*** ./util/IntlMessages.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const InjectMassage = props => __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], props);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(InjectMassage, {
  withRef: false
}));

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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/locale-provider/ar_EG":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/ar_EG" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/ar_EG");

/***/ }),

/***/ "antd/lib/locale-provider/en_US":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/en_US" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/en_US");

/***/ }),

/***/ "antd/lib/locale-provider/es_ES":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/es_ES" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/es_ES");

/***/ }),

/***/ "antd/lib/locale-provider/fr_FR":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/fr_FR" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/fr_FR");

/***/ }),

/***/ "antd/lib/locale-provider/it_IT":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/it_IT" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/it_IT");

/***/ }),

/***/ "antd/lib/locale-provider/zh_CN":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/zh_CN" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/zh_CN");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcExpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uL05vdGlmaWNhdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTWFpbE5vdGlmaWNhdGlvbi9Ob3RpZmljYXRpb25JdGVtLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1NlYXJjaEJveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Vc2VySW5mby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9MYXlvdXQvQXBwU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9MYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvTG9jYWxlUHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvU2lkZWJhci9BcHBzTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9TaWRlYmFyL1NpZGViYXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1NpZGViYXIvU2lkZWJhckxvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvU2lkZWJhci9Vc2VyUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9TaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1RvcGJhci9BYm92ZUhlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvQmVsb3dIZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvVG9wYmFyL0hvcml6b250YWxEYXJrL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1RvcGJhci9Ib3Jpem9udGFsRGVmYXVsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvSG9yaXpvbnRhbE5hdi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvSW5zaWRlSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1RvcGJhci9Ob0hlYWRlck5vdGlmaWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvVG9wYmFyL2xhbmd1YWdlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvQWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL1RoZW1lU2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9sbmdQcm92aWRlci9lbnRyaWVzL2FyX1NBLmpzIiwid2VicGFjazovLy8uL2xuZ1Byb3ZpZGVyL2VudHJpZXMvZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vbG5nUHJvdmlkZXIvZW50cmllcy9lc19FUy5qcyIsIndlYnBhY2s6Ly8vLi9sbmdQcm92aWRlci9lbnRyaWVzL2ZyX0ZSLmpzIiwid2VicGFjazovLy8uL2xuZ1Byb3ZpZGVyL2VudHJpZXMvaXRfSVQuanMiLCJ3ZWJwYWNrOi8vLy4vbG5nUHJvdmlkZXIvZW50cmllcy96aC1IYW5zLUNOLmpzIiwid2VicGFjazovLy8uL2xuZ1Byb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3ZlbmRvcnMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9TZXR0aW5nLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvQ29tbW9uLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWwvQXBpLmpzIiwid2VicGFjazovLy8uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFycy5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL0ludGxNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3VzZS1hdXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9hcl9FR1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9lbl9VU1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9lc19FU1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9mcl9GUlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9pdF9JVFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci96aF9DTlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW50bFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiQXBwTGluayIsImhyZWYiLCJjaGlsZHJlbiIsIk5vdGlmaWNhdGlvbkl0ZW0iLCJub3RpZmljYXRpb24iLCJpY29uIiwiaW1hZ2UiLCJ0aXRsZSIsInRpbWUiLCJub3RpZmljYXRpb25zIiwiQXBwTm90aWZpY2F0aW9uIiwibWFwIiwiaW5kZXgiLCJDaXJjdWxhclByb2dyZXNzIiwiY2xhc3NOYW1lIiwiaGVpZ2h0IiwiZGVmYXVsdFByb3BzIiwiYmFkZ2UiLCJuYW1lIiwibWVzc2FnZSIsImlkIiwiTWFpbE5vdGlmaWNhdGlvbiIsIlNlYXJjaEJveCIsInN0eWxlTmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIlVzZXJJbmZvIiwiYXV0aFVzZXIiLCJ1c2VyU2lnbk91dCIsInVzZUF1dGgiLCJ1c2VyTWVudU9wdGlvbnMiLCJTSURFQkFSX1ZJU0lCTEVfT04iLCJOQVZfU1RZTEVfRklYRUQiLCJOQVZfU1RZTEVfRFJBV0VSIiwiTkFWX1NUWUxFX01JTklfU0lERUJBUiIsIk5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSIiwiTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSIiwiQXBwU2lkZWJhciIsIm5hdlN0eWxlIiwid2lkdGgiLCJ1c2VTZWxlY3RvciIsInNldHRpbmdzIiwiVEFCX1NJWkUiLCJpbmNsdWRlcyIsIlJlYWN0IiwibWVtbyIsImdldENvbnRhaW5lckNsYXNzIiwiTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTCIsIk5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwiLCJOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMIiwiTkFWX1NUWUxFX0JFTE9XX0hFQURFUiIsIk5BVl9TVFlMRV9BQk9WRV9IRUFERVIiLCJnZXROYXZTdHlsZXMiLCJDb250ZW50IiwiRm9vdGVyIiwiTGF5b3V0IiwidG9kYXkiLCJEYXRlIiwiQXBwTGF5b3V0IiwiaXNMb2FkaW5nVXNlciIsImVycm9yIiwidGhlbWVUeXBlIiwibGF5b3V0VHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJUSEVNRV9UWVBFX0RBUksiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsIkxBWU9VVF9UWVBFX0ZVTEwiLCJMQVlPVVRfVFlQRV9CT1hFRCIsIkxBWU9VVF9UWVBFX0ZSQU1FRCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJ0b1N0cmluZyIsInRoZW4iLCJyIiwiaXNVblJlc3RyaWN0ZWRSb3V0ZSIsInBhdGhuYW1lIiwicHVzaCIsIkxvY2FsZVByb3ZpZGVyIiwicHJvcHMiLCJsb2NhbGUiLCJpc0RpcmVjdGlvblJUTCIsImN1cnJlbnRBcHBMb2NhbGUiLCJBcHBMb2NhbGUiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwic2V0QXR0cmlidXRlIiwiYW50ZCIsIm1lc3NhZ2VzIiwiQXBwc05hdmlnYXRpb24iLCJTdWJNZW51IiwiTWVudSIsIk1lbnVJdGVtR3JvdXAiLCJJdGVtR3JvdXAiLCJTaWRlYmFyQ29udGVudCIsImdldE5vSGVhZGVyQ2xhc3MiLCJnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyIsInNldFBhdGhOYW1lIiwic2VsZWN0ZWRLZXlzIiwic3Vic3RyIiwiZGVmYXVsdE9wZW5LZXlzIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwiYmFja2dyb3VuZCIsImJvcmRlciIsIlRIRU1FX1RZUEVfTElURSIsInByb3BUeXBlcyIsIlNpZGViYXJMb2dvIiwibmF2Q29sbGFwc2VkIiwidG9nZ2xlQ29sbGFwc2VkU2lkZU5hdiIsIm9uTmF2U3R5bGVDaGFuZ2UiLCJtYXhXaWR0aCIsIlVzZXJQcm9maWxlIiwidGV4dEFsaWduIiwiU2lkZXIiLCJTaWRlYmFyIiwib25Ub2dnbGVDb2xsYXBzZWROYXYiLCJkcmF3ZXJTdHlsZSIsIkhlYWRlciIsIk9wdGlvbiIsIlNlbGVjdCIsIm1lbnUiLCJoYW5kbGVNZW51Q2xpY2siLCJpbmZvIiwiaGFuZGxlQ2hhbmdlIiwiQWJvdmVIZWFkZXIiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInVzZVN0YXRlIiwibGFuZ3VhZ2VNZW51IiwibGFuZ3VhZ2VEYXRhIiwibGFuZ3VhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInN3aXRjaExhbmd1YWdlIiwidXBkYXRlU2VhcmNoQ2hhdFVzZXIiLCJldnQiLCJ0YXJnZXQiLCJCZWxvd0hlYWRlciIsIkhvcml6b250YWxEYXJrIiwiSG9yaXpvbnRhbERlZmF1bHQiLCJIb3Jpem9udGFsTmF2IiwiSW5zaWRlSGVhZGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiY29ubmVjdCIsIk5vSGVhZGVyTm90aWZpY2F0aW9uIiwiVG9wYmFyIiwibGFuZ3VhZ2VJZCIsIlRPR0dMRV9DT0xMQVBTRURfTkFWIiwiV0lORE9XX1dJRFRIIiwiU1dJVENIX0xBTkdVQUdFIiwiRkVUQ0hfU1RBUlQiLCJGRVRDSF9TVUNDRVNTIiwiRkVUQ0hfRVJST1IiLCJTSE9XX01FU1NBR0UiLCJISURFX01FU1NBR0UiLCJUSEVNRV9UWVBFIiwiVEhFTUVfVFlQRV9TRU1JX0RBUksiLCJUSEVNRV9DT0xPUl9TRUxFQ1RJT04iLCJUSEVNRV9DT0xPUl9TRUxFQ1RJT05fUFJFU0VUIiwiVEhFTUVfQ09MT1JfU0VMRUNUSU9OX0NVU1RPTUlaRSIsIkhPUklaT05UQUxfTkFWSUdBVElPTiIsIkhPUklaT05UQUxfTUVOVV9QT1NJVElPTiIsIkFCT1ZFX1RIRV9IRUFERVIiLCJJTlNJREVfVEhFX0hFQURFUiIsIkJFTE9XX1RIRV9IRUFERVIiLCJWRVJUSUNBTF9OQVZJR0FUSU9OIiwiTkFWX1NUWUxFX01JTkkiLCJMQVlPVVRfVFlQRSIsIlNFVF9QQVRIX05BTUUiLCJVUERBVEVfUlRMX1NUQVRVUyIsIk5BVl9TVFlMRSIsIkxJR0hUX1BVUlBMRSIsIkxJR0hUX1BVUlBMRV9TRUMiLCJMSUdIVF9QVVJQTEVfREFSS19URVhUX0NPTE9SIiwiUkVEIiwiUkVEX1NFQyIsIlJFRF9EQVJLX1RFWFRfQ09MT1IiLCJCTFVFIiwiQkxVRV9TRUMiLCJCTFVFX0RBUktfVEVYVF9DT0xPUiIsIkRBUktfQkxVRSIsIkRBUktfQkxVRV9TRUMiLCJEQVJLX0JMVUVfREFSS19URVhUX0NPTE9SIiwiT1JBTkdFIiwiT1JBTkdFX1NFQyIsIk9SQU5HRV9EQVJLX1RFWFRfQ09MT1IiLCJMSUdIVF9CTFVFIiwiTElHSFRfQkxVRV9TRUMiLCJMSUdIVF9CTFVFX0RBUktfVEVYVF9DT0xPUiIsIkRFRVBfT1JBTkdFIiwiREVFUF9PUkFOR0VfU0VDIiwiREVFUF9PUkFOR0VfREFSS19URVhUX0NPTE9SIiwiTElHSFRfUFVSUExFXzEiLCJMSUdIVF9QVVJQTEVfMV9TRUMiLCJMSUdIVF9QVVJQTEVfMV9EQVJLX1RFWFRfQ09MT1IiLCJMSUdIVF9QVVJQTEVfMiIsIkxJR0hUX1BVUlBMRV8yX1NFQyIsIkxJR0hUX1BVUlBMRV8yX0RBUktfVEVYVF9DT0xPUiIsIkFDVElWRV9DT0xPUl9PUFRJT04iLCJzYUxhbmciLCJzYU1lc3NhZ2VzIiwiYW50ZEFSIiwiRW5MYW5nIiwiZW5NZXNzYWdlcyIsImFudGRFTiIsImFudGRFUyIsImFudGRGUiIsImFudGRJVCIsIlpoTGFuIiwiemhNZXNzYWdlcyIsInpoQ04iLCJlbiIsImVuTGFuZyIsInpoIiwiemhMYW5nIiwiYXIiLCJhckxhbmciLCJpdCIsIml0TGFuZyIsImVzIiwiZXNMYW5nIiwiZnIiLCJmckxhbmciLCJjYWNoZWRPYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsInNldCIsImVyciIsInByZWZldGNoIiwiYXMiLCJvcHRpb25zIiwiY2F0Y2giLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImZvY3VzIiwiTGluayIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwiY2hpbGRFbG0iLCJzZXRDaGlsZEVsbSIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZGVmaW5lUHJvcGVydHkiLCJSb3V0ZXIiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkFycmF5IiwiaXNBcnJheSIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwiYWRkTG9jYWxlIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwibGVuZ3RoIiwiaXNMb2NhbFVSTCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJpbnRlcnBvbGF0ZUFzIiwicm91dGUiLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJqb2luIiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwic2VhcmNoUGFyYW1zIiwiaGFzaCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiaW5pdGlhbFN0eWxlU2hlZXRzIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImxvY2FsZXMiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJjaGFuZ2UiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJyZWxvYWQiLCJsb2NhdGlvbiIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhZ2VzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwicmV3cml0ZXMiLCJwcm9taXNlZEJ1aWxkTWFuaWZlc3QiLCJwYXJzZWQiLCJfcmVzb2x2ZUhyZWYiLCJ1cmxJc05ldyIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiZmlsdGVyIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsInBhZ2UiLCJmZXRjaENvbXBvbmVudCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsInJlcXVpcmUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwic29tZSIsInJlIiwidGVzdCIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjYWNoZUtleSIsImN0eCIsIkFwcFRyZWUiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsInByZXBhcmVEZXN0aW5hdGlvbiIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJjb21waWxlIiwidmFsaWRhdGUiLCJuZXdVcmwiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsInNob3VsZEFkZEJhc2VQYXRoIiwibWF0Y2giLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5Iiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXNvbHZlUmV3cml0ZXMiLCJyZXdyaXRlIiwic291cmNlIiwiZGVzdFJlcyIsImdldFJvdXRlTWF0Y2hlciIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJnZXRSb3V0ZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJQYWdlIiwic3RvcmUiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiLCJmZXRjaFN0YXJ0IiwiZmV0Y2hTdWNjZXNzIiwiZmV0Y2hFcnJvciIsInBheWxvYWQiLCJzaG93TWVzc2FnZSIsImhpZGVNZXNzYWdlIiwic2V0VGhlbWVUeXBlIiwib25MYXlvdXRUeXBlQ2hhbmdlIiwic2V0RGlyZWN0aW9uUlRMIiwicnRsU3RhdHVzIiwiSU5JVF9TVEFURSIsImxvYWRpbmciLCJjb21tb25SZWR1Y2VyIiwiYWN0aW9uIiwiaW5pdGlhbFNldHRpbmdzIiwiU2V0dGluZ3NSZWR1Y2VyIiwicmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJTZXR0aW5ncyIsImNvbW1vbiIsIkNvbW1vbiIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwidGh1bmsiLCJodHRwQ2xpZW50IiwiYXhpb3MiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkN1c3RvbVNjcm9sbGJhcnMiLCJkaXNwbGF5IiwiSW5qZWN0TWFzc2FnZSIsImluamVjdEludGwiLCJ3aXRoUmVmIiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwidXNlUHJvdmlkZUF1dGgiLCJzZXRBdXRoVXNlciIsInNldExvYWRpbmdVc2VyIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwidXNlckxvZ2luIiwiY2FsbGJhY2tGdW4iLCJwb3N0IiwiZGVmYXVsdHMiLCJ0b2tlbiIsImFjY2Vzc190b2tlbiIsImNvb2tpZXMiLCJDb29raWVzIiwiZ2V0QXV0aFVzZXIiLCJ1c2VyU2lnbnVwIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFD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LENBQUMsS0FBSyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRSxFQUFFLENBQ047O0VBRUQ7RUFDQSxPQUFPO0lBQ0x6bkIsYUFBYTtJQUNiMG5CLFNBQVM7SUFDVDFwQixRQUFRO0lBQ1JpQyxLQUFLO0lBQ0x1bkIsV0FBVztJQUNYYSxXQUFXO0lBQ1hSLFNBQVM7SUFDVFMsVUFBVTtJQUNWcnFCO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFTSxNQUFNeUQsbUJBQW1CLEdBQUlDLFFBQVEsSUFBSztFQUMvQyxPQUFPQSxRQUFRLEtBQUssU0FBUyxJQUFJQSxRQUFRLEtBQUssU0FBUyxJQUFJQSxRQUFRLEtBQUssa0JBQWtCLElBQUlBLFFBQVEsS0FBSyxpQkFBaUI7QUFDOUgsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVKRCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBBcHBMaW5rID0gKHtocmVmLCBjaGlsZHJlbn0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PExpbmsgaHJlZj17aHJlZn0+XHJcblx0XHRcdDxhPntjaGlsZHJlbn08L2E+XHJcblx0XHQ8L0xpbms+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExpbms7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBdmF0YXJ9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5cclxuY29uc3QgTm90aWZpY2F0aW9uSXRlbSA9ICh7bm90aWZpY2F0aW9ufSkgPT4ge1xyXG4gIGNvbnN0IHtpY29uLCBpbWFnZSwgdGl0bGUsIHRpbWV9ID0gbm90aWZpY2F0aW9uO1xyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGxpIGNsYXNzTmFtZT1cImd4LW1lZGlhXCI+XHJcbiAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwiZ3gtc2l6ZS00MCBneC1tci0zXCJcclxuICAgICAgICAgICAgICBhbHQ9e2ltYWdlfVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2V9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tZWRpYS1ib2R5IGd4LWFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtZnMtc20gZ3gtbWItMFwiPnt0aXRsZX08L3A+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPXtgaWNvbiBpY29uLSR7aWNvbn0gZ3gtcHItMmB9Lz4gPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbWV0YS1kYXRlXCI+PHNtYWxsPnt0aW1lfTwvc21hbGw+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkl0ZW07XHJcbiIsImV4cG9ydCBjb25zdCBub3RpZmljYXRpb25zID0gW1xyXG5cclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHRpdGxlOiBcIlN0ZWxsYSBKb2huc29uIGhhcyByZWNlbnRseSBwb3N0ZWQgYW4gYWxidW1cIixcclxuICAgIHRpbWU6IFwiNDoxMCBQTVwiLFxyXG4gICAgaWNvbjogXCJ0aHVtYi11cCBneC10ZXh0LWJsdWVcIixcclxuICB9LCB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHRpdGxlOiBcIkFsZXggQnJvd24gaGFzIHNoYXJlZCBNYXJ0aW4gR3VwdGlsJ3MgcG9zdFwiLFxyXG4gICAgdGltZTogXCI1OjE4IFBNXCIsXHJcbiAgICBpY29uOiBcImNoYXQgZ3gtdGV4dC1ncmV5XCIsXHJcbiAgfSwge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDQyMCcsXHJcbiAgICB0aXRsZTogXCJEb21uaWMgQnJvd24gaGFzIHNlbnQgeW91IGEgZ3JvdXAgaW52aXRhdGlvbiBmb3IgR2xvYmFsIEhlYWx0aFwiLFxyXG4gICAgdGltZTogXCI1OjM2IFBNXCIsXHJcbiAgICBpY29uOiBcImJpcnRoZGF5IHRleHQtaW5mb1wiLFxyXG4gIH0sIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgdGl0bGU6IFwiSm9obiBTbWl0aCBoYXMgYmlydGhkYXkgdG9kYXlcIixcclxuICAgIHRpbWU6IFwiNTo1NCBQTVwiLFxyXG4gICAgaWNvbjogXCJiaXJ0aGRheSBneC10ZXh0LXdhcm5pbmdcIixcclxuICB9LCB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHRpdGxlOiBcIkNocmlzIGhhcyB1cGRhdGVkIGhpcyBwcm9maWxlIHBpY3R1cmVcIixcclxuICAgIHRpbWU6IFwiNToyNSBQTVwiLFxyXG4gICAgaWNvbjogXCJwcm9maWxlIGd4LXRleHQtZ3JleVwiLFxyXG4gIH1cclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbSBmcm9tIFwiLi9Ob3RpZmljYXRpb25JdGVtXCI7XHJcbmltcG9ydCB7bm90aWZpY2F0aW9uc30gZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XHJcblxyXG5cclxuY29uc3QgQXBwTm90aWZpY2F0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXBvcG92ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImd4LW1iLTBcIj5Ob3RpZmljYXRpb25zPC9oMz5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tY2hhcnZsZXQtZG93blwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LXBvcG92ZXItc2Nyb2xsXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LXN1Yi1wb3BvdmVyXCI+XHJcbiAgICAgICAgICB7bm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbiwgaW5kZXgpID0+IDxOb3RpZmljYXRpb25JdGVtIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbj17bm90aWZpY2F0aW9ufS8+KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcE5vdGlmaWNhdGlvbjtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENpcmN1bGFyUHJvZ3Jlc3MgPSAoe2NsYXNzTmFtZX0pID0+IDxkaXYgY2xhc3NOYW1lPXtgbG9hZGVyICR7Y2xhc3NOYW1lfWB9PlxyXG4gIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkZXIuc3ZnXCIgYWx0PVwibG9hZGVyXCIgc3R5bGU9e3toZWlnaHQ6IDYwfX0vPlxyXG48L2Rpdj47XHJcbmV4cG9ydCBkZWZhdWx0IENpcmN1bGFyUHJvZ3Jlc3M7XHJcbkNpcmN1bGFyUHJvZ3Jlc3MuZGVmYXVsdFByb3BzID0ge1xyXG4gIGNsYXNzTmFtZTogJydcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXZhdGFyfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgTm90aWZpY2F0aW9uSXRlbSA9ICh7bm90aWZpY2F0aW9ufSkgPT4ge1xyXG4gIGNvbnN0IHtpbWFnZSwgYmFkZ2UsIG5hbWUsIHRpbWUsIG1lc3NhZ2V9ID0gbm90aWZpY2F0aW9uO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbWVkaWFcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC11c2VyLXRodW1iIGd4LW1yLTNcIj5cclxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT1cImd4LXNpemUtNDBcIlxyXG4gICAgICAgICAgICAgICAgYWx0PXtpbWFnZX1cclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9Lz5cclxuICAgICAgICB7YmFkZ2UgPiAwID8gPHNwYW4gY2xhc3NOYW1lPVwiZ3gtYmFkZ2UgZ3gtYmFkZ2UtZGFuZ2VyIGd4LXRleHQtd2hpdGUgZ3gtcm91bmRlZC1jaXJjbGVcIj57YmFkZ2V9PC9zcGFuPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1lZGlhLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZsZXgtcm93IGd4LWp1c3RpZnktY29udGVudC1iZXR3ZWVuIGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImd4LXRleHQtY2FwaXRhbGl6ZSBneC11c2VyLW5hbWUgZ3gtbWItMFwiPjxzcGFuIGNsYXNzTmFtZT1cImd4LWxpbmtcIj57bmFtZX08L3NwYW4+PC9oNT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LW1ldGEtZGF0ZVwiPjxzbWFsbD57dGltZX08L3NtYWxsPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1mcy1zbVwiPnttZXNzYWdlfTwvcD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1idG4gZ3gtYnRuLXNtIGd4LXRvcDIgZ3gtdGV4dC1tdXRlZFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1yZXBseSBneC1wci0yXCIvPlJlcGx5PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWJ0biBneC1idG4tc20gZ3gtdG9wMiBneC10ZXh0LW11dGVkXCI+PGlcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi1jdXN0b20tdmlldyBneC1wci0yXCIvPlJlYWQ8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uSXRlbTtcclxuIiwiZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXHJcbiAgICBuYW1lOiBcIkRvbW5pYyBCcm93blwiLFxyXG4gICAgdGltZTogXCI2OjE5IFBNXCIsXHJcbiAgICBtZXNzYWdlOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YuLi5cIixcclxuICAgIGJhZGdlOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltYWdlOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcclxuICAgIG5hbWU6IFwiSm9obiBTbWl0aFwiLFxyXG4gICAgdGltZTogXCI0OjE4IFBNXCIsXHJcbiAgICBtZXNzYWdlOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZS4uLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWFnZTpcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcclxuICAgIG5hbWU6IFwiSm9obiBTbWl0aFwiLFxyXG4gICAgdGltZTogXCI3OjEwIFBNXCIsXHJcbiAgICBtZXNzYWdlOiBcIlRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhLi4uXCIsXHJcbiAgICBiYWRnZTogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXHJcbiAgICBuYW1lOiBcImFsZXggZG9sZ292ZVwiLFxyXG4gICAgdGltZTogXCI1OjEwIFBNXCIsXHJcbiAgICBtZXNzYWdlOiBcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbC4uLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXHJcbiAgICBuYW1lOiBcIkRvbW5pYyBIYXJyaXNcIixcclxuICAgIHRpbWU6IFwiNzozNSBQTVwiLFxyXG4gICAgbWVzc2FnZTogXCJBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlLi4uXCIsXHJcbiAgICBiYWRnZTogM1xyXG4gIH1cclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbSBmcm9tIFwiLi9Ob3RpZmljYXRpb25JdGVtXCI7XHJcbmltcG9ydCB7bm90aWZpY2F0aW9uc30gZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tICcuLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnMnXHJcblxyXG5jb25zdCBNYWlsTm90aWZpY2F0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXBvcG92ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImd4LW1iLTBcIj5NZXNzYWdlczwvaDM+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLWNoYXJ2bGV0LWRvd25cIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1wb3BvdmVyLXNjcm9sbFwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxyXG4gICAgICAgICAge25vdGlmaWNhdGlvbnMubWFwKChub3RpZmljYXRpb24sIGluZGV4KSA9PiA8Tm90aWZpY2F0aW9uSXRlbSBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb249e25vdGlmaWNhdGlvbn0vPil9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9DdXN0b21TY3JvbGxiYXJzPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbE5vdGlmaWNhdGlvbjtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNlYXJjaEJveCA9ICh7c3R5bGVOYW1lLCBwbGFjZWhvbGRlciwgb25DaGFuZ2UsIHZhbHVlfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BneC1zZWFyY2gtYmFyICR7c3R5bGVOYW1lfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYW50LWlucHV0XCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9Lz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1zZWFyY2gtaWNvbiBneC1wb2ludGVyXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaFwiLz48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCb3g7XHJcblxyXG5TZWFyY2hCb3guZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0eWxlTmFtZTogXCJcIixcclxuICB2YWx1ZTogXCJcIixcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhciwgUG9wb3Zlcn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiLi4vLi4vLi4vdXRpbC91c2UtYXV0aFwiO1xyXG5cclxuY29uc3QgVXNlckluZm8gPSAoKSA9PiB7XHJcbiAgY29uc3Qge2F1dGhVc2VyLCB1c2VyU2lnbk91dH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHVzZXJNZW51T3B0aW9ucyA9IChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJneC11c2VyLXBvcG92ZXJcIj5cclxuICAgICAgPGxpPk15IEFjY291bnQ8L2xpPlxyXG4gICAgICA8bGk+Q29ubmVjdGlvbnM8L2xpPlxyXG4gICAgICA8bGkgb25DbGljaz17KCkgPT4gdXNlclNpZ25PdXQoKX0+TG9nb3V0XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiBhdXRoVXNlciA/IChcclxuICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e3VzZXJNZW51T3B0aW9uc30gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgIDxBdmF0YXIgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiIGNsYXNzTmFtZT1cImd4LWF2YXRhciBneC1wb2ludGVyXCIgYWx0PVwiXCIvPlxyXG4gICAgPC9Qb3BvdmVyPlxyXG4gICkgOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTkFWX1NUWUxFX0RSQVdFUixcbiAgTkFWX1NUWUxFX0ZJWEVELFxuICBOQVZfU1RZTEVfTUlOSV9TSURFQkFSLCBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIsXG4gIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSLCBUQUJfU0laRVxufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vU2lkZWJhclwiO1xuXG5jb25zdCBTSURFQkFSX1ZJU0lCTEVfT04gPSBbTkFWX1NUWUxFX0ZJWEVELCBOQVZfU1RZTEVfRFJBV0VSLCBOQVZfU1RZTEVfTUlOSV9TSURFQkFSLCBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUiwgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSXTtcblxuY29uc3QgQXBwU2lkZWJhciA9ICh7bmF2U3R5bGV9KSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLndpZHRoKTtcblxuICBpZiAod2lkdGggPCBUQUJfU0laRSB8fCBTSURFQkFSX1ZJU0lCTEVfT04uaW5jbHVkZXMobmF2U3R5bGUpKSB7XG4gICAgcmV0dXJuIDxTaWRlYmFyLz47XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQXBwU2lkZWJhcik7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMYXlvdXQsIG1lc3NhZ2V9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBIb3Jpem9udGFsRGVmYXVsdCBmcm9tIFwiLi4vVG9wYmFyL0hvcml6b250YWxEZWZhdWx0XCI7XG5pbXBvcnQgSG9yaXpvbnRhbERhcmsgZnJvbSBcIi4uL1RvcGJhci9Ib3Jpem9udGFsRGFya1wiO1xuaW1wb3J0IEluc2lkZUhlYWRlciBmcm9tIFwiLi4vVG9wYmFyL0luc2lkZUhlYWRlclwiO1xuaW1wb3J0IEFib3ZlSGVhZGVyIGZyb20gXCIuLi9Ub3BiYXIvQWJvdmVIZWFkZXJcIjtcbmltcG9ydCBCZWxvd0hlYWRlciBmcm9tIFwiLi4vVG9wYmFyL0JlbG93SGVhZGVyXCI7XG5pbXBvcnQgVG9wYmFyIGZyb20gXCIuLi9Ub3BiYXJcIjtcbmltcG9ydCB7XG4gIExBWU9VVF9UWVBFX0JPWEVELFxuICBMQVlPVVRfVFlQRV9GUkFNRUQsXG4gIExBWU9VVF9UWVBFX0ZVTEwsXG4gIE5BVl9TVFlMRV9BQk9WRV9IRUFERVIsXG4gIE5BVl9TVFlMRV9CRUxPV19IRUFERVIsXG4gIE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwsXG4gIE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwsXG4gIE5BVl9TVFlMRV9EUkFXRVIsXG4gIE5BVl9TVFlMRV9GSVhFRCxcbiAgTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCxcbiAgTkFWX1NUWUxFX01JTklfU0lERUJBUixcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxuICBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUixcbiAgVEhFTUVfVFlQRV9EQVJLXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XG5pbXBvcnQgTm9IZWFkZXJOb3RpZmljYXRpb24gZnJvbSBcIi4uL1RvcGJhci9Ob0hlYWRlck5vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHtpc1VuUmVzdHJpY3RlZFJvdXRlLCB1c2VBdXRofSBmcm9tIFwiLi4vLi4vLi4vdXRpbC91c2UtYXV0aFwiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IHt1cGRhdGVXaW5kb3dXaWR0aH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCBBcHBTaWRlYmFyIGZyb20gXCIuL0FwcFNpZGViYXJcIjtcblxuY29uc3QgZ2V0Q29udGFpbmVyQ2xhc3MgPSAobmF2U3R5bGUpID0+IHtcbiAgc3dpdGNoIChuYXZTdHlsZSkge1xuICAgIGNhc2UgTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTDpcbiAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XG4gICAgY2FzZSBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMOlxuICAgICAgcmV0dXJuIFwiZ3gtY29udGFpbmVyLXdyYXBcIjtcbiAgICBjYXNlIE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUw6XG4gICAgICByZXR1cm4gXCJneC1jb250YWluZXItd3JhcFwiO1xuICAgIGNhc2UgTkFWX1NUWUxFX0JFTE9XX0hFQURFUjpcbiAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XG4gICAgY2FzZSBOQVZfU1RZTEVfQUJPVkVfSEVBREVSOlxuICAgICAgcmV0dXJuIFwiZ3gtY29udGFpbmVyLXdyYXBcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBnZXROYXZTdHlsZXMgPSAobmF2U3R5bGUpID0+IHtcbiAgc3dpdGNoIChuYXZTdHlsZSkge1xuICAgIGNhc2UgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCA6XG4gICAgICByZXR1cm4gPEhvcml6b250YWxEZWZhdWx0Lz47XG4gICAgY2FzZSBOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMIDpcbiAgICAgIHJldHVybiA8SG9yaXpvbnRhbERhcmsvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwgOlxuICAgICAgcmV0dXJuIDxJbnNpZGVIZWFkZXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9BQk9WRV9IRUFERVIgOlxuICAgICAgcmV0dXJuIDxBYm92ZUhlYWRlci8+O1xuICAgIGNhc2UgTkFWX1NUWUxFX0JFTE9XX0hFQURFUiA6XG4gICAgICByZXR1cm4gPEJlbG93SGVhZGVyLz47XG4gICAgY2FzZSBOQVZfU1RZTEVfRklYRUQgOlxuICAgICAgcmV0dXJuIDxUb3BiYXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9EUkFXRVIgOlxuICAgICAgcmV0dXJuIDxUb3BiYXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIgOlxuICAgICAgcmV0dXJuIDxUb3BiYXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSIDpcbiAgICAgIHJldHVybiA8Tm9IZWFkZXJOb3RpZmljYXRpb24vPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUiA6XG4gICAgICByZXR1cm4gPE5vSGVhZGVyTm90aWZpY2F0aW9uLz47XG4gICAgZGVmYXVsdCA6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3Qge0NvbnRlbnQsIEZvb3Rlcn0gPSBMYXlvdXQ7XG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbmNvbnN0IEFwcExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gIGNvbnN0IHthdXRoVXNlciwgaXNMb2FkaW5nVXNlciwgZXJyb3J9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB0aGVtZVR5cGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MudGhlbWVUeXBlKTtcbiAgY29uc3QgbmF2U3R5bGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2U3R5bGUpO1xuICBjb25zdCBsYXlvdXRUeXBlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxheW91dFR5cGUpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGhlbWVUeXBlID09PSBUSEVNRV9UWVBFX0RBUkspIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay10aGVtZScpO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstdGhlbWUnKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLXRoZW1lJyk7XG4gICAgfVxuICB9LCBbdGhlbWVUeXBlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEVfRlVMTCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib3hlZC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnJhbWVkLWxheW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdmdWxsLWxheW91dCcpO1xuICAgIH0gZWxzZSBpZiAobGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEVfQk9YRUQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnJhbWVkLWxheW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib3hlZC1sYXlvdXQnKTtcbiAgICB9IGVsc2UgaWYgKGxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFX0ZSQU1FRCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib3hlZC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZnJhbWVkLWxheW91dCcpO1xuICAgIH1cbiAgfSwgW2xheW91dFR5cGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCB8fFxuICAgICAgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwgfHxcbiAgICAgIG5hdlN0eWxlID09PSBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMIHx8XG4gICAgICBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0FCT1ZFX0hFQURFUiB8fFxuICAgICAgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9CRUxPV19IRUFERVIpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZnVsbC1zY3JvbGwnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbC1sYXlvdXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsLXNjcm9sbCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsLWxheW91dCcpO1xuICAgIH1cbiAgfSwgW25hdlN0eWxlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlV2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpKTtcbiAgICB9KVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgbWVzc2FnZS5lcnJvcihlcnJvci50b1N0cmluZygpKS50aGVuKHIgPT4gcik7XG4gICAgfVxuICB9LCBbZXJyb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNMb2FkaW5nVXNlcikge1xuICAgICAgaWYgKCFhdXRoVXNlciAmJiAhaXNVblJlc3RyaWN0ZWRSb3V0ZShyb3V0ZXIucGF0aG5hbWUpKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvc2lnbmluJykudGhlbihyID0+IHIpO1xuICAgICAgfSBlbHNlIGlmIChhdXRoVXNlciAmJiBpc1VuUmVzdHJpY3RlZFJvdXRlKHJvdXRlci5wYXRobmFtZSkpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKS50aGVuKHIgPT4gcik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbYXV0aFVzZXIsIGlzTG9hZGluZ1VzZXIsIHJvdXRlci5wYXRobmFtZV0pO1xuXG4gIGlmIChpc0xvYWRpbmdVc2VyKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbG9hZGVyLXZpZXdcIj5cbiAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cbiAgICA8L2Rpdj47XG4gIH1cblxuICByZXR1cm4gaXNVblJlc3RyaWN0ZWRSb3V0ZShyb3V0ZXIucGF0aG5hbWUpID8gY2hpbGRyZW4gOiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e2BneC1hcHAtbGF5b3V0YH0+XG4gICAgICA8QXBwU2lkZWJhciBuYXZTdHlsZT17bmF2U3R5bGV9Lz5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtnZXROYXZTdHlsZXMobmF2U3R5bGUpfVxuICAgICAgICA8Q29udGVudCBjbGFzc05hbWU9e2BneC1sYXlvdXQtY29udGVudCAke2dldENvbnRhaW5lckNsYXNzKG5hdlN0eWxlKX1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1haW4tY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxGb290ZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWxheW91dC1mb290ZXItY29udGVudFwiPlxuICAgICAgICAgICAgICBDb3B5cmlnaHQgQ29tcGFueSBOYW1lIMKpIHt0b2RheS5nZXRGdWxsWWVhcigpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb290ZXI+ICovfVxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XG5cbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtDb25maWdQcm92aWRlcn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQge0ludGxQcm92aWRlcn0gZnJvbSBcInJlYWN0LWludGxcIjtcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEFwcExvY2FsZSBmcm9tIFwiLi4vLi4vLi4vbG5nUHJvdmlkZXJcIjtcblxuY29uc3QgTG9jYWxlUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgbG9jYWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxvY2FsZSk7XG4gIGNvbnN0IGlzRGlyZWN0aW9uUlRMID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmlzRGlyZWN0aW9uUlRMKTtcbiAgY29uc3QgY3VycmVudEFwcExvY2FsZSA9IEFwcExvY2FsZVtsb2NhbGUubG9jYWxlXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbGUpXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IGxvY2FsZS5sb2NhbGU7XG4gIH0sIFtsb2NhbGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0RpcmVjdGlvblJUTCkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3J0bCcpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1kaXJlY3Rpb24nLCAncnRsJylcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3J0bCcpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1kaXJlY3Rpb24nLCAnbHRyJylcbiAgICB9XG4gIH0sIFtpc0RpcmVjdGlvblJUTF0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbmZpZ1Byb3ZpZGVyIGxvY2FsZT17Y3VycmVudEFwcExvY2FsZS5hbnRkfSBkaXJlY3Rpb249e2lzRGlyZWN0aW9uUlRMID8gJ3J0bCcgOiAnbHRyJ30+XG4gICAgICA8SW50bFByb3ZpZGVyXG4gICAgICAgIGxvY2FsZT17Y3VycmVudEFwcExvY2FsZS5sb2NhbGV9XG4gICAgICAgIG1lc3NhZ2VzPXtjdXJyZW50QXBwTG9jYWxlLm1lc3NhZ2VzfT57cHJvcHMuY2hpbGRyZW59PC9JbnRsUHJvdmlkZXI+XG4gICAgPC9Db25maWdQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbGVQcm92aWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFwcHNOYXZpZ2F0aW9uID0gKCkgPT5cclxuICA8dWwgY2xhc3NOYW1lPVwiZ3gtYXBwLW5hdlwiPlxyXG4gICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2gtbmV3XCIvPjwvbGk+XHJcbiAgICA8bGk+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L2xpPlxyXG4gICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz48L2xpPlxyXG4gIDwvdWw+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwc05hdmlnYXRpb247XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge01lbnUsIEJ1dHRvbn0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xuaW1wb3J0IFNpZGViYXJMb2dvIGZyb20gXCIuL1NpZGViYXJMb2dvXCI7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcbmltcG9ydCBBcHBzTmF2aWdhdGlvbiBmcm9tIFwiLi9BcHBzTmF2aWdhdGlvblwiO1xuaW1wb3J0IHtcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxuICBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUixcbiAgVEhFTUVfVFlQRV9MSVRFXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge3NldFBhdGhOYW1lfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBTdWJNZW51ID0gTWVudS5TdWJNZW51O1xuY29uc3QgTWVudUl0ZW1Hcm91cCA9IE1lbnUuSXRlbUdyb3VwO1xuXG5jb25zdCBTaWRlYmFyQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgbmF2U3R5bGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2U3R5bGUpO1xuICBjb25zdCB0aGVtZVR5cGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MudGhlbWVUeXBlKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgZ2V0Tm9IZWFkZXJDbGFzcyA9IChuYXZTdHlsZSkgPT4ge1xuICAgIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIgfHwgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUikge1xuICAgICAgcmV0dXJuIFwiZ3gtbm8taGVhZGVyLW5vdGlmaWNhdGlvbnNcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MgPSAobmF2U3R5bGUpID0+IHtcbiAgICBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSKSB7XG4gICAgICByZXR1cm4gXCJneC1uby1oZWFkZXItc3VibWVudS1wb3B1cFwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldFBhdGhOYW1lKHJvdXRlci5wYXRobmFtZSkpXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcblxuICBjb25zdCBzZWxlY3RlZEtleXMgPSByb3V0ZXIucGF0aG5hbWUuc3Vic3RyKDEpIHx8ICdkYXNoYm9hcmQnO1xuICBjb25zdCBkZWZhdWx0T3BlbktleXMgPSBzZWxlY3RlZEtleXMuc3BsaXQoJy8nKVsxXTtcblxuICBjb25zb2xlLmxvZyhkZWZhdWx0T3BlbktleXMpO1xuICBjb25zb2xlLmxvZyhzZWxlY3RlZEtleXMpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNpZGViYXJMb2dvLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2lkZWJhci1jb250ZW50XCI+XG4gICAgICAgXG4gICAgICAgXG4gICAgICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LWxheW91dC1zaWRlci1zY3JvbGxiYXJcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogXCIwcHggMjBweCAxMnB4IDIwcHhcIn19PlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwiLCBib3JkZXI6IFwibm9uZVwifX0gaHRtbFR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgKyBMb3JlbSBpcHN1bVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0Y5RkFGNVwifX1cbiAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17W2RlZmF1bHRPcGVuS2V5c119XG4gICAgICAgICAgICBzZWxlY3RlZEtleXM9e1tzZWxlY3RlZEtleXNdfVxuICAgICAgICAgICAgdGhlbWU9e3RoZW1lVHlwZSA9PT0gVEhFTUVfVFlQRV9MSVRFID8gJ2xpdGUnIDogJ2RhcmsnfVxuICAgICAgICAgICAgbW9kZT1cImlubGluZVwiPlxuXG4gICAgICAgICAgXG5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXdpZGdldHNcIi8+PHNwYW4+RGFzaGJvYXJkPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJ0ZXN0XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVzdFwiPlxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi13aWRnZXRzXCIvPjxzcGFuPlBhZ2UgMjwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2FtcGxlMlwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NhbXBsZTJcIj5cbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24td2lkZ2V0c1wiLz48c3Bhbj5QYWdlIDM8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInNhbXBsZTNcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zYW1wbGUzXCI+XG4gICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXdpZGdldHNcIi8+PHNwYW4+UGFnZSA0PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L0N1c3RvbVNjcm9sbGJhcnM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3gtc2lkZWJhci1ub3RpZmljYXRpb25zICR7Z2V0Tm9IZWFkZXJDbGFzcyhuYXZTdHlsZSl9YH0+XG4gICAgICAgICAgPFVzZXJQcm9maWxlLz5cbiAgICAgICAgICB7LyogPEFwcHNOYXZpZ2F0aW9uLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cblNpZGViYXJDb250ZW50LnByb3BUeXBlcyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckNvbnRlbnQ7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHtvbk5hdlN0eWxlQ2hhbmdlLCB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IHtcbiAgTkFWX1NUWUxFX0RSQVdFUixcbiAgTkFWX1NUWUxFX0ZJWEVELFxuICBOQVZfU1RZTEVfTUlOSV9TSURFQkFSLFxuICBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUixcbiAgVEFCX1NJWkUsXG4gIFRIRU1FX1RZUEVfTElURVxufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xuXG5cbmNvbnN0IFNpZGViYXJMb2dvID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZVR5cGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MudGhlbWVUeXBlKTtcbiAgY29uc3Qgd2lkdGggPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3Mud2lkdGgpO1xuICBjb25zdCBuYXZDb2xsYXBzZWQgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2Q29sbGFwc2VkKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGxldCBuYXZTdHlsZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZTdHlsZSk7XG4gIGlmICh3aWR0aCA8IFRBQl9TSVpFICYmIG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRklYRUQpIHtcbiAgICBuYXZTdHlsZSA9IE5BVl9TVFlMRV9EUkFXRVI7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWxheW91dC1zaWRlci1oZWFkZXJcIj5cbiAgICAgIHsobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9GSVhFRCB8fCBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX01JTklfU0lERUJBUikgPyA8ZGl2IGNsYXNzTmFtZT1cImd4LWxpbmViYXJcIj5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e2BneC1pY29uLWJ0biBpY29uIGljb24tJHtuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX01JTklfU0lERUJBUiA/ICdtZW51LXVuZm9sZCcgOiAnbWVudS1mb2xkJ30gJHt0aGVtZVR5cGUgIT09IFRIRU1FX1RZUEVfTElURSA/ICdneC10ZXh0LXdoaXRlJyA6ICcnfWB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRFJBV0VSKSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0ZJWEVEKSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKG9uTmF2U3R5bGVDaGFuZ2UoTkFWX1NUWUxFX01JTklfU0lERUJBUikpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUikge1xuICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKG9uTmF2U3R5bGVDaGFuZ2UoTkFWX1NUWUxFX0ZJWEVEKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+IDogbnVsbH1cblxuICAgICAgPExpbmsgaHJlZj1cIi9cIiA+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImd4LXNpdGUtbG9nb1wiPlxuICAgICAgICB7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSICYmIHdpZHRoID49IFRBQl9TSVpFID9cbiAgICAgICAgICA8aW1nIGFsdD1cImxvXCIgc3JjPXsoXCIvaW1hZ2VzL3ctbG9nby5wbmdcIil9Lz4gOlxuICAgICAgICAgIHRoZW1lVHlwZSA9PT0gVEhFTUVfVFlQRV9MSVRFID9cbiAgICAgICAgICAgIDxpbWcgYWx0PVwibG9nbzFcIiBzdHlsZT17e21heFdpZHRoOiBcIjgyJVwifX0gc3JjPXsoXCIvaW1hZ2VzL2xvZ28ucG5nXCIpfS8+IDpcbiAgICAgICAgICAgIDxpbWcgYWx0PVwibG9nbzJcIiBzcmM9eyhcIi9pbWFnZXMvbG9nby5wbmdcIil9Lz59XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJMb2dvO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhciwgUG9wb3Zlcn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiLi4vLi4vLi4vdXRpbC91c2UtYXV0aFwiO1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgY29uc3Qge2F1dGhVc2VyLCB1c2VyU2lnbk91dH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIC8vIGNvbnN0IHVzZXJNZW51T3B0aW9ucyA9IChcclxuICAvLyAgIDx1bCBjbGFzc05hbWU9XCJneC11c2VyLXBvcG92ZXJcIj5cclxuICAvLyAgICAgPGxpPk15IEFjY291bnQ8L2xpPlxyXG4gIC8vICAgICA8bGk+Q29ubmVjdGlvbnM8L2xpPlxyXG4gIC8vICAgICA8bGkgb25DbGljaz17KCkgPT4gdXNlclNpZ25PdXQoKX0+TG9nb3V0XHJcbiAgLy8gICAgIDwvbGk+XHJcbiAgLy8gICA8L3VsPlxyXG4gIC8vICk7XHJcblxyXG4gIHJldHVybiBhdXRoVXNlciA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGd4LWFsaWduLWl0ZW1zLWNlbnRlciBneC1tYi00XCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgey8qIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17dXNlck1lbnVPcHRpb25zfSB0cmlnZ2VyPVwiY2xpY2tcIj4gKi99XHJcbiAgICAgICAgPEF2YXRhciBzcmM9XCIvaW1hZ2VzL1JlY3RhbmdsZTIucG5nXCIgY2xhc3NOYW1lPVwiZ3gtc2l6ZS01MCBneC1wb2ludGVyIGd4LW1yLTNcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hdmF0YXItbmFtZSBneC1tdC0yXCI+e2F1dGhVc2VyLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hdmF0YXItbmFtZSBneC1tdC0yIGd4LXRleHQtbGlnaHRcIj5leGFtcGxlQHRlc3QuY29tPC9kaXY+XHJcbiAgICAgIHsvKiA8L1BvcG92ZXI+ICovfVxyXG4gICAgICB7LyogPGJ1dHRvbj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2V0dGluZ1wiPjwvaT48L2J1dHRvbj4gKi99XHJcbiAgICAgIHsvKiA8YnV0dG9uPjwvYnV0dG9uPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtEcmF3ZXIsIExheW91dH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IFNpZGViYXJDb250ZW50IGZyb20gXCIuL1NpZGViYXJDb250ZW50XCI7XG5pbXBvcnQge3RvZ2dsZUNvbGxhcHNlZFNpZGVOYXZ9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQge1xuICBOQVZfU1RZTEVfRFJBV0VSLFxuICBOQVZfU1RZTEVfRklYRUQsXG4gIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIsXG4gIE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUixcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIsXG4gIFRBQl9TSVpFLFxuICBUSEVNRV9UWVBFX0xJVEVcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcblxuY29uc3Qge1NpZGVyfSA9IExheW91dDtcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWVUeXBlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLnRoZW1lVHlwZSk7XG4gIGNvbnN0IG5hdkNvbGxhcHNlZCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZDb2xsYXBzZWQpO1xuICBjb25zdCB3aWR0aCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy53aWR0aCk7XG4gIGNvbnN0IG5hdlN0eWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdlN0eWxlKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgb25Ub2dnbGVDb2xsYXBzZWROYXYgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XG4gIH07XG5cbiAgbGV0IGRyYXdlclN0eWxlID0gXCJneC1jb2xsYXBzZWQtc2lkZWJhclwiO1xuXG4gIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0ZJWEVEKSB7XG4gICAgZHJhd2VyU3R5bGUgPSBcIlwiO1xuICB9IGVsc2UgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUikge1xuICAgIGRyYXdlclN0eWxlID0gXCJneC1taW5pLXNpZGViYXIgZ3gtbWluaS1jdXN0b20tc2lkZWJhclwiO1xuICB9IGVsc2UgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIpIHtcbiAgICBkcmF3ZXJTdHlsZSA9IFwiZ3gtY3VzdG9tLXNpZGViYXJcIlxuICB9IGVsc2UgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTUlOSV9TSURFQkFSKSB7XG4gICAgZHJhd2VyU3R5bGUgPSBcImd4LW1pbmktc2lkZWJhclwiO1xuICB9IGVsc2UgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRFJBV0VSKSB7XG4gICAgZHJhd2VyU3R5bGUgPSBcImd4LWNvbGxhcHNlZC1zaWRlYmFyXCJcbiAgfVxuICBpZiAoKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRklYRUQgfHwgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9NSU5JX1NJREVCQVJcbiAgICB8fCBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSKSAmJiB3aWR0aCA8IFRBQl9TSVpFKSB7XG4gICAgZHJhd2VyU3R5bGUgPSBcImd4LWNvbGxhcHNlZC1zaWRlYmFyXCJcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNpZGVyXG4gICAgICBjbGFzc05hbWU9e2BneC1hcHAtc2lkZWJhciAke2RyYXdlclN0eWxlfSAke3RoZW1lVHlwZSAhPT0gVEhFTUVfVFlQRV9MSVRFID8gJ2d4LWxheW91dC1zaWRlci1kYXJrJyA6IG51bGx9YH1cbiAgICAgIHRyaWdnZXI9e251bGx9XG4gICAgICBjb2xsYXBzZWQ9eyh3aWR0aCA8IFRBQl9TSVpFID8gZmFsc2UgOiBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX01JTklfU0lERUJBUiB8fCBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIpfVxuICAgICAgdGhlbWU9e3RoZW1lVHlwZSA9PT0gVEhFTUVfVFlQRV9MSVRFID8gXCJsaXRlXCIgOiBcImRhcmtcIn1cbiAgICAgIGNvbGxhcHNpYmxlPlxuICAgICAge1xuICAgICAgICBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0RSQVdFUiB8fCB3aWR0aCA8IFRBQl9TSVpFID9cbiAgICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BneC1kcmF3ZXItc2lkZWJhciAke3RoZW1lVHlwZSAhPT0gVEhFTUVfVFlQRV9MSVRFID8gJ2d4LWRyYXdlci1zaWRlYmFyLWRhcmsnIDogbnVsbH1gfVxuICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXG4gICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBvbkNsb3NlPXtvblRvZ2dsZUNvbGxhcHNlZE5hdn1cbiAgICAgICAgICAgIHZpc2libGU9e25hdkNvbGxhcHNlZH0+XG4gICAgICAgICAgICA8U2lkZWJhckNvbnRlbnQvPlxuICAgICAgICAgIDwvRHJhd2VyPiA6XG4gICAgICAgICAgPFNpZGViYXJDb250ZW50Lz5cbiAgICAgIH1cbiAgICA8L1NpZGVyPlxuICApXG59O1xuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgTGF5b3V0LCBNZW51LCBtZXNzYWdlLCBQb3BvdmVyLCBTZWxlY3R9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEljb24gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xuXG5pbXBvcnQgbGFuZ3VhZ2VEYXRhIGZyb20gXCIuLi9sYW5ndWFnZURhdGFcIjtcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQm94XCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVXNlckluZm9cIjtcbmltcG9ydCBBcHBOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgTWFpbE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uXCI7XG5pbXBvcnQge3N3aXRjaExhbmd1YWdlLCB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5pbXBvcnQge1RBQl9TSVpFfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xuaW1wb3J0IEhvcml6b250YWxOYXYgZnJvbSBcIi4uL0hvcml6b250YWxOYXZcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XG5cbmNvbnN0IHtIZWFkZXJ9ID0gTGF5b3V0O1xuXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uO1xuY29uc3QgbWVudSA9IChcbiAgPE1lbnUgb25DbGljaz17aGFuZGxlTWVudUNsaWNrfT5cbiAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5Qcm9kdWN0czwvTWVudS5JdGVtPlxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiPkJsb2c8L01lbnUuSXRlbT5cbiAgICA8TWVudS5JdGVtIGtleT1cIjNcIj5BcHBzPC9NZW51Lkl0ZW0+XG4gIDwvTWVudT5cbik7XG5cbmZ1bmN0aW9uIGhhbmRsZU1lbnVDbGljaygpIHtcbiAgbWVzc2FnZS5pbmZvKCdDbGljayBvbiBtZW51IGl0ZW0uJyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xufVxuXG5jb25zdCBBYm92ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgbG9jYWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxvY2FsZSk7XG4gIGNvbnN0IHdpZHRoID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLndpZHRoKTtcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XG5cbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgbGFuZ3VhZ2VNZW51ID0gKCkgPT4gKFxuICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LXBvcG92ZXItbGFuZy1zY3JvbGxcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxuICAgICAgICB7bGFuZ3VhZ2VEYXRhLm1hcChsYW5ndWFnZSA9PlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tZWRpYSBneC1wb2ludGVyXCIga2V5PXtKU09OLnN0cmluZ2lmeShsYW5ndWFnZSl9IG9uQ2xpY2s9eyhlKSA9PlxuICAgICAgICAgICAgZGlzcGF0Y2goc3dpdGNoTGFuZ3VhZ2UobGFuZ3VhZ2UpKVxuICAgICAgICAgIH0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZ3gtbXItMiBmbGFnLSR7bGFuZ3VhZ2UuaWNvbn1gfS8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1sYW5ndWFnZS10ZXh0XCI+e2xhbmd1YWdlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz4pO1xuXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaENoYXRVc2VyID0gKGV2dCkgPT4ge1xuICAgIHNldFNlYXJjaFRleHQoZXZ0LnRhcmdldC52YWx1ZSlcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwgZ3gtaGVhZGVyLWhvcml6b250YWwtZGFyayBneC1hYm92ZS1oZWFkZXItaG9yaXpvbnRhbFwiPlxuXG4gICAgICB7d2lkdGggPj0gVEFCX1NJWkUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdiBneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYtY3VydmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYtZmxleFwiPlxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbE5hdi8+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZW51LWxpbmVzXCIvPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2V0dGluZ1wiLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFwcHMtbmV3XCIvPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3BcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1mbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hbGVydCBneC1tci0zXCIvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0wIGd4LXRleHQtdHJ1bmNhdGVcIj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLmFubm91bmNlZFwiLz48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1sb2dpbi1saXN0XCI+XG4gICAgICAgICAgICAgIDxsaT48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLmxvZ2luXCIvPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLnNpZ25VcFwiLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEhlYWRlclxuICAgICAgICBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1tYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1tYWluLWZsZXhcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1saW5lYmFyIGd4LW1yLXhzLTNcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLW1lbnVcIlxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoIDw9IFRBQl9TSVpFKSB7XG4gICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtcG9pbnRlciBneC1tci14cy0zIGd4LXB0LXhzLTEgZ3gtdy1sb2dvXCJcbiAgICAgICAgICAgICAgICAgICBzcmM9eyhcIi9pbWFnZXMvdy1sb2dvLnBuZ1wiKX0vPjwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ub25lIGd4LWQtbGctYmxvY2sgZ3gtcG9pbnRlciBneC1tci14cy01IGd4LWxvZ29cIiBzcmM9eyhcIi9pbWFnZXMvbG9nby5wbmdcIil9Lz48L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1zZWFyY2ggZ3gtZC1ub25lIGd4LWQtbGctZmxleFwiPlxuICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LWx0LWljb24tc2VhcmNoLWJhci1sZ1wiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+XG4gICAgICAgICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwibHVjeVwiIHN0eWxlPXt7d2lkdGg6IDEyMH19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJqYWNrXCI+UHJvZHVjdHM8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibHVjeVwiPkFwcHM8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiWWltaW5naGVcIj5CbG9nczwvT3B0aW9uPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5IGd4LW5vdGlmeS1zZWFyY2ggZ3gtZC1pbmxpbmUtYmxvY2sgZ3gtZC1sZy1ub25lXCI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtZmxleFwiPjxEcm9wZG93biBvdmVybGF5PXttZW51fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeSA8SWNvbiB0eXBlPVwiZG93blwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LXBvcG92ZXItc2VhcmNoLWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICB9IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5XCI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17PEFwcE5vdGlmaWNhdGlvbi8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tc2dcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxNYWlsTm90aWZpY2F0aW9uLz59IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtc3RhdHVzLXBvcyBneC1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXQtbmV3XCIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXN0YXR1cyBneC1zdGF0dXMtcnRsIGd4LXNtYWxsIGd4LW9yYW5nZVwiLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2VcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xhbmd1YWdlTWVudSgpfSB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1mbGV4LXJvdyBneC1hbGlnbi1pdGVtcy1jZW50ZXJcIj48aVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBmbGFnLSR7bG9jYWxlLmljb259YH0vPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtdXNlci1uYXZcIj48VXNlckluZm8vPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSGVhZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBBYm92ZUhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgTGF5b3V0LCBNZW51LCBtZXNzYWdlLCBQb3BvdmVyLCBTZWxlY3R9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEljb24gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xuaW1wb3J0IGxhbmd1YWdlRGF0YSBmcm9tIFwiLi4vbGFuZ3VhZ2VEYXRhXCI7XG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NlYXJjaEJveFwiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XG5pbXBvcnQgQXBwTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0FwcE5vdGlmaWNhdGlvblwiO1xuaW1wb3J0IE1haWxOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTWFpbE5vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHtzd2l0Y2hMYW5ndWFnZSwgdG9nZ2xlQ29sbGFwc2VkU2lkZU5hdn0gZnJvbSBcIi4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCBIb3Jpem9udGFsTmF2IGZyb20gXCIuLi9Ib3Jpem9udGFsTmF2XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL0ludGxNZXNzYWdlc1wiO1xuaW1wb3J0IHtUQUJfU0laRX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcblxuY29uc3Qge0hlYWRlcn0gPSBMYXlvdXQ7XG5cbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XG5jb25zdCBtZW51ID0gKFxuICA8TWVudSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlByb2R1Y3RzPC9NZW51Lkl0ZW0+XG4gICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+QXBwczwvTWVudS5JdGVtPlxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPkJsb2dzPC9NZW51Lkl0ZW0+XG4gIDwvTWVudT5cbik7XG5cbmZ1bmN0aW9uIGhhbmRsZU1lbnVDbGljayhlKSB7XG4gIG1lc3NhZ2UuaW5mbygnQ2xpY2sgb24gbWVudSBpdGVtLicpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcbn1cblxuY29uc3QgQmVsb3dIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2FsZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5sb2NhbGUpO1xuICBjb25zdCB3aWR0aCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy53aWR0aCk7XG4gIGNvbnN0IG5hdkNvbGxhcHNlZCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZDb2xsYXBzZWQpO1xuXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGxhbmd1YWdlTWVudSA9ICgpID0+IChcbiAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1wb3BvdmVyLWxhbmctc2Nyb2xsXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtc3ViLXBvcG92ZXJcIj5cbiAgICAgICAge2xhbmd1YWdlRGF0YS5tYXAobGFuZ3VhZ2UgPT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbWVkaWEgZ3gtcG9pbnRlclwiIGtleT17SlNPTi5zdHJpbmdpZnkobGFuZ3VhZ2UpfSBvbkNsaWNrPXsoZSkgPT5cbiAgICAgICAgICAgIGRpc3BhdGNoKHN3aXRjaExhbmd1YWdlKGxhbmd1YWdlKSlcbiAgICAgICAgICB9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGd4LW1yLTIgZmxhZy0ke2xhbmd1YWdlLmljb259YH0vPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2UtdGV4dFwiPntsYW5ndWFnZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICA8L0N1c3RvbVNjcm9sbGJhcnM+KTtcblxuICBjb25zdCB1cGRhdGVTZWFyY2hDaGF0VXNlciA9IChldnQpID0+IHtcbiAgICBzZXRTZWFyY2hUZXh0KGV2dC50YXJnZXQudmFsdWUpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsIGd4LWhlYWRlci1ob3Jpem9udGFsLWRhcmsgZ3gtYmVsb3ctaGVhZGVyLWhvcml6b250YWxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3AtZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3AtbGVmdFwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtbWItMCBneC10ZXh0LXRydW5jYXRlXCI+PEludGxNZXNzYWdlcyBpZD1cImFwcC5hbm5vdW5jZWRcIi8+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtbG9naW4tbGlzdFwiPlxuICAgICAgICAgICAgICA8bGk+TG9naW48L2xpPlxuICAgICAgICAgICAgICA8bGk+U2lnbnVwPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPEhlYWRlclxuICAgICAgICBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1tYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1tYWluLWZsZXhcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1saW5lYmFyIGd4LW1yLXhzLTNcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLW1lbnVcIlxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XG4gICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtcG9pbnRlciBneC1tci14cy0zIGd4LXB0LXhzLTEgZ3gtdy1sb2dvXCJcbiAgICAgICAgICAgICAgICAgICBzcmM9eyhcIi9pbWFnZXMvdy1sb2dvLnBuZ1wiKX0vPjwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ub25lIGd4LWQtbGctYmxvY2sgZ3gtcG9pbnRlciBneC1tci14cy01IGd4LWxvZ29cIiBzcmM9eyhcIi9pbWFnZXMvbG9nby5wbmdcIil9Lz48L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1zZWFyY2ggZ3gtZC1ub25lIGd4LWQtbGctZmxleFwiPlxuICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LWx0LWljb24tc2VhcmNoLWJhci1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz5cblxuICAgICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT1cImx1Y3lcIiBzdHlsZT17e3dpZHRoOiAxMjB9fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiamFja1wiPlByb2R1Y3RzPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImx1Y3lcIj5BcHBzPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIllpbWluZ2hlXCI+QmxvZ3M8L09wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ub3RpZmljYXRpb25zIGd4LW1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeSBneC1ub3RpZnktc2VhcmNoIGd4LWQtaW5saW5lLWJsb2NrIGd4LWQtbGctbm9uZVwiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWZsZXhcIj48RHJvcGRvd24gb3ZlcmxheT17bWVudX0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnkgPEljb24gdHlwZT1cImRvd25cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1wb3BvdmVyLXNlYXJjaC1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgfSB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2gtbmV3XCIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeVwiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9ezxBcHBOb3RpZmljYXRpb24vPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1ub3RpZmljYXRpb25cIi8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbXNnXCI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXs8TWFpbE5vdGlmaWNhdGlvbi8+fSB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LXN0YXR1cy1wb3MgZ3gtZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1zdGF0dXMgZ3gtc3RhdHVzLXJ0bCBneC1zbWFsbCBneC1vcmFuZ2VcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LWxhbmd1YWdlXCI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtsYW5ndWFnZU1lbnUoKX0gdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZmxleC1yb3cgZ3gtYWxpZ24taXRlbXMtY2VudGVyXCI+PGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZmxhZy0ke2xvY2FsZS5pY29ufWB9Lz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LXVzZXItbmF2XCI+PFVzZXJJbmZvLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0hlYWRlcj5cblxuICAgICAge3dpZHRoID49IFRBQl9TSVpFICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYgZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2LWN1cnZlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2LWZsZXhcIj5cbiAgICAgICAgICAgICAgPEhvcml6b250YWxOYXYvPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudS1saW5lc1wiLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNldHRpbmdcIi8+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hcHBzLW5ld1wiLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJlbG93SGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBMYXlvdXQsIE1lbnUsIG1lc3NhZ2UsIFBvcG92ZXIsIFNlbGVjdH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgSWNvbiBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XG5pbXBvcnQgbGFuZ3VhZ2VEYXRhIGZyb20gXCIuLi9sYW5ndWFnZURhdGFcIjtcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQm94XCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVXNlckluZm9cIjtcbmltcG9ydCBBcHBOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgTWFpbE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSG9yaXpvbnRhbE5hdiBmcm9tIFwiLi4vSG9yaXpvbnRhbE5hdlwiO1xuaW1wb3J0IHtzd2l0Y2hMYW5ndWFnZSwgdG9nZ2xlQ29sbGFwc2VkU2lkZU5hdn0gZnJvbSBcIi4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XG5pbXBvcnQge1RBQl9TSVpFfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xuXG5jb25zdCB7SGVhZGVyfSA9IExheW91dDtcblxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcbmNvbnN0IG1lbnUgPSAoXG4gIDxNZW51IG9uQ2xpY2s9e2hhbmRsZU1lbnVDbGlja30+XG4gICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+UHJvZHVjdHM8L01lbnUuSXRlbT5cbiAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5BcHBzPC9NZW51Lkl0ZW0+XG4gICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+QmxvZ3M8L01lbnUuSXRlbT5cbiAgPC9NZW51PlxuKTtcblxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgbWVzc2FnZS5pbmZvKCdDbGljayBvbiBtZW51IGl0ZW0uJyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xufVxuXG5jb25zdCBIb3Jpem9udGFsRGFyayA9ICgpID0+IHtcbiAgY29uc3QgbG9jYWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxvY2FsZSk7XG4gIGNvbnN0IHdpZHRoID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLndpZHRoKTtcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XG5cbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgbGFuZ3VhZ2VNZW51ID0gKCkgPT4gKFxuICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LXBvcG92ZXItbGFuZy1zY3JvbGxcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxuICAgICAgICB7bGFuZ3VhZ2VEYXRhLm1hcChsYW5ndWFnZSA9PlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tZWRpYSBneC1wb2ludGVyXCIga2V5PXtKU09OLnN0cmluZ2lmeShsYW5ndWFnZSl9IG9uQ2xpY2s9eyhlKSA9PlxuICAgICAgICAgICAgZGlzcGF0Y2goc3dpdGNoTGFuZ3VhZ2UobGFuZ3VhZ2UpKVxuICAgICAgICAgIH0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZ3gtbXItMiBmbGFnLSR7bGFuZ3VhZ2UuaWNvbn1gfS8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1sYW5ndWFnZS10ZXh0XCI+e2xhbmd1YWdlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz4pO1xuXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaENoYXRVc2VyID0gKGV2dCkgPT4ge1xuICAgIHNldFNlYXJjaFRleHQoZXZ0LnRhcmdldC52YWx1ZSlcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwgZ3gtaGVhZGVyLWhvcml6b250YWwtZGFya1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3BcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1mbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hbGVydCBneC1tci0zXCIvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0wIGd4LXRleHQtdHJ1bmNhdGVcIj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLmFubm91bmNlZFwiLz48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1sb2dpbi1saXN0XCI+XG4gICAgICAgICAgICAgIDxsaT5Mb2dpbjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TaWdudXA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8SGVhZGVyXG4gICAgICAgIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW4tZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1saW5lYmFyIGd4LW1yLXhzLTNcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLW1lbnVcIlxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XG4gICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1wb2ludGVyIGd4LW1yLXhzLTMgZ3gtcHQteHMtMSBneC13LWxvZ29cIlxuICAgICAgICAgICAgICAgICAgIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLW5vbmUgZ3gtZC1sZy1ibG9jayBneC1wb2ludGVyIGd4LW1yLXhzLTUgZ3gtbG9nb1wiIHNyYz17KFwiL2ltYWdlcy9sb2dvLnBuZ1wiKX0vPjwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLXNlYXJjaCBneC1kLW5vbmUgZ3gtZC1sZy1mbGV4XCI+XG4gICAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtbHQtaWNvbi1zZWFyY2gtYmFyLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhcHAuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH0vPlxuICAgICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT1cImx1Y3lcIiBzdHlsZT17e3dpZHRoOiAxMjB9fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiamFja1wiPlByb2R1Y3RzPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImx1Y3lcIj5BcHBzPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIllpbWluZ2hlXCI+QmxvZ3M8L09wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ub3RpZmljYXRpb25zIGd4LW1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeSBneC1ub3RpZnktc2VhcmNoIGd4LWQtaW5saW5lLWJsb2NrIGd4LWQtbGctbm9uZVwiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWZsZXhcIj48RHJvcGRvd24gb3ZlcmxheT17bWVudX0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnkgPEljb24gdHlwZT1cImRvd25cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1wb3BvdmVyLXNlYXJjaC1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgfSB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2gtbmV3XCIvPjwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5XCI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17PEFwcE5vdGlmaWNhdGlvbi8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tc2dcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxNYWlsTm90aWZpY2F0aW9uLz59IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtc3RhdHVzLXBvcyBneC1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXQtbmV3XCIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXN0YXR1cyBneC1zdGF0dXMtcnRsIGd4LXNtYWxsIGd4LW9yYW5nZVwiLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2VcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xhbmd1YWdlTWVudSgpfSB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1mbGV4LXJvdyBneC1hbGlnbi1pdGVtcy1jZW50ZXJcIj48aVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBmbGFnLSR7bG9jYWxlLmljb259YH0vPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtdXNlci1uYXZcIj48VXNlckluZm8vPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSGVhZGVyPlxuXG4gICAgICB7d2lkdGggPj0gVEFCX1NJWkUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1mbGV4XCI+XG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsTmF2Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ub3RpZmljYXRpb25zIGd4LW1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnUtbGluZXNcIi8+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZXR0aW5nXCIvPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tYXBwcy1uZXdcIi8+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvcml6b250YWxEYXJrO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBMYXlvdXQsIE1lbnUsIG1lc3NhZ2UsIFBvcG92ZXIsIFNlbGVjdH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgSWNvbiBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XG5pbXBvcnQgbGFuZ3VhZ2VEYXRhIGZyb20gXCIuLi9sYW5ndWFnZURhdGFcIjtcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQm94XCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVXNlckluZm9cIjtcbmltcG9ydCBBcHBOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgTWFpbE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgSG9yaXpvbnRhbE5hdiBmcm9tIFwiLi4vSG9yaXpvbnRhbE5hdlwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtzd2l0Y2hMYW5ndWFnZSwgdG9nZ2xlQ29sbGFwc2VkU2lkZU5hdn0gZnJvbSBcIi4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XG5pbXBvcnQge1RBQl9TSVpFfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xuXG5jb25zdCB7SGVhZGVyfSA9IExheW91dDtcbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XG5jb25zdCBtZW51ID0gKFxuICA8TWVudSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlByb2R1Y3RzPC9NZW51Lkl0ZW0+XG4gICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+QXBwczwvTWVudS5JdGVtPlxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPkJsb2dzPC9NZW51Lkl0ZW0+XG4gIDwvTWVudT5cbik7XG5cbmZ1bmN0aW9uIGhhbmRsZU1lbnVDbGljayhlKSB7XG4gIG1lc3NhZ2UuaW5mbygnQ2xpY2sgb24gbWVudSBpdGVtLicpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcbn1cblxuY29uc3QgSG9yaXpvbnRhbERlZmF1bHQgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2FsZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5sb2NhbGUpO1xuICBjb25zdCB3aWR0aCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy53aWR0aCk7XG4gIGNvbnN0IG5hdkNvbGxhcHNlZCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZDb2xsYXBzZWQpO1xuXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGxhbmd1YWdlTWVudSA9ICgpID0+IChcbiAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1wb3BvdmVyLWxhbmctc2Nyb2xsXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtc3ViLXBvcG92ZXJcIj5cbiAgICAgICAge2xhbmd1YWdlRGF0YS5tYXAobGFuZ3VhZ2UgPT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbWVkaWEgZ3gtcG9pbnRlclwiIGtleT17SlNPTi5zdHJpbmdpZnkobGFuZ3VhZ2UpfSBvbkNsaWNrPXsoZSkgPT5cbiAgICAgICAgICAgIGRpc3BhdGNoKHN3aXRjaExhbmd1YWdlKGxhbmd1YWdlKSlcbiAgICAgICAgICB9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGd4LW1yLTIgZmxhZy0ke2xhbmd1YWdlLmljb259YH0vPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2UtdGV4dFwiPntsYW5ndWFnZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICA8L0N1c3RvbVNjcm9sbGJhcnM+KTtcblxuICBjb25zdCB1cGRhdGVTZWFyY2hDaGF0VXNlciA9IChldnQpID0+IHtcbiAgICBzZXRTZWFyY2hUZXh0KGV2dC50YXJnZXQudmFsdWUpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWxlZnRcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFsZXJ0IGd4LW1yLTNcIi8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTAgZ3gtdGV4dC10cnVuY2F0ZVwiPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAuYW5ub3VuY2VkXCIvPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWxvZ2luLWxpc3RcIj5cbiAgICAgICAgICAgICAgPGxpPkxvZ2luPC9saT5cbiAgICAgICAgICAgICAgPGxpPlNpZ251cDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8SGVhZGVyXG4gICAgICAgIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW4tZmxleFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LWxpbmViYXIgZ3gtbXIteHMtM1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcbiAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1wb2ludGVyIGd4LXctbG9nb1wiIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLW5vbmUgZ3gtZC1sZy1ibG9jayBneC1wb2ludGVyIGd4LW1yLXhzLTUgZ3gtbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgc3JjPXsoXCIvaW1hZ2VzL2xvZ28td2hpdGUucG5nXCIpfS8+PC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItc2VhcmNoIGd4LWQtbm9uZSBneC1kLWxnLWZsZXhcIj5cbiAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1sdC1pY29uLXNlYXJjaC1iYXItbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+XG5cbiAgICAgICAgICAgICAgPFNlbGVjdCBkZWZhdWx0VmFsdWU9XCJsdWN5XCIgc3R5bGU9e3t3aWR0aDogMTIwfX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImphY2tcIj5Qcm9kdWN0czwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJsdWN5XCI+QXBwczwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJZaW1pbmdoZVwiPkJsb2dzPC9PcHRpb24+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnkgZ3gtbm90aWZ5LXNlYXJjaCBneC1kLWlubGluZS1ibG9jayBneC1kLWxnLW5vbmVcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnkgPEljb24gdHlwZT1cImRvd25cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtcG9wb3Zlci1zZWFyY2gtYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhcHAuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH0vPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfSB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2gtbmV3XCIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnlcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXs8QXBwTm90aWZpY2F0aW9uLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbm90aWZpY2F0aW9uXCIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17PE1haWxOb3RpZmljYXRpb24vPn0gdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1zdGF0dXMtcG9zIGd4LWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hhdC1uZXdcIi8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtc3RhdHVzIGd4LXN0YXR1cy1ydGwgZ3gtc21hbGwgZ3gtb3JhbmdlXCIvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1sYW5ndWFnZVwiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bGFuZ3VhZ2VNZW51KCl9IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPjxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGZsYWctJHtsb2NhbGUuaWNvbn1gfS8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC11c2VyLW5hdlwiPjxVc2VySW5mby8+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9IZWFkZXI+XG5cbiAgICAgIHt3aWR0aCA+PSBUQUJfU0laRSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2IGd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1jdXJ2ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1mbGV4XCI+XG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsTmF2Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ub3RpZmljYXRpb25zIGd4LW1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnUtbGluZXNcIi8+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZXR0aW5nXCIvPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tYXBwcy1uZXdcIi8+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbERlZmF1bHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7TWVudX0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XG5pbXBvcnQge1xuICBOQVZfU1RZTEVfQUJPVkVfSEVBREVSLFxuICBOQVZfU1RZTEVfQkVMT1dfSEVBREVSLFxuICBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMLFxuICBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XG5pbXBvcnQgQXBwTGluayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcHBMaW5rXCI7XG5cbmNvbnN0IFN1Yk1lbnUgPSBNZW51LlN1Yk1lbnU7XG5cbmNvbnN0IGdldE5hdlN0eWxlU3ViTWVudUNsYXNzID0gKG5hdlN0eWxlKSA9PiB7XG4gIHN3aXRjaCAobmF2U3R5bGUpIHtcbiAgICBjYXNlIE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUw6XG4gICAgICByZXR1cm4gXCJneC1tZW51LWhvcml6b250YWwgZ3gtc3VibWVudS1wb3B1cC1jdXJ2ZVwiO1xuICAgIGNhc2UgTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTDpcbiAgICAgIHJldHVybiBcImd4LW1lbnUtaG9yaXpvbnRhbCBneC1zdWJtZW51LXBvcHVwLWN1cnZlIGd4LWluc2lkZS1zdWJtZW51LXBvcHVwLWN1cnZlXCI7XG4gICAgY2FzZSBOQVZfU1RZTEVfQkVMT1dfSEVBREVSOlxuICAgICAgcmV0dXJuIFwiZ3gtbWVudS1ob3Jpem9udGFsIGd4LXN1Ym1lbnUtcG9wdXAtY3VydmUgZ3gtYmVsb3ctc3VibWVudS1wb3B1cC1jdXJ2ZVwiO1xuICAgIGNhc2UgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUjpcbiAgICAgIHJldHVybiBcImd4LW1lbnUtaG9yaXpvbnRhbCBneC1zdWJtZW51LXBvcHVwLWN1cnZlIGd4LWFib3ZlLXN1Ym1lbnUtcG9wdXAtY3VydmVcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwiZ3gtbWVudS1ob3Jpem9udGFsXCI7XG4gIH1cbn07XG5cbmNvbnN0IEhvcml6b250YWxOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdlN0eWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdlN0eWxlKTtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MucGF0aG5hbWUpO1xuXG4gIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHBhdGhuYW1lLnN1YnN0cigxKTtcbiAgY29uc3QgZGVmYXVsdE9wZW5LZXlzID0gc2VsZWN0ZWRLZXlzLnNwbGl0KCcvJylbMV07XG5cbiAgcmV0dXJuIChcbiAgICA8TWVudVxuICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbZGVmYXVsdE9wZW5LZXlzXX1cbiAgICAgIHNlbGVjdGVkS2V5cz17W3NlbGVjdGVkS2V5c119XG4gICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgPFN1Yk1lbnUgcG9wdXBDbGFzc05hbWU9e2dldE5hdlN0eWxlU3ViTWVudUNsYXNzKG5hdlN0eWxlKX0ga2V5PVwibWFpblwiIHRpdGxlPXs8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5tYWluXCIvPn0+XG4gICAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPVwiZ3gtbWVudS1ob3Jpem9udGFsXCIga2V5PVwiZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgdGl0bGU9ezxzcGFuPiA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tZGFzYmhvYXJkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmRhc2hib2FyZFwiLz48L3NwYW4+fT5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm1haW4vZGFzaGJvYXJkL2NyeXB0b1wiPlxuICAgICAgICAgICAgPEFwcExpbmsgaHJlZj1cIi9tYWluL2Rhc2hib2FyZC9jcnlwdG9cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNyeXB0b1wiLz5cbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZGFzaGJvYXJkLmNyeXB0b1wiLz5cbiAgICAgICAgICAgIDwvQXBwTGluaz5cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPC9TdWJNZW51PlxuICAgICAgPC9TdWJNZW51PlxuICAgIDwvTWVudT5cbiAgKTtcbn07XG5cbkhvcml6b250YWxOYXYucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEhvcml6b250YWxOYXY7XG5cbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgTGF5b3V0LCBNZW51LCBtZXNzYWdlLCBQb3BvdmVyfSBmcm9tICdhbnRkJztcbmltcG9ydCBJY29uIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7Y29ubmVjdCwgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnNcIjtcbmltcG9ydCBsYW5ndWFnZURhdGEgZnJvbSBcIi4uL2xhbmd1YWdlRGF0YVwiO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCb3hcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Vc2VySW5mb1wiO1xuaW1wb3J0IEFwcE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb25cIjtcbmltcG9ydCBNYWlsTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb25cIjtcbmltcG9ydCBIb3Jpem9udGFsTmF2IGZyb20gXCIuLi9Ib3Jpem9udGFsTmF2XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQge3N3aXRjaExhbmd1YWdlLCB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcbmltcG9ydCB7VEFCX1NJWkV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XG5cbmNvbnN0IHtIZWFkZXJ9ID0gTGF5b3V0O1xuXG5jb25zdCBtZW51ID0gKFxuICA8TWVudSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlByb2R1Y3RzPC9NZW51Lkl0ZW0+XG4gICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+QXBwczwvTWVudS5JdGVtPlxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPkJsb2dzPC9NZW51Lkl0ZW0+XG4gIDwvTWVudT5cbik7XG5cbmZ1bmN0aW9uIGhhbmRsZU1lbnVDbGljayhlKSB7XG4gIG1lc3NhZ2UuaW5mbygnQ2xpY2sgb24gbWVudSBpdGVtLicpO1xufVxuXG5jb25zdCBJbnNpZGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2FsZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5sb2NhbGUpO1xuICBjb25zdCB3aWR0aCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy53aWR0aCk7XG4gIGNvbnN0IG5hdkNvbGxhcHNlZCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZDb2xsYXBzZWQpO1xuXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGxhbmd1YWdlTWVudSA9ICgpID0+IChcbiAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1wb3BvdmVyLWxhbmctc2Nyb2xsXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtc3ViLXBvcG92ZXJcIj5cbiAgICAgICAge2xhbmd1YWdlRGF0YS5tYXAobGFuZ3VhZ2UgPT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbWVkaWEgZ3gtcG9pbnRlclwiIGtleT17SlNPTi5zdHJpbmdpZnkobGFuZ3VhZ2UpfSBvbkNsaWNrPXsoZSkgPT5cbiAgICAgICAgICAgIGRpc3BhdGNoKHN3aXRjaExhbmd1YWdlKGxhbmd1YWdlKSlcbiAgICAgICAgICB9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGd4LW1yLTIgZmxhZy0ke2xhbmd1YWdlLmljb259YH0vPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2UtdGV4dFwiPntsYW5ndWFnZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICA8L0N1c3RvbVNjcm9sbGJhcnM+KTtcblxuICBjb25zdCB1cGRhdGVTZWFyY2hDaGF0VXNlciA9IChldnQpID0+IHtcbiAgICBzZXRTZWFyY2hUZXh0KGV2dC50YXJnZXQudmFsdWUpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsIGd4LWhlYWRlci1ob3Jpem9udGFsLWRhcmsgZ3gtaW5zaWRlLWhlYWRlci1ob3Jpem9udGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWxlZnRcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFsZXJ0IGd4LW1yLTNcIi8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTAgZ3gtdGV4dC10cnVuY2F0ZVwiPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAuYW5ub3VuY2VkXCIvPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWxvZ2luLWxpc3RcIj5cbiAgICAgICAgICAgICAgPGxpPkxvZ2luPC9saT5cbiAgICAgICAgICAgICAgPGxpPlNpZ251cDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8SGVhZGVyXG4gICAgICAgIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW4tZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1saW5lYmFyIGd4LW1yLXhzLTMgNmVcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLW1lbnVcIlxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XG4gICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtcG9pbnRlciBneC1tci14cy0zIGd4LXB0LXhzLTEgZ3gtdy1sb2dvXCJcbiAgICAgICAgICAgICAgICAgICBzcmM9eyhcIi9pbWFnZXMvdy1sb2dvLnBuZ1wiKX0vPjwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ub25lIGd4LWQtbGctYmxvY2sgZ3gtcG9pbnRlciBneC1tci14cy01IGd4LWxvZ29cIiBzcmM9eyhcIi9pbWFnZXMvbG9nby5wbmdcIil9Lz48L0xpbms+XG5cbiAgICAgICAgICAgIHt3aWR0aCA+PSBUQUJfU0laRSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2IGd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1jdXJ2ZVwiPlxuICAgICAgICAgICAgICAgIDxIb3Jpem9udGFsTmF2Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5IGd4LW5vdGlmeS1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWZsZXhcIj48RHJvcGRvd24gb3ZlcmxheT17bWVudX0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnkgPEljb24gdHlwZT1cImRvd25cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1wb3BvdmVyLXNlYXJjaC1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgfSB0cmlnZ2VyPVwiY2xpY2tcIj5cblxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnlcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXs8QXBwTm90aWZpY2F0aW9uLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbm90aWZpY2F0aW9uXCIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17PE1haWxOb3RpZmljYXRpb24vPn0gdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1zdGF0dXMtcG9zIGd4LWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hhdC1uZXdcIi8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtc3RhdHVzIGd4LXN0YXR1cy1ydGwgZ3gtc21hbGwgZ3gtb3JhbmdlXCIvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1sYW5ndWFnZVwiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bGFuZ3VhZ2VNZW51KCl9IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPjxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGZsYWctJHtsb2NhbGUuaWNvbn1gfS8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC11c2VyLW5hdlwiPjxVc2VySW5mby8+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9IZWFkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe3NldHRpbmdzfSkgPT4ge1xuICBjb25zdCB7bG9jYWxlLCBuYXZDb2xsYXBzZWR9ID0gc2V0dGluZ3M7XG4gIHJldHVybiB7bG9jYWxlLCBuYXZDb2xsYXBzZWR9XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHt0b2dnbGVDb2xsYXBzZWRTaWRlTmF2LCBzd2l0Y2hMYW5ndWFnZX0pKEluc2lkZUhlYWRlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge3RvZ2dsZUNvbGxhcHNlZFNpZGVOYXZ9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL1NldHRpbmdcIjtcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XG5cbmNvbnN0IE5vSGVhZGVyTm90aWZpY2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCBuYXZDb2xsYXBzZWQgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2Q29sbGFwc2VkKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIHJldHVybiAoXG4gICAgPD48Lz5cbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImd4LW5vLWhlYWRlci1ob3Jpem9udGFsXCI+XG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LWxpbmViYXIgZ3gtbXIteHMtM1wiPlxuICAgIC8vICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXG4gICAgLy8gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAvLyAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcbiAgICAvLyAgICAgICAgfX1cbiAgICAvLyAgICAgLz5cbiAgICAvLyAgIDwvZGl2PlxuICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJneC1uby1oZWFkZXItaG9yaXpvbnRhbC10b3BcIj5cbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1uby1oZWFkZXItaG9yaXpvbnRhbC10b3AtY2VudGVyXCI+XG4gICAgLy8gICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFsZXJ0IGd4LW1yLTNcIi8+XG4gICAgLy8gICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtbWItMCBneC10ZXh0LXRydW5jYXRlXCI+PEludGxNZXNzYWdlcyBpZD1cImFwcC5hbm5vdW5jZWRcIi8+PC9wPlxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgIDwvZGl2PlxuICAgIC8vIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb0hlYWRlck5vdGlmaWNhdGlvbjtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGF5b3V0LCBQb3BvdmVyfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XG5pbXBvcnQgbGFuZ3VhZ2VEYXRhIGZyb20gXCIuL2xhbmd1YWdlRGF0YVwiO1xuaW1wb3J0IHtzd2l0Y2hMYW5ndWFnZSwgdG9nZ2xlQ29sbGFwc2VkU2lkZU5hdn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQm94XCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXNlckluZm9cIjtcbmltcG9ydCBBcHBOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgTWFpbE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uXCI7XG5cblxuaW1wb3J0IHtOQVZfU1RZTEVfRFJBV0VSLCBOQVZfU1RZTEVfRklYRUQsIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIsIFRBQl9TSVpFfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCB7SGVhZGVyfSA9IExheW91dDtcblxuY29uc3QgVG9wYmFyID0gKCkgPT4ge1xuICBjb25zdCBsb2NhbGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubG9jYWxlKTtcbiAgY29uc3Qgd2lkdGggPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3Mud2lkdGgpO1xuICBjb25zdCBuYXZDb2xsYXBzZWQgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2Q29sbGFwc2VkKTtcbiAgY29uc3QgbmF2U3R5bGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2U3R5bGUpO1xuXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGxhbmd1YWdlTWVudSA9ICgpID0+IChcbiAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1wb3BvdmVyLWxhbmctc2Nyb2xsXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtc3ViLXBvcG92ZXJcIj5cbiAgICAgICAge2xhbmd1YWdlRGF0YS5tYXAobGFuZ3VhZ2UgPT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbWVkaWEgZ3gtcG9pbnRlclwiIGtleT17SlNPTi5zdHJpbmdpZnkobGFuZ3VhZ2UpfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgZGlzcGF0Y2goc3dpdGNoTGFuZ3VhZ2UobGFuZ3VhZ2UpKVxuICAgICAgICAgIH0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZ3gtbXItMiBmbGFnLSR7bGFuZ3VhZ2UuaWNvbn1gfS8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1sYW5ndWFnZS10ZXh0XCI+e2xhbmd1YWdlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz4pO1xuXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaENoYXRVc2VyID0gKGV2dCkgPT4ge1xuICAgIHNldFNlYXJjaFRleHQoZXZ0LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZGVyPlxuICAgICAge25hdlN0eWxlID09PSBOQVZfU1RZTEVfRFJBV0VSIHx8ICgobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9GSVhFRCB8fCBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX01JTklfU0lERUJBUikgJiYgd2lkdGggPCBUQUJfU0laRSkgP1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWxpbmViYXIgZ3gtbXItM1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImd4LWljb24tYnRuIGljb24gaWNvbi1tZW51XCJcbiAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PiA6IG51bGx9XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LXBvaW50ZXJcIiBzcmM9eyhcIi9pbWFnZXMvdy1sb2dvLnBuZ1wiKX0vPjwvTGluaz5cblxuICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1kLW5vbmUgZ3gtZC1sZy1ibG9jayBneC1sdC1pY29uLXNlYXJjaC1iYXItbGdcIlxuICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhcHAuLi5cIlxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XG4gICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5IGd4LW5vdGlmeS1zZWFyY2ggZ3gtZC1pbmxpbmUtYmxvY2sgZ3gtZC1sZy1ub25lXCI+XG4gICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17XG4gICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LXBvcG92ZXItc2VhcmNoLWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz5cbiAgICAgICAgICB9IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxuICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPC9saT5cbiAgICAgICAge3dpZHRoID49IFRBQl9TSVpFID8gbnVsbCA6XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnlcIj5cbiAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17PEFwcE5vdGlmaWNhdGlvbi8+fVxuICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbm90aWZpY2F0aW9uXCIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxuICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXs8TWFpbE5vdGlmaWNhdGlvbi8+fSB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtc3RhdHVzLXBvcyBneC1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtc3RhdHVzIGd4LXN0YXR1cy1ydGwgZ3gtc21hbGwgZ3gtb3JhbmdlXCIvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1sYW5ndWFnZVwiPlxuICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e2xhbmd1YWdlTWVudSgpfVxuICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZmxleC1yb3cgZ3gtYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZmxhZy0ke2xvY2FsZS5pY29ufWB9Lz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBsLTIgZ3gtbGFuZ3VhZ2UtbmFtZVwiPntsb2NhbGUubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hldnJvbi1kb3duIGd4LXBsLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPC9saT5cbiAgICAgICAge3dpZHRoID49IFRBQl9TSVpFID8gbnVsbCA6XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC11c2VyLW5hdlwiPjxVc2VySW5mby8+PC9saT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICA8L0hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcGJhcjtcbiIsImNvbnN0IGxhbmd1YWdlRGF0YSA9IFtcclxuICB7XHJcbiAgICBsYW5ndWFnZUlkOiAnZW5nbGlzaCcsXHJcbiAgICBsb2NhbGU6ICdlbicsXHJcbiAgICBuYW1lOiAnRW5nbGlzaCcsXHJcbiAgICBpY29uOiAndXMnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZUlkOiAnY2hpbmVzZScsXHJcbiAgICBsb2NhbGU6ICd6aCcsXHJcbiAgICBuYW1lOiAnQ2hpbmVzZScsXHJcbiAgICBpY29uOiAnY24nXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZUlkOiAnc3BhbmlzaCcsXHJcbiAgICBsb2NhbGU6ICdlcycsXHJcbiAgICBuYW1lOiAnU3BhbmlzaCcsXHJcbiAgICBpY29uOiAnZXMnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZUlkOiAnZnJlbmNoJyxcclxuICAgIGxvY2FsZTogJ2ZyJyxcclxuICAgIG5hbWU6ICdGcmVuY2gnLFxyXG4gICAgaWNvbjogJ2ZyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFuZ3VhZ2VJZDogJ2l0YWxpYW4nLFxyXG4gICAgbG9jYWxlOiAnaXQnLFxyXG4gICAgbmFtZTogJ0l0YWxpYW4nLFxyXG4gICAgaWNvbjogJ2l0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFuZ3VhZ2VJZDogJ3NhdWRpLWFyYWJpYScsXHJcbiAgICBsb2NhbGU6ICdhcicsXHJcbiAgICBuYW1lOiAnQXJhYmljJyxcclxuICAgIGljb246ICdzYSdcclxuICB9XHJcblxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBsYW5ndWFnZURhdGE7XHJcbiIsIi8vIEN1c3RvbWl6ZXIgY29uc3RcclxuZXhwb3J0IGNvbnN0IFRPR0dMRV9DT0xMQVBTRURfTkFWID0gJ1RPR0dMRV9DT0xMQVBTRV9NRU5VJztcclxuZXhwb3J0IGNvbnN0IFdJTkRPV19XSURUSCA9ICdXSU5ET1ctV0lEVEgnO1xyXG5leHBvcnQgY29uc3QgU1dJVENIX0xBTkdVQUdFID0gJ1NXSVRDSC1MQU5HVUFHRSc7XHJcblxyXG4vL0NvbnRhY3QgTW9kdWxlIGNvbnN0XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9TVEFSVCA9ICdmZXRjaF9zdGFydCc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9TVUNDRVNTID0gJ2ZldGNoX3N1Y2Nlc3MnO1xyXG5leHBvcnQgY29uc3QgRkVUQ0hfRVJST1IgPSAnZmV0Y2hfZXJyb3InO1xyXG5leHBvcnQgY29uc3QgU0hPV19NRVNTQUdFID0gJ1NIT1dfTUVTU0FHRSc7XHJcbmV4cG9ydCBjb25zdCBISURFX01FU1NBR0UgPSAnSElERV9NRVNTQUdFJztcclxuIiwiLy8gQ3VzdG9taXplciBjb25zdFxyXG5leHBvcnQgY29uc3QgVEhFTUVfVFlQRSA9ICdUSEVNRV9UWVBFJztcclxuZXhwb3J0IGNvbnN0IFRIRU1FX1RZUEVfTElURSA9ICdUSEVNRV9UWVBFX0xJVEUnO1xyXG5leHBvcnQgY29uc3QgVEhFTUVfVFlQRV9EQVJLID0gJ1RIRU1FX1RZUEVfREFSSyc7XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9UWVBFX1NFTUlfREFSSyA9ICdUSEVNRV9UWVBFX1NFTUlfREFSSyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRIRU1FX0NPTE9SX1NFTEVDVElPTiA9ICdUSEVNRV9DT0xPUl9TRUxFQ1RJT04nO1xyXG5leHBvcnQgY29uc3QgVEhFTUVfQ09MT1JfU0VMRUNUSU9OX1BSRVNFVCA9ICdUSEVNRV9DT0xPUl9TRUxFQ1RJT05fUFJFU0VUJztcclxuZXhwb3J0IGNvbnN0IFRIRU1FX0NPTE9SX1NFTEVDVElPTl9DVVNUT01JWkUgPSAnVEhFTUVfQ09MT1JfU0VMRUNUSU9OX0NVU1RPTUlaRSc7XHJcblxyXG5leHBvcnQgY29uc3QgSE9SSVpPTlRBTF9OQVZJR0FUSU9OID0gJ0hPUklaT05UQUxfTkFWSUdBVElPTic7XHJcblxyXG5leHBvcnQgY29uc3QgSE9SSVpPTlRBTF9NRU5VX1BPU0lUSU9OID0gJ0hPUklaT05UQUxfTUVOVV9QT1NJVElPTic7XHJcbmV4cG9ydCBjb25zdCBBQk9WRV9USEVfSEVBREVSID0gJ0FCT1ZFX1RIRV9IRUFERVInO1xyXG5leHBvcnQgY29uc3QgSU5TSURFX1RIRV9IRUFERVIgPSAnSU5TSURFX1RIRV9IRUFERVInO1xyXG5leHBvcnQgY29uc3QgQkVMT1dfVEhFX0hFQURFUiA9ICdCRUxPV19USEVfSEVBREVSJztcclxuXHJcbmV4cG9ydCBjb25zdCBWRVJUSUNBTF9OQVZJR0FUSU9OID0gJ1ZFUlRJQ0FMX05BVklHQVRJT04nO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX01JTkkgPSAnTkFWX1NUWUxFX01JTkknO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBWU9VVF9UWVBFID0gJ0xBWU9VVF9UWVBFJztcclxuZXhwb3J0IGNvbnN0IFNFVF9QQVRIX05BTUUgPSAnU0VUX1BBVEhfTkFNRSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUlRMX1NUQVRVUyA9ICdVUERBVEVfUlRMX1NUQVRVUyc7XHJcblxyXG5leHBvcnQgY29uc3QgTEFZT1VUX1RZUEVfRlJBTUVEID0gJ0xBWU9VVF9UWVBFX0ZSQU1FRCc7XHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfVFlQRV9CT1hFRCA9ICdMQVlPVVRfVFlQRV9CT1hFRCc7XHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfVFlQRV9GVUxMID0gJ0xBWU9VVF9UWVBFX0ZVTEwnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEUgPSAnTkFWX1NUWUxFJztcclxuXHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfRklYRUQgPSAnTkFWX1NUWUxFX0ZJWEVEJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9NSU5JX1NJREVCQVIgPSAnTkFWX1NUWUxFX01JTklfU0lERUJBUic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfRFJBV0VSID0gJ05BVl9TVFlMRV9EUkFXRVInO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIgPSAnTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVInO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSID0gJ05BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUic7XHJcblxyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCA9ICdOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwgPSAnTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTCc7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMID0gJ05BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwnO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0JFTE9XX0hFQURFUiA9ICdOQVZfU1RZTEVfQkVMT1dfSEVBREVSJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9BQk9WRV9IRUFERVIgPSAnTkFWX1NUWUxFX0FCT1ZFX0hFQURFUic7XHJcblxyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFID0gJ2xpZ2h0X3B1cnBsZSc7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfU0VDID0gJyMwMEIzNzgnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFX0RBUktfVEVYVF9DT0xPUiA9ICcjOTc5OUFDJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRUQgPSAncmVkJztcclxuZXhwb3J0IGNvbnN0IFJFRF9TRUMgPSAnIzAwRDlDOSc7XHJcbmV4cG9ydCBjb25zdCBSRURfREFSS19URVhUX0NPTE9SID0gJyM4NzhCQUInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJMVUUgPSAnYmx1ZSc7XHJcbmV4cG9ydCBjb25zdCBCTFVFX1NFQyA9ICcjRkNCNTNCJztcclxuZXhwb3J0IGNvbnN0IEJMVUVfREFSS19URVhUX0NPTE9SID0gJyNBQUE1OUEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERBUktfQkxVRSA9ICdkYXJrX2JsdWUnO1xyXG5leHBvcnQgY29uc3QgREFSS19CTFVFX1NFQyA9ICcjMTdCREU1JztcclxuZXhwb3J0IGNvbnN0IERBUktfQkxVRV9EQVJLX1RFWFRfQ09MT1IgPSAnIzlEREFFOSc7XHJcblxyXG5leHBvcnQgY29uc3QgT1JBTkdFID0gJ29yYW5nZSc7XHJcbmV4cG9ydCBjb25zdCBPUkFOR0VfU0VDID0gJyNGMUQwNjUnO1xyXG5leHBvcnQgY29uc3QgT1JBTkdFX0RBUktfVEVYVF9DT0xPUiA9ICcjQUJBODk1JztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUdIVF9CTFVFID0gJ2xpZ2h0X2JsdWUnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfQkxVRV9TRUMgPSAnIzU5RENGRic7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9CTFVFX0RBUktfVEVYVF9DT0xPUiA9ICcjOTJBMkM4JztcclxuXHJcbmV4cG9ydCBjb25zdCBERUVQX09SQU5HRSA9ICdkZWVwX29yYW5nZSc7XHJcbmV4cG9ydCBjb25zdCBERUVQX09SQU5HRV9TRUMgPSAnIzcwQTI4OCc7XHJcbmV4cG9ydCBjb25zdCBERUVQX09SQU5HRV9EQVJLX1RFWFRfQ09MT1IgPSAnIzk3QjhDNyc7XHJcblxyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzEgPSAnbGlnaHRfcHVycGxlXzEnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzFfU0VDID0gJyNFMTQ1OTQnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzFfREFSS19URVhUX0NPTE9SID0gJyM4Mjg4QjQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8yID0gJ2xpZ2h0X3B1cnBsZV8yJztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8yX1NFQyA9ICcjNjREN0Q2JztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8yX0RBUktfVEVYVF9DT0xPUiA9ICcjNTc4MkJCJztcclxuXHJcbmV4cG9ydCBjb25zdCBBQ1RJVkVfQ09MT1JfT1BUSU9OID0gJyNmZmZmZmYnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRBQl9TSVpFID0gOTkyO1xyXG4iLCJpbXBvcnQgYW50ZEFSIGZyb20gXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvYXJfRUdcIjtcbmltcG9ydCBzYU1lc3NhZ2VzIGZyb20gXCIuLi9sb2NhbGVzL2FyX1NBLmpzb25cIjtcblxuY29uc3Qgc2FMYW5nID0ge1xuICBtZXNzYWdlczoge1xuICAgIC4uLnNhTWVzc2FnZXNcbiAgfSxcbiAgYW50ZDogYW50ZEFSLFxuICBsb2NhbGU6ICdhcicsXG59O1xuZXhwb3J0IGRlZmF1bHQgc2FMYW5nO1xuIiwiaW1wb3J0IGFudGRFTiBmcm9tIFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2VuX1VTXCI7XG5pbXBvcnQgZW5NZXNzYWdlcyBmcm9tIFwiLi4vbG9jYWxlcy9lbl9VUy5qc29uXCI7XG5cbmNvbnN0IEVuTGFuZyA9IHtcbiAgbWVzc2FnZXM6IHtcbiAgICAuLi5lbk1lc3NhZ2VzXG4gIH0sXG4gIGFudGQ6IGFudGRFTixcbiAgbG9jYWxlOiAnZW4tVVMnLFxufTtcbmV4cG9ydCBkZWZhdWx0IEVuTGFuZztcbiIsImltcG9ydCBhbnRkRVMgZnJvbSBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9lc19FU1wiO1xuaW1wb3J0IHNhTWVzc2FnZXMgZnJvbSBcIi4uL2xvY2FsZXMvZXNfRVMuanNvblwiO1xuXG5jb25zdCBzYUxhbmcgPSB7XG4gIG1lc3NhZ2VzOiB7XG4gICAgLi4uc2FNZXNzYWdlc1xuICB9LFxuICBhbnRkOiBhbnRkRVMsXG4gIGxvY2FsZTogJ2VzJyxcbn07XG5leHBvcnQgZGVmYXVsdCBzYUxhbmc7XG4iLCJpbXBvcnQgYW50ZEZSIGZyb20gXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZnJfRlJcIjtcbmltcG9ydCBzYU1lc3NhZ2VzIGZyb20gXCIuLi9sb2NhbGVzL2ZyX0ZSLmpzb25cIjtcblxuY29uc3Qgc2FMYW5nID0ge1xuICBtZXNzYWdlczoge1xuICAgIC4uLnNhTWVzc2FnZXNcbiAgfSxcbiAgYW50ZDogYW50ZEZSLFxuICBsb2NhbGU6ICdmci1GUicsXG59O1xuZXhwb3J0IGRlZmF1bHQgc2FMYW5nO1xuIiwiaW1wb3J0IGFudGRJVCBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvaXRfSVQnO1xuaW1wb3J0IHNhTWVzc2FnZXMgZnJvbSBcIi4uL2xvY2FsZXMvaXRfSVQuanNvblwiO1xuXG5jb25zdCBzYUxhbmcgPSB7XG4gIG1lc3NhZ2VzOiB7XG4gICAgLi4uc2FNZXNzYWdlc1xuICB9LFxuICBhbnRkOiBhbnRkSVQsXG4gIGxvY2FsZTogJ2l0LUlUJyxcbn07XG5leHBvcnQgZGVmYXVsdCBzYUxhbmc7XG4iLCJpbXBvcnQgemhDTiBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvemhfQ04nO1xuaW1wb3J0IHpoTWVzc2FnZXMgZnJvbSBcIi4uL2xvY2FsZXMvemgtSGFucy5qc29uXCI7XG5cbmNvbnN0IFpoTGFuID0ge1xuICBtZXNzYWdlczoge1xuICAgIC4uLnpoTWVzc2FnZXNcbiAgfSxcbiAgYW50ZDogemhDTixcbiAgbG9jYWxlOiAnemgtSGFucy1DTicsXG59O1xuZXhwb3J0IGRlZmF1bHQgWmhMYW47XG4iLCJpbXBvcnQgZW5MYW5nIGZyb20gXCIuL2VudHJpZXMvZW4tVVNcIjtcclxuaW1wb3J0IHpoTGFuZyBmcm9tIFwiLi9lbnRyaWVzL3poLUhhbnMtQ05cIjtcclxuaW1wb3J0IGFyTGFuZyBmcm9tIFwiLi9lbnRyaWVzL2FyX1NBXCI7XHJcbmltcG9ydCBpdExhbmcgZnJvbSBcIi4vZW50cmllcy9pdF9JVFwiO1xyXG5pbXBvcnQgZXNMYW5nIGZyb20gXCIuL2VudHJpZXMvZXNfRVNcIjtcclxuaW1wb3J0IGZyTGFuZyBmcm9tIFwiLi9lbnRyaWVzL2ZyX0ZSXCI7XHJcblxyXG5jb25zdCBBcHBMb2NhbGUgPSB7XHJcbiAgZW46IGVuTGFuZyxcclxuICB6aDogemhMYW5nLFxyXG4gIGFyOiBhckxhbmcsXHJcbiAgaXQ6IGl0TGFuZyxcclxuICBlczogZXNMYW5nLFxyXG4gIGZyOiBmckxhbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExvY2FsZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5cbmltcG9ydCBcIi4uL3B1YmxpYy92ZW5kb3JzL3N0eWxlXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCJcbmltcG9ydCBpbml0U3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTG9jYWxlUHJvdmlkZXIgZnJvbSBcIi4uL2FwcC9jb3JlL0xvY2FsZVByb3ZpZGVyXCI7XG5pbXBvcnQge0F1dGhQcm92aWRlcn0gZnJvbSBcIi4uL3V0aWwvdXNlLWF1dGhcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2FwcC9jb3JlL0xheW91dFwiO1xuXG5jb25zdCBQYWdlID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmV9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkxpZ2h0SG91c2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgICAgPExvY2FsZVByb3ZpZGVyPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgPC9Mb2NhbGVQcm92aWRlcj5cbiAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlKShQYWdlKTtcbiIsImltcG9ydCBcIi4vZmxhZy9zcHJpdGUtZmxhZ3MtMjR4MjQuY3NzXCI7XHJcbmltcG9ydCBcIi4vZ2F4b24vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9sb2FkZXIuY3NzXCI7XHJcbmltcG9ydCBcIi4vbm9pci1wcm8vc3R5bGVzLmNzc1wiO1xyXG4iLCJpbXBvcnQge0ZFVENIX0VSUk9SLCBGRVRDSF9TVEFSVCwgRkVUQ0hfU1VDQ0VTUywgSElERV9NRVNTQUdFLCBTSE9XX01FU1NBR0V9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFN0YXJ0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEZFVENIX1NUQVJUXHJcbiAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4gZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogRkVUQ0hfU1VDQ0VTU1xyXG4gIH0pXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEZFVENIX0VSUk9SLFxyXG4gICAgcGF5bG9hZDogZXJyb3JcclxuICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBTSE9XX01FU1NBR0UsXHJcbiAgICBwYXlsb2FkOiBtZXNzYWdlXHJcbiAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoaWRlTWVzc2FnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBISURFX01FU1NBR0VcclxuICB9KVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1NXSVRDSF9MQU5HVUFHRSwgVE9HR0xFX0NPTExBUFNFRF9OQVYsIFdJTkRPV19XSURUSH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQge0xBWU9VVF9UWVBFLCBOQVZfU1RZTEUsIFNFVF9QQVRIX05BTUUsIFRIRU1FX1RZUEUsIFVQREFURV9SVExfU1RBVFVTfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KG5hdkNvbGxhcHNlZCkge1xyXG4gIHJldHVybiB7dHlwZTogVE9HR0xFX0NPTExBUFNFRF9OQVYsIG5hdkNvbGxhcHNlZH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXaW5kb3dXaWR0aCh3aWR0aCkge1xyXG4gIHJldHVybiB7dHlwZTogV0lORE9XX1dJRFRILCB3aWR0aH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUaGVtZVR5cGUodGhlbWVUeXBlKSB7XHJcbiAgcmV0dXJuIHt0eXBlOiBUSEVNRV9UWVBFLCB0aGVtZVR5cGV9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZTdHlsZUNoYW5nZShuYXZTdHlsZSkge1xyXG4gIHJldHVybiB7dHlwZTogTkFWX1NUWUxFLCBuYXZTdHlsZX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkxheW91dFR5cGVDaGFuZ2UobGF5b3V0VHlwZSkge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBMQVlPVVRfVFlQRSwgbGF5b3V0VHlwZX0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBhdGhOYW1lKHBhdGhuYW1lKSB7XHJcbiAgcmV0dXJuIHt0eXBlOiBTRVRfUEFUSF9OQU1FLCBwYXRobmFtZX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hMYW5ndWFnZShsb2NhbGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU1dJVENIX0xBTkdVQUdFLFxyXG4gICAgcGF5bG9hZDogbG9jYWxlXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERpcmVjdGlvblJUTChydGxTdGF0dXMpIHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7dHlwZTogVVBEQVRFX1JUTF9TVEFUVVMsIHJ0bFN0YXR1c30pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL1NldHRpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbW1vbic7XHJcbiIsImltcG9ydCB7RkVUQ0hfRVJST1IsIEZFVENIX1NUQVJULCBGRVRDSF9TVUNDRVNTLCBISURFX01FU1NBR0UsIFNIT1dfTUVTU0FHRX0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlc1wiXHJcblxyXG5jb25zdCBJTklUX1NUQVRFID0ge1xyXG4gIGVycm9yOiBcIlwiLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIG1lc3NhZ2U6ICcnXHJcbn07XHJcblxyXG5jb25zdCBjb21tb25SZWR1Y2VyID0gKHN0YXRlID0gSU5JVF9TVEFURSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBGRVRDSF9TVEFSVDoge1xyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogJycsIG1lc3NhZ2U6ICcnLCBsb2FkaW5nOiB0cnVlfTtcclxuICAgIH1cclxuICAgIGNhc2UgRkVUQ0hfU1VDQ0VTUzoge1xyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogJycsIG1lc3NhZ2U6ICcnLCBsb2FkaW5nOiBmYWxzZX07XHJcbiAgICB9XHJcbiAgICBjYXNlIFNIT1dfTUVTU0FHRToge1xyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogJycsIG1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkLCBsb2FkaW5nOiBmYWxzZX07XHJcbiAgICB9XHJcbiAgICBjYXNlIEZFVENIX0VSUk9SOiB7XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQsIG1lc3NhZ2U6ICcnfTtcclxuICAgIH1cclxuICAgIGNhc2UgSElERV9NRVNTQUdFOiB7XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogJycsIG1lc3NhZ2U6ICcnfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1vblJlZHVjZXI7XHJcbiIsImltcG9ydCB7U1dJVENIX0xBTkdVQUdFLCBUT0dHTEVfQ09MTEFQU0VEX05BViwgV0lORE9XX1dJRFRIfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgTEFZT1VUX1RZUEUsXHJcbiAgTEFZT1VUX1RZUEVfRlVMTCxcclxuICBOQVZfU1RZTEUsXHJcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxyXG4gIFNFVF9QQVRIX05BTUUsXHJcbiAgVEhFTUVfVFlQRSxcclxuICBUSEVNRV9UWVBFX0xJVEUsXHJcbiAgVVBEQVRFX1JUTF9TVEFUVVNcclxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFNldHRpbmdzID0ge1xyXG4gIG5hdkNvbGxhcHNlZDogdHJ1ZSxcclxuICBuYXZTdHlsZTogTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxyXG4gIGxheW91dFR5cGU6IExBWU9VVF9UWVBFX0ZVTEwsXHJcbiAgdGhlbWVUeXBlOiBUSEVNRV9UWVBFX0xJVEUsXHJcbiAgcGF0aG5hbWU6ICcnLFxyXG4gIHdpZHRoOiAxMzY3LFxyXG4gIGlzRGlyZWN0aW9uUlRMOiBmYWxzZSxcclxuICBsb2NhbGU6IHtcclxuICAgIGxhbmd1YWdlSWQ6ICdlbmdsaXNoJyxcclxuICAgIGxvY2FsZTogJ2VuJyxcclxuICAgIG5hbWU6ICdFbmdsaXNoJyxcclxuICAgIGljb246ICd1cydcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTZXR0aW5nc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU2V0dGluZ3MsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVE9HR0xFX0NPTExBUFNFRF9OQVY6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbmF2Q29sbGFwc2VkOiBhY3Rpb24ubmF2Q29sbGFwc2VkXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNFVF9QQVRIX05BTUU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcGF0aG5hbWU6IGFjdGlvbi5wYXRobmFtZVxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgVVBEQVRFX1JUTF9TVEFUVVM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNEaXJlY3Rpb25SVEw6IGFjdGlvbi5ydGxTdGF0dXNcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFdJTkRPV19XSURUSDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB3aWR0aDogYWN0aW9uLndpZHRoLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUSEVNRV9UWVBFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRoZW1lVHlwZTogYWN0aW9uLnRoZW1lVHlwZVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBOQVZfU1RZTEU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbmF2U3R5bGU6IGFjdGlvbi5uYXZTdHlsZVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMQVlPVVRfVFlQRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsYXlvdXRUeXBlOiBhY3Rpb24ubGF5b3V0VHlwZVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTV0lUQ0hfTEFOR1VBR0U6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9jYWxlOiBhY3Rpb24ucGF5bG9hZCxcclxuXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NSZWR1Y2VyO1xyXG4iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgQ29tbW9uIGZyb20gXCIuL0NvbW1vblwiO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBzZXR0aW5nczogU2V0dGluZ3MsXHJcbiAgY29tbW9uOiBDb21tb24sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnM7XHJcbiIsImltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5cclxuXHJcbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gbWlkZGxld2FyZSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGNvbnN0IHtjb21wb3NlV2l0aERldlRvb2xzfSA9IHJlcXVpcmUoJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbicpO1xyXG4gICAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcclxuICB9XHJcbiAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSA9IHt9KSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUsIGJpbmRNaWRkbGV3YXJlKFt0aHVua10pKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmU7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgaHR0cENsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogYGh0dHA6Ly9nLWF4b24ud29yay9qd3RhdXRoL2FwaS9gLCAvL1lPVVJfQVBJX1VSTCBIRVJFXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1Njcm9sbGJhcnN9IGZyb20gXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiO1xyXG5cclxuY29uc3QgQ3VzdG9tU2Nyb2xsYmFycyA9IChwcm9wcykgPT4gPFNjcm9sbGJhcnMgIHsuLi5wcm9wc30gYXV0b0hpZGUgdW5pdmVyc2FsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJUcmFja0hvcml6b250YWw9e3Byb3BzID0+IDxkaXYgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFjay1ob3Jpem9udGFsXCIvPn0vPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNjcm9sbGJhcnM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG5jb25zdCBJbmplY3RNYXNzYWdlID0gcHJvcHMgPT4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLnByb3BzfSAvPjtcclxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bChJbmplY3RNYXNzYWdlLCB7XHJcbiAgd2l0aFJlZjogZmFsc2UsXHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7aHR0cENsaWVudH0gZnJvbSBcIi4vQXBpXCI7XG5pbXBvcnQge0Nvb2tpZXN9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuLy8gUHJvdmlkZXIgY29tcG9uZW50IHRoYXQgd3JhcHMgYXBwIGFuZCBtYWtlcyBhdXRoIG9iamVjdCAuLlxuLy8gLi4uIGF2YWlsYWJsZSB0byBhbnkgY2hpbGQgY29tcG9uZW50IHRoYXQgY2FsbHMgdXNlQXV0aCgpLlxuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuLy8gSG9vayBmb3IgY2hpbGQgY29tcG9uZW50cyB0byBnZXQgdGhlIGF1dGggb2JqZWN0IC4uLlxuLy8gLi4uIGFuZCByZS1yZW5kZXIgd2hlbiBpdCBjaGFuZ2VzLlxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xufTtcblxuY29uc3QgdXNlUHJvdmlkZUF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IFthdXRoVXNlciwgc2V0QXV0aFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmdVc2VyLCBzZXRMb2FkaW5nVXNlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGZldGNoU3RhcnQgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcignJyk7XG4gIH1cblxuICBjb25zdCBmZXRjaFN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgc2V0RXJyb3IoJycpO1xuICB9XG5cbiAgY29uc3QgZmV0Y2hFcnJvciA9IChlcnJvcikgPT4ge1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIHNldEVycm9yKGVycm9yKTtcbiAgfVxuXG4gIGNvbnN0IHVzZXJMb2dpbiA9IChkYXRhLCBjYWxsYmFja0Z1bikgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2F1dGgvbG9naW4nLCBkYXRhKVxuICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyBkYXRhLnRva2VuLmFjY2Vzc190b2tlbjtcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuLmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgZ2V0QXV0aFVzZXIoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjYWxsYmFja0Z1bik7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZldGNoRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1c2VyU2lnbnVwID0gKGRhdGEsIGNhbGxiYWNrRnVuKSA9PiB7XG4gICAgZmV0Y2hTdGFydCgpO1xuICAgIGh0dHBDbGllbnQucG9zdCgnYXV0aC9yZWdpc3RlcicsIGRhdGEpXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xuICAgICAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgICAgIGNvb2tpZXMuc2V0KCd0b2tlbicsIGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIGNhbGxiYWNrRnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVzZXJTaWduT3V0ID0gKGNhbGxiYWNrRnVuKSA9PiB7XG4gICAgZmV0Y2hTdGFydCgpO1xuICAgIGh0dHBDbGllbnQucG9zdCgnYXV0aC9sb2dvdXQnKVxuICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgICBzZXRBdXRoVXNlcihmYWxzZSk7XG4gICAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XG4gICAgICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICAgICAgY29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZldGNoRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRBdXRoVXNlciA9ICgpID0+IHtcbiAgICBmZXRjaFN0YXJ0KCk7XG4gICAgaHR0cENsaWVudC5wb3N0KFwiYXV0aC9tZVwiKS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgIGlmIChkYXRhLnVzZXIpIHtcbiAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgIHNldEF1dGhVc2VyKGRhdGEudXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XG4gICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU3Vic2NyaWJlIHRvIHVzZXIgb24gbW91bnRcbiAgLy8gQmVjYXVzZSB0aGlzIHNldHMgc3RhdGUgaW4gdGhlIGNhbGxiYWNrIGl0IHdpbGwgY2F1c2UgYW55IC4uLlxuICAvLyAuLi4gY29tcG9uZW50IHRoYXQgdXRpbGl6ZXMgdGhpcyBob29rIHRvIHJlLXJlbmRlciB3aXRoIHRoZSAuLi5cbiAgLy8gLi4uIGxhdGVzdCBhdXRoIG9iamVjdC5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcblxuICAgICAgaHR0cENsaWVudC5wb3N0KFwiYXV0aC9tZVwiKS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICAgIHNldEF1dGhVc2VyKGRhdGEudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZ1VzZXIoZmFsc2UpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xuICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnJztcbiAgICAgICAgc2V0TG9hZGluZ1VzZXIoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSwgW11cbiAgKTtcblxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcbiAgcmV0dXJuIHtcbiAgICBpc0xvYWRpbmdVc2VyLFxuICAgIGlzTG9hZGluZyxcbiAgICBhdXRoVXNlcixcbiAgICBlcnJvcixcbiAgICBzZXRBdXRoVXNlcixcbiAgICBnZXRBdXRoVXNlcixcbiAgICB1c2VyTG9naW4sXG4gICAgdXNlclNpZ251cCxcbiAgICB1c2VyU2lnbk91dCxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzVW5SZXN0cmljdGVkUm91dGUgPSAocGF0aG5hbWUpID0+IHtcbiAgcmV0dXJuIHBhdGhuYW1lID09PSAnL3NpZ25pbicgfHwgcGF0aG5hbWUgPT09ICcvc2lnbnVwJyB8fCBwYXRobmFtZSA9PT0gJy9mb3Jnb3QtcGFzc3dvcmQnIHx8IHBhdGhuYW1lID09PSAnL3Jlc2V0LXBhc3N3b3JkJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2FyX0VHXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9lbl9VU1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZXNfRVNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2ZyX0ZSXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9pdF9JVFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvemhfQ05cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW50bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==