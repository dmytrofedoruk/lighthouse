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
    })), __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
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
    }, __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_5__["default"], null))), "// ")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL3VzZXJBdXRoL1NpZ25Jbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInVzZUF1dGgiLCJpc0xvYWRpbmciLCJ1c2VyTG9naW4iLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsIm9uRmluaXNoIiwidmFsdWVzIiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN5QjtBQUN2QjtBQUMwQjtBQUNQO0FBQ3lCO0FBRXhFLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFNLENBQUlDLEtBQUssRUFBSztFQUFBO0VBQ3hCLGVBQStCQyw4REFBTyxFQUFFO0lBQWpDQyxTQUFTLFlBQVRBLFNBQVM7SUFBRUMsU0FBUyxZQUFUQSxTQUFTO0VBRTNCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBYyxDQUFHQyxTQUFTLEVBQUksQ0FDcEMsQ0FBQztFQUVELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUdDLE1BQU0sRUFBSTtJQUN6QkosU0FBUyxDQUFDSSxNQUFNLENBQUM7RUFDbkIsQ0FBQztFQUVEO0lBQ0U7SUFDRTtJQUNFO01BQUssU0FBUyxFQUFDO0lBQTJCLEdBQ3hDO01BQUssU0FBUyxFQUFDO0lBQXFCLEdBSWxDO01BQUssU0FBUyxFQUFDO0lBQWlCLEdBQzlCLGtCQUFJLE1BQUMsMERBQVk7TUFBQyxFQUFFLEVBQUM7SUFBcUIsRUFBRSxDQUFLLEVBQ2pELGlCQUFHLE1BQUMsMERBQVk7TUFBQyxFQUFFLEVBQUM7SUFBd0IsRUFBRSxDQUFJLEVBQ2xELGlCQUFHLE1BQUMsMERBQVk7TUFBQyxFQUFFLEVBQUM7SUFBeUIsRUFBRSxDQUFJLENBQy9DLENBSUYsRUFDTjtNQUFLLFNBQVMsRUFBQztJQUFzQixHQUNsQztNQUFLLFNBQVMsRUFBQztJQUFhLEdBQzNCO01BQUssR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUM7SUFBa0IsRUFBRSxDQUN2QyxFQUNOLG1CQUNBLE1BQUMseUNBQUk7TUFDSCxhQUFhLEVBQUU7UUFBQ0MsUUFBUSxFQUFFO01BQUksQ0FBRTtNQUNoQyxJQUFJLEVBQUMsT0FBTztNQUNaLFFBQVEsRUFBRUYsUUFBUztNQUNuQixjQUFjLEVBQUVGLGNBQWU7TUFDL0IsU0FBUyxFQUFDO0lBQTZCLEdBRXZDLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQ1IsWUFBWSxFQUFDLGtCQUFrQjtNQUMvQixLQUFLLEVBQUUsQ0FBQztRQUFDSyxRQUFRLEVBQUUsSUFBSTtRQUFFQyxPQUFPLEVBQUU7TUFBZ0MsQ0FBQyxDQUFFO01BQUMsSUFBSSxFQUFDO0lBQU8sR0FDbEYsTUFBQywwQ0FBSztNQUFDLFdBQVcsRUFBQztJQUFPLEVBQUUsQ0FDbEIsRUFDWixNQUFDLHlDQUFJLENBQUMsSUFBSTtNQUNSLFlBQVksRUFBQyxVQUFVO01BQ3ZCLEtBQUssRUFBRSxDQUFDO1FBQUNELFFBQVEsRUFBRSxJQUFJO1FBQUVDLE9BQU8sRUFBRTtNQUE2QixDQUFDLENBQUU7TUFBQyxJQUFJLEVBQUM7SUFBVSxHQUNsRixNQUFDLDBDQUFLO01BQUMsSUFBSSxFQUFDLFVBQVU7TUFBQyxXQUFXLEVBQUM7SUFBVSxFQUFFLENBQ3JDLEVBQ1osTUFBQyx5Q0FBSSxDQUFDLElBQUk7TUFBQyxhQUFhLEVBQUM7SUFBUyxHQUNoQyxNQUFDLDZDQUFRLFFBQUMsYUFBVyxDQUFXLEVBQ2hDLE1BQUMsZ0RBQUk7TUFBQyxJQUFJLEVBQUM7SUFBa0IsR0FDM0I7TUFBRyxTQUFTLEVBQUM7SUFBc0IsR0FBQyxpQkFBZSxDQUFJLENBQU8sQ0FDdEQsRUFDWixNQUFDLHlDQUFJLENBQUMsSUFBSSxRQUNSLE1BQUMsMkNBQU07TUFBQyxJQUFJLEVBQUMsU0FBUztNQUFDLFNBQVMsRUFBQyxTQUFTO01BQUMsUUFBUSxFQUFDO0lBQVEsR0FDMUQsTUFBQywwREFBWTtNQUFDLEVBQUUsRUFBQztJQUFxQixFQUFFLENBQ2pDLEVBQ1Qsb0JBQU0sTUFBQywwREFBWTtNQUFDLEVBQUUsRUFBQztJQUFpQixFQUFFLENBQU8sS0FBQyxRQUFDLGdEQUFJO01BQUMsSUFBSSxFQUFDO0lBQVMsR0FDdEUsaUJBQ0UsTUFBQywwREFBWTtNQUFDLEVBQUUsRUFBQztJQUFxQixFQUFFLENBQ3RDLENBQ0MsQ0FDSyxFQUNaO01BQ0UsU0FBUyxFQUFDO0lBQXdCLEdBQUMsK0RBQTZELENBQU8sQ0FDcEcsQ0FDSCxFQUNMUixTQUFTLElBQ1Y7TUFBSyxTQUFTLEVBQUM7SUFBZ0IsR0FDN0IsTUFBQyx3RUFBZ0IsT0FBRSxDQUNmLENBQ0YsT0FDTDtJQUNMO0VBQUE7QUFFSixDQUFDO0FBQUMsR0E1RUlILE1BQU07RUFBQSxRQUNxQkUsc0RBQU87QUFBQTtBQUFBLEtBRGxDRixNQUFNO0FBOEVHQSxxRUFBTSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLjRjZTBkODU1NWMwYTQ3OTY1YmUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBDaGVja2JveCwgRm9ybSwgSW5wdXR9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiLi4vLi4vLi4vdXRpbC91c2UtYXV0aFwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgU2lnbkluID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2lzTG9hZGluZywgdXNlckxvZ2lufSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSBlcnJvckluZm8gPT4ge1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gdmFsdWVzID0+IHtcclxuICAgIHVzZXJMb2dpbih2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi13cmFwXCI+XHJcbiAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLW1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvLWNvbnRlbnQtYmdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNzJ4Mzk1XCIgYWx0PSdOZWF0dXJlJy8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nby13aWRcIj5cclxuICAgICAgICAgICAgICA8aDE+PEludGxNZXNzYWdlcyBpZD1cImFwcC51c2VyQXV0aC5zaWduSW5cIi8+PC9oMT5cclxuICAgICAgICAgICAgICA8cD48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLmJ5U2lnbmluZ1wiLz48L3A+XHJcbiAgICAgICAgICAgICAgPHA+PEludGxNZXNzYWdlcyBpZD1cImFwcC51c2VyQXV0aC5nZXRBY2NvdW50XCIvPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e3JlbWVtYmVyOiB0cnVlfX1cclxuICAgICAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICAgICAgICBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtc2lnbmluLWZvcm0gZ3gtZm9ybS1yb3cwXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cImRlbW9AZXhhbXBsZS5jb21cIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1t7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdUaGUgaW5wdXQgaXMgbm90IHZhbGlkIEUtbWFpbCEnfV19IG5hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRW1haWxcIi8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiZGVtbyMxMjNcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1t7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBQYXNzd29yZCEnfV19IG5hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSB2YWx1ZVByb3BOYW1lPVwiY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94PlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImd4LWxvZ2luLWZvcm0tZm9yZ290XCI+Rm9yZ290IHBhc3N3b3JkPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImd4LW1iLTBcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLnNpZ25JblwiLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlcyBpZD1cImFwcC51c2VyQXV0aC5vclwiLz48L3NwYW4+IDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cImFwcC51c2VyQXV0aC5zaWduVXBcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJneC10ZXh0LWxpZ2h0IGd4LWZzLXNtXCI+IGRlbW8gdXNlciBlbWFpbDogJ2RlbW9AZXhhbXBsZS5jb20nIGFuZCBwYXNzd29yZDogJ2RlbW8jMTIzJzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7aXNMb2FkaW5nICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWxvYWRlci12aWV3XCI+XHJcbiAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgLy8gPC9kaXY+XHJcbiAgICAvLyA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9