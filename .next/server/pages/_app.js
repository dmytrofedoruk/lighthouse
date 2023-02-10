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

  // console.log(defaultOpenKeys);  
  // console.log(selectedKeys);

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
    key: "user-management"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/user-management"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "User Management")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "page3"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/page3"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "Page 3")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "page4"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/page4"
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
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
  }, "example@test.com"), __jsx("div", {
    className: "gx-mt-3"
  }, __jsx("button", {
    className: "logout_button",
    style: {
      marginRight: "10px"
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/settings"
  }, __jsx("img", {
    style: {
      width: "13px"
    },
    src: "/images/settings.png"
  }))), __jsx("button", {
    className: "logout_button",
    onClick: () => userSignOut()
  }, __jsx("img", {
    style: {
      width: "13px"
    },
    src: "/images/logout.png"
  })))) : null;
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
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/custom.css */ "./styles/custom.css");
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/store */ "./redux/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_core_LocaleProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/core/LocaleProvider */ "./app/core/LocaleProvider/index.js");
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/use-auth */ "./util/use-auth.js");
/* harmony import */ var _app_core_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/core/Layout */ "./app/core/Layout/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const Page = ({
  Component,
  pageProps,
  store
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "LightHouse")), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
    store: store
  }, __jsx(_util_use_auth__WEBPACK_IMPORTED_MODULE_10__["AuthProvider"], null, __jsx(_app_core_LocaleProvider__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(_app_core_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(Component, pageProps))))));
};
/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(_redux_store__WEBPACK_IMPORTED_MODULE_7__["default"])(Page));

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

/***/ "./styles/custom.css":
/*!***************************!*\
  !*** ./styles/custom.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
  baseURL: `https://api.sevensafeservices.com/api/`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcExpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uL05vdGlmaWNhdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTWFpbE5vdGlmaWNhdGlvbi9Ob3RpZmljYXRpb25JdGVtLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1NlYXJjaEJveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Vc2VySW5mby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9MYXlvdXQvQXBwU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9MYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvTG9jYWxlUHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvU2lkZWJhci9BcHBzTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9TaWRlYmFyL1NpZGViYXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1NpZGViYXIvU2lkZWJhckxvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvU2lkZWJhci9Vc2VyUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9TaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1RvcGJhci9BYm92ZUhlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvQmVsb3dIZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvVG9wYmFyL0hvcml6b250YWxEYXJrL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1RvcGJhci9Ib3Jpem9udGFsRGVmYXVsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvSG9yaXpvbnRhbE5hdi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvSW5zaWRlSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1RvcGJhci9Ob0hlYWRlck5vdGlmaWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvVG9wYmFyL2xhbmd1YWdlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvQWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL1RoZW1lU2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9sbmdQcm92aWRlci9lbnRyaWVzL2FyX1NBLmpzIiwid2VicGFjazovLy8uL2xuZ1Byb3ZpZGVyL2VudHJpZXMvZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vbG5nUHJvdmlkZXIvZW50cmllcy9lc19FUy5qcyIsIndlYnBhY2s6Ly8vLi9sbmdQcm92aWRlci9lbnRyaWVzL2ZyX0ZSLmpzIiwid2VicGFjazovLy8uL2xuZ1Byb3ZpZGVyL2VudHJpZXMvaXRfSVQuanMiLCJ3ZWJwYWNrOi8vLy4vbG5nUHJvdmlkZXIvZW50cmllcy96aC1IYW5zLUNOLmpzIiwid2VicGFjazovLy8uL2xuZ1Byb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3ZlbmRvcnMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9TZXR0aW5nLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvQ29tbW9uLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWwvQXBpLmpzIiwid2VicGFjazovLy8uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFycy5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL0ludGxNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3VzZS1hdXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9hcl9FR1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9lbl9VU1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9lc19FU1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9mcl9GUlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9pdF9JVFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci96aF9DTlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW50bFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiQXBwTGluayIsImhyZWYiLCJjaGlsZHJlbiIsIk5vdGlmaWNhdGlvbkl0ZW0iLCJub3RpZmljYXRpb24iLCJpY29uIiwiaW1hZ2UiLCJ0aXRsZSIsInRpbWUiLCJub3RpZmljYXRpb25zIiwiQXBwTm90aWZpY2F0aW9uIiwibWFwIiwiaW5kZXgiLCJDaXJjdWxhclByb2dyZXNzIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFByb3BzIiwiYmFkZ2UiLCJuYW1lIiwibWVzc2FnZSIsImlkIiwiTWFpbE5vdGlmaWNhdGlvbiIsIlNlYXJjaEJveCIsInN0eWxlTmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIlVzZXJJbmZvIiwiYXV0aFVzZXIiLCJ1c2VyU2lnbk91dCIsInVzZUF1dGgiLCJ1c2VyTWVudU9wdGlvbnMiLCJTSURFQkFSX1ZJU0lCTEVfT04iLCJOQVZfU1RZTEVfRklYRUQiLCJOQVZfU1RZTEVfRFJBV0VSIiwiTkFWX1NUWUxFX01JTklfU0lERUJBUiIsIk5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSIiwiTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSIiwiQXBwU2lkZWJhciIsIm5hdlN0eWxlIiwid2lkdGgiLCJ1c2VTZWxlY3RvciIsInNldHRpbmdzIiwiVEFCX1NJWkUiLCJpbmNsdWRlcyIsIlJlYWN0IiwibWVtbyIsImdldENvbnRhaW5lckNsYXNzIiwiTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTCIsIk5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwiLCJOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMIiwiTkFWX1NUWUxFX0JFTE9XX0hFQURFUiIsIk5BVl9TVFlMRV9BQk9WRV9IRUFERVIiLCJnZXROYXZTdHlsZXMiLCJDb250ZW50IiwiRm9vdGVyIiwiTGF5b3V0IiwidG9kYXkiLCJEYXRlIiwiQXBwTGF5b3V0IiwiaXNMb2FkaW5nVXNlciIsImVycm9yIiwidGhlbWVUeXBlIiwibGF5b3V0VHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJUSEVNRV9UWVBFX0RBUksiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsIkxBWU9VVF9UWVBFX0ZVTEwiLCJMQVlPVVRfVFlQRV9CT1hFRCIsIkxBWU9VVF9UWVBFX0ZSQU1FRCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJ0b1N0cmluZyIsInRoZW4iLCJyIiwiaXNVblJlc3RyaWN0ZWRSb3V0ZSIsInBhdGhuYW1lIiwicHVzaCIsIkxvY2FsZVByb3ZpZGVyIiwicHJvcHMiLCJsb2NhbGUiLCJpc0RpcmVjdGlvblJUTCIsImN1cnJlbnRBcHBMb2NhbGUiLCJBcHBMb2NhbGUiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwic2V0QXR0cmlidXRlIiwiYW50ZCIsIm1lc3NhZ2VzIiwiQXBwc05hdmlnYXRpb24iLCJTdWJNZW51IiwiTWVudSIsIk1lbnVJdGVtR3JvdXAiLCJJdGVtR3JvdXAiLCJTaWRlYmFyQ29udGVudCIsImdldE5vSGVhZGVyQ2xhc3MiLCJnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyIsInNldFBhdGhOYW1lIiwic2VsZWN0ZWRLZXlzIiwic3Vic3RyIiwiZGVmYXVsdE9wZW5LZXlzIiwic3BsaXQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiVEhFTUVfVFlQRV9MSVRFIiwicHJvcFR5cGVzIiwiU2lkZWJhckxvZ28iLCJuYXZDb2xsYXBzZWQiLCJ0b2dnbGVDb2xsYXBzZWRTaWRlTmF2Iiwib25OYXZTdHlsZUNoYW5nZSIsIm1heFdpZHRoIiwiVXNlclByb2ZpbGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5SaWdodCIsIlNpZGVyIiwiU2lkZWJhciIsIm9uVG9nZ2xlQ29sbGFwc2VkTmF2IiwiZHJhd2VyU3R5bGUiLCJIZWFkZXIiLCJPcHRpb24iLCJTZWxlY3QiLCJtZW51IiwiaGFuZGxlTWVudUNsaWNrIiwiaW5mbyIsImhhbmRsZUNoYW5nZSIsIkFib3ZlSGVhZGVyIiwic2VhcmNoVGV4dCIsInNldFNlYXJjaFRleHQiLCJ1c2VTdGF0ZSIsImxhbmd1YWdlTWVudSIsImxhbmd1YWdlRGF0YSIsImxhbmd1YWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJzd2l0Y2hMYW5ndWFnZSIsInVwZGF0ZVNlYXJjaENoYXRVc2VyIiwiZXZ0IiwidGFyZ2V0IiwiQmVsb3dIZWFkZXIiLCJIb3Jpem9udGFsRGFyayIsIkhvcml6b250YWxEZWZhdWx0IiwiSG9yaXpvbnRhbE5hdiIsIkluc2lkZUhlYWRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiLCJOb0hlYWRlck5vdGlmaWNhdGlvbiIsIlRvcGJhciIsImxhbmd1YWdlSWQiLCJUT0dHTEVfQ09MTEFQU0VEX05BViIsIldJTkRPV19XSURUSCIsIlNXSVRDSF9MQU5HVUFHRSIsIkZFVENIX1NUQVJUIiwiRkVUQ0hfU1VDQ0VTUyIsIkZFVENIX0VSUk9SIiwiU0hPV19NRVNTQUdFIiwiSElERV9NRVNTQUdFIiwiVEhFTUVfVFlQRSIsIlRIRU1FX1RZUEVfU0VNSV9EQVJLIiwiVEhFTUVfQ09MT1JfU0VMRUNUSU9OIiwiVEhFTUVfQ09MT1JfU0VMRUNUSU9OX1BSRVNFVCIsIlRIRU1FX0NPTE9SX1NFTEVDVElPTl9DVVNUT01JWkUiLCJIT1JJWk9OVEFMX05BVklHQVRJT04iLCJIT1JJWk9OVEFMX01FTlVfUE9TSVRJT04iLCJBQk9WRV9USEVfSEVBREVSIiwiSU5TSURFX1RIRV9IRUFERVIiLCJCRUxPV19USEVfSEVBREVSIiwiVkVSVElDQUxfTkFWSUdBVElPTiIsIk5BVl9TVFlMRV9NSU5JIiwiTEFZT1VUX1RZUEUiLCJTRVRfUEFUSF9OQU1FIiwiVVBEQVRFX1JUTF9TVEFUVVMiLCJOQVZfU1RZTEUiLCJMSUdIVF9QVVJQTEUiLCJMSUdIVF9QVVJQTEVfU0VDIiwiTElHSFRfUFVSUExFX0RBUktfVEVYVF9DT0xPUiIsIlJFRCIsIlJFRF9TRUMiLCJSRURfREFSS19URVhUX0NPTE9SIiwiQkxVRSIsIkJMVUVfU0VDIiwiQkxVRV9EQVJLX1RFWFRfQ09MT1IiLCJEQVJLX0JMVUUiLCJEQVJLX0JMVUVfU0VDIiwiREFSS19CTFVFX0RBUktfVEVYVF9DT0xPUiIsIk9SQU5HRSIsIk9SQU5HRV9TRUMiLCJPUkFOR0VfREFSS19URVhUX0NPTE9SIiwiTElHSFRfQkxVRSIsIkxJR0hUX0JMVUVfU0VDIiwiTElHSFRfQkxVRV9EQVJLX1RFWFRfQ09MT1IiLCJERUVQX09SQU5HRSIsIkRFRVBfT1JBTkdFX1NFQyIsIkRFRVBfT1JBTkdFX0RBUktfVEVYVF9DT0xPUiIsIkxJR0hUX1BVUlBMRV8xIiwiTElHSFRfUFVSUExFXzFfU0VDIiwiTElHSFRfUFVSUExFXzFfREFSS19URVhUX0NPTE9SIiwiTElHSFRfUFVSUExFXzIiLCJMSUdIVF9QVVJQTEVfMl9TRUMiLCJMSUdIVF9QVVJQTEVfMl9EQVJLX1RFWFRfQ09MT1IiLCJBQ1RJVkVfQ09MT1JfT1BUSU9OIiwic2FMYW5nIiwic2FNZXNzYWdlcyIsImFudGRBUiIsIkVuTGFuZyIsImVuTWVzc2FnZXMiLCJhbnRkRU4iLCJhbnRkRVMiLCJhbnRkRlIiLCJhbnRkSVQiLCJaaExhbiIsInpoTWVzc2FnZXMiLCJ6aENOIiwiZW4iLCJlbkxhbmciLCJ6aCIsInpoTGFuZyIsImFyIiwiYXJMYW5nIiwiaXQiLCJpdExhbmciLCJlcyIsImVzTGFuZyIsImZyIiwiZnJMYW5nIiwiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwicHJlZmV0Y2giLCJhcyIsIm9wdGlvbnMiLCJjYXRjaCIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZm9jdXMiLCJMaW5rIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJkZWZpbmVQcm9wZXJ0eSIsIlJvdXRlciIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQXJyYXkiLCJpc0FycmF5Iiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiY2FuY2VsbGVkIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJhZGRMb2NhbGUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJsZW5ndGgiLCJpc0xvY2FsVVJMIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImludGVycG9sYXRlQXMiLCJyb3V0ZSIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUhyZWYiLCJjdXJyZW50UGF0aCIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJzZWFyY2hQYXJhbXMiLCJoYXNoIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwibWFya0xvYWRpbmdFcnJvciIsInByZXBhcmVVcmxBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJpbml0aWFsU3R5bGVTaGVldHMiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwibG9jYWxlcyIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImNoYW5nZSIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInJlbG9hZCIsImxvY2F0aW9uIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFnZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJyZXdyaXRlcyIsInByb21pc2VkQnVpbGRNYW5pZmVzdCIsInBhcnNlZCIsIl9yZXNvbHZlSHJlZiIsInVybElzTmV3IiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJmaWx0ZXIiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwicmVxdWlyZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJzb21lIiwicmUiLCJ0ZXN0IiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsImZvcm1hdFVybCIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImlzRHluYW1pY1JvdXRlIiwiRFVNTVlfQkFTRSIsInBhcnNlUmVsYXRpdmVVcmwiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJtYXRjaCIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJzb3VyY2UiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwidXNlZCIsImdldExvY2F0aW9uT3JpZ2luIiwiZ2V0VVJMIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwibG9hZEdldEluaXRpYWxQcm9wcyIsInByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIlNQIiwibWVhc3VyZSIsIlBhZ2UiLCJzdG9yZSIsIndpdGhSZWR1eCIsImluaXRTdG9yZSIsImZldGNoU3RhcnQiLCJmZXRjaFN1Y2Nlc3MiLCJmZXRjaEVycm9yIiwicGF5bG9hZCIsInNob3dNZXNzYWdlIiwiaGlkZU1lc3NhZ2UiLCJzZXRUaGVtZVR5cGUiLCJvbkxheW91dFR5cGVDaGFuZ2UiLCJzZXREaXJlY3Rpb25SVEwiLCJydGxTdGF0dXMiLCJJTklUX1NUQVRFIiwibG9hZGluZyIsImNvbW1vblJlZHVjZXIiLCJhY3Rpb24iLCJpbml0aWFsU2V0dGluZ3MiLCJTZXR0aW5nc1JlZHVjZXIiLCJyZWR1Y2VycyIsImNvbWJpbmVSZWR1Y2VycyIsIlNldHRpbmdzIiwiY29tbW9uIiwiQ29tbW9uIiwiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNvbmZpZ3VyZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJ0aHVuayIsImh0dHBDbGllbnQiLCJheGlvcyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQ3VzdG9tU2Nyb2xsYmFycyIsImRpc3BsYXkiLCJJbmplY3RNYXNzYWdlIiwiaW5qZWN0SW50bCIsIndpdGhSZWYiLCJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJ1c2VQcm92aWRlQXV0aCIsInNldEF1dGhVc2VyIiwic2V0TG9hZGluZ1VzZXIiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJ1c2VyTG9naW4iLCJjYWxsYmFja0Z1biIsInBvc3QiLCJkZWZhdWx0cyIsInRva2VuIiwiY29va2llcyIsIkNvb2tpZXMiLCJnZXRBdXRoVXNlciIsInVzZXJTaWdudXAiLCJhY2Nlc3NfdG9rZW4iLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNHO0FBRTdCLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0VBQUNDLElBQUk7RUFBRUM7QUFBUSxDQUFDLEtBQUs7RUFDckMsT0FDQyxNQUFDLGdEQUFJO0lBQUMsSUFBSSxFQUFFRDtFQUFLLEdBQ2hCLGlCQUFJQyxRQUFRLENBQUssQ0FDWDtBQUVULENBQUM7QUFFY0Ysc0VBQU8sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEk7QUFDRTtBQUc1QixNQUFNRyxnQkFBZ0IsR0FBRyxDQUFDO0VBQUNDO0FBQVksQ0FBQyxLQUFLO0VBQzNDLE1BQU07SUFBQ0MsSUFBSTtJQUFFQyxLQUFLO0lBQUVDLEtBQUs7SUFBRUM7RUFBSSxDQUFDLEdBQUdKLFlBQVk7RUFDL0MsT0FFRTtJQUFJLFNBQVMsRUFBQztFQUFVLEdBQ3RCLE1BQUMsMkNBQU07SUFBQyxTQUFTLEVBQUMsb0JBQW9CO0lBQzlCLEdBQUcsRUFBRUUsS0FBTTtJQUNYLEdBQUcsRUFBRUE7RUFBTSxFQUFFLEVBQ3JCO0lBQUssU0FBUyxFQUFDO0VBQW9DLEdBQ2pEO0lBQUcsU0FBUyxFQUFDO0VBQWtCLEdBQUVDLEtBQUssQ0FBSyxFQUMzQztJQUFHLFNBQVMsRUFBRyxhQUFZRixJQUFLO0VBQVUsRUFBRSxLQUFDO0lBQU0sU0FBUyxFQUFDO0VBQWMsR0FBQyxxQkFBUUcsSUFBSSxDQUFTLENBQU8sQ0FDcEcsQ0FDSDtBQUVULENBQUM7QUFFY0wsK0VBQWdCLEU7Ozs7Ozs7Ozs7OztBQ3BCL0I7QUFBQTtBQUFPLE1BQU1NLGFBQWEsR0FBRyxDQUUzQjtFQUNFSCxLQUFLLEVBQUUscUNBQXFDO0VBQzVDQyxLQUFLLEVBQUUsNkNBQTZDO0VBQ3BEQyxJQUFJLEVBQUUsU0FBUztFQUNmSCxJQUFJLEVBQUU7QUFDUixDQUFDLEVBQUU7RUFDREMsS0FBSyxFQUFFLHFDQUFxQztFQUM1Q0MsS0FBSyxFQUFFLDRDQUE0QztFQUNuREMsSUFBSSxFQUFFLFNBQVM7RUFDZkgsSUFBSSxFQUFFO0FBQ1IsQ0FBQyxFQUFFO0VBQ0RDLEtBQUssRUFBRSxxQ0FBcUM7RUFDNUNDLEtBQUssRUFBRSxnRUFBZ0U7RUFDdkVDLElBQUksRUFBRSxTQUFTO0VBQ2ZILElBQUksRUFBRTtBQUNSLENBQUMsRUFBRTtFQUNEQyxLQUFLLEVBQUUscUNBQXFDO0VBQzVDQyxLQUFLLEVBQUUsK0JBQStCO0VBQ3RDQyxJQUFJLEVBQUUsU0FBUztFQUNmSCxJQUFJLEVBQUU7QUFDUixDQUFDLEVBQUU7RUFDREMsS0FBSyxFQUFFLHFDQUFxQztFQUM1Q0MsS0FBSyxFQUFFLHVDQUF1QztFQUM5Q0MsSUFBSSxFQUFFLFNBQVM7RUFDZkgsSUFBSSxFQUFFO0FBQ1IsQ0FBQyxDQUNGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnlCO0FBQ3dCO0FBQ2I7QUFDeUI7QUFHOUQsTUFBTUssZUFBZSxHQUFHLE1BQU07RUFDNUIsT0FDRSxtRUFDRTtJQUFLLFNBQVMsRUFBQztFQUFtQixHQUNoQztJQUFJLFNBQVMsRUFBQztFQUFTLEdBQUMsZUFBYSxDQUFLLEVBQzFDO0lBQUcsU0FBUyxFQUFDO0VBQXFDLEVBQUUsQ0FDaEQsRUFDTixNQUFDLDhEQUFnQjtJQUFDLFNBQVMsRUFBQztFQUFtQixHQUM3QztJQUFJLFNBQVMsRUFBQztFQUFnQixHQUMzQkQsbURBQWEsQ0FBQ0UsR0FBRyxDQUFDLENBQUNQLFlBQVksRUFBRVEsS0FBSyxLQUFLLE1BQUMseURBQWdCO0lBQUMsR0FBRyxFQUFFQSxLQUFNO0lBQ1gsWUFBWSxFQUFFUjtFQUFhLEVBQUUsQ0FBQyxDQUV6RixDQUNZLENBQ2xCO0FBRVAsQ0FBQztBQUVjTSw4RUFBZSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qko7QUFDRTtBQUU1QixNQUFNRyxnQkFBZ0IsR0FBRyxDQUFDO0VBQUNDO0FBQVMsQ0FBQyxLQUFLO0VBQUssU0FBUyxFQUFHLFVBQVNBLFNBQVU7QUFBRSxHQUM3RSxNQUFDLHlDQUFJO0VBQUMsSUFBSSxFQUFDO0FBQU8sRUFBRyxDQUNsQjtBQUNTRCwrRUFBZ0IsRUFBQztBQUNoQ0EsZ0JBQWdCLENBQUNFLFlBQVksR0FBRztFQUM5QkQsU0FBUyxFQUFFO0FBQ2IsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUeUI7QUFDRTtBQUU1QixNQUFNWCxnQkFBZ0IsR0FBRyxDQUFDO0VBQUNDO0FBQVksQ0FBQyxLQUFLO0VBQzNDLE1BQU07SUFBQ0UsS0FBSztJQUFFVSxLQUFLO0lBQUVDLElBQUk7SUFBRVQsSUFBSTtJQUFFVTtFQUFPLENBQUMsR0FBR2QsWUFBWTtFQUN4RCxPQUNFO0lBQUksU0FBUyxFQUFDO0VBQVUsR0FDdEI7SUFBSyxTQUFTLEVBQUM7RUFBdUIsR0FDcEMsTUFBQywyQ0FBTTtJQUFDLFNBQVMsRUFBQyxZQUFZO0lBQ3RCLEdBQUcsRUFBRUUsS0FBTTtJQUNYLEdBQUcsRUFBRUE7RUFBTSxFQUFFLEVBQ3BCVSxLQUFLLEdBQUcsQ0FBQyxHQUFHO0lBQU0sU0FBUyxFQUFDO0VBQTBELEdBQUVBLEtBQUssQ0FBUSxHQUFHLElBQUksQ0FDekcsRUFDTjtJQUFLLFNBQVMsRUFBQztFQUFlLEdBQzVCO0lBQUssU0FBUyxFQUFDO0VBQThELEdBQzNFO0lBQUksU0FBUyxFQUFDO0VBQXlDLEdBQUM7SUFBTSxTQUFTLEVBQUM7RUFBUyxHQUFFQyxJQUFJLENBQVEsQ0FBSyxFQUNwRztJQUFNLFNBQVMsRUFBQztFQUFjLEdBQUMscUJBQVFULElBQUksQ0FBUyxDQUFPLENBQ3ZELEVBQ047SUFBRyxTQUFTLEVBQUM7RUFBVSxHQUFFVSxPQUFPLENBQUssRUFDckM7SUFBTSxTQUFTLEVBQUM7RUFBd0MsR0FBQztJQUFHLFNBQVMsRUFBQztFQUF5QixFQUFFLFNBQUssQ0FBTyxFQUM3RztJQUFNLFNBQVMsRUFBQztFQUF3QyxHQUFDO0lBQ3ZELFNBQVMsRUFBQztFQUErQixFQUFFLFFBQUksQ0FBTyxDQUNwRCxDQUNIO0FBRVQsQ0FBQztBQUVjZiwrRUFBZ0IsRTs7Ozs7Ozs7Ozs7O0FDM0IvQjtBQUFBO0FBQU8sTUFBTU0sYUFBYSxHQUFHLENBQzNCO0VBQ0VVLEVBQUUsRUFBRSxDQUFDO0VBQ0xiLEtBQUssRUFBRSxpQ0FBaUM7RUFDeENXLElBQUksRUFBRSxjQUFjO0VBQ3BCVCxJQUFJLEVBQUUsU0FBUztFQUNmVSxPQUFPLEVBQUUsNkNBQTZDO0VBQ3RERixLQUFLLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDRUcsRUFBRSxFQUFFLENBQUM7RUFDTGIsS0FBSyxFQUFFLGlDQUFpQztFQUN4Q1csSUFBSSxFQUFFLFlBQVk7RUFDbEJULElBQUksRUFBRSxTQUFTO0VBQ2ZVLE9BQU8sRUFBRTtBQUNYLENBQUMsRUFDRDtFQUNFQyxFQUFFLEVBQUUsQ0FBQztFQUNMYixLQUFLLEVBQUMsaUNBQWlDO0VBQ3ZDVyxJQUFJLEVBQUUsWUFBWTtFQUNsQlQsSUFBSSxFQUFFLFNBQVM7RUFDZlUsT0FBTyxFQUFFLG9EQUFvRDtFQUM3REYsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VHLEVBQUUsRUFBRSxDQUFDO0VBQ0xiLEtBQUssRUFBRSxpQ0FBaUM7RUFDeENXLElBQUksRUFBRSxjQUFjO0VBQ3BCVCxJQUFJLEVBQUUsU0FBUztFQUNmVSxPQUFPLEVBQUU7QUFDWCxDQUFDLEVBQ0Q7RUFDRUMsRUFBRSxFQUFFLENBQUM7RUFDTGIsS0FBSyxFQUFFLGlDQUFpQztFQUN4Q1csSUFBSSxFQUFFLGVBQWU7RUFDckJULElBQUksRUFBRSxTQUFTO0VBQ2ZVLE9BQU8sRUFBRSwwQ0FBMEM7RUFDbkRGLEtBQUssRUFBRTtBQUNULENBQUMsQ0FDRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN5QjtBQUN3QjtBQUNiO0FBQ3dCO0FBRTdELE1BQU1JLGdCQUFnQixHQUFHLE1BQU07RUFDN0IsT0FDRSxtRUFDRTtJQUFLLFNBQVMsRUFBQztFQUFtQixHQUNoQztJQUFJLFNBQVMsRUFBQztFQUFTLEdBQUMsVUFBUSxDQUFLLEVBQ3JDO0lBQUcsU0FBUyxFQUFDO0VBQXFDLEVBQUUsQ0FDaEQsRUFDTixNQUFDLDhEQUFnQjtJQUFDLFNBQVMsRUFBQztFQUFtQixHQUM3QztJQUFJLFNBQVMsRUFBQztFQUFnQixHQUMzQlgsbURBQWEsQ0FBQ0UsR0FBRyxDQUFDLENBQUNQLFlBQVksRUFBRVEsS0FBSyxLQUFLLE1BQUMseURBQWdCO0lBQUMsR0FBRyxFQUFFQSxLQUFNO0lBQ1gsWUFBWSxFQUFFUjtFQUFhLEVBQUUsQ0FBQyxDQUN6RixDQUNZLENBQ2xCO0FBRVAsQ0FBQztBQUVjZ0IsK0VBQWdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qkw7QUFFMUIsTUFBTUMsU0FBUyxHQUFHLENBQUM7RUFBQ0MsU0FBUztFQUFFQyxXQUFXO0VBQUVDLFFBQVE7RUFBRUM7QUFBSyxDQUFDLEtBQUs7RUFFL0QsT0FDRTtJQUFLLFNBQVMsRUFBRyxpQkFBZ0JILFNBQVU7RUFBRSxHQUMzQztJQUFLLFNBQVMsRUFBQztFQUFlLEdBQzVCO0lBQU8sU0FBUyxFQUFDLFdBQVc7SUFBQyxJQUFJLEVBQUMsUUFBUTtJQUFDLFdBQVcsRUFBRUMsV0FBWTtJQUFDLFFBQVEsRUFBRUMsUUFBUztJQUNqRixLQUFLLEVBQUVDO0VBQU0sRUFBRSxFQUN0QjtJQUFNLFNBQVMsRUFBQztFQUEyQixHQUFDO0lBQUcsU0FBUyxFQUFDO0VBQWtCLEVBQUUsQ0FBTyxDQUNoRixDQUNGO0FBRVYsQ0FBQztBQUNjSix3RUFBUyxFQUFDO0FBRXpCQSxTQUFTLENBQUNOLFlBQVksR0FBRztFQUN2Qk8sU0FBUyxFQUFFLEVBQUU7RUFDYkcsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ5QjtBQUNXO0FBQ1U7QUFFL0MsTUFBTUMsUUFBUSxHQUFHLE1BQU07RUFDckIsTUFBTTtJQUFDQyxRQUFRO0lBQUVDO0VBQVcsQ0FBQyxHQUFHQyw4REFBTyxFQUFFO0VBRXpDLE1BQU1DLGVBQWUsR0FDbkI7SUFBSSxTQUFTLEVBQUM7RUFBaUIsR0FDN0Isa0JBQUksWUFBVSxDQUFLLEVBQ25CLGtCQUFJLGFBQVcsQ0FBSyxFQUNwQjtJQUFJLE9BQU8sRUFBRSxNQUFNRixXQUFXO0VBQUcsR0FBQyxRQUNsQyxDQUFLLENBRVI7RUFFRCxPQUFPRCxRQUFRLEdBQ2IsTUFBQyw0Q0FBTztJQUFDLGdCQUFnQixFQUFDLHVCQUF1QjtJQUFDLFNBQVMsRUFBQyxhQUFhO0lBQUMsT0FBTyxFQUFFRyxlQUFnQjtJQUFDLE9BQU8sRUFBQztFQUFPLEdBQ2pILE1BQUMsMkNBQU07SUFBQyxHQUFHLEVBQUMsaUNBQWlDO0lBQUMsU0FBUyxFQUFDLHNCQUFzQjtJQUFDLEdBQUcsRUFBQztFQUFFLEVBQUUsQ0FDL0UsR0FDUixJQUFJO0FBQ1YsQ0FBQztBQUVjSix1RUFBUSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRztBQU1lO0FBQ0Q7QUFDUDtBQUVqQyxNQUFNSyxrQkFBa0IsR0FBRyxDQUFDQyx1RUFBZSxFQUFFQyx3RUFBZ0IsRUFBRUMsOEVBQXNCLEVBQUVDLHdGQUFnQyxFQUFFQyw0RkFBb0MsQ0FBQztBQUU5SixNQUFNQyxVQUFVLEdBQUcsQ0FBQztFQUFDQztBQUFRLENBQUMsS0FBSztFQUNqQyxNQUFNQyxLQUFLLEdBQUdDLCtEQUFXLENBQUMsQ0FBQztJQUFDQztFQUFRLENBQUMsS0FBS0EsUUFBUSxDQUFDRixLQUFLLENBQUM7RUFFekQsSUFBSUEsS0FBSyxHQUFHRyxnRUFBUSxJQUFJWCxrQkFBa0IsQ0FBQ1ksUUFBUSxDQUFDTCxRQUFRLENBQUMsRUFBRTtJQUM3RCxPQUFPLE1BQUMsZ0RBQU8sT0FBRTtFQUNuQjtFQUVBLE9BQU8sSUFBSTtBQUNiLENBQUM7QUFFY00sd0hBQUssQ0FBQ0MsSUFBSSxDQUFDUixVQUFVLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRTtBQUNGO0FBQ2dCO0FBRU87QUFDTjtBQUNKO0FBQ0Y7QUFDQTtBQUNqQjtBQWdCVTtBQUN5QjtBQUNFO0FBQzlCO0FBQzJCO0FBQ1I7QUFDbkI7QUFFdEMsTUFBTVMsaUJBQWlCLEdBQUlSLFFBQVEsSUFBSztFQUN0QyxRQUFRQSxRQUFRO0lBQ2QsS0FBS1MsaUZBQXlCO01BQzVCLE9BQU8sbUJBQW1CO0lBQzVCLEtBQUtDLG9GQUE0QjtNQUMvQixPQUFPLG1CQUFtQjtJQUM1QixLQUFLQywwRkFBa0M7TUFDckMsT0FBTyxtQkFBbUI7SUFDNUIsS0FBS0MsOEVBQXNCO01BQ3pCLE9BQU8sbUJBQW1CO0lBQzVCLEtBQUtDLDhFQUFzQjtNQUN6QixPQUFPLG1CQUFtQjtJQUM1QjtNQUNFLE9BQU8sRUFBRTtFQUFDO0FBRWhCLENBQUM7QUFFRCxNQUFNQyxZQUFZLEdBQUlkLFFBQVEsSUFBSztFQUNqQyxRQUFRQSxRQUFRO0lBQ2QsS0FBS1Usb0ZBQTRCO01BQy9CLE9BQU8sTUFBQyxpRUFBaUIsT0FBRTtJQUM3QixLQUFLRCxpRkFBeUI7TUFDNUIsT0FBTyxNQUFDLDhEQUFjLE9BQUU7SUFDMUIsS0FBS0UsMEZBQWtDO01BQ3JDLE9BQU8sTUFBQyw0REFBWSxPQUFFO0lBQ3hCLEtBQUtFLDhFQUFzQjtNQUN6QixPQUFPLE1BQUMsMkRBQVcsT0FBRTtJQUN2QixLQUFLRCw4RUFBc0I7TUFDekIsT0FBTyxNQUFDLDJEQUFXLE9BQUU7SUFDdkIsS0FBS2xCLHVFQUFlO01BQ2xCLE9BQU8sTUFBQywrQ0FBTSxPQUFFO0lBQ2xCLEtBQUtDLHdFQUFnQjtNQUNuQixPQUFPLE1BQUMsK0NBQU0sT0FBRTtJQUNsQixLQUFLQyw4RUFBc0I7TUFDekIsT0FBTyxNQUFDLCtDQUFNLE9BQUU7SUFDbEIsS0FBS0Msd0ZBQWdDO01BQ25DLE9BQU8sTUFBQyxxRUFBb0IsT0FBRTtJQUNoQyxLQUFLQyw0RkFBb0M7TUFDdkMsT0FBTyxNQUFDLHFFQUFvQixPQUFFO0lBQ2hDO01BQ0UsT0FBTyxJQUFJO0VBQUM7QUFFbEIsQ0FBQztBQUVELE1BQU07RUFBQ2lCLE9BQU87RUFBRUM7QUFBTSxDQUFDLEdBQUdDLDJDQUFNO0FBQ2hDLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFJLEVBQUU7QUFFeEIsTUFBTUMsU0FBUyxHQUFHLENBQUM7RUFBQ3hEO0FBQVEsQ0FBQyxLQUFLO0VBQ2hDLE1BQU07SUFBQ3lCLFFBQVE7SUFBRWdDLGFBQWE7SUFBRUM7RUFBSyxDQUFDLEdBQUcvQiwrREFBTyxFQUFFO0VBQ2xELE1BQU1nQyxTQUFTLEdBQUdyQiwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ29CLFNBQVMsQ0FBQztFQUNqRSxNQUFNdkIsUUFBUSxHQUFHRSwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ0gsUUFBUSxDQUFDO0VBQy9ELE1BQU13QixVQUFVLEdBQUd0QiwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ3FCLFVBQVUsQ0FBQztFQUVuRSxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQUU7RUFDMUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBRTlCQyx1REFBUyxDQUFDLE1BQU07SUFDZCxJQUFJTixTQUFTLEtBQUtPLHVFQUFlLEVBQUU7TUFDakNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDM0MsQ0FBQyxNQUFNLElBQUlILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNFLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtNQUN6REosUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLFlBQVksQ0FBQztJQUM5QztFQUNGLENBQUMsRUFBRSxDQUFDYixTQUFTLENBQUMsQ0FBQztFQUVmTSx1REFBUyxDQUFDLE1BQU07SUFDZCxJQUFJTCxVQUFVLEtBQUthLHdFQUFnQixFQUFFO01BQ25DTixRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsY0FBYyxDQUFDO01BQzlDTCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsZUFBZSxDQUFDO01BQy9DTCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQzVDLENBQUMsTUFBTSxJQUFJVixVQUFVLEtBQUtjLHlFQUFpQixFQUFFO01BQzNDUCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsYUFBYSxDQUFDO01BQzdDTCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsZUFBZSxDQUFDO01BQy9DTCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUMsTUFBTSxJQUFJVixVQUFVLEtBQUtlLDBFQUFrQixFQUFFO01BQzVDUixRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsY0FBYyxDQUFDO01BQzlDTCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsYUFBYSxDQUFDO01BQzdDTCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQzlDO0VBQ0YsQ0FBQyxFQUFFLENBQUNWLFVBQVUsQ0FBQyxDQUFDO0VBRWhCSyx1REFBUyxDQUFDLE1BQU07SUFDZCxJQUFJN0IsUUFBUSxLQUFLVSxvRkFBNEIsSUFDM0NWLFFBQVEsS0FBS1MsaUZBQXlCLElBQ3RDVCxRQUFRLEtBQUtXLDBGQUFrQyxJQUMvQ1gsUUFBUSxLQUFLYSw4RUFBc0IsSUFDbkNiLFFBQVEsS0FBS1ksOEVBQXNCLEVBQUU7TUFDckNtQixRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO01BQzFDSCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7SUFDbEQsQ0FBQyxNQUFNO01BQ0xILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNHLE1BQU0sQ0FBQyxhQUFhLENBQUM7TUFDN0NMLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUNyRDtFQUNGLENBQUMsRUFBRSxDQUFDcEMsUUFBUSxDQUFDLENBQUM7RUFFZDZCLHVEQUFTLENBQUMsTUFBTTtJQUNkVyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFNO01BQ3RDZCxRQUFRLENBQUNlLHlFQUFpQixDQUFDRixNQUFNLENBQUNHLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRSxDQUFDaEIsUUFBUSxDQUFDLENBQUM7RUFFZEUsdURBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSVAsS0FBSyxFQUFFO01BQ1QxQyw0Q0FBTyxDQUFDMEMsS0FBSyxDQUFDQSxLQUFLLENBQUNzQixRQUFRLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDO0lBQzlDO0VBQ0YsQ0FBQyxFQUFFLENBQUN4QixLQUFLLENBQUMsQ0FBQztFQUVYTyx1REFBUyxDQUFDLE1BQU07SUFDZCxJQUFJLENBQUNSLGFBQWEsRUFBRTtNQUNsQixJQUFJLENBQUNoQyxRQUFRLElBQUksQ0FBQzBELDJFQUFtQixDQUFDdEIsTUFBTSxDQUFDdUIsUUFBUSxDQUFDLEVBQUU7UUFDdER2QixNQUFNLENBQUN3QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUNKLElBQUksQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUM7TUFDckMsQ0FBQyxNQUFNLElBQUl6RCxRQUFRLElBQUkwRCwyRUFBbUIsQ0FBQ3RCLE1BQU0sQ0FBQ3VCLFFBQVEsQ0FBQyxFQUFFO1FBQzNEdkIsTUFBTSxDQUFDd0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDSixJQUFJLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDO01BQ3hDO0lBQ0Y7RUFDRixDQUFDLEVBQUUsQ0FBQ3pELFFBQVEsRUFBRWdDLGFBQWEsRUFBRUksTUFBTSxDQUFDdUIsUUFBUSxDQUFDLENBQUM7RUFFOUMsSUFBSTNCLGFBQWEsRUFBRTtJQUNqQixPQUFPO01BQUssU0FBUyxFQUFDO0lBQWdCLEdBQ3BDLE1BQUMscUVBQWdCLE9BQUUsQ0FDZjtFQUNSO0VBRUEsT0FBTzBCLDJFQUFtQixDQUFDdEIsTUFBTSxDQUFDdUIsUUFBUSxDQUFDLEdBQUdwRixRQUFRLEdBQ3BELE1BQUMsMkNBQU07SUFBQyxTQUFTLEVBQUc7RUFBZSxHQUNqQyxNQUFDLG9EQUFVO0lBQUMsUUFBUSxFQUFFb0M7RUFBUyxFQUFFLEVBQ2pDLE1BQUMsMkNBQU0sUUFDSmMsWUFBWSxDQUFDZCxRQUFRLENBQUMsRUFDdkIsTUFBQyxPQUFPO0lBQUMsU0FBUyxFQUFHLHFCQUFvQlEsaUJBQWlCLENBQUNSLFFBQVEsQ0FBRTtFQUFFLEdBQ3JFO0lBQUssU0FBUyxFQUFDO0VBQXlCLEdBQ3JDcEMsUUFBUSxDQUNMLENBTUUsQ0FDSCxDQUVaO0FBQ0gsQ0FBQztBQUVjd0Qsd0VBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS2U7QUFDSDtBQUNJO0FBQ0E7QUFDSztBQUU3QyxNQUFNOEIsY0FBYyxHQUFJQyxLQUFLLElBQUs7RUFDaEMsTUFBTUMsTUFBTSxHQUFHbEQsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNpRCxNQUFNLENBQUM7RUFDM0QsTUFBTUMsY0FBYyxHQUFHbkQsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNrRCxjQUFjLENBQUM7RUFDM0UsTUFBTUMsZ0JBQWdCLEdBQUdDLG9EQUFTLENBQUNILE1BQU0sQ0FBQ0EsTUFBTSxDQUFDO0VBRWpEdkIsdURBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSXVCLE1BQU0sRUFDUnJCLFFBQVEsQ0FBQ3lCLGVBQWUsQ0FBQ0MsSUFBSSxHQUFHTCxNQUFNLENBQUNBLE1BQU07RUFDakQsQ0FBQyxFQUFFLENBQUNBLE1BQU0sQ0FBQyxDQUFDO0VBRVp2Qix1REFBUyxDQUFDLE1BQU07SUFDZCxJQUFJd0IsY0FBYyxFQUFFO01BQ2xCdEIsUUFBUSxDQUFDeUIsZUFBZSxDQUFDdkIsU0FBUyxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO01BQzdDSCxRQUFRLENBQUN5QixlQUFlLENBQUNFLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7SUFDaEUsQ0FBQyxNQUFNO01BQ0wzQixRQUFRLENBQUN5QixlQUFlLENBQUN2QixTQUFTLENBQUNHLE1BQU0sQ0FBQyxLQUFLLENBQUM7TUFDaERMLFFBQVEsQ0FBQ3lCLGVBQWUsQ0FBQ0UsWUFBWSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztJQUNoRTtFQUNGLENBQUMsRUFBRSxDQUFDTCxjQUFjLENBQUMsQ0FBQztFQUVwQixPQUNFLE1BQUMsbURBQWM7SUFBQyxNQUFNLEVBQUVDLGdCQUFnQixDQUFDSyxJQUFLO0lBQUMsU0FBUyxFQUFFTixjQUFjLEdBQUcsS0FBSyxHQUFHO0VBQU0sR0FDdkYsTUFBQyx1REFBWTtJQUNYLE1BQU0sRUFBRUMsZ0JBQWdCLENBQUNGLE1BQU87SUFDaEMsUUFBUSxFQUFFRSxnQkFBZ0IsQ0FBQ007RUFBUyxHQUFFVCxLQUFLLENBQUN2RixRQUFRLENBQWdCLENBQ3ZEO0FBRXJCLENBQUM7QUFFY3NGLDZFQUFjLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0g7QUFFMUIsTUFBTVcsY0FBYyxHQUFHLE1BQ3JCO0VBQUksU0FBUyxFQUFDO0FBQVksR0FDeEIsa0JBQUk7RUFBRyxTQUFTLEVBQUM7QUFBc0IsRUFBRSxDQUFLLEVBQzlDLGtCQUFJO0VBQUcsU0FBUyxFQUFDO0FBQXdCLEVBQUUsQ0FBSyxFQUNoRCxrQkFBSTtFQUFHLFNBQVMsRUFBQztBQUFvQixFQUFFLENBQUssQ0FDekM7QUFFUUEsNkVBQWMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFU7QUFDTDtBQUNMO0FBRVE7QUFDeUI7QUFDdEI7QUFDQTtBQUNNO0FBS0w7QUFDWTtBQUNGO0FBRW5ELE1BQU1DLE9BQU8sR0FBR0MseUNBQUksQ0FBQ0QsT0FBTztBQUM1QixNQUFNRSxhQUFhLEdBQUdELHlDQUFJLENBQUNFLFNBQVM7QUFFcEMsTUFBTUMsY0FBYyxHQUFHLE1BQU07RUFDM0IsTUFBTWxFLFFBQVEsR0FBR0UsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNILFFBQVEsQ0FBQztFQUMvRCxNQUFNdUIsU0FBUyxHQUFHckIsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNvQixTQUFTLENBQUM7RUFFakUsTUFBTUksUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBQzlCLE1BQU1ILE1BQU0sR0FBR0MsNkRBQVMsRUFBRTtFQUUxQixNQUFNeUMsZ0JBQWdCLEdBQUluRSxRQUFRLElBQUs7SUFDckMsSUFBSUEsUUFBUSxLQUFLSCx3RkFBZ0MsSUFBSUcsUUFBUSxLQUFLRiw0RkFBb0MsRUFBRTtNQUN0RyxPQUFPLDRCQUE0QjtJQUNyQztJQUNBLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFFRCxNQUFNc0UsdUJBQXVCLEdBQUlwRSxRQUFRLElBQUs7SUFDNUMsSUFBSUEsUUFBUSxLQUFLSCx3RkFBZ0MsRUFBRTtNQUNqRCxPQUFPLDRCQUE0QjtJQUNyQztJQUNBLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFFRGdDLHVEQUFTLENBQUMsTUFBTTtJQUNkRixRQUFRLENBQUMwQyxtRUFBVyxDQUFDNUMsTUFBTSxDQUFDdUIsUUFBUSxDQUFDLENBQUM7RUFDeEMsQ0FBQyxFQUFFLENBQUN2QixNQUFNLENBQUN1QixRQUFRLENBQUMsQ0FBQztFQUVyQixNQUFNc0IsWUFBWSxHQUFHN0MsTUFBTSxDQUFDdUIsUUFBUSxDQUFDdUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVc7RUFDN0QsTUFBTUMsZUFBZSxHQUFHRixZQUFZLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O0VBRWxEO0VBQ0E7O0VBRUEsT0FDRSxNQUFDLDRDQUFLLENBQUMsUUFBUSxRQUNiLE1BQUMsb0RBQVcsT0FBRSxFQUNkO0lBQUssU0FBUyxFQUFDO0VBQW9CLEdBR2pDLE1BQUMsOERBQWdCO0lBQUMsU0FBUyxFQUFDO0VBQTJCLEdBQ3ZEO0lBQUssS0FBSyxFQUFFO01BQUNDLE1BQU0sRUFBRTtJQUFvQjtFQUFFLEdBQ3ZDLE1BQUMsMkNBQU07SUFBQyxTQUFTLEVBQUMsdUJBQXVCO0lBQUMsS0FBSyxFQUFFO01BQUNDLFVBQVUsRUFBRSxTQUFTO01BQUVDLE1BQU0sRUFBRTtJQUFNLENBQUU7SUFBQyxRQUFRLEVBQUM7RUFBUSxHQUFDLGVBRTVHLENBQVMsQ0FDTCxFQUNOLE1BQUMseUNBQUk7SUFDTCxLQUFLLEVBQUU7TUFBQ0QsVUFBVSxFQUFFO0lBQVMsQ0FBRTtJQUM3QixlQUFlLEVBQUUsQ0FBQ0gsZUFBZSxDQUFFO0lBQ25DLFlBQVksRUFBRSxDQUFDRixZQUFZLENBQUU7SUFDN0IsS0FBSyxFQUFFL0MsU0FBUyxLQUFLc0QsdUVBQWUsR0FBRyxNQUFNLEdBQUcsTUFBTztJQUN2RCxJQUFJLEVBQUM7RUFBUSxHQUliLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUMsR0FBRyxFQUFDO0VBQVcsR0FDeEIsTUFBQyxnREFBSTtJQUFDLElBQUksRUFBQztFQUFZLEdBQ3JCLGlCQUFHO0lBQUcsU0FBUyxFQUFDO0VBQW1CLEVBQUUsc0JBQU0sV0FBUyxDQUFPLENBQUksQ0FDMUQsQ0FDRyxFQUdaLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUMsR0FBRyxFQUFDO0VBQWlCLEdBQzlCLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUM7RUFBa0IsR0FDM0IsaUJBQUc7SUFBRyxTQUFTLEVBQUM7RUFBbUIsRUFBRSxzQkFBTSxpQkFBZSxDQUFPLENBQUksQ0FDaEUsQ0FDRyxFQUdaLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUMsR0FBRyxFQUFDO0VBQU8sR0FDcEIsTUFBQyxnREFBSTtJQUFDLElBQUksRUFBQztFQUFRLEdBQ2pCLGlCQUFHO0lBQUcsU0FBUyxFQUFDO0VBQW1CLEVBQUUsc0JBQU0sUUFBTSxDQUFPLENBQUksQ0FDdkQsQ0FDRyxFQUdaLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUMsR0FBRyxFQUFDO0VBQU8sR0FDcEIsTUFBQyxnREFBSTtJQUFDLElBQUksRUFBQztFQUFRLEdBQ2pCLGlCQUFHO0lBQUcsU0FBUyxFQUFDO0VBQW1CLEVBQUUsc0JBQU0sUUFBTSxDQUFPLENBQUksQ0FDdkQsQ0FDRyxDQUNQLENBQ1UsRUFDbkI7SUFBSyxTQUFTLEVBQUcsNEJBQTJCVixnQkFBZ0IsQ0FBQ25FLFFBQVEsQ0FBRTtFQUFFLEdBQ3ZFLE1BQUMsb0RBQVcsT0FBRSxDQUVWLENBQ0YsQ0FDUztBQUVyQixDQUFDO0FBRURrRSxjQUFjLENBQUNZLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDZFosNkVBQWMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHSDtBQUMyQjtBQUN4QjtBQUVtRDtBQVF2QztBQUd6QyxNQUFNYSxXQUFXLEdBQUcsTUFBTTtFQUN4QixNQUFNeEQsU0FBUyxHQUFHckIsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNvQixTQUFTLENBQUM7RUFDakUsTUFBTXRCLEtBQUssR0FBR0MsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNGLEtBQUssQ0FBQztFQUN6RCxNQUFNK0UsWUFBWSxHQUFHOUUsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUM2RSxZQUFZLENBQUM7RUFDdkUsTUFBTXJELFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUU5QixJQUFJNUIsUUFBUSxHQUFHRSwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ0gsUUFBUSxDQUFDO0VBQzdELElBQUlDLEtBQUssR0FBR0csZ0VBQVEsSUFBSUosUUFBUSxLQUFLTix1RUFBZSxFQUFFO0lBQ3BETSxRQUFRLEdBQUdMLHdFQUFnQjtFQUM3QjtFQUNBLE9BQ0U7SUFBSyxTQUFTLEVBQUM7RUFBd0IsR0FDbkNLLFFBQVEsS0FBS04sdUVBQWUsSUFBSU0sUUFBUSxLQUFLSiw4RUFBc0IsR0FBSTtJQUFLLFNBQVMsRUFBQztFQUFZLEdBQ2xHO0lBQ0UsU0FBUyxFQUFHLHlCQUF3QkksUUFBUSxLQUFLSiw4RUFBc0IsR0FBRyxhQUFhLEdBQUcsV0FBWSxJQUFHMkIsU0FBUyxLQUFLc0QsdUVBQWUsR0FBRyxlQUFlLEdBQUcsRUFBRyxFQUFFO0lBQ2hLLE9BQU8sRUFBRSxNQUFNO01BQ2IsSUFBSTdFLFFBQVEsS0FBS0wsd0VBQWdCLEVBQUU7UUFDakNnQyxRQUFRLENBQUNzRCw2RUFBc0IsQ0FBQyxDQUFDRCxZQUFZLENBQUMsQ0FBQztNQUNqRCxDQUFDLE1BQU0sSUFBSWhGLFFBQVEsS0FBS04sdUVBQWUsRUFBRTtRQUN2Q2lDLFFBQVEsQ0FBQ3VELHVFQUFnQixDQUFDdEYsOEVBQXNCLENBQUMsQ0FBQztNQUNwRCxDQUFDLE1BQU0sSUFBSUksUUFBUSxLQUFLSCx3RkFBZ0MsRUFBRTtRQUN4RDhCLFFBQVEsQ0FBQ3NELDZFQUFzQixDQUFDLENBQUNELFlBQVksQ0FBQyxDQUFDO01BQ2pELENBQUMsTUFBTTtRQUNMckQsUUFBUSxDQUFDdUQsdUVBQWdCLENBQUN4Rix1RUFBZSxDQUFDLENBQUM7TUFDN0M7SUFDRjtFQUFFLEVBQ0YsQ0FDRSxHQUFHLElBQUksRUFFYixNQUFDLGdEQUFJO0lBQUMsSUFBSSxFQUFDO0VBQUcsR0FDWjtJQUFHLFNBQVMsRUFBQztFQUFjLEdBQzFCTSxRQUFRLEtBQUtILHdGQUFnQyxJQUFJSSxLQUFLLElBQUlHLGdFQUFRLEdBQ2pFO0lBQUssR0FBRyxFQUFDLElBQUk7SUFBQyxHQUFHLEVBQUc7RUFBc0IsRUFBRSxHQUM1Q21CLFNBQVMsS0FBS3NELHVFQUFlLEdBQzNCO0lBQUssR0FBRyxFQUFDLE9BQU87SUFBQyxLQUFLLEVBQUU7TUFBQ00sUUFBUSxFQUFFO0lBQUssQ0FBRTtJQUFDLEdBQUcsRUFBRztFQUFvQixFQUFFLEdBQ3ZFO0lBQUssR0FBRyxFQUFDLE9BQU87SUFBQyxHQUFHLEVBQUc7RUFBb0IsRUFBRSxDQUM3QyxDQUNDLENBQ0g7QUFFVixDQUFDO0FBRWNKLDBFQUFXLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNXO0FBQ1U7QUFDbEI7QUFFN0IsTUFBTUssV0FBVyxHQUFHLE1BQU07RUFDeEIsTUFBTTtJQUFDL0YsUUFBUTtJQUFFQztFQUFXLENBQUMsR0FBR0MsOERBQU8sRUFBRTs7RUFFekM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxPQUFPRixRQUFRLEdBQ2I7SUFBSyxTQUFTLEVBQUMsZ0NBQWdDO0lBQUMsS0FBSyxFQUFFO01BQUNnRyxTQUFTLEVBQUU7SUFBUTtFQUFFLEdBRXpFLE1BQUMsMkNBQU07SUFBQyxHQUFHLEVBQUMsd0JBQXdCO0lBQUMsU0FBUyxFQUFDLCtCQUErQjtJQUFDLEdBQUcsRUFBQztFQUFFLEVBQUUsRUFDdkY7SUFBSyxTQUFTLEVBQUM7RUFBd0IsR0FBRWhHLFFBQVEsQ0FBQ1YsSUFBSSxDQUFPLEVBQzdEO0lBQUssU0FBUyxFQUFDO0VBQXNDLEdBQUMsa0JBQWdCLENBQU0sRUFFOUU7SUFBSyxTQUFTLEVBQUM7RUFBUyxHQUN0QjtJQUFRLFNBQVMsRUFBQyxlQUFlO0lBQUMsS0FBSyxFQUFFO01BQUMyRyxXQUFXLEVBQUU7SUFBTTtFQUFFLEdBQUMsTUFBQyxnREFBSTtJQUFDLElBQUksRUFBQztFQUFXLEdBQUc7SUFBSyxLQUFLLEVBQUU7TUFBQ3JGLEtBQUssRUFBRTtJQUFNLENBQUU7SUFBQyxHQUFHLEVBQUM7RUFBc0IsRUFBRSxDQUFPLENBQVMsRUFDbEs7SUFBUSxTQUFTLEVBQUMsZUFBZTtJQUFDLE9BQU8sRUFBRSxNQUFNWCxXQUFXO0VBQUcsR0FBQztJQUFLLEtBQUssRUFBRTtNQUFDVyxLQUFLLEVBQUU7SUFBTSxDQUFFO0lBQUMsR0FBRyxFQUFDO0VBQW9CLEVBQUUsQ0FBUyxDQUM1SCxDQUNGLEdBQ0osSUFBSTtBQUNWLENBQUM7QUFFY21GLDBFQUFXLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQzJCO0FBQ2pCO0FBRVU7QUFDZ0I7QUFTckI7QUFFekMsTUFBTTtFQUFDRztBQUFLLENBQUMsR0FBR3RFLDJDQUFNO0FBRXRCLE1BQU11RSxPQUFPLEdBQUcsTUFBTTtFQUNwQixNQUFNakUsU0FBUyxHQUFHckIsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNvQixTQUFTLENBQUM7RUFDakUsTUFBTXlELFlBQVksR0FBRzlFLCtEQUFXLENBQUMsQ0FBQztJQUFDQztFQUFRLENBQUMsS0FBS0EsUUFBUSxDQUFDNkUsWUFBWSxDQUFDO0VBQ3ZFLE1BQU0vRSxLQUFLLEdBQUdDLCtEQUFXLENBQUMsQ0FBQztJQUFDQztFQUFRLENBQUMsS0FBS0EsUUFBUSxDQUFDRixLQUFLLENBQUM7RUFDekQsTUFBTUQsUUFBUSxHQUFHRSwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ0gsUUFBUSxDQUFDO0VBRS9ELE1BQU0yQixRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFFOUIsTUFBTTZELG9CQUFvQixHQUFHLE1BQU07SUFDakM5RCxRQUFRLENBQUNzRCw2RUFBc0IsQ0FBQyxDQUFDRCxZQUFZLENBQUMsQ0FBQztFQUNqRCxDQUFDO0VBRUQsSUFBSVUsV0FBVyxHQUFHLHNCQUFzQjtFQUV4QyxJQUFJMUYsUUFBUSxLQUFLTix1RUFBZSxFQUFFO0lBQ2hDZ0csV0FBVyxHQUFHLEVBQUU7RUFDbEIsQ0FBQyxNQUFNLElBQUkxRixRQUFRLEtBQUtILHdGQUFnQyxFQUFFO0lBQ3hENkYsV0FBVyxHQUFHLHdDQUF3QztFQUN4RCxDQUFDLE1BQU0sSUFBSTFGLFFBQVEsS0FBS0YsNEZBQW9DLEVBQUU7SUFDNUQ0RixXQUFXLEdBQUcsbUJBQW1CO0VBQ25DLENBQUMsTUFBTSxJQUFJMUYsUUFBUSxLQUFLSiw4RUFBc0IsRUFBRTtJQUM5QzhGLFdBQVcsR0FBRyxpQkFBaUI7RUFDakMsQ0FBQyxNQUFNLElBQUkxRixRQUFRLEtBQUtMLHdFQUFnQixFQUFFO0lBQ3hDK0YsV0FBVyxHQUFHLHNCQUFzQjtFQUN0QztFQUNBLElBQUksQ0FBQzFGLFFBQVEsS0FBS04sdUVBQWUsSUFBSU0sUUFBUSxLQUFLSiw4RUFBc0IsSUFDbkVJLFFBQVEsS0FBS0YsNEZBQW9DLEtBQUtHLEtBQUssR0FBR0csZ0VBQVEsRUFBRTtJQUMzRXNGLFdBQVcsR0FBRyxzQkFBc0I7RUFDdEM7RUFFQSxPQUNFLE1BQUMsS0FBSztJQUNKLFNBQVMsRUFBRyxrQkFBaUJBLFdBQVksSUFBR25FLFNBQVMsS0FBS3NELHVFQUFlLEdBQUcsc0JBQXNCLEdBQUcsSUFBSyxFQUFFO0lBQzVHLE9BQU8sRUFBRSxJQUFLO0lBQ2QsU0FBUyxFQUFHNUUsS0FBSyxHQUFHRyxnRUFBUSxHQUFHLEtBQUssR0FBR0osUUFBUSxLQUFLSiw4RUFBc0IsSUFBSUksUUFBUSxLQUFLSCx3RkFBa0M7SUFDN0gsS0FBSyxFQUFFMEIsU0FBUyxLQUFLc0QsdUVBQWUsR0FBRyxNQUFNLEdBQUcsTUFBTztJQUN2RCxXQUFXO0VBQUEsR0FFVDdFLFFBQVEsS0FBS0wsd0VBQWdCLElBQUlNLEtBQUssR0FBR0csZ0VBQVEsR0FDL0MsTUFBQywyQ0FBTTtJQUNMLFNBQVMsRUFBRyxxQkFBb0JtQixTQUFTLEtBQUtzRCx1RUFBZSxHQUFHLHdCQUF3QixHQUFHLElBQUssRUFBRTtJQUNsRyxTQUFTLEVBQUMsTUFBTTtJQUNoQixRQUFRLEVBQUUsS0FBTTtJQUNoQixPQUFPLEVBQUVZLG9CQUFxQjtJQUM5QixPQUFPLEVBQUVUO0VBQWEsR0FDdEIsTUFBQyx1REFBYyxPQUFFLENBQ1YsR0FDVCxNQUFDLHVEQUFjLE9BQUUsQ0FFZjtBQUVaLENBQUM7QUFDY1Esc0VBQU8sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFZ0I7QUFDd0M7QUFDekM7QUFDZ0I7QUFDWTtBQUV0QjtBQUNXO0FBQ0Y7QUFDYztBQUNFO0FBQ2E7QUFFckI7QUFDZjtBQUNoQjtBQUM0QjtBQUV6RCxNQUFNO0VBQUNHO0FBQU0sQ0FBQyxHQUFHMUUsMkNBQU07QUFFdkIsTUFBTTJFLE1BQU0sR0FBR0MsMkNBQU0sQ0FBQ0QsTUFBTTtBQUM1QixNQUFNRSxJQUFJLEdBQ1IsTUFBQyx5Q0FBSTtFQUFDLE9BQU8sRUFBRUM7QUFBZ0IsR0FDN0IsTUFBQyx5Q0FBSSxDQUFDLElBQUk7RUFBQyxHQUFHLEVBQUM7QUFBRyxHQUFDLFVBQVEsQ0FBWSxFQUN2QyxNQUFDLHlDQUFJLENBQUMsSUFBSTtFQUFDLEdBQUcsRUFBQztBQUFHLEdBQUMsTUFBSSxDQUFZLEVBQ25DLE1BQUMseUNBQUksQ0FBQyxJQUFJO0VBQUMsR0FBRyxFQUFDO0FBQUcsR0FBQyxNQUFJLENBQVksQ0FFdEM7QUFFRCxTQUFTQSxlQUFlLEdBQUc7RUFDekJuSCw0Q0FBTyxDQUFDb0gsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0FBQ3JDO0FBRUEsU0FBU0MsWUFBWSxDQUFDOUcsS0FBSyxFQUFFLENBQzdCO0FBRUEsTUFBTStHLFdBQVcsR0FBRyxNQUFNO0VBQ3hCLE1BQU05QyxNQUFNLEdBQUdsRCwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ2lELE1BQU0sQ0FBQztFQUMzRCxNQUFNbkQsS0FBSyxHQUFHQywrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDO0VBQ3pELE1BQU0rRSxZQUFZLEdBQUc5RSwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQzZFLFlBQVksQ0FBQztFQUV2RSxNQUFNO0lBQUEsR0FBQ21CLFVBQVU7SUFBQSxHQUFFQztFQUFhLElBQUlDLHNEQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2hELE1BQU0xRSxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFFOUIsTUFBTTBFLFlBQVksR0FBRyxNQUNuQixNQUFDLDhEQUFnQjtJQUFDLFNBQVMsRUFBQztFQUF3QixHQUNsRDtJQUFJLFNBQVMsRUFBQztFQUFnQixHQUMzQkMscURBQVksQ0FBQ2xJLEdBQUcsQ0FBQ21JLFFBQVEsSUFDeEI7SUFBSSxTQUFTLEVBQUMscUJBQXFCO0lBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsUUFBUSxDQUFFO0lBQUMsT0FBTyxFQUFHRyxDQUFDLElBQzVFaEYsUUFBUSxDQUFDaUYsc0VBQWMsQ0FBQ0osUUFBUSxDQUFDO0VBQ2xDLEdBQ0M7SUFBRyxTQUFTLEVBQUcsNkJBQTRCQSxRQUFRLENBQUN6SSxJQUFLO0VBQUUsRUFBRSxFQUM3RDtJQUFNLFNBQVMsRUFBQztFQUFrQixHQUFFeUksUUFBUSxDQUFDN0gsSUFBSSxDQUFRLENBQ3RELENBQ04sQ0FDRSxDQUNhO0VBRXRCLE1BQU1rSSxvQkFBb0IsR0FBSUMsR0FBRyxJQUFLO0lBQ3BDVixhQUFhLENBQUNVLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDNUgsS0FBSyxDQUFDO0VBQ2pDLENBQUM7RUFFRCxPQUNFO0lBQUssU0FBUyxFQUFDO0VBQTJFLEdBRXZGYyxLQUFLLElBQUlHLGlFQUFRLElBQ2hCO0lBQUssU0FBUyxFQUFDO0VBQXlELEdBQ3RFO0lBQUssU0FBUyxFQUFDO0VBQWMsR0FDM0I7SUFBSyxTQUFTLEVBQUM7RUFBK0IsR0FDNUMsTUFBQyx1REFBYSxPQUFFLEVBQ2hCO0lBQUksU0FBUyxFQUFDO0VBQW9DLEdBQ2hELGtCQUFJO0lBQU0sU0FBUyxFQUFDO0VBQXVCLEdBQUM7SUFBRyxTQUFTLEVBQUM7RUFBc0IsRUFBRSxDQUFPLENBQUssRUFDN0Ysa0JBQUk7SUFBTSxTQUFTLEVBQUM7RUFBdUIsR0FBQztJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFFLENBQU8sQ0FBSyxFQUMxRixrQkFBSTtJQUFNLFNBQVMsRUFBQztFQUF1QixHQUFDO0lBQUcsU0FBUyxFQUFDO0VBQW9CLEVBQUUsQ0FBTyxDQUFLLENBQ3hGLENBQ0QsQ0FDRixDQUVULEVBRUQ7SUFBSyxTQUFTLEVBQUM7RUFBMEIsR0FDdkM7SUFBSyxTQUFTLEVBQUM7RUFBYyxHQUMzQjtJQUFLLFNBQVMsRUFBQztFQUErQixHQUM1QztJQUFLLFNBQVMsRUFBQztFQUErQixHQUM1QztJQUFHLFNBQVMsRUFBQztFQUF5QixFQUFFLEVBQ3hDO0lBQUcsU0FBUyxFQUFDO0VBQTBCLEdBQUMsTUFBQywyREFBWTtJQUFDLEVBQUUsRUFBQztFQUFlLEVBQUUsQ0FBSSxDQUMxRSxFQUNOO0lBQUksU0FBUyxFQUFDO0VBQWUsR0FDM0Isa0JBQUksTUFBQywyREFBWTtJQUFDLEVBQUUsRUFBQztFQUFvQixFQUFFLENBQUssRUFDaEQsa0JBQUksTUFBQywyREFBWTtJQUFDLEVBQUUsRUFBQztFQUFxQixFQUFFLENBQUssQ0FDOUMsQ0FDRCxDQUNGLENBQ0YsRUFFTixNQUFDLE1BQU07SUFDTCxTQUFTLEVBQUM7RUFBMkIsR0FDckM7SUFBSyxTQUFTLEVBQUM7RUFBYyxHQUMzQjtJQUFLLFNBQVMsRUFBQztFQUFnQyxHQUU3QztJQUFLLFNBQVMsRUFBQztFQUErQyxHQUM1RDtJQUFHLFNBQVMsRUFBQyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFFLE1BQU07TUFDYixJQUFJSCxLQUFLLElBQUlHLGlFQUFRLEVBQUU7UUFDckJ1QixRQUFRLENBQUNzRCw4RUFBc0IsQ0FBQyxDQUFDRCxZQUFZLENBQUMsQ0FBQztNQUNqRDtJQUNGO0VBQUUsRUFDSCxDQUNFLEVBQ04sTUFBQyxpREFBSTtJQUFDLElBQUksRUFBQztFQUFHLEdBQ1o7SUFBSyxHQUFHLEVBQUMsRUFBRTtJQUFDLFNBQVMsRUFBQyxvRUFBb0U7SUFDckYsR0FBRyxFQUFHO0VBQXNCLEVBQUUsQ0FBTyxFQUM1QyxNQUFDLGlEQUFJO0lBQUMsSUFBSSxFQUFDO0VBQUcsR0FDWjtJQUFLLEdBQUcsRUFBQyxFQUFFO0lBQUMsU0FBUyxFQUFDLHVEQUF1RDtJQUFDLEdBQUcsRUFBRztFQUFvQixFQUFFLENBQU8sRUFDbkg7SUFBSyxTQUFTLEVBQUM7RUFBeUMsR0FDdEQsTUFBQyw2REFBUztJQUFDLFNBQVMsRUFBQywwQkFBMEI7SUFBQyxXQUFXLEVBQUMsa0JBQWtCO0lBQ25FLFFBQVEsRUFBRTZCLG9CQUFxQjtJQUMvQixLQUFLLEVBQUVWO0VBQVcsRUFBRSxFQUMvQixNQUFDLDJDQUFNO0lBQUMsWUFBWSxFQUFDLE1BQU07SUFBQyxLQUFLLEVBQUU7TUFBQ2xHLEtBQUssRUFBRTtJQUFHLENBQUU7SUFBQyxRQUFRLEVBQUVnRztFQUFhLEdBQ3RFLE1BQUMsTUFBTTtJQUFDLEtBQUssRUFBQztFQUFNLEdBQUMsVUFBUSxDQUFTLEVBQ3RDLE1BQUMsTUFBTTtJQUFDLEtBQUssRUFBQztFQUFNLEdBQUMsTUFBSSxDQUFTLEVBQ2xDLE1BQUMsTUFBTTtJQUFDLEtBQUssRUFBQztFQUFVLEdBQUMsT0FBSyxDQUFTLENBQ2hDLENBQ0wsRUFFTjtJQUFJLFNBQVMsRUFBQztFQUFvQyxHQUNoRDtJQUFJLFNBQVMsRUFBQztFQUEyRCxHQUN2RSxNQUFDLDRDQUFPO0lBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCO0lBQUMsU0FBUyxFQUFDLGFBQWE7SUFBQyxPQUFPLEVBQy9FO01BQUssU0FBUyxFQUFDO0lBQVcsR0FBQyxNQUFDLDZDQUFRO01BQUMsT0FBTyxFQUFFSDtJQUFLLEdBQ2pELE1BQUMsMkNBQU0sUUFBQyxXQUNHLFFBQUMsd0RBQUk7TUFBQyxJQUFJLEVBQUM7SUFBTSxFQUFFLENBQ3JCLENBQ0EsRUFDVCxNQUFDLDZEQUFTO01BQUMsU0FBUyxFQUFDLHVCQUF1QjtNQUNqQyxXQUFXLEVBQUMsa0JBQWtCO01BQzlCLFFBQVEsRUFBRWUsb0JBQXFCO01BQy9CLEtBQUssRUFBRVY7SUFBVyxFQUFFLENBQ2xDO0lBQUMsT0FBTyxFQUFDO0VBQU8sR0FDZjtJQUFNLFNBQVMsRUFBQztFQUF1QixHQUFDO0lBQUcsU0FBUyxFQUFDO0VBQXNCLEVBQUUsQ0FBTyxDQUM1RSxDQUNQLEVBRUw7SUFBSSxTQUFTLEVBQUM7RUFBVyxHQUN2QixNQUFDLDRDQUFPO0lBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCO0lBQUMsU0FBUyxFQUFDLGFBQWE7SUFBQyxPQUFPLEVBQUUsTUFBQyxtRUFBZSxPQUFHO0lBQzdGLE9BQU8sRUFBQztFQUFPLEdBQ3RCO0lBQU0sU0FBUyxFQUFDO0VBQXVCLEdBQUM7SUFBRyxTQUFTLEVBQUM7RUFBd0IsRUFBRSxDQUFPLENBQzlFLENBQ1AsRUFFTDtJQUFJLFNBQVMsRUFBQztFQUFRLEdBQ3BCLE1BQUMsNENBQU87SUFBQyxnQkFBZ0IsRUFBQyx1QkFBdUI7SUFBQyxTQUFTLEVBQUMsYUFBYTtJQUNoRSxPQUFPLEVBQUUsTUFBQyxvRUFBZ0IsT0FBRztJQUFDLE9BQU8sRUFBQztFQUFPLEdBQ3REO0lBQU0sU0FBUyxFQUFDO0VBQXFDLEdBQ3JEO0lBQUcsU0FBUyxFQUFDO0VBQW9CLEVBQUUsRUFDbkM7SUFBTSxTQUFTLEVBQUM7RUFBNEMsRUFBRSxDQUN2RCxDQUNHLENBQ1AsRUFDTDtJQUFJLFNBQVMsRUFBQztFQUFhLEdBQ3pCLE1BQUMsNENBQU87SUFBQyxnQkFBZ0IsRUFBQyx1QkFBdUI7SUFBQyxTQUFTLEVBQUMsYUFBYTtJQUNoRSxPQUFPLEVBQUVHLFlBQVksRUFBRztJQUFDLE9BQU8sRUFBQztFQUFPLEdBQ25EO0lBQU0sU0FBUyxFQUFDO0VBQThDLEdBQUM7SUFDN0QsU0FBUyxFQUFHLHFCQUFvQmxELE1BQU0sQ0FBQ3JGLElBQUs7RUFBRSxFQUFFLENBQzNDLENBQ0ssQ0FDUCxFQUNMO0lBQUksU0FBUyxFQUFDO0VBQWEsR0FBQyxNQUFDLDREQUFRLE9BQUUsQ0FBSyxDQUN6QyxDQUNELENBQ0YsQ0FDQyxDQUNMO0FBRVYsQ0FBQztBQUdjbUksMEVBQVcsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMWTtBQUN3QztBQUN6QztBQUNnQjtBQUNZO0FBQ3RCO0FBQ1c7QUFDRjtBQUNjO0FBQ0U7QUFDYTtBQUNwQztBQUNoQjtBQUM0QjtBQUNHO0FBRTVELE1BQU07RUFBQ1A7QUFBTSxDQUFDLEdBQUcxRSwyQ0FBTTtBQUV2QixNQUFNMkUsTUFBTSxHQUFHQywyQ0FBTSxDQUFDRCxNQUFNO0FBQzVCLE1BQU1FLElBQUksR0FDUixNQUFDLHlDQUFJO0VBQUMsT0FBTyxFQUFFQztBQUFnQixHQUM3QixNQUFDLHlDQUFJLENBQUMsSUFBSTtFQUFDLEdBQUcsRUFBQztBQUFHLEdBQUMsVUFBUSxDQUFZLEVBQ3ZDLE1BQUMseUNBQUksQ0FBQyxJQUFJO0VBQUMsR0FBRyxFQUFDO0FBQUcsR0FBQyxNQUFJLENBQVksRUFDbkMsTUFBQyx5Q0FBSSxDQUFDLElBQUk7RUFBQyxHQUFHLEVBQUM7QUFBRyxHQUFDLE9BQUssQ0FBWSxDQUV2QztBQUVELFNBQVNBLGVBQWUsQ0FBQ1ksQ0FBQyxFQUFFO0VBQzFCL0gsNENBQU8sQ0FBQ29ILElBQUksQ0FBQyxxQkFBcUIsQ0FBQztBQUNyQztBQUVBLFNBQVNDLFlBQVksQ0FBQzlHLEtBQUssRUFBRSxDQUM3QjtBQUVBLE1BQU02SCxXQUFXLEdBQUcsTUFBTTtFQUN4QixNQUFNNUQsTUFBTSxHQUFHbEQsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNpRCxNQUFNLENBQUM7RUFDM0QsTUFBTW5ELEtBQUssR0FBR0MsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNGLEtBQUssQ0FBQztFQUN6RCxNQUFNK0UsWUFBWSxHQUFHOUUsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUM2RSxZQUFZLENBQUM7RUFFdkUsTUFBTTtJQUFBLEdBQUNtQixVQUFVO0lBQUEsR0FBRUM7RUFBYSxJQUFJQyxzREFBUSxDQUFDLEVBQUUsQ0FBQztFQUNoRCxNQUFNMUUsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBRTlCLE1BQU0wRSxZQUFZLEdBQUcsTUFDbkIsTUFBQyw4REFBZ0I7SUFBQyxTQUFTLEVBQUM7RUFBd0IsR0FDbEQ7SUFBSSxTQUFTLEVBQUM7RUFBZ0IsR0FDM0JDLHFEQUFZLENBQUNsSSxHQUFHLENBQUNtSSxRQUFRLElBQ3hCO0lBQUksU0FBUyxFQUFDLHFCQUFxQjtJQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNGLFFBQVEsQ0FBRTtJQUFDLE9BQU8sRUFBR0csQ0FBQyxJQUM1RWhGLFFBQVEsQ0FBQ2lGLHNFQUFjLENBQUNKLFFBQVEsQ0FBQztFQUNsQyxHQUNDO0lBQUcsU0FBUyxFQUFHLDZCQUE0QkEsUUFBUSxDQUFDekksSUFBSztFQUFFLEVBQUUsRUFDN0Q7SUFBTSxTQUFTLEVBQUM7RUFBa0IsR0FBRXlJLFFBQVEsQ0FBQzdILElBQUksQ0FBUSxDQUN0RCxDQUNOLENBQ0UsQ0FDYTtFQUV0QixNQUFNa0ksb0JBQW9CLEdBQUlDLEdBQUcsSUFBSztJQUNwQ1YsYUFBYSxDQUFDVSxHQUFHLENBQUNDLE1BQU0sQ0FBQzVILEtBQUssQ0FBQztFQUNqQyxDQUFDO0VBRUQsT0FDRTtJQUFLLFNBQVMsRUFBQztFQUEyRSxHQUN4RjtJQUFLLFNBQVMsRUFBQztFQUEwQixHQUN2QztJQUFLLFNBQVMsRUFBQztFQUFjLEdBQzNCO0lBQUssU0FBUyxFQUFDO0VBQStCLEdBQzVDO0lBQUssU0FBUyxFQUFDO0VBQStCLEdBQzVDO0lBQUcsU0FBUyxFQUFDO0VBQXlCLEVBQUUsRUFDeEM7SUFBRyxTQUFTLEVBQUM7RUFBMEIsR0FBQyxNQUFDLDJEQUFZO0lBQUMsRUFBRSxFQUFDO0VBQWUsRUFBRSxDQUFJLENBQzFFLEVBQ047SUFBSSxTQUFTLEVBQUM7RUFBZSxHQUMzQixrQkFBSSxPQUFLLENBQUssRUFDZCxrQkFBSSxRQUFNLENBQUssQ0FDWixDQUNELENBQ0YsQ0FDRixFQUdOLE1BQUMsTUFBTTtJQUNMLFNBQVMsRUFBQztFQUEyQixHQUNyQztJQUFLLFNBQVMsRUFBQztFQUFjLEdBQzNCO0lBQUssU0FBUyxFQUFDO0VBQWdDLEdBRTdDO0lBQUssU0FBUyxFQUFDO0VBQStDLEdBQzVEO0lBQUcsU0FBUyxFQUFDLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUUsTUFBTTtNQUNid0MsUUFBUSxDQUFDc0QsOEVBQXNCLENBQUMsQ0FBQ0QsWUFBWSxDQUFDLENBQUM7SUFDakQ7RUFBRSxFQUNILENBQ0UsRUFDTixNQUFDLGlEQUFJO0lBQUMsSUFBSSxFQUFDO0VBQUcsR0FDWjtJQUFLLEdBQUcsRUFBQyxFQUFFO0lBQUMsU0FBUyxFQUFDLG9FQUFvRTtJQUNyRixHQUFHLEVBQUc7RUFBc0IsRUFBRSxDQUFPLEVBQzVDLE1BQUMsaURBQUk7SUFBQyxJQUFJLEVBQUM7RUFBRyxHQUNaO0lBQUssR0FBRyxFQUFDLEVBQUU7SUFBQyxTQUFTLEVBQUMsdURBQXVEO0lBQUMsR0FBRyxFQUFHO0VBQW9CLEVBQUUsQ0FBTyxFQUNuSDtJQUFLLFNBQVMsRUFBQztFQUF5QyxHQUN0RCxNQUFDLDZEQUFTO0lBQUMsU0FBUyxFQUFDLDBCQUEwQjtJQUNwQyxXQUFXLEVBQUMsa0JBQWtCO0lBQzlCLFFBQVEsRUFBRTZCLG9CQUFxQjtJQUMvQixLQUFLLEVBQUVWO0VBQVcsRUFBRSxFQUUvQixNQUFDLDJDQUFNO0lBQUMsWUFBWSxFQUFDLE1BQU07SUFBQyxLQUFLLEVBQUU7TUFBQ2xHLEtBQUssRUFBRTtJQUFHLENBQUU7SUFBQyxRQUFRLEVBQUVnRztFQUFhLEdBQ3RFLE1BQUMsTUFBTTtJQUFDLEtBQUssRUFBQztFQUFNLEdBQUMsVUFBUSxDQUFTLEVBQ3RDLE1BQUMsTUFBTTtJQUFDLEtBQUssRUFBQztFQUFNLEdBQUMsTUFBSSxDQUFTLEVBQ2xDLE1BQUMsTUFBTTtJQUFDLEtBQUssRUFBQztFQUFVLEdBQUMsT0FBSyxDQUFTLENBQ2hDLENBQ0wsRUFFTjtJQUFJLFNBQVMsRUFBQztFQUFvQyxHQUNoRDtJQUFJLFNBQVMsRUFBQztFQUEyRCxHQUN2RSxNQUFDLDRDQUFPO0lBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCO0lBQUMsU0FBUyxFQUFDLGFBQWE7SUFBQyxPQUFPLEVBQy9FO01BQUssU0FBUyxFQUFDO0lBQVcsR0FBQyxNQUFDLDZDQUFRO01BQUMsT0FBTyxFQUFFSDtJQUFLLEdBQ2pELE1BQUMsMkNBQU0sUUFBQyxXQUNHLFFBQUMsd0RBQUk7TUFBQyxJQUFJLEVBQUM7SUFBTSxFQUFFLENBQ3JCLENBQ0EsRUFDVCxNQUFDLDZEQUFTO01BQUMsU0FBUyxFQUFDLHVCQUF1QjtNQUNqQyxXQUFXLEVBQUMsa0JBQWtCO01BQzlCLFFBQVEsRUFBRWUsb0JBQXFCO01BQy9CLEtBQUssRUFBRVY7SUFBVyxFQUFFLENBQ2xDO0lBQUMsT0FBTyxFQUFDO0VBQU8sR0FDZjtJQUFNLFNBQVMsRUFBQztFQUF1QixHQUFDO0lBQUcsU0FBUyxFQUFDO0VBQXNCLEVBQUUsQ0FBTyxDQUM1RSxDQUNQLEVBRUw7SUFBSSxTQUFTLEVBQUM7RUFBVyxHQUN2QixNQUFDLDRDQUFPO0lBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCO0lBQUMsU0FBUyxFQUFDLGFBQWE7SUFBQyxPQUFPLEVBQUUsTUFBQyxtRUFBZSxPQUFHO0lBQzdGLE9BQU8sRUFBQztFQUFPLEdBQ3RCO0lBQU0sU0FBUyxFQUFDO0VBQXVCLEdBQUM7SUFBRyxTQUFTLEVBQUM7RUFBd0IsRUFBRSxDQUFPLENBQzlFLENBQ1AsRUFFTDtJQUFJLFNBQVMsRUFBQztFQUFRLEdBQ3BCLE1BQUMsNENBQU87SUFBQyxnQkFBZ0IsRUFBQyx1QkFBdUI7SUFBQyxTQUFTLEVBQUMsYUFBYTtJQUNoRSxPQUFPLEVBQUUsTUFBQyxvRUFBZ0IsT0FBRztJQUFDLE9BQU8sRUFBQztFQUFPLEdBQ3REO0lBQU0sU0FBUyxFQUFDO0VBQXFDLEdBQ3JEO0lBQUcsU0FBUyxFQUFDO0VBQW9CLEVBQUUsRUFDbkM7SUFBTSxTQUFTLEVBQUM7RUFBNEMsRUFBRSxDQUN2RCxDQUNHLENBQ1AsRUFDTDtJQUFJLFNBQVMsRUFBQztFQUFhLEdBQ3pCLE1BQUMsNENBQU87SUFBQyxnQkFBZ0IsRUFBQyx1QkFBdUI7SUFBQyxTQUFTLEVBQUMsYUFBYTtJQUNoRSxPQUFPLEVBQUVHLFlBQVksRUFBRztJQUFDLE9BQU8sRUFBQztFQUFPLEdBQ25EO0lBQU0sU0FBUyxFQUFDO0VBQThDLEdBQUM7SUFDN0QsU0FBUyxFQUFHLHFCQUFvQmxELE1BQU0sQ0FBQ3JGLElBQUs7RUFBRSxFQUFFLENBQzNDLENBQ0ssQ0FDUCxFQUNMO0lBQUksU0FBUyxFQUFDO0VBQWEsR0FBQyxNQUFDLDREQUFRLE9BQUUsQ0FBSyxDQUN6QyxDQUNELENBQ0YsQ0FDQyxFQUVSa0MsS0FBSyxJQUFJRyxpRUFBUSxJQUNoQjtJQUFLLFNBQVMsRUFBQztFQUF5RCxHQUN0RTtJQUFLLFNBQVMsRUFBQztFQUFjLEdBQzNCO0lBQUssU0FBUyxFQUFDO0VBQStCLEdBQzVDLE1BQUMsdURBQWEsT0FBRSxFQUNoQjtJQUFJLFNBQVMsRUFBQztFQUFvQyxHQUNoRCxrQkFBSTtJQUFNLFNBQVMsRUFBQztFQUF1QixHQUFDO0lBQUcsU0FBUyxFQUFDO0VBQXNCLEVBQUUsQ0FBTyxDQUFLLEVBQzdGLGtCQUFJO0lBQU0sU0FBUyxFQUFDO0VBQXVCLEdBQUM7SUFBRyxTQUFTLEVBQUM7RUFBbUIsRUFBRSxDQUFPLENBQUssRUFDMUYsa0JBQUk7SUFBTSxTQUFTLEVBQUM7RUFBdUIsR0FBQztJQUFHLFNBQVMsRUFBQztFQUFvQixFQUFFLENBQU8sQ0FBSyxDQUN4RixDQUNELENBQ0YsQ0FFVCxDQUVHO0FBRVYsQ0FBQztBQUVjNEcsMEVBQVcsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlLWTtBQUN3QztBQUN6QztBQUNnQjtBQUNZO0FBQ3RCO0FBQ1c7QUFDRjtBQUNjO0FBQ0U7QUFDdkM7QUFDZ0I7QUFDb0M7QUFDeEI7QUFDRztBQUU1RCxNQUFNO0VBQUNyQjtBQUFNLENBQUMsR0FBRzFFLDJDQUFNO0FBRXZCLE1BQU0yRSxNQUFNLEdBQUdDLDJDQUFNLENBQUNELE1BQU07QUFDNUIsTUFBTUUsSUFBSSxHQUNSLE1BQUMseUNBQUk7RUFBQyxPQUFPLEVBQUVDO0FBQWdCLEdBQzdCLE1BQUMseUNBQUksQ0FBQyxJQUFJO0VBQUMsR0FBRyxFQUFDO0FBQUcsR0FBQyxVQUFRLENBQVksRUFDdkMsTUFBQyx5Q0FBSSxDQUFDLElBQUk7RUFBQyxHQUFHLEVBQUM7QUFBRyxHQUFDLE1BQUksQ0FBWSxFQUNuQyxNQUFDLHlDQUFJLENBQUMsSUFBSTtFQUFDLEdBQUcsRUFBQztBQUFHLEdBQUMsT0FBSyxDQUFZLENBRXZDO0FBRUQsU0FBU0EsZUFBZSxDQUFDWSxDQUFDLEVBQUU7RUFDMUIvSCw0Q0FBTyxDQUFDb0gsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0FBQ3JDO0FBRUEsU0FBU0MsWUFBWSxDQUFDOUcsS0FBSyxFQUFFLENBQzdCO0FBRUEsTUFBTThILGNBQWMsR0FBRyxNQUFNO0VBQzNCLE1BQU03RCxNQUFNLEdBQUdsRCwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ2lELE1BQU0sQ0FBQztFQUMzRCxNQUFNbkQsS0FBSyxHQUFHQywrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDO0VBQ3pELE1BQU0rRSxZQUFZLEdBQUc5RSwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQzZFLFlBQVksQ0FBQztFQUV2RSxNQUFNO0lBQUEsR0FBQ21CLFVBQVU7SUFBQSxHQUFFQztFQUFhLElBQUlDLHNEQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2hELE1BQU0xRSxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFFOUIsTUFBTTBFLFlBQVksR0FBRyxNQUNuQixNQUFDLDhEQUFnQjtJQUFDLFNBQVMsRUFBQztFQUF3QixHQUNsRDtJQUFJLFNBQVMsRUFBQztFQUFnQixHQUMzQkMscURBQVksQ0FBQ2xJLEdBQUcsQ0FBQ21JLFFBQVEsSUFDeEI7SUFBSSxTQUFTLEVBQUMscUJBQXFCO0lBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsUUFBUSxDQUFFO0lBQUMsT0FBTyxFQUFHRyxDQUFDLElBQzVFaEYsUUFBUSxDQUFDaUYsc0VBQWMsQ0FBQ0osUUFBUSxDQUFDO0VBQ2xDLEdBQ0M7SUFBRyxTQUFTLEVBQUcsNkJBQTRCQSxRQUFRLENBQUN6SSxJQUFLO0VBQUUsRUFBRSxFQUM3RDtJQUFNLFNBQVMsRUFBQztFQUFrQixHQUFFeUksUUFBUSxDQUFDN0gsSUFBSSxDQUFRLENBQ3RELENBQ04sQ0FDRSxDQUNhO0VBRXRCLE1BQU1rSSxvQkFBb0IsR0FBSUMsR0FBRyxJQUFLO0lBQ3BDVixhQUFhLENBQUNVLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDNUgsS0FBSyxDQUFDO0VBQ2pDLENBQUM7RUFFRCxPQUNFO0lBQUssU0FBUyxFQUFDO0VBQWdELEdBQzdEO0lBQUssU0FBUyxFQUFDO0VBQTBCLEdBQ3ZDO0lBQUssU0FBUyxFQUFDO0VBQWMsR0FDM0I7SUFBSyxTQUFTLEVBQUM7RUFBK0IsR0FDNUM7SUFBSyxTQUFTLEVBQUM7RUFBK0IsR0FDNUM7SUFBRyxTQUFTLEVBQUM7RUFBeUIsRUFBRSxFQUN4QztJQUFHLFNBQVMsRUFBQztFQUEwQixHQUFDLE1BQUMsMkRBQVk7SUFBQyxFQUFFLEVBQUM7RUFBZSxFQUFFLENBQUksQ0FDMUUsRUFDTjtJQUFJLFNBQVMsRUFBQztFQUFlLEdBQzNCLGtCQUFJLE9BQUssQ0FBSyxFQUNkLGtCQUFJLFFBQU0sQ0FBSyxDQUNaLENBQ0QsQ0FDRixDQUNGLEVBR04sTUFBQyxNQUFNO0lBQ0wsU0FBUyxFQUFDO0VBQTJCLEdBQ3JDO0lBQUssU0FBUyxFQUFDO0VBQWMsR0FDM0I7SUFBSyxTQUFTLEVBQUM7RUFBZ0MsR0FDN0M7SUFBSyxTQUFTLEVBQUM7RUFBK0MsR0FDNUQ7SUFBRyxTQUFTLEVBQUMsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRSxNQUFNO01BQ2J3QyxRQUFRLENBQUNzRCw4RUFBc0IsQ0FBQyxDQUFDRCxZQUFZLENBQUMsQ0FBQztJQUNqRDtFQUFFLEVBQ0gsQ0FFRSxFQUNOLE1BQUMsaURBQUk7SUFBQyxJQUFJLEVBQUM7RUFBRyxHQUNaO0lBQUssR0FBRyxFQUFDLEVBQUU7SUFBQyxTQUFTLEVBQUMsb0VBQW9FO0lBQ3JGLEdBQUcsRUFBRztFQUFzQixFQUFFLENBQU8sRUFDNUMsTUFBQyxpREFBSTtJQUFDLElBQUksRUFBQztFQUFHLEdBQ1o7SUFBSyxHQUFHLEVBQUMsRUFBRTtJQUFDLFNBQVMsRUFBQyx1REFBdUQ7SUFBQyxHQUFHLEVBQUc7RUFBb0IsRUFBRSxDQUFPLEVBQ25IO0lBQUssU0FBUyxFQUFDO0VBQXlDLEdBQ3RELE1BQUMsNkRBQVM7SUFBQyxTQUFTLEVBQUMsMEJBQTBCO0lBQ3BDLFdBQVcsRUFBQyxrQkFBa0I7SUFDOUIsUUFBUSxFQUFFNkIsb0JBQXFCO0lBQy9CLEtBQUssRUFBRVY7RUFBVyxFQUFFLEVBQy9CLE1BQUMsMkNBQU07SUFBQyxZQUFZLEVBQUMsTUFBTTtJQUFDLEtBQUssRUFBRTtNQUFDbEcsS0FBSyxFQUFFO0lBQUcsQ0FBRTtJQUFDLFFBQVEsRUFBRWdHO0VBQWEsR0FDdEUsTUFBQyxNQUFNO0lBQUMsS0FBSyxFQUFDO0VBQU0sR0FBQyxVQUFRLENBQVMsRUFDdEMsTUFBQyxNQUFNO0lBQUMsS0FBSyxFQUFDO0VBQU0sR0FBQyxNQUFJLENBQVMsRUFDbEMsTUFBQyxNQUFNO0lBQUMsS0FBSyxFQUFDO0VBQVUsR0FBQyxPQUFLLENBQVMsQ0FDaEMsQ0FDTCxFQUVOO0lBQUksU0FBUyxFQUFDO0VBQW9DLEdBQ2hEO0lBQUksU0FBUyxFQUFDO0VBQTJELEdBQ3ZFLE1BQUMsNENBQU87SUFBQyxnQkFBZ0IsRUFBQyx1QkFBdUI7SUFBQyxTQUFTLEVBQUMsYUFBYTtJQUFDLE9BQU8sRUFDL0U7TUFBSyxTQUFTLEVBQUM7SUFBVyxHQUFDLE1BQUMsNkNBQVE7TUFBQyxPQUFPLEVBQUVIO0lBQUssR0FDakQsTUFBQywyQ0FBTSxRQUFDLFdBQ0csUUFBQyx3REFBSTtNQUFDLElBQUksRUFBQztJQUFNLEVBQUUsQ0FDckIsQ0FDQSxFQUNULE1BQUMsNkRBQVM7TUFBQyxTQUFTLEVBQUMsdUJBQXVCO01BQ2pDLFdBQVcsRUFBQyxrQkFBa0I7TUFDOUIsUUFBUSxFQUFFZSxvQkFBcUI7TUFDL0IsS0FBSyxFQUFFVjtJQUFXLEVBQUUsQ0FDbEM7SUFBQyxPQUFPLEVBQUM7RUFBTyxHQUNmO0lBQU0sU0FBUyxFQUFDO0VBQXVCLEdBQUM7SUFBRyxTQUFTLEVBQUM7RUFBc0IsRUFBRSxDQUFPLENBRTVFLENBQ1AsRUFFTDtJQUFJLFNBQVMsRUFBQztFQUFXLEdBQ3ZCLE1BQUMsNENBQU87SUFBQyxnQkFBZ0IsRUFBQyx1QkFBdUI7SUFBQyxTQUFTLEVBQUMsYUFBYTtJQUFDLE9BQU8sRUFBRSxNQUFDLG1FQUFlLE9BQUc7SUFDN0YsT0FBTyxFQUFDO0VBQU8sR0FDdEI7SUFBTSxTQUFTLEVBQUM7RUFBdUIsR0FBQztJQUFHLFNBQVMsRUFBQztFQUF3QixFQUFFLENBQU8sQ0FDOUUsQ0FDUCxFQUVMO0lBQUksU0FBUyxFQUFDO0VBQVEsR0FDcEIsTUFBQyw0Q0FBTztJQUFDLGdCQUFnQixFQUFDLHVCQUF1QjtJQUFDLFNBQVMsRUFBQyxhQUFhO0lBQ2hFLE9BQU8sRUFBRSxNQUFDLG9FQUFnQixPQUFHO0lBQUMsT0FBTyxFQUFDO0VBQU8sR0FDdEQ7SUFBTSxTQUFTLEVBQUM7RUFBcUMsR0FDckQ7SUFBRyxTQUFTLEVBQUM7RUFBb0IsRUFBRSxFQUNuQztJQUFNLFNBQVMsRUFBQztFQUE0QyxFQUFFLENBQ3ZELENBQ0csQ0FDUCxFQUNMO0lBQUksU0FBUyxFQUFDO0VBQWEsR0FDekIsTUFBQyw0Q0FBTztJQUFDLGdCQUFnQixFQUFDLHVCQUF1QjtJQUFDLFNBQVMsRUFBQyxhQUFhO0lBQ2hFLE9BQU8sRUFBRUcsWUFBWSxFQUFHO0lBQUMsT0FBTyxFQUFDO0VBQU8sR0FDbkQ7SUFBTSxTQUFTLEVBQUM7RUFBOEMsR0FBQztJQUM3RCxTQUFTLEVBQUcscUJBQW9CbEQsTUFBTSxDQUFDckYsSUFBSztFQUFFLEVBQUUsQ0FDM0MsQ0FDSyxDQUNQLEVBQ0w7SUFBSSxTQUFTLEVBQUM7RUFBYSxHQUFDLE1BQUMsNERBQVEsT0FBRSxDQUFLLENBQ3pDLENBQ0QsQ0FDRixDQUNDLEVBRVJrQyxLQUFLLElBQUlHLGlFQUFRLElBQ2hCO0lBQUssU0FBUyxFQUFDO0VBQTBCLEdBQ3ZDO0lBQUssU0FBUyxFQUFDO0VBQWMsR0FDM0I7SUFBSyxTQUFTLEVBQUM7RUFBK0IsR0FDNUMsTUFBQyx1REFBYSxPQUFFLEVBQ2hCO0lBQUksU0FBUyxFQUFDO0VBQW9DLEdBQ2hELGtCQUFJO0lBQU0sU0FBUyxFQUFDO0VBQXVCLEdBQUM7SUFBRyxTQUFTLEVBQUM7RUFBc0IsRUFBRSxDQUFPLENBQUssRUFDN0Ysa0JBQUk7SUFBTSxTQUFTLEVBQUM7RUFBdUIsR0FBQztJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFFLENBQU8sQ0FBSyxFQUMxRixrQkFBSTtJQUFNLFNBQVMsRUFBQztFQUF1QixHQUFDO0lBQUcsU0FBUyxFQUFDO0VBQW9CLEVBQUUsQ0FBTyxDQUFLLENBQ3hGLENBQ0QsQ0FDRixDQUVULENBQ0c7QUFFVixDQUFDO0FBQ2M2Ryw2RUFBYyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUtTO0FBQ3dDO0FBQ3pDO0FBQ2dCO0FBQ1k7QUFDdEI7QUFDVztBQUNGO0FBQ2M7QUFDRTtBQUN2QjtBQUNoQjtBQUNvRDtBQUN4QjtBQUNHO0FBRTVELE1BQU07RUFBQ3RCO0FBQU0sQ0FBQyxHQUFHMUUsMkNBQU07QUFDdkIsTUFBTTJFLE1BQU0sR0FBR0MsMkNBQU0sQ0FBQ0QsTUFBTTtBQUM1QixNQUFNRSxJQUFJLEdBQ1IsTUFBQyx5Q0FBSTtFQUFDLE9BQU8sRUFBRUM7QUFBZ0IsR0FDN0IsTUFBQyx5Q0FBSSxDQUFDLElBQUk7RUFBQyxHQUFHLEVBQUM7QUFBRyxHQUFDLFVBQVEsQ0FBWSxFQUN2QyxNQUFDLHlDQUFJLENBQUMsSUFBSTtFQUFDLEdBQUcsRUFBQztBQUFHLEdBQUMsTUFBSSxDQUFZLEVBQ25DLE1BQUMseUNBQUksQ0FBQyxJQUFJO0VBQUMsR0FBRyxFQUFDO0FBQUcsR0FBQyxPQUFLLENBQVksQ0FFdkM7QUFFRCxTQUFTQSxlQUFlLENBQUNZLENBQUMsRUFBRTtFQUMxQi9ILDRDQUFPLENBQUNvSCxJQUFJLENBQUMscUJBQXFCLENBQUM7QUFDckM7QUFFQSxTQUFTQyxZQUFZLENBQUM5RyxLQUFLLEVBQUUsQ0FDN0I7QUFFQSxNQUFNK0gsaUJBQWlCLEdBQUcsTUFBTTtFQUM5QixNQUFNOUQsTUFBTSxHQUFHbEQsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNpRCxNQUFNLENBQUM7RUFDM0QsTUFBTW5ELEtBQUssR0FBR0MsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNGLEtBQUssQ0FBQztFQUN6RCxNQUFNK0UsWUFBWSxHQUFHOUUsK0RBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUM2RSxZQUFZLENBQUM7RUFFdkUsTUFBTTtJQUFBLEdBQUNtQixVQUFVO0lBQUEsR0FBRUM7RUFBYSxJQUFJQyxzREFBUSxDQUFDLEVBQUUsQ0FBQztFQUNoRCxNQUFNMUUsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBRTlCLE1BQU0wRSxZQUFZLEdBQUcsTUFDbkIsTUFBQyw4REFBZ0I7SUFBQyxTQUFTLEVBQUM7RUFBd0IsR0FDbEQ7SUFBSSxTQUFTLEVBQUM7RUFBZ0IsR0FDM0JDLHFEQUFZLENBQUNsSSxHQUFHLENBQUNtSSxRQUFRLElBQ3hCO0lBQUksU0FBUyxFQUFDLHFCQUFxQjtJQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNGLFFBQVEsQ0FBRTtJQUFDLE9BQU8sRUFBR0csQ0FBQyxJQUM1RWhGLFFBQVEsQ0FBQ2lGLHNFQUFjLENBQUNKLFFBQVEsQ0FBQztFQUNsQyxHQUNDO0lBQUcsU0FBUyxFQUFHLDZCQUE0QkEsUUFBUSxDQUFDekksSUFBSztFQUFFLEVBQUUsRUFDN0Q7SUFBTSxTQUFTLEVBQUM7RUFBa0IsR0FBRXlJLFFBQVEsQ0FBQzdILElBQUksQ0FBUSxDQUN0RCxDQUNOLENBQ0UsQ0FDYTtFQUV0QixNQUFNa0ksb0JBQW9CLEdBQUlDLEdBQUcsSUFBSztJQUNwQ1YsYUFBYSxDQUFDVSxHQUFHLENBQUNDLE1BQU0sQ0FBQzVILEtBQUssQ0FBQztFQUNqQyxDQUFDO0VBRUQsT0FDRTtJQUFLLFNBQVMsRUFBQztFQUFzQixHQUNuQztJQUFLLFNBQVMsRUFBQztFQUEwQixHQUN2QztJQUFLLFNBQVMsRUFBQztFQUFjLEdBQzNCO0lBQUssU0FBUyxFQUFDO0VBQStCLEdBQzVDO0lBQUssU0FBUyxFQUFDO0VBQStCLEdBQzVDO0lBQUcsU0FBUyxFQUFDO0VBQXlCLEVBQUUsRUFDeEM7SUFBRyxTQUFTLEVBQUM7RUFBMEIsR0FBQyxNQUFDLDJEQUFZO0lBQUMsRUFBRSxFQUFDO0VBQWUsRUFBRSxDQUFJLENBQzFFLEVBQ047SUFBSSxTQUFTLEVBQUM7RUFBZSxHQUMzQixrQkFBSSxPQUFLLENBQUssRUFDZCxrQkFBSSxRQUFNLENBQUssQ0FDWixDQUNELENBQ0YsQ0FDRixFQUVOLE1BQUMsTUFBTTtJQUNMLFNBQVMsRUFBQztFQUEyQixHQUNyQztJQUFLLFNBQVMsRUFBQztFQUFjLEdBQzNCO0lBQUssU0FBUyxFQUFDO0VBQWdDLEdBRTdDO0lBQUssU0FBUyxFQUFDO0VBQStDLEdBQzVEO0lBQUcsU0FBUyxFQUFDLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUUsTUFBTTtNQUNid0MsUUFBUSxDQUFDc0QsOEVBQXNCLENBQUMsQ0FBQ0QsWUFBWSxDQUFDLENBQUM7SUFDakQ7RUFBRSxFQUNILENBQ0UsRUFDTixNQUFDLGlEQUFJO0lBQUMsSUFBSSxFQUFDO0VBQUcsR0FDWjtJQUFLLEdBQUcsRUFBQyxFQUFFO0lBQUMsU0FBUyxFQUFDLDhDQUE4QztJQUFDLEdBQUcsRUFBRztFQUFzQixFQUFFLENBQU8sRUFDNUcsTUFBQyxpREFBSTtJQUFDLElBQUksRUFBQztFQUFHLEdBQ1o7SUFBSyxHQUFHLEVBQUMsRUFBRTtJQUFDLFNBQVMsRUFBQyx1REFBdUQ7SUFDeEUsR0FBRyxFQUFHO0VBQTBCLEVBQUUsQ0FBTyxFQUNoRDtJQUFLLFNBQVMsRUFBQztFQUF5QyxHQUN0RCxNQUFDLDZEQUFTO0lBQUMsU0FBUyxFQUFDLDBCQUEwQjtJQUNwQyxXQUFXLEVBQUMsa0JBQWtCO0lBQzlCLFFBQVEsRUFBRTZCLG9CQUFxQjtJQUMvQixLQUFLLEVBQUVWO0VBQVcsRUFBRSxFQUUvQixNQUFDLDJDQUFNO0lBQUMsWUFBWSxFQUFDLE1BQU07SUFBQyxLQUFLLEVBQUU7TUFBQ2xHLEtBQUssRUFBRTtJQUFHLENBQUU7SUFBQyxRQUFRLEVBQUVnRztFQUFhLEdBQ3RFLE1BQUMsTUFBTTtJQUFDLEtBQUssRUFBQztFQUFNLEdBQUMsVUFBUSxDQUFTLEVBQ3RDLE1BQUMsTUFBTTtJQUFDLEtBQUssRUFBQztFQUFNLEdBQUMsTUFBSSxDQUFTLEVBQ2xDLE1BQUMsTUFBTTtJQUFDLEtBQUssRUFBQztFQUFVLEdBQUMsT0FBSyxDQUFTLENBQ2hDLENBQ0wsRUFFTjtJQUFJLFNBQVMsRUFBQztFQUFvQyxHQUNoRDtJQUFJLFNBQVMsRUFBQztFQUEyRCxHQUN2RSxNQUFDLDRDQUFPO0lBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCO0lBQUMsU0FBUyxFQUFDLGFBQWE7SUFBQyxPQUFPLEVBQy9FO01BQUssU0FBUyxFQUFDO0lBQVcsR0FDeEIsTUFBQyw2Q0FBUTtNQUFDLE9BQU8sRUFBRUg7SUFBSyxHQUN0QixNQUFDLDJDQUFNLFFBQUMsV0FDRyxRQUFDLHdEQUFJO01BQUMsSUFBSSxFQUFDO0lBQU0sRUFBRSxDQUNyQixDQUNBLEVBQ1gsTUFBQyw2REFBUztNQUFDLFNBQVMsRUFBQyx1QkFBdUI7TUFDakMsV0FBVyxFQUFDLGtCQUFrQjtNQUM5QixRQUFRLEVBQUVlLG9CQUFxQjtNQUMvQixLQUFLLEVBQUVWO0lBQVcsRUFBRSxDQUVsQztJQUFDLE9BQU8sRUFBQztFQUFPLEdBQ2Y7SUFBTSxTQUFTLEVBQUM7RUFBdUIsR0FBQztJQUFHLFNBQVMsRUFBQztFQUFzQixFQUFFLENBQU8sQ0FDNUUsQ0FDUCxFQUNMO0lBQUksU0FBUyxFQUFDO0VBQVcsR0FDdkIsTUFBQyw0Q0FBTztJQUFDLGdCQUFnQixFQUFDLHVCQUF1QjtJQUFDLFNBQVMsRUFBQyxhQUFhO0lBQUMsT0FBTyxFQUFFLE1BQUMsbUVBQWUsT0FBRztJQUM3RixPQUFPLEVBQUM7RUFBTyxHQUN0QjtJQUFNLFNBQVMsRUFBQztFQUF1QixHQUFDO0lBQUcsU0FBUyxFQUFDO0VBQXdCLEVBQUUsQ0FBTyxDQUM5RSxDQUNQLEVBRUw7SUFBSSxTQUFTLEVBQUM7RUFBUSxHQUNwQixNQUFDLDRDQUFPO0lBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCO0lBQUMsU0FBUyxFQUFDLGFBQWE7SUFDaEUsT0FBTyxFQUFFLE1BQUMsb0VBQWdCLE9BQUc7SUFBQyxPQUFPLEVBQUM7RUFBTyxHQUN0RDtJQUFNLFNBQVMsRUFBQztFQUFxQyxHQUNyRDtJQUFHLFNBQVMsRUFBQztFQUFvQixFQUFFLEVBQ25DO0lBQU0sU0FBUyxFQUFDO0VBQTRDLEVBQUUsQ0FDdkQsQ0FDRyxDQUNQLEVBQ0w7SUFBSSxTQUFTLEVBQUM7RUFBYSxHQUN6QixNQUFDLDRDQUFPO0lBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCO0lBQUMsU0FBUyxFQUFDLGFBQWE7SUFDaEUsT0FBTyxFQUFFRyxZQUFZLEVBQUc7SUFBQyxPQUFPLEVBQUM7RUFBTyxHQUNuRDtJQUFNLFNBQVMsRUFBQztFQUE4QyxHQUFDO0lBQzdELFNBQVMsRUFBRyxxQkFBb0JsRCxNQUFNLENBQUNyRixJQUFLO0VBQUUsRUFBRSxDQUMzQyxDQUNLLENBQ1AsRUFDTDtJQUFJLFNBQVMsRUFBQztFQUFhLEdBQUMsTUFBQyw0REFBUSxPQUFFLENBQUssQ0FDekMsQ0FDRCxDQUNGLENBQ0MsRUFFUmtDLEtBQUssSUFBSUcsaUVBQVEsSUFDaEI7SUFBSyxTQUFTLEVBQUM7RUFBeUQsR0FDdEU7SUFBSyxTQUFTLEVBQUM7RUFBYyxHQUMzQjtJQUFLLFNBQVMsRUFBQztFQUErQixHQUM1QyxNQUFDLHVEQUFhLE9BQUUsRUFDaEI7SUFBSSxTQUFTLEVBQUM7RUFBb0MsR0FDaEQsa0JBQUk7SUFBTSxTQUFTLEVBQUM7RUFBdUIsR0FBQztJQUFHLFNBQVMsRUFBQztFQUFzQixFQUFFLENBQU8sQ0FBSyxFQUM3RixrQkFBSTtJQUFNLFNBQVMsRUFBQztFQUF1QixHQUFDO0lBQUcsU0FBUyxFQUFDO0VBQW1CLEVBQUUsQ0FBTyxDQUFLLEVBQzFGLGtCQUFJO0lBQU0sU0FBUyxFQUFDO0VBQXVCLEdBQUM7SUFBRyxTQUFTLEVBQUM7RUFBb0IsRUFBRSxDQUFPLENBQUssQ0FDeEYsQ0FDRCxDQUNGLENBRVQsQ0FDRztBQUVWLENBQUM7QUFFYzhHLGdGQUFpQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVLTjtBQUNjO0FBQ2Q7QUFDNEI7QUFNYjtBQUNNO0FBRS9DLE1BQU1wRCxPQUFPLEdBQUdDLHlDQUFJLENBQUNELE9BQU87QUFFNUIsTUFBTU0sdUJBQXVCLEdBQUlwRSxRQUFRLElBQUs7RUFDNUMsUUFBUUEsUUFBUTtJQUNkLEtBQUtVLG9GQUE0QjtNQUMvQixPQUFPLDJDQUEyQztJQUNwRCxLQUFLQywwRkFBa0M7TUFDckMsT0FBTyx5RUFBeUU7SUFDbEYsS0FBS0MsOEVBQXNCO01BQ3pCLE9BQU8sd0VBQXdFO0lBQ2pGLEtBQUtDLDhFQUFzQjtNQUN6QixPQUFPLHdFQUF3RTtJQUNqRjtNQUNFLE9BQU8sb0JBQW9CO0VBQUM7QUFFbEMsQ0FBQztBQUVELE1BQU1zRyxhQUFhLEdBQUcsTUFBTTtFQUMxQixNQUFNbkgsUUFBUSxHQUFHRSwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ0gsUUFBUSxDQUFDO0VBQy9ELE1BQU1nRCxRQUFRLEdBQUc5QywrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQzZDLFFBQVEsQ0FBQztFQUUvRCxNQUFNc0IsWUFBWSxHQUFHdEIsUUFBUSxDQUFDdUIsTUFBTSxDQUFDLENBQUMsQ0FBQztFQUN2QyxNQUFNQyxlQUFlLEdBQUdGLFlBQVksQ0FBQ0csS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUVsRCxPQUNFLE1BQUMseUNBQUk7SUFDSCxlQUFlLEVBQUUsQ0FBQ0QsZUFBZSxDQUFFO0lBQ25DLFlBQVksRUFBRSxDQUFDRixZQUFZLENBQUU7SUFDN0IsSUFBSSxFQUFDO0VBQVksR0FDakIsTUFBQyxPQUFPO0lBQUMsY0FBYyxFQUFFRix1QkFBdUIsQ0FBQ3BFLFFBQVEsQ0FBRTtJQUFDLEdBQUcsRUFBQyxNQUFNO0lBQUMsS0FBSyxFQUFFLE1BQUMsMERBQVk7TUFBQyxFQUFFLEVBQUM7SUFBYztFQUFHLEdBQzlHLE1BQUMsT0FBTztJQUFDLGNBQWMsRUFBQyxvQkFBb0I7SUFBQyxHQUFHLEVBQUMsV0FBVztJQUNuRCxLQUFLLEVBQUUsb0JBQU0sR0FBQztNQUFHLFNBQVMsRUFBQztJQUFxQixFQUFFLEVBQzFDLE1BQUMsMERBQVk7TUFBQyxFQUFFLEVBQUM7SUFBbUIsRUFBRTtFQUFRLEdBQzdELE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUMsR0FBRyxFQUFDO0VBQXVCLEdBQ3BDLE1BQUMsMkRBQU87SUFBQyxJQUFJLEVBQUM7RUFBd0IsR0FDcEM7SUFBRyxTQUFTLEVBQUM7RUFBa0IsRUFBRSxFQUNqQyxNQUFDLDBEQUFZO0lBQUMsRUFBRSxFQUFDO0VBQTBCLEVBQUUsQ0FDckMsQ0FDQSxDQUNKLENBQ0YsQ0FDTDtBQUVYLENBQUM7QUFFRG1ILGFBQWEsQ0FBQ3JDLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFFYnFDLDRFQUFhLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRFU7QUFDZ0M7QUFDakM7QUFDeUI7QUFDRztBQUN0QjtBQUNXO0FBQ0Y7QUFDYztBQUNFO0FBQ3ZCO0FBQ2hCO0FBQ29EO0FBQ3hCO0FBQ0c7QUFFNUQsTUFBTTtFQUFDeEI7QUFBTSxDQUFDLEdBQUcxRSwyQ0FBTTtBQUV2QixNQUFNNkUsSUFBSSxHQUNSLE1BQUMseUNBQUk7RUFBQyxPQUFPLEVBQUVDO0FBQWdCLEdBQzdCLE1BQUMseUNBQUksQ0FBQyxJQUFJO0VBQUMsR0FBRyxFQUFDO0FBQUcsR0FBQyxVQUFRLENBQVksRUFDdkMsTUFBQyx5Q0FBSSxDQUFDLElBQUk7RUFBQyxHQUFHLEVBQUM7QUFBRyxHQUFDLE1BQUksQ0FBWSxFQUNuQyxNQUFDLHlDQUFJLENBQUMsSUFBSTtFQUFDLEdBQUcsRUFBQztBQUFHLEdBQUMsT0FBSyxDQUFZLENBRXZDO0FBRUQsU0FBU0EsZUFBZSxDQUFDWSxDQUFDLEVBQUU7RUFDMUIvSCw0Q0FBTyxDQUFDb0gsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0FBQ3JDO0FBRUEsTUFBTW9CLFlBQVksR0FBRyxNQUFNO0VBQ3pCLE1BQU1oRSxNQUFNLEdBQUdsRCwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ2lELE1BQU0sQ0FBQztFQUMzRCxNQUFNbkQsS0FBSyxHQUFHQywrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDO0VBQ3pELE1BQU0rRSxZQUFZLEdBQUc5RSwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQzZFLFlBQVksQ0FBQztFQUV2RSxNQUFNO0lBQUEsR0FBQ21CLFVBQVU7SUFBQSxHQUFFQztFQUFhLElBQUlDLHNEQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2hELE1BQU0xRSxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFFOUIsTUFBTTBFLFlBQVksR0FBRyxNQUNuQixNQUFDLDhEQUFnQjtJQUFDLFNBQVMsRUFBQztFQUF3QixHQUNsRDtJQUFJLFNBQVMsRUFBQztFQUFnQixHQUMzQkMscURBQVksQ0FBQ2xJLEdBQUcsQ0FBQ21JLFFBQVEsSUFDeEI7SUFBSSxTQUFTLEVBQUMscUJBQXFCO0lBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsUUFBUSxDQUFFO0lBQUMsT0FBTyxFQUFHRyxDQUFDLElBQzVFaEYsUUFBUSxDQUFDaUYsc0VBQWMsQ0FBQ0osUUFBUSxDQUFDO0VBQ2xDLEdBQ0M7SUFBRyxTQUFTLEVBQUcsNkJBQTRCQSxRQUFRLENBQUN6SSxJQUFLO0VBQUUsRUFBRSxFQUM3RDtJQUFNLFNBQVMsRUFBQztFQUFrQixHQUFFeUksUUFBUSxDQUFDN0gsSUFBSSxDQUFRLENBQ3RELENBQ04sQ0FDRSxDQUNhO0VBRXRCLE1BQU1rSSxvQkFBb0IsR0FBSUMsR0FBRyxJQUFLO0lBQ3BDVixhQUFhLENBQUNVLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDNUgsS0FBSyxDQUFDO0VBQ2pDLENBQUM7RUFFRCxPQUNFO0lBQUssU0FBUyxFQUFDO0VBQTRFLEdBQ3pGO0lBQUssU0FBUyxFQUFDO0VBQTBCLEdBQ3ZDO0lBQUssU0FBUyxFQUFDO0VBQWMsR0FDM0I7SUFBSyxTQUFTLEVBQUM7RUFBK0IsR0FDNUM7SUFBSyxTQUFTLEVBQUM7RUFBK0IsR0FDNUM7SUFBRyxTQUFTLEVBQUM7RUFBeUIsRUFBRSxFQUN4QztJQUFHLFNBQVMsRUFBQztFQUEwQixHQUFDLE1BQUMsMkRBQVk7SUFBQyxFQUFFLEVBQUM7RUFBZSxFQUFFLENBQUksQ0FDMUUsRUFDTjtJQUFJLFNBQVMsRUFBQztFQUFlLEdBQzNCLGtCQUFJLE9BQUssQ0FBSyxFQUNkLGtCQUFJLFFBQU0sQ0FBSyxDQUNaLENBQ0QsQ0FDRixDQUNGLEVBRU4sTUFBQyxNQUFNO0lBQ0wsU0FBUyxFQUFDO0VBQTJCLEdBQ3JDO0lBQUssU0FBUyxFQUFDO0VBQWMsR0FDM0I7SUFBSyxTQUFTLEVBQUM7RUFBZ0MsR0FDN0M7SUFBSyxTQUFTLEVBQUM7RUFBa0QsR0FDL0Q7SUFBRyxTQUFTLEVBQUMsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRSxNQUFNO01BQ2J3QyxRQUFRLENBQUNzRCw4RUFBc0IsQ0FBQyxDQUFDRCxZQUFZLENBQUMsQ0FBQztJQUNqRDtFQUFFLEVBQ0gsQ0FDRSxFQUNOLE1BQUMsaURBQUk7SUFBQyxJQUFJLEVBQUM7RUFBRyxHQUNaO0lBQUssR0FBRyxFQUFDLEVBQUU7SUFBQyxTQUFTLEVBQUMsb0VBQW9FO0lBQ3JGLEdBQUcsRUFBRztFQUFzQixFQUFFLENBQU8sRUFDNUMsTUFBQyxpREFBSTtJQUFDLElBQUksRUFBQztFQUFHLEdBQ1o7SUFBSyxHQUFHLEVBQUMsRUFBRTtJQUFDLFNBQVMsRUFBQyx1REFBdUQ7SUFBQyxHQUFHLEVBQUc7RUFBb0IsRUFBRSxDQUFPLEVBRWxIL0UsS0FBSyxJQUFJRyxpRUFBUSxJQUNoQjtJQUFLLFNBQVMsRUFBQztFQUF5RCxHQUN0RSxNQUFDLHVEQUFhLE9BQUUsQ0FFbkIsRUFFRDtJQUFJLFNBQVMsRUFBQztFQUFvQyxHQUNoRDtJQUFJLFNBQVMsRUFBQztFQUE0QixHQUN4QyxNQUFDLDRDQUFPO0lBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCO0lBQ3hDLFNBQVMsRUFBQyxhQUFhO0lBQUMsT0FBTyxFQUN0QztNQUFLLFNBQVMsRUFBQztJQUFXLEdBQUMsTUFBQyw2Q0FBUTtNQUFDLE9BQU8sRUFBRTBGO0lBQUssR0FDakQsTUFBQywyQ0FBTSxRQUFDLFdBQ0csUUFBQyx3REFBSTtNQUFDLElBQUksRUFBQztJQUFNLEVBQUUsQ0FDckIsQ0FDQSxFQUNULE1BQUMsNkRBQVM7TUFBQyxTQUFTLEVBQUMsdUJBQXVCO01BQ2pDLFdBQVcsRUFBQyxrQkFBa0I7TUFDOUIsUUFBUSxFQUFFZSxvQkFBcUI7TUFDL0IsS0FBSyxFQUFFVjtJQUFXLEVBQUUsQ0FDbEM7SUFBQyxPQUFPLEVBQUM7RUFBTyxHQUVmO0lBQU0sU0FBUyxFQUFDO0VBQXVCLEdBQUM7SUFBRyxTQUFTLEVBQUM7RUFBc0IsRUFBRSxDQUFPLENBRTVFLENBQ1AsRUFFTDtJQUFJLFNBQVMsRUFBQztFQUFXLEdBQ3ZCLE1BQUMsNENBQU87SUFBQyxnQkFBZ0IsRUFBQyx1QkFBdUI7SUFBQyxTQUFTLEVBQUMsYUFBYTtJQUFDLE9BQU8sRUFBRSxNQUFDLG1FQUFlLE9BQUc7SUFDN0YsT0FBTyxFQUFDO0VBQU8sR0FDdEI7SUFBTSxTQUFTLEVBQUM7RUFBdUIsR0FBQztJQUFHLFNBQVMsRUFBQztFQUF3QixFQUFFLENBQU8sQ0FDOUUsQ0FDUCxFQUVMO0lBQUksU0FBUyxFQUFDO0VBQVEsR0FDcEIsTUFBQyw0Q0FBTztJQUFDLGdCQUFnQixFQUFDLHVCQUF1QjtJQUFDLFNBQVMsRUFBQyxhQUFhO0lBQ2hFLE9BQU8sRUFBRSxNQUFDLG9FQUFnQixPQUFHO0lBQUMsT0FBTyxFQUFDO0VBQU8sR0FDdEQ7SUFBTSxTQUFTLEVBQUM7RUFBcUMsR0FDckQ7SUFBRyxTQUFTLEVBQUM7RUFBb0IsRUFBRSxFQUNuQztJQUFNLFNBQVMsRUFBQztFQUE0QyxFQUFFLENBQ3ZELENBQ0csQ0FDUCxFQUNMO0lBQUksU0FBUyxFQUFDO0VBQWEsR0FDekIsTUFBQyw0Q0FBTztJQUFDLGdCQUFnQixFQUFDLHVCQUF1QjtJQUFDLFNBQVMsRUFBQyxhQUFhO0lBQ2hFLE9BQU8sRUFBRUcsWUFBWSxFQUFHO0lBQUMsT0FBTyxFQUFDO0VBQU8sR0FDbkQ7SUFBTSxTQUFTLEVBQUM7RUFBOEMsR0FBQztJQUM3RCxTQUFTLEVBQUcscUJBQW9CbEQsTUFBTSxDQUFDckYsSUFBSztFQUFFLEVBQUUsQ0FDM0MsQ0FDSyxDQUNQLEVBQ0w7SUFBSSxTQUFTLEVBQUM7RUFBYSxHQUFDLE1BQUMsNERBQVEsT0FBRSxDQUFLLENBQ3pDLENBQ0QsQ0FDRixDQUNDLENBQ0w7QUFFVixDQUFDO0FBRUQsTUFBTXNKLGVBQWUsR0FBRyxDQUFDO0VBQUNsSDtBQUFRLENBQUMsS0FBSztFQUN0QyxNQUFNO0lBQUNpRCxNQUFNO0lBQUU0QjtFQUFZLENBQUMsR0FBRzdFLFFBQVE7RUFDdkMsT0FBTztJQUFDaUQsTUFBTTtJQUFFNEI7RUFBWSxDQUFDO0FBQy9CLENBQUM7QUFDY3NDLDBIQUFPLENBQUNELGVBQWUsRUFBRTtFQUFDcEMsOEZBQXNCO0VBQUUyQiw4RUFBY0E7QUFBQSxDQUFDLENBQUMsQ0FBQ1EsWUFBWSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekpyRTtBQUMyQjtBQUNvQjtBQUNoQjtBQUV6RCxNQUFNRyxvQkFBb0IsR0FBRyxNQUFNO0VBQ2pDLE1BQU12QyxZQUFZLEdBQUc5RSwrREFBVyxDQUFDLENBQUM7SUFBQ0M7RUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQzZFLFlBQVksQ0FBQztFQUN2RSxNQUFNckQsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBRTlCLE9BQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFBQTtBQUVKLENBQUM7O0FBRWMyRixtRkFBb0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JHO0FBQ0Q7QUFDUjtBQUVpQztBQUNwQjtBQUNvQztBQUMzQjtBQUNGO0FBQ2M7QUFDRTtBQUdtRDtBQUMvRDtBQUVyRCxNQUFNO0VBQUM1QjtBQUFNLENBQUMsR0FBRzFFLDJDQUFNO0FBRXZCLE1BQU11RyxNQUFNLEdBQUcsTUFBTTtFQUNuQixNQUFNcEUsTUFBTSxHQUFHbEQsZ0VBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNpRCxNQUFNLENBQUM7RUFDM0QsTUFBTW5ELEtBQUssR0FBR0MsZ0VBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNGLEtBQUssQ0FBQztFQUN6RCxNQUFNK0UsWUFBWSxHQUFHOUUsZ0VBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUM2RSxZQUFZLENBQUM7RUFDdkUsTUFBTWhGLFFBQVEsR0FBR0UsZ0VBQVcsQ0FBQyxDQUFDO0lBQUNDO0VBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNILFFBQVEsQ0FBQztFQUUvRCxNQUFNO0lBQUEsR0FBQ21HLFVBQVU7SUFBQSxHQUFFQztFQUFhLElBQUlDLHNEQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2hELE1BQU0xRSxRQUFRLEdBQUdDLGdFQUFXLEVBQUU7RUFFOUIsTUFBTTBFLFlBQVksR0FBRyxNQUNuQixNQUFDLDhEQUFnQjtJQUFDLFNBQVMsRUFBQztFQUF3QixHQUNsRDtJQUFJLFNBQVMsRUFBQztFQUFnQixHQUMzQkMscURBQVksQ0FBQ2xJLEdBQUcsQ0FBQ21JLFFBQVEsSUFDeEI7SUFBSSxTQUFTLEVBQUMscUJBQXFCO0lBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsUUFBUSxDQUFFO0lBQUMsT0FBTyxFQUFFLE1BQzFFN0UsUUFBUSxDQUFDaUYscUVBQWMsQ0FBQ0osUUFBUSxDQUFDO0VBQ2xDLEdBQ0M7SUFBRyxTQUFTLEVBQUcsNkJBQTRCQSxRQUFRLENBQUN6SSxJQUFLO0VBQUUsRUFBRSxFQUM3RDtJQUFNLFNBQVMsRUFBQztFQUFrQixHQUFFeUksUUFBUSxDQUFDN0gsSUFBSSxDQUFRLENBQ3RELENBQ04sQ0FDRSxDQUNhO0VBRXRCLE1BQU1rSSxvQkFBb0IsR0FBSUMsR0FBRyxJQUFLO0lBQ3BDVixhQUFhLENBQUNVLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDNUgsS0FBSyxDQUFDO0VBQ2pDLENBQUM7RUFFRCxPQUNFLE1BQUMsTUFBTSxRQUNKYSxRQUFRLEtBQUtMLHlFQUFnQixJQUFLLENBQUNLLFFBQVEsS0FBS04sd0VBQWUsSUFBSU0sUUFBUSxLQUFLSiwrRUFBc0IsS0FBS0ssS0FBSyxHQUFHRyxpRUFBUyxHQUMzSDtJQUFLLFNBQVMsRUFBQztFQUFvQixHQUNqQztJQUFHLFNBQVMsRUFBQyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFFLE1BQU07TUFDYnVCLFFBQVEsQ0FBQ3NELDZFQUFzQixDQUFDLENBQUNELFlBQVksQ0FBQyxDQUFDO0lBQ2pEO0VBQUUsRUFDSCxDQUNFLEdBQUcsSUFBSSxFQUNmLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUM7RUFBRyxHQUNaO0lBQUssR0FBRyxFQUFDLEVBQUU7SUFBQyxTQUFTLEVBQUMsb0NBQW9DO0lBQUMsR0FBRyxFQUFHO0VBQXNCLEVBQUUsQ0FBTyxFQUVsRyxNQUFDLDZEQUFTO0lBQUMsU0FBUyxFQUFDLGtEQUFrRDtJQUM1RCxXQUFXLEVBQUMsa0JBQWtCO0lBQzlCLFFBQVEsRUFBRTZCLG9CQUFxQjtJQUMvQixLQUFLLEVBQUVWO0VBQVcsRUFBRSxFQUMvQjtJQUFJLFNBQVMsRUFBQztFQUFvQyxHQUNoRDtJQUFJLFNBQVMsRUFBQztFQUEyRCxHQUN2RSxNQUFDLDRDQUFPO0lBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCO0lBQUMsU0FBUyxFQUFDLGFBQWE7SUFBQyxPQUFPLEVBQy9FLE1BQUMsNkRBQVM7TUFBQyxTQUFTLEVBQUMsdUJBQXVCO01BQ2pDLFdBQVcsRUFBQyxrQkFBa0I7TUFDOUIsUUFBUSxFQUFFVSxvQkFBcUI7TUFDL0IsS0FBSyxFQUFFVjtJQUFXLEVBQzlCO0lBQUMsT0FBTyxFQUFDO0VBQU8sR0FDZjtJQUFNLFNBQVMsRUFBQztFQUF1QixHQUFDO0lBQUcsU0FBUyxFQUFDO0VBQXNCLEVBQUUsQ0FBTyxDQUM1RSxDQUNQLEVBQ0psRyxLQUFLLElBQUlHLGlFQUFRLEdBQUcsSUFBSSxHQUN2QixtRUFDRTtJQUFJLFNBQVMsRUFBQztFQUFXLEdBQ3ZCLE1BQUMsNENBQU87SUFBQyxnQkFBZ0IsRUFBQyx1QkFBdUI7SUFBQyxTQUFTLEVBQUMsYUFBYTtJQUFDLE9BQU8sRUFBRSxNQUFDLG1FQUFlLE9BQUc7SUFDN0YsT0FBTyxFQUFDO0VBQU8sR0FDdEI7SUFBTSxTQUFTLEVBQUM7RUFBdUIsR0FBQztJQUFHLFNBQVMsRUFBQztFQUF3QixFQUFFLENBQU8sQ0FDOUUsQ0FDUCxFQUVMO0lBQUksU0FBUyxFQUFDO0VBQVEsR0FDcEIsTUFBQyw0Q0FBTztJQUFDLGdCQUFnQixFQUFDLHVCQUF1QjtJQUFDLFNBQVMsRUFBQyxhQUFhO0lBQ2hFLE9BQU8sRUFBRSxNQUFDLG9FQUFnQixPQUFHO0lBQUMsT0FBTyxFQUFDO0VBQU8sR0FDbEQ7SUFBTSxTQUFTLEVBQUM7RUFBcUMsR0FDbkQ7SUFBRyxTQUFTLEVBQUM7RUFBb0IsRUFBRSxFQUNuQztJQUFNLFNBQVMsRUFBQztFQUE0QyxFQUFFLENBQ3pELENBQ0QsQ0FDUCxDQUNKLEVBRUw7SUFBSSxTQUFTLEVBQUM7RUFBYSxHQUN6QixNQUFDLDRDQUFPO0lBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCO0lBQUMsU0FBUyxFQUFDLGFBQWE7SUFBQyxPQUFPLEVBQUVrRyxZQUFZLEVBQUc7SUFDekYsT0FBTyxFQUFDO0VBQU8sR0FDbEI7SUFBTSxTQUFTLEVBQUM7RUFBOEMsR0FDNUQ7SUFBRyxTQUFTLEVBQUcscUJBQW9CbEQsTUFBTSxDQUFDckYsSUFBSztFQUFFLEVBQUUsRUFDbkQ7SUFBTSxTQUFTLEVBQUM7RUFBMEIsR0FBRXFGLE1BQU0sQ0FBQ3pFLElBQUksQ0FBUSxFQUMvRDtJQUFHLFNBQVMsRUFBQztFQUFnQyxFQUFFLENBQzFDLENBQ0gsQ0FDUCxFQUNKc0IsS0FBSyxJQUFJRyxpRUFBUSxHQUFHLElBQUksR0FDdkIsbUVBQ0U7SUFBSSxTQUFTLEVBQUM7RUFBYSxHQUFDLE1BQUMsNERBQVEsT0FBRSxDQUFLLENBQzNDLENBRUYsQ0FDRTtBQUViLENBQUM7QUFFY29ILHFFQUFNLEU7Ozs7Ozs7Ozs7OztBQ2pIckI7QUFBQSxNQUFNakIsWUFBWSxHQUFHLENBQ25CO0VBQ0VrQixVQUFVLEVBQUUsU0FBUztFQUNyQnJFLE1BQU0sRUFBRSxJQUFJO0VBQ1p6RSxJQUFJLEVBQUUsU0FBUztFQUNmWixJQUFJLEVBQUU7QUFDUixDQUFDLEVBQ0Q7RUFDRTBKLFVBQVUsRUFBRSxTQUFTO0VBQ3JCckUsTUFBTSxFQUFFLElBQUk7RUFDWnpFLElBQUksRUFBRSxTQUFTO0VBQ2ZaLElBQUksRUFBRTtBQUNSLENBQUMsRUFDRDtFQUNFMEosVUFBVSxFQUFFLFNBQVM7RUFDckJyRSxNQUFNLEVBQUUsSUFBSTtFQUNaekUsSUFBSSxFQUFFLFNBQVM7RUFDZlosSUFBSSxFQUFFO0FBQ1IsQ0FBQyxFQUNEO0VBQ0UwSixVQUFVLEVBQUUsUUFBUTtFQUNwQnJFLE1BQU0sRUFBRSxJQUFJO0VBQ1p6RSxJQUFJLEVBQUUsUUFBUTtFQUNkWixJQUFJLEVBQUU7QUFDUixDQUFDLEVBQ0Q7RUFDRTBKLFVBQVUsRUFBRSxTQUFTO0VBQ3JCckUsTUFBTSxFQUFFLElBQUk7RUFDWnpFLElBQUksRUFBRSxTQUFTO0VBQ2ZaLElBQUksRUFBRTtBQUNSLENBQUMsRUFDRDtFQUNFMEosVUFBVSxFQUFFLGNBQWM7RUFDMUJyRSxNQUFNLEVBQUUsSUFBSTtFQUNaekUsSUFBSSxFQUFFLFFBQVE7RUFDZFosSUFBSSxFQUFFO0FBQ1IsQ0FBQyxDQUVGO0FBQ2N3SSwyRUFBWSxFOzs7Ozs7Ozs7Ozs7QUN2QzNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sTUFBTW1CLG9CQUFvQixHQUFHLHNCQUFzQjtBQUNuRCxNQUFNQyxZQUFZLEdBQUcsY0FBYztBQUNuQyxNQUFNQyxlQUFlLEdBQUcsaUJBQWlCOztBQUVoRDtBQUNPLE1BQU1DLFdBQVcsR0FBRyxhQUFhO0FBQ2pDLE1BQU1DLGFBQWEsR0FBRyxlQUFlO0FBQ3JDLE1BQU1DLFdBQVcsR0FBRyxhQUFhO0FBQ2pDLE1BQU1DLFlBQVksR0FBRyxjQUFjO0FBQ25DLE1BQU1DLFlBQVksR0FBRyxjQUFjLEM7Ozs7Ozs7Ozs7OztBQ1YxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sTUFBTUMsVUFBVSxHQUFHLFlBQVk7QUFDL0IsTUFBTXJELGVBQWUsR0FBRyxpQkFBaUI7QUFDekMsTUFBTS9DLGVBQWUsR0FBRyxpQkFBaUI7QUFDekMsTUFBTXFHLG9CQUFvQixHQUFHLHNCQUFzQjtBQUduRCxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBdUI7QUFDckQsTUFBTUMsNEJBQTRCLEdBQUcsOEJBQThCO0FBQ25FLE1BQU1DLCtCQUErQixHQUFHLGlDQUFpQztBQUV6RSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBdUI7QUFFckQsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQTBCO0FBQzNELE1BQU1DLGdCQUFnQixHQUFHLGtCQUFrQjtBQUMzQyxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBbUI7QUFDN0MsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQWtCO0FBRTNDLE1BQU1DLG1CQUFtQixHQUFHLHFCQUFxQjtBQUNqRCxNQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBRXZDLE1BQU1DLFdBQVcsR0FBRyxhQUFhO0FBQ2pDLE1BQU1DLGFBQWEsR0FBRyxlQUFlO0FBQ3JDLE1BQU1DLGlCQUFpQixHQUFHLG1CQUFtQjtBQUU3QyxNQUFNekcsa0JBQWtCLEdBQUcsb0JBQW9CO0FBQy9DLE1BQU1ELGlCQUFpQixHQUFHLG1CQUFtQjtBQUM3QyxNQUFNRCxnQkFBZ0IsR0FBRyxrQkFBa0I7QUFHM0MsTUFBTTRHLFNBQVMsR0FBRyxXQUFXO0FBRTdCLE1BQU12SixlQUFlLEdBQUcsaUJBQWlCO0FBQ3pDLE1BQU1FLHNCQUFzQixHQUFHLHdCQUF3QjtBQUN2RCxNQUFNRCxnQkFBZ0IsR0FBRyxrQkFBa0I7QUFDM0MsTUFBTUUsZ0NBQWdDLEdBQUcsa0NBQWtDO0FBQzNFLE1BQU1DLG9DQUFvQyxHQUFHLHNDQUFzQztBQUVuRixNQUFNWSw0QkFBNEIsR0FBRyw4QkFBOEI7QUFDbkUsTUFBTUQseUJBQXlCLEdBQUcsMkJBQTJCO0FBQzdELE1BQU1FLGtDQUFrQyxHQUFHLG9DQUFvQztBQUMvRSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBd0I7QUFDdkQsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQXdCO0FBRXZELE1BQU1xSSxZQUFZLEdBQUcsY0FBYztBQUNuQyxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFTO0FBQ2xDLE1BQU1DLDRCQUE0QixHQUFHLFNBQVM7QUFFOUMsTUFBTUMsR0FBRyxHQUFHLEtBQUs7QUFDakIsTUFBTUMsT0FBTyxHQUFHLFNBQVM7QUFDekIsTUFBTUMsbUJBQW1CLEdBQUcsU0FBUztBQUVyQyxNQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUNuQixNQUFNQyxRQUFRLEdBQUcsU0FBUztBQUMxQixNQUFNQyxvQkFBb0IsR0FBRyxTQUFTO0FBRXRDLE1BQU1DLFNBQVMsR0FBRyxXQUFXO0FBQzdCLE1BQU1DLGFBQWEsR0FBRyxTQUFTO0FBQy9CLE1BQU1DLHlCQUF5QixHQUFHLFNBQVM7QUFFM0MsTUFBTUMsTUFBTSxHQUFHLFFBQVE7QUFDdkIsTUFBTUMsVUFBVSxHQUFHLFNBQVM7QUFDNUIsTUFBTUMsc0JBQXNCLEdBQUcsU0FBUztBQUV4QyxNQUFNQyxVQUFVLEdBQUcsWUFBWTtBQUMvQixNQUFNQyxjQUFjLEdBQUcsU0FBUztBQUNoQyxNQUFNQywwQkFBMEIsR0FBRyxTQUFTO0FBRTVDLE1BQU1DLFdBQVcsR0FBRyxhQUFhO0FBQ2pDLE1BQU1DLGVBQWUsR0FBRyxTQUFTO0FBQ2pDLE1BQU1DLDJCQUEyQixHQUFHLFNBQVM7QUFFN0MsTUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxNQUFNQyxrQkFBa0IsR0FBRyxTQUFTO0FBQ3BDLE1BQU1DLDhCQUE4QixHQUFHLFNBQVM7QUFFaEQsTUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxNQUFNQyxrQkFBa0IsR0FBRyxTQUFTO0FBQ3BDLE1BQU1DLDhCQUE4QixHQUFHLFNBQVM7QUFFaEQsTUFBTUMsbUJBQW1CLEdBQUcsU0FBUztBQUVyQyxNQUFNekssUUFBUSxHQUFHLEdBQUcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGeUI7QUFDTDtBQUUvQyxNQUFNMEssTUFBTSxHQUFHO0VBQ2JsSCxRQUFRLG9CQUNIbUgsZ0RBQVUsQ0FDZDtFQUNEcEgsSUFBSSxFQUFFcUgscUVBQU07RUFDWjVILE1BQU0sRUFBRTtBQUNWLENBQUM7QUFDYzBILHFFQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWK0I7QUFDTDtBQUUvQyxNQUFNRyxNQUFNLEdBQUc7RUFDYnJILFFBQVEsb0JBQ0hzSCxnREFBVSxDQUNkO0VBQ0R2SCxJQUFJLEVBQUV3SCxxRUFBTTtFQUNaL0gsTUFBTSxFQUFFO0FBQ1YsQ0FBQztBQUNjNkgscUVBQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1YrQjtBQUNMO0FBRS9DLE1BQU1ILE1BQU0sR0FBRztFQUNibEgsUUFBUSxvQkFDSG1ILGdEQUFVLENBQ2Q7RUFDRHBILElBQUksRUFBRXlILHFFQUFNO0VBQ1poSSxNQUFNLEVBQUU7QUFDVixDQUFDO0FBQ2MwSCxxRUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVitCO0FBQ0w7QUFFL0MsTUFBTUEsTUFBTSxHQUFHO0VBQ2JsSCxRQUFRLG9CQUNIbUgsZ0RBQVUsQ0FDZDtFQUNEcEgsSUFBSSxFQUFFMEgscUVBQU07RUFDWmpJLE1BQU0sRUFBRTtBQUNWLENBQUM7QUFDYzBILHFFQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWK0I7QUFDTDtBQUUvQyxNQUFNQSxNQUFNLEdBQUc7RUFDYmxILFFBQVEsb0JBQ0htSCxnREFBVSxDQUNkO0VBQ0RwSCxJQUFJLEVBQUUySCxxRUFBTTtFQUNabEksTUFBTSxFQUFFO0FBQ1YsQ0FBQztBQUNjMEgscUVBQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y2QjtBQUNEO0FBRWpELE1BQU1TLEtBQUssR0FBRztFQUNaM0gsUUFBUSxvQkFDSDRILGtEQUFVLENBQ2Q7RUFDRDdILElBQUksRUFBRThILHFFQUFJO0VBQ1ZySSxNQUFNLEVBQUU7QUFDVixDQUFDO0FBQ2NtSSxvRUFBSyxFOzs7Ozs7Ozs7Ozs7QUNWcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBRXJDLE1BQU1oSSxTQUFTLEdBQUc7RUFDaEJtSSxFQUFFLEVBQUVDLHNEQUFNO0VBQ1ZDLEVBQUUsRUFBRUMsMkRBQU07RUFDVkMsRUFBRSxFQUFFQyxzREFBTTtFQUNWQyxFQUFFLEVBQUVDLHNEQUFNO0VBQ1ZDLEVBQUUsRUFBRUMsc0RBQU07RUFDVkMsRUFBRSxFQUFFQyxzREFBTUE7QUFDWixDQUFDO0FBRWM5SSx3RUFBUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ4QjtBQUVBO0FBUUE7QUFzQkEsSUFBSStJLGNBQUo7QUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSUMsR0FBSixFQUFsQjtBQUNBLE1BQU1DLG9CQUFvQixHQUN4QixRQUFnQ2pLLFNBQWhDLEdBQThELElBRGhFO0FBRUEsTUFBTWtLLFVBQTJDLEdBQUcsRUFBcEQ7QUFFQSxTQUFTQyxXQUFULEdBQXlEO0VBQ3ZEO0VBQ0EsSUFBSUwsY0FBSixFQUFvQjtJQUNsQixPQUFPQSxjQUFQO0VBQ0QsQ0FFRDtFQUNBLElBQUksQ0FBQ0csb0JBQUwsRUFBMkI7SUFDekIsT0FBT0csU0FBUDtFQUNEO0VBRUQsT0FBUU4sY0FBYyxHQUFHLElBQUlHLG9CQUFKLENBQ3RCSSxPQUFELElBQWE7SUFDWEEsT0FBTyxDQUFDQyxPQUFSRCxDQUFpQkUsS0FBRCxJQUFXO01BQ3pCLElBQUksQ0FBQ1IsU0FBUyxDQUFDUyxHQUFWVCxDQUFjUSxLQUFLLENBQUNoRyxNQUFwQndGLENBQUwsRUFBa0M7UUFDaEM7TUFDRDtNQUVELE1BQU1VLEVBQUUsR0FBR1YsU0FBUyxDQUFDVyxHQUFWWCxDQUFjUSxLQUFLLENBQUNoRyxNQUFwQndGLENBQVg7TUFDQSxJQUFJUSxLQUFLLENBQUNJLGNBQU5KLElBQXdCQSxLQUFLLENBQUNLLGlCQUFOTCxHQUEwQixDQUF0RCxFQUF5RDtRQUN2RFQsY0FBYyxDQUFDZSxTQUFmZixDQUF5QlMsS0FBSyxDQUFDaEcsTUFBL0J1RjtRQUNBQyxTQUFTLENBQUNlLE1BQVZmLENBQWlCUSxLQUFLLENBQUNoRyxNQUF2QndGO1FBQ0FVLEVBQUU7TUFDSDtJQUNGLENBWERKO0VBWUQsQ0Fkc0IsRUFldkI7SUFBRVUsVUFBVSxFQUFFO0VBQWQsQ0FmdUIsQ0FBekI7QUFpQkQ7QUFFRCxNQUFNQyxxQkFBcUIsR0FBRyxDQUFDQyxFQUFELEVBQWNSLEVBQWQsS0FBaUM7RUFDN0QsTUFBTVMsUUFBUSxHQUFHZixXQUFXLEVBQTVCO0VBQ0EsSUFBSSxDQUFDZSxRQUFMLEVBQWU7SUFDYixPQUFPLE1BQU0sQ0FBRSxDQUFmO0VBQ0Q7RUFFREEsUUFBUSxDQUFDQyxPQUFURCxDQUFpQkQsRUFBakJDO0VBQ0FuQixTQUFTLENBQUNxQixHQUFWckIsQ0FBY2tCLEVBQWRsQixFQUFrQlUsRUFBbEJWO0VBQ0EsT0FBTyxNQUFNO0lBQ1gsSUFBSTtNQUNGbUIsUUFBUSxDQUFDTCxTQUFUSyxDQUFtQkQsRUFBbkJDO0lBQ0QsQ0FBQyxRQUFPRyxHQUFQLEVBQVk7TUFDWkMsT0FBTyxDQUFDeE0sS0FBUndNLENBQWNELEdBQWRDO0lBQ0Q7SUFDRHZCLFNBQVMsQ0FBQ2UsTUFBVmYsQ0FBaUJrQixFQUFqQmxCO0VBQ0QsQ0FQRDtBQVFELENBaEJEO0FBa0JBLFNBQVN3QixRQUFULENBQ0V0TSxNQURGLEVBRUU5RCxJQUZGLEVBR0VxUSxFQUhGLEVBSUVDLE9BSkYsRUFLUTtFQUNOLFVBQW1DO0VBQ25DLElBQUksQ0FBQyx3QkFBV3RRLElBQVgsQ0FBTCxFQUF1QixPQUN2QjtFQUNBO0VBQ0E7RUFDQTtFQUNBOEQsTUFBTSxDQUFDc00sUUFBUHRNLENBQWdCOUQsSUFBaEI4RCxFQUFzQnVNLEVBQXRCdk0sRUFBMEJ3TSxPQUExQnhNLEVBQW1DeU0sS0FBbkN6TSxDQUEwQ29NLEdBQUQsSUFBUztJQUNoRCxVQUEyQztNQUN6QztNQUNBLE1BQU1BLEdBQU47SUFDRDtFQUNGLENBTERwTSxFQU1BO0VBQ0FpTCxVQUFVLENBQUMvTyxJQUFJLEdBQUcsR0FBUEEsR0FBYXFRLEVBQWQsQ0FBVnRCLEdBQThCLElBQTlCQTtBQUNEO0FBRUQsU0FBU3lCLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWtEO0VBQ2hELE1BQU07SUFBRXJIO0VBQUYsSUFBYXFILEtBQUssQ0FBQ0MsYUFBekI7RUFDQSxPQUNHdEgsTUFBTSxJQUFJQSxNQUFNLEtBQUssT0FBdEIsSUFDQXFILEtBQUssQ0FBQ0UsT0FETixJQUVBRixLQUFLLENBQUNHLE9BRk4sSUFHQUgsS0FBSyxDQUFDSSxRQUhOLElBSUFKLEtBQUssQ0FBQ0ssTUFKTjtFQUlnQjtFQUNmTCxLQUFLLENBQUNNLFdBQU5OLElBQXFCQSxLQUFLLENBQUNNLFdBQU5OLENBQWtCTyxLQUFsQlAsS0FBNEIsQ0FOcEQ7QUFRRDtBQUVELFNBQVNRLFdBQVQsQ0FDRWpJLENBREYsRUFFRWxGLE1BRkYsRUFHRTlELElBSEYsRUFJRXFRLEVBSkYsRUFLRWEsT0FMRixFQU1FQyxPQU5GLEVBT0VDLE1BUEYsRUFRUTtFQUNOLE1BQU07SUFBRUM7RUFBRixJQUFlckksQ0FBQyxDQUFDMEgsYUFBdkI7RUFFQSxJQUFJVyxRQUFRLEtBQUssR0FBYkEsS0FBcUJiLGVBQWUsQ0FBQ3hILENBQUQsQ0FBZndILElBQXNCLENBQUMsd0JBQVd4USxJQUFYLENBQTVDcVIsQ0FBSixFQUFtRTtJQUNqRTtJQUNBO0VBQ0Q7RUFFRHJJLENBQUMsQ0FBQ3NJLGNBQUZ0SSxHQUVBO0VBQ0EsSUFBSW9JLE1BQU0sSUFBSSxJQUFkLEVBQW9CO0lBQ2xCQSxNQUFNLEdBQUdmLEVBQUUsQ0FBQ2tCLE9BQUhsQixDQUFXLEdBQVhBLElBQWtCLENBQTNCZTtFQUNELENBRUQ7RUFDQXROLE1BQU0sQ0FBQ29OLE9BQU8sR0FBRyxTQUFILEdBQWUsTUFBdkIsQ0FBTnBOLENBQXFDOUQsSUFBckM4RCxFQUEyQ3VNLEVBQTNDdk0sRUFBK0M7SUFBRXFOO0VBQUYsQ0FBL0NyTixFQUE0RG9CLElBQTVEcEIsQ0FDRzBOLE9BQUQsSUFBc0I7SUFDcEIsSUFBSSxDQUFDQSxPQUFMLEVBQWM7SUFDZCxJQUFJSixNQUFKLEVBQVk7TUFDVnZNLE1BQU0sQ0FBQzRNLFFBQVA1TSxDQUFnQixDQUFoQkEsRUFBbUIsQ0FBbkJBO01BQ0FULFFBQVEsQ0FBQ0MsSUFBVEQsQ0FBY3NOLEtBQWR0TjtJQUNEO0VBQ0YsQ0FQSE47QUFTRDtBQUVELFNBQVM2TixJQUFULENBQWNuTSxLQUFkLEVBQXlEO0VBQ3ZELFVBQTJDO0lBQ3pDLFNBQVNvTSxlQUFULENBQXlCQyxJQUF6QixFQUlHO01BQ0QsT0FBTyxJQUFJQyxLQUFKLENBQ0osZ0NBQStCRCxJQUFJLENBQUNFLEdBQUksZ0JBQWVGLElBQUksQ0FBQ0csUUFBUyw2QkFBNEJILElBQUksQ0FBQ0ksTUFBTyxhQUE5RyxJQUNHLFFBQ0csU0FESCxHQUVHLEVBSE4sQ0FESyxDQUFQO0lBTUQsQ0FFRDtJQUNBLE1BQU1DLGtCQUFtRCxHQUFHO01BQzFEbFMsSUFBSSxFQUFFO0lBRG9ELENBQTVEO0lBR0EsTUFBTW1TLGFBQWtDLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FDekNGLGtCQUR5Q0UsQ0FBM0M7SUFHQSxhQUFhLENBQUNqRCxPQUFkLENBQXVCNEMsR0FBRCxJQUE0QjtNQUNoRCxJQUFJQSxHQUFHLEtBQUssTUFBWixFQUFvQjtRQUNsQixJQUNFdk0sS0FBSyxDQUFDdU0sR0FBRCxDQUFMdk0sSUFBYyxJQUFkQSxJQUNDLE9BQU9BLEtBQUssQ0FBQ3VNLEdBQUQsQ0FBWixLQUFzQixRQUF0QixJQUFrQyxPQUFPdk0sS0FBSyxDQUFDdU0sR0FBRCxDQUFaLEtBQXNCLFFBRjNELEVBR0U7VUFDQSxNQUFNSCxlQUFlLENBQUM7WUFDcEJHLEdBRG9CO1lBRXBCQyxRQUFRLEVBQUUsc0JBRlU7WUFHcEJDLE1BQU0sRUFBRXpNLEtBQUssQ0FBQ3VNLEdBQUQsQ0FBTHZNLEtBQWUsSUFBZkEsR0FBc0IsTUFBdEJBLEdBQStCLE9BQU9BLEtBQUssQ0FBQ3VNLEdBQUQ7VUFIL0IsQ0FBRCxDQUFyQjtRQUtEO01BQ0YsQ0FYRCxNQVdPO1FBQ0w7UUFDQTtRQUNBLE1BQU1PLENBQVEsR0FBR1AsR0FBakI7TUFDRDtJQUNGLENBakJELEVBbUJBO0lBQ0EsTUFBTVEsa0JBQW1ELEdBQUc7TUFDMURsQyxFQUFFLEVBQUUsSUFEc0Q7TUFFMURhLE9BQU8sRUFBRSxJQUZpRDtNQUcxREUsTUFBTSxFQUFFLElBSGtEO01BSTFERCxPQUFPLEVBQUUsSUFKaUQ7TUFLMURxQixRQUFRLEVBQUUsSUFMZ0Q7TUFNMURwQyxRQUFRLEVBQUU7SUFOZ0QsQ0FBNUQ7SUFRQSxNQUFNcUMsYUFBa0MsR0FBR0wsTUFBTSxDQUFDQyxJQUFQRCxDQUN6Q0csa0JBRHlDSCxDQUEzQztJQUdBLGFBQWEsQ0FBQ2pELE9BQWQsQ0FBdUI0QyxHQUFELElBQTRCO01BQ2hELElBQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO1FBQ2hCLElBQ0V2TSxLQUFLLENBQUN1TSxHQUFELENBQUx2TSxJQUNBLE9BQU9BLEtBQUssQ0FBQ3VNLEdBQUQsQ0FBWixLQUFzQixRQUR0QnZNLElBRUEsT0FBT0EsS0FBSyxDQUFDdU0sR0FBRCxDQUFaLEtBQXNCLFFBSHhCLEVBSUU7VUFDQSxNQUFNSCxlQUFlLENBQUM7WUFDcEJHLEdBRG9CO1lBRXBCQyxRQUFRLEVBQUUsc0JBRlU7WUFHcEJDLE1BQU0sRUFBRSxPQUFPek0sS0FBSyxDQUFDdU0sR0FBRDtVQUhBLENBQUQsQ0FBckI7UUFLRDtNQUNGLENBWkQsTUFZTyxJQUNMQSxHQUFHLEtBQUssU0FBUkEsSUFDQUEsR0FBRyxLQUFLLFFBRFJBLElBRUFBLEdBQUcsS0FBSyxTQUZSQSxJQUdBQSxHQUFHLEtBQUssVUFIUkEsSUFJQUEsR0FBRyxLQUFLLFVBTEgsRUFNTDtRQUNBLElBQUl2TSxLQUFLLENBQUN1TSxHQUFELENBQUx2TSxJQUFjLElBQWRBLElBQXNCLE9BQU9BLEtBQUssQ0FBQ3VNLEdBQUQsQ0FBWixLQUFzQixTQUFoRCxFQUEyRDtVQUN6RCxNQUFNSCxlQUFlLENBQUM7WUFDcEJHLEdBRG9CO1lBRXBCQyxRQUFRLEVBQUUsV0FGVTtZQUdwQkMsTUFBTSxFQUFFLE9BQU96TSxLQUFLLENBQUN1TSxHQUFEO1VBSEEsQ0FBRCxDQUFyQjtRQUtEO01BQ0YsQ0FkTSxNQWNBO1FBQ0w7UUFDQTtRQUNBLE1BQU1PLENBQVEsR0FBR1AsR0FBakI7TUFDRDtJQUNGLENBaENELEVBa0NBO0lBQ0E7SUFDQSxNQUFNVyxTQUFTLEdBQUcvUCxlQUFNZ1EsTUFBTmhRLENBQWEsS0FBYkEsQ0FBbEI7SUFDQSxJQUFJNkMsS0FBSyxDQUFDNEssUUFBTjVLLElBQWtCLENBQUNrTixTQUFTLENBQUNFLE9BQWpDLEVBQTBDO01BQ3hDRixTQUFTLENBQUNFLE9BQVZGLEdBQW9CLElBQXBCQTtNQUNBdkMsT0FBTyxDQUFDMEMsSUFBUjFDLENBQ0UsbUtBREZBO0lBR0Q7RUFDRjtFQUNELE1BQU0yQyxDQUFDLEdBQUd0TixLQUFLLENBQUM0SyxRQUFONUssS0FBbUIsS0FBN0I7RUFFQSxNQUFNLENBQUN1TixRQUFELEVBQVdDLFdBQVgsSUFBMEJyUSxlQUFNK0YsUUFBTi9GLEVBQWhDO0VBRUEsTUFBTW1CLE1BQU0sR0FBRyx5QkFBZjtFQUNBLE1BQU11QixRQUFRLEdBQUl2QixNQUFNLElBQUlBLE1BQU0sQ0FBQ3VCLFFBQWxCLElBQStCLEdBQWhEO0VBRUEsTUFBTTtJQUFFckYsSUFBRjtJQUFRcVE7RUFBUixJQUFlMU4sZUFBTXNRLE9BQU50USxDQUFjLE1BQU07SUFDdkMsTUFBTSxDQUFDdVEsWUFBRCxFQUFlQyxVQUFmLElBQTZCLHlCQUFZOU4sUUFBWixFQUFzQkcsS0FBSyxDQUFDeEYsSUFBNUIsRUFBa0MsSUFBbEMsQ0FBbkM7SUFDQSxPQUFPO01BQ0xBLElBQUksRUFBRWtULFlBREQ7TUFFTDdDLEVBQUUsRUFBRTdLLEtBQUssQ0FBQzZLLEVBQU43SyxHQUNBLHlCQUFZSCxRQUFaLEVBQXNCRyxLQUFLLENBQUM2SyxFQUE1QixDQURBN0ssR0FFQTJOLFVBQVUsSUFBSUQ7SUFKYixDQUFQO0VBTUQsQ0FSb0J2USxFQVFsQixDQUFDMEMsUUFBRCxFQUFXRyxLQUFLLENBQUN4RixJQUFqQixFQUF1QndGLEtBQUssQ0FBQzZLLEVBQTdCLENBUmtCMU4sQ0FBckI7RUFVQSxlQUFNdUIsU0FBTixDQUFnQixNQUFNO0lBQ3BCLElBQ0U0TyxDQUFDLElBQ0RoRSxvQkFEQWdFLElBRUFDLFFBRkFELElBR0FDLFFBQVEsQ0FBQ0ssT0FIVE4sSUFJQSx3QkFBVzlTLElBQVgsQ0FMRixFQU1FO01BQ0E7TUFDQSxNQUFNcVQsWUFBWSxHQUFHdEUsVUFBVSxDQUFDL08sSUFBSSxHQUFHLEdBQVBBLEdBQWFxUSxFQUFkLENBQS9CO01BQ0EsSUFBSSxDQUFDZ0QsWUFBTCxFQUFtQjtRQUNqQixPQUFPeEQscUJBQXFCLENBQUNrRCxRQUFELEVBQVcsTUFBTTtVQUMzQzNDLFFBQVEsQ0FBQ3RNLE1BQUQsRUFBUzlELElBQVQsRUFBZXFRLEVBQWYsQ0FBUkQ7UUFDRCxDQUYyQixDQUE1QjtNQUdEO0lBQ0Y7RUFDRixDQWhCRCxFQWdCRyxDQUFDMEMsQ0FBRCxFQUFJQyxRQUFKLEVBQWMvUyxJQUFkLEVBQW9CcVEsRUFBcEIsRUFBd0J2TSxNQUF4QixDQWhCSDtFQWtCQSxJQUFJO0lBQUU3RCxRQUFGO0lBQVlpUixPQUFaO0lBQXFCQyxPQUFyQjtJQUE4QkM7RUFBOUIsSUFBeUM1TCxLQUE3QyxDQUNBO0VBQ0EsSUFBSSxPQUFPdkYsUUFBUCxLQUFvQixRQUF4QixFQUFrQztJQUNoQ0EsUUFBUSxnQkFBRyx3Q0FBSUEsUUFBSixDQUFYQTtFQUNELENBRUQ7RUFDQSxNQUFNcVQsS0FBVSxHQUFHQyxnQkFBU0MsSUFBVEQsQ0FBY3RULFFBQWRzVCxDQUFuQjtFQUNBLE1BQU1FLFVBS0wsR0FBRztJQUNGQyxHQUFHLEVBQUc1RCxFQUFELElBQWE7TUFDaEIsSUFBSUEsRUFBSixFQUFRa0QsV0FBVyxDQUFDbEQsRUFBRCxDQUFYa0Q7TUFFUixJQUFJTSxLQUFLLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUExQkEsSUFBc0NBLEtBQUssQ0FBQ0ksR0FBaEQsRUFBcUQ7UUFDbkQsSUFBSSxPQUFPSixLQUFLLENBQUNJLEdBQWIsS0FBcUIsVUFBekIsRUFBcUNKLEtBQUssQ0FBQ0ksR0FBTkosQ0FBVXhELEVBQVZ3RCxFQUFyQyxLQUNLLElBQUksT0FBT0EsS0FBSyxDQUFDSSxHQUFiLEtBQXFCLFFBQXpCLEVBQW1DO1VBQ3RDSixLQUFLLENBQUNJLEdBQU5KLENBQVVWLE9BQVZVLEdBQW9CeEQsRUFBcEJ3RDtRQUNEO01BQ0Y7SUFDRixDQVZDO0lBV0ZLLE9BQU8sRUFBRzNLLENBQUQsSUFBeUI7TUFDaEMsSUFBSXNLLEtBQUssQ0FBQzlOLEtBQU44TixJQUFlLE9BQU9BLEtBQUssQ0FBQzlOLEtBQU44TixDQUFZSyxPQUFuQixLQUErQixVQUFsRCxFQUE4RDtRQUM1REwsS0FBSyxDQUFDOU4sS0FBTjhOLENBQVlLLE9BQVpMLENBQW9CdEssQ0FBcEJzSztNQUNEO01BQ0QsSUFBSSxDQUFDdEssQ0FBQyxDQUFDNEssZ0JBQVAsRUFBeUI7UUFDdkIzQyxXQUFXLENBQUNqSSxDQUFELEVBQUlsRixNQUFKLEVBQVk5RCxJQUFaLEVBQWtCcVEsRUFBbEIsRUFBc0JhLE9BQXRCLEVBQStCQyxPQUEvQixFQUF3Q0MsTUFBeEMsQ0FBWEg7TUFDRDtJQUNGO0VBbEJDLENBTEo7RUEwQkEsSUFBSTZCLENBQUosRUFBTztJQUNMVyxVQUFVLENBQUNJLFlBQVhKLEdBQTJCekssQ0FBRCxJQUF5QjtNQUNqRCxJQUFJLENBQUMsd0JBQVdoSixJQUFYLENBQUwsRUFBdUI7TUFDdkIsSUFBSXNULEtBQUssQ0FBQzlOLEtBQU44TixJQUFlLE9BQU9BLEtBQUssQ0FBQzlOLEtBQU44TixDQUFZTyxZQUFuQixLQUFvQyxVQUF2RCxFQUFtRTtRQUNqRVAsS0FBSyxDQUFDOU4sS0FBTjhOLENBQVlPLFlBQVpQLENBQXlCdEssQ0FBekJzSztNQUNEO01BQ0RsRCxRQUFRLENBQUN0TSxNQUFELEVBQVM5RCxJQUFULEVBQWVxUSxFQUFmLEVBQW1CO1FBQUV5RCxRQUFRLEVBQUU7TUFBWixDQUFuQixDQUFSMUQ7SUFDRCxDQU5EcUQ7RUFPRCxDQUVEO0VBQ0E7RUFDQSxJQUFJak8sS0FBSyxDQUFDZ04sUUFBTmhOLElBQW1COE4sS0FBSyxDQUFDUyxJQUFOVCxLQUFlLEdBQWZBLElBQXNCLEVBQUUsVUFBVUEsS0FBSyxDQUFDOU4sS0FBbEIsQ0FBN0MsRUFBd0U7SUFDdEVpTyxVQUFVLENBQUN6VCxJQUFYeVQsR0FBa0IseUJBQ2hCLHVCQUFVcEQsRUFBVixFQUFjdk0sTUFBTSxJQUFJQSxNQUFNLENBQUMyQixNQUEvQixFQUF1QzNCLE1BQU0sSUFBSUEsTUFBTSxDQUFDa1EsYUFBeEQsQ0FEZ0IsQ0FBbEJQO0VBR0Q7RUFFRCxvQkFBTzlRLGVBQU1zUixZQUFOdFIsQ0FBbUIyUSxLQUFuQjNRLEVBQTBCOFEsVUFBMUI5USxDQUFQO0FBQ0Q7ZUFFY2dQLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQ3RWZjs7O0FBR08sU0FBU3VDLHVCQUFULENBQWlDQyxJQUFqQyxFQUF1RDtFQUM1RCxPQUFPQSxJQUFJLENBQUNDLFFBQUxELENBQWMsR0FBZEEsS0FBc0JBLElBQUksS0FBSyxHQUEvQkEsR0FBcUNBLElBQUksQ0FBQ0UsS0FBTEYsQ0FBVyxDQUFYQSxFQUFjLENBQUMsQ0FBZkEsQ0FBckNBLEdBQXlEQSxJQUFoRTtBQUNELENBRUQ7Ozs7QUFJTyxNQUFNRywwQkFBMEIsR0FBR0MsU0FDckNKLFNBRHFDSSxHQVV0Q0wsdUJBVkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQO0FBQ0E7OztBQUNBO0FBc0hBO3lDQXpIQTtBQW1CQSxNQUFNTSxlQUFvQyxHQUFHO0VBQzNDMVEsTUFBTSxFQUFFLElBRG1DO0VBQzdCO0VBQ2QyUSxjQUFjLEVBQUUsRUFGMkI7RUFHM0NDLEtBQUssQ0FBQ3BGLEVBQUQsRUFBaUI7SUFDcEIsSUFBSSxLQUFLeEwsTUFBVCxFQUFpQixPQUFPd0wsRUFBRSxFQUFUO0lBQ2pCLFdBQW1DLEVBRWxDO0VBQ0Y7QUFSMEMsQ0FBN0MsQ0FXQTtBQUNBLE1BQU1xRixpQkFBaUIsR0FBRyxDQUN4QixVQUR3QixFQUV4QixPQUZ3QixFQUd4QixPQUh3QixFQUl4QixRQUp3QixFQUt4QixZQUx3QixFQU14QixZQU53QixFQU94QixVQVB3QixFQVF4QixRQVJ3QixFQVN4QixTQVR3QixFQVV4QixlQVZ3QixDQUExQjtBQVlBLE1BQU1DLFlBQVksR0FBRyxDQUNuQixrQkFEbUIsRUFFbkIscUJBRm1CLEVBR25CLHFCQUhtQixFQUluQixrQkFKbUIsRUFLbkIsaUJBTG1CLEVBTW5CLG9CQU5tQixDQUFyQjtBQVFBLE1BQU1DLGdCQUFnQixHQUFHLENBQ3ZCLE1BRHVCLEVBRXZCLFNBRnVCLEVBR3ZCLFFBSHVCLEVBSXZCLE1BSnVCLEVBS3ZCLFVBTHVCLEVBTXZCLGdCQU51QixDQUF6QixDQVNBO0FBQ0F6QyxNQUFNLENBQUMwQyxjQUFQMUMsQ0FBc0JvQyxlQUF0QnBDLEVBQXVDLFFBQXZDQSxFQUFpRDtFQUMvQzdDLEdBQUcsR0FBRztJQUNKLE9BQU93RixpQkFBT0MsTUFBZDtFQUNEO0FBSDhDLENBQWpENUM7QUFNQXVDLGlCQUFpQixDQUFDeEYsT0FBbEJ3RixDQUEyQk0sS0FBRCxJQUFXO0VBQ25DO0VBQ0E7RUFDQTtFQUNBO0VBQ0E3QyxNQUFNLENBQUMwQyxjQUFQMUMsQ0FBc0JvQyxlQUF0QnBDLEVBQXVDNkMsS0FBdkM3QyxFQUE4QztJQUM1QzdDLEdBQUcsR0FBRztNQUNKLE1BQU16TCxNQUFNLEdBQUdvUixTQUFTLEVBQXhCO01BQ0EsT0FBT3BSLE1BQU0sQ0FBQ21SLEtBQUQsQ0FBYjtJQUNEO0VBSjJDLENBQTlDN0M7QUFNRCxDQVhEdUM7QUFhQSxnQkFBZ0IsQ0FBQ3hGLE9BQWpCLENBQTBCOEYsS0FBRCxJQUFXO0VBQ2xDO0VBQ0E7RUFBRVQsZUFBRCxDQUF5QlMsS0FBekIsSUFBa0MsQ0FBQyxHQUFHcEQsSUFBSixLQUFvQjtJQUNyRCxNQUFNL04sTUFBTSxHQUFHb1IsU0FBUyxFQUF4QjtJQUNBLE9BQU9wUixNQUFNLENBQUNtUixLQUFELENBQU5uUixDQUFjLEdBQUcrTixJQUFqQi9OLENBQVA7RUFDRCxDQUhBO0FBSUYsQ0FORDtBQVFBOFEsWUFBWSxDQUFDekYsT0FBYnlGLENBQXNCbkUsS0FBRCxJQUFXO0VBQzlCK0QsZUFBZSxDQUFDRSxLQUFoQkYsQ0FBc0IsTUFBTTtJQUMxQk8saUJBQU9DLE1BQVBELENBQWNJLEVBQWRKLENBQWlCdEUsS0FBakJzRSxFQUF3QixDQUFDLEdBQUdsRCxJQUFKLEtBQWE7TUFDbkMsTUFBTXVELFVBQVUsR0FBSSxLQUFJM0UsS0FBSyxDQUFDNEUsTUFBTjVFLENBQWEsQ0FBYkEsRUFBZ0I2RSxXQUFoQjdFLEVBQThCLEdBQUVBLEtBQUssQ0FBQzhFLFNBQU45RSxDQUN0RCxDQURzREEsQ0FFdEQsRUFGRjtNQUdBLE1BQU0rRSxnQkFBZ0IsR0FBR2hCLGVBQXpCO01BQ0EsSUFBSWdCLGdCQUFnQixDQUFDSixVQUFELENBQXBCLEVBQWtDO1FBQ2hDLElBQUk7VUFDRkksZ0JBQWdCLENBQUNKLFVBQUQsQ0FBaEJJLENBQTZCLEdBQUczRCxJQUFoQzJEO1FBQ0QsQ0FBQyxRQUFPdEYsR0FBUCxFQUFZO1VBQ1pDLE9BQU8sQ0FBQ3hNLEtBQVJ3TSxDQUFlLHdDQUF1Q2lGLFVBQVcsRUFBakVqRjtVQUNBQSxPQUFPLENBQUN4TSxLQUFSd00sQ0FBZSxHQUFFRCxHQUFHLENBQUNqUCxPQUFRLEtBQUlpUCxHQUFHLENBQUN1RixLQUFNLEVBQTNDdEY7UUFDRDtNQUNGO0lBQ0YsQ0FiRDRFO0VBY0QsQ0FmRFA7QUFnQkQsQ0FqQkRJO0FBbUJBLFNBQVNNLFNBQVQsR0FBNkI7RUFDM0IsSUFBSSxDQUFDVixlQUFlLENBQUMxUSxNQUFyQixFQUE2QjtJQUMzQixNQUFNN0MsT0FBTyxHQUNYLGdDQUNBLHlFQUZGO0lBR0EsTUFBTSxJQUFJNlEsS0FBSixDQUFVN1EsT0FBVixDQUFOO0VBQ0Q7RUFDRCxPQUFPdVQsZUFBZSxDQUFDMVEsTUFBdkI7QUFDRCxDQUVEO2VBQ2UwUSxlLENBRWY7O0FBR08sU0FBU3pRLFNBQVQsR0FBaUM7RUFDdEMsT0FBT3BCLGVBQU0rUyxVQUFOL1MsQ0FBaUJnVCw0QkFBakJoVCxDQUFQO0FBQ0QsQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDTyxNQUFNaVQsWUFBWSxHQUFHLENBQUMsR0FBRy9ELElBQUosS0FBaUM7RUFDM0QyQyxlQUFlLENBQUMxUSxNQUFoQjBRLEdBQXlCLElBQUlPLGdCQUFKLENBQVcsR0FBR2xELElBQWQsQ0FBekIyQztFQUNBQSxlQUFlLENBQUNDLGNBQWhCRCxDQUErQnJGLE9BQS9CcUYsQ0FBd0NsRixFQUFELElBQVFBLEVBQUUsRUFBakRrRjtFQUNBQSxlQUFlLENBQUNDLGNBQWhCRCxHQUFpQyxFQUFqQ0E7RUFFQSxPQUFPQSxlQUFlLENBQUMxUSxNQUF2QjtBQUNELENBTk0sQ0FRUDs7QUFDTyxTQUFTK1Isd0JBQVQsQ0FBa0MvUixNQUFsQyxFQUE4RDtFQUNuRSxNQUFNZ1MsT0FBTyxHQUFHaFMsTUFBaEI7RUFDQSxNQUFNaVMsUUFBUSxHQUFHLEVBQWpCO0VBRUEsS0FBSyxNQUFNQyxRQUFYLElBQXVCckIsaUJBQXZCLEVBQTBDO0lBQ3hDLElBQUksT0FBT21CLE9BQU8sQ0FBQ0UsUUFBRCxDQUFkLEtBQTZCLFFBQWpDLEVBQTJDO01BQ3pDRCxRQUFRLENBQUNDLFFBQUQsQ0FBUkQsR0FBcUIzRCxNQUFNLENBQUM2RCxNQUFQN0QsQ0FDbkI4RCxLQUFLLENBQUNDLE9BQU5ELENBQWNKLE9BQU8sQ0FBQ0UsUUFBRCxDQUFyQkUsSUFBbUMsRUFBbkNBLEdBQXdDLEVBRHJCOUQsRUFFbkIwRCxPQUFPLENBQUNFLFFBQUQsQ0FGWTVELENBQXJCMkQsQ0FHRTtNQUNGO0lBQ0Q7SUFFREEsUUFBUSxDQUFDQyxRQUFELENBQVJELEdBQXFCRCxPQUFPLENBQUNFLFFBQUQsQ0FBNUJEO0VBQ0QsQ0FFRDtFQUNBQSxRQUFRLENBQUNmLE1BQVRlLEdBQWtCaEIsaUJBQU9DLE1BQXpCZTtFQUVBbEIsZ0JBQWdCLENBQUMxRixPQUFqQjBGLENBQTBCSSxLQUFELElBQVc7SUFDbENjLFFBQVEsQ0FBQ2QsS0FBRCxDQUFSYyxHQUFrQixDQUFDLEdBQUdsRSxJQUFKLEtBQW9CO01BQ3BDLE9BQU9pRSxPQUFPLENBQUNiLEtBQUQsQ0FBUGEsQ0FBZSxHQUFHakUsSUFBbEJpRSxDQUFQO0lBQ0QsQ0FGREM7RUFHRCxDQUpEbEI7RUFNQSxPQUFPa0IsUUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDektEO0FBRUE7QUFXZSxTQUFTSyxVQUFULENBSWJDLGlCQUphLEVBSytCO0VBQzVDLFNBQVNDLGlCQUFULENBQTJCOVEsS0FBM0IsRUFBdUM7SUFDckMsb0JBQU8sNkJBQUMsaUJBQUQ7TUFBbUIsTUFBTSxFQUFFO0lBQTNCLEdBQTRDQSxLQUE1QyxFQUFQO0VBQ0Q7RUFFRCxpQkFBaUIsQ0FBQytRLGVBQWxCLEdBQW9DRixpQkFBaUIsQ0FBQ0UsZUFDdEQ7RUFBQTtFQUNFRCxpQkFBRCxDQUEyQkUsbUJBQTNCLEdBQWtESCxpQkFBRCxDQUEyQkcsbUJBQTVFO0VBQ0QsVUFBMkM7SUFDekMsTUFBTXhWLElBQUksR0FDUnFWLGlCQUFpQixDQUFDSSxXQUFsQkosSUFBaUNBLGlCQUFpQixDQUFDclYsSUFBbkRxVixJQUEyRCxTQUQ3RDtJQUVBQyxpQkFBaUIsQ0FBQ0csV0FBbEJILEdBQWlDLGNBQWF0VixJQUFLLEdBQW5Ec1Y7RUFDRDtFQUVELE9BQU9BLGlCQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDakNZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhDQUE4QztBQUN2RTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQW9EO0FBQzdFO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUJBQXlCLDBDQUEwQztBQUNuRTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHlCQUF5QiwyQ0FBMkM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQ0FBc0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQTRDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0Esb0VBQW9FLFVBQVUsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQyxvRUFBb0UsVUFBVSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlEQUFpRCxFQUFFO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDLHdPQUF3TyxVQUFVLEVBQUU7QUFDcFA7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkRBQTZEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7Ozs7dUJDclpBOzs7Ozs7MEJBQUEsQ0FZQTtBQUNBO0FBQ0E7QUFVZSxTQUFTSSxJQUFULEdBQTZCO0VBQzFDLE1BQU1DLEdBQStCLEdBQUd2RSxNQUFNLENBQUN3RSxNQUFQeEUsQ0FBYyxJQUFkQSxDQUF4QztFQUVBLE9BQU87SUFDTCtDLEVBQUUsQ0FBQ3BCLElBQUQsRUFBZThDLE9BQWYsRUFBaUM7TUFDakM7TUFBQyxDQUFDRixHQUFHLENBQUM1QyxJQUFELENBQUg0QyxLQUFjQSxHQUFHLENBQUM1QyxJQUFELENBQUg0QyxHQUFZLEVBQTFCQSxDQUFELEVBQWdDclIsSUFBaEMsQ0FBcUN1UixPQUFyQztJQUNGLENBSEk7SUFLTEMsR0FBRyxDQUFDL0MsSUFBRCxFQUFlOEMsT0FBZixFQUFpQztNQUNsQyxJQUFJRixHQUFHLENBQUM1QyxJQUFELENBQVAsRUFBZTtRQUNiNEMsR0FBRyxDQUFDNUMsSUFBRCxDQUFINEMsQ0FBVUksTUFBVkosQ0FBaUJBLEdBQUcsQ0FBQzVDLElBQUQsQ0FBSDRDLENBQVVwRixPQUFWb0YsQ0FBa0JFLE9BQWxCRixNQUErQixDQUFoREEsRUFBbUQsQ0FBbkRBO01BQ0Q7SUFDRixDQVRJO0lBV0xLLElBQUksQ0FBQ2pELElBQUQsRUFBZSxHQUFHa0QsSUFBbEIsRUFBK0I7TUFDakM7TUFDQTtNQUFDLENBQUNOLEdBQUcsQ0FBQzVDLElBQUQsQ0FBSDRDLElBQWEsRUFBZCxFQUFrQnRDLEtBQWxCLEdBQTBCM1QsR0FBMUIsQ0FBK0JtVyxPQUFELElBQXNCO1FBQ25EQSxPQUFPLENBQUMsR0FBR0ksSUFBSixDQUFQSjtNQUNELENBRkE7SUFHRjtFQWhCSSxDQUFQO0FBa0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7QUFLQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Q0EzQkEsNEJBQ0E7QUF3Q0EsTUFBTUssUUFBUSxHQUFJM0MsTUFBRCxJQUFrRCxFQUFuRTtBQUVBLFNBQVM0QyxzQkFBVCxHQUFrQztFQUNoQyxPQUFPL0UsTUFBTSxDQUFDNkQsTUFBUDdELENBQWMsSUFBSU4sS0FBSixDQUFVLGlCQUFWLENBQWRNLEVBQTRDO0lBQ2pEZ0YsU0FBUyxFQUFFO0VBRHNDLENBQTVDaEYsQ0FBUDtBQUdEO0FBRUQsU0FBU2lGLGFBQVQsQ0FBdUJsRCxJQUF2QixFQUFxQ21ELE1BQXJDLEVBQXNEO0VBQ3BELE9BQU9BLE1BQU0sSUFBSW5ELElBQUksQ0FBQ29ELFVBQUxwRCxDQUFnQixHQUFoQkEsQ0FBVm1ELEdBQ0huRCxJQUFJLEtBQUssR0FBVEEsR0FDRSx3REFBMkJtRCxNQUEzQixDQURGbkQsR0FFRyxHQUFFbUQsTUFBTyxHQUFFbkQsSUFBSyxFQUhoQm1ELEdBSUhuRCxJQUpKO0FBS0Q7QUFFTSxTQUFTcUQsU0FBVCxDQUNMckQsSUFESyxFQUVMMU8sTUFGSyxFQUdMdU8sYUFISyxFQUlMO0VBQ0EsSUFBSU8sS0FBSixFQUFxQyxFQUlwQztFQUNELE9BQU9KLElBQVA7QUFDRDtBQUVNLFNBQVNzRCxTQUFULENBQW1CdEQsSUFBbkIsRUFBaUMxTyxNQUFqQyxFQUFrRDtFQUN2RCxJQUFJOE8sS0FBSixFQUFxQyxFQUlwQztFQUNELE9BQU9KLElBQVA7QUFDRDtBQUVNLFNBQVN1RCxXQUFULENBQXFCdkQsSUFBckIsRUFBNEM7RUFDakQsT0FBT0EsSUFBSSxLQUFLK0MsUUFBVC9DLElBQXFCQSxJQUFJLENBQUNvRCxVQUFMcEQsQ0FBZ0IrQyxRQUFRLEdBQUcsR0FBM0IvQyxDQUE1QjtBQUNEO0FBRU0sU0FBU3dELFdBQVQsQ0FBcUJ4RCxJQUFyQixFQUEyQztFQUNoRDtFQUNBLE9BQU9rRCxhQUFhLENBQUNsRCxJQUFELEVBQU8rQyxRQUFQLENBQXBCO0FBQ0Q7QUFFTSxTQUFTVSxXQUFULENBQXFCekQsSUFBckIsRUFBMkM7RUFDaEQsT0FBT0EsSUFBSSxDQUFDRSxLQUFMRixDQUFXK0MsUUFBUSxDQUFDVyxNQUFwQjFELEtBQStCLEdBQXRDO0FBQ0QsQ0FFRDs7O0FBR08sU0FBUzJELFVBQVQsQ0FBb0JDLEdBQXBCLEVBQTBDO0VBQy9DLElBQUlBLEdBQUcsQ0FBQ1IsVUFBSlEsQ0FBZSxHQUFmQSxDQUFKLEVBQXlCLE9BQU8sSUFBUDtFQUN6QixJQUFJO0lBQ0Y7SUFDQSxNQUFNQyxjQUFjLEdBQUcsK0JBQXZCO0lBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlDLEdBQUosQ0FBUUgsR0FBUixFQUFhQyxjQUFiLENBQWpCO0lBQ0EsT0FBT0MsUUFBUSxDQUFDRSxNQUFURixLQUFvQkQsY0FBcEJDLElBQXNDUCxXQUFXLENBQUNPLFFBQVEsQ0FBQzVTLFFBQVYsQ0FBeEQ7RUFDRCxDQUFDLFFBQU9pTixDQUFQLEVBQVU7SUFDVixPQUFPLEtBQVA7RUFDRDtBQUNGO0FBSU0sU0FBUzhGLGFBQVQsQ0FDTEMsS0FESyxFQUVMQyxVQUZLLEVBR0xDLEtBSEssRUFJTDtFQUNBLElBQUlDLGlCQUFpQixHQUFHLEVBQXhCO0VBRUEsTUFBTUMsWUFBWSxHQUFHLCtCQUFjSixLQUFkLENBQXJCO0VBQ0EsTUFBTUssYUFBYSxHQUFHRCxZQUFZLENBQUNFLE1BQW5DO0VBQ0EsTUFBTUMsY0FBYztFQUNsQjtFQUNBLENBQUNOLFVBQVUsS0FBS0QsS0FBZkMsR0FBdUIsbUNBQWdCRyxZQUFoQixFQUE4QkgsVUFBOUIsQ0FBdkJBLEdBQW1FLEVBQXBFO0VBQ0E7RUFDQTtFQUNBQyxLQUxGO0VBT0FDLGlCQUFpQixHQUFHSCxLQUFwQkc7RUFDQSxNQUFNSyxNQUFNLEdBQUd6RyxNQUFNLENBQUNDLElBQVBELENBQVlzRyxhQUFadEcsQ0FBZjtFQUVBLElBQ0UsQ0FBQ3lHLE1BQU0sQ0FBQ0MsS0FBUEQsQ0FBY0UsS0FBRCxJQUFXO0lBQ3ZCLElBQUl2WCxLQUFLLEdBQUdvWCxjQUFjLENBQUNHLEtBQUQsQ0FBZEgsSUFBeUIsRUFBckM7SUFDQSxNQUFNO01BQUVJLE1BQUY7TUFBVUM7SUFBVixJQUF1QlAsYUFBYSxDQUFDSyxLQUFELENBQTFDLENBRUE7SUFDQTtJQUNBLElBQUlHLFFBQVEsR0FBSSxJQUFHRixNQUFNLEdBQUcsS0FBSCxHQUFXLEVBQUcsR0FBRUQsS0FBTSxHQUEvQztJQUNBLElBQUlFLFFBQUosRUFBYztNQUNaQyxRQUFRLEdBQUksR0FBRSxDQUFDMVgsS0FBRCxHQUFTLEdBQVQsR0FBZSxFQUFHLElBQUcwWCxRQUFTLEdBQTVDQTtJQUNEO0lBQ0QsSUFBSUYsTUFBTSxJQUFJLENBQUM5QyxLQUFLLENBQUNDLE9BQU5ELENBQWMxVSxLQUFkMFUsQ0FBZixFQUFxQzFVLEtBQUssR0FBRyxDQUFDQSxLQUFELENBQVJBO0lBRXJDLE9BQ0UsQ0FBQ3lYLFFBQVEsSUFBSUYsS0FBSyxJQUFJSCxjQUF0QjtJQUNBO0lBQ0NKLGlCQUFpQixHQUNoQkEsaUJBQWlCLENBQUV0SCxPQUFuQnNILENBQ0VVLFFBREZWLEVBRUVRLE1BQU0sR0FDRHhYLEtBQUQsQ0FBb0JkLEdBQXBCLENBQXdCeVksNkJBQXhCLEVBQThDQyxJQUE5QyxDQUFtRCxHQUFuRCxDQURFLEdBRUYsbUNBQXFCNVgsS0FBckIsQ0FKTmdYLEtBS0ssR0FSUCxDQURGO0VBV0QsQ0F2QkFLLENBREgsRUF5QkU7SUFDQUwsaUJBQWlCLEdBQUcsRUFBcEJBLENBQXVCO0lBRXZCO0lBQ0E7RUFDRDtFQUNELE9BQU87SUFDTEssTUFESztJQUVMUSxNQUFNLEVBQUViO0VBRkgsQ0FBUDtBQUlEO0FBRUQsU0FBU2Msa0JBQVQsQ0FBNEJmLEtBQTVCLEVBQW1ETSxNQUFuRCxFQUFxRTtFQUNuRSxNQUFNVSxhQUE2QixHQUFHLEVBQXRDO0VBRUFuSCxNQUFNLENBQUNDLElBQVBELENBQVltRyxLQUFabkcsRUFBbUJqRCxPQUFuQmlELENBQTRCTCxHQUFELElBQVM7SUFDbEMsSUFBSSxDQUFDOEcsTUFBTSxDQUFDblcsUUFBUG1XLENBQWdCOUcsR0FBaEI4RyxDQUFMLEVBQTJCO01BQ3pCVSxhQUFhLENBQUN4SCxHQUFELENBQWJ3SCxHQUFxQmhCLEtBQUssQ0FBQ3hHLEdBQUQsQ0FBMUJ3SDtJQUNEO0VBQ0YsQ0FKRG5IO0VBS0EsT0FBT21ILGFBQVA7QUFDRCxDQUVEOzs7O0FBSU8sU0FBU0MsV0FBVCxDQUNMQyxXQURLLEVBRUx6WixJQUZLLEVBR0wwWixTQUhLLEVBSUc7RUFDUjtFQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJekIsR0FBSixDQUFRdUIsV0FBUixFQUFxQixVQUFyQixDQUFiO0VBQ0EsTUFBTUcsV0FBVyxHQUNmLE9BQU81WixJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQyxpQ0FBcUJBLElBQXJCLENBRHBDO0VBRUEsSUFBSTtJQUNGLE1BQU02WixRQUFRLEdBQUcsSUFBSTNCLEdBQUosQ0FBUTBCLFdBQVIsRUFBcUJELElBQXJCLENBQWpCO0lBQ0FFLFFBQVEsQ0FBQ3hVLFFBQVR3VSxHQUFvQix3REFBMkJBLFFBQVEsQ0FBQ3hVLFFBQXBDLENBQXBCd1U7SUFDQSxJQUFJQyxjQUFjLEdBQUcsRUFBckI7SUFFQSxJQUNFLCtCQUFlRCxRQUFRLENBQUN4VSxRQUF4QixLQUNBd1UsUUFBUSxDQUFDRSxZQURULElBRUFMLFNBSEYsRUFJRTtNQUNBLE1BQU1uQixLQUFLLEdBQUcseUNBQXVCc0IsUUFBUSxDQUFDRSxZQUFoQyxDQUFkO01BRUEsTUFBTTtRQUFFVixNQUFGO1FBQVVSO01BQVYsSUFBcUJULGFBQWEsQ0FDdEN5QixRQUFRLENBQUN4VSxRQUQ2QixFQUV0Q3dVLFFBQVEsQ0FBQ3hVLFFBRjZCLEVBR3RDa1QsS0FIc0MsQ0FBeEM7TUFNQSxJQUFJYyxNQUFKLEVBQVk7UUFDVlMsY0FBYyxHQUFHLGlDQUFxQjtVQUNwQ3pVLFFBQVEsRUFBRWdVLE1BRDBCO1VBRXBDVyxJQUFJLEVBQUVILFFBQVEsQ0FBQ0csSUFGcUI7VUFHcEN6QixLQUFLLEVBQUVlLGtCQUFrQixDQUFDZixLQUFELEVBQVFNLE1BQVI7UUFIVyxDQUFyQixDQUFqQmlCO01BS0Q7SUFDRixDQUVEO0lBQ0EsTUFBTTVHLFlBQVksR0FDaEIyRyxRQUFRLENBQUMxQixNQUFUMEIsS0FBb0JGLElBQUksQ0FBQ3hCLE1BQXpCMEIsR0FDSUEsUUFBUSxDQUFDN1osSUFBVDZaLENBQWN4RixLQUFkd0YsQ0FBb0JBLFFBQVEsQ0FBQzFCLE1BQVQwQixDQUFnQmhDLE1BQXBDZ0MsQ0FESkEsR0FFSUEsUUFBUSxDQUFDN1osSUFIZjtJQUtBLE9BQVEwWixTQUFTLEdBQ2IsQ0FBQ3hHLFlBQUQsRUFBZTRHLGNBQWMsSUFBSTVHLFlBQWpDLENBRGEsR0FFYkEsWUFGSjtFQUdELENBQUMsUUFBT1osQ0FBUCxFQUFVO0lBQ1YsT0FBUW9ILFNBQVMsR0FBRyxDQUFDRSxXQUFELENBQUgsR0FBbUJBLFdBQXBDO0VBQ0Q7QUFDRjtBQUVELE1BQU1LLGVBQWUsR0FBR0MsTUFBTSxDQUFDLGlCQUFELENBQTlCO0FBQ08sU0FBU0MsZ0JBQVQsQ0FBMEJqSyxHQUExQixFQUE2QztFQUNsRCxPQUFPa0MsTUFBTSxDQUFDMEMsY0FBUDFDLENBQXNCbEMsR0FBdEJrQyxFQUEyQjZILGVBQTNCN0gsRUFBNEMsRUFBNUNBLENBQVA7QUFDRDtBQUVELFNBQVNnSSxZQUFULENBQXNCdFcsTUFBdEIsRUFBMENpVSxHQUExQyxFQUFvRDFILEVBQXBELEVBQTZEO0VBQzNEO0VBQ0E7RUFDQSxPQUFPO0lBQ0wwSCxHQUFHLEVBQUVKLFdBQVcsQ0FBQzZCLFdBQVcsQ0FBQzFWLE1BQU0sQ0FBQ3VCLFFBQVIsRUFBa0IwUyxHQUFsQixDQUFaLENBRFg7SUFFTDFILEVBQUUsRUFBRUEsRUFBRSxHQUFHc0gsV0FBVyxDQUFDNkIsV0FBVyxDQUFDMVYsTUFBTSxDQUFDdUIsUUFBUixFQUFrQmdMLEVBQWxCLENBQVosQ0FBZCxHQUFtREE7RUFGcEQsQ0FBUDtBQUlEO0FBcURELE1BQU1nSyx1QkFBdUIsR0FDM0I5RixVQUVBLEtBSEY7QUFLQSxTQUFTK0YsVUFBVCxDQUFvQnZDLEdBQXBCLEVBQWlDd0MsUUFBakMsRUFBaUU7RUFDL0QsT0FBTyxLQUFLLENBQUN4QyxHQUFELEVBQU07SUFDaEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBeUMsV0FBVyxFQUFFO0VBWkcsQ0FBTixDQUFMLENBYUp0VixJQWJJLENBYUV1VixHQUFELElBQVM7SUFDZixJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsRUFBVCxFQUFhO01BQ1gsSUFBSUgsUUFBUSxHQUFHLENBQVhBLElBQWdCRSxHQUFHLENBQUNFLE1BQUpGLElBQWMsR0FBbEMsRUFBdUM7UUFDckMsT0FBT0gsVUFBVSxDQUFDdkMsR0FBRCxFQUFNd0MsUUFBUSxHQUFHLENBQWpCLENBQWpCO01BQ0Q7TUFDRCxNQUFNLElBQUl6SSxLQUFKLENBQVcsNkJBQVgsQ0FBTjtJQUNEO0lBRUQsT0FBTzJJLEdBQUcsQ0FBQ0csSUFBSkgsRUFBUDtFQUNELENBdEJNLENBQVA7QUF1QkQ7QUFFRCxTQUFTSSxhQUFULENBQXVCQyxRQUF2QixFQUF5Q0MsY0FBekMsRUFBa0U7RUFDaEUsT0FBTyxVQUFVLENBQUNELFFBQUQsRUFBV0MsY0FBYyxHQUFHLENBQUgsR0FBTyxDQUFoQyxDQUFWLENBQTZDeEssS0FBN0MsQ0FBb0RMLEdBQUQsSUFBZ0I7SUFDeEU7SUFDQTtJQUNBO0lBQ0EsSUFBSSxDQUFDNkssY0FBTCxFQUFxQjtNQUNuQlosZ0JBQWdCLENBQUNqSyxHQUFELENBQWhCaUs7SUFDRDtJQUNELE1BQU1qSyxHQUFOO0VBQ0QsQ0FSTSxDQUFQO0FBU0Q7QUFFYyxNQUFNNkUsTUFBNkI7RUFPaEQ7O0FBUGdELElBT2hELENBSUE7RUFrQkFpRyxXQUFXLENBQ1QzVixTQURTLEVBRVRrVCxNQUZTLEVBR1RsSSxHQUhTLEVBSVQ7SUFDRTRLLFlBREY7SUFFRUMsVUFGRjtJQUdFQyxHQUhGO0lBSUVDLE9BSkY7SUFLRUMsU0FMRjtJQU1FQyxrQkFORjtJQU9FcEwsR0FQRjtJQVFFcUwsWUFSRjtJQVNFQyxVQVRGO0lBVUUvVixNQVZGO0lBV0VnVyxPQVhGO0lBWUV6SDtFQVpGLENBSlMsRUErQlQ7SUFBQSxLQTNERnFFLEtBMkRFO0lBQUEsS0ExREZoVCxRQTBERTtJQUFBLEtBekRGa1QsS0F5REU7SUFBQSxLQXhERm1ELE1Bd0RFO0lBQUEsS0F2REZ4RSxRQXVERTtJQUFBLEtBbERGeUUsVUFrREU7SUFBQSxLQWhERkMsR0FnREUsR0FoRGtDLEVBZ0RsQztJQUFBLEtBL0NGQyxHQStDRTtJQUFBLEtBOUNGQyxHQThDRTtJQUFBLEtBN0NGWixVQTZDRTtJQUFBLEtBNUNGYSxJQTRDRTtJQUFBLEtBM0NGL0csTUEyQ0U7SUFBQSxLQTFDRmdILFFBMENFO0lBQUEsS0F6Q0ZDLEtBeUNFO0lBQUEsS0F4Q0ZULFVBd0NFO0lBQUEsS0F2Q0ZVLGNBdUNFO0lBQUEsS0F0Q0ZDLFFBc0NFO0lBQUEsS0FyQ0YxVyxNQXFDRTtJQUFBLEtBcENGZ1csT0FvQ0U7SUFBQSxLQW5DRnpILGFBbUNFO0lBQUEsS0FxR0ZvSSxVQXJHRSxHQXFHWXBULENBQUQsSUFBNEI7TUFDdkMsTUFBTXFULEtBQUssR0FBR3JULENBQUMsQ0FBQ3FULEtBQWhCO01BRUEsSUFBSSxDQUFDQSxLQUFMLEVBQVk7UUFDVjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1VBQUVoWCxRQUFGO1VBQVlrVDtRQUFaLElBQXNCLElBQTVCO1FBQ0EsS0FBSytELFdBQUwsQ0FDRSxjQURGLEVBRUUsaUNBQXFCO1VBQUVqWCxRQUFRLEVBQUVzUyxXQUFXLENBQUN0UyxRQUFELENBQXZCO1VBQW1Da1Q7UUFBbkMsQ0FBckIsQ0FGRixFQUdFLG9CQUhGO1FBS0E7TUFDRDtNQUVELElBQUksQ0FBQzhELEtBQUssQ0FBQ0UsR0FBWCxFQUFnQjtRQUNkO01BQ0Q7TUFFRCxNQUFNO1FBQUV4RSxHQUFGO1FBQU8xSCxFQUFQO1FBQVdDO01BQVgsSUFBdUIrTCxLQUE3QjtNQUVBLE1BQU07UUFBRWhYO01BQUYsSUFBZSx3Q0FBaUIwUyxHQUFqQixDQUFyQixDQUVBO01BQ0E7TUFDQSxJQUFJLEtBQUtrRSxLQUFMLElBQWM1TCxFQUFFLEtBQUssS0FBS3FMLE1BQTFCLElBQW9DclcsUUFBUSxLQUFLLEtBQUtBLFFBQTFELEVBQW9FO1FBQ2xFO01BQ0QsQ0FFRDtNQUNBO01BQ0EsSUFBSSxLQUFLMFcsSUFBTCxJQUFhLENBQUMsS0FBS0EsSUFBTCxDQUFVTSxLQUFWLENBQWxCLEVBQW9DO1FBQ2xDO01BQ0Q7TUFFRCxLQUFLRyxNQUFMLENBQ0UsY0FERixFQUVFekUsR0FGRixFQUdFMUgsRUFIRixFQUlFK0IsTUFBTSxDQUFDNkQsTUFBUDdELENBQWMsRUFBZEEsRUFBa0I5QixPQUFsQjhCLEVBQTJCO1FBQ3pCakIsT0FBTyxFQUFFYixPQUFPLENBQUNhLE9BQVJiLElBQW1CLEtBQUs2TDtNQURSLENBQTNCL0osQ0FKRjtJQVFELENBdkpDLENBQ0E7SUFDQSxLQUFLaUcsS0FBTCxHQUFhLHFEQUF3QmhULFNBQXhCLENBQWIsQ0FFQTtJQUNBLEtBQUtzVyxVQUFMLEdBQWtCLEVBQWxCLENBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSXRXLFNBQVEsS0FBSyxTQUFqQixFQUE0QjtNQUMxQixLQUFLc1csVUFBTCxDQUFnQixLQUFLdEQsS0FBckIsSUFBOEI7UUFDNUJnRCxTQUQ0QjtRQUU1Qm9CLFdBQVcsRUFBRW5CLGtCQUZlO1FBRzVCOVYsS0FBSyxFQUFFeVYsWUFIcUI7UUFJNUIvSyxHQUo0QjtRQUs1QndNLE9BQU8sRUFBRXpCLFlBQVksSUFBSUEsWUFBWSxDQUFDeUIsT0FMVjtRQU01QkMsT0FBTyxFQUFFMUIsWUFBWSxJQUFJQSxZQUFZLENBQUMwQjtNQU5WLENBQTlCO0lBUUQ7SUFFRCxLQUFLaEIsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtNQUN6Qk4sU0FBUyxFQUFFRixHQURjO01BRXpCc0IsV0FBVyxFQUFFO0lBRlksQ0FBM0IsQ0FPQTtJQUNBO0lBQ0EsS0FBS3pILE1BQUwsR0FBY0QsTUFBTSxDQUFDQyxNQUFyQjtJQUVBLEtBQUtrRyxVQUFMLEdBQWtCQSxVQUFsQjtJQUNBLEtBQUs3VixRQUFMLEdBQWdCQSxTQUFoQjtJQUNBLEtBQUtrVCxLQUFMLEdBQWFBLE1BQWIsQ0FDQTtJQUNBO0lBQ0EsS0FBS21ELE1BQUw7SUFDRTtJQUNBLCtCQUFlclcsU0FBZixLQUE0QnVYLGFBQWEsQ0FBQ0MsVUFBMUMsR0FBdUR4WCxTQUF2RCxHQUFrRWdMLEdBRnBFO0lBR0EsS0FBSzZHLFFBQUwsR0FBZ0JBLFFBQWhCO0lBQ0EsS0FBSzJFLEdBQUwsR0FBV04sWUFBWDtJQUNBLEtBQUtPLEdBQUwsR0FBVyxJQUFYO0lBQ0EsS0FBS0UsUUFBTCxHQUFnQlosT0FBaEIsQ0FDQTtJQUNBO0lBQ0EsS0FBS2EsS0FBTCxHQUFhLElBQWI7SUFFQSxLQUFLVCxVQUFMLEdBQWtCQSxVQUFsQjtJQUVBLElBQUlqSCxLQUFKLEVBQXFDLEVBSXBDO0lBRUQsV0FBbUMsRUEyQ2xDO0VBQ0Y7RUFzRER1SSxNQUFNLEdBQVM7SUFDYmpZLE1BQU0sQ0FBQ2tZLFFBQVBsWSxDQUFnQmlZLE1BQWhCalk7RUFDRCxDQUVEOzs7RUFHQW1ZLElBQUksR0FBRztJQUNMblksTUFBTSxDQUFDb1ksT0FBUHBZLENBQWVtWSxJQUFmblk7RUFDRCxDQUVEOzs7Ozs7RUFNQVMsSUFBSSxDQUFDeVMsR0FBRCxFQUFXMUgsRUFBTyxHQUFHMEgsR0FBckIsRUFBMEJ6SCxPQUEwQixHQUFHLEVBQXZELEVBQTJEO0lBQzdEO0lBQUMsQ0FBQztNQUFFeUgsR0FBRjtNQUFPMUg7SUFBUCxJQUFjK0osWUFBWSxDQUFDLElBQUQsRUFBT3JDLEdBQVAsRUFBWTFILEVBQVosQ0FBM0I7SUFDRCxPQUFPLEtBQUttTSxNQUFMLENBQVksV0FBWixFQUF5QnpFLEdBQXpCLEVBQThCMUgsRUFBOUIsRUFBa0NDLE9BQWxDLENBQVA7RUFDRCxDQUVEOzs7Ozs7RUFNQVksT0FBTyxDQUFDNkcsR0FBRCxFQUFXMUgsRUFBTyxHQUFHMEgsR0FBckIsRUFBMEJ6SCxPQUEwQixHQUFHLEVBQXZELEVBQTJEO0lBQ2hFO0lBQUMsQ0FBQztNQUFFeUgsR0FBRjtNQUFPMUg7SUFBUCxJQUFjK0osWUFBWSxDQUFDLElBQUQsRUFBT3JDLEdBQVAsRUFBWTFILEVBQVosQ0FBM0I7SUFDRCxPQUFPLEtBQUttTSxNQUFMLENBQVksY0FBWixFQUE0QnpFLEdBQTVCLEVBQWlDMUgsRUFBakMsRUFBcUNDLE9BQXJDLENBQVA7RUFDRDtFQUVELE1BQU1rTSxNQUFOLENBQ0VVLE1BREYsRUFFRW5GLEdBRkYsRUFHRTFILEVBSEYsRUFJRUMsT0FKRixFQUtvQjtJQUNsQixJQUFJLENBQUN3SCxVQUFVLENBQUNDLEdBQUQsQ0FBZixFQUFzQjtNQUNwQmxULE1BQU0sQ0FBQ2tZLFFBQVBsWSxDQUFnQjdFLElBQWhCNkUsR0FBdUJrVCxHQUF2QmxUO01BQ0EsT0FBTyxLQUFQO0lBQ0Q7SUFFRCxJQUFJLENBQUV5TCxPQUFELENBQWlCNk0sRUFBdEIsRUFBMEI7TUFDeEIsS0FBS2xCLEtBQUwsR0FBYSxLQUFiO0lBQ0QsQ0FDRDtJQUNBLElBQUltQixTQUFKLEVBQVE7TUFDTkMsV0FBVyxDQUFDQyxJQUFaRCxDQUFpQixhQUFqQkE7SUFDRDtJQUVELElBQUksS0FBS25CLGNBQVQsRUFBeUI7TUFDdkIsS0FBS3FCLGtCQUFMLENBQXdCLEtBQUtyQixjQUE3QjtJQUNEO0lBRUQ3TCxFQUFFLEdBQUdtSCxTQUFTLENBQUNuSCxFQUFELEVBQUssS0FBSzVLLE1BQVYsRUFBa0IsS0FBS3VPLGFBQXZCLENBQWQzRDtJQUNBLE1BQU1tTixTQUFTLEdBQUcvRixTQUFTLENBQ3pCQyxXQUFXLENBQUNySCxFQUFELENBQVhxSCxHQUFrQkUsV0FBVyxDQUFDdkgsRUFBRCxDQUE3QnFILEdBQW9DckgsRUFEWCxFQUV6QixLQUFLNUssTUFGb0IsQ0FBM0I7SUFJQSxLQUFLeVcsY0FBTCxHQUFzQjdMLEVBQXRCLENBRUE7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBRUMsT0FBRCxDQUFpQjZNLEVBQWxCLElBQXdCLEtBQUtNLGVBQUwsQ0FBcUJELFNBQXJCLENBQTVCLEVBQTZEO01BQzNELEtBQUs5QixNQUFMLEdBQWM4QixTQUFkO01BQ0F6SSxNQUFNLENBQUNDLE1BQVBELENBQWNpQyxJQUFkakMsQ0FBbUIsaUJBQW5CQSxFQUFzQzFFLEVBQXRDMEUsRUFDQTtNQUNBLEtBQUt1SCxXQUFMLENBQWlCWSxNQUFqQixFQUF5Qm5GLEdBQXpCLEVBQThCMUgsRUFBOUIsRUFBa0NDLE9BQWxDO01BQ0EsS0FBS29OLFlBQUwsQ0FBa0JGLFNBQWxCO01BQ0EsS0FBS0csTUFBTCxDQUFZLEtBQUtoQyxVQUFMLENBQWdCLEtBQUt0RCxLQUFyQixDQUFaO01BQ0F0RCxNQUFNLENBQUNDLE1BQVBELENBQWNpQyxJQUFkakMsQ0FBbUIsb0JBQW5CQSxFQUF5QzFFLEVBQXpDMEU7TUFDQSxPQUFPLElBQVA7SUFDRCxDQUVEO0lBQ0E7SUFDQTtJQUNBLE1BQU02SSxLQUFLLEdBQUcsTUFBTSxLQUFLMUMsVUFBTCxDQUFnQjJDLFdBQWhCLEVBQXBCO0lBQ0EsTUFBTTtNQUFFQyxVQUFVLEVBQUVDO0lBQWQsSUFBMkIsTUFBTSxLQUFLN0MsVUFBTCxDQUFnQjhDLHFCQUF2RDtJQUVBLElBQUlDLE1BQU0sR0FBRyx3Q0FBaUJsRyxHQUFqQixDQUFiO0lBRUEsSUFBSTtNQUFFMVMsUUFBRjtNQUFZa1Q7SUFBWixJQUFzQjBGLE1BQTFCO0lBRUFBLE1BQU0sR0FBRyxLQUFLQyxZQUFMLENBQWtCRCxNQUFsQixFQUEwQkwsS0FBMUIsQ0FBVEs7SUFFQSxJQUFJQSxNQUFNLENBQUM1WSxRQUFQNFksS0FBb0I1WSxRQUF4QixFQUFrQztNQUNoQ0EsUUFBUSxHQUFHNFksTUFBTSxDQUFDNVksUUFBbEJBO01BQ0EwUyxHQUFHLEdBQUcsaUNBQXFCa0csTUFBckIsQ0FBTmxHO0lBQ0QsQ0FFRDtJQUNBO0lBQ0E7SUFDQTFTLFFBQVEsR0FBR0EsUUFBUSxHQUNmLHFEQUF3QnVTLFdBQVcsQ0FBQ3ZTLFFBQUQsQ0FBbkMsQ0FEZSxHQUVmQSxRQUZKQSxDQUlBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLENBQUMsS0FBSzhZLFFBQUwsQ0FBY1gsU0FBZCxDQUFMLEVBQStCO01BQzdCTixNQUFNLEdBQUcsY0FBVEE7SUFDRDtJQUVELElBQUk3RSxLQUFLLEdBQUcscURBQXdCaFQsUUFBeEIsQ0FBWjtJQUNBLE1BQU07TUFBRThMLE9BQU8sR0FBRztJQUFaLElBQXNCYixPQUE1QixDQUVBO0lBQ0E7SUFDQSxJQUFJNkMsVUFBVSxHQUFHOUMsRUFBakI7SUFFQSxJQUFJa0UsSUFBSixFQUFxQztNQUNuQ3BCLFVBQVUsR0FBRyw4QkFDWCx3Q0FBaUI5QyxFQUFqQixFQUFxQmhMLFFBRFYsRUFFWHVZLEtBRlcsRUFHWDFHLFFBSFcsRUFJWDZHLFFBSlcsRUFLWHhGLEtBTFcsRUFNVnpGLENBQUQsSUFBZSxLQUFLb0wsWUFBTCxDQUFrQjtRQUFFN1ksUUFBUSxFQUFFeU47TUFBWixDQUFsQixFQUFtQzhLLEtBQW5DLEVBQTBDdlksUUFOOUMsQ0FBYjhOO01BU0EsSUFBSUEsVUFBVSxLQUFLOUMsRUFBbkIsRUFBdUI7UUFDckIsTUFBTStOLGFBQWEsR0FBRyxxREFDcEIsS0FBS0YsWUFBTCxDQUNFOUwsTUFBTSxDQUFDNkQsTUFBUDdELENBQWMsRUFBZEEsRUFBa0I2TCxNQUFsQjdMLEVBQTBCO1VBQUUvTSxRQUFRLEVBQUU4TjtRQUFaLENBQTFCZixDQURGLEVBRUV3TCxLQUZGLEVBR0UsS0FIRixFQUlFdlksUUFMa0IsQ0FBdEIsQ0FRQTtRQUNBO1FBQ0EsSUFBSXVZLEtBQUssQ0FBQ2xiLFFBQU5rYixDQUFlUSxhQUFmUixDQUFKLEVBQW1DO1VBQ2pDdkYsS0FBSyxHQUFHK0YsYUFBUi9GO1VBQ0FoVCxRQUFRLEdBQUcrWSxhQUFYL1k7VUFDQTRZLE1BQU0sQ0FBQzVZLFFBQVA0WSxHQUFrQjVZLFFBQWxCNFk7VUFDQWxHLEdBQUcsR0FBRyxpQ0FBcUJrRyxNQUFyQixDQUFObEc7UUFDRDtNQUNGO0lBQ0Y7SUFDRDVFLFVBQVUsR0FBR3NFLFNBQVMsQ0FBQ0csV0FBVyxDQUFDekUsVUFBRCxDQUFaLEVBQTBCLEtBQUsxTixNQUEvQixDQUF0QjBOO0lBRUEsSUFBSSwrQkFBZWtGLEtBQWYsQ0FBSixFQUEyQjtNQUN6QixNQUFNZ0csUUFBUSxHQUFHLHdDQUFpQmxMLFVBQWpCLENBQWpCO01BQ0EsTUFBTW1GLFVBQVUsR0FBRytGLFFBQVEsQ0FBQ2haLFFBQTVCO01BRUEsTUFBTWlaLFVBQVUsR0FBRywrQkFBY2pHLEtBQWQsQ0FBbkI7TUFDQSxNQUFNa0csVUFBVSxHQUFHLG1DQUFnQkQsVUFBaEIsRUFBNEJoRyxVQUE1QixDQUFuQjtNQUNBLE1BQU1rRyxpQkFBaUIsR0FBR25HLEtBQUssS0FBS0MsVUFBcEM7TUFDQSxNQUFNd0IsY0FBYyxHQUFHMEUsaUJBQWlCLEdBQ3BDcEcsYUFBYSxDQUFDQyxLQUFELEVBQVFDLFVBQVIsRUFBb0JDLEtBQXBCLENBRHVCLEdBRW5DLEVBRkw7TUFJQSxJQUFJLENBQUNnRyxVQUFELElBQWdCQyxpQkFBaUIsSUFBSSxDQUFDMUUsY0FBYyxDQUFDVCxNQUF6RCxFQUFrRTtRQUNoRSxNQUFNb0YsYUFBYSxHQUFHck0sTUFBTSxDQUFDQyxJQUFQRCxDQUFZa00sVUFBVSxDQUFDM0YsTUFBdkJ2RyxFQUErQnNNLE1BQS9CdE0sQ0FDbkIyRyxLQUFELElBQVcsQ0FBQ1IsS0FBSyxDQUFDUSxLQUFELENBREczRyxDQUF0QjtRQUlBLElBQUlxTSxhQUFhLENBQUM1RyxNQUFkNEcsR0FBdUIsQ0FBM0IsRUFBOEI7VUFDNUIsVUFBMkM7WUFDekN0TyxPQUFPLENBQUMwQyxJQUFSMUMsQ0FDRyxHQUNDcU8saUJBQWlCLEdBQ1osb0JBRFksR0FFWixpQ0FDTiw4QkFKRCxHQUtHLGVBQWNDLGFBQWEsQ0FBQ3JGLElBQWRxRixDQUNiLElBRGFBLENBRWIsOEJBUk50TztVQVVEO1VBRUQsTUFBTSxJQUFJMkIsS0FBSixDQUNKLENBQUMwTSxpQkFBaUIsR0FDYiwwQkFBeUJ6RyxHQUFJLG9DQUFtQzBHLGFBQWEsQ0FBQ3JGLElBQWRxRixDQUMvRCxJQUQrREEsQ0FFL0QsaUNBSFksR0FJYiw4QkFBNkJuRyxVQUFXLDhDQUE2Q0QsS0FBTSxLQUpoRyxJQUtHLDRDQUNDbUcsaUJBQWlCLEdBQ2IsMkJBRGEsR0FFYixzQkFDTCxFQVZDLENBQU47UUFZRDtNQUNGLENBaENELE1BZ0NPLElBQUlBLGlCQUFKLEVBQXVCO1FBQzVCbk8sRUFBRSxHQUFHLGlDQUNIK0IsTUFBTSxDQUFDNkQsTUFBUDdELENBQWMsRUFBZEEsRUFBa0JpTSxRQUFsQmpNLEVBQTRCO1VBQzFCL00sUUFBUSxFQUFFeVUsY0FBYyxDQUFDVCxNQURDO1VBRTFCZCxLQUFLLEVBQUVlLGtCQUFrQixDQUFDZixLQUFELEVBQVF1QixjQUFjLENBQUNqQixNQUF2QjtRQUZDLENBQTVCekcsQ0FERyxDQUFML0I7TUFNRCxDQVBNLE1BT0E7UUFDTDtRQUNBK0IsTUFBTSxDQUFDNkQsTUFBUDdELENBQWNtRyxLQUFkbkcsRUFBcUJtTSxVQUFyQm5NO01BQ0Q7SUFDRjtJQUVEMkMsTUFBTSxDQUFDQyxNQUFQRCxDQUFjaUMsSUFBZGpDLENBQW1CLGtCQUFuQkEsRUFBdUMxRSxFQUF2QzBFO0lBRUEsSUFBSTtNQUNGLE1BQU00SixTQUFTLEdBQUcsTUFBTSxLQUFLQyxZQUFMLENBQ3RCdkcsS0FEc0IsRUFFdEJoVCxRQUZzQixFQUd0QmtULEtBSHNCLEVBSXRCbEksRUFKc0IsRUFLdEJjLE9BTHNCLENBQXhCO01BT0EsSUFBSTtRQUFFeE4sS0FBRjtRQUFTNkIsS0FBVDtRQUFnQmtYLE9BQWhCO1FBQXlCQztNQUF6QixJQUFxQ2dDLFNBQXpDLENBRUE7TUFDQSxJQUNFLENBQUNqQyxPQUFPLElBQUlDLE9BQVosS0FDQW5YLEtBREEsSUFFQ0EsS0FBRCxDQUFlcVosU0FGZixJQUdDclosS0FBRCxDQUFlcVosU0FBZixDQUF5QkMsWUFKM0IsRUFLRTtRQUNBLE1BQU1DLFdBQVcsR0FBSXZaLEtBQUQsQ0FBZXFaLFNBQWYsQ0FBeUJDLFlBQTdDLENBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSUMsV0FBVyxDQUFDeEgsVUFBWndILENBQXVCLEdBQXZCQSxDQUFKLEVBQWlDO1VBQy9CLE1BQU1DLFVBQVUsR0FBRyx3Q0FBaUJELFdBQWpCLENBQW5CO1VBQ0EsS0FBS2IsWUFBTCxDQUFrQmMsVUFBbEIsRUFBOEJwQixLQUE5QjtVQUVBLElBQUlBLEtBQUssQ0FBQ2xiLFFBQU5rYixDQUFlb0IsVUFBVSxDQUFDM1osUUFBMUJ1WSxDQUFKLEVBQXlDO1lBQ3ZDLE9BQU8sS0FBS3BCLE1BQUwsQ0FDTCxjQURLLEVBRUx1QyxXQUZLLEVBR0xBLFdBSEssRUFJTHpPLE9BSkssQ0FBUDtVQU1EO1FBQ0Y7UUFFRHpMLE1BQU0sQ0FBQ2tZLFFBQVBsWSxDQUFnQjdFLElBQWhCNkUsR0FBdUJrYSxXQUF2QmxhO1FBQ0EsT0FBTyxJQUFJb2EsT0FBSixDQUFZLE1BQU0sQ0FBRSxDQUFwQixDQUFQO01BQ0Q7TUFFRGxLLE1BQU0sQ0FBQ0MsTUFBUEQsQ0FBY2lDLElBQWRqQyxDQUFtQixxQkFBbkJBLEVBQTBDMUUsRUFBMUMwRTtNQUNBLEtBQUt1SCxXQUFMLENBQ0VZLE1BREYsRUFFRW5GLEdBRkYsRUFHRVAsU0FBUyxDQUFDbkgsRUFBRCxFQUFLLEtBQUs1SyxNQUFWLEVBQWtCLEtBQUt1TyxhQUF2QixDQUhYLEVBSUUxRCxPQUpGO01BT0EsVUFBMkM7UUFDekMsTUFBTTRPLE9BQVksR0FBRyxLQUFLdkQsVUFBTCxDQUFnQixPQUFoQixFQUF5Qk4sU0FBOUM7UUFDRXhXLE1BQUQsQ0FBZ0JzYSxJQUFoQixDQUFxQkMsYUFBckIsR0FDQ0YsT0FBTyxDQUFDM0ksZUFBUjJJLEtBQTRCQSxPQUFPLENBQUMxSSxtQkFBcEMwSSxJQUNBLENBQUVQLFNBQVMsQ0FBQ3RELFNBQVgsQ0FBNkI5RSxlQUYvQjtNQUdGO01BRUQsTUFBTSxLQUFLdEcsR0FBTCxDQUFTb0ksS0FBVCxFQUFnQmhULFFBQWhCLEVBQTJCa1QsS0FBM0IsRUFBa0NpRixTQUFsQyxFQUE2Q21CLFNBQTdDLEVBQXdEcE8sS0FBeEQsQ0FDSHZILENBQUQsSUFBTztRQUNMLElBQUlBLENBQUMsQ0FBQ29PLFNBQU4sRUFBaUJ6VCxLQUFLLEdBQUdBLEtBQUssSUFBSXFGLENBQWpCckYsQ0FBakIsS0FDSyxNQUFNcUYsQ0FBTjtNQUNOLENBSkcsQ0FBTjtNQU9BLElBQUlyRixLQUFKLEVBQVc7UUFDVG9SLE1BQU0sQ0FBQ0MsTUFBUEQsQ0FBY2lDLElBQWRqQyxDQUFtQixrQkFBbkJBLEVBQXVDcFIsS0FBdkNvUixFQUE4Q3lJLFNBQTlDekk7UUFDQSxNQUFNcFIsS0FBTjtNQUNEO01BRUQsSUFBSTRRLEtBQUosRUFBMkMsRUFJMUM7TUFDRFEsTUFBTSxDQUFDQyxNQUFQRCxDQUFjaUMsSUFBZGpDLENBQW1CLHFCQUFuQkEsRUFBMEMxRSxFQUExQzBFO01BRUEsT0FBTyxJQUFQO0lBQ0QsQ0FBQyxRQUFPN0UsR0FBUCxFQUFZO01BQ1osSUFBSUEsR0FBRyxDQUFDa0gsU0FBUixFQUFtQjtRQUNqQixPQUFPLEtBQVA7TUFDRDtNQUNELE1BQU1sSCxHQUFOO0lBQ0Q7RUFDRjtFQUVEb00sV0FBVyxDQUNUWSxNQURTLEVBRVRuRixHQUZTLEVBR1QxSCxFQUhTLEVBSVRDLE9BQTBCLEdBQUcsRUFKcEIsRUFLSDtJQUNOLFVBQTJDO01BQ3pDLElBQUksT0FBT3pMLE1BQU0sQ0FBQ29ZLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7UUFDekM5TSxPQUFPLENBQUN4TSxLQUFSd00sQ0FBZSwyQ0FBZkE7UUFDQTtNQUNEO01BRUQsSUFBSSxPQUFPdEwsTUFBTSxDQUFDb1ksT0FBUHBZLENBQWVxWSxNQUFmclksQ0FBUCxLQUFrQyxXQUF0QyxFQUFtRDtRQUNqRHNMLE9BQU8sQ0FBQ3hNLEtBQVJ3TSxDQUFlLDJCQUEwQitNLE1BQU8sbUJBQWhEL007UUFDQTtNQUNEO0lBQ0Y7SUFFRCxJQUFJK00sTUFBTSxLQUFLLFdBQVhBLElBQTBCLHlCQUFhN00sRUFBM0MsRUFBK0M7TUFDN0MsS0FBSzhMLFFBQUwsR0FBZ0I3TCxPQUFPLENBQUNhLE9BQXhCO01BQ0EsTUFBTSxDQUFDOEwsT0FBUCxDQUFlQyxNQUFmLEVBQ0U7UUFDRW5GLEdBREY7UUFFRTFILEVBRkY7UUFHRUMsT0FIRjtRQUlFaU0sR0FBRyxFQUFFO01BSlAsQ0FERjtNQU9FO01BQ0E7TUFDQTtNQUNBLEVBVkYsRUFXRWxNLEVBWEY7SUFhRDtFQUNGO0VBRUQsTUFBTWdQLG9CQUFOLENBQ0VuUCxHQURGLEVBRUU3SyxRQUZGLEVBR0VrVCxLQUhGLEVBSUVsSSxFQUpGLEVBS0VpUCxhQUxGLEVBTTZCO0lBQzNCLElBQUlwUCxHQUFHLENBQUNrSCxTQUFSLEVBQW1CO01BQ2pCO01BQ0EsTUFBTWxILEdBQU47SUFDRDtJQUVELElBQUkrSixlQUFlLElBQUkvSixHQUFuQitKLElBQTBCcUYsYUFBOUIsRUFBNkM7TUFDM0N2SyxNQUFNLENBQUNDLE1BQVBELENBQWNpQyxJQUFkakMsQ0FBbUIsa0JBQW5CQSxFQUF1QzdFLEdBQXZDNkUsRUFBNEMxRSxFQUE1QzBFLEVBRUE7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBbFEsTUFBTSxDQUFDa1ksUUFBUGxZLENBQWdCN0UsSUFBaEI2RSxHQUF1QndMLEVBQXZCeEwsQ0FFQTtNQUNBO01BQ0EsTUFBTXNTLHNCQUFzQixFQUE1QjtJQUNEO0lBRUQsSUFBSTtNQUNGLE1BQU07UUFBRW9JLElBQUksRUFBRWxFLFNBQVI7UUFBbUJvQjtNQUFuQixJQUFtQyxNQUFNLEtBQUsrQyxjQUFMLENBQzdDLFNBRDZDLENBQS9DO01BR0EsTUFBTWIsU0FBMkIsR0FBRztRQUNsQ3RELFNBRGtDO1FBRWxDb0IsV0FGa0M7UUFHbEN2TSxHQUhrQztRQUlsQ3ZNLEtBQUssRUFBRXVNO01BSjJCLENBQXBDO01BT0EsSUFBSTtRQUNGeU8sU0FBUyxDQUFDblosS0FBVm1aLEdBQWtCLE1BQU0sS0FBS3BJLGVBQUwsQ0FBcUI4RSxTQUFyQixFQUFnQztVQUN0RG5MLEdBRHNEO1VBRXREN0ssUUFGc0Q7VUFHdERrVDtRQUhzRCxDQUFoQyxDQUF4Qm9HO01BS0QsQ0FBQyxRQUFPYyxNQUFQLEVBQWU7UUFDZnRQLE9BQU8sQ0FBQ3hNLEtBQVJ3TSxDQUFjLHlDQUFkQSxFQUF5RHNQLE1BQXpEdFA7UUFDQXdPLFNBQVMsQ0FBQ25aLEtBQVZtWixHQUFrQixFQUFsQkE7TUFDRDtNQUVELE9BQU9BLFNBQVA7SUFDRCxDQUFDLFFBQU9lLFlBQVAsRUFBcUI7TUFDckIsT0FBTyxLQUFLTCxvQkFBTCxDQUEwQkssWUFBMUIsRUFBd0NyYSxRQUF4QyxFQUFrRGtULEtBQWxELEVBQXlEbEksRUFBekQsRUFBNkQsSUFBN0QsQ0FBUDtJQUNEO0VBQ0Y7RUFFRCxNQUFNdU8sWUFBTixDQUNFdkcsS0FERixFQUVFaFQsUUFGRixFQUdFa1QsS0FIRixFQUlFbEksRUFKRixFQUtFYyxPQUFnQixHQUFHLEtBTHJCLEVBTTZCO0lBQzNCLElBQUk7TUFDRixNQUFNd08sZUFBZSxHQUFHLEtBQUtoRSxVQUFMLENBQWdCdEQsS0FBaEIsQ0FBeEI7TUFFQSxJQUFJbEgsT0FBTyxJQUFJd08sZUFBWHhPLElBQThCLEtBQUtrSCxLQUFMLEtBQWVBLEtBQWpELEVBQXdEO1FBQ3RELE9BQU9zSCxlQUFQO01BQ0Q7TUFFRCxNQUFNaEIsU0FBMkIsR0FBR2dCLGVBQWUsR0FDL0NBLGVBRCtDLEdBRS9DLE1BQU0sS0FBS0gsY0FBTCxDQUFvQm5ILEtBQXBCLEVBQTJCblQsSUFBM0IsQ0FBaUN1VixHQUFELEtBQVU7UUFDOUNZLFNBQVMsRUFBRVosR0FBRyxDQUFDOEUsSUFEK0I7UUFFOUM5QyxXQUFXLEVBQUVoQyxHQUFHLENBQUNnQyxXQUY2QjtRQUc5Q0MsT0FBTyxFQUFFakMsR0FBRyxDQUFDbUYsR0FBSm5GLENBQVFpQyxPQUg2QjtRQUk5Q0MsT0FBTyxFQUFFbEMsR0FBRyxDQUFDbUYsR0FBSm5GLENBQVFrQztNQUo2QixDQUFWLENBQWhDLENBRlY7TUFTQSxNQUFNO1FBQUV0QixTQUFGO1FBQWFxQixPQUFiO1FBQXNCQztNQUF0QixJQUFrQ2dDLFNBQXhDO01BRUEsVUFBMkM7UUFDekMsTUFBTTtVQUFFa0I7UUFBRixJQUF5QkMsbUJBQU8sQ0FBQywwQkFBRCxDQUF0QztRQUNBLElBQUksQ0FBQ0Qsa0JBQWtCLENBQUN4RSxTQUFELENBQXZCLEVBQW9DO1VBQ2xDLE1BQU0sSUFBSXZKLEtBQUosQ0FDSCx5REFBd0R6TSxRQUFTLEdBRDlELENBQU47UUFHRDtNQUNGO01BRUQsSUFBSXlWLFFBQUo7TUFFQSxJQUFJNEIsT0FBTyxJQUFJQyxPQUFmLEVBQXdCO1FBQ3RCN0IsUUFBUSxHQUFHLEtBQUtJLFVBQUwsQ0FBZ0I2RSxXQUFoQixDQUNULGlDQUFxQjtVQUFFMWEsUUFBRjtVQUFZa1Q7UUFBWixDQUFyQixDQURTLEVBRVRYLFdBQVcsQ0FBQ3ZILEVBQUQsQ0FGRixFQUdUcU0sT0FIUyxFQUlULEtBQUtqWCxNQUpJLEVBS1QsS0FBS3VPLGFBTEksQ0FBWDhHO01BT0Q7TUFFRCxNQUFNdFYsS0FBSyxHQUFHLE1BQU0sS0FBS3dhLFFBQUwsQ0FBZ0MsTUFDbER0RCxPQUFPLEdBQ0gsS0FBS3VELGNBQUwsQ0FBb0JuRixRQUFwQixDQURHLEdBRUg2QixPQUFPLEdBQ1AsS0FBS3VELGNBQUwsQ0FBb0JwRixRQUFwQixDQURPLEdBRVAsS0FBS3ZFLGVBQUwsQ0FDRThFLFNBREY7TUFFRTtNQUNBO1FBQ0VoVyxRQURGO1FBRUVrVCxLQUZGO1FBR0VtRCxNQUFNLEVBQUVyTDtNQUhWLENBSEYsQ0FMYyxDQUFwQjtNQWdCQXNPLFNBQVMsQ0FBQ25aLEtBQVZtWixHQUFrQm5aLEtBQWxCbVo7TUFDQSxLQUFLaEQsVUFBTCxDQUFnQnRELEtBQWhCLElBQXlCc0csU0FBekI7TUFDQSxPQUFPQSxTQUFQO0lBQ0QsQ0FBQyxRQUFPek8sR0FBUCxFQUFZO01BQ1osT0FBTyxLQUFLbVAsb0JBQUwsQ0FBMEJuUCxHQUExQixFQUErQjdLLFFBQS9CLEVBQXlDa1QsS0FBekMsRUFBZ0RsSSxFQUFoRCxDQUFQO0lBQ0Q7RUFDRjtFQUVESixHQUFHLENBQ0RvSSxLQURDLEVBRURoVCxRQUZDLEVBR0RrVCxLQUhDLEVBSURsSSxFQUpDLEVBS0Q4UCxJQUxDLEVBTWM7SUFDZixLQUFLM0UsVUFBTCxHQUFrQixLQUFsQjtJQUVBLEtBQUtuRCxLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLaFQsUUFBTCxHQUFnQkEsUUFBaEI7SUFDQSxLQUFLa1QsS0FBTCxHQUFhQSxLQUFiO0lBQ0EsS0FBS21ELE1BQUwsR0FBY3JMLEVBQWQ7SUFDQSxPQUFPLEtBQUtzTixNQUFMLENBQVl3QyxJQUFaLENBQVA7RUFDRCxDQUVEOzs7O0VBSUFDLGNBQWMsQ0FBQzlRLEVBQUQsRUFBNkI7SUFDekMsS0FBS3lNLElBQUwsR0FBWXpNLEVBQVo7RUFDRDtFQUVEbU8sZUFBZSxDQUFDcE4sRUFBRCxFQUFzQjtJQUNuQyxJQUFJLENBQUMsS0FBS3FMLE1BQVYsRUFBa0IsT0FBTyxLQUFQO0lBQ2xCLE1BQU0sQ0FBQzJFLFlBQUQsRUFBZUMsT0FBZixJQUEwQixLQUFLNUUsTUFBTCxDQUFZNVUsS0FBWixDQUFrQixHQUFsQixDQUFoQztJQUNBLE1BQU0sQ0FBQ3laLFlBQUQsRUFBZUMsT0FBZixJQUEwQm5RLEVBQUUsQ0FBQ3ZKLEtBQUh1SixDQUFTLEdBQVRBLENBQWhDLENBRUE7SUFDQSxJQUFJbVEsT0FBTyxJQUFJSCxZQUFZLEtBQUtFLFlBQTVCQyxJQUE0Q0YsT0FBTyxLQUFLRSxPQUE1RCxFQUFxRTtNQUNuRSxPQUFPLElBQVA7SUFDRCxDQUVEO0lBQ0EsSUFBSUgsWUFBWSxLQUFLRSxZQUFyQixFQUFtQztNQUNqQyxPQUFPLEtBQVA7SUFDRCxDQUVEO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsT0FBT0QsT0FBTyxLQUFLRSxPQUFuQjtFQUNEO0VBRUQ5QyxZQUFZLENBQUNyTixFQUFELEVBQW1CO0lBQzdCLE1BQU0sR0FBRzJKLElBQUgsSUFBVzNKLEVBQUUsQ0FBQ3ZKLEtBQUh1SixDQUFTLEdBQVRBLENBQWpCLENBQ0E7SUFDQSxJQUFJMkosSUFBSSxLQUFLLEVBQWIsRUFBaUI7TUFDZm5WLE1BQU0sQ0FBQzRNLFFBQVA1TSxDQUFnQixDQUFoQkEsRUFBbUIsQ0FBbkJBO01BQ0E7SUFDRCxDQUVEO0lBQ0EsTUFBTTRiLElBQUksR0FBR3JjLFFBQVEsQ0FBQ3NjLGNBQVR0YyxDQUF3QjRWLElBQXhCNVYsQ0FBYjtJQUNBLElBQUlxYyxJQUFKLEVBQVU7TUFDUkEsSUFBSSxDQUFDRSxjQUFMRjtNQUNBO0lBQ0QsQ0FDRDtJQUNBO0lBQ0EsTUFBTUcsTUFBTSxHQUFHeGMsUUFBUSxDQUFDeWMsaUJBQVR6YyxDQUEyQjRWLElBQTNCNVYsRUFBaUMsQ0FBakNBLENBQWY7SUFDQSxJQUFJd2MsTUFBSixFQUFZO01BQ1ZBLE1BQU0sQ0FBQ0QsY0FBUEM7SUFDRDtFQUNGO0VBRUR6QyxRQUFRLENBQUN6QyxNQUFELEVBQTBCO0lBQ2hDLE9BQU8sS0FBS0EsTUFBTCxLQUFnQkEsTUFBdkI7RUFDRDtFQUVEd0MsWUFBWSxDQUFDYyxVQUFELEVBQXdCcEIsS0FBeEIsRUFBeUNrRCxhQUFhLEdBQUcsSUFBekQsRUFBK0Q7SUFDekUsTUFBTTtNQUFFemI7SUFBRixJQUFlMlosVUFBckI7SUFDQSxNQUFNK0IsYUFBYSxHQUFHLHFEQUNwQiw4Q0FBb0JELGFBQWEsR0FBR2xKLFdBQVcsQ0FBQ3ZTLFFBQUQsQ0FBZCxHQUE0QkEsUUFBN0QsQ0FEb0IsQ0FBdEI7SUFJQSxJQUFJMGIsYUFBYSxLQUFLLE1BQWxCQSxJQUE0QkEsYUFBYSxLQUFLLFNBQWxELEVBQTZEO01BQzNELE9BQU8vQixVQUFQO0lBQ0QsQ0FFRDtJQUNBLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ2xiLFFBQU5rYixDQUFlbUQsYUFBZm5ELENBQUwsRUFBcUM7TUFDbkM7TUFDQUEsS0FBSyxDQUFDb0QsSUFBTnBELENBQVkyQixJQUFELElBQVU7UUFDbkIsSUFDRSwrQkFBZUEsSUFBZixLQUNBLCtCQUFjQSxJQUFkLEVBQW9CMEIsRUFBcEIsQ0FBdUJDLElBQXZCLENBQTRCSCxhQUE1QixDQUZGLEVBR0U7VUFDQS9CLFVBQVUsQ0FBQzNaLFFBQVgyWixHQUFzQjhCLGFBQWEsR0FBR25KLFdBQVcsQ0FBQzRILElBQUQsQ0FBZCxHQUF1QkEsSUFBMURQO1VBQ0EsT0FBTyxJQUFQO1FBQ0Q7TUFDRixDQVJEcEI7SUFTRDtJQUNELE9BQU9vQixVQUFQO0VBQ0QsQ0FFRDs7Ozs7O0VBTUEsTUFBTTVPLFFBQU4sQ0FDRTJILEdBREYsRUFFRTJELE1BQWMsR0FBRzNELEdBRm5CLEVBR0V6SCxPQUF3QixHQUFHLEVBSDdCLEVBSWlCO0lBQ2YsSUFBSTJOLE1BQU0sR0FBRyx3Q0FBaUJsRyxHQUFqQixDQUFiO0lBRUEsSUFBSTtNQUFFMVM7SUFBRixJQUFlNFksTUFBbkI7SUFFQSxNQUFNTCxLQUFLLEdBQUcsTUFBTSxLQUFLMUMsVUFBTCxDQUFnQjJDLFdBQWhCLEVBQXBCO0lBRUFJLE1BQU0sR0FBRyxLQUFLQyxZQUFMLENBQWtCRCxNQUFsQixFQUEwQkwsS0FBMUIsQ0FBVEs7SUFFQSxJQUFJQSxNQUFNLENBQUM1WSxRQUFQNFksS0FBb0I1WSxRQUF4QixFQUFrQztNQUNoQ0EsUUFBUSxHQUFHNFksTUFBTSxDQUFDNVksUUFBbEJBO01BQ0EwUyxHQUFHLEdBQUcsaUNBQXFCa0csTUFBckIsQ0FBTmxHO0lBQ0QsQ0FFRDtJQUNBLFVBQTJDO01BQ3pDO0lBQ0Q7SUFFRCxNQUFNTSxLQUFLLEdBQUcscURBQXdCaFQsUUFBeEIsQ0FBZDtJQUNBLE1BQU00WixPQUFPLENBQUN0SSxHQUFSc0ksQ0FBWSxDQUNoQixLQUFLL0QsVUFBTCxDQUFnQmlHLFlBQWhCLENBQ0VwSixHQURGLEVBRUUyRCxNQUZGLEVBR0UsS0FBS2pXLE1BSFAsRUFJRSxLQUFLdU8sYUFKUCxDQURnQixFQU9oQixLQUFLa0gsVUFBTCxDQUFnQjVLLE9BQU8sQ0FBQ3dELFFBQVJ4RCxHQUFtQixVQUFuQkEsR0FBZ0MsVUFBaEQsRUFBNEQrSCxLQUE1RCxDQVBnQixDQUFaNEcsQ0FBTjtFQVNEO0VBRUQsTUFBTU8sY0FBTixDQUFxQm5ILEtBQXJCLEVBQTREO0lBQzFELElBQUlqQixTQUFTLEdBQUcsS0FBaEI7SUFDQSxNQUFNZ0ssTUFBTSxHQUFJLEtBQUt0RixHQUFMLEdBQVcsTUFBTTtNQUMvQjFFLFNBQVMsR0FBRyxJQUFaQTtJQUNELENBRkQ7SUFJQSxNQUFNaUssZUFBZSxHQUFHLE1BQU0sS0FBS25HLFVBQUwsQ0FBZ0JvRyxRQUFoQixDQUF5QmpKLEtBQXpCLENBQTlCO0lBRUEsSUFBSWpCLFNBQUosRUFBZTtNQUNiLE1BQU16VCxLQUFVLEdBQUcsSUFBSW1PLEtBQUosQ0FDaEIsd0NBQXVDdUcsS0FBTSxHQUQ3QixDQUFuQjtNQUdBMVUsS0FBSyxDQUFDeVQsU0FBTnpULEdBQWtCLElBQWxCQTtNQUNBLE1BQU1BLEtBQU47SUFDRDtJQUVELElBQUl5ZCxNQUFNLEtBQUssS0FBS3RGLEdBQXBCLEVBQXlCO01BQ3ZCLEtBQUtBLEdBQUwsR0FBVyxJQUFYO0lBQ0Q7SUFFRCxPQUFPdUYsZUFBUDtFQUNEO0VBRURyQixRQUFRLENBQUl1QixFQUFKLEVBQXNDO0lBQzVDLElBQUluSyxTQUFTLEdBQUcsS0FBaEI7SUFDQSxNQUFNZ0ssTUFBTSxHQUFHLE1BQU07TUFDbkJoSyxTQUFTLEdBQUcsSUFBWkE7SUFDRCxDQUZEO0lBR0EsS0FBSzBFLEdBQUwsR0FBV3NGLE1BQVg7SUFDQSxPQUFPRyxFQUFFLEdBQUdyYyxJQUFMcWMsQ0FBV3BCLElBQUQsSUFBVTtNQUN6QixJQUFJaUIsTUFBTSxLQUFLLEtBQUt0RixHQUFwQixFQUF5QjtRQUN2QixLQUFLQSxHQUFMLEdBQVcsSUFBWDtNQUNEO01BRUQsSUFBSTFFLFNBQUosRUFBZTtRQUNiLE1BQU1sSCxHQUFRLEdBQUcsSUFBSTRCLEtBQUosQ0FBVSxpQ0FBVixDQUFqQjtRQUNBNUIsR0FBRyxDQUFDa0gsU0FBSmxILEdBQWdCLElBQWhCQTtRQUNBLE1BQU1BLEdBQU47TUFDRDtNQUVELE9BQU9pUSxJQUFQO0lBQ0QsQ0FaTW9CLENBQVA7RUFhRDtFQUVEdEIsY0FBYyxDQUFDbkYsUUFBRCxFQUFvQztJQUNoRCxNQUFNO01BQUU5YSxJQUFJLEVBQUV3aEI7SUFBUixJQUFxQixJQUFJdEosR0FBSixDQUFRNEMsUUFBUixFQUFrQmpXLE1BQU0sQ0FBQ2tZLFFBQVBsWSxDQUFnQjdFLElBQWxDLENBQTNCO0lBQ0EsSUFBSXVVLEtBQUosRUFBaUUsRUFFaEU7SUFDRCxPQUFPc0csYUFBYSxDQUFDQyxRQUFELEVBQVcsS0FBS21CLEtBQWhCLENBQWJwQixDQUFvQzNWLElBQXBDMlYsQ0FBMENzRixJQUFELElBQVU7TUFDeEQsS0FBS3ZFLEdBQUwsQ0FBUzRGLFFBQVQsSUFBcUJyQixJQUFyQjtNQUNBLE9BQU9BLElBQVA7SUFDRCxDQUhNdEYsQ0FBUDtFQUlEO0VBRURxRixjQUFjLENBQUNwRixRQUFELEVBQW9DO0lBQ2hELE9BQU9ELGFBQWEsQ0FBQ0MsUUFBRCxFQUFXLEtBQUttQixLQUFoQixDQUFwQjtFQUNEO0VBRUQxRixlQUFlLENBQ2I4RSxTQURhLEVBRWJvRyxHQUZhLEVBR0M7SUFDZCxNQUFNO01BQUVwRyxTQUFTLEVBQUVGO0lBQWIsSUFBcUIsS0FBS1EsVUFBTCxDQUFnQixPQUFoQixDQUEzQjtJQUNBLE1BQU0rRixPQUFPLEdBQUcsS0FBSzFGLFFBQUwsQ0FBY2IsR0FBZCxDQUFoQjtJQUNBc0csR0FBRyxDQUFDQyxPQUFKRCxHQUFjQyxPQUFkRDtJQUNBLE9BQU8sZ0NBQTRDdEcsR0FBNUMsRUFBaUQ7TUFDdER1RyxPQURzRDtNQUV0RHJHLFNBRnNEO01BR3REdlgsTUFBTSxFQUFFLElBSDhDO01BSXREMmQ7SUFKc0QsQ0FBakQsQ0FBUDtFQU1EO0VBRURsRSxrQkFBa0IsQ0FBQ2xOLEVBQUQsRUFBbUI7SUFDbkMsSUFBSSxLQUFLeUwsR0FBVCxFQUFjO01BQ1ovRyxNQUFNLENBQUNDLE1BQVBELENBQWNpQyxJQUFkakMsQ0FBbUIsa0JBQW5CQSxFQUF1Q29DLHNCQUFzQixFQUE3RHBDLEVBQWlFMUUsRUFBakUwRTtNQUNBLEtBQUsrRyxHQUFMO01BQ0EsS0FBS0EsR0FBTCxHQUFXLElBQVg7SUFDRDtFQUNGO0VBRUQ2QixNQUFNLENBQUN3QyxJQUFELEVBQXdDO0lBQzVDLE9BQU8sS0FBS3RFLEdBQUwsQ0FBU3NFLElBQVQsRUFBZSxLQUFLeEUsVUFBTCxDQUFnQixPQUFoQixFQUF5Qk4sU0FBeEMsQ0FBUDtFQUNEO0FBMTNCK0M7O0FBQTdCdEcsTSxDQTJCWkMsTSxHQUFzQixvQjs7Ozs7Ozs7Ozs7Ozs7O3VDQzdXL0I7QUFDZSxTQUFTbUUsb0JBQVQsQ0FBOEJ3SSxPQUE5QixFQUF1RDtFQUNwRSxPQUFPQSxPQUFPLENBQUN6USxPQUFSeVEsQ0FBZ0IsUUFBaEJBLEVBQTJCQyxJQUFELElBQWtCQyxrQkFBa0IsQ0FBQ0QsSUFBRCxDQUE5REQsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxNQUFNRyxnQkFBZ0IsR0FBRyx3QkFBekI7QUFFTyxTQUFTQyxTQUFULENBQW1CQyxNQUFuQixFQUFzQztFQUMzQyxJQUFJO0lBQUVDLElBQUY7SUFBUUM7RUFBUixJQUFxQkYsTUFBekI7RUFDQSxJQUFJRyxRQUFRLEdBQUdILE1BQU0sQ0FBQ0csUUFBUEgsSUFBbUIsRUFBbEM7RUFDQSxJQUFJM2MsUUFBUSxHQUFHMmMsTUFBTSxDQUFDM2MsUUFBUDJjLElBQW1CLEVBQWxDO0VBQ0EsSUFBSWhJLElBQUksR0FBR2dJLE1BQU0sQ0FBQ2hJLElBQVBnSSxJQUFlLEVBQTFCO0VBQ0EsSUFBSXpKLEtBQUssR0FBR3lKLE1BQU0sQ0FBQ3pKLEtBQVB5SixJQUFnQixFQUE1QjtFQUNBLElBQUlJLElBQW9CLEdBQUcsS0FBM0I7RUFFQUgsSUFBSSxHQUFHQSxJQUFJLEdBQUdKLGtCQUFrQixDQUFDSSxJQUFELENBQWxCSixDQUF5QjNRLE9BQXpCMlEsQ0FBaUMsTUFBakNBLEVBQXlDLEdBQXpDQSxJQUFnRCxHQUFuRCxHQUF5RCxFQUFwRUk7RUFFQSxJQUFJRCxNQUFNLENBQUNJLElBQVgsRUFBaUI7SUFDZkEsSUFBSSxHQUFHSCxJQUFJLEdBQUdELE1BQU0sQ0FBQ0ksSUFBckJBO0VBQ0QsQ0FGRCxNQUVPLElBQUlGLFFBQUosRUFBYztJQUNuQkUsSUFBSSxHQUFHSCxJQUFJLElBQUksQ0FBQ0MsUUFBUSxDQUFDM1EsT0FBVDJRLENBQWlCLEdBQWpCQSxDQUFELEdBQTBCLElBQUdBLFFBQVMsR0FBdEMsR0FBMkNBLFFBQS9DLENBQVhFO0lBQ0EsSUFBSUosTUFBTSxDQUFDSyxJQUFYLEVBQWlCO01BQ2ZELElBQUksSUFBSSxNQUFNSixNQUFNLENBQUNLLElBQXJCRDtJQUNEO0VBQ0Y7RUFFRCxJQUFJN0osS0FBSyxJQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBOUIsRUFBd0M7SUFDdENBLEtBQUssR0FBRytKLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDQyxzQkFBWkQsQ0FBbUNoSyxLQUFuQ2dLLENBQUQsQ0FBZGhLO0VBQ0Q7RUFFRCxJQUFJa0ssTUFBTSxHQUFHVCxNQUFNLENBQUNTLE1BQVBULElBQWtCekosS0FBSyxJQUFLLElBQUdBLEtBQU0sRUFBckN5SixJQUEyQyxFQUF4RDtFQUVBLElBQUlHLFFBQVEsSUFBSUEsUUFBUSxDQUFDdmIsTUFBVHViLENBQWdCLENBQUMsQ0FBakJBLE1BQXdCLEdBQXhDLEVBQTZDQSxRQUFRLElBQUksR0FBWkE7RUFFN0MsSUFDRUgsTUFBTSxDQUFDVSxPQUFQVixJQUNDLENBQUMsQ0FBQ0csUUFBRCxJQUFhTCxnQkFBZ0IsQ0FBQ1osSUFBakJZLENBQXNCSyxRQUF0QkwsQ0FBZCxLQUFrRE0sSUFBSSxLQUFLLEtBRjlELEVBR0U7SUFDQUEsSUFBSSxHQUFHLFFBQVFBLElBQUksSUFBSSxFQUFoQixDQUFQQTtJQUNBLElBQUkvYyxRQUFRLElBQUlBLFFBQVEsQ0FBQyxDQUFELENBQVJBLEtBQWdCLEdBQWhDLEVBQXFDQSxRQUFRLEdBQUcsTUFBTUEsUUFBakJBO0VBQ3RDLENBTkQsTUFNTyxJQUFJLENBQUMrYyxJQUFMLEVBQVc7SUFDaEJBLElBQUksR0FBRyxFQUFQQTtFQUNEO0VBRUQsSUFBSXBJLElBQUksSUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBSkEsS0FBWSxHQUF4QixFQUE2QkEsSUFBSSxHQUFHLE1BQU1BLElBQWJBO0VBQzdCLElBQUl5SSxNQUFNLElBQUlBLE1BQU0sQ0FBQyxDQUFELENBQU5BLEtBQWMsR0FBNUIsRUFBaUNBLE1BQU0sR0FBRyxNQUFNQSxNQUFmQTtFQUVqQ3BkLFFBQVEsR0FBR0EsUUFBUSxDQUFDNkwsT0FBVDdMLENBQWlCLE9BQWpCQSxFQUEwQndjLGtCQUExQnhjLENBQVhBO0VBQ0FvZCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ3ZSLE9BQVB1UixDQUFlLEdBQWZBLEVBQW9CLEtBQXBCQSxDQUFUQTtFQUVBLE9BQVEsR0FBRU4sUUFBUyxHQUFFQyxJQUFLLEdBQUUvYyxRQUFTLEdBQUVvZCxNQUFPLEdBQUV6SSxJQUFLLEVBQXJEO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3dDQ3hFRDtBQUNBLE1BQU0ySSxVQUFVLEdBQUcsc0JBQW5CO0FBRU8sU0FBU0MsY0FBVCxDQUF3QnZLLEtBQXhCLEVBQWdEO0VBQ3JELE9BQU9zSyxVQUFVLENBQUN6QixJQUFYeUIsQ0FBZ0J0SyxLQUFoQnNLLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7QUFDQTtBQUVBLE1BQU1FLFVBQVUsR0FBRyxJQUFJM0ssR0FBSixDQUNqQixPQUFnQyxVQUFoQyxHQUE2QyxTQUQ1QixDQUFuQixDQUlBOzs7Ozs7QUFNTyxTQUFTNEssZ0JBQVQsQ0FBMEIvSyxHQUExQixFQUF1QzRCLElBQXZDLEVBQXNEO0VBQzNELE1BQU1vSixZQUFZLEdBQUdwSixJQUFJLEdBQUcsSUFBSXpCLEdBQUosQ0FBUXlCLElBQVIsRUFBY2tKLFVBQWQsQ0FBSCxHQUErQkEsVUFBeEQ7RUFDQSxNQUFNO0lBQ0p4ZCxRQURJO0lBRUowVSxZQUZJO0lBR0owSSxNQUhJO0lBSUp6SSxJQUpJO0lBS0poYSxJQUxJO0lBTUptWSxNQU5JO0lBT0pnSztFQVBJLElBUUYsSUFBSWpLLEdBQUosQ0FBUUgsR0FBUixFQUFhZ0wsWUFBYixDQVJKO0VBU0EsSUFDRTVLLE1BQU0sS0FBSzBLLFVBQVUsQ0FBQzFLLE1BQXRCQSxJQUNDZ0ssUUFBUSxLQUFLLE9BQWJBLElBQXdCQSxRQUFRLEtBQUssUUFGeEMsRUFHRTtJQUNBLE1BQU0sSUFBSXJRLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0VBQ0Q7RUFDRCxPQUFPO0lBQ0x6TSxRQURLO0lBRUxrVCxLQUFLLEVBQUUseUNBQXVCd0IsWUFBdkIsQ0FGRjtJQUdMMEksTUFISztJQUlMekksSUFKSztJQUtMaGEsSUFBSSxFQUFFQSxJQUFJLENBQUNxVSxLQUFMclUsQ0FBVzZpQixVQUFVLENBQUMxSyxNQUFYMEssQ0FBa0JoTCxNQUE3QjdYO0VBTEQsQ0FBUDtBQU9ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTyxNQUFNZ2pCLGNBQ2MsR0FBRztFQUM1QkMsU0FBUyxFQUFFLEtBRGlCO0VBRTVCQyxTQUFTLEVBQUU7QUFGaUIsQ0FEdkI7O0FBTUEsTUFBTUMseUJBQ2MsbUNBQ3RCSCxjQUR5QjtFQUU1QkksTUFBTSxFQUFFO0FBRm9CLEVBRHZCOztlQU1RLENBQUNDLFdBQVcsR0FBRyxLQUFmLEtBQXlCO0VBQ3RDLE9BQVFsUCxJQUFELElBQWtCO0lBQ3ZCLE1BQU05QixJQUF3QixHQUFHLEVBQWpDO0lBQ0EsTUFBTWlSLFlBQVksR0FBR0MsWUFBWSxDQUFDQSxZQUFiQSxDQUNuQnBQLElBRG1Cb1AsRUFFbkJsUixJQUZtQmtSLEVBR25CRixXQUFXLEdBQUdGLHlCQUFILEdBQStCSCxjQUh2Qk8sQ0FBckI7SUFLQSxNQUFNQyxPQUFPLEdBQUdELFlBQVksQ0FBQ0UsZ0JBQWJGLENBQThCRCxZQUE5QkMsRUFBNENsUixJQUE1Q2tSLENBQWhCO0lBRUEsT0FBTyxDQUFDbGUsUUFBRCxFQUFzQ3dULE1BQXRDLEtBQXVEO01BQzVELE1BQU00QixHQUFHLEdBQUdwVixRQUFRLElBQUksSUFBWkEsR0FBbUIsS0FBbkJBLEdBQTJCbWUsT0FBTyxDQUFDbmUsUUFBRCxDQUE5QztNQUNBLElBQUksQ0FBQ29WLEdBQUwsRUFBVTtRQUNSLE9BQU8sS0FBUDtNQUNEO01BRUQsSUFBSTRJLFdBQUosRUFBaUI7UUFDZixLQUFLLE1BQU10UixHQUFYLElBQWtCTSxJQUFsQixFQUF3QjtVQUN0QjtVQUNBO1VBQ0EsSUFBSSxPQUFPTixHQUFHLENBQUMvUSxJQUFYLEtBQW9CLFFBQXhCLEVBQWtDO1lBQ2hDLE9BQVF5WixHQUFHLENBQUM1QixNQUFMLENBQW9COUcsR0FBRyxDQUFDL1EsSUFBeEIsQ0FBUDtVQUNEO1FBQ0Y7TUFDRjtNQUVELHVDQUFZNlgsTUFBTCxHQUFnQjRCLEdBQUcsQ0FBQzVCLE1BQTNCO0lBQ0QsQ0FqQkQ7RUFrQkQsQ0EzQkQ7QUE0QkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZSxTQUFTNkssa0JBQVQsQ0FDYjNFLFdBRGEsRUFFYmxHLE1BRmEsRUFHYk4sS0FIYSxFQUlib0wsbUJBSmEsRUFLYnpNLFFBTGEsRUFNYjtFQUNBLElBQUkwTSxpQkFLbUMsR0FBRyxFQUwxQztFQU9BLElBQUk3RSxXQUFXLENBQUN4SCxVQUFad0gsQ0FBdUIsR0FBdkJBLENBQUosRUFBaUM7SUFDL0I2RSxpQkFBaUIsR0FBRyx3Q0FBaUI3RSxXQUFqQixDQUFwQjZFO0VBQ0QsQ0FGRCxNQUVPO0lBQ0wsTUFBTTtNQUNKdmUsUUFESTtNQUVKMFUsWUFGSTtNQUdKQyxJQUhJO01BSUprSSxRQUpJO01BS0pHLElBTEk7TUFNSkYsUUFOSTtNQU9KTSxNQVBJO01BUUp6aUI7SUFSSSxJQVNGLElBQUlrWSxHQUFKLENBQVE2RyxXQUFSLENBVEo7SUFXQTZFLGlCQUFpQixHQUFHO01BQ2xCdmUsUUFEa0I7TUFFbEJrVCxLQUFLLEVBQUUseUNBQXVCd0IsWUFBdkIsQ0FGVztNQUdsQkMsSUFIa0I7TUFJbEJtSSxRQUprQjtNQUtsQkQsUUFMa0I7TUFNbEJHLElBTmtCO01BT2xCSSxNQVBrQjtNQVFsQnppQjtJQVJrQixDQUFwQjRqQjtFQVVEO0VBRUQsTUFBTUMsU0FBUyxHQUFHRCxpQkFBaUIsQ0FBQ3JMLEtBQXBDO0VBQ0EsTUFBTXVMLFFBQVEsR0FBSSxHQUFFRixpQkFBaUIsQ0FBQ3ZlLFFBQVUsR0FDOUN1ZSxpQkFBaUIsQ0FBQzVKLElBQWxCNEosSUFBMEIsRUFDM0IsRUFGRDtFQUdBLE1BQU1HLGlCQUFxQyxHQUFHLEVBQTlDO0VBQ0FSLFlBQVksQ0FBQ0EsWUFBYkEsQ0FBMEJPLFFBQTFCUCxFQUFvQ1EsaUJBQXBDUjtFQUVBLE1BQU1TLGNBQWMsR0FBR0QsaUJBQWlCLENBQUNyakIsR0FBbEJxakIsQ0FBdUJoUyxHQUFELElBQVNBLEdBQUcsQ0FBQy9RLElBQW5DK2lCLENBQXZCO0VBRUEsSUFBSUUsbUJBQW1CLEdBQUcsWUFBWSxDQUFDQyxPQUFiLENBQ3hCSixRQUR3QjtFQUV4QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtJQUFFSyxRQUFRLEVBQUU7RUFBWixDQVJ3QixDQUExQjtFQVVBLElBQUlDLE1BQUosQ0FFQTtFQUNBLEtBQUssTUFBTSxDQUFDclMsR0FBRCxFQUFNc1MsVUFBTixDQUFYLElBQWdDalMsTUFBTSxDQUFDbEQsT0FBUGtELENBQWV5UixTQUFmelIsQ0FBaEMsRUFBMkQ7SUFDekQsSUFBSTVRLEtBQUssR0FBRzBVLEtBQUssQ0FBQ0MsT0FBTkQsQ0FBY21PLFVBQWRuTyxJQUE0Qm1PLFVBQVUsQ0FBQyxDQUFELENBQXRDbk8sR0FBNENtTyxVQUF4RDtJQUNBLElBQUk3aUIsS0FBSixFQUFXO01BQ1Q7TUFDQTtNQUNBQSxLQUFLLEdBQUksSUFBR0EsS0FBTSxFQUFsQkE7TUFDQSxNQUFNOGlCLGFBQWEsR0FBR2YsWUFBWSxDQUFDVyxPQUFiWCxDQUFxQi9oQixLQUFyQitoQixFQUE0QjtRQUFFWSxRQUFRLEVBQUU7TUFBWixDQUE1QlosQ0FBdEI7TUFDQS9oQixLQUFLLEdBQUc4aUIsYUFBYSxDQUFDekwsTUFBRCxDQUFieUwsQ0FBc0IxZCxNQUF0QjBkLENBQTZCLENBQTdCQSxDQUFSOWlCO0lBQ0Q7SUFDRHFpQixTQUFTLENBQUM5UixHQUFELENBQVQ4UixHQUFpQnJpQixLQUFqQnFpQjtFQUNELENBRUQ7RUFDQTtFQUNBLE1BQU1VLFNBQVMsR0FBR25TLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWXlHLE1BQVp6RyxDQUFsQjtFQUVBLElBQ0V1UixtQkFBbUIsSUFDbkIsQ0FBQ1ksU0FBUyxDQUFDdkQsSUFBVnVELENBQWdCeFMsR0FBRCxJQUFTaVMsY0FBYyxDQUFDdGhCLFFBQWZzaEIsQ0FBd0JqUyxHQUF4QmlTLENBQXhCTyxDQUZILEVBR0U7SUFDQSxLQUFLLE1BQU14UyxHQUFYLElBQWtCd1MsU0FBbEIsRUFBNkI7TUFDM0IsSUFBSSxFQUFFeFMsR0FBRyxJQUFJOFIsU0FBVCxDQUFKLEVBQXlCO1FBQ3ZCQSxTQUFTLENBQUM5UixHQUFELENBQVQ4UixHQUFpQmhMLE1BQU0sQ0FBQzlHLEdBQUQsQ0FBdkI4UjtNQUNEO0lBQ0Y7RUFDRjtFQUVELE1BQU1XLGlCQUFpQixHQUFHekYsV0FBVyxDQUFDeEgsVUFBWndILENBQXVCLEdBQXZCQSxLQUErQjdILFFBQXpEO0VBRUEsSUFBSTtJQUNGa04sTUFBTSxHQUFJLEdBQUVJLGlCQUFpQixHQUFHdE4sUUFBSCxHQUFjLEVBQUcsR0FBRStNLG1CQUFtQixDQUNqRXBMLE1BRGlFLENBRWpFLEVBRkZ1TDtJQUlBLE1BQU0sQ0FBQy9lLFFBQUQsRUFBVzJVLElBQVgsSUFBbUJvSyxNQUFNLENBQUN0ZCxLQUFQc2QsQ0FBYSxHQUFiQSxDQUF6QjtJQUNBUixpQkFBaUIsQ0FBQ3ZlLFFBQWxCdWUsR0FBNkJ2ZSxRQUE3QnVlO0lBQ0FBLGlCQUFpQixDQUFDNUosSUFBbEI0SixHQUEwQixHQUFFNUosSUFBSSxHQUFHLEdBQUgsR0FBUyxFQUFHLEdBQUVBLElBQUksSUFBSSxFQUFHLEVBQXpENEo7SUFDQSxPQUFPQSxpQkFBaUIsQ0FBQ25CLE1BQXpCO0VBQ0QsQ0FBQyxRQUFPdlMsR0FBUCxFQUFZO0lBQ1osSUFBSUEsR0FBRyxDQUFDalAsT0FBSmlQLENBQVl1VSxLQUFadlUsQ0FBa0IsOENBQWxCQSxDQUFKLEVBQXVFO01BQ3JFLE1BQU0sSUFBSTRCLEtBQUosQ0FDSCx3S0FERyxDQUFOO0lBR0Q7SUFDRCxNQUFNNUIsR0FBTjtFQUNELENBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTBULGlCQUFpQixDQUFDckwsS0FBbEJxTCxtQ0FDS3JMLEtBRHFCLEdBRXJCcUwsaUJBQWlCLENBQUNyTCxLQUZHLENBQTFCcUw7RUFLQSxPQUFPO0lBQ0xRLE1BREs7SUFFTFI7RUFGSyxDQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hNLFNBQVNjLHNCQUFULENBQ0wzSyxZQURLLEVBRVc7RUFDaEIsTUFBTXhCLEtBQXFCLEdBQUcsRUFBOUI7RUFDQXdCLFlBQVksQ0FBQzVLLE9BQWI0SyxDQUFxQixDQUFDdlksS0FBRCxFQUFRdVEsR0FBUixLQUFnQjtJQUNuQyxJQUFJLE9BQU93RyxLQUFLLENBQUN4RyxHQUFELENBQVosS0FBc0IsV0FBMUIsRUFBdUM7TUFDckN3RyxLQUFLLENBQUN4RyxHQUFELENBQUx3RyxHQUFhL1csS0FBYitXO0lBQ0QsQ0FGRCxNQUVPLElBQUlyQyxLQUFLLENBQUNDLE9BQU5ELENBQWNxQyxLQUFLLENBQUN4RyxHQUFELENBQW5CbUUsQ0FBSixFQUErQjtNQUNwQztNQUFFcUMsS0FBSyxDQUFDeEcsR0FBRCxDQUFOLENBQXlCek0sSUFBekIsQ0FBOEI5RCxLQUE5QjtJQUNGLENBRk0sTUFFQTtNQUNMK1csS0FBSyxDQUFDeEcsR0FBRCxDQUFMd0csR0FBYSxDQUFDQSxLQUFLLENBQUN4RyxHQUFELENBQU4sRUFBdUJ2USxLQUF2QixDQUFiK1c7SUFDRDtFQUNGLENBUkR3QjtFQVNBLE9BQU94QixLQUFQO0FBQ0Q7QUFFRCxTQUFTb00sc0JBQVQsQ0FBZ0M1TCxLQUFoQyxFQUF1RDtFQUNyRCxJQUNFLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsSUFDQyxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQTZCLENBQUM2TCxLQUFLLENBQUM3TCxLQUFELENBRHBDLElBRUEsT0FBT0EsS0FBUCxLQUFpQixTQUhuQixFQUlFO0lBQ0EsT0FBT3VKLE1BQU0sQ0FBQ3ZKLEtBQUQsQ0FBYjtFQUNELENBTkQsTUFNTztJQUNMLE9BQU8sRUFBUDtFQUNEO0FBQ0Y7QUFFTSxTQUFTeUosc0JBQVQsQ0FDTHFDLFFBREssRUFFWTtFQUNqQixNQUFNeEwsTUFBTSxHQUFHLElBQUl5TCxlQUFKLEVBQWY7RUFDQTFTLE1BQU0sQ0FBQ2xELE9BQVBrRCxDQUFleVMsUUFBZnpTLEVBQXlCakQsT0FBekJpRCxDQUFpQyxDQUFDLENBQUNMLEdBQUQsRUFBTXZRLEtBQU4sQ0FBRCxLQUFrQjtJQUNqRCxJQUFJMFUsS0FBSyxDQUFDQyxPQUFORCxDQUFjMVUsS0FBZDBVLENBQUosRUFBMEI7TUFDeEIxVSxLQUFLLENBQUMyTixPQUFOM04sQ0FBZXVqQixJQUFELElBQVUxTCxNQUFNLENBQUMyTCxNQUFQM0wsQ0FBY3RILEdBQWRzSCxFQUFtQnNMLHNCQUFzQixDQUFDSSxJQUFELENBQXpDMUwsQ0FBeEI3WDtJQUNELENBRkQsTUFFTztNQUNMNlgsTUFBTSxDQUFDcEosR0FBUG9KLENBQVd0SCxHQUFYc0gsRUFBZ0JzTCxzQkFBc0IsQ0FBQ25qQixLQUFELENBQXRDNlg7SUFDRDtFQUNGLENBTkRqSDtFQU9BLE9BQU9pSCxNQUFQO0FBQ0Q7QUFFTSxTQUFTcEQsTUFBVCxDQUNMN00sTUFESyxFQUVMLEdBQUc2YixnQkFGRSxFQUdZO0VBQ2pCQSxnQkFBZ0IsQ0FBQzlWLE9BQWpCOFYsQ0FBMEJsTCxZQUFELElBQWtCO0lBQ3pDN0QsS0FBSyxDQUFDZ1AsSUFBTmhQLENBQVc2RCxZQUFZLENBQUMxSCxJQUFiMEgsRUFBWDdELEVBQWdDL0csT0FBaEMrRyxDQUF5Q25FLEdBQUQsSUFBUzNJLE1BQU0sQ0FBQ3VHLE1BQVB2RyxDQUFjMkksR0FBZDNJLENBQWpEOE07SUFDQTZELFlBQVksQ0FBQzVLLE9BQWI0SyxDQUFxQixDQUFDdlksS0FBRCxFQUFRdVEsR0FBUixLQUFnQjNJLE1BQU0sQ0FBQzRiLE1BQVA1YixDQUFjMkksR0FBZDNJLEVBQW1CNUgsS0FBbkI0SCxDQUFyQzJRO0VBQ0QsQ0FIRGtMO0VBSUEsT0FBTzdiLE1BQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEREO0FBQ0E7QUFFQTs7Ozs7O0FBRUEsTUFBTStiLGtCQUFrQixHQUFHLHdCQUFVLElBQVYsQ0FBM0I7QUFFZSxTQUFTQyxlQUFULENBQ2IxSixNQURhLEVBRWJrQyxLQUZhLEVBR2IxRyxRQUhhLEVBSWI2RyxRQUphLEVBS2J4RixLQUxhLEVBTWJpQixXQU5hLEVBT2I7RUFDQSxJQUFJLENBQUNvRSxLQUFLLENBQUNsYixRQUFOa2IsQ0FBZWxDLE1BQWZrQyxDQUFMLEVBQTZCO0lBQzNCLEtBQUssTUFBTXlILE9BQVgsSUFBc0J0SCxRQUF0QixFQUFnQztNQUM5QixNQUFNeUYsT0FBTyxHQUFHMkIsa0JBQWtCLENBQUNFLE9BQU8sQ0FBQ0MsTUFBVCxDQUFsQztNQUNBLE1BQU16TSxNQUFNLEdBQUcySyxPQUFPLENBQUM5SCxNQUFELENBQXRCO01BRUEsSUFBSTdDLE1BQUosRUFBWTtRQUNWLElBQUksQ0FBQ3dNLE9BQU8sQ0FBQ3RHLFdBQWIsRUFBMEI7VUFDeEI7VUFDQTtRQUNEO1FBQ0QsTUFBTXdHLE9BQU8sR0FBRyxpQ0FDZEYsT0FBTyxDQUFDdEcsV0FETSxFQUVkbEcsTUFGYyxFQUdkTixLQUhjLEVBSWQsSUFKYyxFQUtkOE0sT0FBTyxDQUFDbk8sUUFBUm1PLEtBQXFCLEtBQXJCQSxHQUE2QixFQUE3QkEsR0FBa0NuTyxRQUxwQixDQUFoQjtRQU9Bd0UsTUFBTSxHQUFHNkosT0FBTyxDQUFDM0IsaUJBQVIyQixDQUEwQmxnQixRQUFuQ3FXO1FBQ0F0SixNQUFNLENBQUM2RCxNQUFQN0QsQ0FBY21HLEtBQWRuRyxFQUFxQm1ULE9BQU8sQ0FBQzNCLGlCQUFSMkIsQ0FBMEJoTixLQUEvQ25HO1FBRUEsSUFBSXdMLEtBQUssQ0FBQ2xiLFFBQU5rYixDQUFlLHFEQUF3QmxDLE1BQXhCLENBQWZrQyxDQUFKLEVBQXFEO1VBQ25EO1VBQ0E7VUFDQTtRQUNELENBRUQ7UUFDQSxNQUFNMUssWUFBWSxHQUFHc0csV0FBVyxDQUFDa0MsTUFBRCxDQUFoQztRQUVBLElBQUl4SSxZQUFZLEtBQUt3SSxNQUFqQnhJLElBQTJCMEssS0FBSyxDQUFDbGIsUUFBTmtiLENBQWUxSyxZQUFmMEssQ0FBL0IsRUFBNkQ7VUFDM0Q7UUFDRDtNQUNGO0lBQ0Y7RUFDRjtFQUNELE9BQU9sQyxNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xETSxTQUFTOEosZUFBVCxDQUF5QmxILFVBQXpCLEVBQXVFO0VBQzVFLE1BQU07SUFBRTJDLEVBQUY7SUFBTXRJO0VBQU4sSUFBaUIyRixVQUF2QjtFQUNBLE9BQVFqWixRQUFELElBQXlDO0lBQzlDLE1BQU1rWixVQUFVLEdBQUcwQyxFQUFFLENBQUN3RSxJQUFIeEUsQ0FBUTViLFFBQVI0YixDQUFuQjtJQUNBLElBQUksQ0FBQzFDLFVBQUwsRUFBaUI7TUFDZixPQUFPLEtBQVA7SUFDRDtJQUVELE1BQU1tSCxNQUFNLEdBQUkzTSxLQUFELElBQW1CO01BQ2hDLElBQUk7UUFDRixPQUFPNE0sa0JBQWtCLENBQUM1TSxLQUFELENBQXpCO01BQ0QsQ0FBQyxRQUFPekcsQ0FBUCxFQUFVO1FBQ1YsTUFBTXBDLEdBQThCLEdBQUcsSUFBSTRCLEtBQUosQ0FDckMsd0JBRHFDLENBQXZDO1FBR0E1QixHQUFHLENBQUMwVixJQUFKMVYsR0FBVyxlQUFYQTtRQUNBLE1BQU1BLEdBQU47TUFDRDtJQUNGLENBVkQ7SUFXQSxNQUFNMkksTUFBa0QsR0FBRyxFQUEzRDtJQUVBekcsTUFBTSxDQUFDQyxJQUFQRCxDQUFZdUcsTUFBWnZHLEVBQW9CakQsT0FBcEJpRCxDQUE2QnlULFFBQUQsSUFBc0I7TUFDaEQsTUFBTUMsQ0FBQyxHQUFHbk4sTUFBTSxDQUFDa04sUUFBRCxDQUFoQjtNQUNBLE1BQU1FLENBQUMsR0FBR3hILFVBQVUsQ0FBQ3VILENBQUMsQ0FBQ0UsR0FBSCxDQUFwQjtNQUNBLElBQUlELENBQUMsS0FBSzlXLFNBQVYsRUFBcUI7UUFDbkI0SixNQUFNLENBQUNnTixRQUFELENBQU5oTixHQUFtQixDQUFDa04sQ0FBQyxDQUFDeFUsT0FBRndVLENBQVUsR0FBVkEsQ0FBRCxHQUNmQSxDQUFDLENBQUNqZixLQUFGaWYsQ0FBUSxHQUFSQSxFQUFhcmxCLEdBQWJxbEIsQ0FBa0IzVyxLQUFELElBQVdzVyxNQUFNLENBQUN0VyxLQUFELENBQWxDMlcsQ0FEZSxHQUVmRCxDQUFDLENBQUM5TSxNQUFGOE0sR0FDQSxDQUFDSixNQUFNLENBQUNLLENBQUQsQ0FBUCxDQURBRCxHQUVBSixNQUFNLENBQUNLLENBQUQsQ0FKVmxOO01BS0Q7SUFDRixDQVZEekc7SUFXQSxPQUFPeUcsTUFBUDtFQUNELENBL0JEO0FBZ0NELEM7Ozs7Ozs7Ozs7Ozs7OztzQ0M5QkQ7QUFDQTtBQUNBLFNBQVNvTixXQUFULENBQXFCQyxHQUFyQixFQUFrQztFQUNoQyxPQUFPQSxHQUFHLENBQUNoVixPQUFKZ1YsQ0FBWSxzQkFBWkEsRUFBb0MsTUFBcENBLENBQVA7QUFDRDtBQUVELFNBQVNDLGNBQVQsQ0FBd0JwTixLQUF4QixFQUF1QztFQUNyQyxNQUFNRSxRQUFRLEdBQUdGLEtBQUssQ0FBQ3hCLFVBQU53QixDQUFpQixHQUFqQkEsS0FBeUJBLEtBQUssQ0FBQzNFLFFBQU4yRSxDQUFlLEdBQWZBLENBQTFDO0VBQ0EsSUFBSUUsUUFBSixFQUFjO0lBQ1pGLEtBQUssR0FBR0EsS0FBSyxDQUFDMUUsS0FBTjBFLENBQVksQ0FBWkEsRUFBZSxDQUFDLENBQWhCQSxDQUFSQTtFQUNEO0VBQ0QsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUN4QixVQUFOd0IsQ0FBaUIsS0FBakJBLENBQWY7RUFDQSxJQUFJQyxNQUFKLEVBQVk7SUFDVkQsS0FBSyxHQUFHQSxLQUFLLENBQUMxRSxLQUFOMEUsQ0FBWSxDQUFaQSxDQUFSQTtFQUNEO0VBQ0QsT0FBTztJQUFFaEgsR0FBRyxFQUFFZ0gsS0FBUDtJQUFjQyxNQUFkO0lBQXNCQztFQUF0QixDQUFQO0FBQ0Q7QUFFTSxTQUFTbU4sYUFBVCxDQUNMQyxlQURLLEVBT0w7RUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQ0QsZUFBZSxDQUFDblYsT0FBaEJtVixDQUF3QixLQUF4QkEsRUFBK0IsRUFBL0JBLEtBQXNDLEdBQXZDLEVBQ2RoUyxLQURjLENBQ1IsQ0FEUSxFQUVkdk4sS0FGYyxDQUVSLEdBRlEsQ0FBakI7RUFJQSxNQUFNNlIsTUFBc0MsR0FBRyxFQUEvQztFQUNBLElBQUk0TixVQUFVLEdBQUcsQ0FBakI7RUFDQSxNQUFNQyxrQkFBa0IsR0FBR0YsUUFBUSxDQUNoQzVsQixHQUR3QjRsQixDQUNuQjNFLE9BQUQsSUFBYTtJQUNoQixJQUFJQSxPQUFPLENBQUNwSyxVQUFSb0ssQ0FBbUIsR0FBbkJBLEtBQTJCQSxPQUFPLENBQUN2TixRQUFSdU4sQ0FBaUIsR0FBakJBLENBQS9CLEVBQXNEO01BQ3BELE1BQU07UUFBRTVQLEdBQUY7UUFBT2tILFFBQVA7UUFBaUJEO01BQWpCLElBQTRCbU4sY0FBYyxDQUFDeEUsT0FBTyxDQUFDdE4sS0FBUnNOLENBQWMsQ0FBZEEsRUFBaUIsQ0FBQyxDQUFsQkEsQ0FBRCxDQUFoRDtNQUNBaEosTUFBTSxDQUFDNUcsR0FBRCxDQUFONEcsR0FBYztRQUFFcU4sR0FBRyxFQUFFTyxVQUFVLEVBQWpCO1FBQXFCdk4sTUFBckI7UUFBNkJDO01BQTdCLENBQWROO01BQ0EsT0FBT0ssTUFBTSxHQUFJQyxRQUFRLEdBQUcsYUFBSCxHQUFtQixRQUEvQixHQUEyQyxXQUF4RDtJQUNELENBSkQsTUFJTztNQUNMLE9BQVEsSUFBR2dOLFdBQVcsQ0FBQ3RFLE9BQUQsQ0FBVSxFQUFoQztJQUNEO0VBQ0YsQ0FUd0IyRSxFQVV4QmxOLElBVndCa04sQ0FVbkIsRUFWbUJBLENBQTNCLENBWUE7RUFDQTtFQUNBLFVBQW1DO0lBQ2pDLElBQUlHLGdCQUFnQixHQUFHLEVBQXZCO0lBQ0EsSUFBSUMsa0JBQWtCLEdBQUcsQ0FBekIsQ0FFQTtJQUNBLE1BQU1DLGVBQWUsR0FBRyxNQUFNO01BQzVCLElBQUlDLFFBQVEsR0FBRyxFQUFmO01BRUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxrQkFBcEIsRUFBd0NHLENBQUMsRUFBekMsRUFBNkM7UUFDM0NELFFBQVEsSUFBSXRFLE1BQU0sQ0FBQ3dFLFlBQVB4RSxDQUFvQm1FLGdCQUFwQm5FLENBQVpzRTtRQUNBSCxnQkFBZ0I7UUFFaEIsSUFBSUEsZ0JBQWdCLEdBQUcsR0FBdkIsRUFBNEI7VUFDMUJDLGtCQUFrQjtVQUNsQkQsZ0JBQWdCLEdBQUcsRUFBbkJBO1FBQ0Q7TUFDRjtNQUNELE9BQU9HLFFBQVA7SUFDRCxDQWJEO0lBZUEsTUFBTUcsU0FBc0MsR0FBRyxFQUEvQztJQUVBLElBQUlDLHVCQUF1QixHQUFHVixRQUFRLENBQ25DNWxCLEdBRDJCNGxCLENBQ3RCM0UsT0FBRCxJQUFhO01BQ2hCLElBQUlBLE9BQU8sQ0FBQ3BLLFVBQVJvSyxDQUFtQixHQUFuQkEsS0FBMkJBLE9BQU8sQ0FBQ3ZOLFFBQVJ1TixDQUFpQixHQUFqQkEsQ0FBL0IsRUFBc0Q7UUFDcEQsTUFBTTtVQUFFNVAsR0FBRjtVQUFPa0gsUUFBUDtVQUFpQkQ7UUFBakIsSUFBNEJtTixjQUFjLENBQUN4RSxPQUFPLENBQUN0TixLQUFSc04sQ0FBYyxDQUFkQSxFQUFpQixDQUFDLENBQWxCQSxDQUFELENBQWhELENBQ0E7UUFDQTtRQUNBLElBQUlzRixVQUFVLEdBQUdsVixHQUFHLENBQUNiLE9BQUphLENBQVksS0FBWkEsRUFBbUIsRUFBbkJBLENBQWpCO1FBQ0EsSUFBSW1WLFVBQVUsR0FBRyxLQUFqQixDQUVBO1FBQ0E7UUFDQSxJQUFJRCxVQUFVLENBQUNwUCxNQUFYb1AsS0FBc0IsQ0FBdEJBLElBQTJCQSxVQUFVLENBQUNwUCxNQUFYb1AsR0FBb0IsRUFBbkQsRUFBdUQ7VUFDckRDLFVBQVUsR0FBRyxJQUFiQTtRQUNEO1FBQ0QsSUFBSSxDQUFDdEMsS0FBSyxDQUFDdUMsUUFBUSxDQUFDRixVQUFVLENBQUNyZ0IsTUFBWHFnQixDQUFrQixDQUFsQkEsRUFBcUIsQ0FBckJBLENBQUQsQ0FBVCxDQUFWLEVBQStDO1VBQzdDQyxVQUFVLEdBQUcsSUFBYkE7UUFDRDtRQUVELElBQUlBLFVBQUosRUFBZ0I7VUFDZEQsVUFBVSxHQUFHTixlQUFlLEVBQTVCTTtRQUNEO1FBRURGLFNBQVMsQ0FBQ0UsVUFBRCxDQUFURixHQUF3QmhWLEdBQXhCZ1Y7UUFDQSxPQUFPL04sTUFBTSxHQUNUQyxRQUFRLEdBQ0wsVUFBU2dPLFVBQVcsU0FEZixHQUVMLE9BQU1BLFVBQVcsT0FIWCxHQUlSLE9BQU1BLFVBQVcsVUFKdEI7TUFLRCxDQTFCRCxNQTBCTztRQUNMLE9BQVEsSUFBR2hCLFdBQVcsQ0FBQ3RFLE9BQUQsQ0FBVSxFQUFoQztNQUNEO0lBQ0YsQ0EvQjJCMkUsRUFnQzNCbE4sSUFoQzJCa04sQ0FnQ3RCLEVBaENzQkEsQ0FBOUI7SUFrQ0EsT0FBTztNQUNMckYsRUFBRSxFQUFFLElBQUltRyxNQUFKLENBQVksSUFBR1osa0JBQW1CLFNBQWxDLENBREM7TUFFTDdOLE1BRks7TUFHTG9PLFNBSEs7TUFJTE0sVUFBVSxFQUFHLElBQUdMLHVCQUF3QjtJQUpuQyxDQUFQO0VBTUQ7RUFFRCxPQUFPO0lBQ0wvRixFQUFFLEVBQUUsSUFBSW1HLE1BQUosQ0FBWSxJQUFHWixrQkFBbUIsU0FBbEMsQ0FEQztJQUVMN047RUFGSyxDQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEQsNklBeVFBOzs7QUFHTyxTQUFTMk8sUUFBVCxDQUNML0YsRUFESyxFQUVGO0VBQ0gsSUFBSWdHLElBQUksR0FBRyxLQUFYO0VBQ0EsSUFBSWxPLE1BQUo7RUFFQSxPQUFRLENBQUMsR0FBR3hILElBQUosS0FBb0I7SUFDMUIsSUFBSSxDQUFDMFYsSUFBTCxFQUFXO01BQ1RBLElBQUksR0FBRyxJQUFQQTtNQUNBbE8sTUFBTSxHQUFHa0ksRUFBRSxDQUFDLEdBQUcxUCxJQUFKLENBQVh3SDtJQUNEO0lBQ0QsT0FBT0EsTUFBUDtFQUNELENBTkQ7QUFPRDtBQUVNLFNBQVNtTyxpQkFBVCxHQUE2QjtFQUNsQyxNQUFNO0lBQUVyRixRQUFGO0lBQVlELFFBQVo7SUFBc0JHO0VBQXRCLElBQStCeGQsTUFBTSxDQUFDa1ksUUFBNUM7RUFDQSxPQUFRLEdBQUVvRixRQUFTLEtBQUlELFFBQVMsR0FBRUcsSUFBSSxHQUFHLE1BQU1BLElBQVQsR0FBZ0IsRUFBRyxFQUF6RDtBQUNEO0FBRU0sU0FBU29GLE1BQVQsR0FBa0I7RUFDdkIsTUFBTTtJQUFFem5CO0VBQUYsSUFBVzZFLE1BQU0sQ0FBQ2tZLFFBQXhCO0VBQ0EsTUFBTTVFLE1BQU0sR0FBR3FQLGlCQUFpQixFQUFoQztFQUNBLE9BQU94bkIsSUFBSSxDQUFDdVYsU0FBTHZWLENBQWVtWSxNQUFNLENBQUNOLE1BQXRCN1gsQ0FBUDtBQUNEO0FBRU0sU0FBUzBuQixjQUFULENBQTJCck0sU0FBM0IsRUFBd0Q7RUFDN0QsT0FBTyxPQUFPQSxTQUFQLEtBQXFCLFFBQXJCLEdBQ0hBLFNBREcsR0FFSEEsU0FBUyxDQUFDNUUsV0FBVjRFLElBQXlCQSxTQUFTLENBQUNyYSxJQUFuQ3FhLElBQTJDLFNBRi9DO0FBR0Q7QUFFTSxTQUFTc00sU0FBVCxDQUFtQmxOLEdBQW5CLEVBQXdDO0VBQzdDLE9BQU9BLEdBQUcsQ0FBQ21OLFFBQUpuTixJQUFnQkEsR0FBRyxDQUFDb04sV0FBM0I7QUFDRDtBQUVNLGVBQWVDLG1CQUFmLENBSUwzTSxHQUpLLEVBSTZCc0csR0FKN0IsRUFJa0Q7RUFDdkQsVUFBMkM7SUFBQTtJQUN6QyxzQkFBSXRHLEdBQUcsQ0FBQzRNLFNBQVIscUJBQUk1TSxlQUFlNUUsZUFBbkIsRUFBb0M7TUFDbEMsTUFBTXRWLE9BQU8sR0FBSSxJQUFHeW1CLGNBQWMsQ0FDaEN2TSxHQURnQyxDQUVoQywwSkFGRjtNQUdBLE1BQU0sSUFBSXJKLEtBQUosQ0FBVTdRLE9BQVYsQ0FBTjtJQUNEO0VBQ0YsQ0FDRDtFQUNBLE1BQU13WixHQUFHLEdBQUdnSCxHQUFHLENBQUNoSCxHQUFKZ0gsSUFBWUEsR0FBRyxDQUFDQSxHQUFKQSxJQUFXQSxHQUFHLENBQUNBLEdBQUpBLENBQVFoSCxHQUEzQztFQUVBLElBQUksQ0FBQ1UsR0FBRyxDQUFDNUUsZUFBVCxFQUEwQjtJQUN4QixJQUFJa0wsR0FBRyxDQUFDQSxHQUFKQSxJQUFXQSxHQUFHLENBQUNwRyxTQUFuQixFQUE4QjtNQUM1QjtNQUNBLE9BQU87UUFDTHdELFNBQVMsRUFBRSxNQUFNaUosbUJBQW1CLENBQUNyRyxHQUFHLENBQUNwRyxTQUFMLEVBQWdCb0csR0FBRyxDQUFDQSxHQUFwQjtNQUQvQixDQUFQO0lBR0Q7SUFDRCxPQUFPLEVBQVA7RUFDRDtFQUVELE1BQU1qYyxLQUFLLEdBQUcsTUFBTTJWLEdBQUcsQ0FBQzVFLGVBQUo0RSxDQUFvQnNHLEdBQXBCdEcsQ0FBcEI7RUFFQSxJQUFJVixHQUFHLElBQUlrTixTQUFTLENBQUNsTixHQUFELENBQXBCLEVBQTJCO0lBQ3pCLE9BQU9qVixLQUFQO0VBQ0Q7RUFFRCxJQUFJLENBQUNBLEtBQUwsRUFBWTtJQUNWLE1BQU12RSxPQUFPLEdBQUksSUFBR3ltQixjQUFjLENBQ2hDdk0sR0FEZ0MsQ0FFaEMsK0RBQThEM1YsS0FBTSxZQUZ0RTtJQUdBLE1BQU0sSUFBSXNNLEtBQUosQ0FBVTdRLE9BQVYsQ0FBTjtFQUNEO0VBRUQsVUFBMkM7SUFDekMsSUFBSW1SLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWTVNLEtBQVo0TSxFQUFtQnlGLE1BQW5CekYsS0FBOEIsQ0FBOUJBLElBQW1DLENBQUNxUCxHQUFHLENBQUNBLEdBQTVDLEVBQWlEO01BQy9DdFIsT0FBTyxDQUFDMEMsSUFBUjFDLENBQ0csR0FBRXVYLGNBQWMsQ0FDZnZNLEdBRGUsQ0FFZiw4S0FISmhMO0lBS0Q7RUFDRjtFQUVELE9BQU8zSyxLQUFQO0FBQ0Q7QUFFTSxNQUFNd2lCLGFBQWEsR0FBRyxDQUMzQixNQUQyQixFQUUzQixNQUYyQixFQUczQixNQUgyQixFQUkzQixVQUoyQixFQUszQixNQUwyQixFQU0zQixNQU4yQixFQU8zQixVQVAyQixFQVEzQixNQVIyQixFQVMzQixVQVQyQixFQVUzQixPQVYyQixFQVczQixRQVgyQixFQVkzQixTQVoyQixDQUF0Qjs7QUFlQSxTQUFTQyxvQkFBVCxDQUE4QmxRLEdBQTlCLEVBQXNEO0VBQzNELFVBQTRDO0lBQzFDLElBQUlBLEdBQUcsS0FBSyxJQUFSQSxJQUFnQixPQUFPQSxHQUFQLEtBQWUsUUFBbkMsRUFBNkM7TUFDM0MzRixNQUFNLENBQUNDLElBQVBELENBQVkyRixHQUFaM0YsRUFBaUJqRCxPQUFqQmlELENBQTBCTCxHQUFELElBQVM7UUFDaEMsSUFBSWlXLGFBQWEsQ0FBQ3pXLE9BQWR5VyxDQUFzQmpXLEdBQXRCaVcsTUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztVQUNyQzdYLE9BQU8sQ0FBQzBDLElBQVIxQyxDQUNHLHFEQUFvRDRCLEdBQUksRUFEM0Q1QjtRQUdEO01BQ0YsQ0FORGlDO0lBT0Q7RUFDRjtFQUVELE9BQU8sMEJBQVUyRixHQUFWLENBQVA7QUFDRDtBQUVNLE1BQU1tUSxFQUFFLEdBQUcsT0FBTzdLLFdBQVAsS0FBdUIsV0FBbEM7O0FBQ0EsTUFBTUQsRUFBRSxHQUNiOEssRUFBRSxJQUNGLE9BQU83SyxXQUFXLENBQUNDLElBQW5CLEtBQTRCLFVBRDVCNEssSUFFQSxPQUFPN0ssV0FBVyxDQUFDOEssT0FBbkIsS0FBK0IsVUFIMUI7Ozs7Ozs7Ozs7Ozs7QUN4WU0sd0JBQXdCLDBDQUEwQyxnREFBZ0QsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7O0FDREEsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7QUNBN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsNEZBQW1COztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQjBCO0FBQ0U7QUFDZTtBQUNmO0FBRUs7QUFDTDtBQUNDO0FBQ1U7QUFDRjtBQUNtQjtBQUNWO0FBQ047QUFFeEMsTUFBTUMsSUFBSSxHQUFHLENBQUM7RUFBQy9NLFNBQVM7RUFBRXdELFNBQVM7RUFBRXdKO0FBQUssQ0FBQyxLQUFLO0VBRTlDLE9BQ0UsTUFBQyw0Q0FBSyxDQUFDLFFBQVEsUUFDYixNQUFDLGdEQUFJLFFBQ0gscUJBQU8sWUFBVSxDQUFRLENBQ3BCLEVBQ1AsTUFBQyxvREFBUTtJQUFDLEtBQUssRUFBRUE7RUFBTSxHQUNyQixNQUFDLDREQUFZLFFBQ1gsTUFBQyxnRUFBYyxRQUNiLE1BQUMseURBQU0sUUFDTCxNQUFDLFNBQVMsRUFBS3hKLFNBQVMsQ0FBSSxDQUNyQixDQUNNLENBQ0osQ0FDTixDQUNJO0FBRXJCLENBQUM7QUFFY3lKLHdIQUFTLENBQUNDLG9EQUFTLENBQUMsQ0FBQ0gsSUFBSSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEN6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDWDtBQUNMOzs7Ozs7Ozs7Ozs7O0FDRnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdIO0FBRXpHLE1BQU1JLFVBQVUsR0FBRyxNQUFNO0VBQzlCLE9BQVF4a0IsUUFBUSxJQUFLQSxRQUFRLENBQUM7SUFDNUIrUCxJQUFJLEVBQUU3SixrRUFBV0E7RUFDbkIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVNLE1BQU11ZSxZQUFZLEdBQUcsTUFBTTtFQUNoQyxPQUFRemtCLFFBQVEsSUFBS0EsUUFBUSxDQUFDO0lBQzVCK1AsSUFBSSxFQUFFNUosb0VBQWFBO0VBQ3JCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFTSxNQUFNdWUsVUFBVSxHQUFJL2tCLEtBQUssSUFBSztFQUNuQyxPQUFRSyxRQUFRLElBQUtBLFFBQVEsQ0FBQztJQUM1QitQLElBQUksRUFBRTNKLGtFQUFXO0lBQ2pCdWUsT0FBTyxFQUFFaGxCO0VBQ1gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVNLE1BQU1pbEIsV0FBVyxHQUFJM25CLE9BQU8sSUFBSztFQUN0QyxPQUFRK0MsUUFBUSxJQUFLQSxRQUFRLENBQUM7SUFDNUIrUCxJQUFJLEVBQUUxSixtRUFBWTtJQUNsQnNlLE9BQU8sRUFBRTFuQjtFQUNYLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFTSxNQUFNNG5CLFdBQVcsR0FBRyxNQUFNO0VBQy9CLE9BQVE3a0IsUUFBUSxJQUFLQSxRQUFRLENBQUM7SUFDNUIrUCxJQUFJLEVBQUV6SixtRUFBWUE7RUFDcEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNoQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUNrQjtBQUczRyxTQUFTaEQsc0JBQXNCLENBQUNELFlBQVksRUFBRTtFQUNuRCxPQUFPO0lBQUMwTSxJQUFJLEVBQUVoSywyRUFBb0I7SUFBRTFDO0VBQVksQ0FBQztBQUNuRDtBQUVPLFNBQVN0QyxpQkFBaUIsQ0FBQ3pDLEtBQUssRUFBRTtFQUN2QyxPQUFPO0lBQUN5UixJQUFJLEVBQUUvSixtRUFBWTtJQUFFMUg7RUFBSyxDQUFDO0FBQ3BDO0FBRU8sU0FBU3dtQixZQUFZLENBQUNsbEIsU0FBUyxFQUFFO0VBQ3RDLE9BQU87SUFBQ21RLElBQUksRUFBRXhKLGtFQUFVO0lBQUUzRztFQUFTLENBQUM7QUFDdEM7QUFFTyxTQUFTMkQsZ0JBQWdCLENBQUNsRixRQUFRLEVBQUU7RUFDekMsT0FBTztJQUFDMFIsSUFBSSxFQUFFekksaUVBQVM7SUFBRWpKO0VBQVEsQ0FBQztBQUNwQztBQUVPLFNBQVMwbUIsa0JBQWtCLENBQUNsbEIsVUFBVSxFQUFFO0VBQzdDLE9BQVFHLFFBQVEsSUFBSztJQUNuQkEsUUFBUSxDQUFDO01BQUMrUCxJQUFJLEVBQUU1SSxtRUFBVztNQUFFdEg7SUFBVSxDQUFDLENBQUM7RUFDM0MsQ0FBQztBQUNIO0FBRU8sU0FBUzZDLFdBQVcsQ0FBQ3JCLFFBQVEsRUFBRTtFQUNwQyxPQUFPO0lBQUMwTyxJQUFJLEVBQUUzSSxxRUFBYTtJQUFFL0Y7RUFBUSxDQUFDO0FBQ3hDO0FBRU8sU0FBUzRELGNBQWMsQ0FBQ3hELE1BQU0sRUFBRTtFQUNyQyxPQUFPO0lBQ0xzTyxJQUFJLEVBQUU5SixzRUFBZTtJQUNyQjBlLE9BQU8sRUFBRWxqQjtFQUNYLENBQUM7QUFDSDtBQUVPLFNBQVN1akIsZUFBZSxDQUFDQyxTQUFTLEVBQUU7RUFDekMsT0FBUWpsQixRQUFRLElBQUs7SUFDbkJBLFFBQVEsQ0FBQztNQUFDK1AsSUFBSSxFQUFFMUkseUVBQWlCO01BQUU0ZDtJQUFTLENBQUMsQ0FBQztFQUNoRCxDQUFDO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFGO0FBRS9HLE1BQU1DLFVBQVUsR0FBRztFQUNqQnZsQixLQUFLLEVBQUUsRUFBRTtFQUNUd2xCLE9BQU8sRUFBRSxLQUFLO0VBQ2Rsb0IsT0FBTyxFQUFFO0FBQ1gsQ0FBQztBQUVELE1BQU1tb0IsYUFBYSxHQUFHLENBQUMvTSxLQUFLLEdBQUc2TSxVQUFVLEVBQUVHLE1BQU0sS0FBSztFQUNwRCxRQUFRQSxNQUFNLENBQUN0VixJQUFJO0lBQ2pCLEtBQUs3SixrRUFBVztNQUFFO1FBQ2hCLHVDQUFXbVMsS0FBSztVQUFFMVksS0FBSyxFQUFFLEVBQUU7VUFBRTFDLE9BQU8sRUFBRSxFQUFFO1VBQUVrb0IsT0FBTyxFQUFFO1FBQUk7TUFDekQ7SUFDQSxLQUFLaGYsb0VBQWE7TUFBRTtRQUNsQix1Q0FBV2tTLEtBQUs7VUFBRTFZLEtBQUssRUFBRSxFQUFFO1VBQUUxQyxPQUFPLEVBQUUsRUFBRTtVQUFFa29CLE9BQU8sRUFBRTtRQUFLO01BQzFEO0lBQ0EsS0FBSzllLG1FQUFZO01BQUU7UUFDakIsdUNBQVdnUyxLQUFLO1VBQUUxWSxLQUFLLEVBQUUsRUFBRTtVQUFFMUMsT0FBTyxFQUFFb29CLE1BQU0sQ0FBQ1YsT0FBTztVQUFFUSxPQUFPLEVBQUU7UUFBSztNQUN0RTtJQUNBLEtBQUsvZSxrRUFBVztNQUFFO1FBQ2hCLHVDQUFXaVMsS0FBSztVQUFFOE0sT0FBTyxFQUFFLEtBQUs7VUFBRXhsQixLQUFLLEVBQUUwbEIsTUFBTSxDQUFDVixPQUFPO1VBQUUxbkIsT0FBTyxFQUFFO1FBQUU7TUFDdEU7SUFDQSxLQUFLcUosbUVBQVk7TUFBRTtRQUNqQix1Q0FBVytSLEtBQUs7VUFBRThNLE9BQU8sRUFBRSxLQUFLO1VBQUV4bEIsS0FBSyxFQUFFLEVBQUU7VUFBRTFDLE9BQU8sRUFBRTtRQUFFO01BQzFEO0lBQ0E7TUFDRSxPQUFPb2IsS0FBSztFQUFDO0FBRW5CLENBQUM7QUFDYytNLDRFQUFhLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JvRTtBQVUxRDtBQUV0QyxNQUFNRSxlQUFlLEdBQUc7RUFDdEJqaUIsWUFBWSxFQUFFLElBQUk7RUFDbEJoRixRQUFRLEVBQUVGLDRGQUFvQztFQUM5QzBCLFVBQVUsRUFBRWEsd0VBQWdCO0VBQzVCZCxTQUFTLEVBQUVzRCx1RUFBZTtFQUMxQjdCLFFBQVEsRUFBRSxFQUFFO0VBQ1ovQyxLQUFLLEVBQUUsSUFBSTtFQUNYb0QsY0FBYyxFQUFFLEtBQUs7RUFDckJELE1BQU0sRUFBRTtJQUNOcUUsVUFBVSxFQUFFLFNBQVM7SUFDckJyRSxNQUFNLEVBQUUsSUFBSTtJQUNaekUsSUFBSSxFQUFFLFNBQVM7SUFDZlosSUFBSSxFQUFFO0VBQ1I7QUFDRixDQUFDO0FBRUQsTUFBTW1wQixlQUFlLEdBQUcsQ0FBQ2xOLEtBQUssR0FBR2lOLGVBQWUsRUFBRUQsTUFBTSxLQUFLO0VBQzNELFFBQVFBLE1BQU0sQ0FBQ3RWLElBQUk7SUFDakIsS0FBS2hLLDJFQUFvQjtNQUN2Qix1Q0FDS3NTLEtBQUs7UUFDUmhWLFlBQVksRUFBRWdpQixNQUFNLENBQUNoaUI7TUFBWTtJQUVyQyxLQUFLK0QscUVBQWE7TUFDaEIsdUNBQ0tpUixLQUFLO1FBQ1JoWCxRQUFRLEVBQUVna0IsTUFBTSxDQUFDaGtCO01BQVE7SUFHN0IsS0FBS2dHLHlFQUFpQjtNQUNwQix1Q0FDS2dSLEtBQUs7UUFDUjNXLGNBQWMsRUFBRTJqQixNQUFNLENBQUNKO01BQVM7SUFHcEMsS0FBS2pmLG1FQUFZO01BQ2YsdUNBQ0txUyxLQUFLO1FBQ1IvWixLQUFLLEVBQUUrbUIsTUFBTSxDQUFDL21CO01BQUs7SUFFdkIsS0FBS2lJLGtFQUFVO01BQ2IsdUNBQ0s4UixLQUFLO1FBQ1J6WSxTQUFTLEVBQUV5bEIsTUFBTSxDQUFDemxCO01BQVM7SUFFL0IsS0FBSzBILGlFQUFTO01BQ1osdUNBQ0srUSxLQUFLO1FBQ1JoYSxRQUFRLEVBQUVnbkIsTUFBTSxDQUFDaG5CO01BQVE7SUFFN0IsS0FBSzhJLG1FQUFXO01BQ2QsdUNBQ0trUixLQUFLO1FBQ1J4WSxVQUFVLEVBQUV3bEIsTUFBTSxDQUFDeGxCO01BQVU7SUFFakMsS0FBS29HLHNFQUFlO01BQ2xCLHVDQUNLb1MsS0FBSztRQUNSNVcsTUFBTSxFQUFFNGpCLE1BQU0sQ0FBQ1Y7TUFBTztJQUcxQjtNQUNFLE9BQU90TSxLQUFLO0VBQUM7QUFFbkIsQ0FBQztBQUVja04sOEVBQWUsRTs7Ozs7Ozs7Ozs7O0FDOUU5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ0o7QUFDSjtBQUc5QixNQUFNQyxRQUFRLEdBQUdDLDZEQUFlLENBQUM7RUFDL0JqbkIsUUFBUSxFQUFFa25CLGlEQUFRO0VBQ2xCQyxNQUFNLEVBQUVDLCtDQUFNQTtBQUNoQixDQUFDLENBQUM7QUFFYUosdUVBQVEsRTs7Ozs7Ozs7Ozs7O0FDVnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRDtBQUNuQjtBQUNHO0FBR25DLE1BQU1LLGNBQWMsR0FBR0MsVUFBVSxJQUFJO0VBQ25DLFVBQTJDO0lBQ3pDLE1BQU07TUFBQ0M7SUFBbUIsQ0FBQyxHQUFHakssbUJBQU8sQ0FBQywwREFBMEIsQ0FBQztJQUNqRSxPQUFPaUssbUJBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0YsVUFBVSxDQUFDLENBQUM7RUFDNUQ7RUFDQSxPQUFPRSw2REFBZSxDQUFDLEdBQUdGLFVBQVUsQ0FBQztBQUN2QyxDQUFDO0FBRUQsU0FBU0csY0FBYyxDQUFDQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUU7RUFDekMsT0FBT0MseURBQVcsQ0FBQ1gsaURBQVEsRUFBRVUsWUFBWSxFQUFFTCxjQUFjLENBQUMsQ0FBQ08sa0RBQUssQ0FBQyxDQUFDLENBQUM7QUFDckU7QUFFZUgsNkVBQWMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCN0I7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFFbkIsTUFBTUksVUFBVSxHQUFHQyw0Q0FBSyxDQUFDMVQsTUFBTSxDQUFDO0VBQ3JDMlQsT0FBTyxFQUFHLHdDQUF1QztFQUFFO0VBQ25EQyxPQUFPLEVBQUU7SUFDUCxjQUFjLEVBQUU7RUFDbEI7QUFDRixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B3QjtBQUN5QjtBQUVuRCxNQUFNQyxnQkFBZ0IsR0FBSWpsQixLQUFLLElBQUssTUFBQyxrRUFBVSxlQUFNQSxLQUFLO0VBQUUsUUFBUTtFQUFDLFNBQVM7RUFDN0IscUJBQXFCLEVBQUVBLEtBQUssSUFBSSwwQkFBU0EsS0FBSztJQUNULEtBQUssRUFBRTtNQUFDa2xCLE9BQU8sRUFBRTtJQUFNLENBQUU7SUFDekIsU0FBUyxFQUFDO0VBQWtCO0FBQUcsR0FBRTtBQUV4R0QsK0VBQWdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JMO0FBQzhCO0FBRXhELE1BQU1FLGFBQWEsR0FBR25sQixLQUFLLElBQUksTUFBQywyREFBZ0IsRUFBS0EsS0FBSyxDQUFJO0FBQy9Db2xCLDRIQUFVLENBQUNELGFBQWEsRUFBRTtFQUN2Q0UsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEU7QUFDM0M7QUFDSTtBQUVyQyxNQUFNQyxXQUFXLGdCQUFHQywyREFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVyQztBQUNBOztBQUVPLFNBQVNDLFlBQVksQ0FBQztFQUFDL3FCO0FBQVEsQ0FBQyxFQUFFO0VBQ3ZDLE1BQU1naUIsSUFBSSxHQUFHZ0osY0FBYyxFQUFFO0VBQzdCLE9BQU8sTUFBQyxXQUFXLENBQUMsUUFBUTtJQUFDLEtBQUssRUFBRWhKO0VBQUssR0FBRWhpQixRQUFRLENBQXdCO0FBQzdFOztBQUVBO0FBQ0E7O0FBRU8sTUFBTTJCLE9BQU8sR0FBRyxNQUFNO0VBQzNCLE9BQU84VCx3REFBVSxDQUFDb1YsV0FBVyxDQUFDO0FBQ2hDLENBQUM7QUFFRCxNQUFNRyxjQUFjLEdBQUcsTUFBTTtFQUMzQixNQUFNO0lBQUEsR0FBQ3ZwQixRQUFRO0lBQUEsR0FBRXdwQjtFQUFXLElBQUl4aUIsc0RBQVEsQ0FBQyxJQUFJLENBQUM7RUFDOUMsTUFBTTtJQUFBLEdBQUNoRixhQUFhO0lBQUEsR0FBRXluQjtFQUFjLElBQUl6aUIsc0RBQVEsQ0FBQyxJQUFJLENBQUM7RUFDdEQsTUFBTTtJQUFBLEdBQUMwaUIsU0FBUztJQUFBLEdBQUVDO0VBQVUsSUFBSTNpQixzREFBUSxDQUFDLEtBQUssQ0FBQztFQUMvQyxNQUFNO0lBQUEsR0FBQy9FLEtBQUs7SUFBQSxHQUFFMm5CO0VBQVEsSUFBSTVpQixzREFBUSxDQUFDLEVBQUUsQ0FBQztFQUV0QyxNQUFNOGYsVUFBVSxHQUFHLE1BQU07SUFDdkI2QyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2hCQyxRQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2QsQ0FBQztFQUVELE1BQU03QyxZQUFZLEdBQUcsTUFBTTtJQUN6QjRDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDakJDLFFBQVEsQ0FBQyxFQUFFLENBQUM7RUFDZCxDQUFDO0VBRUQsTUFBTTVDLFVBQVUsR0FBSS9rQixLQUFLLElBQUs7SUFDNUIwbkIsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNqQkMsUUFBUSxDQUFDM25CLEtBQUssQ0FBQztFQUNqQixDQUFDO0VBRUQsTUFBTTRuQixTQUFTLEdBQUcsQ0FBQ3BMLElBQUksRUFBRXFMLFdBQVcsS0FBSztJQUN2Q2hELFVBQVUsRUFBRTtJQUNaNkIsK0NBQVUsQ0FBQ29CLElBQUksQ0FBQyxPQUFPLEVBQUV0TCxJQUFJLENBQUMsQ0FDM0JqYixJQUFJLENBQUMsQ0FBQztNQUFDaWI7SUFBSSxDQUFDLEtBQUs7TUFDaEIsSUFBSUEsSUFBSSxFQUFFO1FBQ1JzSSxZQUFZLEVBQUU7UUFDZDRCLCtDQUFVLENBQUNxQixRQUFRLENBQUNsQixPQUFPLENBQUNiLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFTLEdBQUd4SixJQUFJLENBQUN3TCxLQUFLO1FBQzVFLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxvREFBTyxFQUFFO1FBQzdCRCxPQUFPLENBQUMzYixHQUFHLENBQUMsT0FBTyxFQUFFa1EsSUFBSSxDQUFDd0wsS0FBSyxDQUFDO1FBQ2hDRyxXQUFXLEVBQUU7UUFDYixJQUFJTixXQUFXLEVBQUVBLFdBQVcsRUFBRTtNQUNoQyxDQUFDLE1BQU07UUFDTDlDLFVBQVUsQ0FBQ3ZJLElBQUksQ0FBQ3hjLEtBQUssQ0FBQztNQUN4QjtJQUNGLENBQUMsQ0FBQyxDQUNENE0sS0FBSyxDQUFDLFVBQVU1TSxLQUFLLEVBQUU7TUFDdEIra0IsVUFBVSxDQUFDL2tCLEtBQUssQ0FBQzFDLE9BQU8sQ0FBQztJQUMzQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsTUFBTThxQixVQUFVLEdBQUcsQ0FBQzVMLElBQUksRUFBRXFMLFdBQVcsS0FBSztJQUN4Q2hELFVBQVUsRUFBRTtJQUNaNkIsK0NBQVUsQ0FBQ29CLElBQUksQ0FBQyxlQUFlLEVBQUV0TCxJQUFJLENBQUMsQ0FDbkNqYixJQUFJLENBQUMsQ0FBQztNQUFDaWI7SUFBSSxDQUFDLEtBQUs7TUFDaEIsSUFBSUEsSUFBSSxDQUFDOUcsTUFBTSxFQUFFO1FBQ2ZvUCxZQUFZLEVBQUU7UUFDZDRCLCtDQUFVLENBQUNxQixRQUFRLENBQUNsQixPQUFPLENBQUNiLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFTLEdBQUd4SixJQUFJLENBQUN3TCxLQUFLLENBQUNLLFlBQVk7UUFDekYsTUFBTUosT0FBTyxHQUFHLElBQUlDLG9EQUFPLEVBQUU7UUFDN0JELE9BQU8sQ0FBQzNiLEdBQUcsQ0FBQyxPQUFPLEVBQUVrUSxJQUFJLENBQUN3TCxLQUFLLENBQUNLLFlBQVksQ0FBQztRQUM3QyxJQUFJUixXQUFXLEVBQUVBLFdBQVcsRUFBRTtNQUNoQyxDQUFDLE1BQU07UUFDTDlDLFVBQVUsQ0FBQ3ZJLElBQUksQ0FBQ3hjLEtBQUssQ0FBQztNQUN4QjtJQUNGLENBQUMsQ0FBQyxDQUNENE0sS0FBSyxDQUFDLFVBQVU1TSxLQUFLLEVBQUU7TUFDdEIra0IsVUFBVSxDQUFDL2tCLEtBQUssQ0FBQzFDLE9BQU8sQ0FBQztJQUMzQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsTUFBTVUsV0FBVyxHQUFJNnBCLFdBQVcsSUFBSztJQUNuQ2hELFVBQVUsRUFBRTtJQUNaNkIsK0NBQVUsQ0FBQ29CLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDdEJ2bUIsSUFBSSxDQUFDLENBQUM7TUFBQ2liO0lBQUksQ0FBQyxLQUFLO01BQ2hCLElBQUlBLElBQUksRUFBRTtRQUNSc0ksWUFBWSxFQUFFO1FBQ2R5QyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2xCYiwrQ0FBVSxDQUFDcUIsUUFBUSxDQUFDbEIsT0FBTyxDQUFDYixNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRTtRQUN4RCxNQUFNaUMsT0FBTyxHQUFHLElBQUlDLG9EQUFPLEVBQUU7UUFDN0JELE9BQU8sQ0FBQ25uQixNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLElBQUkrbUIsV0FBVyxFQUFFQSxXQUFXLEVBQUU7TUFDaEMsQ0FBQyxNQUFNO1FBQ0w5QyxVQUFVLENBQUN2SSxJQUFJLENBQUN4YyxLQUFLLENBQUM7TUFDeEI7SUFDRixDQUFDLENBQUMsQ0FDRDRNLEtBQUssQ0FBQyxVQUFVNU0sS0FBSyxFQUFFO01BQ3RCK2tCLFVBQVUsQ0FBQy9rQixLQUFLLENBQUMxQyxPQUFPLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELE1BQU02cUIsV0FBVyxHQUFHLE1BQU07SUFDeEJ0RCxVQUFVLEVBQUU7SUFDWjZCLCtDQUFVLENBQUM5YSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUNySyxJQUFJLENBQUMsQ0FBQztNQUFDaWI7SUFBSSxDQUFDLEtBQUs7TUFDcEMsSUFBSUEsSUFBSSxFQUFFO1FBQ1JzSSxZQUFZLEVBQUU7UUFDZHlDLFdBQVcsQ0FBQy9LLElBQUksQ0FBQztNQUNuQixDQUFDLE1BQU07UUFDTHVJLFVBQVUsQ0FBQ3ZJLElBQUksQ0FBQ3hjLEtBQUssQ0FBQztNQUN4QjtJQUNGLENBQUMsQ0FBQyxDQUFDNE0sS0FBSyxDQUFDLFVBQVU1TSxLQUFLLEVBQUU7TUFDeEIwbUIsK0NBQVUsQ0FBQ3FCLFFBQVEsQ0FBQ2xCLE9BQU8sQ0FBQ2IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUU7TUFDeERqQixVQUFVLENBQUMva0IsS0FBSyxDQUFDMUMsT0FBTyxDQUFDO0lBQzNCLENBQUMsQ0FBQztFQUNKLENBQUM7O0VBRUQ7RUFDQTtFQUNBO0VBQ0E7O0VBRUFpRCx1REFBUyxDQUFDLE1BQU07SUFDWixNQUFNMG5CLE9BQU8sR0FBRyxJQUFJQyxvREFBTyxFQUFFO0lBQzdCLE1BQU1GLEtBQUssR0FBR0MsT0FBTyxDQUFDcmMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNsQzhhLCtDQUFVLENBQUNxQixRQUFRLENBQUNsQixPQUFPLENBQUNiLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFTLEdBQUdnQyxLQUFLO0lBRXZFdEIsK0NBQVUsQ0FBQ29CLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQ3ZtQixJQUFJLENBQUMsQ0FBQztNQUFDaWI7SUFBSSxDQUFDLEtBQUs7TUFDMUMsSUFBSUEsSUFBSSxDQUFDOEwsSUFBSSxFQUFFO1FBQ2JmLFdBQVcsQ0FBQy9LLElBQUksQ0FBQzhMLElBQUksQ0FBQztNQUN4QjtNQUNBZCxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDNWEsS0FBSyxDQUFDLFVBQVU1TSxLQUFLLEVBQUU7TUFDeEI7TUFDQTtNQUNBd25CLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FDTjs7RUFFRDtFQUNBLE9BQU87SUFDTHpuQixhQUFhO0lBQ2IwbkIsU0FBUztJQUNUMXBCLFFBQVE7SUFDUmlDLEtBQUs7SUFDTHVuQixXQUFXO0lBQ1hZLFdBQVc7SUFDWFAsU0FBUztJQUNUUSxVQUFVO0lBQ1ZwcUI7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUVNLE1BQU15RCxtQkFBbUIsR0FBSUMsUUFBUSxJQUFLO0VBQy9DLE9BQU9BLFFBQVEsS0FBSyxTQUFTLElBQUlBLFFBQVEsS0FBSyxTQUFTLElBQUlBLFFBQVEsS0FBSyxrQkFBa0IsSUFBSUEsUUFBUSxLQUFLLGlCQUFpQjtBQUM5SCxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0pELDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IEFwcExpbmsgPSAoe2hyZWYsIGNoaWxkcmVufSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TGluayBocmVmPXtocmVmfT5cclxuXHRcdFx0PGE+e2NoaWxkcmVufTwvYT5cclxuXHRcdDwvTGluaz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGluaztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhcn0gZnJvbSBcImFudGRcIjtcclxuXHJcblxyXG5jb25zdCBOb3RpZmljYXRpb25JdGVtID0gKHtub3RpZmljYXRpb259KSA9PiB7XHJcbiAgY29uc3Qge2ljb24sIGltYWdlLCB0aXRsZSwgdGltZX0gPSBub3RpZmljYXRpb247XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbWVkaWFcIj5cclxuICAgICAgPEF2YXRhciBjbGFzc05hbWU9XCJneC1zaXplLTQwIGd4LW1yLTNcIlxyXG4gICAgICAgICAgICAgIGFsdD17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1lZGlhLWJvZHkgZ3gtYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1mcy1zbSBneC1tYi0wXCI+e3RpdGxlfTwvcD5cclxuICAgICAgICA8aSBjbGFzc05hbWU9e2BpY29uIGljb24tJHtpY29ufSBneC1wci0yYH0vPiA8c3BhbiBjbGFzc05hbWU9XCJneC1tZXRhLWRhdGVcIj48c21hbGw+e3RpbWV9PC9zbWFsbD48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uSXRlbTtcclxuIiwiZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBbXHJcblxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgdGl0bGU6IFwiU3RlbGxhIEpvaG5zb24gaGFzIHJlY2VudGx5IHBvc3RlZCBhbiBhbGJ1bVwiLFxyXG4gICAgdGltZTogXCI0OjEwIFBNXCIsXHJcbiAgICBpY29uOiBcInRodW1iLXVwIGd4LXRleHQtYmx1ZVwiLFxyXG4gIH0sIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgdGl0bGU6IFwiQWxleCBCcm93biBoYXMgc2hhcmVkIE1hcnRpbiBHdXB0aWwncyBwb3N0XCIsXHJcbiAgICB0aW1lOiBcIjU6MTggUE1cIixcclxuICAgIGljb246IFwiY2hhdCBneC10ZXh0LWdyZXlcIixcclxuICB9LCB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4NDIwJyxcclxuICAgIHRpdGxlOiBcIkRvbW5pYyBCcm93biBoYXMgc2VudCB5b3UgYSBncm91cCBpbnZpdGF0aW9uIGZvciBHbG9iYWwgSGVhbHRoXCIsXHJcbiAgICB0aW1lOiBcIjU6MzYgUE1cIixcclxuICAgIGljb246IFwiYmlydGhkYXkgdGV4dC1pbmZvXCIsXHJcbiAgfSwge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICB0aXRsZTogXCJKb2huIFNtaXRoIGhhcyBiaXJ0aGRheSB0b2RheVwiLFxyXG4gICAgdGltZTogXCI1OjU0IFBNXCIsXHJcbiAgICBpY29uOiBcImJpcnRoZGF5IGd4LXRleHQtd2FybmluZ1wiLFxyXG4gIH0sIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgdGl0bGU6IFwiQ2hyaXMgaGFzIHVwZGF0ZWQgaGlzIHByb2ZpbGUgcGljdHVyZVwiLFxyXG4gICAgdGltZTogXCI1OjI1IFBNXCIsXHJcbiAgICBpY29uOiBcInByb2ZpbGUgZ3gtdGV4dC1ncmV5XCIsXHJcbiAgfVxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25JdGVtIGZyb20gXCIuL05vdGlmaWNhdGlvbkl0ZW1cIjtcclxuaW1wb3J0IHtub3RpZmljYXRpb25zfSBmcm9tIFwiLi9kYXRhXCI7XHJcbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gXCIuLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnNcIjtcclxuXHJcblxyXG5jb25zdCBBcHBOb3RpZmljYXRpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1oZWFkZXJcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3gtbWItMFwiPk5vdGlmaWNhdGlvbnM8L2gzPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImd4LWljb24tYnRuIGljb24gaWNvbi1jaGFydmxldC1kb3duXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1zY3JvbGxcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtc3ViLXBvcG92ZXJcIj5cclxuICAgICAgICAgIHtub3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uLCBpbmRleCkgPT4gPE5vdGlmaWNhdGlvbkl0ZW0ga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259Lz4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9DdXN0b21TY3JvbGxiYXJzPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTm90aWZpY2F0aW9uO1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBDaXJjdWxhclByb2dyZXNzID0gKHtjbGFzc05hbWV9KSA9PiA8ZGl2IGNsYXNzTmFtZT17YGxvYWRlciAke2NsYXNzTmFtZX1gfT5cclxuICAgPFNwaW4gc2l6ZT1cImxhcmdlXCIgLz5cclxuPC9kaXY+O1xyXG5leHBvcnQgZGVmYXVsdCBDaXJjdWxhclByb2dyZXNzO1xyXG5DaXJjdWxhclByb2dyZXNzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjbGFzc05hbWU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhcn0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IE5vdGlmaWNhdGlvbkl0ZW0gPSAoe25vdGlmaWNhdGlvbn0pID0+IHtcclxuICBjb25zdCB7aW1hZ2UsIGJhZGdlLCBuYW1lLCB0aW1lLCBtZXNzYWdlfSA9IG5vdGlmaWNhdGlvbjtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cImd4LW1lZGlhXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtdXNlci10aHVtYiBneC1tci0zXCI+XHJcbiAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9XCJneC1zaXplLTQwXCJcclxuICAgICAgICAgICAgICAgIGFsdD17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfS8+XHJcbiAgICAgICAge2JhZGdlID4gMCA/IDxzcGFuIGNsYXNzTmFtZT1cImd4LWJhZGdlIGd4LWJhZGdlLWRhbmdlciBneC10ZXh0LXdoaXRlIGd4LXJvdW5kZWQtY2lyY2xlXCI+e2JhZGdlfTwvc3Bhbj4gOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mbGV4LXJvdyBneC1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBneC1hbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJneC10ZXh0LWNhcGl0YWxpemUgZ3gtdXNlci1uYW1lIGd4LW1iLTBcIj48c3BhbiBjbGFzc05hbWU9XCJneC1saW5rXCI+e25hbWV9PC9zcGFuPjwvaDU+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1tZXRhLWRhdGVcIj48c21hbGw+e3RpbWV9PC9zbWFsbD48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtZnMtc21cIj57bWVzc2FnZX08L3A+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtYnRuIGd4LWJ0bi1zbSBneC10b3AyIGd4LXRleHQtbXV0ZWRcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tcmVwbHkgZ3gtcHItMlwiLz5SZXBseTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1idG4gZ3gtYnRuLXNtIGd4LXRvcDIgZ3gtdGV4dC1tdXRlZFwiPjxpXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tY3VzdG9tLXZpZXcgZ3gtcHItMlwiLz5SZWFkPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkl0ZW07XHJcbiIsImV4cG9ydCBjb25zdCBub3RpZmljYXRpb25zID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiLFxyXG4gICAgbmFtZTogXCJEb21uaWMgQnJvd25cIixcclxuICAgIHRpbWU6IFwiNjoxOSBQTVwiLFxyXG4gICAgbWVzc2FnZTogXCJUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mLi4uXCIsXHJcbiAgICBiYWRnZTogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXHJcbiAgICBuYW1lOiBcIkpvaG4gU21pdGhcIixcclxuICAgIHRpbWU6IFwiNDoxOCBQTVwiLFxyXG4gICAgbWVzc2FnZTogXCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUuLi5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1hZ2U6XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXHJcbiAgICBuYW1lOiBcIkpvaG4gU21pdGhcIixcclxuICAgIHRpbWU6IFwiNzoxMCBQTVwiLFxyXG4gICAgbWVzc2FnZTogXCJUaGUgcG9pbnQgb2YgdXNpbmcgTG9yZW0gSXBzdW0gaXMgdGhhdCBpdCBoYXMgYS4uLlwiLFxyXG4gICAgYmFkZ2U6IDhcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiLFxyXG4gICAgbmFtZTogXCJhbGV4IGRvbGdvdmVcIixcclxuICAgIHRpbWU6IFwiNToxMCBQTVwiLFxyXG4gICAgbWVzc2FnZTogXCJJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwuLi5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiLFxyXG4gICAgbmFtZTogXCJEb21uaWMgSGFycmlzXCIsXHJcbiAgICB0aW1lOiBcIjc6MzUgUE1cIixcclxuICAgIG1lc3NhZ2U6IFwiQWxsIHRoZSBMb3JlbSBJcHN1bSBnZW5lcmF0b3JzIG9uIHRoZS4uLlwiLFxyXG4gICAgYmFkZ2U6IDNcclxuICB9XHJcbl07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbkl0ZW0gZnJvbSBcIi4vTm90aWZpY2F0aW9uSXRlbVwiO1xyXG5pbXBvcnQge25vdGlmaWNhdGlvbnN9IGZyb20gXCIuL2RhdGFcIjtcclxuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSAnLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzJ1xyXG5cclxuY29uc3QgTWFpbE5vdGlmaWNhdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1wb3BvdmVyLWhlYWRlclwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJneC1tYi0wXCI+TWVzc2FnZXM8L2gzPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImd4LWljb24tYnRuIGljb24gaWNvbi1jaGFydmxldC1kb3duXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1zY3JvbGxcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtc3ViLXBvcG92ZXJcIj5cclxuICAgICAgICAgIHtub3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uLCBpbmRleCkgPT4gPE5vdGlmaWNhdGlvbkl0ZW0ga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259Lz4pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haWxOb3RpZmljYXRpb247XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTZWFyY2hCb3ggPSAoe3N0eWxlTmFtZSwgcGxhY2Vob2xkZXIsIG9uQ2hhbmdlLCB2YWx1ZX0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3gtc2VhcmNoLWJhciAke3N0eWxlTmFtZX1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFudC1pbnB1dFwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfS8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtc2VhcmNoLWljb24gZ3gtcG9pbnRlclwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2hcIi8+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQm94O1xyXG5cclxuU2VhcmNoQm94LmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdHlsZU5hbWU6IFwiXCIsXHJcbiAgdmFsdWU6IFwiXCIsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBdmF0YXIsIFBvcG92ZXJ9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlLWF1dGhcIjtcclxuXHJcbmNvbnN0IFVzZXJJbmZvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHthdXRoVXNlciwgdXNlclNpZ25PdXR9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCB1c2VyTWVudU9wdGlvbnMgPSAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtdXNlci1wb3BvdmVyXCI+XHJcbiAgICAgIDxsaT5NeSBBY2NvdW50PC9saT5cclxuICAgICAgPGxpPkNvbm5lY3Rpb25zPC9saT5cclxuICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHVzZXJTaWduT3V0KCl9PkxvZ291dFxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICApO1xyXG5cclxuICByZXR1cm4gYXV0aFVzZXIgPyAoXHJcbiAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXt1c2VyTWVudU9wdGlvbnN9IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICA8QXZhdGFyIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIiBjbGFzc05hbWU9XCJneC1hdmF0YXIgZ3gtcG9pbnRlclwiIGFsdD1cIlwiLz5cclxuICAgIDwvUG9wb3Zlcj5cclxuICApIDogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckluZm87XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIE5BVl9TVFlMRV9EUkFXRVIsXG4gIE5BVl9TVFlMRV9GSVhFRCxcbiAgTkFWX1NUWUxFX01JTklfU0lERUJBUiwgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxuICBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUiwgVEFCX1NJWkVcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL1NpZGViYXJcIjtcblxuY29uc3QgU0lERUJBUl9WSVNJQkxFX09OID0gW05BVl9TVFlMRV9GSVhFRCwgTkFWX1NUWUxFX0RSQVdFUiwgTkFWX1NUWUxFX01JTklfU0lERUJBUiwgTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIsIE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUl07XG5cbmNvbnN0IEFwcFNpZGViYXIgPSAoe25hdlN0eWxlfSkgPT4ge1xuICBjb25zdCB3aWR0aCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy53aWR0aCk7XG5cbiAgaWYgKHdpZHRoIDwgVEFCX1NJWkUgfHwgU0lERUJBUl9WSVNJQkxFX09OLmluY2x1ZGVzKG5hdlN0eWxlKSkge1xuICAgIHJldHVybiA8U2lkZWJhci8+O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFwcFNpZGViYXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGF5b3V0LCBtZXNzYWdlfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgSG9yaXpvbnRhbERlZmF1bHQgZnJvbSBcIi4uL1RvcGJhci9Ib3Jpem9udGFsRGVmYXVsdFwiO1xuaW1wb3J0IEhvcml6b250YWxEYXJrIGZyb20gXCIuLi9Ub3BiYXIvSG9yaXpvbnRhbERhcmtcIjtcbmltcG9ydCBJbnNpZGVIZWFkZXIgZnJvbSBcIi4uL1RvcGJhci9JbnNpZGVIZWFkZXJcIjtcbmltcG9ydCBBYm92ZUhlYWRlciBmcm9tIFwiLi4vVG9wYmFyL0Fib3ZlSGVhZGVyXCI7XG5pbXBvcnQgQmVsb3dIZWFkZXIgZnJvbSBcIi4uL1RvcGJhci9CZWxvd0hlYWRlclwiO1xuaW1wb3J0IFRvcGJhciBmcm9tIFwiLi4vVG9wYmFyXCI7XG5pbXBvcnQge1xuICBMQVlPVVRfVFlQRV9CT1hFRCxcbiAgTEFZT1VUX1RZUEVfRlJBTUVELFxuICBMQVlPVVRfVFlQRV9GVUxMLFxuICBOQVZfU1RZTEVfQUJPVkVfSEVBREVSLFxuICBOQVZfU1RZTEVfQkVMT1dfSEVBREVSLFxuICBOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMLFxuICBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMLFxuICBOQVZfU1RZTEVfRFJBV0VSLFxuICBOQVZfU1RZTEVfRklYRUQsXG4gIE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwsXG4gIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIsXG4gIE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUixcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIsXG4gIFRIRU1FX1RZUEVfREFSS1xufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xuaW1wb3J0IE5vSGVhZGVyTm90aWZpY2F0aW9uIGZyb20gXCIuLi9Ub3BiYXIvTm9IZWFkZXJOb3RpZmljYXRpb25cIjtcbmltcG9ydCB7aXNVblJlc3RyaWN0ZWRSb3V0ZSwgdXNlQXV0aH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlLWF1dGhcIjtcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCB7dXBkYXRlV2luZG93V2lkdGh9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQgQXBwU2lkZWJhciBmcm9tIFwiLi9BcHBTaWRlYmFyXCI7XG5cbmNvbnN0IGdldENvbnRhaW5lckNsYXNzID0gKG5hdlN0eWxlKSA9PiB7XG4gIHN3aXRjaCAobmF2U3R5bGUpIHtcbiAgICBjYXNlIE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUw6XG4gICAgICByZXR1cm4gXCJneC1jb250YWluZXItd3JhcFwiO1xuICAgIGNhc2UgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTDpcbiAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XG4gICAgY2FzZSBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMOlxuICAgICAgcmV0dXJuIFwiZ3gtY29udGFpbmVyLXdyYXBcIjtcbiAgICBjYXNlIE5BVl9TVFlMRV9CRUxPV19IRUFERVI6XG4gICAgICByZXR1cm4gXCJneC1jb250YWluZXItd3JhcFwiO1xuICAgIGNhc2UgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUjpcbiAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuY29uc3QgZ2V0TmF2U3R5bGVzID0gKG5hdlN0eWxlKSA9PiB7XG4gIHN3aXRjaCAobmF2U3R5bGUpIHtcbiAgICBjYXNlIE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwgOlxuICAgICAgcmV0dXJuIDxIb3Jpem9udGFsRGVmYXVsdC8+O1xuICAgIGNhc2UgTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTCA6XG4gICAgICByZXR1cm4gPEhvcml6b250YWxEYXJrLz47XG4gICAgY2FzZSBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMIDpcbiAgICAgIHJldHVybiA8SW5zaWRlSGVhZGVyLz47XG4gICAgY2FzZSBOQVZfU1RZTEVfQUJPVkVfSEVBREVSIDpcbiAgICAgIHJldHVybiA8QWJvdmVIZWFkZXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9CRUxPV19IRUFERVIgOlxuICAgICAgcmV0dXJuIDxCZWxvd0hlYWRlci8+O1xuICAgIGNhc2UgTkFWX1NUWUxFX0ZJWEVEIDpcbiAgICAgIHJldHVybiA8VG9wYmFyLz47XG4gICAgY2FzZSBOQVZfU1RZTEVfRFJBV0VSIDpcbiAgICAgIHJldHVybiA8VG9wYmFyLz47XG4gICAgY2FzZSBOQVZfU1RZTEVfTUlOSV9TSURFQkFSIDpcbiAgICAgIHJldHVybiA8VG9wYmFyLz47XG4gICAgY2FzZSBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUiA6XG4gICAgICByZXR1cm4gPE5vSGVhZGVyTm90aWZpY2F0aW9uLz47XG4gICAgY2FzZSBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIgOlxuICAgICAgcmV0dXJuIDxOb0hlYWRlck5vdGlmaWNhdGlvbi8+O1xuICAgIGRlZmF1bHQgOlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IHtDb250ZW50LCBGb290ZXJ9ID0gTGF5b3V0O1xuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xuICBjb25zdCB7YXV0aFVzZXIsIGlzTG9hZGluZ1VzZXIsIGVycm9yfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgdGhlbWVUeXBlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLnRoZW1lVHlwZSk7XG4gIGNvbnN0IG5hdlN0eWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdlN0eWxlKTtcbiAgY29uc3QgbGF5b3V0VHlwZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5sYXlvdXRUeXBlKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRoZW1lVHlwZSA9PT0gVEhFTUVfVFlQRV9EQVJLKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstdGhlbWUnKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLXRoZW1lJykpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay10aGVtZScpO1xuICAgIH1cbiAgfSwgW3RoZW1lVHlwZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFX0ZVTEwpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm94ZWQtbGF5b3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZyYW1lZC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZnVsbC1sYXlvdXQnKTtcbiAgICB9IGVsc2UgaWYgKGxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFX0JPWEVEKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwtbGF5b3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZyYW1lZC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYm94ZWQtbGF5b3V0Jyk7XG4gICAgfSBlbHNlIGlmIChsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRV9GUkFNRUQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm94ZWQtbGF5b3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwtbGF5b3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2ZyYW1lZC1sYXlvdXQnKTtcbiAgICB9XG4gIH0sIFtsYXlvdXRUeXBlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwgfHxcbiAgICAgIG5hdlN0eWxlID09PSBOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMIHx8XG4gICAgICBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCB8fFxuICAgICAgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9BQk9WRV9IRUFERVIgfHxcbiAgICAgIG5hdlN0eWxlID09PSBOQVZfU1RZTEVfQkVMT1dfSEVBREVSKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Z1bGwtc2Nyb2xsJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwtbGF5b3V0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbC1zY3JvbGwnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbC1sYXlvdXQnKTtcbiAgICB9XG4gIH0sIFtuYXZTdHlsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZVdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKSk7XG4gICAgfSlcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3IudG9TdHJpbmcoKSkudGhlbihyID0+IHIpO1xuICAgIH1cbiAgfSwgW2Vycm9yXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzTG9hZGluZ1VzZXIpIHtcbiAgICAgIGlmICghYXV0aFVzZXIgJiYgIWlzVW5SZXN0cmljdGVkUm91dGUocm91dGVyLnBhdGhuYW1lKSkge1xuICAgICAgICByb3V0ZXIucHVzaCgnL3NpZ25pbicpLnRoZW4ociA9PiByKTtcbiAgICAgIH0gZWxzZSBpZiAoYXV0aFVzZXIgJiYgaXNVblJlc3RyaWN0ZWRSb3V0ZShyb3V0ZXIucGF0aG5hbWUpKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJykudGhlbihyID0+IHIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2F1dGhVc2VyLCBpc0xvYWRpbmdVc2VyLCByb3V0ZXIucGF0aG5hbWVdKTtcblxuICBpZiAoaXNMb2FkaW5nVXNlcikge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImd4LWxvYWRlci12aWV3XCI+XG4gICAgICA8Q2lyY3VsYXJQcm9ncmVzcy8+XG4gICAgPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIGlzVW5SZXN0cmljdGVkUm91dGUocm91dGVyLnBhdGhuYW1lKSA/IGNoaWxkcmVuIDogKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtgZ3gtYXBwLWxheW91dGB9PlxuICAgICAgPEFwcFNpZGViYXIgbmF2U3R5bGU9e25hdlN0eWxlfS8+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7Z2V0TmF2U3R5bGVzKG5hdlN0eWxlKX1cbiAgICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPXtgZ3gtbGF5b3V0LWNvbnRlbnQgJHtnZXRDb250YWluZXJDbGFzcyhuYXZTdHlsZSl9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tYWluLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8Rm9vdGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1sYXlvdXQtZm9vdGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgQ29weXJpZ2h0IENvbXBhbnkgTmFtZSDCqSB7dG9kYXkuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9vdGVyPiAqL31cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xuXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q29uZmlnUHJvdmlkZXJ9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtJbnRsUHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBBcHBMb2NhbGUgZnJvbSBcIi4uLy4uLy4uL2xuZ1Byb3ZpZGVyXCI7XG5cbmNvbnN0IExvY2FsZVByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGxvY2FsZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5sb2NhbGUpO1xuICBjb25zdCBpc0RpcmVjdGlvblJUTCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5pc0RpcmVjdGlvblJUTCk7XG4gIGNvbnN0IGN1cnJlbnRBcHBMb2NhbGUgPSBBcHBMb2NhbGVbbG9jYWxlLmxvY2FsZV07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxlKVxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSBsb2NhbGUubG9jYWxlO1xuICB9LCBbbG9jYWxlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNEaXJlY3Rpb25SVEwpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdydGwnKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGlyZWN0aW9uJywgJ3J0bCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdydGwnKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGlyZWN0aW9uJywgJ2x0cicpXG4gICAgfVxuICB9LCBbaXNEaXJlY3Rpb25SVExdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb25maWdQcm92aWRlciBsb2NhbGU9e2N1cnJlbnRBcHBMb2NhbGUuYW50ZH0gZGlyZWN0aW9uPXtpc0RpcmVjdGlvblJUTCA/ICdydGwnIDogJ2x0cid9PlxuICAgICAgPEludGxQcm92aWRlclxuICAgICAgICBsb2NhbGU9e2N1cnJlbnRBcHBMb2NhbGUubG9jYWxlfVxuICAgICAgICBtZXNzYWdlcz17Y3VycmVudEFwcExvY2FsZS5tZXNzYWdlc30+e3Byb3BzLmNoaWxkcmVufTwvSW50bFByb3ZpZGVyPlxuICAgIDwvQ29uZmlnUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxlUHJvdmlkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBcHBzTmF2aWdhdGlvbiA9ICgpID0+XHJcbiAgPHVsIGNsYXNzTmFtZT1cImd4LWFwcC1uYXZcIj5cclxuICAgIDxsaT48aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2VhcmNoLW5ld1wiLz48L2xpPlxyXG4gICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1ub3RpZmljYXRpb25cIi8+PC9saT5cclxuICAgIDxsaT48aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hhdC1uZXdcIi8+PC9saT5cclxuICA8L3VsPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcHNOYXZpZ2F0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtNZW51LCBCdXR0b259IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gXCIuLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnNcIjtcbmltcG9ydCBTaWRlYmFyTG9nbyBmcm9tIFwiLi9TaWRlYmFyTG9nb1wiO1xuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuL1VzZXJQcm9maWxlXCI7XG5pbXBvcnQgQXBwc05hdmlnYXRpb24gZnJvbSBcIi4vQXBwc05hdmlnYXRpb25cIjtcbmltcG9ydCB7XG4gIE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUixcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIsXG4gIFRIRU1FX1RZUEVfTElURVxufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtzZXRQYXRoTmFtZX0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgU3ViTWVudSA9IE1lbnUuU3ViTWVudTtcbmNvbnN0IE1lbnVJdGVtR3JvdXAgPSBNZW51Lkl0ZW1Hcm91cDtcblxuY29uc3QgU2lkZWJhckNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdlN0eWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdlN0eWxlKTtcbiAgY29uc3QgdGhlbWVUeXBlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLnRoZW1lVHlwZSk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IGdldE5vSGVhZGVyQ2xhc3MgPSAobmF2U3R5bGUpID0+IHtcbiAgICBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSIHx8IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIpIHtcbiAgICAgIHJldHVybiBcImd4LW5vLWhlYWRlci1ub3RpZmljYXRpb25zXCI7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IGdldE5hdlN0eWxlU3ViTWVudUNsYXNzID0gKG5hdlN0eWxlKSA9PiB7XG4gICAgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUikge1xuICAgICAgcmV0dXJuIFwiZ3gtbm8taGVhZGVyLXN1Ym1lbnUtcG9wdXBcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRQYXRoTmFtZShyb3V0ZXIucGF0aG5hbWUpKVxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcm91dGVyLnBhdGhuYW1lLnN1YnN0cigxKSB8fCAnZGFzaGJvYXJkJztcbiAgY29uc3QgZGVmYXVsdE9wZW5LZXlzID0gc2VsZWN0ZWRLZXlzLnNwbGl0KCcvJylbMV07XG5cbiAgLy8gY29uc29sZS5sb2coZGVmYXVsdE9wZW5LZXlzKTsgIFxuICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZEtleXMpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNpZGViYXJMb2dvLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2lkZWJhci1jb250ZW50XCI+XG4gICAgICAgXG4gICAgICAgXG4gICAgICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LWxheW91dC1zaWRlci1zY3JvbGxiYXJcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogXCIwcHggMjBweCAxMnB4IDIwcHhcIn19PlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwiLCBib3JkZXI6IFwibm9uZVwifX0gaHRtbFR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgKyBMb3JlbSBpcHN1bVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0Y5RkFGNVwifX1cbiAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17W2RlZmF1bHRPcGVuS2V5c119XG4gICAgICAgICAgICBzZWxlY3RlZEtleXM9e1tzZWxlY3RlZEtleXNdfVxuICAgICAgICAgICAgdGhlbWU9e3RoZW1lVHlwZSA9PT0gVEhFTUVfVFlQRV9MSVRFID8gJ2xpdGUnIDogJ2RhcmsnfVxuICAgICAgICAgICAgbW9kZT1cImlubGluZVwiPlxuXG4gICAgICAgICAgXG5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXdpZGdldHNcIi8+PHNwYW4+RGFzaGJvYXJkPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJ1c2VyLW1hbmFnZW1lbnRcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyLW1hbmFnZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24td2lkZ2V0c1wiLz48c3Bhbj5Vc2VyIE1hbmFnZW1lbnQ8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInBhZ2UzXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZTNcIj5cbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24td2lkZ2V0c1wiLz48c3Bhbj5QYWdlIDM8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInBhZ2U0XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZTRcIj5cbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24td2lkZ2V0c1wiLz48c3Bhbj5QYWdlIDQ8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BneC1zaWRlYmFyLW5vdGlmaWNhdGlvbnMgJHtnZXROb0hlYWRlckNsYXNzKG5hdlN0eWxlKX1gfT5cbiAgICAgICAgICA8VXNlclByb2ZpbGUvPlxuICAgICAgICAgIHsvKiA8QXBwc05hdmlnYXRpb24vPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuU2lkZWJhckNvbnRlbnQucHJvcFR5cGVzID0ge307XG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyQ29udGVudDtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQge29uTmF2U3R5bGVDaGFuZ2UsIHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXZ9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQge1xuICBOQVZfU1RZTEVfRFJBV0VSLFxuICBOQVZfU1RZTEVfRklYRUQsXG4gIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIsXG4gIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSLFxuICBUQUJfU0laRSxcbiAgVEhFTUVfVFlQRV9MSVRFXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XG5cblxuY29uc3QgU2lkZWJhckxvZ28gPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lVHlwZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy50aGVtZVR5cGUpO1xuICBjb25zdCB3aWR0aCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy53aWR0aCk7XG4gIGNvbnN0IG5hdkNvbGxhcHNlZCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZDb2xsYXBzZWQpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgbGV0IG5hdlN0eWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdlN0eWxlKTtcbiAgaWYgKHdpZHRoIDwgVEFCX1NJWkUgJiYgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9GSVhFRCkge1xuICAgIG5hdlN0eWxlID0gTkFWX1NUWUxFX0RSQVdFUjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbGF5b3V0LXNpZGVyLWhlYWRlclwiPlxuICAgICAgeyhuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0ZJWEVEIHx8IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTUlOSV9TSURFQkFSKSA/IDxkaXYgY2xhc3NOYW1lPVwiZ3gtbGluZWJhclwiPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT17YGd4LWljb24tYnRuIGljb24gaWNvbi0ke25hdlN0eWxlID09PSBOQVZfU1RZTEVfTUlOSV9TSURFQkFSID8gJ21lbnUtdW5mb2xkJyA6ICdtZW51LWZvbGQnfSAke3RoZW1lVHlwZSAhPT0gVEhFTUVfVFlQRV9MSVRFID8gJ2d4LXRleHQtd2hpdGUnIDogJyd9YH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EUkFXRVIpIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRklYRUQpIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2gob25OYXZTdHlsZUNoYW5nZShOQVZfU1RZTEVfTUlOSV9TSURFQkFSKSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSKSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2gob25OYXZTdHlsZUNoYW5nZShOQVZfU1RZTEVfRklYRUQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gOiBudWxsfVxuXG4gICAgICA8TGluayBocmVmPVwiL1wiID5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3gtc2l0ZS1sb2dvXCI+XG4gICAgICAgIHtuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIgJiYgd2lkdGggPj0gVEFCX1NJWkUgP1xuICAgICAgICAgIDxpbWcgYWx0PVwibG9cIiBzcmM9eyhcIi9pbWFnZXMvdy1sb2dvLnBuZ1wiKX0vPiA6XG4gICAgICAgICAgdGhlbWVUeXBlID09PSBUSEVNRV9UWVBFX0xJVEUgP1xuICAgICAgICAgICAgPGltZyBhbHQ9XCJsb2dvMVwiIHN0eWxlPXt7bWF4V2lkdGg6IFwiODIlXCJ9fSBzcmM9eyhcIi9pbWFnZXMvbG9nby5wbmdcIil9Lz4gOlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJsb2dvMlwiIHNyYz17KFwiL2ltYWdlcy9sb2dvLnBuZ1wiKX0vPn1cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckxvZ287XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXZhdGFyLCBQb3BvdmVyfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge3VzZUF1dGh9IGZyb20gXCIuLi8uLi8uLi91dGlsL3VzZS1hdXRoXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHthdXRoVXNlciwgdXNlclNpZ25PdXR9ID0gdXNlQXV0aCgpO1xyXG5cclxuICAvLyBjb25zdCB1c2VyTWVudU9wdGlvbnMgPSAoXHJcbiAgLy8gICA8dWwgY2xhc3NOYW1lPVwiZ3gtdXNlci1wb3BvdmVyXCI+XHJcbiAgLy8gICAgIDxsaT5NeSBBY2NvdW50PC9saT5cclxuICAvLyAgICAgPGxpPkNvbm5lY3Rpb25zPC9saT5cclxuICAvLyAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHVzZXJTaWduT3V0KCl9PkxvZ291dFxyXG4gIC8vICAgICA8L2xpPlxyXG4gIC8vICAgPC91bD5cclxuICAvLyApO1xyXG5cclxuICByZXR1cm4gYXV0aFVzZXIgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBneC1hbGlnbi1pdGVtcy1jZW50ZXIgZ3gtbWItNFwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgIHsvKiA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e3VzZXJNZW51T3B0aW9uc30gdHJpZ2dlcj1cImNsaWNrXCI+ICovfVxyXG4gICAgICAgIDxBdmF0YXIgc3JjPVwiL2ltYWdlcy9SZWN0YW5nbGUyLnBuZ1wiIGNsYXNzTmFtZT1cImd4LXNpemUtNTAgZ3gtcG9pbnRlciBneC1tci0zXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXZhdGFyLW5hbWUgZ3gtbXQtMlwiPnthdXRoVXNlci5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXZhdGFyLW5hbWUgZ3gtbXQtMiBneC10ZXh0LWxpZ2h0XCI+ZXhhbXBsZUB0ZXN0LmNvbTwvZGl2PlxyXG4gICAgICB7LyogPC9Qb3BvdmVyPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tdC0zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dvdXRfYnV0dG9uXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxMHB4XCJ9fT48TGluayBocmVmPVwiL3NldHRpbmdzXCIgID48aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTNweFwifX0gc3JjPVwiL2ltYWdlcy9zZXR0aW5ncy5wbmdcIi8+PC9MaW5rPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9nb3V0X2J1dHRvblwiIG9uQ2xpY2s9eygpID0+IHVzZXJTaWduT3V0KCl9PjxpbWcgc3R5bGU9e3t3aWR0aDogXCIxM3B4XCJ9fSBzcmM9XCIvaW1hZ2VzL2xvZ291dC5wbmdcIi8+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge0RyYXdlciwgTGF5b3V0fSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgU2lkZWJhckNvbnRlbnQgZnJvbSBcIi4vU2lkZWJhckNvbnRlbnRcIjtcbmltcG9ydCB7dG9nZ2xlQ29sbGFwc2VkU2lkZU5hdn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCB7XG4gIE5BVl9TVFlMRV9EUkFXRVIsXG4gIE5BVl9TVFlMRV9GSVhFRCxcbiAgTkFWX1NUWUxFX01JTklfU0lERUJBUixcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxuICBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUixcbiAgVEFCX1NJWkUsXG4gIFRIRU1FX1RZUEVfTElURVxufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xuXG5jb25zdCB7U2lkZXJ9ID0gTGF5b3V0O1xuXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZVR5cGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MudGhlbWVUeXBlKTtcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XG4gIGNvbnN0IHdpZHRoID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLndpZHRoKTtcbiAgY29uc3QgbmF2U3R5bGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2U3R5bGUpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBvblRvZ2dsZUNvbGxhcHNlZE5hdiA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcbiAgfTtcblxuICBsZXQgZHJhd2VyU3R5bGUgPSBcImd4LWNvbGxhcHNlZC1zaWRlYmFyXCI7XG5cbiAgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRklYRUQpIHtcbiAgICBkcmF3ZXJTdHlsZSA9IFwiXCI7XG4gIH0gZWxzZSBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSKSB7XG4gICAgZHJhd2VyU3R5bGUgPSBcImd4LW1pbmktc2lkZWJhciBneC1taW5pLWN1c3RvbS1zaWRlYmFyXCI7XG4gIH0gZWxzZSBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUikge1xuICAgIGRyYXdlclN0eWxlID0gXCJneC1jdXN0b20tc2lkZWJhclwiXG4gIH0gZWxzZSBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9NSU5JX1NJREVCQVIpIHtcbiAgICBkcmF3ZXJTdHlsZSA9IFwiZ3gtbWluaS1zaWRlYmFyXCI7XG4gIH0gZWxzZSBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EUkFXRVIpIHtcbiAgICBkcmF3ZXJTdHlsZSA9IFwiZ3gtY29sbGFwc2VkLXNpZGViYXJcIlxuICB9XG4gIGlmICgobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9GSVhFRCB8fCBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX01JTklfU0lERUJBUlxuICAgIHx8IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIpICYmIHdpZHRoIDwgVEFCX1NJWkUpIHtcbiAgICBkcmF3ZXJTdHlsZSA9IFwiZ3gtY29sbGFwc2VkLXNpZGViYXJcIlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkZXJcbiAgICAgIGNsYXNzTmFtZT17YGd4LWFwcC1zaWRlYmFyICR7ZHJhd2VyU3R5bGV9ICR7dGhlbWVUeXBlICE9PSBUSEVNRV9UWVBFX0xJVEUgPyAnZ3gtbGF5b3V0LXNpZGVyLWRhcmsnIDogbnVsbH1gfVxuICAgICAgdHJpZ2dlcj17bnVsbH1cbiAgICAgIGNvbGxhcHNlZD17KHdpZHRoIDwgVEFCX1NJWkUgPyBmYWxzZSA6IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTUlOSV9TSURFQkFSIHx8IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUil9XG4gICAgICB0aGVtZT17dGhlbWVUeXBlID09PSBUSEVNRV9UWVBFX0xJVEUgPyBcImxpdGVcIiA6IFwiZGFya1wifVxuICAgICAgY29sbGFwc2libGU+XG4gICAgICB7XG4gICAgICAgIG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRFJBV0VSIHx8IHdpZHRoIDwgVEFCX1NJWkUgP1xuICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGd4LWRyYXdlci1zaWRlYmFyICR7dGhlbWVUeXBlICE9PSBUSEVNRV9UWVBFX0xJVEUgPyAnZ3gtZHJhd2VyLXNpZGViYXItZGFyaycgOiBudWxsfWB9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCJcbiAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e29uVG9nZ2xlQ29sbGFwc2VkTmF2fVxuICAgICAgICAgICAgdmlzaWJsZT17bmF2Q29sbGFwc2VkfT5cbiAgICAgICAgICAgIDxTaWRlYmFyQ29udGVudC8+XG4gICAgICAgICAgPC9EcmF3ZXI+IDpcbiAgICAgICAgICA8U2lkZWJhckNvbnRlbnQvPlxuICAgICAgfVxuICAgIDwvU2lkZXI+XG4gIClcbn07XG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBMYXlvdXQsIE1lbnUsIG1lc3NhZ2UsIFBvcG92ZXIsIFNlbGVjdH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgSWNvbiBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XG5cbmltcG9ydCBsYW5ndWFnZURhdGEgZnJvbSBcIi4uL2xhbmd1YWdlRGF0YVwiO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCb3hcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Vc2VySW5mb1wiO1xuaW1wb3J0IEFwcE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb25cIjtcbmltcG9ydCBNYWlsTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb25cIjtcbmltcG9ydCB7c3dpdGNoTGFuZ3VhZ2UsIHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXZ9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmltcG9ydCB7VEFCX1NJWkV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XG5pbXBvcnQgSG9yaXpvbnRhbE5hdiBmcm9tIFwiLi4vSG9yaXpvbnRhbE5hdlwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcblxuY29uc3Qge0hlYWRlcn0gPSBMYXlvdXQ7XG5cbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XG5jb25zdCBtZW51ID0gKFxuICA8TWVudSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlByb2R1Y3RzPC9NZW51Lkl0ZW0+XG4gICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+QmxvZzwvTWVudS5JdGVtPlxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPkFwcHM8L01lbnUuSXRlbT5cbiAgPC9NZW51PlxuKTtcblxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKCkge1xuICBtZXNzYWdlLmluZm8oJ0NsaWNrIG9uIG1lbnUgaXRlbS4nKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XG59XG5cbmNvbnN0IEFib3ZlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBsb2NhbGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubG9jYWxlKTtcbiAgY29uc3Qgd2lkdGggPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3Mud2lkdGgpO1xuICBjb25zdCBuYXZDb2xsYXBzZWQgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2Q29sbGFwc2VkKTtcblxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBsYW5ndWFnZU1lbnUgPSAoKSA9PiAoXG4gICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1sYW5nLXNjcm9sbFwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LXN1Yi1wb3BvdmVyXCI+XG4gICAgICAgIHtsYW5ndWFnZURhdGEubWFwKGxhbmd1YWdlID0+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1lZGlhIGd4LXBvaW50ZXJcIiBrZXk9e0pTT04uc3RyaW5naWZ5KGxhbmd1YWdlKX0gb25DbGljaz17KGUpID0+XG4gICAgICAgICAgICBkaXNwYXRjaChzd2l0Y2hMYW5ndWFnZShsYW5ndWFnZSkpXG4gICAgICAgICAgfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBneC1tci0yIGZsYWctJHtsYW5ndWFnZS5pY29ufWB9Lz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWxhbmd1YWdlLXRleHRcIj57bGFuZ3VhZ2UubmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKX1cbiAgICAgIDwvdWw+XG4gICAgPC9DdXN0b21TY3JvbGxiYXJzPik7XG5cbiAgY29uc3QgdXBkYXRlU2VhcmNoQ2hhdFVzZXIgPSAoZXZ0KSA9PiB7XG4gICAgc2V0U2VhcmNoVGV4dChldnQudGFyZ2V0LnZhbHVlKVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbCBneC1oZWFkZXItaG9yaXpvbnRhbC1kYXJrIGd4LWFib3ZlLWhlYWRlci1ob3Jpem9udGFsXCI+XG5cbiAgICAgIHt3aWR0aCA+PSBUQUJfU0laRSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2IGd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1jdXJ2ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1mbGV4XCI+XG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsTmF2Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ub3RpZmljYXRpb25zIGd4LW1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnUtbGluZXNcIi8+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZXR0aW5nXCIvPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tYXBwcy1uZXdcIi8+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWxlZnRcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFsZXJ0IGd4LW1yLTNcIi8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTAgZ3gtdGV4dC10cnVuY2F0ZVwiPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAuYW5ub3VuY2VkXCIvPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWxvZ2luLWxpc3RcIj5cbiAgICAgICAgICAgICAgPGxpPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAudXNlckF1dGgubG9naW5cIi8+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAudXNlckF1dGguc2lnblVwXCIvPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8SGVhZGVyXG4gICAgICAgIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW4tZmxleFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LWxpbmViYXIgZ3gtbXIteHMtM1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICBpZiAod2lkdGggPD0gVEFCX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1wb2ludGVyIGd4LW1yLXhzLTMgZ3gtcHQteHMtMSBneC13LWxvZ29cIlxuICAgICAgICAgICAgICAgICAgIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLW5vbmUgZ3gtZC1sZy1ibG9jayBneC1wb2ludGVyIGd4LW1yLXhzLTUgZ3gtbG9nb1wiIHNyYz17KFwiL2ltYWdlcy9sb2dvLnBuZ1wiKX0vPjwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLXNlYXJjaCBneC1kLW5vbmUgZ3gtZC1sZy1mbGV4XCI+XG4gICAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtbHQtaWNvbi1zZWFyY2gtYmFyLWxnXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz5cbiAgICAgICAgICAgICAgPFNlbGVjdCBkZWZhdWx0VmFsdWU9XCJsdWN5XCIgc3R5bGU9e3t3aWR0aDogMTIwfX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImphY2tcIj5Qcm9kdWN0czwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJsdWN5XCI+QXBwczwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJZaW1pbmdoZVwiPkJsb2dzPC9PcHRpb24+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnkgZ3gtbm90aWZ5LXNlYXJjaCBneC1kLWlubGluZS1ibG9jayBneC1kLWxnLW5vbmVcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1mbGV4XCI+PERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIENhdGVnb3J5IDxJY29uIHR5cGU9XCJkb3duXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtcG9wb3Zlci1zZWFyY2gtYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhcHAuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIH0gdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2VhcmNoLW5ld1wiLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnlcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXs8QXBwTm90aWZpY2F0aW9uLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbm90aWZpY2F0aW9uXCIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17PE1haWxOb3RpZmljYXRpb24vPn0gdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1zdGF0dXMtcG9zIGd4LWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hhdC1uZXdcIi8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtc3RhdHVzIGd4LXN0YXR1cy1ydGwgZ3gtc21hbGwgZ3gtb3JhbmdlXCIvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1sYW5ndWFnZVwiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bGFuZ3VhZ2VNZW51KCl9IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPjxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGZsYWctJHtsb2NhbGUuaWNvbn1gfS8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC11c2VyLW5hdlwiPjxVc2VySW5mby8+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9IZWFkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFib3ZlSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBMYXlvdXQsIE1lbnUsIG1lc3NhZ2UsIFBvcG92ZXIsIFNlbGVjdH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgSWNvbiBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XG5pbXBvcnQgbGFuZ3VhZ2VEYXRhIGZyb20gXCIuLi9sYW5ndWFnZURhdGFcIjtcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQm94XCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVXNlckluZm9cIjtcbmltcG9ydCBBcHBOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgTWFpbE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uXCI7XG5pbXBvcnQge3N3aXRjaExhbmd1YWdlLCB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IEhvcml6b250YWxOYXYgZnJvbSBcIi4uL0hvcml6b250YWxOYXZcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XG5pbXBvcnQge1RBQl9TSVpFfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xuXG5jb25zdCB7SGVhZGVyfSA9IExheW91dDtcblxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcbmNvbnN0IG1lbnUgPSAoXG4gIDxNZW51IG9uQ2xpY2s9e2hhbmRsZU1lbnVDbGlja30+XG4gICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+UHJvZHVjdHM8L01lbnUuSXRlbT5cbiAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5BcHBzPC9NZW51Lkl0ZW0+XG4gICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+QmxvZ3M8L01lbnUuSXRlbT5cbiAgPC9NZW51PlxuKTtcblxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgbWVzc2FnZS5pbmZvKCdDbGljayBvbiBtZW51IGl0ZW0uJyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xufVxuXG5jb25zdCBCZWxvd0hlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgbG9jYWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxvY2FsZSk7XG4gIGNvbnN0IHdpZHRoID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLndpZHRoKTtcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XG5cbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgbGFuZ3VhZ2VNZW51ID0gKCkgPT4gKFxuICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LXBvcG92ZXItbGFuZy1zY3JvbGxcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxuICAgICAgICB7bGFuZ3VhZ2VEYXRhLm1hcChsYW5ndWFnZSA9PlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tZWRpYSBneC1wb2ludGVyXCIga2V5PXtKU09OLnN0cmluZ2lmeShsYW5ndWFnZSl9IG9uQ2xpY2s9eyhlKSA9PlxuICAgICAgICAgICAgZGlzcGF0Y2goc3dpdGNoTGFuZ3VhZ2UobGFuZ3VhZ2UpKVxuICAgICAgICAgIH0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZ3gtbXItMiBmbGFnLSR7bGFuZ3VhZ2UuaWNvbn1gfS8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1sYW5ndWFnZS10ZXh0XCI+e2xhbmd1YWdlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz4pO1xuXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaENoYXRVc2VyID0gKGV2dCkgPT4ge1xuICAgIHNldFNlYXJjaFRleHQoZXZ0LnRhcmdldC52YWx1ZSlcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwgZ3gtaGVhZGVyLWhvcml6b250YWwtZGFyayBneC1iZWxvdy1oZWFkZXItaG9yaXpvbnRhbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3BcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1mbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hbGVydCBneC1tci0zXCIvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0wIGd4LXRleHQtdHJ1bmNhdGVcIj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLmFubm91bmNlZFwiLz48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1sb2dpbi1saXN0XCI+XG4gICAgICAgICAgICAgIDxsaT5Mb2dpbjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TaWdudXA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8SGVhZGVyXG4gICAgICAgIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW4tZmxleFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LWxpbmViYXIgZ3gtbXIteHMtM1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcbiAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1wb2ludGVyIGd4LW1yLXhzLTMgZ3gtcHQteHMtMSBneC13LWxvZ29cIlxuICAgICAgICAgICAgICAgICAgIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLW5vbmUgZ3gtZC1sZy1ibG9jayBneC1wb2ludGVyIGd4LW1yLXhzLTUgZ3gtbG9nb1wiIHNyYz17KFwiL2ltYWdlcy9sb2dvLnBuZ1wiKX0vPjwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLXNlYXJjaCBneC1kLW5vbmUgZ3gtZC1sZy1mbGV4XCI+XG4gICAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtbHQtaWNvbi1zZWFyY2gtYmFyLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhcHAuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH0vPlxuXG4gICAgICAgICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwibHVjeVwiIHN0eWxlPXt7d2lkdGg6IDEyMH19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJqYWNrXCI+UHJvZHVjdHM8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibHVjeVwiPkFwcHM8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiWWltaW5naGVcIj5CbG9nczwvT3B0aW9uPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5IGd4LW5vdGlmeS1zZWFyY2ggZ3gtZC1pbmxpbmUtYmxvY2sgZ3gtZC1sZy1ub25lXCI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtZmxleFwiPjxEcm9wZG93biBvdmVybGF5PXttZW51fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeSA8SWNvbiB0eXBlPVwiZG93blwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LXBvcG92ZXItc2VhcmNoLWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICB9IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5XCI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17PEFwcE5vdGlmaWNhdGlvbi8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tc2dcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxNYWlsTm90aWZpY2F0aW9uLz59IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtc3RhdHVzLXBvcyBneC1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXQtbmV3XCIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXN0YXR1cyBneC1zdGF0dXMtcnRsIGd4LXNtYWxsIGd4LW9yYW5nZVwiLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2VcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xhbmd1YWdlTWVudSgpfSB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1mbGV4LXJvdyBneC1hbGlnbi1pdGVtcy1jZW50ZXJcIj48aVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBmbGFnLSR7bG9jYWxlLmljb259YH0vPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtdXNlci1uYXZcIj48VXNlckluZm8vPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSGVhZGVyPlxuXG4gICAgICB7d2lkdGggPj0gVEFCX1NJWkUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdiBneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYtY3VydmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYtZmxleFwiPlxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbE5hdi8+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZW51LWxpbmVzXCIvPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2V0dGluZ1wiLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFwcHMtbmV3XCIvPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmVsb3dIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0J1dHRvbiwgRHJvcGRvd24sIExheW91dCwgTWVudSwgbWVzc2FnZSwgUG9wb3ZlciwgU2VsZWN0fSBmcm9tICdhbnRkJztcbmltcG9ydCBJY29uIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnNcIjtcbmltcG9ydCBsYW5ndWFnZURhdGEgZnJvbSBcIi4uL2xhbmd1YWdlRGF0YVwiO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCb3hcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Vc2VySW5mb1wiO1xuaW1wb3J0IEFwcE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb25cIjtcbmltcG9ydCBNYWlsTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIb3Jpem9udGFsTmF2IGZyb20gXCIuLi9Ib3Jpem9udGFsTmF2XCI7XG5pbXBvcnQge3N3aXRjaExhbmd1YWdlLCB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcbmltcG9ydCB7VEFCX1NJWkV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XG5cbmNvbnN0IHtIZWFkZXJ9ID0gTGF5b3V0O1xuXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uO1xuY29uc3QgbWVudSA9IChcbiAgPE1lbnUgb25DbGljaz17aGFuZGxlTWVudUNsaWNrfT5cbiAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5Qcm9kdWN0czwvTWVudS5JdGVtPlxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiPkFwcHM8L01lbnUuSXRlbT5cbiAgICA8TWVudS5JdGVtIGtleT1cIjNcIj5CbG9nczwvTWVudS5JdGVtPlxuICA8L01lbnU+XG4pO1xuXG5mdW5jdGlvbiBoYW5kbGVNZW51Q2xpY2soZSkge1xuICBtZXNzYWdlLmluZm8oJ0NsaWNrIG9uIG1lbnUgaXRlbS4nKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XG59XG5cbmNvbnN0IEhvcml6b250YWxEYXJrID0gKCkgPT4ge1xuICBjb25zdCBsb2NhbGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubG9jYWxlKTtcbiAgY29uc3Qgd2lkdGggPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3Mud2lkdGgpO1xuICBjb25zdCBuYXZDb2xsYXBzZWQgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2Q29sbGFwc2VkKTtcblxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBsYW5ndWFnZU1lbnUgPSAoKSA9PiAoXG4gICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1sYW5nLXNjcm9sbFwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LXN1Yi1wb3BvdmVyXCI+XG4gICAgICAgIHtsYW5ndWFnZURhdGEubWFwKGxhbmd1YWdlID0+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1lZGlhIGd4LXBvaW50ZXJcIiBrZXk9e0pTT04uc3RyaW5naWZ5KGxhbmd1YWdlKX0gb25DbGljaz17KGUpID0+XG4gICAgICAgICAgICBkaXNwYXRjaChzd2l0Y2hMYW5ndWFnZShsYW5ndWFnZSkpXG4gICAgICAgICAgfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBneC1tci0yIGZsYWctJHtsYW5ndWFnZS5pY29ufWB9Lz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWxhbmd1YWdlLXRleHRcIj57bGFuZ3VhZ2UubmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKX1cbiAgICAgIDwvdWw+XG4gICAgPC9DdXN0b21TY3JvbGxiYXJzPik7XG5cbiAgY29uc3QgdXBkYXRlU2VhcmNoQ2hhdFVzZXIgPSAoZXZ0KSA9PiB7XG4gICAgc2V0U2VhcmNoVGV4dChldnQudGFyZ2V0LnZhbHVlKVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbCBneC1oZWFkZXItaG9yaXpvbnRhbC1kYXJrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWxlZnRcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFsZXJ0IGd4LW1yLTNcIi8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTAgZ3gtdGV4dC10cnVuY2F0ZVwiPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAuYW5ub3VuY2VkXCIvPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWxvZ2luLWxpc3RcIj5cbiAgICAgICAgICAgICAgPGxpPkxvZ2luPC9saT5cbiAgICAgICAgICAgICAgPGxpPlNpZ251cDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxIZWFkZXJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbWFpbi1mbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LWxpbmViYXIgZ3gtbXIteHMtM1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcbiAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LXBvaW50ZXIgZ3gtbXIteHMtMyBneC1wdC14cy0xIGd4LXctbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgc3JjPXsoXCIvaW1hZ2VzL3ctbG9nby5wbmdcIil9Lz48L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImd4LWQtbm9uZSBneC1kLWxnLWJsb2NrIGd4LXBvaW50ZXIgZ3gtbXIteHMtNSBneC1sb2dvXCIgc3JjPXsoXCIvaW1hZ2VzL2xvZ28ucG5nXCIpfS8+PC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItc2VhcmNoIGd4LWQtbm9uZSBneC1kLWxnLWZsZXhcIj5cbiAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1sdC1pY29uLXNlYXJjaC1iYXItbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+XG4gICAgICAgICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwibHVjeVwiIHN0eWxlPXt7d2lkdGg6IDEyMH19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJqYWNrXCI+UHJvZHVjdHM8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibHVjeVwiPkFwcHM8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiWWltaW5naGVcIj5CbG9nczwvT3B0aW9uPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5IGd4LW5vdGlmeS1zZWFyY2ggZ3gtZC1pbmxpbmUtYmxvY2sgZ3gtZC1sZy1ub25lXCI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtZmxleFwiPjxEcm9wZG93biBvdmVybGF5PXttZW51fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeSA8SWNvbiB0eXBlPVwiZG93blwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LXBvcG92ZXItc2VhcmNoLWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICB9IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnlcIj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXs8QXBwTm90aWZpY2F0aW9uLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbm90aWZpY2F0aW9uXCIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17PE1haWxOb3RpZmljYXRpb24vPn0gdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1zdGF0dXMtcG9zIGd4LWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hhdC1uZXdcIi8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtc3RhdHVzIGd4LXN0YXR1cy1ydGwgZ3gtc21hbGwgZ3gtb3JhbmdlXCIvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1sYW5ndWFnZVwiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bGFuZ3VhZ2VNZW51KCl9IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPjxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGZsYWctJHtsb2NhbGUuaWNvbn1gfS8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC11c2VyLW5hdlwiPjxVc2VySW5mby8+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9IZWFkZXI+XG5cbiAgICAgIHt3aWR0aCA+PSBUQUJfU0laRSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2LWZsZXhcIj5cbiAgICAgICAgICAgICAgPEhvcml6b250YWxOYXYvPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudS1saW5lc1wiLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNldHRpbmdcIi8+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hcHBzLW5ld1wiLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbERhcms7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0J1dHRvbiwgRHJvcGRvd24sIExheW91dCwgTWVudSwgbWVzc2FnZSwgUG9wb3ZlciwgU2VsZWN0fSBmcm9tICdhbnRkJztcbmltcG9ydCBJY29uIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnNcIjtcbmltcG9ydCBsYW5ndWFnZURhdGEgZnJvbSBcIi4uL2xhbmd1YWdlRGF0YVwiO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCb3hcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Vc2VySW5mb1wiO1xuaW1wb3J0IEFwcE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb25cIjtcbmltcG9ydCBNYWlsTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb25cIjtcbmltcG9ydCBIb3Jpem9udGFsTmF2IGZyb20gXCIuLi9Ib3Jpem9udGFsTmF2XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQge3N3aXRjaExhbmd1YWdlLCB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcbmltcG9ydCB7VEFCX1NJWkV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XG5cbmNvbnN0IHtIZWFkZXJ9ID0gTGF5b3V0O1xuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcbmNvbnN0IG1lbnUgPSAoXG4gIDxNZW51IG9uQ2xpY2s9e2hhbmRsZU1lbnVDbGlja30+XG4gICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+UHJvZHVjdHM8L01lbnUuSXRlbT5cbiAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5BcHBzPC9NZW51Lkl0ZW0+XG4gICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+QmxvZ3M8L01lbnUuSXRlbT5cbiAgPC9NZW51PlxuKTtcblxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgbWVzc2FnZS5pbmZvKCdDbGljayBvbiBtZW51IGl0ZW0uJyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xufVxuXG5jb25zdCBIb3Jpem9udGFsRGVmYXVsdCA9ICgpID0+IHtcbiAgY29uc3QgbG9jYWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxvY2FsZSk7XG4gIGNvbnN0IHdpZHRoID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLndpZHRoKTtcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XG5cbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgbGFuZ3VhZ2VNZW51ID0gKCkgPT4gKFxuICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LXBvcG92ZXItbGFuZy1zY3JvbGxcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxuICAgICAgICB7bGFuZ3VhZ2VEYXRhLm1hcChsYW5ndWFnZSA9PlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tZWRpYSBneC1wb2ludGVyXCIga2V5PXtKU09OLnN0cmluZ2lmeShsYW5ndWFnZSl9IG9uQ2xpY2s9eyhlKSA9PlxuICAgICAgICAgICAgZGlzcGF0Y2goc3dpdGNoTGFuZ3VhZ2UobGFuZ3VhZ2UpKVxuICAgICAgICAgIH0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZ3gtbXItMiBmbGFnLSR7bGFuZ3VhZ2UuaWNvbn1gfS8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1sYW5ndWFnZS10ZXh0XCI+e2xhbmd1YWdlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz4pO1xuXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaENoYXRVc2VyID0gKGV2dCkgPT4ge1xuICAgIHNldFNlYXJjaFRleHQoZXZ0LnRhcmdldC52YWx1ZSlcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3AtZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3AtbGVmdFwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtbWItMCBneC10ZXh0LXRydW5jYXRlXCI+PEludGxNZXNzYWdlcyBpZD1cImFwcC5hbm5vdW5jZWRcIi8+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtbG9naW4tbGlzdFwiPlxuICAgICAgICAgICAgICA8bGk+TG9naW48L2xpPlxuICAgICAgICAgICAgICA8bGk+U2lnbnVwPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxIZWFkZXJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbWFpbi1mbGV4XCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtbGluZWJhciBneC1tci14cy0zXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImd4LWljb24tYnRuIGljb24gaWNvbi1tZW51XCJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xuICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LXBvaW50ZXIgZ3gtdy1sb2dvXCIgc3JjPXsoXCIvaW1hZ2VzL3ctbG9nby5wbmdcIil9Lz48L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImd4LWQtbm9uZSBneC1kLWxnLWJsb2NrIGd4LXBvaW50ZXIgZ3gtbXIteHMtNSBneC1sb2dvXCJcbiAgICAgICAgICAgICAgICAgICBzcmM9eyhcIi9pbWFnZXMvbG9nby13aGl0ZS5wbmdcIil9Lz48L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1zZWFyY2ggZ3gtZC1ub25lIGd4LWQtbGctZmxleFwiPlxuICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LWx0LWljb24tc2VhcmNoLWJhci1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz5cblxuICAgICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT1cImx1Y3lcIiBzdHlsZT17e3dpZHRoOiAxMjB9fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiamFja1wiPlByb2R1Y3RzPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImx1Y3lcIj5BcHBzPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIllpbWluZ2hlXCI+QmxvZ3M8L09wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ub3RpZmljYXRpb25zIGd4LW1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeSBneC1ub3RpZnktc2VhcmNoIGd4LWQtaW5saW5lLWJsb2NrIGd4LWQtbGctbm9uZVwiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeSA8SWNvbiB0eXBlPVwiZG93blwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1wb3BvdmVyLXNlYXJjaC1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeVwiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9ezxBcHBOb3RpZmljYXRpb24vPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1ub3RpZmljYXRpb25cIi8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbXNnXCI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXs8TWFpbE5vdGlmaWNhdGlvbi8+fSB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LXN0YXR1cy1wb3MgZ3gtZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1zdGF0dXMgZ3gtc3RhdHVzLXJ0bCBneC1zbWFsbCBneC1vcmFuZ2VcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LWxhbmd1YWdlXCI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtsYW5ndWFnZU1lbnUoKX0gdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZmxleC1yb3cgZ3gtYWxpZ24taXRlbXMtY2VudGVyXCI+PGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZmxhZy0ke2xvY2FsZS5pY29ufWB9Lz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LXVzZXItbmF2XCI+PFVzZXJJbmZvLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0hlYWRlcj5cblxuICAgICAge3dpZHRoID49IFRBQl9TSVpFICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYgZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2LWN1cnZlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2LWZsZXhcIj5cbiAgICAgICAgICAgICAgPEhvcml6b250YWxOYXYvPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudS1saW5lc1wiLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNldHRpbmdcIi8+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hcHBzLW5ld1wiLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3Jpem9udGFsRGVmYXVsdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtNZW51fSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcbmltcG9ydCB7XG4gIE5BVl9TVFlMRV9BQk9WRV9IRUFERVIsXG4gIE5BVl9TVFlMRV9CRUxPV19IRUFERVIsXG4gIE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwsXG4gIE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcbmltcG9ydCBBcHBMaW5rIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FwcExpbmtcIjtcblxuY29uc3QgU3ViTWVudSA9IE1lbnUuU3ViTWVudTtcblxuY29uc3QgZ2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MgPSAobmF2U3R5bGUpID0+IHtcbiAgc3dpdGNoIChuYXZTdHlsZSkge1xuICAgIGNhc2UgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTDpcbiAgICAgIHJldHVybiBcImd4LW1lbnUtaG9yaXpvbnRhbCBneC1zdWJtZW51LXBvcHVwLWN1cnZlXCI7XG4gICAgY2FzZSBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMOlxuICAgICAgcmV0dXJuIFwiZ3gtbWVudS1ob3Jpem9udGFsIGd4LXN1Ym1lbnUtcG9wdXAtY3VydmUgZ3gtaW5zaWRlLXN1Ym1lbnUtcG9wdXAtY3VydmVcIjtcbiAgICBjYXNlIE5BVl9TVFlMRV9CRUxPV19IRUFERVI6XG4gICAgICByZXR1cm4gXCJneC1tZW51LWhvcml6b250YWwgZ3gtc3VibWVudS1wb3B1cC1jdXJ2ZSBneC1iZWxvdy1zdWJtZW51LXBvcHVwLWN1cnZlXCI7XG4gICAgY2FzZSBOQVZfU1RZTEVfQUJPVkVfSEVBREVSOlxuICAgICAgcmV0dXJuIFwiZ3gtbWVudS1ob3Jpem9udGFsIGd4LXN1Ym1lbnUtcG9wdXAtY3VydmUgZ3gtYWJvdmUtc3VibWVudS1wb3B1cC1jdXJ2ZVwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJneC1tZW51LWhvcml6b250YWxcIjtcbiAgfVxufTtcblxuY29uc3QgSG9yaXpvbnRhbE5hdiA9ICgpID0+IHtcbiAgY29uc3QgbmF2U3R5bGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2U3R5bGUpO1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5wYXRobmFtZSk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcGF0aG5hbWUuc3Vic3RyKDEpO1xuICBjb25zdCBkZWZhdWx0T3BlbktleXMgPSBzZWxlY3RlZEtleXMuc3BsaXQoJy8nKVsxXTtcblxuICByZXR1cm4gKFxuICAgIDxNZW51XG4gICAgICBkZWZhdWx0T3BlbktleXM9e1tkZWZhdWx0T3BlbktleXNdfVxuICAgICAgc2VsZWN0ZWRLZXlzPXtbc2VsZWN0ZWRLZXlzXX1cbiAgICAgIG1vZGU9XCJob3Jpem9udGFsXCI+XG4gICAgICA8U3ViTWVudSBwb3B1cENsYXNzTmFtZT17Z2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MobmF2U3R5bGUpfSBrZXk9XCJtYWluXCIgdGl0bGU9ezxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLm1haW5cIi8+fT5cbiAgICAgICAgPFN1Yk1lbnUgcG9wdXBDbGFzc05hbWU9XCJneC1tZW51LWhvcml6b250YWxcIiBrZXk9XCJkYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgICB0aXRsZT17PHNwYW4+IDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1kYXNiaG9hcmRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZGFzaGJvYXJkXCIvPjwvc3Bhbj59PlxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpbi9kYXNoYm9hcmQvY3J5cHRvXCI+XG4gICAgICAgICAgICA8QXBwTGluayBocmVmPVwiL21haW4vZGFzaGJvYXJkL2NyeXB0b1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY3J5cHRvXCIvPlxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5kYXNoYm9hcmQuY3J5cHRvXCIvPlxuICAgICAgICAgICAgPC9BcHBMaW5rPlxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICA8L1N1Yk1lbnU+XG4gICAgPC9NZW51PlxuICApO1xufTtcblxuSG9yaXpvbnRhbE5hdi5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbE5hdjtcblxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBMYXlvdXQsIE1lbnUsIG1lc3NhZ2UsIFBvcG92ZXJ9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEljb24gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHtjb25uZWN0LCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xuaW1wb3J0IGxhbmd1YWdlRGF0YSBmcm9tIFwiLi4vbGFuZ3VhZ2VEYXRhXCI7XG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NlYXJjaEJveFwiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XG5pbXBvcnQgQXBwTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0FwcE5vdGlmaWNhdGlvblwiO1xuaW1wb3J0IE1haWxOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTWFpbE5vdGlmaWNhdGlvblwiO1xuaW1wb3J0IEhvcml6b250YWxOYXYgZnJvbSBcIi4uL0hvcml6b250YWxOYXZcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7c3dpdGNoTGFuZ3VhZ2UsIHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXZ9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL0ludGxNZXNzYWdlc1wiO1xuaW1wb3J0IHtUQUJfU0laRX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcblxuY29uc3Qge0hlYWRlcn0gPSBMYXlvdXQ7XG5cbmNvbnN0IG1lbnUgPSAoXG4gIDxNZW51IG9uQ2xpY2s9e2hhbmRsZU1lbnVDbGlja30+XG4gICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+UHJvZHVjdHM8L01lbnUuSXRlbT5cbiAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5BcHBzPC9NZW51Lkl0ZW0+XG4gICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+QmxvZ3M8L01lbnUuSXRlbT5cbiAgPC9NZW51PlxuKTtcblxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgbWVzc2FnZS5pbmZvKCdDbGljayBvbiBtZW51IGl0ZW0uJyk7XG59XG5cbmNvbnN0IEluc2lkZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgbG9jYWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxvY2FsZSk7XG4gIGNvbnN0IHdpZHRoID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLndpZHRoKTtcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XG5cbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgbGFuZ3VhZ2VNZW51ID0gKCkgPT4gKFxuICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LXBvcG92ZXItbGFuZy1zY3JvbGxcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxuICAgICAgICB7bGFuZ3VhZ2VEYXRhLm1hcChsYW5ndWFnZSA9PlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tZWRpYSBneC1wb2ludGVyXCIga2V5PXtKU09OLnN0cmluZ2lmeShsYW5ndWFnZSl9IG9uQ2xpY2s9eyhlKSA9PlxuICAgICAgICAgICAgZGlzcGF0Y2goc3dpdGNoTGFuZ3VhZ2UobGFuZ3VhZ2UpKVxuICAgICAgICAgIH0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZ3gtbXItMiBmbGFnLSR7bGFuZ3VhZ2UuaWNvbn1gfS8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1sYW5ndWFnZS10ZXh0XCI+e2xhbmd1YWdlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz4pO1xuXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaENoYXRVc2VyID0gKGV2dCkgPT4ge1xuICAgIHNldFNlYXJjaFRleHQoZXZ0LnRhcmdldC52YWx1ZSlcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwgZ3gtaGVhZGVyLWhvcml6b250YWwtZGFyayBneC1pbnNpZGUtaGVhZGVyLWhvcml6b250YWxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3AtZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3AtbGVmdFwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtbWItMCBneC10ZXh0LXRydW5jYXRlXCI+PEludGxNZXNzYWdlcyBpZD1cImFwcC5hbm5vdW5jZWRcIi8+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtbG9naW4tbGlzdFwiPlxuICAgICAgICAgICAgICA8bGk+TG9naW48L2xpPlxuICAgICAgICAgICAgICA8bGk+U2lnbnVwPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxIZWFkZXJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbWFpbi1mbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LWxpbmViYXIgZ3gtbXIteHMtMyA2ZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcbiAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1wb2ludGVyIGd4LW1yLXhzLTMgZ3gtcHQteHMtMSBneC13LWxvZ29cIlxuICAgICAgICAgICAgICAgICAgIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLW5vbmUgZ3gtZC1sZy1ibG9jayBneC1wb2ludGVyIGd4LW1yLXhzLTUgZ3gtbG9nb1wiIHNyYz17KFwiL2ltYWdlcy9sb2dvLnBuZ1wiKX0vPjwvTGluaz5cblxuICAgICAgICAgICAge3dpZHRoID49IFRBQl9TSVpFICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYgZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2LWN1cnZlXCI+XG4gICAgICAgICAgICAgICAgPEhvcml6b250YWxOYXYvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnkgZ3gtbm90aWZ5LXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtZmxleFwiPjxEcm9wZG93biBvdmVybGF5PXttZW51fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeSA8SWNvbiB0eXBlPVwiZG93blwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LXBvcG92ZXItc2VhcmNoLWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICB9IHRyaWdnZXI9XCJjbGlja1wiPlxuXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2VhcmNoLW5ld1wiLz48L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeVwiPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9ezxBcHBOb3RpZmljYXRpb24vPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1ub3RpZmljYXRpb25cIi8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbXNnXCI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXs8TWFpbE5vdGlmaWNhdGlvbi8+fSB0cmlnZ2VyPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LXN0YXR1cy1wb3MgZ3gtZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1zdGF0dXMgZ3gtc3RhdHVzLXJ0bCBneC1zbWFsbCBneC1vcmFuZ2VcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LWxhbmd1YWdlXCI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtsYW5ndWFnZU1lbnUoKX0gdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZmxleC1yb3cgZ3gtYWxpZ24taXRlbXMtY2VudGVyXCI+PGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZmxhZy0ke2xvY2FsZS5pY29ufWB9Lz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LXVzZXItbmF2XCI+PFVzZXJJbmZvLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7c2V0dGluZ3N9KSA9PiB7XG4gIGNvbnN0IHtsb2NhbGUsIG5hdkNvbGxhcHNlZH0gPSBzZXR0aW5ncztcbiAgcmV0dXJuIHtsb2NhbGUsIG5hdkNvbGxhcHNlZH1cbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge3RvZ2dsZUNvbGxhcHNlZFNpZGVOYXYsIHN3aXRjaExhbmd1YWdlfSkoSW5zaWRlSGVhZGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7dG9nZ2xlQ29sbGFwc2VkU2lkZU5hdn0gZnJvbSBcIi4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvU2V0dGluZ1wiO1xuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcblxuY29uc3QgTm9IZWFkZXJOb3RpZmljYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkNvbGxhcHNlZCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZDb2xsYXBzZWQpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PjwvPlxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbm8taGVhZGVyLWhvcml6b250YWxcIj5cbiAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtbGluZWJhciBneC1tci14cy0zXCI+XG4gICAgLy8gICAgIDxpIGNsYXNzTmFtZT1cImd4LWljb24tYnRuIGljb24gaWNvbi1tZW51XCJcbiAgICAvLyAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgIC8vICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xuICAgIC8vICAgICAgICB9fVxuICAgIC8vICAgICAvPlxuICAgIC8vICAgPC9kaXY+XG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImd4LW5vLWhlYWRlci1ob3Jpem9udGFsLXRvcFwiPlxuICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW5vLWhlYWRlci1ob3Jpem9udGFsLXRvcC1jZW50ZXJcIj5cbiAgICAvLyAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cbiAgICAvLyAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0wIGd4LXRleHQtdHJ1bmNhdGVcIj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLmFubm91bmNlZFwiLz48L3A+XG4gICAgLy8gICAgIDwvZGl2PlxuICAgIC8vICAgPC9kaXY+XG4gICAgLy8gPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vSGVhZGVyTm90aWZpY2F0aW9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMYXlvdXQsIFBvcG92ZXJ9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gXCIuLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnNcIjtcbmltcG9ydCBsYW5ndWFnZURhdGEgZnJvbSBcIi4vbGFuZ3VhZ2VEYXRhXCI7XG5pbXBvcnQge3N3aXRjaExhbmd1YWdlLCB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCb3hcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VySW5mb1wiO1xuaW1wb3J0IEFwcE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb25cIjtcbmltcG9ydCBNYWlsTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb25cIjtcblxuXG5pbXBvcnQge05BVl9TVFlMRV9EUkFXRVIsIE5BVl9TVFlMRV9GSVhFRCwgTkFWX1NUWUxFX01JTklfU0lERUJBUiwgVEFCX1NJWkV9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IHtIZWFkZXJ9ID0gTGF5b3V0O1xuXG5jb25zdCBUb3BiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2FsZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5sb2NhbGUpO1xuICBjb25zdCB3aWR0aCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy53aWR0aCk7XG4gIGNvbnN0IG5hdkNvbGxhcHNlZCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZDb2xsYXBzZWQpO1xuICBjb25zdCBuYXZTdHlsZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZTdHlsZSk7XG5cbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgbGFuZ3VhZ2VNZW51ID0gKCkgPT4gKFxuICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LXBvcG92ZXItbGFuZy1zY3JvbGxcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxuICAgICAgICB7bGFuZ3VhZ2VEYXRhLm1hcChsYW5ndWFnZSA9PlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tZWRpYSBneC1wb2ludGVyXCIga2V5PXtKU09OLnN0cmluZ2lmeShsYW5ndWFnZSl9IG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICBkaXNwYXRjaChzd2l0Y2hMYW5ndWFnZShsYW5ndWFnZSkpXG4gICAgICAgICAgfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBneC1tci0yIGZsYWctJHtsYW5ndWFnZS5pY29ufWB9Lz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWxhbmd1YWdlLXRleHRcIj57bGFuZ3VhZ2UubmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKX1cbiAgICAgIDwvdWw+XG4gICAgPC9DdXN0b21TY3JvbGxiYXJzPik7XG5cbiAgY29uc3QgdXBkYXRlU2VhcmNoQ2hhdFVzZXIgPSAoZXZ0KSA9PiB7XG4gICAgc2V0U2VhcmNoVGV4dChldnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxIZWFkZXI+XG4gICAgICB7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EUkFXRVIgfHwgKChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0ZJWEVEIHx8IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTUlOSV9TSURFQkFSKSAmJiB3aWR0aCA8IFRBQl9TSVpFKSA/XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbGluZWJhciBneC1tci0zXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLW1lbnVcIlxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xuICAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+IDogbnVsbH1cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtcG9pbnRlclwiIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxuXG4gICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LWQtbm9uZSBneC1kLWxnLWJsb2NrIGd4LWx0LWljb24tc2VhcmNoLWJhci1sZ1wiXG4gICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXG4gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cbiAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnkgZ3gtbm90aWZ5LXNlYXJjaCBneC1kLWlubGluZS1ibG9jayBneC1kLWxnLW5vbmVcIj5cbiAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXtcbiAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtcG9wb3Zlci1zZWFyY2gtYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH0vPlxuICAgICAgICAgIH0gdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2VhcmNoLW5ld1wiLz48L3NwYW4+XG4gICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7d2lkdGggPj0gVEFCX1NJWkUgPyBudWxsIDpcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeVwiPlxuICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXs8QXBwTm90aWZpY2F0aW9uLz59XG4gICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1ub3RpZmljYXRpb25cIi8+PC9zcGFuPlxuICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbXNnXCI+XG4gICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxNYWlsTm90aWZpY2F0aW9uLz59IHRyaWdnZXI9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1zdGF0dXMtcG9zIGd4LWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXQtbmV3XCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1zdGF0dXMgZ3gtc3RhdHVzLXJ0bCBneC1zbWFsbCBneC1vcmFuZ2VcIi8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LWxhbmd1YWdlXCI+XG4gICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17bGFuZ3VhZ2VNZW51KCl9XG4gICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1mbGV4LXJvdyBneC1hbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBmbGFnLSR7bG9jYWxlLmljb259YH0vPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcGwtMiBneC1sYW5ndWFnZS1uYW1lXCI+e2xvY2FsZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGV2cm9uLWRvd24gZ3gtcGwtMlwiLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7d2lkdGggPj0gVEFCX1NJWkUgPyBudWxsIDpcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LXVzZXItbmF2XCI+PFVzZXJJbmZvLz48L2xpPlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvSGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wYmFyO1xuIiwiY29uc3QgbGFuZ3VhZ2VEYXRhID0gW1xyXG4gIHtcclxuICAgIGxhbmd1YWdlSWQ6ICdlbmdsaXNoJyxcclxuICAgIGxvY2FsZTogJ2VuJyxcclxuICAgIG5hbWU6ICdFbmdsaXNoJyxcclxuICAgIGljb246ICd1cydcclxuICB9LFxyXG4gIHtcclxuICAgIGxhbmd1YWdlSWQ6ICdjaGluZXNlJyxcclxuICAgIGxvY2FsZTogJ3poJyxcclxuICAgIG5hbWU6ICdDaGluZXNlJyxcclxuICAgIGljb246ICdjbidcclxuICB9LFxyXG4gIHtcclxuICAgIGxhbmd1YWdlSWQ6ICdzcGFuaXNoJyxcclxuICAgIGxvY2FsZTogJ2VzJyxcclxuICAgIG5hbWU6ICdTcGFuaXNoJyxcclxuICAgIGljb246ICdlcydcclxuICB9LFxyXG4gIHtcclxuICAgIGxhbmd1YWdlSWQ6ICdmcmVuY2gnLFxyXG4gICAgbG9jYWxlOiAnZnInLFxyXG4gICAgbmFtZTogJ0ZyZW5jaCcsXHJcbiAgICBpY29uOiAnZnInXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZUlkOiAnaXRhbGlhbicsXHJcbiAgICBsb2NhbGU6ICdpdCcsXHJcbiAgICBuYW1lOiAnSXRhbGlhbicsXHJcbiAgICBpY29uOiAnaXQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZUlkOiAnc2F1ZGktYXJhYmlhJyxcclxuICAgIGxvY2FsZTogJ2FyJyxcclxuICAgIG5hbWU6ICdBcmFiaWMnLFxyXG4gICAgaWNvbjogJ3NhJ1xyXG4gIH1cclxuXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IGxhbmd1YWdlRGF0YTtcclxuIiwiLy8gQ3VzdG9taXplciBjb25zdFxyXG5leHBvcnQgY29uc3QgVE9HR0xFX0NPTExBUFNFRF9OQVYgPSAnVE9HR0xFX0NPTExBUFNFX01FTlUnO1xyXG5leHBvcnQgY29uc3QgV0lORE9XX1dJRFRIID0gJ1dJTkRPVy1XSURUSCc7XHJcbmV4cG9ydCBjb25zdCBTV0lUQ0hfTEFOR1VBR0UgPSAnU1dJVENILUxBTkdVQUdFJztcclxuXHJcbi8vQ29udGFjdCBNb2R1bGUgY29uc3RcclxuZXhwb3J0IGNvbnN0IEZFVENIX1NUQVJUID0gJ2ZldGNoX3N0YXJ0JztcclxuZXhwb3J0IGNvbnN0IEZFVENIX1NVQ0NFU1MgPSAnZmV0Y2hfc3VjY2Vzcyc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9FUlJPUiA9ICdmZXRjaF9lcnJvcic7XHJcbmV4cG9ydCBjb25zdCBTSE9XX01FU1NBR0UgPSAnU0hPV19NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IEhJREVfTUVTU0FHRSA9ICdISURFX01FU1NBR0UnO1xyXG4iLCIvLyBDdXN0b21pemVyIGNvbnN0XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9UWVBFID0gJ1RIRU1FX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgVEhFTUVfVFlQRV9MSVRFID0gJ1RIRU1FX1RZUEVfTElURSc7XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9UWVBFX0RBUksgPSAnVEhFTUVfVFlQRV9EQVJLJztcclxuZXhwb3J0IGNvbnN0IFRIRU1FX1RZUEVfU0VNSV9EQVJLID0gJ1RIRU1FX1RZUEVfU0VNSV9EQVJLJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVEhFTUVfQ09MT1JfU0VMRUNUSU9OID0gJ1RIRU1FX0NPTE9SX1NFTEVDVElPTic7XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9DT0xPUl9TRUxFQ1RJT05fUFJFU0VUID0gJ1RIRU1FX0NPTE9SX1NFTEVDVElPTl9QUkVTRVQnO1xyXG5leHBvcnQgY29uc3QgVEhFTUVfQ09MT1JfU0VMRUNUSU9OX0NVU1RPTUlaRSA9ICdUSEVNRV9DT0xPUl9TRUxFQ1RJT05fQ1VTVE9NSVpFJztcclxuXHJcbmV4cG9ydCBjb25zdCBIT1JJWk9OVEFMX05BVklHQVRJT04gPSAnSE9SSVpPTlRBTF9OQVZJR0FUSU9OJztcclxuXHJcbmV4cG9ydCBjb25zdCBIT1JJWk9OVEFMX01FTlVfUE9TSVRJT04gPSAnSE9SSVpPTlRBTF9NRU5VX1BPU0lUSU9OJztcclxuZXhwb3J0IGNvbnN0IEFCT1ZFX1RIRV9IRUFERVIgPSAnQUJPVkVfVEhFX0hFQURFUic7XHJcbmV4cG9ydCBjb25zdCBJTlNJREVfVEhFX0hFQURFUiA9ICdJTlNJREVfVEhFX0hFQURFUic7XHJcbmV4cG9ydCBjb25zdCBCRUxPV19USEVfSEVBREVSID0gJ0JFTE9XX1RIRV9IRUFERVInO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZFUlRJQ0FMX05BVklHQVRJT04gPSAnVkVSVElDQUxfTkFWSUdBVElPTic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTUlOSSA9ICdOQVZfU1RZTEVfTUlOSSc7XHJcblxyXG5leHBvcnQgY29uc3QgTEFZT1VUX1RZUEUgPSAnTEFZT1VUX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgU0VUX1BBVEhfTkFNRSA9ICdTRVRfUEFUSF9OQU1FJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9SVExfU1RBVFVTID0gJ1VQREFURV9SVExfU1RBVFVTJztcclxuXHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfVFlQRV9GUkFNRUQgPSAnTEFZT1VUX1RZUEVfRlJBTUVEJztcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9UWVBFX0JPWEVEID0gJ0xBWU9VVF9UWVBFX0JPWEVEJztcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9UWVBFX0ZVTEwgPSAnTEFZT1VUX1RZUEVfRlVMTCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRSA9ICdOQVZfU1RZTEUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9GSVhFRCA9ICdOQVZfU1RZTEVfRklYRUQnO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX01JTklfU0lERUJBUiA9ICdOQVZfU1RZTEVfTUlOSV9TSURFQkFSJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9EUkFXRVIgPSAnTkFWX1NUWUxFX0RSQVdFUic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUiA9ICdOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIgPSAnTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSJztcclxuXHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMID0gJ05BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwnO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTCA9ICdOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwgPSAnTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCc7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfQkVMT1dfSEVBREVSID0gJ05BVl9TVFlMRV9CRUxPV19IRUFERVInO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUiA9ICdOQVZfU1RZTEVfQUJPVkVfSEVBREVSJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEUgPSAnbGlnaHRfcHVycGxlJztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV9TRUMgPSAnIzAwQjM3OCc7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfREFSS19URVhUX0NPTE9SID0gJyM5Nzk5QUMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFRCA9ICdyZWQnO1xyXG5leHBvcnQgY29uc3QgUkVEX1NFQyA9ICcjMDBEOUM5JztcclxuZXhwb3J0IGNvbnN0IFJFRF9EQVJLX1RFWFRfQ09MT1IgPSAnIzg3OEJBQic7XHJcblxyXG5leHBvcnQgY29uc3QgQkxVRSA9ICdibHVlJztcclxuZXhwb3J0IGNvbnN0IEJMVUVfU0VDID0gJyNGQ0I1M0InO1xyXG5leHBvcnQgY29uc3QgQkxVRV9EQVJLX1RFWFRfQ09MT1IgPSAnI0FBQTU5QSc7XHJcblxyXG5leHBvcnQgY29uc3QgREFSS19CTFVFID0gJ2RhcmtfYmx1ZSc7XHJcbmV4cG9ydCBjb25zdCBEQVJLX0JMVUVfU0VDID0gJyMxN0JERTUnO1xyXG5leHBvcnQgY29uc3QgREFSS19CTFVFX0RBUktfVEVYVF9DT0xPUiA9ICcjOUREQUU5JztcclxuXHJcbmV4cG9ydCBjb25zdCBPUkFOR0UgPSAnb3JhbmdlJztcclxuZXhwb3J0IGNvbnN0IE9SQU5HRV9TRUMgPSAnI0YxRDA2NSc7XHJcbmV4cG9ydCBjb25zdCBPUkFOR0VfREFSS19URVhUX0NPTE9SID0gJyNBQkE4OTUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJR0hUX0JMVUUgPSAnbGlnaHRfYmx1ZSc7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9CTFVFX1NFQyA9ICcjNTlEQ0ZGJztcclxuZXhwb3J0IGNvbnN0IExJR0hUX0JMVUVfREFSS19URVhUX0NPTE9SID0gJyM5MkEyQzgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRVBfT1JBTkdFID0gJ2RlZXBfb3JhbmdlJztcclxuZXhwb3J0IGNvbnN0IERFRVBfT1JBTkdFX1NFQyA9ICcjNzBBMjg4JztcclxuZXhwb3J0IGNvbnN0IERFRVBfT1JBTkdFX0RBUktfVEVYVF9DT0xPUiA9ICcjOTdCOEM3JztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfMSA9ICdsaWdodF9wdXJwbGVfMSc7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfMV9TRUMgPSAnI0UxNDU5NCc7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfMV9EQVJLX1RFWFRfQ09MT1IgPSAnIzgyODhCNCc7XHJcblxyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzIgPSAnbGlnaHRfcHVycGxlXzInO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzJfU0VDID0gJyM2NEQ3RDYnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzJfREFSS19URVhUX0NPTE9SID0gJyM1NzgyQkInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFDVElWRV9DT0xPUl9PUFRJT04gPSAnI2ZmZmZmZic7XHJcblxyXG5leHBvcnQgY29uc3QgVEFCX1NJWkUgPSA5OTI7XHJcbiIsImltcG9ydCBhbnRkQVIgZnJvbSBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9hcl9FR1wiO1xuaW1wb3J0IHNhTWVzc2FnZXMgZnJvbSBcIi4uL2xvY2FsZXMvYXJfU0EuanNvblwiO1xuXG5jb25zdCBzYUxhbmcgPSB7XG4gIG1lc3NhZ2VzOiB7XG4gICAgLi4uc2FNZXNzYWdlc1xuICB9LFxuICBhbnRkOiBhbnRkQVIsXG4gIGxvY2FsZTogJ2FyJyxcbn07XG5leHBvcnQgZGVmYXVsdCBzYUxhbmc7XG4iLCJpbXBvcnQgYW50ZEVOIGZyb20gXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZW5fVVNcIjtcbmltcG9ydCBlbk1lc3NhZ2VzIGZyb20gXCIuLi9sb2NhbGVzL2VuX1VTLmpzb25cIjtcblxuY29uc3QgRW5MYW5nID0ge1xuICBtZXNzYWdlczoge1xuICAgIC4uLmVuTWVzc2FnZXNcbiAgfSxcbiAgYW50ZDogYW50ZEVOLFxuICBsb2NhbGU6ICdlbi1VUycsXG59O1xuZXhwb3J0IGRlZmF1bHQgRW5MYW5nO1xuIiwiaW1wb3J0IGFudGRFUyBmcm9tIFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2VzX0VTXCI7XG5pbXBvcnQgc2FNZXNzYWdlcyBmcm9tIFwiLi4vbG9jYWxlcy9lc19FUy5qc29uXCI7XG5cbmNvbnN0IHNhTGFuZyA9IHtcbiAgbWVzc2FnZXM6IHtcbiAgICAuLi5zYU1lc3NhZ2VzXG4gIH0sXG4gIGFudGQ6IGFudGRFUyxcbiAgbG9jYWxlOiAnZXMnLFxufTtcbmV4cG9ydCBkZWZhdWx0IHNhTGFuZztcbiIsImltcG9ydCBhbnRkRlIgZnJvbSBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9mcl9GUlwiO1xuaW1wb3J0IHNhTWVzc2FnZXMgZnJvbSBcIi4uL2xvY2FsZXMvZnJfRlIuanNvblwiO1xuXG5jb25zdCBzYUxhbmcgPSB7XG4gIG1lc3NhZ2VzOiB7XG4gICAgLi4uc2FNZXNzYWdlc1xuICB9LFxuICBhbnRkOiBhbnRkRlIsXG4gIGxvY2FsZTogJ2ZyLUZSJyxcbn07XG5leHBvcnQgZGVmYXVsdCBzYUxhbmc7XG4iLCJpbXBvcnQgYW50ZElUIGZyb20gJ2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9pdF9JVCc7XG5pbXBvcnQgc2FNZXNzYWdlcyBmcm9tIFwiLi4vbG9jYWxlcy9pdF9JVC5qc29uXCI7XG5cbmNvbnN0IHNhTGFuZyA9IHtcbiAgbWVzc2FnZXM6IHtcbiAgICAuLi5zYU1lc3NhZ2VzXG4gIH0sXG4gIGFudGQ6IGFudGRJVCxcbiAgbG9jYWxlOiAnaXQtSVQnLFxufTtcbmV4cG9ydCBkZWZhdWx0IHNhTGFuZztcbiIsImltcG9ydCB6aENOIGZyb20gJ2FudGQvbGliL2xvY2FsZS1wcm92aWRlci96aF9DTic7XG5pbXBvcnQgemhNZXNzYWdlcyBmcm9tIFwiLi4vbG9jYWxlcy96aC1IYW5zLmpzb25cIjtcblxuY29uc3QgWmhMYW4gPSB7XG4gIG1lc3NhZ2VzOiB7XG4gICAgLi4uemhNZXNzYWdlc1xuICB9LFxuICBhbnRkOiB6aENOLFxuICBsb2NhbGU6ICd6aC1IYW5zLUNOJyxcbn07XG5leHBvcnQgZGVmYXVsdCBaaExhbjtcbiIsImltcG9ydCBlbkxhbmcgZnJvbSBcIi4vZW50cmllcy9lbi1VU1wiO1xyXG5pbXBvcnQgemhMYW5nIGZyb20gXCIuL2VudHJpZXMvemgtSGFucy1DTlwiO1xyXG5pbXBvcnQgYXJMYW5nIGZyb20gXCIuL2VudHJpZXMvYXJfU0FcIjtcclxuaW1wb3J0IGl0TGFuZyBmcm9tIFwiLi9lbnRyaWVzL2l0X0lUXCI7XHJcbmltcG9ydCBlc0xhbmcgZnJvbSBcIi4vZW50cmllcy9lc19FU1wiO1xyXG5pbXBvcnQgZnJMYW5nIGZyb20gXCIuL2VudHJpZXMvZnJfRlJcIjtcclxuXHJcbmNvbnN0IEFwcExvY2FsZSA9IHtcclxuICBlbjogZW5MYW5nLFxyXG4gIHpoOiB6aExhbmcsXHJcbiAgYXI6IGFyTGFuZyxcclxuICBpdDogaXRMYW5nLFxyXG4gIGVzOiBlc0xhbmcsXHJcbiAgZnI6IGZyTGFuZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTG9jYWxlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcblxuaW1wb3J0IFwiLi4vcHVibGljL3ZlbmRvcnMvc3R5bGVcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIlxuaW1wb3J0IFwiLi4vc3R5bGVzL2N1c3RvbS5jc3NcIlxuaW1wb3J0IGluaXRTdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMb2NhbGVQcm92aWRlciBmcm9tIFwiLi4vYXBwL2NvcmUvTG9jYWxlUHJvdmlkZXJcIjtcbmltcG9ydCB7QXV0aFByb3ZpZGVyfSBmcm9tIFwiLi4vdXRpbC91c2UtYXV0aFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vYXBwL2NvcmUvTGF5b3V0XCI7XG5cbmNvbnN0IFBhZ2UgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZX0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TGlnaHRIb3VzZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgICA8TG9jYWxlUHJvdmlkZXI+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICA8L0xvY2FsZVByb3ZpZGVyPlxuICAgICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpKFBhZ2UpO1xuIiwiaW1wb3J0IFwiLi9mbGFnL3Nwcml0ZS1mbGFncy0yNHgyNC5jc3NcIjtcclxuaW1wb3J0IFwiLi9nYXhvbi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2xvYWRlci5jc3NcIjtcclxuaW1wb3J0IFwiLi9ub2lyLXByby9zdHlsZXMuY3NzXCI7XHJcbiIsImltcG9ydCB7RkVUQ0hfRVJST1IsIEZFVENIX1NUQVJULCBGRVRDSF9TVUNDRVNTLCBISURFX01FU1NBR0UsIFNIT1dfTUVTU0FHRX0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU3RhcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4gZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogRkVUQ0hfU1RBUlRcclxuICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU3VjY2VzcyA9ICgpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBGRVRDSF9TVUNDRVNTXHJcbiAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4gZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogRkVUQ0hfRVJST1IsXHJcbiAgICBwYXlsb2FkOiBlcnJvclxyXG4gIH0pXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd01lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IFNIT1dfTUVTU0FHRSxcclxuICAgIHBheWxvYWQ6IG1lc3NhZ2VcclxuICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpZGVNZXNzYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEhJREVfTUVTU0FHRVxyXG4gIH0pXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7U1dJVENIX0xBTkdVQUdFLCBUT0dHTEVfQ09MTEFQU0VEX05BViwgV0lORE9XX1dJRFRIfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB7TEFZT1VUX1RZUEUsIE5BVl9TVFlMRSwgU0VUX1BBVEhfTkFNRSwgVEhFTUVfVFlQRSwgVVBEQVRFX1JUTF9TVEFUVVN9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYobmF2Q29sbGFwc2VkKSB7XHJcbiAgcmV0dXJuIHt0eXBlOiBUT0dHTEVfQ09MTEFQU0VEX05BViwgbmF2Q29sbGFwc2VkfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdpbmRvd1dpZHRoKHdpZHRoKSB7XHJcbiAgcmV0dXJuIHt0eXBlOiBXSU5ET1dfV0lEVEgsIHdpZHRofTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRoZW1lVHlwZSh0aGVtZVR5cGUpIHtcclxuICByZXR1cm4ge3R5cGU6IFRIRU1FX1RZUEUsIHRoZW1lVHlwZX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdlN0eWxlQ2hhbmdlKG5hdlN0eWxlKSB7XHJcbiAgcmV0dXJuIHt0eXBlOiBOQVZfU1RZTEUsIG5hdlN0eWxlfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTGF5b3V0VHlwZUNoYW5nZShsYXlvdXRUeXBlKSB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6IExBWU9VVF9UWVBFLCBsYXlvdXRUeXBlfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGF0aE5hbWUocGF0aG5hbWUpIHtcclxuICByZXR1cm4ge3R5cGU6IFNFVF9QQVRIX05BTUUsIHBhdGhuYW1lfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaExhbmd1YWdlKGxvY2FsZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTV0lUQ0hfTEFOR1VBR0UsXHJcbiAgICBwYXlsb2FkOiBsb2NhbGVcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGlyZWN0aW9uUlRMKHJ0bFN0YXR1cykge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBVUERBVEVfUlRMX1NUQVRVUywgcnRsU3RhdHVzfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vU2V0dGluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29tbW9uJztcclxuIiwiaW1wb3J0IHtGRVRDSF9FUlJPUiwgRkVUQ0hfU1RBUlQsIEZFVENIX1NVQ0NFU1MsIEhJREVfTUVTU0FHRSwgU0hPV19NRVNTQUdFfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzXCJcclxuXHJcbmNvbnN0IElOSVRfU1RBVEUgPSB7XHJcbiAgZXJyb3I6IFwiXCIsXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgbWVzc2FnZTogJydcclxufTtcclxuXHJcbmNvbnN0IGNvbW1vblJlZHVjZXIgPSAoc3RhdGUgPSBJTklUX1NUQVRFLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEZFVENIX1NUQVJUOiB7XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiAnJywgbWVzc2FnZTogJycsIGxvYWRpbmc6IHRydWV9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBGRVRDSF9TVUNDRVNTOiB7XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiAnJywgbWVzc2FnZTogJycsIGxvYWRpbmc6IGZhbHNlfTtcclxuICAgIH1cclxuICAgIGNhc2UgU0hPV19NRVNTQUdFOiB7XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiAnJywgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQsIGxvYWRpbmc6IGZhbHNlfTtcclxuICAgIH1cclxuICAgIGNhc2UgRkVUQ0hfRVJST1I6IHtcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCwgbWVzc2FnZTogJyd9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBISURFX01FU1NBR0U6IHtcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiAnJywgbWVzc2FnZTogJyd9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uUmVkdWNlcjtcclxuIiwiaW1wb3J0IHtTV0lUQ0hfTEFOR1VBR0UsIFRPR0dMRV9DT0xMQVBTRURfTkFWLCBXSU5ET1dfV0lEVEh9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuICBMQVlPVVRfVFlQRSxcclxuICBMQVlPVVRfVFlQRV9GVUxMLFxyXG4gIE5BVl9TVFlMRSxcclxuICBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIsXHJcbiAgU0VUX1BBVEhfTkFNRSxcclxuICBUSEVNRV9UWVBFLFxyXG4gIFRIRU1FX1RZUEVfTElURSxcclxuICBVUERBVEVfUlRMX1NUQVRVU1xyXG59IGZyb20gXCIuLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU2V0dGluZ3MgPSB7XHJcbiAgbmF2Q29sbGFwc2VkOiB0cnVlLFxyXG4gIG5hdlN0eWxlOiBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIsXHJcbiAgbGF5b3V0VHlwZTogTEFZT1VUX1RZUEVfRlVMTCxcclxuICB0aGVtZVR5cGU6IFRIRU1FX1RZUEVfTElURSxcclxuICBwYXRobmFtZTogJycsXHJcbiAgd2lkdGg6IDEzNjcsXHJcbiAgaXNEaXJlY3Rpb25SVEw6IGZhbHNlLFxyXG4gIGxvY2FsZToge1xyXG4gICAgbGFuZ3VhZ2VJZDogJ2VuZ2xpc2gnLFxyXG4gICAgbG9jYWxlOiAnZW4nLFxyXG4gICAgbmFtZTogJ0VuZ2xpc2gnLFxyXG4gICAgaWNvbjogJ3VzJ1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNldHRpbmdzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTZXR0aW5ncywgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBUT0dHTEVfQ09MTEFQU0VEX05BVjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBuYXZDb2xsYXBzZWQ6IGFjdGlvbi5uYXZDb2xsYXBzZWRcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0VUX1BBVEhfTkFNRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwYXRobmFtZTogYWN0aW9uLnBhdGhuYW1lXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBVUERBVEVfUlRMX1NUQVRVUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0RpcmVjdGlvblJUTDogYWN0aW9uLnJ0bFN0YXR1c1xyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgV0lORE9XX1dJRFRIOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHdpZHRoOiBhY3Rpb24ud2lkdGgsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRIRU1FX1RZUEU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGhlbWVUeXBlOiBhY3Rpb24udGhlbWVUeXBlXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIE5BVl9TVFlMRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBuYXZTdHlsZTogYWN0aW9uLm5hdlN0eWxlXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExBWU9VVF9UWVBFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxheW91dFR5cGU6IGFjdGlvbi5sYXlvdXRUeXBlXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNXSVRDSF9MQU5HVUFHRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2NhbGU6IGFjdGlvbi5wYXlsb2FkLFxyXG5cclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1JlZHVjZXI7XHJcbiIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL1NldHRpbmdzXCI7XHJcbmltcG9ydCBDb21tb24gZnJvbSBcIi4vQ29tbW9uXCI7XHJcblxyXG5cclxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHNldHRpbmdzOiBTZXR0aW5ncyxcclxuICBjb21tb246IENvbW1vbixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VycztcclxuIiwiaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcblxyXG5cclxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlID0+IHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgY29uc3Qge2NvbXBvc2VXaXRoRGV2VG9vbHN9ID0gcmVxdWlyZSgncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJyk7XHJcbiAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpO1xyXG4gIH1cclxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlID0ge30pIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGluaXRpYWxTdGF0ZSwgYmluZE1pZGRsZXdhcmUoW3RodW5rXSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBodHRwQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBgaHR0cHM6Ly9hcGkuc2V2ZW5zYWZlc2VydmljZXMuY29tL2FwaS9gLCAvL1lPVVJfQVBJX1VSTCBIRVJFXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1Njcm9sbGJhcnN9IGZyb20gXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiO1xyXG5cclxuY29uc3QgQ3VzdG9tU2Nyb2xsYmFycyA9IChwcm9wcykgPT4gPFNjcm9sbGJhcnMgIHsuLi5wcm9wc30gYXV0b0hpZGUgdW5pdmVyc2FsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJUcmFja0hvcml6b250YWw9e3Byb3BzID0+IDxkaXYgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFjay1ob3Jpem9udGFsXCIvPn0vPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNjcm9sbGJhcnM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG5jb25zdCBJbmplY3RNYXNzYWdlID0gcHJvcHMgPT4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLnByb3BzfSAvPjtcclxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bChJbmplY3RNYXNzYWdlLCB7XHJcbiAgd2l0aFJlZjogZmFsc2UsXHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7aHR0cENsaWVudH0gZnJvbSBcIi4vQXBpXCI7XG5pbXBvcnQge0Nvb2tpZXN9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuLy8gUHJvdmlkZXIgY29tcG9uZW50IHRoYXQgd3JhcHMgYXBwIGFuZCBtYWtlcyBhdXRoIG9iamVjdCAuLlxuLy8gLi4uIGF2YWlsYWJsZSB0byBhbnkgY2hpbGQgY29tcG9uZW50IHRoYXQgY2FsbHMgdXNlQXV0aCgpLlxuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuLy8gSG9vayBmb3IgY2hpbGQgY29tcG9uZW50cyB0byBnZXQgdGhlIGF1dGggb2JqZWN0IC4uLlxuLy8gLi4uIGFuZCByZS1yZW5kZXIgd2hlbiBpdCBjaGFuZ2VzLlxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xufTtcblxuY29uc3QgdXNlUHJvdmlkZUF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IFthdXRoVXNlciwgc2V0QXV0aFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmdVc2VyLCBzZXRMb2FkaW5nVXNlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGZldGNoU3RhcnQgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcignJyk7XG4gIH1cblxuICBjb25zdCBmZXRjaFN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgc2V0RXJyb3IoJycpO1xuICB9XG5cbiAgY29uc3QgZmV0Y2hFcnJvciA9IChlcnJvcikgPT4ge1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIHNldEVycm9yKGVycm9yKTtcbiAgfVxuXG4gIGNvbnN0IHVzZXJMb2dpbiA9IChkYXRhLCBjYWxsYmFja0Z1bikgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2xvZ2luJywgZGF0YSlcbiAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyBkYXRhLnRva2VuO1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgICAgIGNvb2tpZXMuc2V0KCd0b2tlbicsIGRhdGEudG9rZW4pO1xuICAgICAgICAgIGdldEF1dGhVc2VyKCk7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZldGNoRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1c2VyU2lnbnVwID0gKGRhdGEsIGNhbGxiYWNrRnVuKSA9PiB7XG4gICAgZmV0Y2hTdGFydCgpO1xuICAgIGh0dHBDbGllbnQucG9zdCgnYXV0aC9yZWdpc3RlcicsIGRhdGEpXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xuICAgICAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgICAgIGNvb2tpZXMuc2V0KCd0b2tlbicsIGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIGNhbGxiYWNrRnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVzZXJTaWduT3V0ID0gKGNhbGxiYWNrRnVuKSA9PiB7XG4gICAgZmV0Y2hTdGFydCgpO1xuICAgIGh0dHBDbGllbnQucG9zdCgnbG9nb3V0JylcbiAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgICBzZXRBdXRoVXNlcihmYWxzZSk7XG4gICAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XG4gICAgICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICAgICAgY29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZldGNoRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRBdXRoVXNlciA9ICgpID0+IHtcbiAgICBmZXRjaFN0YXJ0KCk7XG4gICAgaHR0cENsaWVudC5nZXQoJ21lJykudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgc2V0QXV0aFVzZXIoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XG4gICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU3Vic2NyaWJlIHRvIHVzZXIgb24gbW91bnRcbiAgLy8gQmVjYXVzZSB0aGlzIHNldHMgc3RhdGUgaW4gdGhlIGNhbGxiYWNrIGl0IHdpbGwgY2F1c2UgYW55IC4uLlxuICAvLyAuLi4gY29tcG9uZW50IHRoYXQgdXRpbGl6ZXMgdGhpcyBob29rIHRvIHJlLXJlbmRlciB3aXRoIHRoZSAuLi5cbiAgLy8gLi4uIGxhdGVzdCBhdXRoIG9iamVjdC5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcblxuICAgICAgaHR0cENsaWVudC5wb3N0KFwiYXV0aC9tZVwiKS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICAgIHNldEF1dGhVc2VyKGRhdGEudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZ1VzZXIoZmFsc2UpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIC8vIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xuICAgICAgICAvLyBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnJztcbiAgICAgICAgc2V0TG9hZGluZ1VzZXIoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSwgW11cbiAgKTtcblxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcbiAgcmV0dXJuIHtcbiAgICBpc0xvYWRpbmdVc2VyLFxuICAgIGlzTG9hZGluZyxcbiAgICBhdXRoVXNlcixcbiAgICBlcnJvcixcbiAgICBzZXRBdXRoVXNlcixcbiAgICBnZXRBdXRoVXNlcixcbiAgICB1c2VyTG9naW4sXG4gICAgdXNlclNpZ251cCxcbiAgICB1c2VyU2lnbk91dCxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzVW5SZXN0cmljdGVkUm91dGUgPSAocGF0aG5hbWUpID0+IHtcbiAgcmV0dXJuIHBhdGhuYW1lID09PSAnL3NpZ25pbicgfHwgcGF0aG5hbWUgPT09ICcvc2lnbnVwJyB8fCBwYXRobmFtZSA9PT0gJy9mb3Jnb3QtcGFzc3dvcmQnIHx8IHBhdGhuYW1lID09PSAnL3Jlc2V0LXBhc3N3b3JkJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2FyX0VHXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9lbl9VU1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZXNfRVNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2ZyX0ZSXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9pdF9JVFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvemhfQ05cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW50bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==