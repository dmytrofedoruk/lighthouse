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
  }, "example@test.com"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/dashboard"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "Dashboard"))), __jsx("button", null, __jsx("img", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvU2lkZWJhci9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInVzZUF1dGgiLCJhdXRoVXNlciIsInVzZXJTaWduT3V0IiwidGV4dEFsaWduIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNXO0FBQ1U7QUFDbEI7QUFFN0IsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQVcsR0FBUztFQUFBO0VBQ3hCLGVBQWdDQyw4REFBTyxFQUFFO0lBQWxDQyxRQUFRLFlBQVJBLFFBQVE7SUFBRUMsV0FBVyxZQUFYQSxXQUFXOztFQUU1QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBLE9BQU9ELFFBQVEsR0FDYjtJQUFLLFNBQVMsRUFBQyxnQ0FBZ0M7SUFBQyxLQUFLLEVBQUU7TUFBQ0UsU0FBUyxFQUFFO0lBQVE7RUFBRSxHQUV6RSxNQUFDLDJDQUFNO0lBQUMsR0FBRyxFQUFDLHdCQUF3QjtJQUFDLFNBQVMsRUFBQywrQkFBK0I7SUFBQyxHQUFHLEVBQUM7RUFBRSxFQUFFLEVBQ3ZGO0lBQUssU0FBUyxFQUFDO0VBQXdCLEdBQUVGLFFBQVEsQ0FBQ0csSUFBSSxDQUFPLEVBQzdEO0lBQUssU0FBUyxFQUFDO0VBQXNDLEdBQUMsa0JBQWdCLENBQU0sRUFFOUUsTUFBQyxnREFBSTtJQUFDLElBQUksRUFBQztFQUFZLEdBQ2IsaUJBQUc7SUFBRyxTQUFTLEVBQUM7RUFBbUIsRUFBRSxzQkFBTSxXQUFTLENBQU8sQ0FBSSxDQUMxRCxFQUNmLHNCQUFRO0lBQUssR0FBRyxFQUFDO0VBQXNCLEVBQUUsQ0FBUyxFQUNsRDtJQUFRLE9BQU8sRUFBRTtNQUFBLE9BQU1GLFdBQVcsRUFBRTtJQUFBO0VBQUMsR0FBQztJQUFLLEdBQUcsRUFBQztFQUFvQixFQUFFLENBQVMsQ0FDMUUsR0FDSixJQUFJO0FBQ1YsQ0FBQztBQUFDLEdBMUJJSCxXQUFXO0VBQUEsUUFDaUJDLHNEQUFPO0FBQUE7QUFBQSxLQURuQ0QsV0FBVztBQTRCRkEsMEVBQVcsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMzFlZmE0YTBjNmZmNzdlMGMyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhciwgUG9wb3Zlcn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiLi4vLi4vLi4vdXRpbC91c2UtYXV0aFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcclxuICBjb25zdCB7YXV0aFVzZXIsIHVzZXJTaWduT3V0fSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgLy8gY29uc3QgdXNlck1lbnVPcHRpb25zID0gKFxyXG4gIC8vICAgPHVsIGNsYXNzTmFtZT1cImd4LXVzZXItcG9wb3ZlclwiPlxyXG4gIC8vICAgICA8bGk+TXkgQWNjb3VudDwvbGk+XHJcbiAgLy8gICAgIDxsaT5Db25uZWN0aW9uczwvbGk+XHJcbiAgLy8gICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB1c2VyU2lnbk91dCgpfT5Mb2dvdXRcclxuICAvLyAgICAgPC9saT5cclxuICAvLyAgIDwvdWw+XHJcbiAgLy8gKTtcclxuXHJcbiAgcmV0dXJuIGF1dGhVc2VyID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgZ3gtYWxpZ24taXRlbXMtY2VudGVyIGd4LW1iLTRcIiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICB7LyogPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXt1c2VyTWVudU9wdGlvbnN9IHRyaWdnZXI9XCJjbGlja1wiPiAqL31cclxuICAgICAgICA8QXZhdGFyIHNyYz1cIi9pbWFnZXMvUmVjdGFuZ2xlMi5wbmdcIiBjbGFzc05hbWU9XCJneC1zaXplLTUwIGd4LXBvaW50ZXIgZ3gtbXItM1wiIGFsdD1cIlwiLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWF2YXRhci1uYW1lIGd4LW10LTJcIj57YXV0aFVzZXIubmFtZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWF2YXRhci1uYW1lIGd4LW10LTIgZ3gtdGV4dC1saWdodFwiPmV4YW1wbGVAdGVzdC5jb208L2Rpdj5cclxuICAgICAgey8qIDwvUG9wb3Zlcj4gKi99XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24td2lkZ2V0c1wiLz48c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgPGJ1dHRvbj48aW1nIHNyYz1cIi9pbWFnZXMvc2V0dGluZ3MucG5nXCIvPjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVzZXJTaWduT3V0KCl9PjxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvdXQucG5nXCIvPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9