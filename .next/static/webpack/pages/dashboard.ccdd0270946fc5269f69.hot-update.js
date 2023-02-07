webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./app/components/Metrics/TrafficRaiseCard.js":
/*!****************************************************!*\
  !*** ./app/components/Metrics/TrafficRaiseCard.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var data = [{
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
var TrafficRaiseCard = function TrafficRaiseCard() {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "gx-align-items-center"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24
  }, __jsx("div", {
    className: "gx-actchart gx-px-3"
  }, __jsx("h2", {
    className: "gx-fs-xxxl gx-font-weight-medium gx-mb-1 gx-text-black"
  }, "07% ", __jsx("i", {
    className: "icon icon-menu-up gx-fs-sm"
  })), __jsx("p", {
    className: "gx-mb-0"
  }, "Traffic raise"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
    width: "100%",
    height: 100
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {
    data: data,
    margin: {
      top: 5,
      right: 5,
      left: 5,
      bottom: 5
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    dataKey: "traffic",
    stroke: "#038FDE",
    strokeWidth: 2
  }))))));
};
_c = TrafficRaiseCard;
/* harmony default export */ __webpack_exports__["default"] = (TrafficRaiseCard);
var _c;
$RefreshReg$(_c, "TrafficRaiseCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTWV0cmljcy9UcmFmZmljUmFpc2VDYXJkLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJuYW1lIiwidHJhZmZpYyIsIlRyYWZmaWNSYWlzZUNhcmQiLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzZDO0FBQ3pDO0FBRXFCO0FBRW5ELElBQU1BLElBQUksR0FBRyxDQUNYO0VBQUNDLElBQUksRUFBRSxRQUFRO0VBQUVDLE9BQU8sRUFBRTtBQUFHLENBQUMsRUFDOUI7RUFBQ0QsSUFBSSxFQUFFLFFBQVE7RUFBRUMsT0FBTyxFQUFFO0FBQUksQ0FBQyxFQUMvQjtFQUFDRCxJQUFJLEVBQUUsUUFBUTtFQUFFQyxPQUFPLEVBQUU7QUFBRyxDQUFDLEVBQzlCO0VBQUNELElBQUksRUFBRSxRQUFRO0VBQUVDLE9BQU8sRUFBRTtBQUFJLENBQUMsRUFDL0I7RUFBQ0QsSUFBSSxFQUFFLFFBQVE7RUFBRUMsT0FBTyxFQUFFO0FBQUcsQ0FBQyxFQUM5QjtFQUFDRCxJQUFJLEVBQUUsUUFBUTtFQUFFQyxPQUFPLEVBQUU7QUFBSSxDQUFDLEVBQy9CO0VBQUNELElBQUksRUFBRSxRQUFRO0VBQUVDLE9BQU8sRUFBRTtBQUFHLENBQUMsQ0FDL0I7QUFFRCxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCLEdBQVM7RUFDN0IsT0FDRSxNQUFDLGdFQUFNLFFBQ0wsTUFBQyx3Q0FBRztJQUFDLFNBQVMsRUFBQztFQUF1QixHQUNwQyxNQUFDLHdDQUFHO0lBQUMsRUFBRSxFQUFFLEVBQUc7SUFBQyxFQUFFLEVBQUUsRUFBRztJQUFDLEVBQUUsRUFBRSxFQUFHO0lBQUMsRUFBRSxFQUFFO0VBQUcsR0FDbEM7SUFBSyxTQUFTLEVBQUM7RUFBcUIsR0FDbEM7SUFBSSxTQUFTLEVBQUM7RUFBd0QsR0FBQyxNQUFJO0lBQ3pFLFNBQVMsRUFBQztFQUE0QixFQUFFLENBQ3JDLEVBQ0w7SUFBRyxTQUFTLEVBQUM7RUFBUyxHQUFDLGVBQWEsQ0FBSSxDQUNwQyxDQUNGLEVBQ04sTUFBQyx3Q0FBRztJQUFDLEVBQUUsRUFBRSxFQUFHO0lBQUMsRUFBRSxFQUFFLEVBQUc7SUFBQyxFQUFFLEVBQUUsRUFBRztJQUFDLEVBQUUsRUFBRTtFQUFHLEdBQ2xDLE1BQUMsNERBQW1CO0lBQUMsS0FBSyxFQUFDLE1BQU07SUFBQyxNQUFNLEVBQUU7RUFBSSxHQUM1QyxNQUFDLGtEQUFTO0lBQUMsSUFBSSxFQUFFSCxJQUFLO0lBQ1gsTUFBTSxFQUFFO01BQUNJLEdBQUcsRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRSxDQUFDO01BQUVDLElBQUksRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRTtJQUFDO0VBQUUsR0FDeEQsTUFBQyxnREFBTyxPQUFFLEVBQ1YsTUFBQyw2Q0FBSTtJQUFDLE9BQU8sRUFBQyxTQUFTO0lBQUMsTUFBTSxFQUFDLFNBQVM7SUFBQyxXQUFXLEVBQUU7RUFBRSxFQUFFLENBQ2hELENBQ1EsQ0FDbEIsQ0FDRixDQUNDO0FBRWIsQ0FBQztBQUFDLEtBeEJJSixnQkFBZ0I7QUEwQlBBLCtFQUFnQixFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuY2NkZDAyNzA5NDZmYzUyNjlmNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMaW5lLCBMaW5lQ2hhcnQsIFJlc3BvbnNpdmVDb250YWluZXIsIFRvb2x0aXB9IGZyb20gXCJyZWNoYXJ0c1wiO1xyXG5pbXBvcnQge0NvbCwgUm93fSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XaWRnZXQvaW5kZXhcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge25hbWU6ICdQYWdlIEEnLCB0cmFmZmljOiAyMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBCJywgdHJhZmZpYzogMTEwMH0sXHJcbiAge25hbWU6ICdQYWdlIEMnLCB0cmFmZmljOiA4MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgdHJhZmZpYzogMTcwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCB0cmFmZmljOiA2MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgdHJhZmZpYzogMTgwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCB0cmFmZmljOiA2MDB9LFxyXG5dO1xyXG5cclxuY29uc3QgVHJhZmZpY1JhaXNlQ2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldD5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJneC1hbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8Q29sIGxnPXsxMn0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFjdGNoYXJ0IGd4LXB4LTNcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImd4LWZzLXh4eGwgZ3gtZm9udC13ZWlnaHQtbWVkaXVtIGd4LW1iLTEgZ3gtdGV4dC1ibGFja1wiPjA3JSA8aVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZW51LXVwIGd4LWZzLXNtXCIvPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0wXCI+VHJhZmZpYyByYWlzZTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17MTAwfT5cclxuICAgICAgICAgICAgPExpbmVDaGFydCBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17e3RvcDogNSwgcmlnaHQ6IDUsIGxlZnQ6IDUsIGJvdHRvbTogNX19PlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwLz5cclxuICAgICAgICAgICAgICA8TGluZSBkYXRhS2V5PVwidHJhZmZpY1wiIHN0cm9rZT1cIiMwMzhGREVcIiBzdHJva2VXaWR0aD17Mn0vPlxyXG4gICAgICAgICAgICA8L0xpbmVDaGFydD5cclxuICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L1dpZGdldD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhZmZpY1JhaXNlQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==