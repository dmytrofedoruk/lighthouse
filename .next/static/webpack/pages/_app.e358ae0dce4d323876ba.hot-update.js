webpackHotUpdate_N_E("pages/_app",{

/***/ "./app/core/Topbar/NoHeaderNotification/index.js":
/*!*******************************************************!*\
  !*** ./app/core/Topbar/NoHeaderNotification/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var NoHeaderNotification = function NoHeaderNotification() {
  _s();
  var navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (_ref) {
    var settings = _ref.settings;
    return settings.navCollapsed;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return __jsx("div", {
    className: "gx-no-header-horizontal"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: function onClick() {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_2__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx("div", {
    className: "gx-no-header-horizontal-top"
  }));
};
_s(NoHeaderNotification, "pFIx0cnyv924Gb9PfOqulaTI4nU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});
_c = NoHeaderNotification;
/* harmony default export */ __webpack_exports__["default"] = (NoHeaderNotification);
var _c;
$RefreshReg$(_c, "NoHeaderNotification");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvVG9wYmFyL05vSGVhZGVyTm90aWZpY2F0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5vSGVhZGVyTm90aWZpY2F0aW9uIiwibmF2Q29sbGFwc2VkIiwidXNlU2VsZWN0b3IiLCJzZXR0aW5ncyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2dnbGVDb2xsYXBzZWRTaWRlTmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDMkI7QUFDb0I7QUFDaEI7QUFFekQsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQixHQUFTO0VBQUE7RUFDakMsSUFBTUMsWUFBWSxHQUFHQywrREFBVyxDQUFDO0lBQUEsSUFBRUMsUUFBUSxRQUFSQSxRQUFRO0lBQUEsT0FBTUEsUUFBUSxDQUFDRixZQUFZO0VBQUEsRUFBQztFQUN2RSxJQUFNRyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFFOUIsT0FDRTtJQUFLLFNBQVMsRUFBQztFQUF5QixHQUN0QztJQUFLLFNBQVMsRUFBQztFQUErQyxHQUM1RDtJQUFHLFNBQVMsRUFBQyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFFLG1CQUFNO01BQ2JELFFBQVEsQ0FBQ0UscUZBQXNCLENBQUMsQ0FBQ0wsWUFBWSxDQUFDLENBQUM7SUFDakQ7RUFBRSxFQUNILENBQ0UsRUFDTjtJQUFLLFNBQVMsRUFBQztFQUE2QixFQUt0QyxDQUNGO0FBRVYsQ0FBQztBQUFDLEdBckJJRCxvQkFBb0I7RUFBQSxRQUNIRSx1REFBVyxFQUNmRyx1REFBVztBQUFBO0FBQUEsS0FGeEJMLG9CQUFvQjtBQXVCWEEsbUZBQW9CLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTM1OGFlMGRjZTRkMzIzODc2YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7dG9nZ2xlQ29sbGFwc2VkU2lkZU5hdn0gZnJvbSBcIi4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvU2V0dGluZ1wiO1xuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcblxuY29uc3QgTm9IZWFkZXJOb3RpZmljYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkNvbGxhcHNlZCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZDb2xsYXBzZWQpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW5vLWhlYWRlci1ob3Jpem9udGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LWxpbmViYXIgZ3gtbXIteHMtM1wiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXG4gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcbiAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1uby1oZWFkZXItaG9yaXpvbnRhbC10b3BcIj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbm8taGVhZGVyLWhvcml6b250YWwtdG9wLWNlbnRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hbGVydCBneC1tci0zXCIvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTAgZ3gtdGV4dC10cnVuY2F0ZVwiPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAuYW5ub3VuY2VkXCIvPjwvcD5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vSGVhZGVyTm90aWZpY2F0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==