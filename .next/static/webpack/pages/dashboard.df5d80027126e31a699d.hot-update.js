webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./app/components/CircularProgress/index.js":
false,

/***/ "./app/components/Metrics/index.js":
/*!*****************************************!*\
  !*** ./app/components/Metrics/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Metrics = function Metrics(_ref) {
  var title = _ref.title,
    styleName = _ref.styleName,
    children = _ref.children;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: title,
    className: "gx-card-metrics ".concat(styleName)
  }, children);
};
_c = Metrics;
/* harmony default export */ __webpack_exports__["default"] = (Metrics);
Metrics.defaultProps = {
  styleName: ""
};
Metrics.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  styleName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
var _c;
$RefreshReg$(_c, "Metrics");

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

/***/ }),

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/cookie/index.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/react-cookie/es6/Cookies.js":
false,

/***/ "./node_modules/react-cookie/es6/CookiesContext.js":
false,

/***/ "./node_modules/react-cookie/es6/CookiesProvider.js":
false,

/***/ "./node_modules/react-cookie/es6/index.js":
false,

/***/ "./node_modules/react-cookie/es6/types.js":
false,

/***/ "./node_modules/react-cookie/es6/useCookies.js":
false,

/***/ "./node_modules/react-cookie/es6/utils.js":
false,

/***/ "./node_modules/react-cookie/es6/withCookies.js":
false,

/***/ "./node_modules/universal-cookie/es6/Cookies.js":
false,

/***/ "./node_modules/universal-cookie/es6/index.js":
false,

/***/ "./node_modules/universal-cookie/es6/utils.js":
false,

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
false,

