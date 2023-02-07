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
      "float": "right"
    }
  }, "edit"), __jsx("span", {
    style: {
      "float": "right"
    }
  }, "Remove")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiVGFiUGFuZSIsIlRhYnMiLCJzZXR0aW5ncyIsImNhbGxiYWNrIiwia2V5IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVpQztBQUUzRCxJQUFNQSxPQUFPLEdBQUdDLHlDQUFJLENBQUNELE9BQU87QUFFNUIsU0FBU0UsUUFBUSxHQUFHO0VBRWhCLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUlDLEdBQUcsRUFBSyxDQUM3QixDQUFDO0VBRUUsT0FDSSxtQkFDSTtJQUFLLEtBQUssRUFBRTtNQUFDQyxPQUFPLEVBQUUsTUFBTTtNQUFFQyxjQUFjLEVBQUU7SUFBZTtFQUFFLEdBQ3ZFO0lBQUksU0FBUyxFQUFDLDBCQUEwQjtJQUFDLEtBQUssRUFBRTtNQUFDQyxRQUFRLEVBQUU7SUFBTTtFQUFFLEdBQUMsbUJBQWlCLENBQUssRUFDMUY7SUFBSyxLQUFLLEVBQUU7TUFBS0MsS0FBSyxFQUFFLEtBQUs7TUFBQ0MsU0FBUyxFQUFFO0lBQU07RUFBRSxHQUNoRCxNQUFDLDJDQUFNO0lBQUMsU0FBUyxFQUFDLHVCQUF1QjtJQUFDLEtBQUssRUFBRTtNQUFDQyxVQUFVLEVBQUUsU0FBUztNQUFFQyxNQUFNLEVBQUUsbUJBQW1CO01BQUVILEtBQUssRUFBRTtJQUFLLENBQUU7SUFBQyxRQUFRLEVBQUM7RUFBUSxHQUFDLE1BRXZJLENBQVMsQ0FDSixDQUNELEVBQ04sTUFBQyx5Q0FBSTtJQUFDLGdCQUFnQixFQUFDLEdBQUc7SUFBQyxRQUFRLEVBQUVMO0VBQVMsR0FDN0MsTUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLGlCQUFpQjtJQUFDLEdBQUcsRUFBQztFQUFHLEdBQ3RCO0lBQUksU0FBUyxFQUFDO0VBQWtDLEdBQUMsYUFBVyxDQUFLLEVBQ2pFLE1BQUMsNkNBQVE7SUFBQyxTQUFTLEVBQUM7RUFBaUIsR0FBQyw0QkFBMEIsQ0FBVyxtQkFBTSxFQUNqRixNQUFDLDZDQUFRO0lBQUMsU0FBUyxFQUFDO0VBQVMsR0FBQywwQkFBd0IsQ0FBVyxtQkFBTSxFQUN2RSxNQUFDLDZDQUFRO0lBQUMsY0FBYztFQUFBLEdBQUMseUJBQXVCLENBQVcsbUJBQU0sRUFFakU7SUFBSSxTQUFTLEVBQUM7RUFBa0MsR0FBQyxnREFBOEMsQ0FBSyxFQUNwRyxNQUFDLDZDQUFRO0lBQUMsU0FBUyxFQUFDO0VBQWlCLEdBQUMsNEJBQTBCLENBQVcsbUJBQU0sRUFDakYsTUFBQyw2Q0FBUTtJQUFDLFNBQVMsRUFBQztFQUFTLEdBQUMsMEJBQXdCLENBQVcsbUJBQU0sRUFDdkUsTUFBQyw2Q0FBUTtJQUFDLGNBQWM7RUFBQSxHQUFDLHlCQUF1QixDQUFXLG1CQUFNLEVBRWpFO0lBQUksU0FBUyxFQUFDO0VBQWtDLEdBQUMsd0NBQXNDLENBQUssRUFDNUYsTUFBQyw2Q0FBUTtJQUFDLFNBQVMsRUFBQztFQUFpQixHQUFDLDRCQUEwQixDQUFXLG1CQUFNLEVBQ2pGLE1BQUMsNkNBQVE7SUFBQyxTQUFTLEVBQUM7RUFBUyxHQUFDLDBCQUF3QixDQUFXLG1CQUFNLEVBQ3ZFLE1BQUMsNkNBQVE7SUFBQyxjQUFjO0VBQUEsR0FBQyx5QkFBdUIsQ0FBVyxtQkFBTSxFQUVqRTtJQUFJLFNBQVMsRUFBQztFQUFrQyxHQUFDLGFBQVcsQ0FBSyxFQUNqRSxNQUFDLDJDQUFNO0lBQUMsSUFBSSxFQUFDLE9BQU87SUFBQyxjQUFjO0VBQUEsRUFBRSxDQUMvQixFQUN0QixNQUFDLE9BQU87SUFBQyxHQUFHLEVBQUMsa0JBQWtCO0lBQUMsR0FBRyxFQUFDO0VBQUcsR0FDdkI7SUFBSSxTQUFTLEVBQUM7RUFBMEMsR0FBQyx3QkFBc0IsQ0FBSyxFQUNwRixNQUFDLHlDQUFJLFFBQ0Q7SUFBSyxHQUFHLEVBQUMsa0JBQWtCO0lBQUMsU0FBUyxFQUFDO0VBQVMsRUFBRSxzQkFBTSxxQkFBbUIsQ0FBTyxFQUNqRixNQUFDLDJDQUFNO0lBQUUsU0FBUyxFQUFDLHVCQUF1QjtJQUFDLEtBQUssRUFBRTtNQUFDLFNBQU87SUFBTztFQUFFLEdBQUMsTUFBSSxDQUFTLEVBQ2pGO0lBQU0sS0FBSyxFQUFFO01BQUMsU0FBTztJQUFPO0VBQUUsR0FBQyxRQUFNLENBQU8sQ0FDekMsQ0FDRCxDQUNoQixDQUNJO0FBRWQ7QUFFZUQsdUVBQVEsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXR0aW5ncy4yZTRkYWRjYmI4YjY5NDI5ODlkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IENhcmQsIFRhYnMsIEJ1dHRvbiwgQ2hlY2tib3gsIFN3aXRjaH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFRhYlBhbmUgPSBUYWJzLlRhYlBhbmU7XHJcblxyXG5mdW5jdGlvbiBzZXR0aW5ncygpIHtcclxuXHJcbiAgICBjb25zdCBjYWxsYmFjayA9IChrZXkpID0+IHtcclxuXHR9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQnIHN0eWxlPXt7Zm9udFNpemU6IFwiMzBweFwifX0+TG9yZW0gaXBzdW0gZG9sb3I8L2gxPlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3sgICAgd2lkdGg6IFwiMTIlXCIsbWFyZ2luVG9wOiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNDMkMyQzJcIiwgd2lkdGg6IFwiNjAlXCJ9fSBodG1sVHlwZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRTYXZlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIiBvbkNoYW5nZT17Y2FsbGJhY2t9PlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIkRldmljZSBTZXR0aW5nc1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQgZ3gtbXQtNCc+TG9yZW0gSXBzdW08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J2d4LW1iLTIgZ3gtbXQtMic+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L0NoZWNrYm94PjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J2d4LW1iLTInPlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZTwvQ2hlY2tib3g+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGRlZmF1bHRDaGVja2VkPlF1aXMgYXV0ZW0gdmVsIGV1bSBpdXJlPC9DaGVja2JveD48YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nZ3gtZm9udC13ZWlnaHQtc2VtaS1ib2xkIGd4LW10LTQnPkV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J2d4LW1iLTIgZ3gtbXQtMic+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L0NoZWNrYm94PjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J2d4LW1iLTInPlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZTwvQ2hlY2tib3g+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGRlZmF1bHRDaGVja2VkPlF1aXMgYXV0ZW0gdmVsIGV1bSBpdXJlPC9DaGVja2JveD48YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nZ3gtZm9udC13ZWlnaHQtc2VtaS1ib2xkIGd4LW10LTQnPkR1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPSdneC1tYi0yIGd4LW10LTInPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0PC9DaGVja2JveD48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPSdneC1tYi0yJz5TZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGU8L0NoZWNrYm94PjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBkZWZhdWx0Q2hlY2tlZD5RdWlzIGF1dGVtIHZlbCBldW0gaXVyZTwvQ2hlY2tib3g+PGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCBneC1tdC00Jz5sb3JlbSBJcHN1bTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBzaXplPVwic21hbGxcIiBkZWZhdWx0Q2hlY2tlZC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiUGF5bWVudCBTZXR0aW5nc1wiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQgZ3gtbXQtNCBneC1tYi0zJz5EZWZhdWx0IFBheW1lbnQgTWV0aG9kPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Zpc2EucG5nXCIgY2xhc3NOYW1lPSdneC1tci0zJy8+PHNwYW4+VmlzYSBlbmRpbmcgaW4gMTIzNDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgY2xhc3NOYW1lPVwiZ3gtbWItMCBkZXNpZ24tYnV0dG9uXCIgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+ZWRpdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT5SZW1vdmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG5cdFx0XHQ8L1RhYnM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXR0aW5nczsiXSwic291cmNlUm9vdCI6IiJ9