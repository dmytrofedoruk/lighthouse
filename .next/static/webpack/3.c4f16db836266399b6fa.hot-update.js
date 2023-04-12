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
      password: values.password
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
        fontWeight: "500"
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
      valuePropName: "checked"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      className: "gx-text-light"
    }, "Remember me")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL3VzZXJBdXRoL1NpZ25VcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkZvcm0iLCJJdGVtIiwiU2lnblVwIiwicHJvcHMiLCJ1c2VBdXRoIiwiaXNMb2FkaW5nIiwidXNlclNpZ251cCIsImdldEF1dGhVc2VyIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJvbkZpbmlzaCIsInZhbHVlcyIsImRhdGEiLCJuYW1lIiwiZm5hbWUiLCJsbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm1hcmdpbkxlZnQiLCJyZW1lbWJlciIsIm1hcmdpbkJvdHRvbSIsImJvcmRlclJhZGl1cyIsInJlcXVpcmVkIiwibWVzc2FnZSIsImJhY2tncm91bmQiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3lCO0FBQ3ZCO0FBQ1A7QUFDaUM7QUFDUDtBQUN5QjtBQUV4RSxJQUFNQSxRQUFRLEdBQUdDLHlDQUFJLENBQUNDLElBQUk7QUFFMUIsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQU0sQ0FBSUMsS0FBSyxFQUFLO0VBQUE7RUFDeEIsZUFBNkNDLDhEQUFPLEVBQUU7SUFBL0NDLFNBQVMsWUFBVEEsU0FBUztJQUFFQyxVQUFVLFlBQVZBLFVBQVU7SUFBRUMsV0FBVyxZQUFYQSxXQUFXO0VBRXpDLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBYyxDQUFHQyxTQUFTLEVBQUksQ0FDcEMsQ0FBQztFQUVELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUdDLE1BQU0sRUFBSTtJQUN6QixJQUFJQyxJQUFJLEdBQUc7TUFDVEMsSUFBSSxFQUFHRixNQUFNLENBQUNHLEtBQUssR0FBRSxHQUFHLEdBQUVILE1BQU0sQ0FBQ0ksS0FBSztNQUN0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QVMsRUFBRSxFQUMzRTtNQUFLLFNBQVMsRUFBQyxrQkFBa0I7TUFBQyxHQUFHLEVBQUMsc0JBQXNCO01BQUMsR0FBRyxFQUFDO0lBQVMsRUFBRSxDQUM1RSxFQUVKO01BQUssU0FBUyxFQUFDO0lBQXNDLEdBQUMsMEJBQXdCLENBQU0sRUFHdEYsTUFBQyx5Q0FBSSxDQUFDLElBQUksUUFDUixNQUFDLDJDQUFNO01BQUMsU0FBUyxFQUFDLHVCQUF1QjtNQUFDLFFBQVEsRUFBQztJQUFRLEdBQzNELE1BQUMsZ0RBQUk7TUFBQyxJQUFJLEVBQUM7SUFBUyxHQUNwQjtNQUFHLFNBQVMsRUFBQyx1QkFBdUI7TUFBRSxLQUFLLEVBQUU7UUFBQ0MsTUFBTSxFQUFFO01BQU07SUFBRSxHQUFDLE9BRS9ELENBQUksQ0FDQyxDQUNJLENBQ0MsQ0FJUCxDQUNILEVBQ0wzQixTQUFTLElBQ1Y7TUFBSyxTQUFTLEVBQUM7SUFBZ0IsR0FDN0IsTUFBQyx3RUFBZ0IsT0FBRSxDQUNmO0lBRVY7SUFDRjtFQUFBO0FBRUEsQ0FBQztBQUFDLEdBbElJSCxNQUFNO0VBQUEsUUFDbUNFLHNEQUFPO0FBQUE7QUFBQSxLQURoREYsTUFBTTtBQW9JR0EscUVBQU0sRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMy5jNGYxNmRiODM2MjY2Mzk5YjZmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0J1dHRvbiwgQ2hlY2tib3gsIEZvcm0sIElucHV0fSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlLWF1dGhcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xyXG5cclxuY29uc3QgU2lnblVwID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2lzTG9hZGluZywgdXNlclNpZ251cCwgZ2V0QXV0aFVzZXJ9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IGVycm9ySW5mbyA9PiB7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSB2YWx1ZXMgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIG5hbWUgOiB2YWx1ZXMuZm5hbWUrICcgJyArdmFsdWVzLmxuYW1lLFxyXG4gICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZCA6IHZhbHVlcy5wYXNzd29yZCBcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgdXNlclNpZ251cChkYXRhLCAoKSA9PiB7XHJcbiAgICAgIGdldEF1dGhVc2VyKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4td3JhcFwiPlxyXG4gICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4tbWFpbi1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ28tY29udGVudFwiPlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvLWNvbnRlbnQtYmdcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI3MngzOTVcIiBhbHQ9J05lYXR1cmUnLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nby13aWRcIj5cclxuICAgICAgICAgIDxoMSBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCIsIGZvbnRTaXplOiBcIjU1cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIn19PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2Npbmc8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1saWdodFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvXCI+XHJcbiAgICAgICAgICA8aW1nIGFsdD1cImV4YW1wbGVcIiBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIvPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLWNvbnRlbnRcIiBzdHlsZT17e2hlaWdodDogXCIxMDAlXCIsIG92ZXJmbG93OiBcImF1dG9cIn19PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvIGd4LW1iLTJcIj5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIi0xNnB4XCJ9fSBhbHQ9XCJleGFtcGxlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1iLTRcIj5cclxuICAgICAgICAgIDxoMT5TaWduIFVwIPCfk508L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1saWdodFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tyZW1lbWJlcjogdHJ1ZX19XHJcbiAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxyXG4gICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtc2lnbmluLWZvcm0gZ3gtZm9ybS1yb3cwXCI+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiNTAwXCIsIG1hcmdpbkJvdHRvbTogXCIycHhcIn19XHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cIkRteXRyb1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmbmFtZVwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMjJweFwifX0gcGxhY2Vob2xkZXI9XCJcIi8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcIjUwMFwiLCBtYXJnaW5Cb3R0b206IFwiMnB4XCJ9fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJGZWRvcnVrXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibG5hbWVcIj5cclxuICAgICAgICAgICAgPElucHV0IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjIycHhcIn19IHBsYWNlaG9sZGVyPVwiRW1haWxcIi8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcIjUwMFwiLCBtYXJnaW5Cb3R0b206IFwiMnB4XCJ9fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJkbXl0cm8uZmVkb3J1QGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBydWxlcz17W3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1RoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsISd9XX0gbmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIyMnB4XCJ9fSBwbGFjZWhvbGRlcj1cIkVtYWlsXCIvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCI1MDBcIiwgbWFyZ2luQm90dG9tOiBcIjJweFwifX1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwidGVzdDEyM1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBydWxlcz17W3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFBhc3N3b3JkISd9XX0gbmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIyMnB4XCJ9fSB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCI1MDBcIn19XHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cInRlc3QxMjNcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlJlcGVhdCBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgPElucHV0IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjIycHhcIn19IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIHsvKiA8Rm9ybS5JdGVtIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJneC10ZXh0LWxpZ2h0XCI+UmVtZW1iZXIgbWU8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2ZvcmdvdC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImd4LWxvZ2luLWZvcm0tZm9yZ290IGd4LXRleHQtbGlnaHRcIiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPjwvTGluaz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPiAqL31cclxuICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwiZ3gtdGV4dC1saWdodFwiPlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjRDNGMzZCXCJ9fSBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucyBneC1tYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucy1pbWdcIiBzcmM9XCIvaW1hZ2VzL2dvb2dsZS1wbHVzLnBuZ1wiIGFsdD0nZmFjZWJvb2snLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic29jaWFsLWljb25zLWltZ1wiIHNyYz1cIi9pbWFnZXMvdHdpdHRlci5wbmdcIiBhbHQ9J3R3aXR0ZXInLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic29jaWFsLWljb25zLWltZ1wiIHNyYz1cIi9pbWFnZXMvZmFjZWJvb2sucG5nXCIgYWx0PSdOZWF0dXJlJy8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY2VudGVyIGd4LXRleHQtbGlnaHQgZ3gtbWItM1wiPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PzwvZGl2PiBcclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+ICAqL31cclxuICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIGh0bWxUeXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiICBzdHlsZT17e2JvcmRlcjogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHsvKiA8c3BhblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1saWdodCBneC1mcy1zbVwiPiBkZW1vIHVzZXIgZW1haWw6ICdkZW1vQGV4YW1wbGUuY29tJyBhbmQgcGFzc3dvcmQ6ICdkZW1vIzEyMyc8L3NwYW4+ICovfVxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpc0xvYWRpbmcgJiZcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1sb2FkZXItdmlld1wiPlxyXG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbiAgLy8gPC9kaXY+XHJcbi8vIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=