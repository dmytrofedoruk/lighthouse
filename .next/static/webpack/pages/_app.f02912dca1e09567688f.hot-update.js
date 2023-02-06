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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
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
  }, "example@test.com"), __jsx("div", null), __jsx("button", null, __jsx("img", {
    src: "/images/settings.png"
  })), __jsx("button", {
    onClick: function onClick() {
      return userSignOut();
    }
  }, __jsx("img", {
    src: "/images/logout.png"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvU2lkZWJhci9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInVzZUF1dGgiLCJhdXRoVXNlciIsInVzZXJTaWduT3V0IiwidGV4dEFsaWduIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNXO0FBQ1U7QUFDbEI7QUFFN0IsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQVcsR0FBUztFQUFBO0VBQ3hCLGVBQWdDQyw4REFBTyxFQUFFO0lBQWxDQyxRQUFRLFlBQVJBLFFBQVE7SUFBRUMsV0FBVyxZQUFYQSxXQUFXOztFQUU1QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBLE9BQU9ELFFBQVEsR0FDYjtJQUFLLFNBQVMsRUFBQyxnQ0FBZ0M7SUFBQyxLQUFLLEVBQUU7TUFBQ0UsU0FBUyxFQUFFO0lBQVE7RUFBRSxHQUV6RSxNQUFDLDJDQUFNO0lBQUMsR0FBRyxFQUFDLHdCQUF3QjtJQUFDLFNBQVMsRUFBQywrQkFBK0I7SUFBQyxHQUFHLEVBQUM7RUFBRSxFQUFFLEVBQ3ZGO0lBQUssU0FBUyxFQUFDO0VBQXdCLEdBQUVGLFFBQVEsQ0FBQ0csSUFBSSxDQUFPLEVBQzdEO0lBQUssU0FBUyxFQUFDO0VBQXNDLEdBQUMsa0JBQWdCLENBQU0sRUFFOUUsa0JBQVcsRUFDWCxzQkFBUTtJQUFLLEdBQUcsRUFBQztFQUFzQixFQUFFLENBQVMsRUFDbEQ7SUFBUSxPQUFPLEVBQUU7TUFBQSxPQUFNRixXQUFXLEVBQUU7SUFBQTtFQUFDLEdBQUM7SUFBSyxHQUFHLEVBQUM7RUFBb0IsRUFBRSxDQUFTLENBQzFFLEdBQ0osSUFBSTtBQUNWLENBQUM7QUFBQyxHQXhCSUgsV0FBVztFQUFBLFFBQ2lCQyxzREFBTztBQUFBO0FBQUEsS0FEbkNELFdBQVc7QUEwQkZBLDBFQUFXLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjAyOTEyZGNhMWUwOTU2NzY4OGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBdmF0YXIsIFBvcG92ZXJ9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlLWF1dGhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgY29uc3Qge2F1dGhVc2VyLCB1c2VyU2lnbk91dH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIC8vIGNvbnN0IHVzZXJNZW51T3B0aW9ucyA9IChcclxuICAvLyAgIDx1bCBjbGFzc05hbWU9XCJneC11c2VyLXBvcG92ZXJcIj5cclxuICAvLyAgICAgPGxpPk15IEFjY291bnQ8L2xpPlxyXG4gIC8vICAgICA8bGk+Q29ubmVjdGlvbnM8L2xpPlxyXG4gIC8vICAgICA8bGkgb25DbGljaz17KCkgPT4gdXNlclNpZ25PdXQoKX0+TG9nb3V0XHJcbiAgLy8gICAgIDwvbGk+XHJcbiAgLy8gICA8L3VsPlxyXG4gIC8vICk7XHJcblxyXG4gIHJldHVybiBhdXRoVXNlciA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGd4LWFsaWduLWl0ZW1zLWNlbnRlciBneC1tYi00XCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgey8qIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17dXNlck1lbnVPcHRpb25zfSB0cmlnZ2VyPVwiY2xpY2tcIj4gKi99XHJcbiAgICAgICAgPEF2YXRhciBzcmM9XCIvaW1hZ2VzL1JlY3RhbmdsZTIucG5nXCIgY2xhc3NOYW1lPVwiZ3gtc2l6ZS01MCBneC1wb2ludGVyIGd4LW1yLTNcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hdmF0YXItbmFtZSBneC1tdC0yXCI+e2F1dGhVc2VyLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hdmF0YXItbmFtZSBneC1tdC0yIGd4LXRleHQtbGlnaHRcIj5leGFtcGxlQHRlc3QuY29tPC9kaXY+XHJcbiAgICAgIHsvKiA8L1BvcG92ZXI+ICovfVxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8YnV0dG9uPjxpbWcgc3JjPVwiL2ltYWdlcy9zZXR0aW5ncy5wbmdcIi8+PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXNlclNpZ25PdXQoKX0+PGltZyBzcmM9XCIvaW1hZ2VzL2xvZ291dC5wbmdcIi8+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApIDogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=