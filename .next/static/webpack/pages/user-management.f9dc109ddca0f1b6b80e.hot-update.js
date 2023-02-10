webpackHotUpdate_N_E("pages/user-management",{

/***/ "./pages/user-management.js":
/*!**********************************!*\
  !*** ./pages/user-management.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


// import type { ColumnsType } from 'antd/es/table';

var TabPane = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"].TabPane;
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
    title: 'First',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: 'Address',
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
  }, "Sort By"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci1tYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbIlRhYlBhbmUiLCJUYWJzIiwiVXNlck1hbmFnbWVudCIsImRhdGFTb3VyY2UiLCJrZXkiLCJuYW1lIiwiYWdlIiwiYWRkcmVzcyIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImNhbGxiYWNrIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMwQztBQUNwRTs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlDQUFJLENBQUNELE9BQU87QUFFNUIsU0FBU0UsYUFBYSxHQUFHO0VBRXhCLElBQU1DLFVBQVUsR0FBRyxDQUNsQjtJQUNFQyxHQUFHLEVBQUUsR0FBRztJQUNSQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxHQUFHLEVBQUUsRUFBRTtJQUNQQyxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQ0Q7SUFDRUgsR0FBRyxFQUFFLEdBQUc7SUFDUkMsSUFBSSxFQUFFLE1BQU07SUFDWkMsR0FBRyxFQUFFLEVBQUU7SUFDUEMsT0FBTyxFQUFFO0VBQ1gsQ0FBQyxDQUNDO0VBRUQsSUFBTUMsT0FBTyxHQUFHLENBQ2pCO0lBQ0VDLEtBQUssRUFBRSxPQUFPO0lBQ2RDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCTixHQUFHLEVBQUU7RUFDUCxDQUFDLEVBQ0Q7SUFDRUssS0FBSyxFQUFFLEtBQUs7SUFDWkMsU0FBUyxFQUFFLEtBQUs7SUFDaEJOLEdBQUcsRUFBRTtFQUNQLENBQUMsRUFDRDtJQUNFSyxLQUFLLEVBQUUsU0FBUztJQUNoQkMsU0FBUyxFQUFFLFNBQVM7SUFDcEJOLEdBQUcsRUFBRTtFQUNQLENBQUMsQ0FDQztFQUVBLElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUlQLEdBQUcsRUFBSyxDQUMxQixDQUFDO0VBRUQsT0FDSSxtQkFDTDtJQUFLLEtBQUssRUFBRTtNQUFDUSxPQUFPLEVBQUUsTUFBTTtNQUFFQyxjQUFjLEVBQUU7SUFBZTtFQUFFLEdBQzlEO0lBQUksU0FBUyxFQUFDLDBCQUEwQjtJQUFDLEtBQUssRUFBRTtNQUFDQyxRQUFRLEVBQUU7SUFBTTtFQUFFLEdBQUMsaUJBQWUsQ0FBSyxFQUN4RjtJQUFLLEtBQUssRUFBRTtNQUFLQyxLQUFLLEVBQUUsS0FBSztNQUFDQyxTQUFTLEVBQUU7SUFBTTtFQUFFLEdBQ2hELE1BQUMsMkNBQU07SUFBQyxTQUFTLEVBQUMsdUJBQXVCO0lBQUMsS0FBSyxFQUFFO01BQUNDLFVBQVUsRUFBRSxTQUFTO01BQUVDLE1BQU0sRUFBRSxNQUFNO01BQUVILEtBQUssRUFBRTtJQUFLLENBQUU7SUFBQyxRQUFRLEVBQUM7RUFBUSxHQUFDLFlBRTFILENBQVMsQ0FDSixDQUNELEVBQ04sTUFBQyx5Q0FBSTtJQUFDLGdCQUFnQixFQUFDLEdBQUc7SUFBQyxRQUFRLEVBQUVKO0VBQVMsR0FDN0MsTUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFBQyxHQUFHLEVBQUM7RUFBRyxFQUFXLEVBQ3ZDLE1BQUMsT0FBTztJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDO0VBQUcsRUFBVyxFQUN2QyxNQUFDLE9BQU87SUFBQyxHQUFHLEVBQUMsT0FBTztJQUFDLEdBQUcsRUFBQztFQUFHLEVBQVcsQ0FDakMsRUFDUDtJQUFLLFNBQVMsRUFBQztFQUFZLEdBQ2Q7SUFBSyxLQUFLLEVBQUU7TUFBQ0ksS0FBSyxFQUFFO0lBQU0sQ0FBRTtJQUFDLEdBQUcsRUFBQztFQUFvQixFQUFFO0lBQU0sU0FBUyxFQUFDO0VBQXVCLEdBQUMsUUFBTSxDQUFPLEVBQ3hIO0lBQUssS0FBSyxFQUFFO01BQUMsU0FBTztJQUFPLENBQUU7SUFBQyxTQUFTLEVBQUM7RUFBUyxHQUNoRDtJQUFLLEtBQUssRUFBRTtNQUFDQSxLQUFLLEVBQUU7SUFBTSxDQUFFO0lBQUMsR0FBRyxFQUFDO0VBQW1CLEVBQUU7SUFBTSxTQUFTLEVBQUM7RUFBUyxHQUFDLE9BQUssQ0FBTyxDQUN2RixFQUNOO0lBQUssS0FBSyxFQUFFO01BQUMsU0FBTztJQUFPLENBQUU7SUFBQyxTQUFTLEVBQUM7RUFBUyxHQUNoRDtJQUFLLEtBQUssRUFBRTtNQUFDQSxLQUFLLEVBQUU7SUFBTSxDQUFFO0lBQUMsR0FBRyxFQUFDO0VBQW9CLEVBQUU7SUFBTSxTQUFTLEVBQUM7RUFBUyxHQUFDLFNBQU8sQ0FBTyxDQUMxRixDQUNELEVBRU4sTUFBQywwQ0FBSztJQUFDLFVBQVUsRUFBRVosVUFBVztJQUFDLE9BQU8sRUFBRUs7RUFBUSxFQUFHLEtBQzlDLENBQU07QUFFZDtBQUFDLEtBbEVRTixhQUFhO0FBb0VQQSw0RUFBYSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyLW1hbmFnZW1lbnQuZjlkYzEwOWRkY2EwZjFiNmI4MGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29sLCBUYWJzLCBCdXR0b24sIFJvdywgRGl2aWRlciwgUmFkaW8sIFRhYmxlIH0gZnJvbSBcImFudGRcIjtcclxuLy8gaW1wb3J0IHR5cGUgeyBDb2x1bW5zVHlwZSB9IGZyb20gJ2FudGQvZXMvdGFibGUnO1xyXG5cclxuY29uc3QgVGFiUGFuZSA9IFRhYnMuVGFiUGFuZTtcclxuXHJcbmZ1bmN0aW9uIFVzZXJNYW5hZ21lbnQoKSB7XHJcblxyXG5cdGNvbnN0IGRhdGFTb3VyY2UgPSBbXHJcblx0XHR7XHJcblx0XHQgIGtleTogJzEnLFxyXG5cdFx0ICBuYW1lOiAnTWlrZScsXHJcblx0XHQgIGFnZTogMzIsXHJcblx0XHQgIGFkZHJlc3M6ICcxMCBEb3duaW5nIFN0cmVldCcsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBrZXk6ICcyJyxcclxuXHRcdCAgbmFtZTogJ0pvaG4nLFxyXG5cdFx0ICBhZ2U6IDQyLFxyXG5cdFx0ICBhZGRyZXNzOiAnMTAgRG93bmluZyBTdHJlZXQnLFxyXG5cdFx0fSxcclxuXHQgIF07XHJcblx0ICBcclxuXHQgIGNvbnN0IGNvbHVtbnMgPSBbXHJcblx0XHR7XHJcblx0XHQgIHRpdGxlOiAnRmlyc3QnLFxyXG5cdFx0ICBkYXRhSW5kZXg6ICduYW1lJyxcclxuXHRcdCAga2V5OiAnbmFtZScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICB0aXRsZTogJ0FnZScsXHJcblx0XHQgIGRhdGFJbmRleDogJ2FnZScsXHJcblx0XHQgIGtleTogJ2FnZScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICB0aXRsZTogJ0FkZHJlc3MnLFxyXG5cdFx0ICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcclxuXHRcdCAga2V5OiAnYWRkcmVzcycsXHJcblx0XHR9LFxyXG5cdCAgXTtcclxuXHJcbiAgICBjb25zdCBjYWxsYmFjayA9IChrZXkpID0+IHtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIn19PlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCcgc3R5bGU9e3tmb250U2l6ZTogXCIzMHB4XCJ9fT5Vc2VyIE1hbmFnZW1lbnQ8L2gxPlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3sgICAgd2lkdGg6IFwiMTQlXCIsbWFyZ2luVG9wOiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwiLCBib3JkZXI6IFwibm9uZVwiLCB3aWR0aDogXCI3MiVcIn19IGh0bWxUeXBlPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdCsgTmV3IFVzZXJcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiM1wiIG9uQ2hhbmdlPXtjYWxsYmFja30+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiTG9yZW1cIiBrZXk9XCIxXCI+PC9UYWJQYW5lPlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIklwc3VtXCIga2V5PVwiMlwiPjwvVGFiUGFuZT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJEb2xvclwiIGtleT1cIjNcIj48L1RhYlBhbmU+XHJcblx0XHRcdDwvVGFicz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlYXJjaC1iYXInPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiBcIjE1cHhcIn19IHNyYz0nL2ltYWdlcy9zZWFyY2guc3ZnJy8+PHNwYW4gY2xhc3NOYW1lPSdneC1tbC0yIGd4LXRleHQtbGlnaHQnPlNlYXJjaDwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19IGNsYXNzTmFtZT1cImd4LW1yLTRcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxM3B4XCJ9fSBzcmM9Jy9pbWFnZXMvc2hhcmUuc3ZnJy8+PHNwYW4gY2xhc3NOYW1lPSdneC1tbC0xJz5TaGFyZTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19IGNsYXNzTmFtZT1cImd4LW1yLTRcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxNnB4XCJ9fSBzcmM9Jy9pbWFnZXMvc29ydGJ5LnN2ZycvPjxzcGFuIGNsYXNzTmFtZT0nZ3gtbWwtMSc+U29ydCBCeTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8VGFibGUgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX0gY29sdW1ucz17Y29sdW1uc30gLz47XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTWFuYWdtZW50OyJdLCJzb3VyY2VSb290IjoiIn0=