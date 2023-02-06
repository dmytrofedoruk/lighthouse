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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJQYWdlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNFO0FBQ2U7QUFDZjtBQUVLO0FBQ0w7QUFDQTtBQUNXO0FBQ0Y7QUFDbUI7QUFDVjtBQUNOO0FBRXhDLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFJLE9BQXNDO0VBQUEsSUFBakNDLFNBQVMsUUFBVEEsU0FBUztJQUFFQyxTQUFTLFFBQVRBLFNBQVM7SUFBRUMsS0FBSyxRQUFMQSxLQUFLO0VBRXhDLE9BQ0UsTUFBQyw0Q0FBSyxDQUFDLFFBQVEsUUFDYixNQUFDLGdEQUFJLFFBQ0gscUJBQU8sWUFBVSxDQUFRLENBQ3BCLEVBQ1AsTUFBQyxvREFBUTtJQUFDLEtBQUssRUFBRUE7RUFBTSxHQUNyQixNQUFDLDJEQUFZLFFBQ1gsTUFBQyxnRUFBYyxRQUNiLE1BQUMseURBQU0sUUFDTCxNQUFDLFNBQVMsRUFBS0QsU0FBUyxDQUFJLENBQ3JCLENBQ00sQ0FDSixDQUNOLENBQ0k7QUFFckIsQ0FBQztBQUFDLEtBbEJJRixJQUFJO0FBb0JLSSxpSUFBUyxDQUFDQyxvREFBUyxDQUFDLENBQUNMLElBQUksQ0FBQyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjZmNjE3OTlkZDI4NmNlZGNiMTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuXG5pbXBvcnQgXCIuLi9wdWJsaWMvdmVuZG9ycy9zdHlsZVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLmNzc1wiXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCJcbmltcG9ydCBpbml0U3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTG9jYWxlUHJvdmlkZXIgZnJvbSBcIi4uL2FwcC9jb3JlL0xvY2FsZVByb3ZpZGVyXCI7XG5pbXBvcnQge0F1dGhQcm92aWRlcn0gZnJvbSBcIi4uL3V0aWwvdXNlLWF1dGhcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2FwcC9jb3JlL0xheW91dFwiO1xuXG5jb25zdCBQYWdlID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmV9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkxpZ2h0SG91c2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgICAgPExvY2FsZVByb3ZpZGVyPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgPC9Mb2NhbGVQcm92aWRlcj5cbiAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlKShQYWdlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=