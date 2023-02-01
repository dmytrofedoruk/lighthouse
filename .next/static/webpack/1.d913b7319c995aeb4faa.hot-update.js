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
  return __jsx("div", {
    className: "gx-app-login-wrap"
  }, __jsx("div", {
    className: "gx-app-login-container"
  }, __jsx("div", {
    className: "gx-app-login-main-content"
  }, __jsx("div", {
    className: "gx-app-logo-content"
  }, __jsx("div", {
    className: "gx-app-logo-content-bg"
  }, __jsx("img", {
    src: "https://via.placeholder.com/272x395",
    alt: "Neature"
  })), __jsx("div", {
    className: "gx-app-logo-wid"
  }, __jsx("p", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "app.userAuth.bySigning"
  })), __jsx("p", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "app.userAuth.getAccount"
  }))), __jsx("div", {
    className: "gx-app-logo"
  }, __jsx("img", {
    alt: "example",
    src: "/images/logo.png"
  }))), __jsx("div", {
    className: "gx-app-login-content"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    initialValues: {
      remember: true
    },
    name: "basic",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    className: "gx-signin-form gx-form-row0"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    initialValue: "demo@example.com",
    rules: [{
      required: true,
      message: 'The input is not valid E-mail!'
    }],
    name: "email"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Email"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    initialValue: "demo#123",
    rules: [{
      required: true,
      message: 'Please input your Password!'
    }],
    name: "password"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
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
  }, __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_5__["default"], null)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL3VzZXJBdXRoL1NpZ25Jbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInVzZUF1dGgiLCJpc0xvYWRpbmciLCJ1c2VyTG9naW4iLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsIm9uRmluaXNoIiwidmFsdWVzIiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN5QjtBQUN2QjtBQUMwQjtBQUNQO0FBQ3lCO0FBRXhFLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFNLENBQUlDLEtBQUssRUFBSztFQUFBO0VBQ3hCLGVBQStCQyw4REFBTyxFQUFFO0lBQWpDQyxTQUFTLFlBQVRBLFNBQVM7SUFBRUMsU0FBUyxZQUFUQSxTQUFTO0VBRTNCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBYyxDQUFHQyxTQUFTLEVBQUksQ0FDcEMsQ0FBQztFQUVELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUdDLE1BQU0sRUFBSTtJQUN6QkosU0FBUyxDQUFDSSxNQUFNLENBQUM7RUFDbkIsQ0FBQztFQUVELE9BQ0U7SUFBSyxTQUFTLEVBQUM7RUFBbUIsR0FDaEM7SUFBSyxTQUFTLEVBQUM7RUFBd0IsR0FDckM7SUFBSyxTQUFTLEVBQUM7RUFBMkIsR0FDeEM7SUFBSyxTQUFTLEVBQUM7RUFBcUIsR0FDbEM7SUFBSyxTQUFTLEVBQUM7RUFBd0IsR0FDckM7SUFBSyxHQUFHLEVBQUMscUNBQXFDO0lBQUMsR0FBRyxFQUFDO0VBQVMsRUFBRSxDQUMxRCxFQUNOO0lBQUssU0FBUyxFQUFDO0VBQWlCLEdBRTlCLGlCQUFHLE1BQUMsMERBQVk7SUFBQyxFQUFFLEVBQUM7RUFBd0IsRUFBRSxDQUFJLEVBQ2xELGlCQUFHLE1BQUMsMERBQVk7SUFBQyxFQUFFLEVBQUM7RUFBeUIsRUFBRSxDQUFJLENBQy9DLEVBQ047SUFBSyxTQUFTLEVBQUM7RUFBYSxHQUMxQjtJQUFLLEdBQUcsRUFBQyxTQUFTO0lBQUMsR0FBRyxFQUFDO0VBQWtCLEVBQUUsQ0FDdkMsQ0FDRixFQUNOO0lBQUssU0FBUyxFQUFDO0VBQXNCLEdBQ25DLE1BQUMseUNBQUk7SUFDSCxhQUFhLEVBQUU7TUFBQ0MsUUFBUSxFQUFFO0lBQUksQ0FBRTtJQUNoQyxJQUFJLEVBQUMsT0FBTztJQUNaLFFBQVEsRUFBRUYsUUFBUztJQUNuQixjQUFjLEVBQUVGLGNBQWU7SUFDL0IsU0FBUyxFQUFDO0VBQTZCLEdBRXZDLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQ1IsWUFBWSxFQUFDLGtCQUFrQjtJQUMvQixLQUFLLEVBQUUsQ0FBQztNQUFDSyxRQUFRLEVBQUUsSUFBSTtNQUFFQyxPQUFPLEVBQUU7SUFBZ0MsQ0FBQyxDQUFFO0lBQUMsSUFBSSxFQUFDO0VBQU8sR0FDbEYsTUFBQywwQ0FBSztJQUFDLFdBQVcsRUFBQztFQUFPLEVBQUUsQ0FDbEIsRUFDWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUNSLFlBQVksRUFBQyxVQUFVO0lBQ3ZCLEtBQUssRUFBRSxDQUFDO01BQUNELFFBQVEsRUFBRSxJQUFJO01BQUVDLE9BQU8sRUFBRTtJQUE2QixDQUFDLENBQUU7SUFBQyxJQUFJLEVBQUM7RUFBVSxHQUNsRixNQUFDLDBDQUFLO0lBQUMsSUFBSSxFQUFDLFVBQVU7SUFBQyxXQUFXLEVBQUM7RUFBVSxFQUFFLENBQ3JDLEVBQ1osTUFBQyx5Q0FBSSxDQUFDLElBQUk7SUFBQyxhQUFhLEVBQUM7RUFBUyxHQUNoQyxNQUFDLDZDQUFRLFFBQUMsYUFBVyxDQUFXLEVBQ2hDLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUM7RUFBa0IsR0FDM0I7SUFBRyxTQUFTLEVBQUM7RUFBc0IsR0FBQyxpQkFBZSxDQUFJLENBQU8sQ0FDdEQsRUFDWixNQUFDLHlDQUFJLENBQUMsSUFBSSxRQUNSLE1BQUMsMkNBQU07SUFBQyxJQUFJLEVBQUMsU0FBUztJQUFDLFNBQVMsRUFBQyxTQUFTO0lBQUMsUUFBUSxFQUFDO0VBQVEsR0FDMUQsTUFBQywwREFBWTtJQUFDLEVBQUUsRUFBQztFQUFxQixFQUFFLENBQ2pDLEVBQ1Qsb0JBQU0sTUFBQywwREFBWTtJQUFDLEVBQUUsRUFBQztFQUFpQixFQUFFLENBQU8sS0FBQyxRQUFDLGdEQUFJO0lBQUMsSUFBSSxFQUFDO0VBQVMsR0FDdEUsaUJBQ0UsTUFBQywwREFBWTtJQUFDLEVBQUUsRUFBQztFQUFxQixFQUFFLENBQ3RDLENBQ0MsQ0FDSyxFQUNaO0lBQ0UsU0FBUyxFQUFDO0VBQXdCLEdBQUMsK0RBQTZELENBQU8sQ0FDcEcsQ0FDSCxFQUNMUixTQUFTLElBQ1Y7SUFBSyxTQUFTLEVBQUM7RUFBZ0IsR0FDN0IsTUFBQyx3RUFBZ0IsT0FBRSxDQUNmLENBQ0YsQ0FDRixDQUNGO0FBRVYsQ0FBQztBQUFDLEdBeEVJSCxNQUFNO0VBQUEsUUFDcUJFLHNEQUFPO0FBQUE7QUFBQSxLQURsQ0YsTUFBTTtBQTBFR0EscUVBQU0sRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS5kOTEzYjczMTljOTk1YWViNGZhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0J1dHRvbiwgQ2hlY2tib3gsIEZvcm0sIElucHV0fSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlLWF1dGhcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IFNpZ25JbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtpc0xvYWRpbmcsIHVzZXJMb2dpbn0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gZXJyb3JJbmZvID0+IHtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9IHZhbHVlcyA9PiB7XHJcbiAgICB1c2VyTG9naW4odmFsdWVzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4td3JhcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi1tYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ28tY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvLWNvbnRlbnQtYmdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNzJ4Mzk1XCIgYWx0PSdOZWF0dXJlJy8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvLXdpZFwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8aDE+PEludGxNZXNzYWdlcyBpZD1cImFwcC51c2VyQXV0aC5zaWduSW5cIi8+PC9oMT4gKi99XHJcbiAgICAgICAgICAgICAgPHA+PEludGxNZXNzYWdlcyBpZD1cImFwcC51c2VyQXV0aC5ieVNpZ25pbmdcIi8+PC9wPlxyXG4gICAgICAgICAgICAgIDxwPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAudXNlckF1dGguZ2V0QWNjb3VudFwiLz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7cmVtZW1iZXI6IHRydWV9fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJneC1zaWduaW4tZm9ybSBneC1mb3JtLXJvdzBcIj5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiZGVtb0BleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1RoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsISd9XX0gbmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJkZW1vIzEyM1wiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFBhc3N3b3JkISd9XX0gbmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3g+UmVtZW1iZXIgbWU8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3gtbG9naW4tZm9ybS1mb3Jnb3RcIj5Gb3Jnb3QgcGFzc3dvcmQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiZ3gtbWItMFwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAudXNlckF1dGguc2lnbkluXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLm9yXCIvPjwvc3Bhbj4gPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLnNpZ25VcFwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd4LXRleHQtbGlnaHQgZ3gtZnMtc21cIj4gZGVtbyB1c2VyIGVtYWlsOiAnZGVtb0BleGFtcGxlLmNvbScgYW5kIHBhc3N3b3JkOiAnZGVtbyMxMjMnPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtpc0xvYWRpbmcgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbG9hZGVyLXZpZXdcIj5cclxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MvPlxyXG4gICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=