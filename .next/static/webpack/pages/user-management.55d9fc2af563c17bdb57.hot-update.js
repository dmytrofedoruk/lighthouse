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
function UserManagment() {
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
    title: 'Select',
    dataIndex: 'name',
    key: 'name'
  }, {
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
      type: 'selectionType'
    }, rowSelection),
    dataSource: dataSource,
    columns: columns
  }), ";");
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci1tYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbIlRhYlBhbmUiLCJUYWJzIiwiVXNlck1hbmFnbWVudCIsImRhdGFTb3VyY2UiLCJrZXkiLCJuYW1lIiwiYWdlIiwiYWRkcmVzcyIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImNhbGxiYWNrIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJ0eXBlIiwicm93U2VsZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzBDO0FBQ3BFOztBQUVBLElBQU1BLE9BQU8sR0FBR0MseUNBQUksQ0FBQ0QsT0FBTztBQUU1QixTQUFTRSxhQUFhLEdBQUc7RUFFeEIsSUFBTUMsVUFBVSxHQUFHLENBQ2xCO0lBQ0VDLEdBQUcsRUFBRSxHQUFHO0lBQ1JDLElBQUksRUFBRSxNQUFNO0lBQ1pDLEdBQUcsRUFBRSxFQUFFO0lBQ1BDLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFDRDtJQUNFSCxHQUFHLEVBQUUsR0FBRztJQUNSQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxHQUFHLEVBQUUsRUFBRTtJQUNQQyxPQUFPLEVBQUU7RUFDWCxDQUFDLENBQ0M7RUFFRCxJQUFNQyxPQUFPLEdBQUcsQ0FDakI7SUFDQ0MsS0FBSyxFQUFFLFFBQVE7SUFDZkMsU0FBUyxFQUFFLE1BQU07SUFDakJOLEdBQUcsRUFBRTtFQUNKLENBQUMsRUFDSDtJQUNFSyxLQUFLLEVBQUUsWUFBWTtJQUNuQkMsU0FBUyxFQUFFLE1BQU07SUFDakJOLEdBQUcsRUFBRTtFQUNQLENBQUMsRUFDRDtJQUNFSyxLQUFLLEVBQUUsV0FBVztJQUNsQkMsU0FBUyxFQUFFLE1BQU07SUFDakJOLEdBQUcsRUFBRTtFQUNQLENBQUMsRUFDRDtJQUNFSyxLQUFLLEVBQUUsT0FBTztJQUNkQyxTQUFTLEVBQUUsS0FBSztJQUNoQk4sR0FBRyxFQUFFO0VBQ1AsQ0FBQyxFQUNEO0lBQ0VLLEtBQUssRUFBRSxRQUFRO0lBQ2ZDLFNBQVMsRUFBRSxTQUFTO0lBQ3BCTixHQUFHLEVBQUU7RUFDUCxDQUFDLEVBQ0Q7SUFDRUssS0FBSyxFQUFFLFVBQVU7SUFDakJDLFNBQVMsRUFBRSxTQUFTO0lBQ3BCTixHQUFHLEVBQUU7RUFDUCxDQUFDLENBQ0M7RUFFQSxJQUFNTyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxDQUFJUCxHQUFHLEVBQUssQ0FDMUIsQ0FBQztFQUVELE9BQ0ksbUJBQ0w7SUFBSyxLQUFLLEVBQUU7TUFBQ1EsT0FBTyxFQUFFLE1BQU07TUFBRUMsY0FBYyxFQUFFO0lBQWU7RUFBRSxHQUM5RDtJQUFJLFNBQVMsRUFBQywwQkFBMEI7SUFBQyxLQUFLLEVBQUU7TUFBQ0MsUUFBUSxFQUFFO0lBQU07RUFBRSxHQUFDLGlCQUFlLENBQUssRUFDeEY7SUFBSyxLQUFLLEVBQUU7TUFBS0MsS0FBSyxFQUFFLEtBQUs7TUFBQ0MsU0FBUyxFQUFFO0lBQU07RUFBRSxHQUNoRCxNQUFDLDJDQUFNO0lBQUMsU0FBUyxFQUFDLHVCQUF1QjtJQUFDLEtBQUssRUFBRTtNQUFDQyxVQUFVLEVBQUUsU0FBUztNQUFFQyxNQUFNLEVBQUUsTUFBTTtNQUFFSCxLQUFLLEVBQUU7SUFBSyxDQUFFO0lBQUMsUUFBUSxFQUFDO0VBQVEsR0FBQyxZQUUxSCxDQUFTLENBQ0osQ0FDRCxFQUNOLE1BQUMseUNBQUk7SUFBQyxnQkFBZ0IsRUFBQyxHQUFHO0lBQUMsUUFBUSxFQUFFSjtFQUFTLEdBQzdDLE1BQUMsT0FBTztJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDO0VBQUcsRUFBVyxFQUN2QyxNQUFDLE9BQU87SUFBQyxHQUFHLEVBQUMsT0FBTztJQUFDLEdBQUcsRUFBQztFQUFHLEVBQVcsRUFDdkMsTUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFBQyxHQUFHLEVBQUM7RUFBRyxFQUFXLENBQ2pDLEVBQ1A7SUFBSyxTQUFTLEVBQUM7RUFBWSxHQUNkO0lBQUssS0FBSyxFQUFFO01BQUNJLEtBQUssRUFBRTtJQUFNLENBQUU7SUFBQyxHQUFHLEVBQUM7RUFBb0IsRUFBRTtJQUFNLFNBQVMsRUFBQztFQUF1QixHQUFDLFFBQU0sQ0FBTyxFQUN4SDtJQUFLLEtBQUssRUFBRTtNQUFDLFNBQU87SUFBTyxDQUFFO0lBQUMsU0FBUyxFQUFDO0VBQVMsR0FDaEQ7SUFBSyxLQUFLLEVBQUU7TUFBQ0EsS0FBSyxFQUFFO0lBQU0sQ0FBRTtJQUFDLEdBQUcsRUFBQztFQUFtQixFQUFFO0lBQU0sU0FBUyxFQUFDO0VBQVMsR0FBQyxPQUFLLENBQU8sQ0FDdkYsRUFDTjtJQUFLLEtBQUssRUFBRTtNQUFDLFNBQU87SUFBTyxDQUFFO0lBQUMsU0FBUyxFQUFDO0VBQVMsR0FDaEQ7SUFBSyxLQUFLLEVBQUU7TUFBQ0EsS0FBSyxFQUFFO0lBQU0sQ0FBRTtJQUFDLEdBQUcsRUFBQztFQUFvQixFQUFFO0lBQU0sU0FBUyxFQUFDO0VBQVMsR0FBQyxTQUFPLENBQU8sQ0FDMUYsQ0FDRCxFQUVOLE1BQUMsMENBQUs7SUFDTCxZQUFZO01BQUlJLElBQUksRUFBRTtJQUFlLEdBQUtDLFlBQVksQ0FBRztJQUN6RCxVQUFVLEVBQUVqQixVQUFXO0lBQUMsT0FBTyxFQUFFSztFQUFRLEVBQ3hDLEtBQ0csQ0FBTTtBQUVkO0FBQUMsS0FwRlFOLGFBQWE7QUFzRlBBLDRFQUFhLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXItbWFuYWdlbWVudC41NWQ5ZmMyYWY1NjNjMTdiZGI1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb2wsIFRhYnMsIEJ1dHRvbiwgUm93LCBEaXZpZGVyLCBSYWRpbywgVGFibGUgfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgdHlwZSB7IENvbHVtbnNUeXBlIH0gZnJvbSAnYW50ZC9lcy90YWJsZSc7XHJcblxyXG5jb25zdCBUYWJQYW5lID0gVGFicy5UYWJQYW5lO1xyXG5cclxuZnVuY3Rpb24gVXNlck1hbmFnbWVudCgpIHtcclxuXHJcblx0Y29uc3QgZGF0YVNvdXJjZSA9IFtcclxuXHRcdHtcclxuXHRcdCAga2V5OiAnMScsXHJcblx0XHQgIG5hbWU6ICdNaWtlJyxcclxuXHRcdCAgYWdlOiAzMixcclxuXHRcdCAgYWRkcmVzczogJzEwIERvd25pbmcgU3RyZWV0JyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIGtleTogJzInLFxyXG5cdFx0ICBuYW1lOiAnSm9obicsXHJcblx0XHQgIGFnZTogNDIsXHJcblx0XHQgIGFkZHJlc3M6ICcxMCBEb3duaW5nIFN0cmVldCcsXHJcblx0XHR9LFxyXG5cdCAgXTtcclxuXHQgIFxyXG5cdCAgY29uc3QgY29sdW1ucyA9IFtcclxuXHRcdHtcclxuXHRcdFx0dGl0bGU6ICdTZWxlY3QnLFxyXG5cdFx0XHRkYXRhSW5kZXg6ICduYW1lJyxcclxuXHRcdFx0a2V5OiAnbmFtZScsXHJcblx0XHQgIH0sXHJcblx0XHR7XHJcblx0XHQgIHRpdGxlOiAnRmlyc3QgTmFtZScsXHJcblx0XHQgIGRhdGFJbmRleDogJ25hbWUnLFxyXG5cdFx0ICBrZXk6ICduYW1lJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIHRpdGxlOiAnTGFzdCBOYW1lJyxcclxuXHRcdCAgZGF0YUluZGV4OiAnbmFtZScsXHJcblx0XHQgIGtleTogJ25hbWUnLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgdGl0bGU6ICdFbWFpbCcsXHJcblx0XHQgIGRhdGFJbmRleDogJ2FnZScsXHJcblx0XHQgIGtleTogJ2FnZScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICB0aXRsZTogJ1N0YXR1cycsXHJcblx0XHQgIGRhdGFJbmRleDogJ2FkZHJlc3MnLFxyXG5cdFx0ICBrZXk6ICdhZGRyZXNzJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIHRpdGxlOiAnQ3JlYXRlZCAnLFxyXG5cdFx0ICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcclxuXHRcdCAga2V5OiAnYWRkcmVzcycsXHJcblx0XHR9LFxyXG5cdCAgXTtcclxuXHJcbiAgICBjb25zdCBjYWxsYmFjayA9IChrZXkpID0+IHtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIn19PlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCcgc3R5bGU9e3tmb250U2l6ZTogXCIzMHB4XCJ9fT5Vc2VyIE1hbmFnZW1lbnQ8L2gxPlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3sgICAgd2lkdGg6IFwiMTQlXCIsbWFyZ2luVG9wOiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwiLCBib3JkZXI6IFwibm9uZVwiLCB3aWR0aDogXCI3MiVcIn19IGh0bWxUeXBlPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdCsgTmV3IFVzZXJcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiM1wiIG9uQ2hhbmdlPXtjYWxsYmFja30+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiTG9yZW1cIiBrZXk9XCIxXCI+PC9UYWJQYW5lPlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIklwc3VtXCIga2V5PVwiMlwiPjwvVGFiUGFuZT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJEb2xvclwiIGtleT1cIjNcIj48L1RhYlBhbmU+XHJcblx0XHRcdDwvVGFicz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlYXJjaC1iYXInPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiBcIjE1cHhcIn19IHNyYz0nL2ltYWdlcy9zZWFyY2guc3ZnJy8+PHNwYW4gY2xhc3NOYW1lPSdneC1tbC0yIGd4LXRleHQtbGlnaHQnPlNlYXJjaDwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19IGNsYXNzTmFtZT1cImd4LW1yLTRcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxM3B4XCJ9fSBzcmM9Jy9pbWFnZXMvc2hhcmUuc3ZnJy8+PHNwYW4gY2xhc3NOYW1lPSdneC1tbC0xJz5TaGFyZTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19IGNsYXNzTmFtZT1cImd4LW1yLTRcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxNnB4XCJ9fSBzcmM9Jy9pbWFnZXMvc29ydGJ5LnN2ZycvPjxzcGFuIGNsYXNzTmFtZT0nZ3gtbWwtMSc+U29ydCBCeTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8VGFibGUgIFxyXG5cdFx0XHRcdHJvd1NlbGVjdGlvbj17eyB0eXBlOiAnc2VsZWN0aW9uVHlwZScsIC4uLnJvd1NlbGVjdGlvbix9fSBcclxuXHRcdFx0XHRkYXRhU291cmNlPXtkYXRhU291cmNlfSBjb2x1bW5zPXtjb2x1bW5zfSBcclxuXHRcdFx0Lz47XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTWFuYWdtZW50OyJdLCJzb3VyY2VSb290IjoiIn0=