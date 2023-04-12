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
      valuePropName: "checked"
    }, __jsx(RadioGroup, {
      options: [{
        label: 'Monthly',
        value: 'monthly'
      }, {
        label: 'Yearly',
        value: 'yearly'
      }],
      value: "monthly"
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL3VzZXJBdXRoL1NpZ25VcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkZvcm0iLCJJdGVtIiwiUmFkaW9Hcm91cCIsIlJhZGlvIiwiR3JvdXAiLCJTaWduVXAiLCJwcm9wcyIsInVzZUF1dGgiLCJpc0xvYWRpbmciLCJ1c2VyU2lnbnVwIiwiZ2V0QXV0aFVzZXIiLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsIm9uRmluaXNoIiwidmFsdWVzIiwiZGF0YSIsIm5hbWUiLCJmbmFtZSIsImxuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImhlaWdodCIsIm92ZXJmbG93IiwibWFyZ2luTGVmdCIsInJlbWVtYmVyIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibGFiZWwiLCJ2YWx1ZSIsImJhY2tncm91bmQiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dDO0FBQzlCO0FBQ1A7QUFDaUM7QUFDUDtBQUN5QjtBQUV4RSxJQUFNQSxRQUFRLEdBQUdDLHlDQUFJLENBQUNDLElBQUk7QUFDMUIsSUFBTUMsVUFBVSxHQUFHQywwQ0FBSyxDQUFDQyxLQUFLO0FBRTlCLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFNLENBQUlDLEtBQUssRUFBSztFQUFBO0VBQ3hCLGVBQTZDQyw4REFBTyxFQUFFO0lBQS9DQyxTQUFTLFlBQVRBLFNBQVM7SUFBRUMsVUFBVSxZQUFWQSxVQUFVO0lBQUVDLFdBQVcsWUFBWEEsV0FBVztFQUV6QyxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBR0MsU0FBUyxFQUFJLENBQ3BDLENBQUM7RUFFRCxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxDQUFHQyxNQUFNLEVBQUk7SUFDekIsSUFBSUMsSUFBSSxHQUFHO01BQ1RDLElBQUksRUFBR0YsTUFBTSxDQUFDRyxLQUFLLEdBQUUsR0FBRyxHQUFFSCxNQUFNLENBQUNJLEtBQUs7TUFDdENDLEtBQUssRUFBRUwsTUFBTSxDQUFDSyxLQUFLO01BQ25CQyxRQUFRLEVBQUdOLE1BQU0sQ0FBQ007SUFDcEIsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsSUFBSSxDQUFDO0lBQ2pCTixVQUFVLENBQUNNLElBQUksRUFBRSxZQUFNO01BQ3JCTCxXQUFXLEVBQUU7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDO0VBRUQ7SUFDRTtJQUNFO0lBQ0E7TUFBSyxTQUFTLEVBQUM7SUFBMkIsR0FDMUM7TUFBSyxTQUFTLEVBQUM7SUFBcUIsR0FJbEM7TUFBSyxTQUFTLEVBQUM7SUFBaUIsR0FDOUI7TUFBSSxLQUFLLEVBQUU7UUFBQ2EsS0FBSyxFQUFFLE9BQU87UUFBRUMsUUFBUSxFQUFFLE1BQU07UUFBRUMsVUFBVSxFQUFFO01BQUs7SUFBRSxHQUFDLG1EQUFpRCxDQUFLLEVBQ3hIO01BQUcsU0FBUyxFQUFDO0lBQWUsR0FBQyxvREFBa0QsQ0FBSSxDQUMvRSxDQUlGLEVBQ047TUFBSyxTQUFTLEVBQUMsc0JBQXNCO01BQUMsS0FBSyxFQUFFO1FBQUNDLE1BQU0sRUFBRSxNQUFNO1FBQUVDLFFBQVEsRUFBRTtNQUFNO0lBQUUsR0FDN0U7TUFBSyxTQUFTLEVBQUM7SUFBcUIsR0FDbkM7TUFBSyxLQUFLLEVBQUU7UUFBQ0MsVUFBVSxFQUFFO01BQU8sQ0FBRTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDO0lBQWtCLEVBQUUsQ0FDckUsRUFDTjtNQUFLLFNBQVMsRUFBQztJQUFTLEdBQ3RCLGtCQUFJLHNCQUFVLENBQUssRUFDbkI7TUFBRyxTQUFTLEVBQUM7SUFBZSxHQUFDLHVDQUFxQyxDQUFJLENBQ2xFLEVBQ04sTUFBQyx5Q0FBSTtNQUNILGFBQWEsRUFBRTtRQUFDQyxRQUFRLEVBQUU7TUFBSSxDQUFFO01BQ2hDLElBQUksRUFBQyxPQUFPO01BQ1osUUFBUSxFQUFFaEIsUUFBUztNQUNuQixjQUFjLEVBQUVGLGNBQWU7TUFDL0IsTUFBTSxFQUFDLFVBQVU7TUFDakIsU0FBUyxFQUFDO0lBQTZCLEdBRXZDLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQ1IsS0FBSyxFQUFFO1FBQUNjLFVBQVUsRUFBRSxLQUFLO1FBQUVLLFlBQVksRUFBRTtNQUFLLENBQUU7TUFDaEQsWUFBWSxFQUFDLFFBQVE7TUFDckIsS0FBSyxFQUFDLFlBQVk7TUFDbEIsSUFBSSxFQUFDO0lBQU8sR0FDWixNQUFDLDBDQUFLO01BQUMsS0FBSyxFQUFFO1FBQUNDLFlBQVksRUFBRTtNQUFNLENBQUU7TUFBQyxXQUFXLEVBQUM7SUFBRSxFQUFFLENBQzVDLEVBQ1osTUFBQyx5Q0FBSSxDQUFDLElBQUk7TUFDUixLQUFLLEVBQUU7UUFBQ04sVUFBVSxFQUFFLEtBQUs7UUFBRUssWUFBWSxFQUFFO01BQUssQ0FBRTtNQUNoRCxZQUFZLEVBQUMsU0FBUztNQUN0QixLQUFLLEVBQUMsV0FBVztNQUNqQixJQUFJLEVBQUM7SUFBTyxHQUNaLE1BQUMsMENBQUs7TUFBQyxLQUFLLEVBQUU7UUFBQ0MsWUFBWSxFQUFFO01BQU0sQ0FBRTtNQUFDLFdBQVcsRUFBQztJQUFPLEVBQUUsQ0FDakQsRUFDWixNQUFDLHlDQUFJLENBQUMsSUFBSTtNQUNSLEtBQUssRUFBRTtRQUFDTixVQUFVLEVBQUUsS0FBSztRQUFFSyxZQUFZLEVBQUU7TUFBSyxDQUFFO01BQ2hELFlBQVksRUFBQyx5QkFBeUI7TUFDdEMsS0FBSyxFQUFDLE9BQU87TUFDYixLQUFLLEVBQUUsQ0FBQztRQUFDRSxRQUFRLEVBQUUsSUFBSTtRQUFFQyxPQUFPLEVBQUU7TUFBZ0MsQ0FBQyxDQUFFO01BQUMsSUFBSSxFQUFDO0lBQU8sR0FDbEYsTUFBQywwQ0FBSztNQUFDLEtBQUssRUFBRTtRQUFDRixZQUFZLEVBQUU7TUFBTSxDQUFFO01BQUMsV0FBVyxFQUFDO0lBQU8sRUFBRSxDQUNqRCxFQUNaLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQ1IsS0FBSyxFQUFFO1FBQUNOLFVBQVUsRUFBRSxLQUFLO1FBQUVLLFlBQVksRUFBRTtNQUFLLENBQUU7TUFDaEQsWUFBWSxFQUFDLFNBQVM7TUFDdEIsS0FBSyxFQUFDLFVBQVU7TUFDaEIsS0FBSyxFQUFFLENBQUM7UUFBQ0UsUUFBUSxFQUFFLElBQUk7UUFBRUMsT0FBTyxFQUFFO01BQTZCLENBQUMsQ0FBRTtNQUFDLElBQUksRUFBQztJQUFVLEdBQ2xGLE1BQUMsMENBQUs7TUFBQyxLQUFLLEVBQUU7UUFBQ0YsWUFBWSxFQUFFO01BQU0sQ0FBRTtNQUFDLElBQUksRUFBQyxVQUFVO01BQUMsV0FBVyxFQUFDO0lBQVUsRUFBRSxDQUNwRSxFQUNaLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQ1IsS0FBSyxFQUFFO1FBQUNOLFVBQVUsRUFBRSxLQUFLO1FBQUVLLFlBQVksRUFBRTtNQUFLLENBQUU7TUFDaEQsWUFBWSxFQUFDLFNBQVM7TUFDdEIsS0FBSyxFQUFDLGlCQUFpQjtNQUN0QixJQUFJLEVBQUM7SUFBVSxHQUNoQixNQUFDLDBDQUFLO01BQUMsS0FBSyxFQUFFO1FBQUNDLFlBQVksRUFBRTtNQUFNLENBQUU7TUFBQyxJQUFJLEVBQUMsVUFBVTtNQUFDLFdBQVcsRUFBQztJQUFVLEVBQUUsQ0FDcEUsRUFNWixNQUFDLHlDQUFJLENBQUMsSUFBSSxRQUNWLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQUMsYUFBYSxFQUFDO0lBQVMsR0FDOUIsTUFBQyxVQUFVO01BQUMsT0FBTyxFQUFFLENBQUc7UUFBQ0csS0FBSyxFQUFFLFNBQVM7UUFBRUMsS0FBSyxFQUFFO01BQVMsQ0FBQyxFQUN4RDtRQUFDRCxLQUFLLEVBQUUsUUFBUTtRQUFFQyxLQUFLLEVBQUU7TUFBUSxDQUFDLENBQUc7TUFBQyxLQUFLLEVBQUM7SUFBUyxFQUFFLENBQ25ELEVBQ1YsTUFBQywyQ0FBTTtNQUFDLFNBQVMsRUFBQyx1QkFBdUI7TUFBQyxLQUFLLEVBQUU7UUFBQ0MsVUFBVSxFQUFFO01BQVMsQ0FBRTtNQUFDLFFBQVEsRUFBQztJQUFRLEdBQUMsU0FFNUYsQ0FBUyxDQUNDLEVBRVo7TUFBSyxTQUFTLEVBQUM7SUFBc0IsR0FDL0I7TUFBSyxTQUFTLEVBQUMsa0JBQWtCO01BQUMsR0FBRyxFQUFDLHlCQUF5QjtNQUFDLEdBQUcsRUFBQztJQUFVLEVBQUUsRUFDaEY7TUFBSyxTQUFTLEVBQUMsa0JBQWtCO01BQUMsR0FBRyxFQUFDLHFCQUFxQjtNQUFDLEdBQUcsRUFBQztJQUFTLEVBQUUsRUFDM0U7TUFBSyxTQUFTLEVBQUMsa0JBQWtCO01BQUMsR0FBRyxFQUFDLHNCQUFzQjtNQUFDLEdBQUcsRUFBQztJQUFTLEVBQUUsQ0FDNUUsRUFFSjtNQUFLLFNBQVMsRUFBQztJQUFzQyxHQUFDLDBCQUF3QixDQUFNLEVBR3RGLE1BQUMseUNBQUksQ0FBQyxJQUFJLFFBQ1IsTUFBQywyQ0FBTTtNQUFDLFNBQVMsRUFBQyx1QkFBdUI7TUFBQyxRQUFRLEVBQUM7SUFBUSxHQUMzRCxNQUFDLGdEQUFJO01BQUMsSUFBSSxFQUFDO0lBQVMsR0FDcEI7TUFBRyxTQUFTLEVBQUMsdUJBQXVCO01BQUUsS0FBSyxFQUFFO1FBQUNDLE1BQU0sRUFBRTtNQUFNO0lBQUUsR0FBQyxPQUUvRCxDQUFJLENBQ0MsQ0FDSSxDQUNDLENBSVAsQ0FDSCxFQUNMN0IsU0FBUyxJQUNWO01BQUssU0FBUyxFQUFDO0lBQWdCLEdBQzdCLE1BQUMsd0VBQWdCLE9BQUUsQ0FDZjtJQUVWO0lBQ0Y7RUFBQTtBQUVBLENBQUM7QUFBQyxHQW5JSUgsTUFBTTtFQUFBLFFBQ21DRSxzREFBTztBQUFBO0FBQUEsS0FEaERGLE1BQU07QUFxSUdBLHFFQUFNLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzMuYWIxMWYyZjE5M2FmZGI1MmU5NDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCdXR0b24sIENoZWNrYm94LCBGb3JtLCBJbnB1dCwgUmFkaW99IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiLi4vLi4vLi4vdXRpbC91c2UtYXV0aFwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XHJcbmNvbnN0IFJhZGlvR3JvdXAgPSBSYWRpby5Hcm91cDtcclxuXHJcbmNvbnN0IFNpZ25VcCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtpc0xvYWRpbmcsIHVzZXJTaWdudXAsIGdldEF1dGhVc2VyfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSBlcnJvckluZm8gPT4ge1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gdmFsdWVzID0+IHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBuYW1lIDogdmFsdWVzLmZuYW1lKyAnICcgK3ZhbHVlcy5sbmFtZSxcclxuICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQgOiB2YWx1ZXMucGFzc3dvcmQgXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHVzZXJTaWdudXAoZGF0YSwgKCkgPT4ge1xyXG4gICAgICBnZXRBdXRoVXNlcigpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLXdyYXBcIj5cclxuICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4tY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLW1haW4tY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvLWNvbnRlbnRcIj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nby1jb250ZW50LWJnXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNzJ4Mzk1XCIgYWx0PSdOZWF0dXJlJy8+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ28td2lkXCI+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCBmb250U2l6ZTogXCI1NXB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCJ9fT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LXRleHQtbGlnaHRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nb1wiPlxyXG4gICAgICAgICAgPGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi1jb250ZW50XCIgc3R5bGU9e3toZWlnaHQ6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJhdXRvXCJ9fT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nbyBneC1tYi0yXCI+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPXt7bWFyZ2luTGVmdDogXCItMTZweFwifX0gYWx0PVwiZXhhbXBsZVwiIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tYi00XCI+XHJcbiAgICAgICAgICA8aDE+U2lnbiBVcCDwn5OdPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LXRleHQtbGlnaHRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7cmVtZW1iZXI6IHRydWV9fVxyXG4gICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImd4LXNpZ25pbi1mb3JtIGd4LWZvcm0tcm93MFwiPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcIjUwMFwiLCBtYXJnaW5Cb3R0b206IFwiMnB4XCJ9fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJEbXl0cm9cIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZm5hbWVcIj5cclxuICAgICAgICAgICAgPElucHV0IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjIycHhcIn19IHBsYWNlaG9sZGVyPVwiXCIvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCI1MDBcIiwgbWFyZ2luQm90dG9tOiBcIjJweFwifX1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiRmVkb3J1a1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cImxuYW1lXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIyMnB4XCJ9fSBwbGFjZWhvbGRlcj1cIkVtYWlsXCIvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCI1MDBcIiwgbWFyZ2luQm90dG9tOiBcIjJweFwifX1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiZG15dHJvLmZlZG9ydUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgcnVsZXM9e1t7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdUaGUgaW5wdXQgaXMgbm90IHZhbGlkIEUtbWFpbCEnfV19IG5hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMjJweFwifX0gcGxhY2Vob2xkZXI9XCJFbWFpbFwiLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiNTAwXCIsIG1hcmdpbkJvdHRvbTogXCIycHhcIn19XHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cInRlc3QxMjNcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcnVsZXM9e1t7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBQYXNzd29yZCEnfV19IG5hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMjJweFwifX0gdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiNTAwXCIsIG1hcmdpbkJvdHRvbTogXCIycHhcIn19XHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cInRlc3QxMjNcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlJlcGVhdCBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgPElucHV0IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjIycHhcIn19IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIHsvKiA8Rm9ybS5JdGVtIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJneC10ZXh0LWxpZ2h0XCI+UmVtZW1iZXIgbWU8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2ZvcmdvdC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImd4LWxvZ2luLWZvcm0tZm9yZ290IGd4LXRleHQtbGlnaHRcIiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPjwvTGluaz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPiAqL31cclxuICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvR3JvdXAgb3B0aW9ucz17WyAge2xhYmVsOiAnTW9udGhseScsIHZhbHVlOiAnbW9udGhseSd9LFxyXG4gICAgICAgICAgICAgICAgICB7bGFiZWw6ICdZZWFybHknLCB2YWx1ZTogJ3llYXJseSd9LF19IHZhbHVlPSdtb250aGx5Jy8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwifX0gaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgZ3gtbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMtaW1nXCIgc3JjPVwiL2ltYWdlcy9nb29nbGUtcGx1cy5wbmdcIiBhbHQ9J2ZhY2Vib29rJy8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucy1pbWdcIiBzcmM9XCIvaW1hZ2VzL3R3aXR0ZXIucG5nXCIgYWx0PSd0d2l0dGVyJy8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucy1pbWdcIiBzcmM9XCIvaW1hZ2VzL2ZhY2Vib29rLnBuZ1wiIGFsdD0nTmVhdHVyZScvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NlbnRlciBneC10ZXh0LWxpZ2h0IGd4LW1iLTNcIj5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD88L2Rpdj4gXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PiAgKi99XHJcbiAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBodG1sVHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiAgc3R5bGU9e3tib3JkZXI6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7LyogPHNwYW5cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImd4LXRleHQtbGlnaHQgZ3gtZnMtc21cIj4gZGVtbyB1c2VyIGVtYWlsOiAnZGVtb0BleGFtcGxlLmNvbScgYW5kIHBhc3N3b3JkOiAnZGVtbyMxMjMnPC9zcGFuPiAqL31cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNMb2FkaW5nICYmXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbG9hZGVyLXZpZXdcIj5cclxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcy8+XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gIC8vIDwvZGl2PlxyXG4vLyA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9