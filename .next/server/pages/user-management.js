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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user-management.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/user-management.js":
/*!**********************************!*\
  !*** ./pages/user-management.js ***!
  \**********************************/
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



// import type { ColumnsType } from 'antd/es/table';

const TabPane = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"].TabPane;
const items = [{
  key: '1',
  label: 'Action 1'
}, {
  key: '2',
  label: 'Action 2'
}];
const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}];
const columns = [{
  title: 'First Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Last Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Email',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Status',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'Created ',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'Action',
  dataIndex: 'operation',
  key: 'operation',
  render: () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    menu: {
      items
    }
  }, __jsx("a", {
    style: {
      color: "black"
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MoreOutlined"], {
    style: {
      fontSize: "18px"
    }
  })))
}];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name
  })
};
const UserManagment = () => {
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
  }, "User Management"), __jsx("div", {
    style: {
      width: "14%",
      marginTop: "20px"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      background: "#D3F36B",
      border: "none",
      width: "72%"
    },
    htmlType: "button"
  }, "+ New User"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
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
  }, "Sort By"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    rowSelection: _objectSpread({
      type: 'checkbox'
    }, rowSelection),
    dataSource: dataSource,
    columns: columns
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (UserManagment);

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlci1tYW5hZ2VtZW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiVGFiUGFuZSIsIlRhYnMiLCJpdGVtcyIsImtleSIsImxhYmVsIiwiZGF0YVNvdXJjZSIsIm5hbWUiLCJhZ2UiLCJhZGRyZXNzIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4IiwicmVuZGVyIiwiY29sb3IiLCJmb250U2l6ZSIsInJvd1NlbGVjdGlvbiIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRSb3dLZXlzIiwic2VsZWN0ZWRSb3dzIiwiY29uc29sZSIsImxvZyIsImdldENoZWNrYm94UHJvcHMiLCJyZWNvcmQiLCJkaXNhYmxlZCIsIlVzZXJNYW5hZ21lbnQiLCJjYWxsYmFjayIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImZsb2F0IiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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S0FBSyxFQUFFO0lBQU0sQ0FBRTtJQUFDLEdBQUcsRUFBQztFQUFvQixFQUFFO0lBQU0sU0FBUyxFQUFDO0VBQVMsR0FBQyxTQUFPLENBQU8sQ0FDMUYsQ0FDRCxFQUVOLE1BQUMsMENBQUs7SUFDTCxZQUFZO01BQUlLLElBQUksRUFBRTtJQUFVLEdBQUtsQixZQUFZLENBQUc7SUFDcEQsVUFBVSxFQUFFVixVQUFXO0lBQUMsT0FBTyxFQUFFSTtFQUFRLEVBQ3hDLENBQ1M7QUFFZCxDQUFDO0FBRWNlLDRFQUFhLEU7Ozs7Ozs7Ozs7O0FDMUg1Qiw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy91c2VyLW1hbmFnZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3VzZXItbWFuYWdlbWVudC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29sLCBUYWJzLCBCdXR0b24sIERyb3Bkb3duLCBEaXZpZGVyLCBSYWRpbywgVGFibGUgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBNb3JlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbi8vIGltcG9ydCB0eXBlIHsgQ29sdW1uc1R5cGUgfSBmcm9tICdhbnRkL2VzL3RhYmxlJztcclxuXHJcbmNvbnN0IFRhYlBhbmUgPSBUYWJzLlRhYlBhbmU7XHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxuXHR7XHJcblx0ICBrZXk6ICcxJyxcclxuXHQgIGxhYmVsOiAnQWN0aW9uIDEnLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAga2V5OiAnMicsXHJcblx0ICBsYWJlbDogJ0FjdGlvbiAyJyxcclxuXHR9LFxyXG4gIF07XHJcblxyXG5jb25zdCBkYXRhU291cmNlID0gW1xyXG5cdHtcclxuXHQgIGtleTogJzEnLFxyXG5cdCAgbmFtZTogJ01pa2UnLFxyXG5cdCAgYWdlOiAzMixcclxuXHQgIGFkZHJlc3M6ICcxMCBEb3duaW5nIFN0cmVldCcsXHJcblx0fSxcclxuXHR7XHJcblx0ICBrZXk6ICcyJyxcclxuXHQgIG5hbWU6ICdKb2huJyxcclxuXHQgIGFnZTogNDIsXHJcblx0ICBhZGRyZXNzOiAnMTAgRG93bmluZyBTdHJlZXQnLFxyXG5cdH0sXHJcbiAgXTtcclxuICBcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG5cdHtcclxuXHQgIHRpdGxlOiAnRmlyc3QgTmFtZScsXHJcblx0ICBkYXRhSW5kZXg6ICduYW1lJyxcclxuXHQgIGtleTogJ25hbWUnLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdGl0bGU6ICdMYXN0IE5hbWUnLFxyXG5cdCAgZGF0YUluZGV4OiAnbmFtZScsXHJcblx0ICBrZXk6ICduYW1lJyxcclxuXHR9LFxyXG5cdHtcclxuXHQgIHRpdGxlOiAnRW1haWwnLFxyXG5cdCAgZGF0YUluZGV4OiAnYWdlJyxcclxuXHQgIGtleTogJ2FnZScsXHJcblx0fSxcclxuXHR7XHJcblx0ICB0aXRsZTogJ1N0YXR1cycsXHJcblx0ICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcclxuXHQgIGtleTogJ2FkZHJlc3MnLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdGl0bGU6ICdDcmVhdGVkICcsXHJcblx0ICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcclxuXHQgIGtleTogJ2FkZHJlc3MnLFxyXG5cdH0sXHJcblx0e1xyXG4gICAgICAgIHRpdGxlOiAnQWN0aW9uJyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdvcGVyYXRpb24nLFxyXG4gICAgICAgIGtleTogJ29wZXJhdGlvbicsXHJcbiAgICAgICAgcmVuZGVyOiAoKSA9PiAoXHJcbiAgICAgICAgICAgIDxEcm9wZG93biBtZW51PXt7IGl0ZW1zIH19PlxyXG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6IFwiYmxhY2tcIn19PlxyXG4gICAgICAgICAgICBcdDxNb3JlT3V0bGluZWQgc3R5bGU9e3tmb250U2l6ZTogXCIxOHB4XCJ9fS8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICksXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJvd1NlbGVjdGlvbiA9IHtcclxuXHRvbkNoYW5nZTogKHNlbGVjdGVkUm93S2V5cywgc2VsZWN0ZWRSb3dzKSA9PiB7XHJcblx0ICBjb25zb2xlLmxvZyhgc2VsZWN0ZWRSb3dLZXlzOiAke3NlbGVjdGVkUm93S2V5c31gLCAnc2VsZWN0ZWRSb3dzOiAnLCBzZWxlY3RlZFJvd3MpO1xyXG5cdH0sXHJcblx0Z2V0Q2hlY2tib3hQcm9wczogKHJlY29yZCkgPT4gKHtcclxuXHQgIGRpc2FibGVkOiByZWNvcmQubmFtZSA9PT0gJ0Rpc2FibGVkIFVzZXInLFxyXG5cdCAgLy8gQ29sdW1uIGNvbmZpZ3VyYXRpb24gbm90IHRvIGJlIGNoZWNrZWRcclxuXHQgIG5hbWU6IHJlY29yZC5uYW1lLFxyXG5cdH0pLFxyXG4gIH07XHJcblxyXG5jb25zdCBVc2VyTWFuYWdtZW50ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGtleSkgPT4ge1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwifX0+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZ3gtZm9udC13ZWlnaHQtc2VtaS1ib2xkJyBzdHlsZT17e2ZvbnRTaXplOiBcIjMwcHhcIn19PlVzZXIgTWFuYWdlbWVudDwvaDE+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17eyAgICB3aWR0aDogXCIxNCVcIixtYXJnaW5Ub3A6IFwiMjBweFwifX0+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjRDNGMzZCXCIsIGJvcmRlcjogXCJub25lXCIsIHdpZHRoOiBcIjcyJVwifX0gaHRtbFR5cGU9XCJidXR0b25cIj5cclxuXHRcdFx0XHRcdFx0KyBOZXcgVXNlclxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHRcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIzXCIgb25DaGFuZ2U9e2NhbGxiYWNrfT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJMb3JlbVwiIGtleT1cIjFcIj48L1RhYlBhbmU+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiSXBzdW1cIiBrZXk9XCIyXCI+PC9UYWJQYW5lPlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIkRvbG9yXCIga2V5PVwiM1wiPjwvVGFiUGFuZT5cclxuXHRcdFx0PC9UYWJzPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLWJhcic+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTVweFwifX0gc3JjPScvaW1hZ2VzL3NlYXJjaC5zdmcnLz48c3BhbiBjbGFzc05hbWU9J2d4LW1sLTIgZ3gtdGV4dC1saWdodCc+U2VhcmNoPC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0gY2xhc3NOYW1lPVwiZ3gtbXItNFwiPlxyXG5cdFx0XHRcdFx0PGltZyBzdHlsZT17e3dpZHRoOiBcIjEzcHhcIn19IHNyYz0nL2ltYWdlcy9zaGFyZS5zdmcnLz48c3BhbiBjbGFzc05hbWU9J2d4LW1sLTEnPlNoYXJlPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0gY2xhc3NOYW1lPVwiZ3gtbXItNFwiPlxyXG5cdFx0XHRcdFx0PGltZyBzdHlsZT17e3dpZHRoOiBcIjE2cHhcIn19IHNyYz0nL2ltYWdlcy9zb3J0Ynkuc3ZnJy8+PHNwYW4gY2xhc3NOYW1lPSdneC1tbC0xJz5Tb3J0IEJ5PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxUYWJsZSAgXHJcblx0XHRcdFx0cm93U2VsZWN0aW9uPXt7IHR5cGU6ICdjaGVja2JveCcsIC4uLnJvd1NlbGVjdGlvbix9fSBcclxuXHRcdFx0XHRkYXRhU291cmNlPXtkYXRhU291cmNlfSBjb2x1bW5zPXtjb2x1bW5zfSBcclxuXHRcdFx0Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJNYW5hZ21lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9