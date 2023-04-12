webpackHotUpdate_N_E(3,{

/***/ "./routes/userAuth/SignUp/index.js":
/*!*****************************************!*\
  !*** ./routes/userAuth/SignUp/index.js ***!
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./routes/userAuth/SignUp/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/use-auth */ "./util/use-auth.js");
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app/components/CircularProgress */ "./app/components/CircularProgress/index.js");
var _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var FormItem = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item;
var RadioButton = antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button;
var RadioGroup = antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group;
var SignUp = function SignUp(props) {
  _s();
  var _useAuth = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_5__["useAuth"])(),
    isLoading = _useAuth.isLoading,
    userSignup = _useAuth.userSignup,
    getAuthUser = _useAuth.getAuthUser;
  var onFinishFailed = function onFinishFailed(errorInfo) {};
  var onFinish = function onFinish(values) {
    var data = {
      name: values.fname + ' ' + values.lname,
      email: values.email,
      password: values.password,
      subsc: subsc
    };
    console.log(data);
    userSignup(data, function () {
      getAuthUser();
    });
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
    }, __jsx("h1", {
      style: {
        color: "black",
        fontSize: "55px",
        fontWeight: "600"
      }
    }, "Lorem ipsum dolor sit amet consectetur adipiscing"), __jsx("p", {
      className: "gx-text-light"
    }, "Lorem ipsum dolor sit amet consectetur adipiscing."))), __jsx("div", {
      className: "gx-app-login-content",
      style: {
        height: "100%",
        overflow: "auto"
      }
    }, __jsx("div", {
      className: "gx-app-logo gx-mb-2"
    }, __jsx("img", {
      style: {
        marginLeft: "-16px"
      },
      alt: "example",
      src: "/images/logo.png"
    })), __jsx("div", {
      className: "gx-mb-4"
    }, __jsx("h1", null, "Sign Up \uD83D\uDCDD"), __jsx("p", {
      className: "gx-text-light"
    }, "Lorem ipsum dolor sit amet consectetu")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
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
        fontWeight: "500",
        marginBottom: "2px"
      },
      initialValue: "Dmytro",
      label: "First Name",
      name: "fname"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        borderRadius: "22px"
      },
      placeholder: ""
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      style: {
        fontWeight: "500",
        marginBottom: "2px"
      },
      initialValue: "Fedoruk",
      label: "Last Name",
      name: "lname"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        borderRadius: "22px"
      },
      placeholder: "Email"
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      style: {
        fontWeight: "500",
        marginBottom: "2px"
      },
      initialValue: "dmytro.fedoru@gmail.com",
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
      style: {
        fontWeight: "500",
        marginBottom: "2px"
      },
      initialValue: "test123",
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
      style: {
        fontWeight: "500",
        marginBottom: "2px"
      },
      initialValue: "test123",
      label: "Repeat Password",
      name: "password"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        borderRadius: "22px"
      },
      type: "password",
      placeholder: "Password"
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      style: {
        textAlign: "start"
      }
    }, __jsx(RadioGroup, {
      defaultValue: "montly"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      value: "monthly"
    }, "Monthly"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      value: "yearly"
    }, "Yearly"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "gx-mb-0 design-button",
      style: {
        background: "#D3F36B"
      },
      htmlType: "submit"
    }, "Sign Up")), __jsx("div", {
      className: "social-icons gx-mb-3"
    }, __jsx("img", {
      className: "social-icons-img",
      src: "/images/google-plus.png",
      alt: "facebook"
    }), __jsx("img", {
      className: "social-icons-img",
      src: "/images/twitter.png",
      alt: "twitter"
    }), __jsx("img", {
      className: "social-icons-img",
      src: "/images/facebook.png",
      alt: "Neature"
    })), __jsx("div", {
      className: "header__center gx-text-light gx-mb-3"
    }, "Already have an account?"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "gx-mb-0 design-button",
      htmlType: "button"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/signin"
    }, __jsx("a", {
      className: "gx-mb-0 design-button",
      style: {
        border: "none"
      }
    }, "Login")))))), isLoading && __jsx("div", {
      className: "gx-loader-view"
    }, __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], null)))
    // </div>
    // </div>
  );
};
_s(SignUp, "dslywB1q0YfH7QlnFMYBH99guM8=", false, function () {
  return [_util_use_auth__WEBPACK_IMPORTED_MODULE_5__["useAuth"]];
});
_c = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (SignUp);
var _c;
$RefreshReg$(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL3VzZXJBdXRoL1NpZ25VcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkZvcm0iLCJJdGVtIiwiUmFkaW9CdXR0b24iLCJSYWRpbyIsIkJ1dHRvbiIsIlJhZGlvR3JvdXAiLCJHcm91cCIsIlNpZ25VcCIsInByb3BzIiwidXNlQXV0aCIsImlzTG9hZGluZyIsInVzZXJTaWdudXAiLCJnZXRBdXRoVXNlciIsIm9uRmluaXNoRmFpbGVkIiwiZXJyb3JJbmZvIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJkYXRhIiwibmFtZSIsImZuYW1lIiwibG5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwic3Vic2MiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm1hcmdpbkxlZnQiLCJyZW1lbWJlciIsIm1hcmdpbkJvdHRvbSIsImJvcmRlclJhZGl1cyIsInJlcXVpcmVkIiwibWVzc2FnZSIsInRleHRBbGlnbiIsImJhY2tncm91bmQiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dDO0FBQzlCO0FBQ1A7QUFDaUM7QUFDUDtBQUN5QjtBQUV4RSxJQUFNQSxRQUFRLEdBQUdDLHlDQUFJLENBQUNDLElBQUk7QUFDMUIsSUFBTUMsV0FBVyxHQUFHQywwQ0FBSyxDQUFDQyxNQUFNO0FBQ2hDLElBQU1DLFVBQVUsR0FBR0YsMENBQUssQ0FBQ0csS0FBSztBQUU5QixJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBTSxDQUFJQyxLQUFLLEVBQUs7RUFBQTtFQUN4QixlQUE2Q0MsOERBQU8sRUFBRTtJQUEvQ0MsU0FBUyxZQUFUQSxTQUFTO0lBQUVDLFVBQVUsWUFBVkEsVUFBVTtJQUFFQyxXQUFXLFlBQVhBLFdBQVc7RUFFekMsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjLENBQUdDLFNBQVMsRUFB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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0J1dHRvbiwgQ2hlY2tib3gsIEZvcm0sIElucHV0LCBSYWRpb30gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gXCIuLi8uLi8uLi91dGlsL0ludGxNZXNzYWdlc1wiO1xyXG5pbXBvcnQge3VzZUF1dGh9IGZyb20gXCIuLi8uLi8uLi91dGlsL3VzZS1hdXRoXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBGb3JtSXRlbSA9IEZvcm0uSXRlbTtcclxuY29uc3QgUmFkaW9CdXR0b24gPSBSYWRpby5CdXR0b247XHJcbmNvbnN0IFJhZGlvR3JvdXAgPSBSYWRpby5Hcm91cDtcclxuXHJcbmNvbnN0IFNpZ25VcCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtpc0xvYWRpbmcsIHVzZXJTaWdudXAsIGdldEF1dGhVc2VyfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSBlcnJvckluZm8gPT4ge1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gdmFsdWVzID0+IHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBuYW1lIDogdmFsdWVzLmZuYW1lKyAnICcgK3ZhbHVlcy5sbmFtZSxcclxuICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQgOiB2YWx1ZXMucGFzc3dvcmQsXHJcbiAgICAgIHN1YnNjIFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB1c2VyU2lnbnVwKGRhdGEsICgpID0+IHtcclxuICAgICAgZ2V0QXV0aFVzZXIoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi13cmFwXCI+XHJcbiAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi1tYWluLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nby1jb250ZW50XCI+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ28tY29udGVudC1iZ1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjcyeDM5NVwiIGFsdD0nTmVhdHVyZScvPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvLXdpZFwiPlxyXG4gICAgICAgICAgPGgxIHN0eWxlPXt7Y29sb3I6IFwiYmxhY2tcIiwgZm9udFNpemU6IFwiNTVweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwifX0+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZzwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LWxpZ2h0XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZy48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ29cIj5cclxuICAgICAgICAgIDxpbWcgYWx0PVwiZXhhbXBsZVwiIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIi8+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4tY29udGVudFwiIHN0eWxlPXt7aGVpZ2h0OiBcIjEwMCVcIiwgb3ZlcmZsb3c6IFwiYXV0b1wifX0+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ28gZ3gtbWItMlwiPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT17e21hcmdpbkxlZnQ6IFwiLTE2cHhcIn19IGFsdD1cImV4YW1wbGVcIiBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWItNFwiPlxyXG4gICAgICAgICAgPGgxPlNpZ24gVXAg8J+TnTwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LWxpZ2h0XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17e3JlbWVtYmVyOiB0cnVlfX1cclxuICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgICBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XHJcbiAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJneC1zaWduaW4tZm9ybSBneC1mb3JtLXJvdzBcIj5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCI1MDBcIiwgbWFyZ2luQm90dG9tOiBcIjJweFwifX1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiRG15dHJvXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cImZuYW1lXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIyMnB4XCJ9fSBwbGFjZWhvbGRlcj1cIlwiLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiNTAwXCIsIG1hcmdpbkJvdHRvbTogXCIycHhcIn19XHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cIkZlZG9ydWtcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJsbmFtZVwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMjJweFwifX0gcGxhY2Vob2xkZXI9XCJFbWFpbFwiLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiNTAwXCIsIG1hcmdpbkJvdHRvbTogXCIycHhcIn19XHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cImRteXRyby5mZWRvcnVAZ21haWwuY29tXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnVGhlIGlucHV0IGlzIG5vdCB2YWxpZCBFLW1haWwhJ31dfSBuYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgPElucHV0IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjIycHhcIn19IHBsYWNlaG9sZGVyPVwiRW1haWxcIi8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcIjUwMFwiLCBtYXJnaW5Cb3R0b206IFwiMnB4XCJ9fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJ0ZXN0MTIzXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgUGFzc3dvcmQhJ31dfSBuYW1lPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgPElucHV0IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjIycHhcIn19IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcIjUwMFwiLCBtYXJnaW5Cb3R0b206IFwiMnB4XCJ9fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJ0ZXN0MTIzXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJSZXBlYXQgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIyMnB4XCJ9fSB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICB7LyogPEZvcm0uSXRlbSB2YWx1ZVByb3BOYW1lPVwiY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwiZ3gtdGV4dC1saWdodFwiPlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJneC1sb2dpbi1mb3JtLWZvcmdvdCBneC10ZXh0LWxpZ2h0XCIgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+Rm9yZ290IHBhc3N3b3JkPzwvYT48L0xpbms+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBzdHlsZT17e3RleHRBbGlnbjogXCJzdGFydFwifX0+XHJcbiAgICAgICAgICAgIDxSYWRpb0dyb3VwIGRlZmF1bHRWYWx1ZT1cIm1vbnRseVwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIm1vbnRobHlcIj5Nb250aGx5PC9SYWRpbz5cclxuICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJ5ZWFybHlcIj5ZZWFybHk8L1JhZGlvPlxyXG4gICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwifX0gaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgZ3gtbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMtaW1nXCIgc3JjPVwiL2ltYWdlcy9nb29nbGUtcGx1cy5wbmdcIiBhbHQ9J2ZhY2Vib29rJy8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucy1pbWdcIiBzcmM9XCIvaW1hZ2VzL3R3aXR0ZXIucG5nXCIgYWx0PSd0d2l0dGVyJy8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucy1pbWdcIiBzcmM9XCIvaW1hZ2VzL2ZhY2Vib29rLnBuZ1wiIGFsdD0nTmVhdHVyZScvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NlbnRlciBneC10ZXh0LWxpZ2h0IGd4LW1iLTNcIj5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD88L2Rpdj4gXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PiAgKi99XHJcbiAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBodG1sVHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiAgc3R5bGU9e3tib3JkZXI6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7LyogPHNwYW5cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImd4LXRleHQtbGlnaHQgZ3gtZnMtc21cIj4gZGVtbyB1c2VyIGVtYWlsOiAnZGVtb0BleGFtcGxlLmNvbScgYW5kIHBhc3N3b3JkOiAnZGVtbyMxMjMnPC9zcGFuPiAqL31cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNMb2FkaW5nICYmXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbG9hZGVyLXZpZXdcIj5cclxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcy8+XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gIC8vIDwvZGl2PlxyXG4vLyA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9