webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_vendors_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/vendors/style */ "./public/vendors/style.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/store */ "./redux/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_core_LocaleProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/core/LocaleProvider */ "./app/core/LocaleProvider/index.js");
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/use-auth */ "./util/use-auth.js");
/* harmony import */ var _app_core_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/core/Layout */ "./app/core/Layout/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Page = function Page(_ref) {
  var Component = _ref.Component,
    pageProps = _ref.pageProps,
    store = _ref.store;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "LightHouse")), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
    store: store
  }, __jsx(_util_use_auth__WEBPACK_IMPORTED_MODULE_9__["AuthProvider"], null, __jsx(_app_core_LocaleProvider__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(_app_core_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(Component, pageProps))))));
};
_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])(_redux_store__WEBPACK_IMPORTED_MODULE_6__["default"])(Page));
var _c;
$RefreshReg$(_c, "Page");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJQYWdlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNFO0FBQ2U7QUFDZjtBQUVLO0FBQ0w7QUFDVztBQUNGO0FBQ21CO0FBQ1Y7QUFDTjtBQUV4QyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBSSxPQUFzQztFQUFBLElBQWpDQyxTQUFTLFFBQVRBLFNBQVM7SUFBRUMsU0FBUyxRQUFUQSxTQUFTO0lBQUVDLEtBQUssUUFBTEEsS0FBSztFQUV4QyxPQUNFLE1BQUMsNENBQUssQ0FBQyxRQUFRLFFBQ2IsTUFBQyxnREFBSSxRQUNILHFCQUFPLFlBQVUsQ0FBUSxDQUNwQixFQUNQLE1BQUMsb0RBQVE7SUFBQyxLQUFLLEVBQUVBO0VBQU0sR0FDckIsTUFBQywyREFBWSxRQUNYLE1BQUMsZ0VBQWMsUUFDYixNQUFDLHlEQUFNLFFBQ0wsTUFBQyxTQUFTLEVBQUtELFNBQVMsQ0FBSSxDQUNyQixDQUNNLENBQ0osQ0FDTixDQUNJO0FBRXJCLENBQUM7QUFBQyxLQWxCSUYsSUFBSTtBQW9CS0ksaUlBQVMsQ0FBQ0Msb0RBQVMsQ0FBQyxDQUFDTCxJQUFJLENBQUMsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hM2Q0MzE5Zjg3MjlmYWE4NGJiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcblxuaW1wb3J0IFwiLi4vcHVibGljL3ZlbmRvcnMvc3R5bGVcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIlxuaW1wb3J0IGluaXRTdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMb2NhbGVQcm92aWRlciBmcm9tIFwiLi4vYXBwL2NvcmUvTG9jYWxlUHJvdmlkZXJcIjtcbmltcG9ydCB7QXV0aFByb3ZpZGVyfSBmcm9tIFwiLi4vdXRpbC91c2UtYXV0aFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vYXBwL2NvcmUvTGF5b3V0XCI7XG5cbmNvbnN0IFBhZ2UgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZX0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TGlnaHRIb3VzZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgICA8TG9jYWxlUHJvdmlkZXI+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICA8L0xvY2FsZVByb3ZpZGVyPlxuICAgICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpKFBhZ2UpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==