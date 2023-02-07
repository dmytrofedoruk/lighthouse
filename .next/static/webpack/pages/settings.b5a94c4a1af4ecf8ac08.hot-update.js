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
  }, __jsx("h3", {
    className: "gx-font-weight-semi-bold gx-mt-4"
  }, "Default Payment Method"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: title
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiVGFiUGFuZSIsIlRhYnMiLCJzZXR0aW5ncyIsImNhbGxiYWNrIiwia2V5IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRWlDO0FBRTNELElBQU1BLE9BQU8sR0FBR0MseUNBQUksQ0FBQ0QsT0FBTztBQUU1QixTQUFTRSxRQUFRLEdBQUc7RUFFaEIsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVEsQ0FBSUMsR0FBRyxFQUFLLENBQzdCLENBQUM7RUFFRSxPQUNJLG1CQUNJO0lBQUssS0FBSyxFQUFFO01BQUNDLE9BQU8sRUFBRSxNQUFNO01BQUVDLGNBQWMsRUFBRTtJQUFlO0VBQUUsR0FDdkU7SUFBSSxTQUFTLEVBQUMsMEJBQTBCO0lBQUMsS0FBSyxFQUFFO01BQUNDLFFBQVEsRUFBRTtJQUFNO0VBQUUsR0FBQyxtQkFBaUIsQ0FBSyxFQUMxRjtJQUFLLEtBQUssRUFBRTtNQUFLQyxLQUFLLEVBQUUsS0FBSztNQUFDQyxTQUFTLEVBQUU7SUFBTTtFQUFFLEdBQ2hELE1BQUMsMkNBQU07SUFBQyxTQUFTLEVBQUMsdUJBQXVCO0lBQUMsS0FBSyxFQUFFO01BQUNDLFVBQVUsRUFBRSxTQUFTO01BQUVDLE1BQU0sRUFBRSxtQkFBbUI7TUFBRUgsS0FBSyxFQUFFO0lBQUssQ0FBRTtJQUFDLFFBQVEsRUFBQztFQUFRLEdBQUMsTUFFdkksQ0FBUyxDQUNKLENBQ0QsRUFDTixNQUFDLHlDQUFJO0lBQUMsZ0JBQWdCLEVBQUMsR0FBRztJQUFDLFFBQVEsRUFBRUw7RUFBUyxHQUM3QyxNQUFDLE9BQU87SUFBQyxHQUFHLEVBQUMsaUJBQWlCO0lBQUMsR0FBRyxFQUFDO0VBQUcsR0FDdEI7SUFBSSxTQUFTLEVBQUM7RUFBa0MsR0FBQyxhQUFXLENBQUssRUFDakUsTUFBQyw2Q0FBUTtJQUFDLFNBQVMsRUFBQztFQUFpQixHQUFDLDRCQUEwQixDQUFXLG1CQUFNLEVBQ2pGLE1BQUMsNkNBQVE7SUFBQyxTQUFTLEVBQUM7RUFBUyxHQUFDLDBCQUF3QixDQUFXLG1CQUFNLEVBQ3ZFLE1BQUMsNkNBQVE7SUFBQyxjQUFjO0VBQUEsR0FBQyx5QkFBdUIsQ0FBVyxtQkFBTSxFQUVqRTtJQUFJLFNBQVMsRUFBQztFQUFrQyxHQUFDLGdEQUE4QyxDQUFLLEVBQ3BHLE1BQUMsNkNBQVE7SUFBQyxTQUFTLEVBQUM7RUFBaUIsR0FBQyw0QkFBMEIsQ0FBVyxtQkFBTSxFQUNqRixNQUFDLDZDQUFRO0lBQUMsU0FBUyxFQUFDO0VBQVMsR0FBQywwQkFBd0IsQ0FBVyxtQkFBTSxFQUN2RSxNQUFDLDZDQUFRO0lBQUMsY0FBYztFQUFBLEdBQUMseUJBQXVCLENBQVcsbUJBQU0sRUFFakU7SUFBSSxTQUFTLEVBQUM7RUFBa0MsR0FBQyx3Q0FBc0MsQ0FBSyxFQUM1RixNQUFDLDZDQUFRO0lBQUMsU0FBUyxFQUFDO0VBQWlCLEdBQUMsNEJBQTBCLENBQVcsbUJBQU0sRUFDakYsTUFBQyw2Q0FBUTtJQUFDLFNBQVMsRUFBQztFQUFTLEdBQUMsMEJBQXdCLENBQVcsbUJBQU0sRUFDdkUsTUFBQyw2Q0FBUTtJQUFDLGNBQWM7RUFBQSxHQUFDLHlCQUF1QixDQUFXLG1CQUFNLEVBRWpFO0lBQUksU0FBUyxFQUFDO0VBQWtDLEdBQUMsYUFBVyxDQUFLLEVBQ2pFLE1BQUMsMkNBQU07SUFBQyxJQUFJLEVBQUMsT0FBTztJQUFDLGNBQWM7RUFBQSxFQUFFLENBQy9CLEVBQ3RCLE1BQUMsT0FBTztJQUFDLEdBQUcsRUFBQyxrQkFBa0I7SUFBQyxHQUFHLEVBQUM7RUFBRyxHQUN2QjtJQUFJLFNBQVMsRUFBQztFQUFrQyxHQUFDLHdCQUFzQixDQUFLLEVBQzVFLE1BQUMseUNBQUk7SUFBRSxLQUFLLEVBQUVTO0VBQU0sRUFFYixDQUNELENBQ2hCLENBQ0k7QUFFZDtBQUVlVix1RUFBUSxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzLmI1YTk0YzRhMWFmNGVjZjhhYzA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ2FyZCwgVGFicywgQnV0dG9uLCBDaGVja2JveCwgU3dpdGNofSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgVGFiUGFuZSA9IFRhYnMuVGFiUGFuZTtcclxuXHJcbmZ1bmN0aW9uIHNldHRpbmdzKCkge1xyXG5cclxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGtleSkgPT4ge1xyXG5cdH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIn19PlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCcgc3R5bGU9e3tmb250U2l6ZTogXCIzMHB4XCJ9fT5Mb3JlbSBpcHN1bSBkb2xvcjwvaDE+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17eyAgICB3aWR0aDogXCIxMiVcIixtYXJnaW5Ub3A6IFwiMjBweFwifX0+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjRDNGMzZCXCIsIGJvcmRlcjogXCIxcHggc29saWQgI0MyQzJDMlwiLCB3aWR0aDogXCI2MCVcIn19IGh0bWxUeXBlPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdFNhdmVcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiIG9uQ2hhbmdlPXtjYWxsYmFja30+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiRGV2aWNlIFNldHRpbmdzXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCBneC1tdC00Jz5Mb3JlbSBJcHN1bTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT0nZ3gtbWItMiBneC1tdC0yJz5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldDwvQ2hlY2tib3g+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT0nZ3gtbWItMic+U2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlPC9DaGVja2JveD48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggZGVmYXVsdENoZWNrZWQ+UXVpcyBhdXRlbSB2ZWwgZXVtIGl1cmU8L0NoZWNrYm94PjxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQgZ3gtbXQtNCc+RXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT0nZ3gtbWItMiBneC1tdC0yJz5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldDwvQ2hlY2tib3g+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT0nZ3gtbWItMic+U2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlPC9DaGVja2JveD48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggZGVmYXVsdENoZWNrZWQ+UXVpcyBhdXRlbSB2ZWwgZXVtIGl1cmU8L0NoZWNrYm94PjxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdneC1mb250LXdlaWdodC1zZW1pLWJvbGQgZ3gtbXQtNCc+RHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J2d4LW1iLTIgZ3gtbXQtMic+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L0NoZWNrYm94PjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J2d4LW1iLTInPlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZTwvQ2hlY2tib3g+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGRlZmF1bHRDaGVja2VkPlF1aXMgYXV0ZW0gdmVsIGV1bSBpdXJlPC9DaGVja2JveD48YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nZ3gtZm9udC13ZWlnaHQtc2VtaS1ib2xkIGd4LW10LTQnPmxvcmVtIElwc3VtPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIHNpemU9XCJzbWFsbFwiIGRlZmF1bHRDaGVja2VkLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJQYXltZW50IFNldHRpbmdzXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCBneC1tdC00Jz5EZWZhdWx0IFBheW1lbnQgTWV0aG9kPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCAgdGl0bGU9e3RpdGxlfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG5cdFx0XHQ8L1RhYnM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXR0aW5nczsiXSwic291cmNlUm9vdCI6IiJ9