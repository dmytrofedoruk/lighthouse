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
}, {
  title: 'Action',
  dataIndex: 'operation',
  key: 'operation',
  render: function render() {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      menu: {
        items: items
      }
    }, __jsx("a", null, "More ", __jsx(DownOutlined, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci1tYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbIlRhYlBhbmUiLCJUYWJzIiwiZGF0YVNvdXJjZSIsImtleSIsIm5hbWUiLCJhZ2UiLCJhZGRyZXNzIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4IiwicmVuZGVyIiwiaXRlbXMiLCJyb3dTZWxlY3Rpb24iLCJvbkNoYW5nZSIsInNlbGVjdGVkUm93S2V5cyIsInNlbGVjdGVkUm93cyIsImNvbnNvbGUiLCJsb2ciLCJnZXRDaGVja2JveFByb3BzIiwicmVjb3JkIiwiZGlzYWJsZWQiLCJVc2VyTWFuYWdtZW50IiwiY2FsbGJhY2siLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsIndpZHRoIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZCIsImJvcmRlciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDK0M7QUFDekU7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5Q0FBSSxDQUFDRCxPQUFPO0FBRTVCLElBQU1FLFVBQVUsR0FBRyxDQUNsQjtFQUNFQyxHQUFHLEVBQUUsR0FBRztFQUNSQyxJQUFJLEVBQUUsTUFBTTtFQUNaQyxHQUFHLEVBQUUsRUFBRTtFQUNQQyxPQUFPLEVBQUU7QUFDWCxDQUFDLEVBQ0Q7RUFDRUgsR0FBRyxFQUFFLEdBQUc7RUFDUkMsSUFBSSxFQUFFLE1BQU07RUFDWkMsR0FBRyxFQUFFLEVBQUU7RUFDUEMsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxDQUNDO0FBRUQsSUFBTUMsT0FBTyxHQUFHLENBQ2pCO0VBQ0VDLEtBQUssRUFBRSxZQUFZO0VBQ25CQyxTQUFTLEVBQUUsTUFBTTtFQUNqQk4sR0FBRyxFQUFFO0FBQ1AsQ0FBQyxFQUNEO0VBQ0VLLEtBQUssRUFBRSxXQUFXO0VBQ2xCQyxTQUFTLEVBQUUsTUFBTTtFQUNqQk4sR0FBRyxFQUFFO0FBQ1AsQ0FBQyxFQUNEO0VBQ0VL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LENBQUU7SUFBQyxTQUFTLEVBQUM7RUFBUyxHQUNoRDtJQUFLLEtBQUssRUFBRTtNQUFDQSxLQUFLLEVBQUU7SUFBTSxDQUFFO0lBQUMsR0FBRyxFQUFDO0VBQW9CLEVBQUU7SUFBTSxTQUFTLEVBQUM7RUFBUyxHQUFDLFNBQU8sQ0FBTyxDQUMxRixDQUNELEVBRU4sTUFBQywwQ0FBSztJQUNMLFlBQVk7TUFBSUksSUFBSSxFQUFFO0lBQVUsR0FBS2xCLFlBQVksQ0FBRztJQUNwRCxVQUFVLEVBQUVWLFVBQVc7SUFBQyxPQUFPLEVBQUVLO0VBQVEsRUFDeEMsS0FDRyxDQUFNO0FBRWQsQ0FBQztBQUFBLEtBcENLYyxhQUFhO0FBc0NKQSw0RUFBYSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyLW1hbmFnZW1lbnQuYjhiZjExNTA5ZjkwN2JhYzkyMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29sLCBUYWJzLCBCdXR0b24sIERyb3Bkb3duLCBEaXZpZGVyLCBSYWRpbywgVGFibGUgfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgdHlwZSB7IENvbHVtbnNUeXBlIH0gZnJvbSAnYW50ZC9lcy90YWJsZSc7XHJcblxyXG5jb25zdCBUYWJQYW5lID0gVGFicy5UYWJQYW5lO1xyXG5cclxuY29uc3QgZGF0YVNvdXJjZSA9IFtcclxuXHR7XHJcblx0ICBrZXk6ICcxJyxcclxuXHQgIG5hbWU6ICdNaWtlJyxcclxuXHQgIGFnZTogMzIsXHJcblx0ICBhZGRyZXNzOiAnMTAgRG93bmluZyBTdHJlZXQnLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAga2V5OiAnMicsXHJcblx0ICBuYW1lOiAnSm9obicsXHJcblx0ICBhZ2U6IDQyLFxyXG5cdCAgYWRkcmVzczogJzEwIERvd25pbmcgU3RyZWV0JyxcclxuXHR9LFxyXG4gIF07XHJcbiAgXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuXHR7XHJcblx0ICB0aXRsZTogJ0ZpcnN0IE5hbWUnLFxyXG5cdCAgZGF0YUluZGV4OiAnbmFtZScsXHJcblx0ICBrZXk6ICduYW1lJyxcclxuXHR9LFxyXG5cdHtcclxuXHQgIHRpdGxlOiAnTGFzdCBOYW1lJyxcclxuXHQgIGRhdGFJbmRleDogJ25hbWUnLFxyXG5cdCAga2V5OiAnbmFtZScsXHJcblx0fSxcclxuXHR7XHJcblx0ICB0aXRsZTogJ0VtYWlsJyxcclxuXHQgIGRhdGFJbmRleDogJ2FnZScsXHJcblx0ICBrZXk6ICdhZ2UnLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdGl0bGU6ICdTdGF0dXMnLFxyXG5cdCAgZGF0YUluZGV4OiAnYWRkcmVzcycsXHJcblx0ICBrZXk6ICdhZGRyZXNzJyxcclxuXHR9LFxyXG5cdHtcclxuXHQgIHRpdGxlOiAnQ3JlYXRlZCAnLFxyXG5cdCAgZGF0YUluZGV4OiAnYWRkcmVzcycsXHJcblx0ICBrZXk6ICdhZGRyZXNzJyxcclxuXHR9LFxyXG5cdHtcclxuICAgICAgICB0aXRsZTogJ0FjdGlvbicsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnb3BlcmF0aW9uJyxcclxuICAgICAgICBrZXk6ICdvcGVyYXRpb24nLFxyXG4gICAgICAgIHJlbmRlcjogKCkgPT4gKFxyXG4gICAgICAgICAgICA8RHJvcGRvd24gbWVudT17eyBpdGVtcyB9fT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIE1vcmUgPERvd25PdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICApLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCByb3dTZWxlY3Rpb24gPSB7XHJcblx0b25DaGFuZ2U6IChzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cykgPT4ge1xyXG5cdCAgY29uc29sZS5sb2coYHNlbGVjdGVkUm93S2V5czogJHtzZWxlY3RlZFJvd0tleXN9YCwgJ3NlbGVjdGVkUm93czogJywgc2VsZWN0ZWRSb3dzKTtcclxuXHR9LFxyXG5cdGdldENoZWNrYm94UHJvcHM6IChyZWNvcmQpID0+ICh7XHJcblx0ICBkaXNhYmxlZDogcmVjb3JkLm5hbWUgPT09ICdEaXNhYmxlZCBVc2VyJyxcclxuXHQgIC8vIENvbHVtbiBjb25maWd1cmF0aW9uIG5vdCB0byBiZSBjaGVja2VkXHJcblx0ICBuYW1lOiByZWNvcmQubmFtZSxcclxuXHR9KSxcclxuICB9O1xyXG5cclxuY29uc3QgVXNlck1hbmFnbWVudCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjYWxsYmFjayA9IChrZXkpID0+IHtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIn19PlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCcgc3R5bGU9e3tmb250U2l6ZTogXCIzMHB4XCJ9fT5Vc2VyIE1hbmFnZW1lbnQ8L2gxPlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3sgICAgd2lkdGg6IFwiMTQlXCIsbWFyZ2luVG9wOiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwiLCBib3JkZXI6IFwibm9uZVwiLCB3aWR0aDogXCI3MiVcIn19IGh0bWxUeXBlPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdCsgTmV3IFVzZXJcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiM1wiIG9uQ2hhbmdlPXtjYWxsYmFja30+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiTG9yZW1cIiBrZXk9XCIxXCI+PC9UYWJQYW5lPlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIklwc3VtXCIga2V5PVwiMlwiPjwvVGFiUGFuZT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJEb2xvclwiIGtleT1cIjNcIj48L1RhYlBhbmU+XHJcblx0XHRcdDwvVGFicz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlYXJjaC1iYXInPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiBcIjE1cHhcIn19IHNyYz0nL2ltYWdlcy9zZWFyY2guc3ZnJy8+PHNwYW4gY2xhc3NOYW1lPSdneC1tbC0yIGd4LXRleHQtbGlnaHQnPlNlYXJjaDwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19IGNsYXNzTmFtZT1cImd4LW1yLTRcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxM3B4XCJ9fSBzcmM9Jy9pbWFnZXMvc2hhcmUuc3ZnJy8+PHNwYW4gY2xhc3NOYW1lPSdneC1tbC0xJz5TaGFyZTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19IGNsYXNzTmFtZT1cImd4LW1yLTRcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxNnB4XCJ9fSBzcmM9Jy9pbWFnZXMvc29ydGJ5LnN2ZycvPjxzcGFuIGNsYXNzTmFtZT0nZ3gtbWwtMSc+U29ydCBCeTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8VGFibGUgIFxyXG5cdFx0XHRcdHJvd1NlbGVjdGlvbj17eyB0eXBlOiAnY2hlY2tib3gnLCAuLi5yb3dTZWxlY3Rpb24sfX0gXHJcblx0XHRcdFx0ZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX0gY29sdW1ucz17Y29sdW1uc30gXHJcblx0XHRcdC8+O1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlck1hbmFnbWVudDsiXSwic291cmNlUm9vdCI6IiJ9