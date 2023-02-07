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
      width: "8%"
    }
  }, "edit"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      "float": "right",
      background: "transparent",
      border: "1px solid #C2C2C2",
      width: "8%"
    }
  }, "edit")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiVGFiUGFuZSIsIlRhYnMiLCJzZXR0aW5ncyIsImNhbGxiYWNrIiwia2V5IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVpQztBQUUzRCxJQUFNQSxPQUFPLEdBQUdDLHlDQUFJLENBQUNELE9BQU87QUFFNUIsU0FBU0UsUUFBUSxHQUFHO0VBRWhCLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUlDLEdBQUcsRUFBSyxDQUM3QixDQUFDO0VBRUUsT0FDSSxtQkFDSTtJQUFLLEtBQUssRUFBRTtNQUFDQyxPQUFPLEVBQUUsTUFBTTtNQUFFQyxjQUFjLEVBQUU7SUFBZTtFQUFFLEdBQ3ZFO0lBQUksU0FBUyxFQUFDLDBCQUEwQjtJQUFDLEtBQUssRUFBRTtNQUFDQyxRQUFRLEVBQUU7SUFBTTtFQUFFLEdBQUMsbUJBQWlCLENBQUssRUFDMUY7SUFBSyxLQUFLLEVBQUU7TUFBS0MsS0FBSyxFQUFFLEtBQUs7TUFBQ0MsU0FBUyxFQUFFO0lBQU07RUFBRSxHQUNoRCxNQUFDLDJDQUFNO0lBQUMsU0FBUyxFQUFDLHVCQUF1QjtJQUFDLEtBQUssRUFBRTtNQUFDQyxVQUFVLEVBQUUsU0FBUztNQUFFQyxNQUFNLEVBQUUsbUJBQW1CO01BQUVILEtBQUssRUFBRTtJQUFLLENBQUU7SUFBQyxRQUFRLEVBQUM7RUFBUSxHQUFDLE1BRXZJLENBQVMsQ0FDSixDQUNELEVBQ04sTUFBQyx5Q0FBSTtJQUFDLGdCQUFnQixFQUFDLEdBQUc7SUFBQyxRQUFRLEVBQUVMO0VBQVMsR0FDN0MsTUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLGlCQUFpQjtJQUFDLEdBQUcsRUFBQztFQUFHLEdBQ3RCO0lBQUksU0FBUyxFQUFDO0VBQWtDLEdBQUMsYUFBVyxDQUFLLEVBQ2pFLE1BQUMsNkNBQVE7SUFBQyxTQUFTLEVBQUM7RUFBaUIsR0FBQyw0QkFBMEIsQ0FBVyxtQkFBTSxFQUNqRixNQUFDLDZDQUFRO0lBQUMsU0FBUyxFQUFDO0VBQVMsR0FBQywwQkFBd0IsQ0FBVyxtQkFBTSxFQUN2RSxNQUFDLDZDQUFRO0lBQUMsY0FBYztFQUFBLEdBQUMseUJBQXVCLENBQVcsbUJBQU0sRUFFakU7SUFBSSxTQUFTLEVBQUM7RUFBa0MsR0FBQyxnREFBOEMsQ0FBSyxFQUNwRyxNQUFDLDZDQUFRO0lBQUMsU0FBUyxFQUFDO0VBQWlCLEdBQUMsNEJBQTBCLENBQVcsbUJBQU0sRUFDakYsTUFBQyw2Q0FBUTtJQUFDLFNBQVMsRUFBQztFQUFTLEdBQUMsMEJBQXdCLENBQVcsbUJBQU0sRUFDdkUsTUFBQyw2Q0FBUTtJQUFDLGNBQWM7RUFBQSxHQUFDLHlCQUF1QixDQUFXLG1CQUFNLEVBRWpFO0lBQUksU0FBUyxFQUFDO0VBQWtDLEdBQUMsd0NBQXNDLENBQUssRUFDNUYsTUFBQyw2Q0FBUTtJQUFDLFNBQVMsRUFBQztFQUFpQixHQUFDLDRCQUEwQixDQUFXLG1CQUFNLEVBQ2pGLE1BQUMsNkNBQVE7SUFBQyxTQUFTLEVBQUM7RUFBUyxHQUFDLDBCQUF3QixDQUFXLG1CQUFNLEVBQ3ZFLE1BQUMsNkNBQVE7SUFBQyxjQUFjO0VBQUEsR0FBQyx5QkFBdUIsQ0FBVyxtQkFBTSxFQUVqRTtJQUFJLFNBQVMsRUFBQztFQUFrQyxHQUFDLGFBQVcsQ0FBSyxFQUNqRSxNQUFDLDJDQUFNO0lBQUMsSUFBSSxFQUFDLE9BQU87SUFBQyxjQUFjO0VBQUEsRUFBRSxDQUMvQixFQUN0QixNQUFDLE9BQU87SUFBQyxHQUFHLEVBQUMsa0JBQWtCO0lBQUMsR0FBRyxFQUFDO0VBQUcsR0FDdkI7SUFBSSxTQUFTLEVBQUM7RUFBMEMsR0FBQyx3QkFBc0IsQ0FBSyxFQUNwRixNQUFDLHlDQUFJLFFBQ0Q7SUFBSyxHQUFHLEVBQUMsa0JBQWtCO0lBQUMsU0FBUyxFQUFDO0VBQVMsRUFBRSxzQkFBTSxxQkFBbUIsQ0FBTyxFQUNqRixNQUFDLDJDQUFNO0lBQUUsU0FBUyxFQUFDLHVCQUF1QjtJQUFDLEtBQUssRUFBRTtNQUFDLFNBQU8sT0FBTztNQUFFTyxVQUFVLEVBQUUsYUFBYTtNQUFFQyxNQUFNLEVBQUUsTUFBTTtNQUFFSCxLQUFLLEVBQUU7SUFBSTtFQUFFLEdBQUMsTUFBSSxDQUFTLEVBQ3pJLE1BQUMsMkNBQU07SUFBRSxTQUFTLEVBQUMsdUJBQXVCO0lBQUMsS0FBSyxFQUFFO01BQUMsU0FBTyxPQUFPO01BQUVFLFVBQVUsRUFBRSxhQUFhO01BQUVDLE1BQU0sRUFBRSxtQkFBbUI7TUFBRUgsS0FBSyxFQUFFO0lBQUk7RUFBRSxHQUFDLE1BQUksQ0FBUyxDQUNuSixDQUNELENBQ2hCLENBQ0k7QUFFZDtBQUVlTix1RUFBUSxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzLmUwZWZlNjNhNzU1M2E5OGY4MTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ2FyZCwgVGFicywgQnV0dG9uLCBDaGVja2JveCwgU3dpdGNofSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgVGFiUGFuZSA9IFRhYnMuVGFiUGFuZTtcclxuXHJcbmZ1bmN0aW9uIHNldHRpbmdzKCkge1xyXG5cclxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGtleSkgPT4ge1xyXG5cdH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIn19PlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCcgc3R5bGU9e3tmb250U2l6ZTogXCIzMHB4XCJ9fT5Mb3JlbSBpcHN1bSBkb2xvcjwvaDE+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17eyAgICB3aWR0aDogXCIxMiVcIixtYXJnaW5Ub3A6IFwiMjBweFwifX0+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjRDNGMzZCXCIsIGJvcmRlcjogXCIxcHggc29saWQgI0MyQzJDMlwiLCB3aWR0aDogXCI2MCVcIn19IGh0bWxUeXBlPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdFNhdmVcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiIG9uQ2hhbmdlPXtjYWxsYmFja30+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiRGV2aWNlIFNldHRpbmdzXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCBneC1tdC00Jz5Mb3JlbSBJcHN1bTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT0nZ3gtbWItMiBneC1tdC0yJz5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldDwvQ2hlY2tib3g+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT0nZ3gtbWItMic+U2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlPC9DaGVja2JveD48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggZGVmYXVsdENoZWNrZWQ+UXVpcyBhdXRlbSB2ZWwgZXVtIGl1cmU8L0NoZWNrYm94PjxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQgZ3gtbXQtNCc+RXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT0nZ3gtbWItMiBneC1tdC0yJz5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldDwvQ2hlY2tib3g+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT0nZ3gtbWItMic+U2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlPC9DaGVja2JveD48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggZGVmYXVsdENoZWNrZWQ+UXVpcyBhdXRlbSB2ZWwgZXVtIGl1cmU8L0NoZWNrYm94PjxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQgZ3gtbXQtNCc+RHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J2d4LW1iLTIgZ3gtbXQtMic+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L0NoZWNrYm94PjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J2d4LW1iLTInPlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZTwvQ2hlY2tib3g+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGRlZmF1bHRDaGVja2VkPlF1aXMgYXV0ZW0gdmVsIGV1bSBpdXJlPC9DaGVja2JveD48YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nZ3gtZm9udC13ZWlnaHQtc2VtaS1ib2xkIGd4LW10LTQnPmxvcmVtIElwc3VtPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIHNpemU9XCJzbWFsbFwiIGRlZmF1bHRDaGVja2VkLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJQYXltZW50IFNldHRpbmdzXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCBneC1tdC00IGd4LW1iLTMnPkRlZmF1bHQgUGF5bWVudCBNZXRob2Q8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdmlzYS5wbmdcIiBjbGFzc05hbWU9J2d4LW1yLTMnLz48c3Bhbj5WaXNhIGVuZGluZyBpbiAxMjM0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCIsIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgYm9yZGVyOiBcIm5vbmVcIiwgd2lkdGg6IFwiOCVcIn19PmVkaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgY2xhc3NOYW1lPVwiZ3gtbWItMCBkZXNpZ24tYnV0dG9uXCIgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIGJvcmRlcjogXCIxcHggc29saWQgI0MyQzJDMlwiLCB3aWR0aDogXCI4JVwifX0+ZWRpdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuXHRcdFx0PC9UYWJzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0dGluZ3M7Il0sInNvdXJjZVJvb3QiOiIifQ==