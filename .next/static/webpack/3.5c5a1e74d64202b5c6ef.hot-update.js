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
      style: {
        text: text
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL3VzZXJBdXRoL1NpZ25VcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkZvcm0iLCJJdGVtIiwiUmFkaW9CdXR0b24iLCJSYWRpbyIsIkJ1dHRvbiIsIlJhZGlvR3JvdXAiLCJHcm91cCIsIlNpZ25VcCIsInByb3BzIiwidXNlQXV0aCIsImlzTG9hZGluZyIsInVzZXJTaWdudXAiLCJnZXRBdXRoVXNlciIsIm9uRmluaXNoRmFpbGVkIiwiZXJyb3JJbmZvIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJkYXRhIiwibmFtZSIsImZuYW1lIiwibG5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJtYXJnaW5MZWZ0IiwicmVtZW1iZXIiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSYWRpdXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJ0ZXh0IiwiYmFja2dyb3VuZCIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZ0M7QUFDOUI7QUFDUDtBQUNpQztBQUNQO0FBQ3lCO0FBRXhFLElBQU1BLFFBQVEsR0FBR0MseUNBQUksQ0FBQ0MsSUFBSTtBQUMxQixJQUFNQyxXQUFXLEdBQUdDLDBDQUFLLENBQUNDLE1BQU07QUFDaEMsSUFBTUMsVUFBVSxHQUFHRiwwQ0FBSyxDQUFDRyxLQUFLO0FBRTlCLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFNLENBQUlDLEtBQUssRUFBSztFQUFBO0VBQ3hCLGVBQTZDQyw4REFBTyxFQUFFO0lBQS9DQyxTQUFTLFlBQVRBLFNBQVM7SUFBRUMsVUFBVSxZQUFWQSxVQUFVO0lBQUVDLFdBQVcsWUFBWEEsV0FBVztFQUV6QyxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBR0MsU0FBUyxFQUFJLENBQ3BDLENBQUM7RUFFRCxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxDQUFHQyxNQUFNLEVBQUk7SUFDekIsSUFBSUMsSUFBSSxHQUFHO01BQ1RDLElBQUksRUFBR0YsTUFBTSxDQUFDRyxLQUFLLEdBQUUsR0FBRyxHQUFFSCxNQUFNLENBQUNJLEtBQUs7TUFDdENDLEtBQUssRUFBRUwsTUFBTSxDQUFDSyxLQUFLO01BQ25CQyxRQUFRLEVBQUdOLE1BQU0sQ0FBQ007SUFDcEIsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsSUFBSSxDQUFDO0lBQ2pCTixVQUFVLENBQUNNLElBQUksRUFBRSxZQUFNO01BQ3JCTCxXQUFXLEVBQUU7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDO0VBRUQ7SUFDRTtJQUNFO0lBQ0E7TUFBSyxTQUFTLEVBQUM7SUFBMkIsR0FDMUM7TUFBSyxTQUFTLEVBQUM7SUFBcUIsR0FJbEM7TUFBSyxTQUFTLEVBQUM7SUFBaUIsR0FDOUI7TUFBSSxLQUFLLEVBQUU7UUFBQ2EsS0FBSyxFQUFFLE9BQU87UUFBRUMsUUFBUSxFQUFFLE1BQU07UUFBRUMsVUFBVSxFQUFFO01BQUs7SUFBRSxHQUFDLG1EQUFpRCxDQUFLLEVBQ3hIO01BQUcsU0FBUyxFQUFDO0lBQWUsR0FBQyxvREFBa0QsQ0FBSSxDQUMvRSxDQUlGLEVBQ047TUFBSyxTQUFTLEVBQUMsc0JBQXNCO01BQUMsS0FBSyxFQUFFO1FBQUNDLE1BQU0sRUFBRSxNQUFNO1FBQUVDLFFBQVEsRUFBRTtNQUFNO0lBQUUsR0FDN0U7TUFBSyxTQUFTLEVBQUM7SUFBcUIsR0FDbkM7TUFBSyxLQUFLLEVBQUU7UUFBQ0MsVUFBVSxFQUFFO01BQU8sQ0FBRTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDO0lBQWtCLEVBQUUsQ0FDckUsRUFDTjtNQUFLLFNBQVMsRUFBQztJQUFTLEdBQ3RCLGtCQUFJLHNCQUFVLENBQUssRUFDbkI7TUFBRyxTQUFTLEVBQUM7SUFBZSxHQUFDLHVDQUFxQyxDQUFJLENBQ2xFLEVBQ04sTUFBQyx5Q0FBSTtNQUNILGFBQWEsRUFBRTtRQUFDQyxRQUFRLEVBQUU7TUFBSSxDQUFFO01BQ2hDLElBQUksRUFBQyxPQUFPO01BQ1osUUFBUSxFQUFFaEIsUUFBUztNQUNuQixjQUFjLEVBQUVGLGNBQWU7TUFDL0IsTUFBTSxFQUFDLFVBQVU7TUFDakIsU0FBUyxFQUFDO0lBQTZCLEdBRXZDLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQ1IsS0FBSyxFQUFFO1FBQUNjLFVBQVUsRUFBRSxLQUFLO1FBQUVLLFlBQVksRUFBRTtNQUFLLENBQUU7TUFDaEQsWUFBWSxFQUFDLFFBQVE7TUFDckIsS0FBSyxFQUFDLFlBQVk7TUFDbEIsSUFBSSxFQUFDO0lBQU8sR0FDWixNQUFDLDBDQUFLO01BQUMsS0FBSyxFQUFFO1FBQUNDLFlBQVksRUFBRTtNQUFNLENBQUU7TUFBQyxXQUFXLEVBQUM7SUFBRSxFQUFFLENBQzVDLEVBQ1osTUFBQyx5Q0FBSSxDQUFDLElBQUk7TUFDUixLQUFLLEVBQUU7UUFBQ04sVUFBVSxFQUFFLEtBQUs7UUFBRUssWUFBWSxFQUFFO01BQUssQ0FBRTtNQUNoRCxZQUFZLEVBQUMsU0FBUztNQUN0QixLQUFLLEVBQUMsV0FBVztNQUNqQixJQUFJLEVBQUM7SUFBTyxHQUNaLE1BQUMsMENBQUs7TUFBQyxLQUFLLEVBQUU7UUFBQ0MsWUFBWSxFQUFFO01BQU0sQ0FBRTtNQUFDLFdBQVcsRUFBQztJQUFPLEVBQUUsQ0FDakQsRUFDWixNQUFDLHlDQUFJLENBQUMsSUFBSTtNQUNSLEtBQUssRUFBRTtRQUFDTixVQUFVLEVBQUUsS0FBSztRQUFFSyxZQUFZLEVBQUU7TUFBSyxDQUFFO01BQ2hELFlBQVksRUFBQyx5QkFBeUI7TUFDdEMsS0FBSyxFQUFDLE9BQU87TUFDYixLQUFLLEVBQUUsQ0FBQztRQUFDRSxRQUFRLEVBQUUsSUFBSTtRQUFFQyxPQUFPLEVBQUU7TUFBZ0MsQ0FBQyxDQUFFO01BQUMsSUFBSSxFQUFDO0lBQU8sR0FDbEYsTUFBQywwQ0FBSztNQUFDLEtBQUssRUFBRTtRQUFDRixZQUFZLEVBQUU7TUFBTSxDQUFFO01BQUMsV0FBVyxFQUFDO0lBQU8sRUFBRSxDQUNqRCxFQUNaLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQ1IsS0FBSyxFQUFFO1FBQUNOLFVBQVUsRUFBRSxLQUFLO1FBQUVLLFlBQVksRUFBRTtNQUFLLENBQUU7TUFDaEQsWUFBWSxFQUFDLFNBQVM7TUFDdEIsS0FBSyxFQUFDLFVBQVU7TUFDaEIsS0FBSyxFQUFFLENBQUM7UUFBQ0UsUUFBUSxFQUFFLElBQUk7UUFBRUMsT0FBTyxFQUFFO01BQTZCLENBQUMsQ0FBRTtNQUFDLElBQUksRUFBQztJQUFVLEdBQ2xGLE1BQUMsMENBQUs7TUFBQyxLQUFLLEVBQUU7UUFBQ0YsWUFBWSxFQUFFO01BQU0sQ0FBRTtNQUFDLElBQUksRUFBQyxVQUFVO01BQUMsV0FBVyxFQUFDO0lBQVUsRUFBRSxDQUNwRSxFQUNaLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQ1IsS0FBSyxFQUFFO1FBQUNOLFVBQVUsRUFBRSxLQUFLO1FBQUVLLFlBQVksRUFBRTtNQUFLLENBQUU7TUFDaEQsWUFBWSxFQUFDLFNBQVM7TUFDdEIsS0FBSyxFQUFDLGlCQUFpQjtNQUN0QixJQUFJLEVBQUM7SUFBVSxHQUNoQixNQUFDLDBDQUFLO01BQUMsS0FBSyxFQUFFO1FBQUNDLFlBQVksRUFBRTtNQUFNLENBQUU7TUFBQyxJQUFJLEVBQUMsVUFBVTtNQUFDLFdBQVcsRUFBQztJQUFVLEVBQUUsQ0FDcEUsRUFNWixNQUFDLHlDQUFJLENBQUMsSUFBSSxRQUNWLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQUMsS0FBSyxFQUFFO1FBQUNHLElBQUksRUFBSkE7TUFBSTtJQUFFLEdBQ3ZCLE1BQUMsVUFBVTtNQUFDLFlBQVksRUFBQztJQUFRLEdBQy9CLE1BQUMsMENBQUs7TUFBQyxLQUFLLEVBQUM7SUFBUyxHQUFDLFNBQU8sQ0FBUSxFQUN0QyxNQUFDLDBDQUFLO01BQUMsS0FBSyxFQUFDO0lBQVEsR0FBQyxRQUFNLENBQVEsQ0FDekIsQ0FDSCxFQUNWLE1BQUMsMkNBQU07TUFBQyxTQUFTLEVBQUMsdUJBQXVCO01BQUMsS0FBSyxFQUFFO1FBQUNDLFVBQVUsRUFBRTtNQUFTLENBQUU7TUFBQyxRQUFRLEVBQUM7SUFBUSxHQUFDLFNBRTVGLENBQVMsQ0FDQyxFQUVaO01BQUssU0FBUyxFQUFDO0lBQXNCLEdBQy9CO01BQUssU0FBUyxFQUFDLGtCQUFrQjtNQUFDLEdBQUcsRUFBQyx5QkFBeUI7TUFBQyxHQUFHLEVBQUM7SUFBVSxFQUFFLEVBQ2hGO01BQUssU0FBUyxFQUFDLGtCQUFrQjtNQUFDLEdBQUcsRUFBQyxxQkFBcUI7TUFBQyxHQUFHLEVBQUM7SUFBUyxFQUFFLEVBQzNFO01BQUssU0FBUyxFQUFDLGtCQUFrQjtNQUFDLEdBQUcsRUFBQyxzQkFBc0I7TUFBQyxHQUFHLEVBQUM7SUFBUyxFQUFFLENBQzVFLEVBRUo7TUFBSyxTQUFTLEVBQUM7SUFBc0MsR0FBQywwQkFBd0IsQ0FBTSxFQUd0RixNQUFDLHlDQUFJLENBQUMsSUFBSSxRQUNSLE1BQUMsMkNBQU07TUFBQyxTQUFTLEVBQUMsdUJBQXVCO01BQUMsUUFBUSxFQUFDO0lBQVEsR0FDM0QsTUFBQyxnREFBSTtNQUFDLElBQUksRUFBQztJQUFTLEdBQ3BCO01BQUcsU0FBUyxFQUFDLHVCQUF1QjtNQUFFLEtBQUssRUFBRTtRQUFDQyxNQUFNLEVBQUU7TUFBTTtJQUFFLEdBQUMsT0FFL0QsQ0FBSSxDQUNDLENBQ0ksQ0FDQyxDQUlQLENBQ0gsRUFDTDVCLFNBQVMsSUFDVjtNQUFLLFNBQVMsRUFBQztJQUFnQixHQUM3QixNQUFDLHdFQUFnQixPQUFFLENBQ2Y7SUFFVjtJQUNGO0VBQUE7QUFFQSxDQUFDO0FBQUMsR0FySUlILE1BQU07RUFBQSxRQUNtQ0Usc0RBQU87QUFBQTtBQUFBLEtBRGhERixNQUFNO0FBdUlHQSxxRUFBTSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8zLjVjNWExZTc0ZDY0MjAyYjVjNmVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBDaGVja2JveCwgRm9ybSwgSW5wdXQsIFJhZGlvfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlLWF1dGhcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xyXG5jb25zdCBSYWRpb0J1dHRvbiA9IFJhZGlvLkJ1dHRvbjtcclxuY29uc3QgUmFkaW9Hcm91cCA9IFJhZGlvLkdyb3VwO1xyXG5cclxuY29uc3QgU2lnblVwID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2lzTG9hZGluZywgdXNlclNpZ251cCwgZ2V0QXV0aFVzZXJ9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IGVycm9ySW5mbyA9PiB7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSB2YWx1ZXMgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIG5hbWUgOiB2YWx1ZXMuZm5hbWUrICcgJyArdmFsdWVzLmxuYW1lLFxyXG4gICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZCA6IHZhbHVlcy5wYXNzd29yZCBcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgdXNlclNpZ251cChkYXRhLCAoKSA9PiB7XHJcbiAgICAgIGdldEF1dGhVc2VyKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4td3JhcFwiPlxyXG4gICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4tbWFpbi1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ28tY29udGVudFwiPlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvLWNvbnRlbnQtYmdcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI3MngzOTVcIiBhbHQ9J05lYXR1cmUnLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nby13aWRcIj5cclxuICAgICAgICAgIDxoMSBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCIsIGZvbnRTaXplOiBcIjU1cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIn19PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2Npbmc8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1saWdodFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvXCI+XHJcbiAgICAgICAgICA8aW1nIGFsdD1cImV4YW1wbGVcIiBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIvPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLWNvbnRlbnRcIiBzdHlsZT17e2hlaWdodDogXCIxMDAlXCIsIG92ZXJmbG93OiBcImF1dG9cIn19PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvIGd4LW1iLTJcIj5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIi0xNnB4XCJ9fSBhbHQ9XCJleGFtcGxlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1iLTRcIj5cclxuICAgICAgICAgIDxoMT5TaWduIFVwIPCfk508L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1saWdodFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tyZW1lbWJlcjogdHJ1ZX19XHJcbiAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxyXG4gICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtc2lnbmluLWZvcm0gZ3gtZm9ybS1yb3cwXCI+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiNTAwXCIsIG1hcmdpbkJvdHRvbTogXCIycHhcIn19XHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cIkRteXRyb1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmbmFtZVwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMjJweFwifX0gcGxhY2Vob2xkZXI9XCJcIi8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcIjUwMFwiLCBtYXJnaW5Cb3R0b206IFwiMnB4XCJ9fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJGZWRvcnVrXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibG5hbWVcIj5cclxuICAgICAgICAgICAgPElucHV0IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjIycHhcIn19IHBsYWNlaG9sZGVyPVwiRW1haWxcIi8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcIjUwMFwiLCBtYXJnaW5Cb3R0b206IFwiMnB4XCJ9fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJkbXl0cm8uZmVkb3J1QGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBydWxlcz17W3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1RoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsISd9XX0gbmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIyMnB4XCJ9fSBwbGFjZWhvbGRlcj1cIkVtYWlsXCIvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCI1MDBcIiwgbWFyZ2luQm90dG9tOiBcIjJweFwifX1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwidGVzdDEyM1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBydWxlcz17W3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFBhc3N3b3JkISd9XX0gbmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIyMnB4XCJ9fSB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCI1MDBcIiwgbWFyZ2luQm90dG9tOiBcIjJweFwifX1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwidGVzdDEyM1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUmVwZWF0IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMjJweFwifX0gdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgey8qIDxGb3JtLkl0ZW0gdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT1cImd4LXRleHQtbGlnaHRcIj5SZW1lbWJlciBtZTwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3gtbG9naW4tZm9ybS1mb3Jnb3QgZ3gtdGV4dC1saWdodFwiIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19PkZvcmdvdCBwYXNzd29yZD88L2E+PC9MaW5rPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+ICovfVxyXG4gICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3t0ZXh0fX0+XHJcbiAgICAgICAgICAgIDxSYWRpb0dyb3VwIGRlZmF1bHRWYWx1ZT1cIm1vbnRseVwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIm1vbnRobHlcIj5Nb250aGx5PC9SYWRpbz5cclxuICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJ5ZWFybHlcIj5ZZWFybHk8L1JhZGlvPlxyXG4gICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwifX0gaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgZ3gtbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMtaW1nXCIgc3JjPVwiL2ltYWdlcy9nb29nbGUtcGx1cy5wbmdcIiBhbHQ9J2ZhY2Vib29rJy8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucy1pbWdcIiBzcmM9XCIvaW1hZ2VzL3R3aXR0ZXIucG5nXCIgYWx0PSd0d2l0dGVyJy8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucy1pbWdcIiBzcmM9XCIvaW1hZ2VzL2ZhY2Vib29rLnBuZ1wiIGFsdD0nTmVhdHVyZScvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NlbnRlciBneC10ZXh0LWxpZ2h0IGd4LW1iLTNcIj5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD88L2Rpdj4gXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PiAgKi99XHJcbiAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBodG1sVHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiAgc3R5bGU9e3tib3JkZXI6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7LyogPHNwYW5cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImd4LXRleHQtbGlnaHQgZ3gtZnMtc21cIj4gZGVtbyB1c2VyIGVtYWlsOiAnZGVtb0BleGFtcGxlLmNvbScgYW5kIHBhc3N3b3JkOiAnZGVtbyMxMjMnPC9zcGFuPiAqL31cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNMb2FkaW5nICYmXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbG9hZGVyLXZpZXdcIj5cclxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcy8+XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gIC8vIDwvZGl2PlxyXG4vLyA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9