/***/ "./node_modules/use-subscription/index.js":
false,

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _app_components_Metrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/components/Metrics */ "./app/components/Metrics/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var TabPane = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"].TabPane;
var Dashboard = function Dashboard() {
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
      width: "33%",
      marginTop: "20px"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      background: "#fff",
      border: "1px solid #C2C2C2",
      width: "38%"
    },
    htmlType: "button"
  }, "+ Lorem ipsum"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      background: "#D3F36B",
      border: "1px solid #C2C2C2",
      width: "38%"
    },
    htmlType: "button"
  }, "+ Lorem ipsum"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "1",
    onChange: callback
  }, __jsx(TabPane, {
    tab: "Lorem",
    key: "1"
  }), __jsx(TabPane, {
    tab: "Ipsum",
    key: "2"
  }), __jsx(TabPane, {
    tab: "Dolor",
    key: "3"
  })), __jsx("div", {
    className: "search-bar"
  }, __jsx("i", {
    className: "icon icon-search gx-mr-2"
  }), __jsx("span", {
    className: "gx-text-light"
  }, "Search")));
};
_c = Dashboard;
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);
var _c;
$RefreshReg$(_c, "Dashboard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
false,

/***/ "./pages/signin.js":
false,

/***/ "./util/Api.js":
false,

/***/ "./util/asyncComponent.js":
false,

/***/ "./util/use-auth.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTWV0cmljcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1ldHJpY3MiLCJ0aXRsZSIsInN0eWxlTmFtZSIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJUYWJQYW5lIiwiVGFicyIsIkRhc2hib2FyZCIsImNhbGxiYWNrIiwia2V5IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0E7QUFDUztBQUduQyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBTyxPQUFxQztFQUFBLElBQWhDQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsU0FBUyxRQUFUQSxTQUFTO0lBQUVDLFFBQVEsUUFBUkEsUUFBUTtFQUMxQyxPQUNFLE1BQUMseUNBQUk7SUFBQyxLQUFLLEVBQUVGLEtBQU07SUFBQyxTQUFTLDRCQUFxQkMsU0FBUztFQUFHLEdBQzNEQyxRQUFRLENBQ0o7QUFFWCxDQUFDO0FBQUMsS0FOSUgsT0FBTztBQVFFQSxzRUFBTyxFQUFDO0FBQ3ZCQSxPQUFPLENBQUNJLFlBQVksR0FBRztFQUNyQkYsU0FBUyxFQUFFO0FBQ2IsQ0FBQztBQUVERixPQUFPLENBQUNLLFNBQVMsR0FBRztFQUNsQkosS0FBSyxFQUFFSyxpREFBUyxDQUFDQyxNQUFNLENBQUNDLFVBQVU7RUFDbENOLFNBQVMsRUFBRUksaURBQVMsQ0FBQ0MsTUFBTTtFQUMzQkosUUFBUSxFQUFFRyxpREFBUyxDQUFDRyxJQUFJLENBQUNEO0FBQzNCLENBQUM7QUFBQztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QndCO0FBQ2M7QUFDbUI7QUFFM0QsSUFBTUUsT0FBTyxHQUFHQyx5Q0FBSSxDQUFDRCxPQUFPO0FBRTVCLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFTLEdBQVM7RUFDdkIsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVEsQ0FBSUMsR0FBRyxFQUFLLENBQzFCLENBQUM7RUFFRCxPQUNDLG1CQUNDO0lBQUssS0FBSyxFQUFFO01BQUNDLE9BQU8sRUFBRSxNQUFNO01BQUVDLGNBQWMsRUFBRTtJQUFlO0VBQUUsR0FDOUQ7SUFBSSxTQUFTLEVBQUMsMEJBQTBCO0lBQUMsS0FBSyxFQUFFO01BQUNDLFFBQVEsRUFBRTtJQUFNO0VBQUUsR0FBQyxtQkFBaUIsQ0FBSyxFQUMxRjtJQUFLLEtBQUssRUFBRTtNQUFLQyxLQUFLLEVBQUUsS0FBSztNQUFDQyxTQUFTLEVBQUU7SUFBTTtFQUFFLEdBQ2hELE1BQUMsMkNBQU07SUFBQyxTQUFTLEVBQUMsdUJBQXVCO0lBQUMsS0FBSyxFQUFFO01BQUNDLFVBQVUsRUFBRSxNQUFNO01BQUVDLE1BQU0sRUFBRSxtQkFBbUI7TUFBRUgsS0FBSyxFQUFFO0lBQUssQ0FBRTtJQUFDLFFBQVEsRUFBQztFQUFRLEdBQUMsZUFFcEksQ0FBUyxFQUNULE1BQUMsMkNBQU07SUFBQyxTQUFTLEVBQUMsdUJBQXVCO0lBQUMsS0FBSyxFQUFFO01BQUNFLFVBQVUsRUFBRSxTQUFTO01BQUVDLE1BQU0sRUFBRSxtQkFBbUI7TUFBRUgsS0FBSyxFQUFFO0lBQUssQ0FBRTtJQUFDLFFBQVEsRUFBQztFQUFRLEdBQUMsZUFFdkksQ0FBUyxDQUNKLENBQ0QsRUFDTixNQUFDLHlDQUFJO0lBQUMsZ0JBQWdCLEVBQUMsR0FBRztJQUFDLFFBQVEsRUFBRUw7RUFBUyxHQUM3QyxNQUFDLE9BQU87SUFBQyxHQUFHLEVBQUMsT0FBTztJQUFDLEdBQUcsRUFBQztFQUFHLEVBQVcsRUFDdkMsTUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFBQyxHQUFHLEVBQUM7RUFBRyxFQUFXLEVBQ3ZDLE1BQUMsT0FBTztJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDO0VBQUcsRUFBVyxDQUNqQyxFQUNQO0lBQUssU0FBUyxFQUFDO0VBQVksR0FDMUI7SUFBRyxTQUFTLEVBQUM7RUFBMEIsRUFBRTtJQUFNLFNBQVMsRUFBQztFQUFlLEdBQUMsUUFBTSxDQUFPLENBQ2pGLENBQ0Q7QUFFUixDQUFDO0FBQUMsS0EzQklELFNBQVM7QUE2QkFBLHdFQUFTLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5kZjVkODAwMjcxMjZlMzFhNjk5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcblxyXG5jb25zdCBNZXRyaWNzID0gKHt0aXRsZSwgc3R5bGVOYW1lLCBjaGlsZHJlbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgdGl0bGU9e3RpdGxlfSBjbGFzc05hbWU9e2BneC1jYXJkLW1ldHJpY3MgJHtzdHlsZU5hbWV9YH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FyZD5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXRyaWNzO1xyXG5NZXRyaWNzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdHlsZU5hbWU6IFwiXCJcclxufTtcclxuXHJcbk1ldHJpY3MucHJvcFR5cGVzID0ge1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3R5bGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q2FyZCwgVGFicywgQnV0dG9ufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgVHJhZmZpY1JhaXNlQ2FyZCBmcm9tIFwiLi4vLi4vYXBwL2NvbXBvbmVudHMvTWV0cmljc1wiXHJcblxyXG5jb25zdCBUYWJQYW5lID0gVGFicy5UYWJQYW5lO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG5cdGNvbnN0IGNhbGxiYWNrID0gKGtleSkgPT4ge1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIn19PlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9J2d4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCcgc3R5bGU9e3tmb250U2l6ZTogXCIzMHB4XCJ9fT5Mb3JlbSBpcHN1bSBkb2xvcjwvaDE+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17eyAgICB3aWR0aDogXCIzMyVcIixtYXJnaW5Ub3A6IFwiMjBweFwifX0+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjZmZmXCIsIGJvcmRlcjogXCIxcHggc29saWQgI0MyQzJDMlwiLCB3aWR0aDogXCIzOCVcIn19IGh0bWxUeXBlPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdCsgTG9yZW0gaXBzdW1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNDMkMyQzJcIiwgd2lkdGg6IFwiMzglXCJ9fSBodG1sVHlwZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQrIExvcmVtIGlwc3VtXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIiBvbkNoYW5nZT17Y2FsbGJhY2t9PlxyXG5cdFx0XHRcdDxUYWJQYW5lIHRhYj1cIkxvcmVtXCIga2V5PVwiMVwiPjwvVGFiUGFuZT5cclxuXHRcdFx0XHQ8VGFiUGFuZSB0YWI9XCJJcHN1bVwiIGtleT1cIjJcIj48L1RhYlBhbmU+XHJcblx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiRG9sb3JcIiBrZXk9XCIzXCI+PC9UYWJQYW5lPlxyXG5cdFx0XHQ8L1RhYnM+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gtYmFyJz5cclxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2VhcmNoIGd4LW1yLTJcIi8+PHNwYW4gY2xhc3NOYW1lPSdneC10ZXh0LWxpZ2h0Jz5TZWFyY2g8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=