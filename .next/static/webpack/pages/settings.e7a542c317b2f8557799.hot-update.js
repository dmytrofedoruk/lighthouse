webpackHotUpdate_N_E("pages/settings",{

/***/ "./pages/settings.js":
/*!***************************!*\
  !*** ./pages/settings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TabPane = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"].TabPane;
function settings() {
  var callback = function callback(key) {};
  return __jsx("div", null, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, __jsx("h1", {
    className: "gx-font-weight-semi-bold",
    style: {
      fontSize: "30px"
    }
  }, "Lorem ipsum dolor"), __jsx("div", {
    style: {
      width: "12%",
      marginTop: "20px"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      background: "#D3F36B",
      border: "1px solid #C2C2C2",
      width: "60%"
    },
    htmlType: "button"
  }, "Save"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "1",
    onChange: callback
  }, __jsx(TabPane, {
    tab: "Device Settings",
    key: "1"
  }, __jsx("h4", {
    className: "gx-font-weight-semi-bold gx-mt-4"
  }, "Lorem Ipsum"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    className: "gx-mb-2 gx-mt-2"
  }, "Lorem ipsum dolor sit amet"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    className: "gx-mb-2"
  }, "Sed ut perspiciatis unde"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    defaultChecked: true
  }, "Quis autem vel eum iure"), __jsx("br", null), __jsx("h4", {
    className: "gx-font-weight-semi-bold gx-mt-4"
  }, "Excepteur sint occaecat cupidatat non proident"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    className: "gx-mb-2 gx-mt-2"
  }, "Lorem ipsum dolor sit amet"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    className: "gx-mb-2"
  }, "Sed ut perspiciatis unde"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    defaultChecked: true
  }, "Quis autem vel eum iure"), __jsx("br", null), __jsx("h4", {
    className: "gx-font-weight-semi-bold gx-mt-4"
  }, "Duis aute irure dolor in reprehenderit"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    className: "gx-mb-2 gx-mt-2"
  }, "Lorem ipsum dolor sit amet"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    className: "gx-mb-2"
  }, "Sed ut perspiciatis unde"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    defaultChecked: true
  }, "Quis autem vel eum iure"), __jsx("br", null), __jsx("h4", {
    className: "gx-font-weight-semi-bold gx-mt-4"
  }, "lorem Ipsum"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    size: "small",
    defaultChecked: true
  })), __jsx(TabPane, {
    tab: "Payment Settings",
    key: "2"
  }, __jsx("h4", {
    className: "gx-font-weight-semi-bold gx-mt-4 gx-mb-3"
  }, "Default Payment Method"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx("img", {
    src: "/images/visa.png",
    className: "gx-mr-3"
  }), __jsx("span", null, "Visa ending in 1234"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      "float": "right",
      background: "transparent",
      border: "none",
      width: "8%",
      marginLeft: "12px"
    }
  }, "Remove"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      "float": "right",
      background: "transparent",
      border: "1px solid #C2C2C2",
      width: "8%"
    }
  }, "Edit")), __jsx("h4", {
    className: "gx-font-weight-semi-bold gx-mt-5 gx-mb-3"
  }, "Saved Payment Method"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx("img", {
    src: "/images/visa.png",
    className: "gx-mr-3"
  }), __jsx("span", null, "Visa ending in 1234"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      "float": "right",
      background: "transparent",
      border: "none",
      width: "8%",
      marginLeft: "12px"
    }
  }, "Remove"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      "float": "right",
      background: "transparent",
      border: "1px solid #C2C2C2",
      width: "%"
    }
  }, "Set as default"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      "float": "right",
      background: "transparent",
      border: "1px solid #C2C2C2",
      width: "8%"
    }
  }, "Edit")))));
}
/* harmony default export */ __webpack_exports__["default"] = (settings);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiVGFiUGFuZSIsIlRhYnMiLCJzZXR0aW5ncyIsImNhbGxiYWNrIiwia2V5IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFaUM7QUFFM0QsSUFBTUEsT0FBTyxHQUFHQyx5Q0FBSSxDQUFDRCxPQUFPO0FBRTVCLFNBQVNFLFFBQVEsR0FBRztFQUVoQixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxDQUFJQyxHQUFHLEVBQUssQ0FDN0IsQ0FBQztFQUVFLE9BQ0ksbUJBQ0k7SUFBSyxLQUFLLEVBQUU7TUFBQ0MsT0FBTyxFQUFFLE1BQU07TUFBRUMsY0FBYyxFQUFFO0lBQWU7RUFBRSxHQUN2RTtJQUFJLFNBQVMsRUFBQywwQkFBMEI7SUFBQyxLQUFLLEVBQUU7TUFBQ0MsUUFBUSxFQUFFO0lBQU07RUFBRSxHQUFDLG1CQUFpQixDQUFLLEVBQzFGO0lBQUssS0FBSyxFQUFFO01BQUtDLEtBQUssRUFBRSxLQUFLO01BQUNDLFNBQVMsRUFBRTtJQUFNO0VBQUUsR0FDaEQsTUFBQywyQ0FBTTtJQUFDLFNBQVMsRUFBQyx1QkFBdUI7SUFBQyxLQUFLLEVBQUU7TUFBQ0MsVUFBVSxFQUFFLFNBQVM7TUFBRUMsTUFBTSxFQUFFLG1CQUFtQjtNQUFFSCxLQUFLLEVBQUU7SUFBSyxDQUFFO0lBQUMsUUFBUSxFQUFDO0VBQVEsR0FBQyxNQUV2SSxDQUFTLENBQ0osQ0FDRCxFQUNOLE1BQUMseUNBQUk7SUFBQyxnQkFBZ0IsRUFBQyxHQUFHO0lBQUMsUUFBUSxFQUFFTDtFQUFTLEdBQzdDLE1BQUMsT0FBTztJQUFDLEdBQUcsRUFBQyxpQkFBaUI7SUFBQyxHQUFHLEVBQUM7RUFBRyxHQUN0QjtJQUFJ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TztNQUFFRSxVQUFVLEVBQUUsYUFBYTtNQUFFQyxNQUFNLEVBQUUsbUJBQW1CO01BQUVILEtBQUssRUFBRTtJQUFJO0VBQUUsR0FBQyxNQUFJLENBQVMsQ0FDbkosQ0FDRCxDQUNoQixDQUNJO0FBRWQ7QUFFZU4sdUVBQVEsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXR0aW5ncy5lN2E1NDJjMzE3YjJmODU1Nzc5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IENhcmQsIFRhYnMsIEJ1dHRvbiwgQ2hlY2tib3gsIFN3aXRjaH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFRhYlBhbmUgPSBUYWJzLlRhYlBhbmU7XHJcblxyXG5mdW5jdGlvbiBzZXR0aW5ncygpIHtcclxuXHJcbiAgICBjb25zdCBjYWxsYmFjayA9IChrZXkpID0+IHtcclxuXHR9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQnIHN0eWxlPXt7Zm9udFNpemU6IFwiMzBweFwifX0+TG9yZW0gaXBzdW0gZG9sb3I8L2gxPlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3sgICAgd2lkdGg6IFwiMTIlXCIsbWFyZ2luVG9wOiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNDMkMyQzJcIiwgd2lkdGg6IFwiNjAlXCJ9fSBodG1sVHlwZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRTYXZlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIiBvbkNoYW5nZT17Y2FsbGJhY2t9PlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIkRldmljZSBTZXR0aW5nc1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQgZ3gtbXQtNCc+TG9yZW0gSXBzdW08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J2d4LW1iLTIgZ3gtbXQtMic+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L0NoZWNrYm94PjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J2d4LW1iLTInPlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZTwvQ2hlY2tib3g+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGRlZmF1bHRDaGVja2VkPlF1aXMgYXV0ZW0gdmVsIGV1bSBpdXJlPC9DaGVja2JveD48YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nZ3gtZm9udC13ZWlnaHQtc2VtaS1ib2xkIGd4LW10LTQnPkV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J2d4LW1iLTIgZ3gtbXQtMic+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L0NoZWNrYm94PjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J2d4LW1iLTInPlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZTwvQ2hlY2tib3g+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGRlZmF1bHRDaGVja2VkPlF1aXMgYXV0ZW0gdmVsIGV1bSBpdXJlPC9DaGVja2JveD48YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nZ3gtZm9udC13ZWlnaHQtc2VtaS1ib2xkIGd4LW10LTQnPkR1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPSdneC1tYi0yIGd4LW10LTInPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0PC9DaGVja2JveD48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPSdneC1tYi0yJz5TZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGU8L0NoZWNrYm94PjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBkZWZhdWx0Q2hlY2tlZD5RdWlzIGF1dGVtIHZlbCBldW0gaXVyZTwvQ2hlY2tib3g+PGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCBneC1tdC00Jz5sb3JlbSBJcHN1bTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBzaXplPVwic21hbGxcIiBkZWZhdWx0Q2hlY2tlZC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiUGF5bWVudCBTZXR0aW5nc1wiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQgZ3gtbXQtNCBneC1tYi0zJz5EZWZhdWx0IFBheW1lbnQgTWV0aG9kPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Zpc2EucG5nXCIgY2xhc3NOYW1lPSdneC1tci0zJy8+PHNwYW4+VmlzYSBlbmRpbmcgaW4gMTIzNDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgY2xhc3NOYW1lPVwiZ3gtbWItMCBkZXNpZ24tYnV0dG9uXCIgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIGJvcmRlcjogXCJub25lXCIsIHdpZHRoOiBcIjglXCIsIG1hcmdpbkxlZnQ6IFwiMTJweFwifX0+UmVtb3ZlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIiwgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNDMkMyQzJcIiwgd2lkdGg6IFwiOCVcIn19PkVkaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCBneC1tdC01IGd4LW1iLTMnPlNhdmVkIFBheW1lbnQgTWV0aG9kPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Zpc2EucG5nXCIgY2xhc3NOYW1lPSdneC1tci0zJy8+PHNwYW4+VmlzYSBlbmRpbmcgaW4gMTIzNDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgY2xhc3NOYW1lPVwiZ3gtbWItMCBkZXNpZ24tYnV0dG9uXCIgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIGJvcmRlcjogXCJub25lXCIsIHdpZHRoOiBcIjglXCIsIG1hcmdpbkxlZnQ6IFwiMTJweFwifX0+UmVtb3ZlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIiwgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNDMkMyQzJcIiwgd2lkdGg6IFwiJVwifX0+U2V0IGFzIGRlZmF1bHQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgY2xhc3NOYW1lPVwiZ3gtbWItMCBkZXNpZ24tYnV0dG9uXCIgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIGJvcmRlcjogXCIxcHggc29saWQgI0MyQzJDMlwiLCB3aWR0aDogXCI4JVwifX0+RWRpdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuXHRcdFx0PC9UYWJzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0dGluZ3M7Il0sInNvdXJjZVJvb3QiOiIifQ==