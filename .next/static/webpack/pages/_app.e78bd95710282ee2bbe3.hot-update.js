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
    className: " gx-align-items-center gx-mb-4",
    style: {
      text: text
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "/images/Rectangle2.png",
    className: "gx-size-40 gx-pointer gx-mr-3",
    alt: ""
  }), __jsx("div", {
    className: "gx-avatar-name"
  }, authUser.name, __jsx("i", {
    className: "icon icon-chevron-down gx-fs-xxs gx-ml-2"
  }))) : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvU2lkZWJhci9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInVzZUF1dGgiLCJhdXRoVXNlciIsInVzZXJTaWduT3V0IiwidXNlck1lbnVPcHRpb25zIiwidGV4dCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1c7QUFDVTtBQUUvQyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFTO0VBQUE7RUFDeEIsZUFBZ0NDLDhEQUFPLEVBQUU7SUFBbENDLFFBQVEsWUFBUkEsUUFBUTtJQUFFQyxXQUFXLFlBQVhBLFdBQVc7RUFFNUIsSUFBTUMsZUFBZSxHQUNuQjtJQUFJLFNBQVMsRUFBQztFQUFpQixHQUM3QixrQkFBSSxZQUFVLENBQUssRUFDbkIsa0JBQUksYUFBVyxDQUFLLEVBQ3BCO0lBQUksT0FBTyxFQUFFO01BQUEsT0FBTUQsV0FBVyxFQUFFO0lBQUE7RUFBQyxHQUFDLFFBQ2xDLENBQUssQ0FFUjtFQUVELE9BQU9ELFFBQVEsR0FDYjtJQUFLLFNBQVMsRUFBQyxnQ0FBZ0M7SUFBQyxLQUFLLEVBQUU7TUFBQ0csSUFBSSxFQUFKQTtJQUFJO0VBQUUsR0FFMUQsTUFBQywyQ0FBTTtJQUFDLEdBQUcsRUFBQyx3QkFBd0I7SUFBQyxTQUFTLEVBQUMsK0JBQStCO0lBQUMsR0FBRyxFQUFDO0VBQUUsRUFBRSxFQUN2RjtJQUFLLFNBQVMsRUFBQztFQUFnQixHQUFFSCxRQUFRLENBQUNJLElBQUksRUFBQztJQUFHLFNBQVMsRUFBQztFQUEwQyxFQUFFLENBQU0sQ0FFNUcsR0FDSixJQUFJO0FBQ1YsQ0FBQztBQUFDLEdBcEJJTixXQUFXO0VBQUEsUUFDaUJDLHNEQUFPO0FBQUE7QUFBQSxLQURuQ0QsV0FBVztBQXNCRkEsMEVBQVcsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lNzhiZDk1NzEwMjgyZWUyYmJlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhciwgUG9wb3Zlcn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiLi4vLi4vLi4vdXRpbC91c2UtYXV0aFwiO1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgY29uc3Qge2F1dGhVc2VyLCB1c2VyU2lnbk91dH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHVzZXJNZW51T3B0aW9ucyA9IChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJneC11c2VyLXBvcG92ZXJcIj5cclxuICAgICAgPGxpPk15IEFjY291bnQ8L2xpPlxyXG4gICAgICA8bGk+Q29ubmVjdGlvbnM8L2xpPlxyXG4gICAgICA8bGkgb25DbGljaz17KCkgPT4gdXNlclNpZ25PdXQoKX0+TG9nb3V0XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiBhdXRoVXNlciA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGd4LWFsaWduLWl0ZW1zLWNlbnRlciBneC1tYi00XCIgc3R5bGU9e3t0ZXh0fX0+XHJcbiAgICAgIHsvKiA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e3VzZXJNZW51T3B0aW9uc30gdHJpZ2dlcj1cImNsaWNrXCI+ICovfVxyXG4gICAgICAgIDxBdmF0YXIgc3JjPVwiL2ltYWdlcy9SZWN0YW5nbGUyLnBuZ1wiIGNsYXNzTmFtZT1cImd4LXNpemUtNDAgZ3gtcG9pbnRlciBneC1tci0zXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXZhdGFyLW5hbWVcIj57YXV0aFVzZXIubmFtZX08aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hldnJvbi1kb3duIGd4LWZzLXh4cyBneC1tbC0yXCIvPjwvZGl2PlxyXG4gICAgICB7LyogPC9Qb3BvdmVyPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==