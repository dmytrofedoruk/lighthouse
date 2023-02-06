webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=E%3A%5Cwork%5Caglius%5Clighthouse%5Cpages%5C_error.js!./":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=E%3A%5Cwork%5Caglius%5Clighthouse%5Cpages%5C_error.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ErrorPage = function ErrorPage() {
  return __jsx("div", {
    className: "gx-page-error-container"
  }, __jsx("div", {
    className: "gx-page-error-content"
  }, __jsx("div", {
    className: "gx-error-code gx-mb-4"
  }, "404"), __jsx("h2", {
    className: "gx-text-center"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "extraPages.404Msg"
  })), __jsx("form", {
    className: "gx-mb-4",
    role: "search"
  }, __jsx("div", {
    className: "gx-search-bar"
  }, __jsx("div", {
    className: "gx-form-group"
  }, __jsx("input", {
    type: "search",
    className: "ant-input ant-input-lg",
    placeholder: "Search..."
  }), __jsx("button", {
    className: "gx-search-icon"
  }, __jsx("i", {
    className: "icon icon-search"
  }))))), __jsx("p", {
    className: "gx-text-center"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "gx-btn gx-btn-primary"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "extraPages.goHome"
  }))))));
};
_c = ErrorPage;
/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);
var _c;
$RefreshReg$(_c, "ErrorPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzPzk4NzUiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvclBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsNENBQWdEO0FBQ3ZFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ3NCO0FBQ25CO0FBRTdCLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTLEdBQVM7RUFDdEIsT0FBUTtJQUFLLFNBQVMsRUFBQztFQUF5QixHQUM1QztJQUFLLFNBQVMsRUFBQztFQUF1QixHQUNwQztJQUFLLFNBQVMsRUFBQztFQUF1QixHQUFDLEtBQUcsQ0FBTSxFQUNoRDtJQUFJLFNBQVMsRUFBQztFQUFnQixHQUM1QixNQUFDLDBEQUFZO0lBQUMsRUFBRSxFQUFDO0VBQW1CLEVBQUUsQ0FDbkMsRUFDTDtJQUFNLFNBQVMsRUFBQyxTQUFTO0lBQUMsSUFBSSxFQUFDO0VBQVEsR0FDckM7SUFBSyxTQUFTLEVBQUM7RUFBZSxHQUM1QjtJQUFLLFNBQVMsRUFBQztFQUFlLEdBQzVCO0lBQU8sSUFBSSxFQUFDLFFBQVE7SUFBQyxTQUFTLEVBQUMsd0JBQXdCO0lBQUMsV0FBVyxFQUFDO0VBQVcsRUFBRSxFQUNqRjtJQUFRLFNBQVMsRUFBQztFQUFnQixHQUNoQztJQUFHLFNBQVMsRUFBQztFQUFrQixFQUFFLENBQzFCLENBQ0wsQ0FDRixDQUNELEVBQ1A7SUFBRyxTQUFTLEVBQUM7RUFBZ0IsR0FDM0IsTUFBQyxnREFBSTtJQUFDLElBQUksRUFBQztFQUFHLEdBQUM7SUFBRyxTQUFTLEVBQUM7RUFBdUIsR0FBQyxNQUFDLDBEQUFZO0lBQUMsRUFBRSxFQUFDO0VBQW1CLEVBQUUsQ0FBSSxDQUFPLENBQ25HLENBQ0EsQ0FDRjtBQUVWLENBQUM7QUFBQyxLQXZCSUEsU0FBUztBQXlCQUEsd0VBQVMsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2Vycm9yLmY2OWZhZmIyYzcyNjVlNWEwYTllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19lcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkU6XFxcXHdvcmtcXFxcYWdsaXVzXFxcXGxpZ2h0aG91c2VcXFxccGFnZXNcXFxcX2Vycm9yLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gXCIuLi91dGlsL0ludGxNZXNzYWdlc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBFcnJvclBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImd4LXBhZ2UtZXJyb3ItY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtcGFnZS1lcnJvci1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1lcnJvci1jb2RlIGd4LW1iLTRcIj40MDQ8L2Rpdj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZ3gtdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJleHRyYVBhZ2VzLjQwNE1zZ1wiLz5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImd4LW1iLTRcIiByb2xlPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXNlYXJjaC1iYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJhbnQtaW5wdXQgYW50LWlucHV0LWxnXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIi8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJneC1zZWFyY2gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaFwiLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwiZ3gtYnRuIGd4LWJ0bi1wcmltYXJ5XCI+PEludGxNZXNzYWdlcyBpZD1cImV4dHJhUGFnZXMuZ29Ib21lXCIvPjwvYT48L0xpbms+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=