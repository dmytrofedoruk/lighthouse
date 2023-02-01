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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL3VzZXJBdXRoL1NpZ25Jbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInVzZUF1dGgiLCJpc0xvYWRpbmciLCJ1c2VyTG9naW4iLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsIm9uRmluaXNoIiwidmFsdWVzIiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN5QjtBQUN2QjtBQUMwQjtBQUNQO0FBQ3lCO0FBRXhFLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFNLENBQUlDLEtBQUssRUFBSztFQUFBO0VBQ3hCLGVBQStCQyw4REFBTyxFQUFFO0lBQWpDQyxTQUFTLFlBQVRBLFNBQVM7SUFBRUMsU0FBUyxZQUFUQSxTQUFTO0VBRTNCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBYyxDQUFHQyxTQUFTLEVBQUksQ0FDcEMsQ0FBQztFQUVELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUdDLE1BQU0sRUFBSTtJQUN6QkosU0FBUyxDQUFDSSxNQUFNLENBQUM7RUFDbkIsQ0FBQztFQUVEO0lBQ0U7SUFDRTtJQUNFO01BQUssU0FBUyxFQUFDO0lBQTJCLEdBQ3hDO01BQUssU0FBUyxFQUFDO0lBQXFCLEdBSWxDO01BQUssU0FBUyxFQUFDO0lBQWlCLEdBQzlCLGtCQUFJLE1BQUMsMERBQVk7TUFBQyxFQUFFLEVBQUM7SUFBcUIsRUFBRSxDQUFLLEVBQ2pELGlCQUFHLE1BQUMsMERBQVk7TUFBQyxFQUFFLEVBQUM7SUFBd0IsRUFBRSxDQUFJLEVBQ2xELGlCQUFHLE1BQUMsMERBQVk7TUFBQyxFQUFFLEVBQUM7SUFBeUIsRUFBRSxDQUFJLENBQy9DLENBSUYsRUFDTjtNQUFLLFNBQVMsRUFBQztJQUFzQixHQUNuQyxNQUFDLHlDQUFJO01BQ0gsYUFBYSxFQUFFO1FBQUNDLFFBQVEsRUFBRTtNQUFJLENBQUU7TUFDaEMsSUFBSSxFQUFDLE9BQU87TUFDWixRQUFRLEVBQUVGLFFBQVM7TUFDbkIsY0FBYyxFQUFFRixjQUFlO01BQy9CLFNBQVMsRUFBQztJQUE2QixHQUV2QyxNQUFDLHlDQUFJLENBQUMsSUFBSTtNQUNSLFlBQVksRUFBQyxrQkFBa0I7TUFDL0IsS0FBSyxFQUFFLENBQUM7UUFBQ0ssUUFBUSxFQUFFLElBQUk7UUFBRUMsT0FBTyxFQUFFO01BQWdDLENBQUMsQ0FBRTtNQUFDLElBQUksRUFBQztJQUFPLEdBQ2xGLE1BQUMsMENBQUs7TUFBQyxXQUFXLEVBQUM7SUFBTyxFQUFFLENBQ2xCLEVBQ1osTUFBQyx5Q0FBSSxDQUFDLElBQUk7TUFDUixZQUFZLEVBQUMsVUFBVTtNQUN2QixLQUFLLEVBQUUsQ0FBQztRQUFDRCxRQUFRLEVBQUUsSUFBSTtRQUFFQyxPQUFPLEVBQUU7TUFBNkIsQ0FBQyxDQUFFO01BQUMsSUFBSSxFQUFDO0lBQVUsR0FDbEYsTUFBQywwQ0FBSztNQUFDLElBQUksRUFBQyxVQUFVO01BQUMsV0FBVyxFQUFDO0lBQVUsRUFBRSxDQUNyQyxFQUNaLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQUMsYUFBYSxFQUFDO0lBQVMsR0FDaEMsTUFBQyw2Q0FBUSxRQUFDLGFBQVcsQ0FBVyxFQUNoQyxNQUFDLGdEQUFJO01BQUMsSUFBSSxFQUFDO0lBQWtCLEdBQzNCO01BQUcsU0FBUyxFQUFDO0lBQXNCLEdBQUMsaUJBQWUsQ0FBSSxDQUFPLENBQ3RELEVBQ1osTUFBQyx5Q0FBSSxDQUFDLElBQUksUUFDUixNQUFDLDJDQUFNO01BQUMsSUFBSSxFQUFDLFNBQVM7TUFBQyxTQUFTLEVBQUMsU0FBUztNQUFDLFFBQVEsRUFBQztJQUFRLEdBQzFELE1BQUMsMERBQVk7TUFBQyxFQUFFLEVBQUM7SUFBcUIsRUFBRSxDQUNqQyxFQUNULG9CQUFNLE1BQUMsMERBQVk7TUFBQyxFQUFFLEVBQUM7SUFBaUIsRUFBRSxDQUFPLEtBQUMsUUFBQyxnREFBSTtNQUFDLElBQUksRUFBQztJQUFTLEdBQ3RFLGlCQUNFLE1BQUMsMERBQVk7TUFBQyxFQUFFLEVBQUM7SUFBcUIsRUFBRSxDQUN0QyxDQUNDLENBQ0ssRUFDWjtNQUNFLFNBQVMsRUFBQztJQUF3QixHQUFDLCtEQUE2RCxDQUFPLENBQ3BHLENBQ0gsRUFDTFIsU0FBUyxJQUNWO01BQUssU0FBUyxFQUFDO0lBQWdCLEdBQzdCLE1BQUMsd0VBQWdCLE9BQUUsQ0FDZjtJQUVWO0lBQ0Y7RUFBQTtBQUVKLENBQUM7QUFBQyxHQXhFSUgsTUFBTTtFQUFBLFFBQ3FCRSxzREFBTztBQUFBO0FBQUEsS0FEbENGLE1BQU07QUEwRUdBLHFFQUFNLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuMmE2ZTg4MzMxZjRmZDczM2M3YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCdXR0b24sIENoZWNrYm94LCBGb3JtLCBJbnB1dH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gXCIuLi8uLi8uLi91dGlsL0ludGxNZXNzYWdlc1wiO1xyXG5pbXBvcnQge3VzZUF1dGh9IGZyb20gXCIuLi8uLi8uLi91dGlsL3VzZS1hdXRoXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBTaWduSW4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7aXNMb2FkaW5nLCB1c2VyTG9naW59ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IGVycm9ySW5mbyA9PiB7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSB2YWx1ZXMgPT4ge1xyXG4gICAgdXNlckxvZ2luKHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLXdyYXBcIj5cclxuICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4tbWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ28tY29udGVudC1iZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI3MngzOTVcIiBhbHQ9J05lYXR1cmUnLz5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvLXdpZFwiPlxyXG4gICAgICAgICAgICAgIDxoMT48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLnNpZ25JblwiLz48L2gxPlxyXG4gICAgICAgICAgICAgIDxwPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAudXNlckF1dGguYnlTaWduaW5nXCIvPjwvcD5cclxuICAgICAgICAgICAgICA8cD48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLmdldEFjY291bnRcIi8+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ29cIj5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cImV4YW1wbGVcIiBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7cmVtZW1iZXI6IHRydWV9fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJneC1zaWduaW4tZm9ybSBneC1mb3JtLXJvdzBcIj5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiZGVtb0BleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1RoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsISd9XX0gbmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJkZW1vIzEyM1wiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFBhc3N3b3JkISd9XX0gbmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3g+UmVtZW1iZXIgbWU8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3gtbG9naW4tZm9ybS1mb3Jnb3RcIj5Gb3Jnb3QgcGFzc3dvcmQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiZ3gtbWItMFwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAudXNlckF1dGguc2lnbkluXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLm9yXCIvPjwvc3Bhbj4gPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLnNpZ25VcFwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd4LXRleHQtbGlnaHQgZ3gtZnMtc21cIj4gZGVtbyB1c2VyIGVtYWlsOiAnZGVtb0BleGFtcGxlLmNvbScgYW5kIHBhc3N3b3JkOiAnZGVtbyMxMjMnPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtpc0xvYWRpbmcgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbG9hZGVyLXZpZXdcIj5cclxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MvPlxyXG4gICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAvLyA8L2Rpdj5cclxuICAgIC8vIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=