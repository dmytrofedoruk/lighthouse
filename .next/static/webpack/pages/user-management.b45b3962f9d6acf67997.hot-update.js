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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



// import type { ColumnsType } from 'antd/es/table';

var TabPane = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane;
var items = [{
  key: '1',
  label: 'Action 1'
}, {
  key: '2',
  label: 'Action 2'
}];
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
}, {
  title: 'Action',
  dataIndex: 'operation',
  key: 'operation',
  render: function render() {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      menu: {
        items: items
      }
    }, __jsx("a", {
      style: {
        color: "black"
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MoreOutlined"], {
      style: {
        color: "black"
      }
    })));
  }
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
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci1tYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbIlRhYlBhbmUiLCJUYWJzIiwiaXRlbXMiLCJrZXkiLCJsYWJlbCIsImRhdGFTb3VyY2UiLCJuYW1lIiwiYWdlIiwiYWRkcmVzcyIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsInJlbmRlciIsImNvbG9yIiwicm93U2VsZWN0aW9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZFJvd0tleXMiLCJzZWxlY3RlZFJvd3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImRpc2FibGVkIiwiVXNlck1hbmFnbWVudCIsImNhbGxiYWNrIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMrQztBQUN4QjtBQUNqRDs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlDQUFJLENBQUNELE9BQU87QUFFNUIsSUFBTUUsS0FBSyxHQUFHLENBQ2I7RUFDRUMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VELEdBQUcsRUFBRSxHQUFHO0VBQ1JDLEtBQUssRUFBRTtBQUNULENBQUMsQ0FDQztBQUVILElBQU1DLFVBQVUsR0FBRyxDQUNsQjtFQUNFRixHQUFHLEVBQUUsR0FBRztFQUNSRyxJQUFJLEVBQUUsTUFBTTtFQUNaQyxHQUFHLEVBQUUsRUFBRTtFQUNQQyxPQUFPLEVBQUU7QUFDWCxDQUFDLEVBQ0Q7RUFDRUwsR0FBRyxFQUFFLEdBQUc7RUFDUkcsSUFBSSxFQUFFLE1BQU07RUFDWkMsR0FBRyxFQUFFLEVBQUU7RUFDUEMsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxDQUNDO0FBRUQsSUFBTUMsT0FBTyxHQUFHLENBQ2pCO0VB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O0VBQXVCLEdBQUMsUUFBTSxDQUFPLEVBQ3hIO0lBQUssS0FBSyxFQUFFO01BQUMsU0FBTztJQUFPLENBQUU7SUFBQyxTQUFTLEVBQUM7RUFBUyxHQUNoRDtJQUFLLEtBQUssRUFBRTtNQUFDQSxLQUFLLEVBQUU7SUFBTSxDQUFFO0lBQUMsR0FBRyxFQUFDO0VBQW1CLEVBQUU7SUFBTSxTQUFTLEVBQUM7RUFBUyxHQUFDLE9BQUssQ0FBTyxDQUN2RixFQUNOO0lBQUssS0FBSyxFQUFFO01BQUMsU0FBTztJQUFPLENBQUU7SUFBQyxTQUFTLEVBQUM7RUFBUyxHQUNoRDtJQUFLLEtBQUssRUFBRTtNQUFDQSxLQUFLLEVBQUU7SUFBTSxDQUFFO0lBQUMsR0FBRyxFQUFDO0VBQW9CLEVBQUU7SUFBTSxTQUFTLEVBQUM7RUFBUyxHQUFDLFNBQU8sQ0FBTyxDQUMxRixDQUNELEVBRU4sTUFBQywwQ0FBSztJQUNMLFlBQVk7TUFBSUksSUFBSSxFQUFFO0lBQVUsR0FBS2xCLFlBQVksQ0FBRztJQUNwRCxVQUFVLEVBQUVULFVBQVc7SUFBQyxPQUFPLEVBQUVJO0VBQVEsRUFDeEMsQ0FDUztBQUVkLENBQUM7QUFBQSxLQXBDS2MsYUFBYTtBQXNDSkEsNEVBQWEsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci1tYW5hZ2VtZW50LmI0NWIzOTYyZjlkNmFjZjY3OTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbCwgVGFicywgQnV0dG9uLCBEcm9wZG93biwgRGl2aWRlciwgUmFkaW8sIFRhYmxlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgTW9yZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG4vLyBpbXBvcnQgdHlwZSB7IENvbHVtbnNUeXBlIH0gZnJvbSAnYW50ZC9lcy90YWJsZSc7XHJcblxyXG5jb25zdCBUYWJQYW5lID0gVGFicy5UYWJQYW5lO1xyXG5cclxuY29uc3QgaXRlbXMgPSBbXHJcblx0e1xyXG5cdCAga2V5OiAnMScsXHJcblx0ICBsYWJlbDogJ0FjdGlvbiAxJyxcclxuXHR9LFxyXG5cdHtcclxuXHQgIGtleTogJzInLFxyXG5cdCAgbGFiZWw6ICdBY3Rpb24gMicsXHJcblx0fSxcclxuICBdO1xyXG5cclxuY29uc3QgZGF0YVNvdXJjZSA9IFtcclxuXHR7XHJcblx0ICBrZXk6ICcxJyxcclxuXHQgIG5hbWU6ICdNaWtlJyxcclxuXHQgIGFnZTogMzIsXHJcblx0ICBhZGRyZXNzOiAnMTAgRG93bmluZyBTdHJlZXQnLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAga2V5OiAnMicsXHJcblx0ICBuYW1lOiAnSm9obicsXHJcblx0ICBhZ2U6IDQyLFxyXG5cdCAgYWRkcmVzczogJzEwIERvd25pbmcgU3RyZWV0JyxcclxuXHR9LFxyXG4gIF07XHJcbiAgXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuXHR7XHJcblx0ICB0aXRsZTogJ0ZpcnN0IE5hbWUnLFxyXG5cdCAgZGF0YUluZGV4OiAnbmFtZScsXHJcblx0ICBrZXk6ICduYW1lJyxcclxuXHR9LFxyXG5cdHtcclxuXHQgIHRpdGxlOiAnTGFzdCBOYW1lJyxcclxuXHQgIGRhdGFJbmRleDogJ25hbWUnLFxyXG5cdCAga2V5OiAnbmFtZScsXHJcblx0fSxcclxuXHR7XHJcblx0ICB0aXRsZTogJ0VtYWlsJyxcclxuXHQgIGRhdGFJbmRleDogJ2FnZScsXHJcblx0ICBrZXk6ICdhZ2UnLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdGl0bGU6ICdTdGF0dXMnLFxyXG5cdCAgZGF0YUluZGV4OiAnYWRkcmVzcycsXHJcblx0ICBrZXk6ICdhZGRyZXNzJyxcclxuXHR9LFxyXG5cdHtcclxuXHQgIHRpdGxlOiAnQ3JlYXRlZCAnLFxyXG5cdCAgZGF0YUluZGV4OiAnYWRkcmVzcycsXHJcblx0ICBrZXk6ICdhZGRyZXNzJyxcclxuXHR9LFxyXG5cdHtcclxuICAgICAgICB0aXRsZTogJ0FjdGlvbicsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnb3BlcmF0aW9uJyxcclxuICAgICAgICBrZXk6ICdvcGVyYXRpb24nLFxyXG4gICAgICAgIHJlbmRlcjogKCkgPT4gKFxyXG4gICAgICAgICAgICA8RHJvcGRvd24gbWVudT17eyBpdGVtcyB9fT5cclxuICAgICAgICAgICAgICA8YSBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCJ9fT5cclxuICAgICAgICAgICAgXHQ8TW9yZU91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiYmxhY2tcIn19Lz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgKSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgcm93U2VsZWN0aW9uID0ge1xyXG5cdG9uQ2hhbmdlOiAoc2VsZWN0ZWRSb3dLZXlzLCBzZWxlY3RlZFJvd3MpID0+IHtcclxuXHQgIGNvbnNvbGUubG9nKGBzZWxlY3RlZFJvd0tleXM6ICR7c2VsZWN0ZWRSb3dLZXlzfWAsICdzZWxlY3RlZFJvd3M6ICcsIHNlbGVjdGVkUm93cyk7XHJcblx0fSxcclxuXHRnZXRDaGVja2JveFByb3BzOiAocmVjb3JkKSA9PiAoe1xyXG5cdCAgZGlzYWJsZWQ6IHJlY29yZC5uYW1lID09PSAnRGlzYWJsZWQgVXNlcicsXHJcblx0ICAvLyBDb2x1bW4gY29uZmlndXJhdGlvbiBub3QgdG8gYmUgY2hlY2tlZFxyXG5cdCAgbmFtZTogcmVjb3JkLm5hbWUsXHJcblx0fSksXHJcbiAgfTtcclxuXHJcbmNvbnN0IFVzZXJNYW5hZ21lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2FsbGJhY2sgPSAoa2V5KSA9PiB7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQnIHN0eWxlPXt7Zm9udFNpemU6IFwiMzBweFwifX0+VXNlciBNYW5hZ2VtZW50PC9oMT5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ICAgIHdpZHRoOiBcIjE0JVwiLG1hcmdpblRvcDogXCIyMHB4XCJ9fT5cclxuXHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiZ3gtbWItMCBkZXNpZ24tYnV0dG9uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcIiNEM0YzNkJcIiwgYm9yZGVyOiBcIm5vbmVcIiwgd2lkdGg6IFwiNzIlXCJ9fSBodG1sVHlwZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQrIE5ldyBVc2VyXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cIjNcIiBvbkNoYW5nZT17Y2FsbGJhY2t9PlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIkxvcmVtXCIga2V5PVwiMVwiPjwvVGFiUGFuZT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJJcHN1bVwiIGtleT1cIjJcIj48L1RhYlBhbmU+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiRG9sb3JcIiBrZXk9XCIzXCI+PC9UYWJQYW5lPlxyXG5cdFx0XHQ8L1RhYnM+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gtYmFyJz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxNXB4XCJ9fSBzcmM9Jy9pbWFnZXMvc2VhcmNoLnN2ZycvPjxzcGFuIGNsYXNzTmFtZT0nZ3gtbWwtMiBneC10ZXh0LWxpZ2h0Jz5TZWFyY2g8L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fSBjbGFzc05hbWU9XCJneC1tci00XCI+XHJcblx0XHRcdFx0XHQ8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTNweFwifX0gc3JjPScvaW1hZ2VzL3NoYXJlLnN2ZycvPjxzcGFuIGNsYXNzTmFtZT0nZ3gtbWwtMSc+U2hhcmU8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fSBjbGFzc05hbWU9XCJneC1tci00XCI+XHJcblx0XHRcdFx0XHQ8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTZweFwifX0gc3JjPScvaW1hZ2VzL3NvcnRieS5zdmcnLz48c3BhbiBjbGFzc05hbWU9J2d4LW1sLTEnPlNvcnQgQnk8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PFRhYmxlICBcclxuXHRcdFx0XHRyb3dTZWxlY3Rpb249e3sgdHlwZTogJ2NoZWNrYm94JywgLi4ucm93U2VsZWN0aW9uLH19IFxyXG5cdFx0XHRcdGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IGNvbHVtbnM9e2NvbHVtbnN9IFxyXG5cdFx0XHQvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlck1hbmFnbWVudDsiXSwic291cmNlUm9vdCI6IiJ9