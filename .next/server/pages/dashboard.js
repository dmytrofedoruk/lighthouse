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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/index.js");
/******/ })
/************************************************************************/
/******/ ({

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
    defaultActiveKey: "1",
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
  }, __jsx("i", {
    className: "icon icon-search gx-mr-2"
  }), __jsx("span", {
    className: "gx-text-light"
  }, "Search")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
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

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTWV0cmljcy9UcmFmZmljUmFpc2VDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1dpZGdldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlY2hhcnRzXCIiXSwibmFtZXMiOlsiZGF0YSIsIm5hbWUiLCJ0cmFmZmljIiwiVHJhZmZpY1JhaXNlQ2FyZCIsIldpZGdldCIsInRpdGxlIiwiY2hpbGRyZW4iLCJzdHlsZU5hbWUiLCJjb3ZlciIsImV4dHJhIiwiYWN0aW9ucyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiVGFiUGFuZSIsIlRhYnMiLCJEYXNoYm9hcmQiLCJjYWxsYmFjayIsImtleSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFr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RixFQUVOLE1BQUMsd0NBQUc7SUFBQyxTQUFTLEVBQUM7RUFBUyxHQUN2QixNQUFDLHdDQUFHO0lBQUMsRUFBRSxFQUFFLENBQUU7SUFBQyxFQUFFLEVBQUUsRUFBRztJQUFDLEVBQUUsRUFBRSxFQUFHO0lBQUMsRUFBRSxFQUFFLEVBQUc7SUFBQyxFQUFFLEVBQUU7RUFBRyxHQUMxQyxNQUFDLGdGQUFnQixPQUFFLENBQ2QsRUFDTixNQUFDLHdDQUFHO0lBQUMsRUFBRSxFQUFFLENBQUU7SUFBQyxFQUFFLEVBQUUsRUFBRztJQUFDLEVBQUUsRUFBRSxFQUFHO0lBQUMsRUFBRSxFQUFFLEVBQUc7SUFBQyxFQUFFLEVBQUU7RUFBRyxHQUMxQyxNQUFDLGdGQUFnQixPQUFFLENBQ2QsRUFDTixNQUFDLHdDQUFHO0lBQUMsRUFBRSxFQUFFLENBQUU7SUFBQyxFQUFFLEVBQUUsRUFBRztJQUFDLEVBQUUsRUFBRSxFQUFHO0lBQUMsRUFBRSxFQUFFLEVBQUc7SUFBQyxFQUFFLEVBQUU7RUFBRyxHQUMxQyxNQUFDLGdGQUFnQixPQUFFLENBQ2QsQ0FDRCxDQUNEO0FBRVIsQ0FBQztBQUVjRCx3RUFBUyxFOzs7Ozs7Ozs7OztBQy9DeEIsaUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TGluZSwgTGluZUNoYXJ0LCBSZXNwb25zaXZlQ29udGFpbmVyLCBUb29sdGlwfSBmcm9tIFwicmVjaGFydHNcIjtcclxuaW1wb3J0IHtDb2wsIFJvd30gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2lkZ2V0L2luZGV4XCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtuYW1lOiAnUGFnZSBBJywgdHJhZmZpYzogMjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgQicsIHRyYWZmaWM6IDExMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBDJywgdHJhZmZpYzogODAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHRyYWZmaWM6IDE3MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgdHJhZmZpYzogNjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHRyYWZmaWM6IDE4MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgdHJhZmZpYzogNjAwfSxcclxuXTtcclxuXHJcbmNvbnN0IFRyYWZmaWNSYWlzZUNhcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQ+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZ3gtYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCBsZz17MTJ9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hY3RjaGFydCBneC1weC0zXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0zIGd4LXRleHQtbGlnaHRcIj5Mb3JlbSBpcHN1bTwvcD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImd4LWZzLXh4eGwgZ3gtZm9udC13ZWlnaHQtbWVkaXVtIGd4LW1iLTEgZ3gtdGV4dC1ibGFja1wiPjk1MC4yMlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgey8qIDxDb2wgbGc9ezEyfSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17MTAwfT5cclxuICAgICAgICAgICAgPExpbmVDaGFydCBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17e3RvcDogNSwgcmlnaHQ6IDUsIGxlZnQ6IDUsIGJvdHRvbTogNX19PlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwLz5cclxuICAgICAgICAgICAgICA8TGluZSBkYXRhS2V5PVwidHJhZmZpY1wiIHN0cm9rZT1cIiMwMzhGREVcIiBzdHJva2VXaWR0aD17Mn0vPlxyXG4gICAgICAgICAgICA8L0xpbmVDaGFydD5cclxuICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICAgICAgICA8L0NvbD4gKi99XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYWZmaWNSYWlzZUNhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jb25zdCBXaWRnZXQgPSAoe3RpdGxlLCBjaGlsZHJlbiwgc3R5bGVOYW1lLCBjb3ZlciwgZXh0cmEsIGFjdGlvbnN9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCB0aXRsZT17dGl0bGV9IGFjdGlvbnM9e2FjdGlvbnN9IGNvdmVyPXtjb3Zlcn0gY2xhc3NOYW1lPXtgZ3gtY2FyZC13aWRnZXQgJHtzdHlsZU5hbWV9YH0gZXh0cmE9e2V4dHJhfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldDtcclxuV2lkZ2V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdHlsZU5hbWU6ICcnLFxyXG59O1xyXG5cclxuV2lkZ2V0LnByb3BUeXBlcyA9IHtcclxuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXHJcbiAgZXh0cmE6IFByb3BUeXBlcy5ub2RlLFxyXG4gIGNvdmVyOiBQcm9wVHlwZXMubm9kZSxcclxuICBhY3Rpb25zOiBQcm9wVHlwZXMubm9kZSxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbCwgVGFicywgQnV0dG9uLCBSb3d9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBUcmFmZmljUmFpc2VDYXJkIGZyb20gXCIuLi8uLi9hcHAvY29tcG9uZW50cy9NZXRyaWNzL1RyYWZmaWNSYWlzZUNhcmRcIjtcclxuXHJcbmNvbnN0IFRhYlBhbmUgPSBUYWJzLlRhYlBhbmU7XHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XHJcblx0Y29uc3QgY2FsbGJhY2sgPSAoa2V5KSA9PiB7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwifX0+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZ3gtZm9udC13ZWlnaHQtc2VtaS1ib2xkJyBzdHlsZT17e2ZvbnRTaXplOiBcIjMwcHhcIn19PkxvcmVtIGlwc3VtIGRvbG9yPC9oMT5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ICAgIHdpZHRoOiBcIjMzJVwiLG1hcmdpblRvcDogXCIyMHB4XCJ9fT5cclxuXHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiZ3gtbWItMCBkZXNpZ24tYnV0dG9uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcIiNmZmZcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjQzJDMkMyXCIsIHdpZHRoOiBcIjM4JVwifX0gaHRtbFR5cGU9XCJidXR0b25cIj5cclxuXHRcdFx0XHRcdFx0KyBMb3JlbSBpcHN1bVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjRDNGMzZCXCIsIGJvcmRlcjogXCIxcHggc29saWQgI0MyQzJDMlwiLCB3aWR0aDogXCIzOCVcIn19IGh0bWxUeXBlPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdCsgTG9yZW0gaXBzdW1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiIG9uQ2hhbmdlPXtjYWxsYmFja30+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiTG9yZW1cIiBrZXk9XCIxXCI+PC9UYWJQYW5lPlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIklwc3VtXCIga2V5PVwiMlwiPjwvVGFiUGFuZT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJEb2xvclwiIGtleT1cIjNcIj48L1RhYlBhbmU+XHJcblx0XHRcdDwvVGFicz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlYXJjaC1iYXInPlxyXG5cdFx0XHRcdDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2ggZ3gtbXItMlwiLz48c3BhbiBjbGFzc05hbWU9J2d4LXRleHQtbGlnaHQnPlNlYXJjaDwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Um93IGNsYXNzTmFtZT0nZ3gtbXQtNCc+XHJcblx0XHRcdFx0PENvbCB4bD17OH0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geHM9ezI0fT5cclxuXHRcdFx0XHRcdDxUcmFmZmljUmFpc2VDYXJkLz5cclxuXHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHQ8Q29sIHhsPXs4fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MjR9PlxyXG5cdFx0XHRcdFx0PFRyYWZmaWNSYWlzZUNhcmQvPlxyXG5cdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdDxDb2wgeGw9ezh9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcblx0XHRcdFx0XHQ8VHJhZmZpY1JhaXNlQ2FyZC8+XHJcblx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdDwvUm93PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWNoYXJ0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9