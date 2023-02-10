webpackHotUpdate_N_E("pages/user-management",{

/***/ "./pages/user-management.js":
/*!**********************************!*\
  !*** ./pages/user-management.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


// import type { ColumnsType } from 'antd/es/table';

var TabPane = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane;
var dataSource = [{
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
var columns = [{
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
}];
var rowSelection = {
  onChange: function onChange(selectedRowKeys, selectedRows) {
    console.log("selectedRowKeys: ".concat(selectedRowKeys), 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: function getCheckboxProps(record) {
    return {
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name
    };
  }
};
var UserManagment = function UserManagment() {
  var callback = function callback(key) {};
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
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      background: "#D3F36B",
      border: "none",
      width: "72%"
    },
    htmlType: "button"
  }, "+ New User"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
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
      "float": "right"
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
      "float": "right"
    },
    className: "gx-mr-4"
  }, __jsx("img", {
    style: {
      width: "16px"
    },
    src: "/images/sortby.svg"
  }), __jsx("span", {
    className: "gx-ml-1"
  }, "Sort By"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    rowSelection: _objectSpread({
      type: 'checkbox'
    }, rowSelection),
    dataSource: dataSource,
    columns: columns
  }), ";");
};
_c = UserManagment;
/* harmony default export */ __webpack_exports__["default"] = (UserManagment);
var _c;
$RefreshReg$(_c, "UserManagment");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci1tYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbIlRhYlBhbmUiLCJUYWJzIiwiZGF0YVNvdXJjZSIsImtleSIsIm5hbWUiLCJhZ2UiLCJhZGRyZXNzIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwicm93U2VsZWN0aW9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZFJvd0tleXMiLCJzZWxlY3RlZFJvd3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImRpc2FibGVkIiwiVXNlck1hbmFnbWVudCIsImNhbGxiYWNrIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzBDO0FBQ3BFOztBQUVBLElBQU1BLE9BQU8sR0FBR0MseUNBQUksQ0FBQ0QsT0FBTztBQUU1QixJQUFNRSxVQUFVLEdBQUcsQ0FDbEI7RUFDRUMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsSUFBSSxFQUFFLE1BQU07RUFDWkMsR0FBRyxFQUFFLEVBQUU7RUFDUEMsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxFQUNEO0VBQ0VILEdBQUcsRUFBRSxHQUFHO0VBQ1JDLElBQUksRUFBRSxNQUFNO0VBQ1pDLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLE9BQU8sRUFBRTtBQUNYLENBQUMsQ0FDQztBQUVELElBQU1DLE9BQU8sR0FBRyxDQUNqQjtFQUNFQyxLQUFLLEVBQUUsWUFBWTtFQUNuQkMsU0FBUyxFQUFFLE1BQU07RUFDakJOLEdBQUcsRUFBRTtBQUNQLENBQUMsRUFDRDtFQUNFSyxLQUFLLEVBQUUsV0FBVztFQUNsQkMsU0FBUyxFQUFFLE1BQU07RUFDakJOLEdBQUcsRUFBRTtBQUNQLENBQUMsRUFDRDtFQUNFSyxLQUFLLEVBQUUsT0FBTztF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VUFBVztJQUFDLE9BQU8sRUFBRUs7RUFBUSxFQUN4QyxLQUNHLENBQU07QUFFZCxDQUFDO0FBQUEsS0FwQ0tZLGFBQWE7QUFzQ0pBLDRFQUFhLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXItbWFuYWdlbWVudC5mYjUyZjMxN2RiZGI3MDVhOTBjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb2wsIFRhYnMsIEJ1dHRvbiwgUm93LCBEaXZpZGVyLCBSYWRpbywgVGFibGUgfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgdHlwZSB7IENvbHVtbnNUeXBlIH0gZnJvbSAnYW50ZC9lcy90YWJsZSc7XHJcblxyXG5jb25zdCBUYWJQYW5lID0gVGFicy5UYWJQYW5lO1xyXG5cclxuY29uc3QgZGF0YVNvdXJjZSA9IFtcclxuXHR7XHJcblx0ICBrZXk6ICcxJyxcclxuXHQgIG5hbWU6ICdNaWtlJyxcclxuXHQgIGFnZTogMzIsXHJcblx0ICBhZGRyZXNzOiAnMTAgRG93bmluZyBTdHJlZXQnLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAga2V5OiAnMicsXHJcblx0ICBuYW1lOiAnSm9obicsXHJcblx0ICBhZ2U6IDQyLFxyXG5cdCAgYWRkcmVzczogJzEwIERvd25pbmcgU3RyZWV0JyxcclxuXHR9LFxyXG4gIF07XHJcbiAgXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuXHR7XHJcblx0ICB0aXRsZTogJ0ZpcnN0IE5hbWUnLFxyXG5cdCAgZGF0YUluZGV4OiAnbmFtZScsXHJcblx0ICBrZXk6ICduYW1lJyxcclxuXHR9LFxyXG5cdHtcclxuXHQgIHRpdGxlOiAnTGFzdCBOYW1lJyxcclxuXHQgIGRhdGFJbmRleDogJ25hbWUnLFxyXG5cdCAga2V5OiAnbmFtZScsXHJcblx0fSxcclxuXHR7XHJcblx0ICB0aXRsZTogJ0VtYWlsJyxcclxuXHQgIGRhdGFJbmRleDogJ2FnZScsXHJcblx0ICBrZXk6ICdhZ2UnLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdGl0bGU6ICdTdGF0dXMnLFxyXG5cdCAgZGF0YUluZGV4OiAnYWRkcmVzcycsXHJcblx0ICBrZXk6ICdhZGRyZXNzJyxcclxuXHR9LFxyXG5cdHtcclxuXHQgIHRpdGxlOiAnQ3JlYXRlZCAnLFxyXG5cdCAgZGF0YUluZGV4OiAnYWRkcmVzcycsXHJcblx0ICBrZXk6ICdhZGRyZXNzJyxcclxuXHR9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJvd1NlbGVjdGlvbiA9IHtcclxuXHRvbkNoYW5nZTogKHNlbGVjdGVkUm93S2V5cywgc2VsZWN0ZWRSb3dzKSA9PiB7XHJcblx0ICBjb25zb2xlLmxvZyhgc2VsZWN0ZWRSb3dLZXlzOiAke3NlbGVjdGVkUm93S2V5c31gLCAnc2VsZWN0ZWRSb3dzOiAnLCBzZWxlY3RlZFJvd3MpO1xyXG5cdH0sXHJcblx0Z2V0Q2hlY2tib3hQcm9wczogKHJlY29yZCkgPT4gKHtcclxuXHQgIGRpc2FibGVkOiByZWNvcmQubmFtZSA9PT0gJ0Rpc2FibGVkIFVzZXInLFxyXG5cdCAgLy8gQ29sdW1uIGNvbmZpZ3VyYXRpb24gbm90IHRvIGJlIGNoZWNrZWRcclxuXHQgIG5hbWU6IHJlY29yZC5uYW1lLFxyXG5cdH0pLFxyXG4gIH07XHJcblxyXG5jb25zdCBVc2VyTWFuYWdtZW50ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGtleSkgPT4ge1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwifX0+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZ3gtZm9udC13ZWlnaHQtc2VtaS1ib2xkJyBzdHlsZT17e2ZvbnRTaXplOiBcIjMwcHhcIn19PlVzZXIgTWFuYWdlbWVudDwvaDE+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17eyAgICB3aWR0aDogXCIxNCVcIixtYXJnaW5Ub3A6IFwiMjBweFwifX0+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjRDNGMzZCXCIsIGJvcmRlcjogXCJub25lXCIsIHdpZHRoOiBcIjcyJVwifX0gaHRtbFR5cGU9XCJidXR0b25cIj5cclxuXHRcdFx0XHRcdFx0KyBOZXcgVXNlclxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHRcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIzXCIgb25DaGFuZ2U9e2NhbGxiYWNrfT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJMb3JlbVwiIGtleT1cIjFcIj48L1RhYlBhbmU+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiSXBzdW1cIiBrZXk9XCIyXCI+PC9UYWJQYW5lPlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIkRvbG9yXCIga2V5PVwiM1wiPjwvVGFiUGFuZT5cclxuXHRcdFx0PC9UYWJzPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLWJhcic+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTVweFwifX0gc3JjPScvaW1hZ2VzL3NlYXJjaC5zdmcnLz48c3BhbiBjbGFzc05hbWU9J2d4LW1sLTIgZ3gtdGV4dC1saWdodCc+U2VhcmNoPC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0gY2xhc3NOYW1lPVwiZ3gtbXItNFwiPlxyXG5cdFx0XHRcdFx0PGltZyBzdHlsZT17e3dpZHRoOiBcIjEzcHhcIn19IHNyYz0nL2ltYWdlcy9zaGFyZS5zdmcnLz48c3BhbiBjbGFzc05hbWU9J2d4LW1sLTEnPlNoYXJlPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0gY2xhc3NOYW1lPVwiZ3gtbXItNFwiPlxyXG5cdFx0XHRcdFx0PGltZyBzdHlsZT17e3dpZHRoOiBcIjE2cHhcIn19IHNyYz0nL2ltYWdlcy9zb3J0Ynkuc3ZnJy8+PHNwYW4gY2xhc3NOYW1lPSdneC1tbC0xJz5Tb3J0IEJ5PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxUYWJsZSAgXHJcblx0XHRcdFx0cm93U2VsZWN0aW9uPXt7IHR5cGU6ICdjaGVja2JveCcsIC4uLnJvd1NlbGVjdGlvbix9fSBcclxuXHRcdFx0XHRkYXRhU291cmNlPXtkYXRhU291cmNlfSBjb2x1bW5zPXtjb2x1bW5zfSBcclxuXHRcdFx0Lz47XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTWFuYWdtZW50OyJdLCJzb3VyY2VSb290IjoiIn0=