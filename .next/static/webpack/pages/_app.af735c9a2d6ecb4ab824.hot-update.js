webpackHotUpdate_N_E("pages/_app",{

/***/ "./app/core/Sidebar/UserProfile.js":
/*!*****************************************!*\
  !*** ./app/core/Sidebar/UserProfile.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/use-auth */ "./util/use-auth.js");
var _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var UserProfile = function UserProfile() {
  _s();
  var _useAuth = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_2__["useAuth"])(),
    authUser = _useAuth.authUser,
    userSignOut = _useAuth.userSignOut;
  var userMenuOptions = __jsx("ul", {
    className: "gx-user-popover"
  }, __jsx("li", null, "My Account"), __jsx("li", null, "Connections"), __jsx("li", {
    onClick: function onClick() {
      return userSignOut();
    }
  }, "Logout"));
  return authUser ? __jsx("div", {
    className: "gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    placement: "bottomRight",
    content: userMenuOptions,
    trigger: "click"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "/images",
    className: "gx-size-40 gx-pointer gx-mr-3",
    alt: ""
  }), __jsx("span", {
    className: "gx-avatar-name"
  }, authUser.name, __jsx("i", {
    className: "icon icon-chevron-down gx-fs-xxs gx-ml-2"
  })))) : null;
};
_s(UserProfile, "2hAxZW7SAm53O0k3gkTohduG7oI=", false, function () {
  return [_util_use_auth__WEBPACK_IMPORTED_MODULE_2__["useAuth"]];
});
_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);
var _c;
$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvU2lkZWJhci9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInVzZUF1dGgiLCJhdXRoVXNlciIsInVzZXJTaWduT3V0IiwidXNlck1lbnVPcHRpb25zIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVztBQUNVO0FBRS9DLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLEdBQVM7RUFBQTtFQUN4QixlQUFnQ0MsOERBQU8sRUFBRTtJQUFsQ0MsUUFBUSxZQUFSQSxRQUFRO0lBQUVDLFdBQVcsWUFBWEEsV0FBVztFQUU1QixJQUFNQyxlQUFlLEdBQ25CO0lBQUksU0FBUyxFQUFDO0VBQWlCLEdBQzdCLGtCQUFJLFlBQVUsQ0FBSyxFQUNuQixrQkFBSSxhQUFXLENBQUssRUFDcEI7SUFBSSxPQUFPLEVBQUU7TUFBQSxPQUFNRCxXQUFXLEVBQUU7SUFBQTtFQUFDLEdBQUMsUUFDbEMsQ0FBSyxDQUVSO0VBRUQsT0FBT0QsUUFBUSxHQUNiO0lBQUssU0FBUyxFQUFDO0VBQXlELEdBQ3RFLE1BQUMsNENBQU87SUFBQyxTQUFTLEVBQUMsYUFBYTtJQUFDLE9BQU8sRUFBRUUsZUFBZ0I7SUFBQyxPQUFPLEVBQUM7RUFBTyxHQUN4RSxNQUFDLDJDQUFNO0lBQUMsR0FBRyxFQUFDLFNBQVM7SUFBQyxTQUFTLEVBQUMsK0JBQStCO0lBQUMsR0FBRyxFQUFDO0VBQUUsRUFBRSxFQUN4RTtJQUFNLFNBQVMsRUFBQztFQUFnQixHQUFFRixRQUFRLENBQUNHLElBQUksRUFBQztJQUFHLFNBQVMsRUFBQztFQUEwQyxFQUFFLENBQU8sQ0FDeEcsQ0FDTixHQUNKLElBQUk7QUFDVixDQUFDO0FBQUMsR0FwQklMLFdBQVc7RUFBQSxRQUNpQkMsc0RBQU87QUFBQTtBQUFBLEtBRG5DRCxXQUFXO0FBc0JGQSwwRUFBVyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmFmNzM1YzlhMmQ2ZWNiNGFiODI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXZhdGFyLCBQb3BvdmVyfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge3VzZUF1dGh9IGZyb20gXCIuLi8uLi8uLi91dGlsL3VzZS1hdXRoXCI7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcclxuICBjb25zdCB7YXV0aFVzZXIsIHVzZXJTaWduT3V0fSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3QgdXNlck1lbnVPcHRpb25zID0gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImd4LXVzZXItcG9wb3ZlclwiPlxyXG4gICAgICA8bGk+TXkgQWNjb3VudDwvbGk+XHJcbiAgICAgIDxsaT5Db25uZWN0aW9uczwvbGk+XHJcbiAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB1c2VyU2lnbk91dCgpfT5Mb2dvdXRcclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGF1dGhVc2VyID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1mbGV4LXJvdyBneC1hbGlnbi1pdGVtcy1jZW50ZXIgZ3gtbWItNCBneC1hdmF0YXItcm93XCI+XHJcbiAgICAgIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17dXNlck1lbnVPcHRpb25zfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICA8QXZhdGFyIHNyYz1cIi9pbWFnZXNcIiBjbGFzc05hbWU9XCJneC1zaXplLTQwIGd4LXBvaW50ZXIgZ3gtbXItM1wiIGFsdD1cIlwiLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1hdmF0YXItbmFtZVwiPnthdXRoVXNlci5uYW1lfTxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGV2cm9uLWRvd24gZ3gtZnMteHhzIGd4LW1sLTJcIi8+PC9zcGFuPlxyXG4gICAgICA8L1BvcG92ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApIDogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=