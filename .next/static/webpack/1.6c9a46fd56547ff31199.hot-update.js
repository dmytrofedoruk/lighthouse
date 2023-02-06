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
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
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
      className: "gx-app-login-content"
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
    }, __jsx("h1", null, "Good Afternoon \uD83D\uDC4B"), __jsx("p", {
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
        fontWeight: "500"
      },
      initialValue: "admin@admin.com",
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
        fontWeight: "500"
      },
      initialValue: "12345678",
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
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      className: "gx-text-light"
    }, "Remember me"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/signin"
    }, __jsx("a", {
      className: "gx-login-form-forgot gx-text-light",
      style: {
        "float": "right"
      }
    }, "Forgot password?"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "gx-mb-0 design-button",
      style: {
        background: "#D3F36B"
      },
      htmlType: "submit"
    }, "Login")), __jsx("div", {
      className: "header__center gx-text-light gx-mb-3"
    }, "or"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "gx-mb-0 design-button",
      htmlType: "button"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/signup"
    }, __jsx("a", {
      className: "gx-mb-0 design-button",
      style: {
        border: "none"
      }
    }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "app.userAuth.signUp"
    }))))))), isLoading && __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL3VzZXJBdXRoL1NpZ25Jbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInVzZUF1dGgiLCJpc0xvYWRpbmciLCJ1c2VyTG9naW4iLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsIm9uRmluaXNoIiwidmFsdWVzIiwidXNlRWZmZWN0IiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDVTtBQUN2QjtBQUMwQjtBQUNQO0FBQ3lCO0FBRXhFLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFNLENBQUlDLEtBQUssRUFBSztFQUFBO0VBQ3hCLGVBQStCQyw4REFBTyxFQUFFO0lBQWpDQyxTQUFTLFlBQVRBLFNBQVM7SUFBRUMsU0FBUyxZQUFUQSxTQUFTO0VBRTNCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBYyxDQUFHQyxTQUFTLEVBQUksQ0FDcEMsQ0FBQztFQUVELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUdDLE1BQU0sRUFBSTtJQUN6QkosU0FBUyxDQUFDSSxNQUFNLENBQUM7RUFDbkIsQ0FBQztFQUVEQywrQ0FBUztFQUVUO0lBQ0U7SUFDRTtJQUNFO01BQUssU0FBUyxFQUFDO0lBQTJCLEdBQ3hDO01BQUssU0FBUyxFQUFDO0lBQXFCLEdBSWxDO01BQUssU0FBUyxFQUFDO0lBQWlCLEdBQzlCO01BQUksS0FBSyxFQUFFO1FBQUNDLEtBQUssRUFBRSxPQUFPO1FBQUVDLFFBQVEsRUFBRSxNQUFNO1FBQUVDLFVBQVUsRUFBRTtNQUFLO0lBQUUsR0FBQyxtREFBaUQsQ0FBSyxFQUN4SDtNQUFHLFNBQVMsRUFBQztJQUFlLEdBQUMsb0RBQWtE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LENBQUM7QUFBQyxHQTlGSUgsTUFBTTtFQUFBLFFBQ3FCRSxzREFBTztBQUFBO0FBQUEsS0FEbENGLE1BQU07QUFnR0dBLHFFQUFNLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuNmM5YTQ2ZmQ1NjU0N2ZmMzExOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCdXR0b24sIENoZWNrYm94LCBGb3JtLCBJbnB1dH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gXCIuLi8uLi8uLi91dGlsL0ludGxNZXNzYWdlc1wiO1xyXG5pbXBvcnQge3VzZUF1dGh9IGZyb20gXCIuLi8uLi8uLi91dGlsL3VzZS1hdXRoXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBTaWduSW4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7aXNMb2FkaW5nLCB1c2VyTG9naW59ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IGVycm9ySW5mbyA9PiB7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSB2YWx1ZXMgPT4ge1xyXG4gICAgdXNlckxvZ2luKHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi13cmFwXCI+XHJcbiAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLW1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvLWNvbnRlbnQtYmdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNzJ4Mzk1XCIgYWx0PSdOZWF0dXJlJy8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nby13aWRcIj5cclxuICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCBmb250U2l6ZTogXCI1NXB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCJ9fT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nPC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LWxpZ2h0XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiZXhhbXBsZVwiIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nbyBneC1tYi0yXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzdHlsZT17e21hcmdpbkxlZnQ6IFwiLTE2cHhcIn19IGFsdD1cImV4YW1wbGVcIiBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tYi00XCI+XHJcbiAgICAgICAgICAgICAgPGgxPkdvb2QgQWZ0ZXJub29uIPCfkYs8L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LXRleHQtbGlnaHRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7cmVtZW1iZXI6IHRydWV9fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtc2lnbmluLWZvcm0gZ3gtZm9ybS1yb3cwXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCI1MDBcIn19XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJhZG1pbkBhZG1pbi5jb21cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1RoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsISd9XX0gbmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMjJweFwifX0gcGxhY2Vob2xkZXI9XCJFbWFpbFwiLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiNTAwXCJ9fVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiMTIzNDU2NzhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFBhc3N3b3JkISd9XX0gbmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMjJweFwifX0gdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwiZ3gtdGV4dC1saWdodFwiPlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImd4LWxvZ2luLWZvcm0tZm9yZ290IGd4LXRleHQtbGlnaHRcIiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwifX0gaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NlbnRlciBneC10ZXh0LWxpZ2h0IGd4LW1iLTNcIj5vcjwvZGl2PiBcclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PiAgKi99XHJcbiAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBodG1sVHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiICBzdHlsZT17e2JvcmRlcjogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cImFwcC51c2VyQXV0aC5zaWduVXBcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgey8qIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1saWdodCBneC1mcy1zbVwiPiBkZW1vIHVzZXIgZW1haWw6ICdkZW1vQGV4YW1wbGUuY29tJyBhbmQgcGFzc3dvcmQ6ICdkZW1vIzEyMyc8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtpc0xvYWRpbmcgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbG9hZGVyLXZpZXdcIj5cclxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MvPlxyXG4gICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAvLyA8L2Rpdj5cclxuICAgIC8vIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=