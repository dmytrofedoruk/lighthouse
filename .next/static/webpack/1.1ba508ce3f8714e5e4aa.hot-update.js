webpackHotUpdate_N_E(1,{

/***/ "./routes/userAuth/SignIn/index.js":
/*!*****************************************!*\
  !*** ./routes/userAuth/SignIn/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/use-auth */ "./util/use-auth.js");
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app/components/CircularProgress */ "./app/components/CircularProgress/index.js");
var _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SignIn = function SignIn(props) {
  _s();
  var _useAuth = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_4__["useAuth"])(),
    isLoading = _useAuth.isLoading,
    userLogin = _useAuth.userLogin;
  var onFinishFailed = function onFinishFailed(errorInfo) {};
  var onFinish = function onFinish(values) {
    userLogin(values);
  };
  return (
    // <div className="gx-app-login-wrap">
    // <div className="gx-app-login-container">
    __jsx("div", {
      className: "gx-app-login-main-content"
    }, __jsx("div", {
      className: "gx-app-logo-content"
    }, __jsx("div", {
      className: "gx-app-logo-wid"
    }, __jsx("h1", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "app.userAuth.signIn"
    })), __jsx("p", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "app.userAuth.bySigning"
    })), __jsx("p", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "app.userAuth.getAccount"
    })))), __jsx("div", {
      className: "gx-app-login-content"
    }, __jsx("div", {
      className: "gx-app-logo"
    }, __jsx("img", {
      alt: "example",
      src: "/images/logo.png"
    })), __jsx("div", null, __jsx("h1", null, "Good Afternoon \uD83D\uDC4B"), __jsx("p", null, "Lorem ipsum dolor sit amet consectetu")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      initialValues: {
        remember: true
      },
      name: "basic",
      onFinish: onFinish,
      onFinishFailed: onFinishFailed,
      layout: "vertical",
      className: "gx-signin-form gx-form-row0"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      style: {
        fontWeight: "500"
      },
      initialValue: "demo@example.com",
      label: "Email",
      rules: [{
        required: true,
        message: 'The input is not valid E-mail!'
      }],
      name: "email"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        borderRadius: "22px"
      },
      placeholder: "Email"
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      initialValue: "demo#123",
      label: "Password",
      rules: [{
        required: true,
        message: 'Please input your Password!'
      }],
      name: "password"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        borderRadius: "22px"
      },
      type: "password",
      placeholder: "Password"
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      valuePropName: "checked"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], null, "Remember me"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/forgot-password"
    }, __jsx("a", {
      className: "gx-login-form-forgot"
    }, "Forgot password"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      className: "gx-mb-0",
      htmlType: "submit"
    }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "app.userAuth.signIn"
    })), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "app.userAuth.or"
    })), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/signup"
    }, __jsx("a", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "app.userAuth.signUp"
    })))), __jsx("span", {
      className: "gx-text-light gx-fs-sm"
    }, " demo user email: 'demo@example.com' and password: 'demo#123'"))), isLoading && __jsx("div", {
      className: "gx-loader-view"
    }, __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_5__["default"], null)))
    // </div>
    // </div>
  );
};
_s(SignIn, "TRTBCuk4rGQG+xqcUgw4YhhZyso=", false, function () {
  return [_util_use_auth__WEBPACK_IMPORTED_MODULE_4__["useAuth"]];
});
_c = SignIn;
/* harmony default export */ __webpack_exports__["default"] = (SignIn);
var _c;
$RefreshReg$(_c, "SignIn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL3VzZXJBdXRoL1NpZ25Jbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInVzZUF1dGgiLCJpc0xvYWRpbmciLCJ1c2VyTG9naW4iLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsIm9uRmluaXNoIiwidmFsdWVzIiwicmVtZW1iZXIiLCJmb250V2VpZ2h0IiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDeUI7QUFDdkI7QUFDMEI7QUFDUDtBQUN5QjtBQUV4RSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBTSxDQUFJQyxLQUFLLEVBQUs7RUFBQTtFQUN4QixlQUErQkMsOERBQU8sRUFBRTtJQUFqQ0MsU0FBUyxZQUFUQSxTQUFTO0lBQUVDLFNBQVMsWUFBVEEsU0FBUztFQUUzQixJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBR0MsU0FBUyxFQUFJLENBQ3BDLENBQUM7RUFFRCxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxDQUFHQyxNQUFNLEVBQUk7SUFDekJKLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDO0VBQ25CLENBQUM7RUFFRDtJQUNFO0lBQ0U7SUFDRTtNQUFLLFNBQVMsRUFBQztJQUEyQixHQUN4QztNQUFLLFNBQVMsRUFBQztJQUFxQixHQUlsQztNQUFLLFNBQVMsRUFBQztJQUFpQixHQUM5QixrQkFBSSxNQUFDLDBEQUFZO01BQUMsRUFBRSxFQUFDO0lBQXFCLEVBQUUsQ0FBSyxFQUNqRCxpQkFBRyxNQUFDLDBEQUFZO01BQUMsRUFBRSxFQUFDO0lBQXdCLEVBQUUsQ0FBSSxFQUNsRCxpQkFBRyxNQUFDLDBEQUFZO01BQUMsRUFBRSxFQUFDO0lBQXlCLEVBQUUsQ0FBSSxDQUMvQyxDQUlGLEVBQ047TUFBSyxTQUFTLEVBQUM7SUFBc0IsR0FDbEM7TUFBSyxTQUFTLEVBQUM7SUFBYSxHQUMzQjtNQUFLLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDO0lBQWtCLEVBQUUsQ0FDdkMsRUFDTixtQkFDRSxrQkFBSSw2QkFBaUIsQ0FBSyxFQUMxQixpQkFBRyx1Q0FBcUMsQ0FBSSxDQUN4QyxFQUNOLE1BQUMseUNBQUk7TUFDSCxhQUFhLEVBQUU7UUFBQ0MsUUFBUSxFQUFFO01BQUksQ0FBRTtNQUNoQyxJQUFJLEVBQUMsT0FBTztNQUNaLFFBQVEsRUFBRUYsUUFBUztNQUNuQixjQUFjLEVBQUVGLGNBQWU7TUFDL0IsTUFBTSxFQUFDLFVBQVU7TUFDakIsU0FBUyxFQUFDO0lBQTZCLEdBRXZDLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQ1YsS0FBSyxFQUFFO1FBQUNLLFVBQVUsRUFBRTtNQUFLLENBQUU7TUFDekIsWUFBWSxFQUFDLGtCQUFrQjtNQUMvQixLQUFLLEVBQUMsT0FBTztNQUNiLEtBQUssRUFBRSxDQUFDO1FBQUNDLFFBQVEsRUFBRSxJQUFJO1FBQUVDLE9BQU8sRUFBRTtNQUFnQyxDQUFDLENBQUU7TUFBQyxJQUFJLEVBQUM7SUFBTyxHQUNsRixNQUFDLDBDQUFLO01BQUMsS0FBSyxFQUFFO1FBQUNDLFlBQVksRUFBRTtNQUFNLENBQUU7TUFBQyxXQUFXLEVBQUM7SUFBTyxFQUFFLENBQ2pELEVBQ1osTUFBQyx5Q0FBSSxDQUFDLElBQUk7TUFDUixZQUFZLEVBQUMsVUFBVTtNQUN2QixLQUFLLEVBQUMsVUFBVTtNQUNoQixLQUFLLEVBQUUsQ0FBQztRQUFDRixRQUFRLEVBQUUsSUFBSTtRQUFFQyxPQUFPLEVBQUU7TUFBNkIsQ0FBQyxDQUFFO01BQUMsSUFBSSxFQUFDO0lBQVUsR0FDbEYsTUFBQywwQ0FBSztNQUFDLEtBQUssRUFBRTtRQUFDQyxZQUFZLEVBQUU7TUFBTSxDQUFFO01BQUMsSUFBSSxFQUFDLFVBQVU7TUFBQyxXQUFXLEVBQUM7SUFBVSxFQUFFLENBQ3BFLEVBQ1osTUFBQyx5Q0FBSSxDQUFDLElBQUk7TUFBQyxhQUFhLEVBQUM7SUFBUyxHQUNoQyxNQUFDLDZDQUFRLFFBQUMsYUFBVyxDQUFXLEVBQ2hDLE1BQUMsZ0RBQUk7TUFBQyxJQUFJLEVBQUM7SUFBa0IsR0FDM0I7TUFBRyxTQUFTLEVBQUM7SUFBc0IsR0FBQyxpQkFBZSxDQUFJLENBQU8sQ0FDdEQsRUFDWixNQUFDLHlDQUFJLENBQUMsSUFBSSxRQUNSLE1BQUMsMkNBQU07TUFBQyxJQUFJLEVBQUMsU0FBUztNQUFDLFNBQVMsRUFBQyxTQUFTO01BQUMsUUFBUSxFQUFDO0lBQVEsR0FDMUQsTUFBQywwREFBWTtNQUFDLEVBQUUsRUFBQztJQUFxQixFQUFFLENBQ2pDLEVBQ1Qsb0JBQU0sTUFBQywwREFBWTtNQUFDLEVBQUUsRUFBQztJQUFpQixFQUFFLENBQU8sS0FBQyxRQUFDLGdEQUFJO01BQUMsSUFBSSxFQUFDO0lBQVMsR0FDdEUsaUJBQ0UsTUFBQywwREFBWTtNQUFDLEVBQUUsRUFBQztJQUFxQixFQUFFLENBQ3RDLENBQ0MsQ0FDSyxFQUNaO01BQ0UsU0FBUyxFQUFDO0lBQXdCLEdBQUMsK0RBQTZELENBQU8sQ0FDcEcsQ0FDSCxFQUNMVixTQUFTLElBQ1Y7TUFBSyxTQUFTLEVBQUM7SUFBZ0IsR0FDN0IsTUFBQyx3RUFBZ0IsT0FBRSxDQUNmO0lBRVY7SUFDRjtFQUFBO0FBRUosQ0FBQztBQUFDLEdBbkZJSCxNQUFNO0VBQUEsUUFDcUJFLHNEQUFPO0FBQUE7QUFBQSxLQURsQ0YsTUFBTTtBQXFGR0EscUVBQU0sRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS4xYmE1MDhjZTNmODcxNGU1ZTRhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0J1dHRvbiwgQ2hlY2tib3gsIEZvcm0sIElucHV0fSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlLWF1dGhcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IFNpZ25JbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtpc0xvYWRpbmcsIHVzZXJMb2dpbn0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gZXJyb3JJbmZvID0+IHtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9IHZhbHVlcyA9PiB7XHJcbiAgICB1c2VyTG9naW4odmFsdWVzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4td3JhcFwiPlxyXG4gICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi1tYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ28tY29udGVudFwiPlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nby1jb250ZW50LWJnXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjcyeDM5NVwiIGFsdD0nTmVhdHVyZScvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ28td2lkXCI+XHJcbiAgICAgICAgICAgICAgPGgxPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAudXNlckF1dGguc2lnbkluXCIvPjwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+PEludGxNZXNzYWdlcyBpZD1cImFwcC51c2VyQXV0aC5ieVNpZ25pbmdcIi8+PC9wPlxyXG4gICAgICAgICAgICAgIDxwPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAudXNlckF1dGguZ2V0QWNjb3VudFwiLz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiZXhhbXBsZVwiIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiZXhhbXBsZVwiIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMT5Hb29kIEFmdGVybm9vbiDwn5GLPC9oMT5cclxuICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7cmVtZW1iZXI6IHRydWV9fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtc2lnbmluLWZvcm0gZ3gtZm9ybS1yb3cwXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiNTAwXCJ9fVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiZGVtb0BleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnVGhlIGlucHV0IGlzIG5vdCB2YWxpZCBFLW1haWwhJ31dfSBuYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIyMnB4XCJ9fSBwbGFjZWhvbGRlcj1cIkVtYWlsXCIvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cImRlbW8jMTIzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1t7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBQYXNzd29yZCEnfV19IG5hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjIycHhcIn19IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSB2YWx1ZVByb3BOYW1lPVwiY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94PlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImd4LWxvZ2luLWZvcm0tZm9yZ290XCI+Rm9yZ290IHBhc3N3b3JkPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImd4LW1iLTBcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLnNpZ25JblwiLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlcyBpZD1cImFwcC51c2VyQXV0aC5vclwiLz48L3NwYW4+IDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cImFwcC51c2VyQXV0aC5zaWduVXBcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJneC10ZXh0LWxpZ2h0IGd4LWZzLXNtXCI+IGRlbW8gdXNlciBlbWFpbDogJ2RlbW9AZXhhbXBsZS5jb20nIGFuZCBwYXNzd29yZDogJ2RlbW8jMTIzJzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7aXNMb2FkaW5nICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWxvYWRlci12aWV3XCI+XHJcbiAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgLy8gPC9kaXY+XHJcbiAgICAvLyA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9