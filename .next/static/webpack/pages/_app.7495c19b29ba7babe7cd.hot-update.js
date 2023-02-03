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

  // const userMenuOptions = (
  //   <ul className="gx-user-popover">
  //     <li>My Account</li>
  //     <li>Connections</li>
  //     <li onClick={() => userSignOut()}>Logout
  //     </li>
  //   </ul>
  // );

  return authUser ? __jsx("div", {
    className: " gx-align-items-center gx-mb-4",
    style: {
      textAlign: "center"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "/images/Rectangle2.png",
    className: "gx-size-50 gx-pointer gx-mr-3",
    alt: ""
  }), __jsx("div", {
    className: "gx-avatar-name gx-mt-2"
  }, authUser.name), __jsx("div", {
    className: "gx-avatar-name gx-mt-2 gx-text-light"
  }, "example@test.com")) : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvU2lkZWJhci9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInVzZUF1dGgiLCJhdXRoVXNlciIsInVzZXJTaWduT3V0IiwidGV4dEFsaWduIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVztBQUNVO0FBRS9DLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLEdBQVM7RUFBQTtFQUN4QixlQUFnQ0MsOERBQU8sRUFBRTtJQUFsQ0MsUUFBUSxZQUFSQSxRQUFRO0lBQUVDLFdBQVcsWUFBWEEsV0FBVzs7RUFFNUI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxPQUFPRCxRQUFRLEdBQ2I7SUFBSyxTQUFTLEVBQUMsZ0NBQWdDO0lBQUMsS0FBSyxFQUFFO01BQUNFLFNBQVMsRUFBRTtJQUFRO0VBQUUsR0FFekUsTUFBQywyQ0FBTTtJQUFDLEdBQUcsRUFBQyx3QkFBd0I7SUFBQyxTQUFTLEVBQUMsK0JBQStCO0lBQUMsR0FBRyxFQUFDO0VBQUUsRUFBRSxFQUN2RjtJQUFLLFNBQVMsRUFBQztFQUF3QixHQUFFRixRQUFRLENBQUNHLElBQUksQ0FBTyxFQUM3RDtJQUFLLFNBQVMsRUFBQztFQUFzQyxHQUFDLGtCQUFnQixDQUFNLENBRTFFLEdBQ0osSUFBSTtBQUNWLENBQUM7QUFBQyxHQXJCSUwsV0FBVztFQUFBLFFBQ2lCQyxzREFBTztBQUFBO0FBQUEsS0FEbkNELFdBQVc7QUF1QkZBLDBFQUFXLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzQ5NWMxOWIyOWJhN2JhYmU3Y2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBdmF0YXIsIFBvcG92ZXJ9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlLWF1dGhcIjtcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHthdXRoVXNlciwgdXNlclNpZ25PdXR9ID0gdXNlQXV0aCgpO1xyXG5cclxuICAvLyBjb25zdCB1c2VyTWVudU9wdGlvbnMgPSAoXHJcbiAgLy8gICA8dWwgY2xhc3NOYW1lPVwiZ3gtdXNlci1wb3BvdmVyXCI+XHJcbiAgLy8gICAgIDxsaT5NeSBBY2NvdW50PC9saT5cclxuICAvLyAgICAgPGxpPkNvbm5lY3Rpb25zPC9saT5cclxuICAvLyAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHVzZXJTaWduT3V0KCl9PkxvZ291dFxyXG4gIC8vICAgICA8L2xpPlxyXG4gIC8vICAgPC91bD5cclxuICAvLyApO1xyXG5cclxuICByZXR1cm4gYXV0aFVzZXIgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBneC1hbGlnbi1pdGVtcy1jZW50ZXIgZ3gtbWItNFwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgIHsvKiA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e3VzZXJNZW51T3B0aW9uc30gdHJpZ2dlcj1cImNsaWNrXCI+ICovfVxyXG4gICAgICAgIDxBdmF0YXIgc3JjPVwiL2ltYWdlcy9SZWN0YW5nbGUyLnBuZ1wiIGNsYXNzTmFtZT1cImd4LXNpemUtNTAgZ3gtcG9pbnRlciBneC1tci0zXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXZhdGFyLW5hbWUgZ3gtbXQtMlwiPnthdXRoVXNlci5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXZhdGFyLW5hbWUgZ3gtbXQtMiBneC10ZXh0LWxpZ2h0XCI+ZXhhbXBsZUB0ZXN0LmNvbTwvZGl2PlxyXG4gICAgICB7LyogPC9Qb3BvdmVyPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==