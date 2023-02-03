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
  }, __jsx("div", {
    className: "gx-no-header-horizontal-top-center"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "app.announced"
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvVG9wYmFyL05vSGVhZGVyTm90aWZpY2F0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5vSGVhZGVyTm90aWZpY2F0aW9uIiwibmF2Q29sbGFwc2VkIiwidXNlU2VsZWN0b3IiLCJzZXR0aW5ncyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2dnbGVDb2xsYXBzZWRTaWRlTmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDMkI7QUFDb0I7QUFDaEI7QUFFekQsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQixHQUFTO0VBQUE7RUFDakMsSUFBTUMsWUFBWSxHQUFHQywrREFBVyxDQUFDO0lBQUEsSUFBRUMsUUFBUSxRQUFSQSxRQUFRO0lBQUEsT0FBTUEsUUFBUSxDQUFDRixZQUFZO0VBQUEsRUFBQztFQUN2RSxJQUFNRyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFFOUIsT0FDRTtJQUFLLFNBQVMsRUFBQztFQUF5QixHQUN0QztJQUFLLFNBQVMsRUFBQztFQUErQyxHQUM1RDtJQUFHLFNBQVMsRUFBQyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFFLG1CQUFNO01BQ2JELFFBQVEsQ0FBQ0UscUZBQXNCLENBQUMsQ0FBQ0wsWUFBWSxDQUFDLENBQUM7SUFDakQ7RUFBRSxFQUNILENBQ0UsRUFDTjtJQUFLLFNBQVMsRUFBQztFQUE2QixHQUMxQztJQUFLLFNBQVMsRUFBQztFQUFvQyxHQUNqRDtJQUFHLFNBQVMsRUFBQztFQUF5QixFQUFFLEVBQ3hDO0lBQUcsU0FBUyxFQUFDO0VBQTBCLEdBQUMsTUFBQywwREFBWTtJQUFDLEVBQUUsRUFBQztFQUFlLEVBQUUsQ0FBSSxDQUMxRSxDQUNGLENBQ0Y7QUFFVixDQUFDO0FBQUMsR0FyQklELG9CQUFvQjtFQUFBLFFBQ0hFLHVEQUFXLEVBQ2ZHLHVEQUFXO0FBQUE7QUFBQSxLQUZ4Qkwsb0JBQW9CO0FBdUJYQSxtRkFBb0IsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43OWJkYWFkY2MxYTc5MWYxNTU4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHt0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9TZXR0aW5nXCI7XG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL0ludGxNZXNzYWdlc1wiO1xuXG5jb25zdCBOb0hlYWRlck5vdGlmaWNhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbm8taGVhZGVyLWhvcml6b250YWxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtbGluZWJhciBneC1tci14cy0zXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImd4LWljb24tYnRuIGljb24gaWNvbi1tZW51XCJcbiAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xuICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW5vLWhlYWRlci1ob3Jpem9udGFsLXRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW5vLWhlYWRlci1ob3Jpem9udGFsLXRvcC1jZW50ZXJcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0wIGd4LXRleHQtdHJ1bmNhdGVcIj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLmFubm91bmNlZFwiLz48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vSGVhZGVyTm90aWZpY2F0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==