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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOlsiRXJyb3JQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFnRDtBQUN2RTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNzQjtBQUNuQjtBQUU3QixJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBUyxHQUFTO0VBQ3RCLE9BQVE7SUFBSyxTQUFTLEVBQUM7RUFBeUIsR0FDNUM7SUFBSyxTQUFTLEVBQUM7RUFBdUIsR0FDcEM7SUFBSyxTQUFTLEVBQUM7RUFBdUIsR0FBQyxLQUFHLENBQU0sRUFDaEQ7SUFBSSxTQUFTLEVBQUM7RUFBZ0IsR0FDNUIsTUFBQywwREFBWTtJQUFDLEVBQUUsRUFBQztFQUFtQixFQUFFLENBQ25DLEVBQ0w7SUFBTSxTQUFTLEVBQUMsU0FBUztJQUFDLElBQUksRUFBQztFQUFRLEdBQ3JDO0lBQUssU0FBUyxFQUFDO0VBQWUsR0FDNUI7SUFBSyxTQUFTLEVBQUM7RUFBZSxHQUM1QjtJQUFPLElBQUksRUFBQyxRQUFRO0lBQUMsU0FBUyxFQUFDLHdCQUF3QjtJQUFDLFdBQVcsRUFBQztFQUFXLEVBQUUsRUFDakY7SUFBUSxTQUFTLEVBQUM7RUFBZ0IsR0FDaEM7SUFBRyxTQUFTLEVBQUM7RUFBa0IsRUFBRSxDQUMxQixDQUNMLENBQ0YsQ0FDRCxFQUNQO0lBQUcsU0FBUyxFQUFDO0VBQWdCLEdBQzNCLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUM7RUFBRyxHQUFDO0lBQUcsU0FBUyxFQUFDO0VBQXVCLEdBQUMsTUFBQywwREFBWTtJQUFDLEVBQUUsRUFBQztFQUFtQixFQUFFLENBQUksQ0FBTyxDQUNuRyxDQUNBLENBQ0Y7QUFFVixDQUFDO0FBQUMsS0F2QklBLFNBQVM7QUF5QkFBLHdFQUFTLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19lcnJvci5mOWJhZDkwN2YyNDQxNzU2NTJhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fZXJyb3JcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJFOlxcXFx3b3JrXFxcXGFnbGl1c1xcXFxsaWdodGhvdXNlXFxcXHBhZ2VzXFxcXF9lcnJvci5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgRXJyb3JQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJneC1wYWdlLWVycm9yLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXBhZ2UtZXJyb3ItY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZXJyb3ItY29kZSBneC1tYi00XCI+NDA0PC9kaXY+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImd4LXRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwiZXh0cmFQYWdlcy40MDRNc2dcIi8+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJneC1tYi00XCIgcm9sZT1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1zZWFyY2gtYmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwiYW50LWlucHV0IGFudC1pbnB1dC1sZ1wiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ3gtc2VhcmNoLWljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2hcIi8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LXRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cImd4LWJ0biBneC1idG4tcHJpbWFyeVwiPjxJbnRsTWVzc2FnZXMgaWQ9XCJleHRyYVBhZ2VzLmdvSG9tZVwiLz48L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9