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
  }, "example@test.com"), __jsx("div", {
    className: "gx-mt-3"
  }, __jsx("a", {
    href: "/sr",
    className: "logout_button",
    style: {
      marginRight: "10px"
    }
  }, __jsx("img", {
    style: {
      width: "13px"
    },
    src: "/images/settings.png"
  })), "href=\"\"", __jsx("button", {
    className: "logout_button",
    onClick: function onClick() {
      return userSignOut();
    }
  }, __jsx("img", {
    style: {
      width: "13px"
    },
    src: "/images/logout.png"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvU2lkZWJhci9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInVzZUF1dGgiLCJhdXRoVXNlciIsInVzZXJTaWduT3V0IiwidGV4dEFsaWduIiwibmFtZSIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVztBQUNVO0FBQ2xCO0FBRTdCLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLEdBQVM7RUFBQTtFQUN4QixlQUFnQ0MsOERBQU8sRUFBRTtJQUFsQ0MsUUFBUSxZQUFSQSxRQUFRO0lBQUVDLFdBQVcsWUFBWEEsV0FBVzs7RUFFNUI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxPQUFPRCxRQUFRLEdBQ2I7SUFBSyxTQUFTLEVBQUMsZ0NBQWdDO0lBQUMsS0FBSyxFQUFFO01BQUNFLFNBQVMsRUFBRTtJQUFRO0VBQUUsR0FFekUsTUFBQywyQ0FBTTtJQUFDLEdBQUcsRUFBQyx3QkFBd0I7SUFBQyxTQUFTLEVBQUMsK0JBQStCO0lBQUMsR0FBRyxFQUFDO0VBQUUsRUFBRSxFQUN2RjtJQUFLLFNBQVMsRUFBQztFQUF3QixHQUFFRixRQUFRLENBQUNHLElBQUksQ0FBTyxFQUM3RDtJQUFLLFNBQVMsRUFBQztFQUFzQyxHQUFDLGtCQUFnQixDQUFNLEVBRTlFO0lBQUssU0FBUyxFQUFDO0VBQVMsR0FDdEI7SUFBRyxJQUFJLEVBQUMsS0FBSztJQUFDLFNBQVMsRUFBQyxlQUFlO0lBQUMsS0FBSyxFQUFFO01BQUNDLFdBQVcsRUFBRTtJQUFNO0VBQUUsR0FBQztJQUFLLEtBQUssRUFBRTtNQUFDQyxLQUFLLEVBQUU7SUFBTSxDQUFFO0lBQUMsR0FBRyxFQUFDO0VBQXNCLEVBQUUsQ0FBSSxhQUNuSTtJQUFRLFNBQVMsRUFBQyxlQUFlO0lBQUMsT0FBTyxFQUFFO01BQUEsT0FBTUosV0FBVyxFQUFFO0lBQUE7RUFBQyxHQUFDO0lBQUssS0FBSyxFQUFFO01BQUNJLEtBQUssRUFBRTtJQUFNLENBQUU7SUFBQyxHQUFHLEVBQUM7RUFBb0IsRUFBRSxDQUFTLENBQzVILENBQ0YsR0FDSixJQUFJO0FBQ1YsQ0FBQztBQUFDLEdBekJJUCxXQUFXO0VBQUEsUUFDaUJDLHNEQUFPO0FBQUE7QUFBQSxLQURuQ0QsV0FBVztBQTJCRkEsMEVBQVcsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZjJhY2RlM2NkMjA1Mjk3YmM1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhciwgUG9wb3Zlcn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiLi4vLi4vLi4vdXRpbC91c2UtYXV0aFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcclxuICBjb25zdCB7YXV0aFVzZXIsIHVzZXJTaWduT3V0fSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgLy8gY29uc3QgdXNlck1lbnVPcHRpb25zID0gKFxyXG4gIC8vICAgPHVsIGNsYXNzTmFtZT1cImd4LXVzZXItcG9wb3ZlclwiPlxyXG4gIC8vICAgICA8bGk+TXkgQWNjb3VudDwvbGk+XHJcbiAgLy8gICAgIDxsaT5Db25uZWN0aW9uczwvbGk+XHJcbiAgLy8gICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB1c2VyU2lnbk91dCgpfT5Mb2dvdXRcclxuICAvLyAgICAgPC9saT5cclxuICAvLyAgIDwvdWw+XHJcbiAgLy8gKTtcclxuXHJcbiAgcmV0dXJuIGF1dGhVc2VyID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgZ3gtYWxpZ24taXRlbXMtY2VudGVyIGd4LW1iLTRcIiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICB7LyogPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXt1c2VyTWVudU9wdGlvbnN9IHRyaWdnZXI9XCJjbGlja1wiPiAqL31cclxuICAgICAgICA8QXZhdGFyIHNyYz1cIi9pbWFnZXMvUmVjdGFuZ2xlMi5wbmdcIiBjbGFzc05hbWU9XCJneC1zaXplLTUwIGd4LXBvaW50ZXIgZ3gtbXItM1wiIGFsdD1cIlwiLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWF2YXRhci1uYW1lIGd4LW10LTJcIj57YXV0aFVzZXIubmFtZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWF2YXRhci1uYW1lIGd4LW10LTIgZ3gtdGV4dC1saWdodFwiPmV4YW1wbGVAdGVzdC5jb208L2Rpdj5cclxuICAgICAgey8qIDwvUG9wb3Zlcj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbXQtM1wiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvc3JcIiBjbGFzc05hbWU9XCJsb2dvdXRfYnV0dG9uXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxMHB4XCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTNweFwifX0gc3JjPVwiL2ltYWdlcy9zZXR0aW5ncy5wbmdcIi8+PC9hPmhyZWY9XCJcIiBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ291dF9idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB1c2VyU2lnbk91dCgpfT48aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTNweFwifX0gc3JjPVwiL2ltYWdlcy9sb2dvdXQucG5nXCIvPjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==