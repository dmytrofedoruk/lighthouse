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
      style: {
        fontWeight: "500"
      },
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
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      className: "gx-text-light"
    }, "Remember me"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/forgot-password"
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
      className: "header__center gx-text-light gx-mb-2"
    }, "or"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "gx-mb-0 design-button",
      htmlType: "submit"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL3VzZXJBdXRoL1NpZ25Jbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInVzZUF1dGgiLCJpc0xvYWRpbmciLCJ1c2VyTG9naW4iLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJyZW1lbWJlciIsInJlcXVpcmVkIiwibWVzc2FnZSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN5QjtBQUN2QjtBQUMwQjtBQUNQO0FBQ3lCO0FBRXhFLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFNLENBQUlDLEtBQUssRUFBSztFQUFBO0VBQ3hCLGVBQStCQyw4REFBTyxFQUFFO0lBQWpDQyxTQUFTLFlBQVRBLFNBQVM7SUFBRUMsU0FBUyxZQUFUQSxTQUFTO0VBRTNCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBYyxDQUFHQyxTQUFTLEVBQUksQ0FDcEMsQ0FBQztFQUVELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUdDLE1BQU0sRUFBSTtJQUN6QkosU0FBUyxDQUFDSSxNQUFNLENBQUM7RUFDbkIsQ0FBQztFQUVEO0lBQ0U7SUFDRTtJQUNFO01BQUssU0FBUyxFQUFDO0lBQTJCLEdBQ3hDO01BQUssU0FBUyxFQUFDO0lBQXFCLEdBSWxDO01BQUssU0FBUyxFQUFDO0lBQWlCLEdBQzlCO01BQUksS0FBSyxFQUFFO1FBQUNDLEtBQUssRUFBRSxPQUFPO1FBQUVDLFFBQVEsRUFBRSxNQUFNO1FBQUVDLFVBQVUsRUFBRTtNQUFLO0lBQUUsR0FBQyxtREFBaUQsQ0FBSyxFQUN4SDtNQUFHLFNBQVMsRUFBQztJQUFlLEdBQUMsb0RBQWtELENBQUksQ0FDL0UsQ0FJRixFQUNOO01BQUssU0FBUyxFQUFD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QUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLjg3MTRkZDEzMmIwZGEwNzI2ZTVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBDaGVja2JveCwgRm9ybSwgSW5wdXR9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiLi4vLi4vLi4vdXRpbC91c2UtYXV0aFwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgU2lnbkluID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2lzTG9hZGluZywgdXNlckxvZ2lufSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSBlcnJvckluZm8gPT4ge1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gdmFsdWVzID0+IHtcclxuICAgIHVzZXJMb2dpbih2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dpbi13cmFwXCI+XHJcbiAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLWxvZ2luLW1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImd4LWFwcC1sb2dvLWNvbnRlbnQtYmdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNzJ4Mzk1XCIgYWx0PSdOZWF0dXJlJy8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nby13aWRcIj5cclxuICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCBmb250U2l6ZTogXCI1NXB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCJ9fT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nPC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LWxpZ2h0XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiZXhhbXBsZVwiIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9naW4tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbG9nbyBneC1tYi0yXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWItNFwiPlxyXG4gICAgICAgICAgICAgIDxoMT5Hb29kIEFmdGVybm9vbiDwn5GLPC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LWxpZ2h0XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e3JlbWVtYmVyOiB0cnVlfX1cclxuICAgICAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICAgICAgICBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd4LXNpZ25pbi1mb3JtIGd4LWZvcm0tcm93MFwiPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiNTAwXCJ9fVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiZGVtb0BleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnVGhlIGlucHV0IGlzIG5vdCB2YWxpZCBFLW1haWwhJ31dfSBuYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIyMnB4XCJ9fSBwbGFjZWhvbGRlcj1cIkVtYWlsXCIvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCI1MDBcIn19XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJkZW1vIzEyM1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgUGFzc3dvcmQhJ31dfSBuYW1lPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIyMnB4XCJ9fSB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJneC10ZXh0LWxpZ2h0XCI+UmVtZW1iZXIgbWU8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3gtbG9naW4tZm9ybS1mb3Jnb3QgZ3gtdGV4dC1saWdodFwiIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19PkZvcmdvdCBwYXNzd29yZD88L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjRDNGMzZCXCJ9fSBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY2VudGVyIGd4LXRleHQtbGlnaHQgZ3gtbWItMlwiPm9yPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+ICAqL31cclxuICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3gtbWItMCBkZXNpZ24tYnV0dG9uXCIgIHN0eWxlPXt7Ym9yZGVyOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLnNpZ25VcFwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7LyogPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJneC10ZXh0LWxpZ2h0IGd4LWZzLXNtXCI+IGRlbW8gdXNlciBlbWFpbDogJ2RlbW9AZXhhbXBsZS5jb20nIGFuZCBwYXNzd29yZDogJ2RlbW8jMTIzJzwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2lzTG9hZGluZyAmJlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1sb2FkZXItdmlld1wiPlxyXG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcy8+XHJcbiAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIC8vIDwvZGl2PlxyXG4gICAgLy8gPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==