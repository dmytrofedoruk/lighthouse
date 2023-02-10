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
    title: 'First Name',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci1tYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbIlRhYlBhbmUiLCJUYWJzIiwiVXNlck1hbmFnbWVudCIsImRhdGFTb3VyY2UiLCJrZXkiLCJuYW1lIiwiYWdlIiwiYWRkcmVzcyIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImNhbGxiYWNrIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMwQztBQUNwRTs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlDQUFJLENBQUNELE9BQU87QUFFNUIsU0FBU0UsYUFBYSxHQUFHO0VBRXhCLElBQU1DLFVBQVUsR0FBRyxDQUNsQjtJQUNFQyxHQUFHLEVBQUUsR0FBRztJQUNSQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxHQUFHLEVBQUUsRUFBRTtJQUNQQyxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQ0Q7SUFDRUgsR0FBRyxFQUFFLEdBQUc7SUFDUkMsSUFBSSxFQUFFLE1BQU07SUFDWkMsR0FBRyxFQUFFLEVBQUU7SUFDUEMsT0FBTyxFQUFFO0VBQ1gsQ0FBQyxDQUNDO0VBRUQsSUFBTUMsT0FBTyxHQUFHLENBQ2pCO0lBQ0NDLEtBQUssRUFBRSxZQUFZO0lBQ25CQyxTQUFTLEVBQUUsTUFBTTtJQUNqQk4sR0FBRyxFQUFFO0VBQ0osQ0FBQyxFQUNIO0lBQ0VLLEtBQUssRUFBRSxZQUFZO0lBQ25CQyxTQUFTLEVBQUUsTUFBTTtJQUNqQk4sR0FBRyxFQUFFO0VBQ1AsQ0FBQyxFQUNEO0lBQ0VLLEtBQUssRUFBRSxXQUFXO0lBQ2xCQyxTQUFTLEVBQUUsTUFBTTtJQUNqQk4sR0FBRyxFQUFFO0VBQ1AsQ0FBQyxFQUNEO0lBQ0VLLEtBQUssRUFBRSxPQUFPO0lBQ2RDLFNBQVMsRUFBRSxLQUFLO0lBQ2hCTixHQUFHLEVBQUU7RUFDUCxDQUFDLEVBQ0Q7SUFDRUssS0FBSyxFQUFFLFFBQVE7SUFDZkMsU0FBUyxFQUFFLFNBQVM7SUFDcEJOLEdBQUcsRUFBRTtFQUNQLENBQUMsRUFDRDtJQUNFSyxLQUFLLEVBQUUsVUFBVTtJQUNqQkMsU0FBUyxFQUFFLFNBQVM7SUFDcEJOLEdBQUcsRUFBRTtFQUNQLENBQUMsQ0FDQztFQUVBLElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUlQLEdBQUcsRUFBSyxDQUMxQixDQUFDO0VBRUQsT0FDSSxtQkFDTDtJQUFLLEtBQUssRUFBRTtNQUFDUSxPQUFPLEVBQUUsTUFBTTtNQUFFQyxjQUFjLEVBQUU7SUFBZTtFQUFFLEdBQzlEO0lBQUksU0FBUyxFQUFDLDBCQUEwQjtJQUFDLEtBQUssRUFBRTtNQUFDQyxRQUFRLEVBQUU7SUFBTTtFQUFFLEdBQUMsaUJBQWUsQ0FBSyxFQUN4RjtJQUFLLEtBQUssRUFBRTtNQUFLQyxLQUFLLEVBQUUsS0FBSztNQUFDQyxTQUFTLEVBQUU7SUFBTTtFQUFFLEdBQ2hELE1BQUMsMkNBQU07SUFBQyxTQUFTLEVBQUMsdUJBQXVCO0lBQUMsS0FBSyxFQUFFO01BQUNDLFVBQVUsRUFBRSxTQUFTO01BQUVDLE1BQU0sRUFBRSxNQUFNO01BQUVILEtBQUssRUFBRTtJQUFLLENBQUU7SUFBQyxRQUFRLEVBQUM7RUFBUSxHQUFDLFlBRTFILENBQVMsQ0FDSixDQUNELEVBQ04sTUFBQyx5Q0FBSTtJQUFDLGdCQUFnQixFQUFDLEdBQUc7SUFBQyxRQUFRLEVBQUVKO0VBQVMsR0FDN0MsTUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFBQyxHQUFHLEVBQUM7RUFBRyxFQUFXLEVBQ3ZDLE1BQUMsT0FBTztJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDO0VBQUcsRUFBVyxFQUN2QyxNQUFDLE9BQU87SUFBQyxHQUFHLEVBQUMsT0FBTztJQUFDLEdBQUcsRUFBQztFQUFHLEVBQVcsQ0FDakMsRUFDUDtJQUFLLFNBQVMsRUFBQztFQUFZLEdBQ2Q7SUFBSyxLQUFLLEVBQUU7TUFBQ0ksS0FBSyxFQUFFO0lBQU0sQ0FBRTtJQUFDLEdBQUcsRUFBQztFQUFvQixFQUFFO0lBQU0sU0FBUyxFQUFDO0VBQXVCLEdBQUMsUUFBTSxDQUFPLEVBQ3hIO0lBQUssS0FBSyxFQUFFO01BQUMsU0FBTztJQUFPLENBQUU7SUFBQyxTQUFTLEVBQUM7RUFBUyxHQUNoRDtJQUFLLEtBQUssRUFBRTtNQUFDQSxLQUFLLEVBQUU7SUFBTSxDQUFFO0lBQUMsR0FBRyxFQUFDO0VBQW1CLEVBQUU7SUFBTSxTQUFTLEVBQUM7RUFBUyxHQUFDLE9BQUssQ0FBTyxDQUN2RixFQUNOO0lBQUssS0FBSyxFQUFFO01BQUMsU0FBTztJQUFPLENBQUU7SUFBQyxTQUFTLEVBQUM7RUFBUyxHQUNoRDtJQUFLLEtBQUssRUFBRTtNQUFDQSxLQUFLLEVBQUU7SUFBTSxDQUFFO0lBQUMsR0FBRyxFQUFDO0VBQW9CLEVBQUU7SUFBTSxTQUFTLEVBQUM7RUFBUyxHQUFDLFNBQU8sQ0FBTyxDQUMxRixDQUNELEVBRU4sTUFBQywwQ0FBSztJQUFDLFVBQVUsRUFBRVosVUFBVztJQUFDLE9BQU8sRUFBRUs7RUFBUSxFQUFHLEtBQzlDLENBQU07QUFFZDtBQUFDLEtBakZRTixhQUFhO0FBbUZQQSw0RUFBYSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyLW1hbmFnZW1lbnQuYjM3YzZmZjJkMzgwYTAzZDlkNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29sLCBUYWJzLCBCdXR0b24sIFJvdywgRGl2aWRlciwgUmFkaW8sIFRhYmxlIH0gZnJvbSBcImFudGRcIjtcclxuLy8gaW1wb3J0IHR5cGUgeyBDb2x1bW5zVHlwZSB9IGZyb20gJ2FudGQvZXMvdGFibGUnO1xyXG5cclxuY29uc3QgVGFiUGFuZSA9IFRhYnMuVGFiUGFuZTtcclxuXHJcbmZ1bmN0aW9uIFVzZXJNYW5hZ21lbnQoKSB7XHJcblxyXG5cdGNvbnN0IGRhdGFTb3VyY2UgPSBbXHJcblx0XHR7XHJcblx0XHQgIGtleTogJzEnLFxyXG5cdFx0ICBuYW1lOiAnTWlrZScsXHJcblx0XHQgIGFnZTogMzIsXHJcblx0XHQgIGFkZHJlc3M6ICcxMCBEb3duaW5nIFN0cmVldCcsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBrZXk6ICcyJyxcclxuXHRcdCAgbmFtZTogJ0pvaG4nLFxyXG5cdFx0ICBhZ2U6IDQyLFxyXG5cdFx0ICBhZGRyZXNzOiAnMTAgRG93bmluZyBTdHJlZXQnLFxyXG5cdFx0fSxcclxuXHQgIF07XHJcblx0ICBcclxuXHQgIGNvbnN0IGNvbHVtbnMgPSBbXHJcblx0XHR7XHJcblx0XHRcdHRpdGxlOiAnRmlyc3QgTmFtZScsXHJcblx0XHRcdGRhdGFJbmRleDogJ25hbWUnLFxyXG5cdFx0XHRrZXk6ICduYW1lJyxcclxuXHRcdCAgfSxcclxuXHRcdHtcclxuXHRcdCAgdGl0bGU6ICdGaXJzdCBOYW1lJyxcclxuXHRcdCAgZGF0YUluZGV4OiAnbmFtZScsXHJcblx0XHQgIGtleTogJ25hbWUnLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgdGl0bGU6ICdMYXN0IE5hbWUnLFxyXG5cdFx0ICBkYXRhSW5kZXg6ICduYW1lJyxcclxuXHRcdCAga2V5OiAnbmFtZScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICB0aXRsZTogJ0VtYWlsJyxcclxuXHRcdCAgZGF0YUluZGV4OiAnYWdlJyxcclxuXHRcdCAga2V5OiAnYWdlJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIHRpdGxlOiAnU3RhdHVzJyxcclxuXHRcdCAgZGF0YUluZGV4OiAnYWRkcmVzcycsXHJcblx0XHQgIGtleTogJ2FkZHJlc3MnLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgdGl0bGU6ICdDcmVhdGVkICcsXHJcblx0XHQgIGRhdGFJbmRleDogJ2FkZHJlc3MnLFxyXG5cdFx0ICBrZXk6ICdhZGRyZXNzJyxcclxuXHRcdH0sXHJcblx0ICBdO1xyXG5cclxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGtleSkgPT4ge1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwifX0+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZ3gtZm9udC13ZWlnaHQtc2VtaS1ib2xkJyBzdHlsZT17e2ZvbnRTaXplOiBcIjMwcHhcIn19PlVzZXIgTWFuYWdlbWVudDwvaDE+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17eyAgICB3aWR0aDogXCIxNCVcIixtYXJnaW5Ub3A6IFwiMjBweFwifX0+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjRDNGMzZCXCIsIGJvcmRlcjogXCJub25lXCIsIHdpZHRoOiBcIjcyJVwifX0gaHRtbFR5cGU9XCJidXR0b25cIj5cclxuXHRcdFx0XHRcdFx0KyBOZXcgVXNlclxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHRcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIzXCIgb25DaGFuZ2U9e2NhbGxiYWNrfT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJMb3JlbVwiIGtleT1cIjFcIj48L1RhYlBhbmU+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiSXBzdW1cIiBrZXk9XCIyXCI+PC9UYWJQYW5lPlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIkRvbG9yXCIga2V5PVwiM1wiPjwvVGFiUGFuZT5cclxuXHRcdFx0PC9UYWJzPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLWJhcic+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTVweFwifX0gc3JjPScvaW1hZ2VzL3NlYXJjaC5zdmcnLz48c3BhbiBjbGFzc05hbWU9J2d4LW1sLTIgZ3gtdGV4dC1saWdodCc+U2VhcmNoPC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0gY2xhc3NOYW1lPVwiZ3gtbXItNFwiPlxyXG5cdFx0XHRcdFx0PGltZyBzdHlsZT17e3dpZHRoOiBcIjEzcHhcIn19IHNyYz0nL2ltYWdlcy9zaGFyZS5zdmcnLz48c3BhbiBjbGFzc05hbWU9J2d4LW1sLTEnPlNoYXJlPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0gY2xhc3NOYW1lPVwiZ3gtbXItNFwiPlxyXG5cdFx0XHRcdFx0PGltZyBzdHlsZT17e3dpZHRoOiBcIjE2cHhcIn19IHNyYz0nL2ltYWdlcy9zb3J0Ynkuc3ZnJy8+PHNwYW4gY2xhc3NOYW1lPSdneC1tbC0xJz5Tb3J0IEJ5PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxUYWJsZSBkYXRhU291cmNlPXtkYXRhU291cmNlfSBjb2x1bW5zPXtjb2x1bW5zfSAvPjtcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJNYW5hZ21lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==