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
    }, __jsx("a", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MoreOutlined"], null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci1tYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbIlRhYlBhbmUiLCJUYWJzIiwiaXRlbXMiLCJrZXkiLCJsYWJlbCIsImRhdGFTb3VyY2UiLCJuYW1lIiwiYWdlIiwiYWRkcmVzcyIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsInJlbmRlciIsInJvd1NlbGVjdGlvbiIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRSb3dLZXlzIiwic2VsZWN0ZWRSb3dzIiwiY29uc29sZSIsImxvZyIsImdldENoZWNrYm94UHJvcHMiLCJyZWNvcmQiLCJkaXNhYmxlZCIsIlVzZXJNYW5hZ21lbnQiLCJjYWxsYmFjayIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDK0M7QUFDeEI7QUFDakQ7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5Q0FBSSxDQUFDRCxPQUFPO0FBRTVCLElBQU1FLEtBQUssR0FBRyxDQUNiO0VBQ0VDLEdBQUcsRUFBRSxHQUFHO0VBQ1JDLEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFRCxHQUFHLEVBQUUsR0FBRztFQUNSQyxLQUFLLEVBQUU7QUFDVCxDQUFDLENBQ0M7QUFFSCxJQUFNQyxVQUFVLEdBQUcsQ0FDbEI7RUFDRUYsR0FBRyxFQUFFLEdBQUc7RUFDUkcsSUFBSSxFQUFFLE1BQU07RUFDWkMsR0FBRyxFQUFFLEVBQUU7RUFDUEMsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxFQUNEO0VBQ0VMLEdBQUcsRUFBRSxHQUFHO0VBQ1JHLElBQUksRUFBRSxNQUFNO0VBQ1pDLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLE9BQU8sRUFBRTtBQUNYLENBQUMsQ0FDQztBQUVELElBQU1DLE9BQU8sR0FBRyxDQUNqQjtFQUNFQyxLQUFLLEVBQUUsWUFBWTtFQUNuQkMsU0FBUyxFQUFFLE1BQU07RUFDakJSLEdBQUcsRUFBRTtBQUNQLENBQUMsRUFDRDtFQUNFTyxLQUFLLEVBQUUsV0FBVztFQUNsQkMsU0FBUyxFQUFFLE1BQU07RUFDakJSLEdBQUcsRUFBRTtBQUNQLENBQUMsRUFDRDtFQUNFTyxLQUFLLEVBQUUsT0FBTztFQUNkQyxTQUFTLEVBQUUsS0FBSztFQUNoQlIsR0FBRyxFQUFFO0FBQ1AsQ0FBQyxFQUNEO0VBQ0VPLEtBQUssRUFBRSxRQUFRO0VBQ2ZDLFNBQVMsRUFBRSxTQUFTO0VBQ3BCUixHQUFHLEVBQUU7QUFDUCxDQUFDLEVBQ0Q7RUFDRU8sS0FBSyxFQUFFLFVBQVU7RUFDakJDLFNBQVMsRUFBRSxTQUFTO0VBQ3BCUixHQUFHLEVBQUU7QUFDUCxDQUFDLEVBQ0Q7RUFDT08sS0FBSyxFQUFFLFFBQVE7RUFDZkMsU0FBUyxFQUFFLFdBQVc7RUFDdEJSLEdBQUcsRUFBRSxXQUFXO0VBQ2hCUyxNQUFNLEVBQUU7SUFBQSxPQUNKLE1BQUMsNkNBQVE7TUFBQyxJQUFJLEVBQUU7UUFBRVYsS0FBSyxFQUFMQTtNQUFNO0lBQUUsR0FDeEIsaUJBQ0QsTUFBQyw4REFBWSxPQUFHLENBQ1gsQ0FDSztFQUFBO0FBRW5CLENBQUMsQ0FDRjtBQUVELElBQU1XLFlBQVksR0FBRztFQUN0QkMsUUFBUSxFQUFFLGtCQUFDQyxlQUFlLEVBQUVDLFlBQVksRUFBSztJQUMzQ0MsT0FBTyxDQUFDQyxHQUFHLDRCQUFxQkgsZUFBZSxHQUFJLGdCQUFnQixFQUFFQyxZQUFZLENBQUM7RUFDcEYsQ0FBQztFQUNERyxnQkFBZ0IsRUFBRSwwQkFBQ0MsTUFBTTtJQUFBLE9BQU07TUFDN0JDLFFBQVEsRUFBRUQsTUFBTSxDQUFDZCxJQUFJLEtBQUssZUFBZTtNQUN6QztNQUNBQSxJQUFJLEVBQUVjLE1BQU0sQ0FBQ2Q7SUFDZixDQUFDO0VBQUE7QUFDQSxDQUFDO0FBRUgsSUFBTWdCLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxHQUFTO0VBRXhCLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUlwQixHQUFHLEVBQUssQ0FDMUIsQ0FBQztFQUVELE9BQ0ksbUJBQ0w7SUFBSyxLQUFLLEVBQUU7TUFBQ3FCLE9BQU8sRUFBRSxNQUFNO01BQUVDLGNBQWMsRUFBRTtJQUFlO0VBQUUsR0FDOUQ7SUFBSSxTQUFTLEVBQUMsMEJBQTBCO0lBQUMsS0FBSyxFQUFFO01BQUNDLFFBQVEsRUFBRTtJQUFNO0VBQUUsR0FBQyxpQkFBZSxDQUFLLEVBQ3hGO0lBQUssS0FBSyxFQUFFO01BQUtDLEtBQUssRUFBRSxLQUFLO01BQUNDLFNBQVMsRUFBRTtJQUFNO0VBQUUsR0FDaEQsTUFBQywyQ0FBTTtJQUFDLFNBQVMsRUFBQyx1QkFBdUI7SUFBQyxLQUFLLEVBQUU7TUFBQ0MsVUFBVSxFQUFFLFNBQVM7TUFBRUMsTUFBTSxFQUFFLE1BQU07TUFBRUgsS0FBSyxFQUFFO0lBQUssQ0FBRTtJQUFDLFFBQVEsRUFBQztFQUFRLEdBQUMsWUFFMUgsQ0FBUyxDQUNKLENBQ0QsRUFDTixNQUFDLHlDQUFJO0lBQUMsZ0JBQWdCLEVBQUMsR0FBRztJQUFDLFFBQVEsRUFBRUo7RUFBUyxHQUM3QyxNQUFDLE9BQU87SUFBQyxHQUFHLEVBQUMsT0FBTztJQUFDLEdBQUcsRUFBQztFQUFHLEVBQVcsRUFDdkMsTUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFBQyxHQUFHLEVBQUM7RUFBRyxFQUFXLEVBQ3ZDLE1BQUMsT0FBTztJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDO0VBQUcsRUFBVyxDQUNqQyxFQUNQO0lBQUssU0FBUyxFQUFDO0VBQVksR0FDZDtJQUFLLEtBQUssRUFBRTtNQUFDSSxLQUFLLEVBQUU7SUFBTSxDQUFFO0lBQUMsR0FBRyxFQUFDO0VBQW9CLEVBQUU7SUFBTSxTQUFTLEVBQUM7RUFBdUIsR0FBQyxRQUFNLENBQU8sRUFDeEg7SUFBSyxLQUFLLEVBQUU7TUFBQyxTQUFPO0lBQU8sQ0FBRTtJQUFDLFNBQVMsRUFBQztFQUFTLEdBQ2hEO0lBQUssS0FBSyxFQUFFO01BQUNBLEtBQUssRUFBRTtJQUFNLENBQUU7SUFBQyxHQUFHLEVBQUM7RUFBbUIsRUFBRTtJQUFNLFNBQVMsRUFBQztFQUFTLEdBQUMsT0FBSyxDQUFPLENBQ3ZGLEVBQ047SUFBSyxLQUFLLEVBQUU7TUFBQyxTQUFPO0lBQU8sQ0FBRTtJQUFDLFNBQVMsRUFBQztFQUFTLEdBQ2hEO0lBQUssS0FBSyxFQUFFO01BQUNBLEtBQUssRUFBRTtJQUFNLENBQUU7SUFBQyxHQUFHLEVBQUM7RUFBb0IsRUFBRTtJQUFNLFNBQVMsRUFBQztFQUFTLEdBQUMsU0FBTyxDQUFPLENBQzFGLENBQ0QsRUFFTixNQUFDLDBDQUFLO0lBQ0wsWUFBWTtNQUFJSSxJQUFJLEVBQUU7SUFBVSxHQUFLbEIsWUFBWSxDQUFHO0lBQ3BELFVBQVUsRUFBRVIsVUFBVztJQUFDLE9BQU8sRUFBRUk7RUFBUSxFQUN4QyxDQUNTO0FBRWQsQ0FBQztBQUFBLEtBcENLYSxhQUFhO0FBc0NKQSw0RUFBYSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyLW1hbmFnZW1lbnQuMTVjNmRkMDRhOThlYzkzMTMwMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29sLCBUYWJzLCBCdXR0b24sIERyb3Bkb3duLCBEaXZpZGVyLCBSYWRpbywgVGFibGUgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBNb3JlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbi8vIGltcG9ydCB0eXBlIHsgQ29sdW1uc1R5cGUgfSBmcm9tICdhbnRkL2VzL3RhYmxlJztcclxuXHJcbmNvbnN0IFRhYlBhbmUgPSBUYWJzLlRhYlBhbmU7XHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxuXHR7XHJcblx0ICBrZXk6ICcxJyxcclxuXHQgIGxhYmVsOiAnQWN0aW9uIDEnLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAga2V5OiAnMicsXHJcblx0ICBsYWJlbDogJ0FjdGlvbiAyJyxcclxuXHR9LFxyXG4gIF07XHJcblxyXG5jb25zdCBkYXRhU291cmNlID0gW1xyXG5cdHtcclxuXHQgIGtleTogJzEnLFxyXG5cdCAgbmFtZTogJ01pa2UnLFxyXG5cdCAgYWdlOiAzMixcclxuXHQgIGFkZHJlc3M6ICcxMCBEb3duaW5nIFN0cmVldCcsXHJcblx0fSxcclxuXHR7XHJcblx0ICBrZXk6ICcyJyxcclxuXHQgIG5hbWU6ICdKb2huJyxcclxuXHQgIGFnZTogNDIsXHJcblx0ICBhZGRyZXNzOiAnMTAgRG93bmluZyBTdHJlZXQnLFxyXG5cdH0sXHJcbiAgXTtcclxuICBcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG5cdHtcclxuXHQgIHRpdGxlOiAnRmlyc3QgTmFtZScsXHJcblx0ICBkYXRhSW5kZXg6ICduYW1lJyxcclxuXHQgIGtleTogJ25hbWUnLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdGl0bGU6ICdMYXN0IE5hbWUnLFxyXG5cdCAgZGF0YUluZGV4OiAnbmFtZScsXHJcblx0ICBrZXk6ICduYW1lJyxcclxuXHR9LFxyXG5cdHtcclxuXHQgIHRpdGxlOiAnRW1haWwnLFxyXG5cdCAgZGF0YUluZGV4OiAnYWdlJyxcclxuXHQgIGtleTogJ2FnZScsXHJcblx0fSxcclxuXHR7XHJcblx0ICB0aXRsZTogJ1N0YXR1cycsXHJcblx0ICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcclxuXHQgIGtleTogJ2FkZHJlc3MnLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdGl0bGU6ICdDcmVhdGVkICcsXHJcblx0ICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcclxuXHQgIGtleTogJ2FkZHJlc3MnLFxyXG5cdH0sXHJcblx0e1xyXG4gICAgICAgIHRpdGxlOiAnQWN0aW9uJyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdvcGVyYXRpb24nLFxyXG4gICAgICAgIGtleTogJ29wZXJhdGlvbicsXHJcbiAgICAgICAgcmVuZGVyOiAoKSA9PiAoXHJcbiAgICAgICAgICAgIDxEcm9wZG93biBtZW51PXt7IGl0ZW1zIH19PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICBcdDxNb3JlT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgKSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgcm93U2VsZWN0aW9uID0ge1xyXG5cdG9uQ2hhbmdlOiAoc2VsZWN0ZWRSb3dLZXlzLCBzZWxlY3RlZFJvd3MpID0+IHtcclxuXHQgIGNvbnNvbGUubG9nKGBzZWxlY3RlZFJvd0tleXM6ICR7c2VsZWN0ZWRSb3dLZXlzfWAsICdzZWxlY3RlZFJvd3M6ICcsIHNlbGVjdGVkUm93cyk7XHJcblx0fSxcclxuXHRnZXRDaGVja2JveFByb3BzOiAocmVjb3JkKSA9PiAoe1xyXG5cdCAgZGlzYWJsZWQ6IHJlY29yZC5uYW1lID09PSAnRGlzYWJsZWQgVXNlcicsXHJcblx0ICAvLyBDb2x1bW4gY29uZmlndXJhdGlvbiBub3QgdG8gYmUgY2hlY2tlZFxyXG5cdCAgbmFtZTogcmVjb3JkLm5hbWUsXHJcblx0fSksXHJcbiAgfTtcclxuXHJcbmNvbnN0IFVzZXJNYW5hZ21lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2FsbGJhY2sgPSAoa2V5KSA9PiB7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQnIHN0eWxlPXt7Zm9udFNpemU6IFwiMzBweFwifX0+VXNlciBNYW5hZ2VtZW50PC9oMT5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ICAgIHdpZHRoOiBcIjE0JVwiLG1hcmdpblRvcDogXCIyMHB4XCJ9fT5cclxuXHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiZ3gtbWItMCBkZXNpZ24tYnV0dG9uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcIiNEM0YzNkJcIiwgYm9yZGVyOiBcIm5vbmVcIiwgd2lkdGg6IFwiNzIlXCJ9fSBodG1sVHlwZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQrIE5ldyBVc2VyXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cIjNcIiBvbkNoYW5nZT17Y2FsbGJhY2t9PlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIkxvcmVtXCIga2V5PVwiMVwiPjwvVGFiUGFuZT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJJcHN1bVwiIGtleT1cIjJcIj48L1RhYlBhbmU+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiRG9sb3JcIiBrZXk9XCIzXCI+PC9UYWJQYW5lPlxyXG5cdFx0XHQ8L1RhYnM+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gtYmFyJz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxNXB4XCJ9fSBzcmM9Jy9pbWFnZXMvc2VhcmNoLnN2ZycvPjxzcGFuIGNsYXNzTmFtZT0nZ3gtbWwtMiBneC10ZXh0LWxpZ2h0Jz5TZWFyY2g8L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fSBjbGFzc05hbWU9XCJneC1tci00XCI+XHJcblx0XHRcdFx0XHQ8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTNweFwifX0gc3JjPScvaW1hZ2VzL3NoYXJlLnN2ZycvPjxzcGFuIGNsYXNzTmFtZT0nZ3gtbWwtMSc+U2hhcmU8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fSBjbGFzc05hbWU9XCJneC1tci00XCI+XHJcblx0XHRcdFx0XHQ8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTZweFwifX0gc3JjPScvaW1hZ2VzL3NvcnRieS5zdmcnLz48c3BhbiBjbGFzc05hbWU9J2d4LW1sLTEnPlNvcnQgQnk8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PFRhYmxlICBcclxuXHRcdFx0XHRyb3dTZWxlY3Rpb249e3sgdHlwZTogJ2NoZWNrYm94JywgLi4ucm93U2VsZWN0aW9uLH19IFxyXG5cdFx0XHRcdGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IGNvbHVtbnM9e2NvbHVtbnN9IFxyXG5cdFx0XHQvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlck1hbmFnbWVudDsiXSwic291cmNlUm9vdCI6IiJ9