webpackHotUpdate_N_E(2,{

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
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/use-auth */ "./util/use-auth.js");
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app/components/CircularProgress */ "./app/components/CircularProgress/index.js");
var _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var FormItem = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item;
var SignUp = function SignUp(props) {
  _s();
  var _useAuth = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_4__["useAuth"])(),
    isLoading = _useAuth.isLoading,
    userSignup = _useAuth.userSignup,
    getAuthUser = _useAuth.getAuthUser;
  var onFinishFailed = function onFinishFailed(errorInfo) {};
  var onFinish = function onFinish(values) {
    var data = {
      name: values.fname + values.lname,
      email: values.email,
      password: values.password
    };
    console.log(data);
    // userSignup(values, () => {
    //   getAuthUser();
    // });
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
      initialValue: "dmytro",
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
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
    }, __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_5__["default"], null)))
    // </div>
    // </div>
  );
};
_s(SignUp, "dslywB1q0YfH7QlnFMYBH99guM8=", false, function () {
  return [_util_use_auth__WEBPACK_IMPORTED_MODULE_4__["useAuth"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL3VzZXJBdXRoL1NpZ25VcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkZvcm0iLCJJdGVtIiwiU2lnblVwIiwicHJvcHMiLCJ1c2VBdXRoIiwiaXNMb2FkaW5nIiwidXNlclNpZ251cCIsImdldEF1dGhVc2VyIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJvbkZpbmlzaCIsInZhbHVlcyIsImRhdGEiLCJuYW1lIiwiZm5hbWUiLCJsbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm1hcmdpbkxlZnQiLCJyZW1lbWJlciIsIm1hcmdpbkJvdHRvbSIsImJvcmRlclJhZGl1cyIsInJlcXVpcmVkIiwibWVzc2FnZSIsImJhY2tncm91bmQiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN5QjtBQUN2QjtBQUUwQjtBQUNQO0FBQ3lCO0FBRXhFLElBQU1BLFFBQVEsR0FBR0MseUNBQUksQ0FBQ0MsSUFBSTtBQUUxQixJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBTSxDQUFJQyxLQUFLLEVBQUs7RUFBQTtFQUN4QixlQUE2Q0MsOERBQU8sRUFBRTtJQUEvQ0MsU0FBUyxZQUFUQSxTQUFTO0lBQUVDLFVBQVUsWUFBVkEsVUFBVTtJQUFFQyxXQUFXLFlBQVhBLFdBQVc7RUFFekMsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjLENBQUdDLFNBQVMsRUFBSSxDQUNwQyxDQUFDO0VBRUQsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVEsQ0FBR0MsTUFBTSxFQUFJO0lBQ3pCLElBQUlDLElBQUksR0FBRztNQUNUQyxJQUFJLEVBQUdGLE1BQU0sQ0FBQ0csS0FBSyxHQUFHSCxNQUFNLENBQUNJLEtBQUs7TUFDbENDLEtBQUssRUFBRUwsTUFB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MkNBQU07TUFBQyxTQUFTLEVBQUMsdUJBQXVCO01BQUMsUUFBUSxFQUFDO0lBQVEsR0FDM0QsTUFBQyxnREFBSTtNQUFDLElBQUksRUFBQztJQUFTLEdBQ3BCO01BQUcsU0FBUyxFQUFDLHVCQUF1QjtNQUFFLEtBQUssRUFBRTtRQUFDQyxNQUFNLEVBQUU7TUFBTTtJQUFFLEdBQUMsT0FFL0QsQ0FBSSxDQUNDLENBQ0ksQ0FDQyxDQUlQLENBQ0gsRUFDTDNCLFNBQVMsSUFDVjtNQUFLLFNBQVMsRUFBQztJQUFnQixHQUM3QixNQUFDLHdFQUFnQixPQUFFLENBQ2Y7SUFFVjtJQUNGO0VBQUE7QUFFQSxDQUFDO0FBQUMsR0EvSElILE1BQU07RUFBQSxRQUNtQ0Usc0RBQU87QUFBQTtBQUFBLEtBRGhERixNQUFNO0FBaUlHQSxxRUFBTSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8yLjRiMmMyOTZjYWNmNTQ5Mjk2YTI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBDaGVja2JveCwgRm9ybSwgSW5wdXR9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlLWF1dGhcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xyXG5cclxuY29uc3QgU2lnblVwID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2lzTG9hZGluZywgdXNlclNpZ251cCwgZ2V0QXV0aFVzZXJ9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IGVycm9ySW5mbyA9PiB7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSB2YWx1ZXMgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIG5hbWUgOiB2YWx1ZXMuZm5hbWUgKyB2YWx1ZXMubG5hbWUsXHJcbiAgICAgIGVtYWlsOiB2YWx1ZXMuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkIDogdmFsdWVzLnBhc3N3b3JkIFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAvLyB1c2VyU2lnbnVwKHZhbHVlcywgKCkgPT4ge1xyXG4gICAgLy8gICBnZXRBdXRoVXNlcigpO1xyXG4gICAgLy8gfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLXdyYXBcIj5cclxuICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4tY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLW1haW4tY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvLWNvbnRlbnRcIj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nby1jb250ZW50LWJnXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNzJ4Mzk1XCIgYWx0PSdOZWF0dXJlJy8+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ28td2lkXCI+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCBmb250U2l6ZTogXCI1NXB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCJ9fT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LXRleHQtbGlnaHRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nb1wiPlxyXG4gICAgICAgICAgPGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi1jb250ZW50XCIgc3R5bGU9e3toZWlnaHQ6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJhdXRvXCJ9fT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nbyBneC1tYi0yXCI+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPXt7bWFyZ2luTGVmdDogXCItMTZweFwifX0gYWx0PVwiZXhhbXBsZVwiIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tYi00XCI+XHJcbiAgICAgICAgICA8aDE+U2lnbiBVcCDwn5OdPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LXRleHQtbGlnaHRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7cmVtZW1iZXI6IHRydWV9fVxyXG4gICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImd4LXNpZ25pbi1mb3JtIGd4LWZvcm0tcm93MFwiPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcIjUwMFwiLCBtYXJnaW5Cb3R0b206IFwiMnB4XCJ9fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJkbXl0cm9cIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZm5hbWVcIj5cclxuICAgICAgICAgICAgPElucHV0IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjIycHhcIn19IHBsYWNlaG9sZGVyPVwiXCIvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCI1MDBcIiwgbWFyZ2luQm90dG9tOiBcIjJweFwifX1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiRmVkb3J1a1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cImxuYW1lXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIyMnB4XCJ9fSBwbGFjZWhvbGRlcj1cIkVtYWlsXCIvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCI1MDBcIiwgbWFyZ2luQm90dG9tOiBcIjJweFwifX1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiZG15dHJvLmZlZG9ydUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgcnVsZXM9e1t7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdUaGUgaW5wdXQgaXMgbm90IHZhbGlkIEUtbWFpbCEnfV19IG5hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMjJweFwifX0gcGxhY2Vob2xkZXI9XCJFbWFpbFwiLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiNTAwXCIsIG1hcmdpbkJvdHRvbTogXCIycHhcIn19XHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cInRlc3QxMjNcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcnVsZXM9e1t7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBQYXNzd29yZCEnfV19IG5hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMjJweFwifX0gdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiNTAwXCJ9fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJ0ZXN0MTIzXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJSZXBlYXQgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIyMnB4XCJ9fSB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICB7LyogPEZvcm0uSXRlbSB2YWx1ZVByb3BOYW1lPVwiY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwiZ3gtdGV4dC1saWdodFwiPlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJneC1sb2dpbi1mb3JtLWZvcmdvdCBneC10ZXh0LWxpZ2h0XCIgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+Rm9yZ290IHBhc3N3b3JkPzwvYT48L0xpbms+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT4gKi99XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjRDNGMzZCXCJ9fSBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucyBneC1tYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucy1pbWdcIiBzcmM9XCIvaW1hZ2VzL2dvb2dsZS1wbHVzLnBuZ1wiIGFsdD0nZmFjZWJvb2snLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic29jaWFsLWljb25zLWltZ1wiIHNyYz1cIi9pbWFnZXMvdHdpdHRlci5wbmdcIiBhbHQ9J3R3aXR0ZXInLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic29jaWFsLWljb25zLWltZ1wiIHNyYz1cIi9pbWFnZXMvZmFjZWJvb2sucG5nXCIgYWx0PSdOZWF0dXJlJy8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY2VudGVyIGd4LXRleHQtbGlnaHQgZ3gtbWItM1wiPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PzwvZGl2PiBcclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+ICAqL31cclxuICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIGh0bWxUeXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiICBzdHlsZT17e2JvcmRlcjogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHsvKiA8c3BhblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1saWdodCBneC1mcy1zbVwiPiBkZW1vIHVzZXIgZW1haWw6ICdkZW1vQGV4YW1wbGUuY29tJyBhbmQgcGFzc3dvcmQ6ICdkZW1vIzEyMyc8L3NwYW4+ICovfVxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpc0xvYWRpbmcgJiZcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1sb2FkZXItdmlld1wiPlxyXG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbiAgLy8gPC9kaXY+XHJcbi8vIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=