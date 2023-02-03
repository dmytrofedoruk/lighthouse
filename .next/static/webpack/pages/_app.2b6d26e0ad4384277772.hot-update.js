webpackHotUpdate_N_E("pages/_app",{

/***/ "./app/core/Layout/index.js":
/*!**********************************!*\
  !*** ./app/core/Layout/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Topbar_HorizontalDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Topbar/HorizontalDefault */ "./app/core/Topbar/HorizontalDefault/index.js");
/* harmony import */ var _Topbar_HorizontalDark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Topbar/HorizontalDark */ "./app/core/Topbar/HorizontalDark/index.js");
/* harmony import */ var _Topbar_InsideHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Topbar/InsideHeader */ "./app/core/Topbar/InsideHeader/index.js");
/* harmony import */ var _Topbar_AboveHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Topbar/AboveHeader */ "./app/core/Topbar/AboveHeader/index.js");
/* harmony import */ var _Topbar_BelowHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Topbar/BelowHeader */ "./app/core/Topbar/BelowHeader/index.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Topbar */ "./app/core/Topbar/index.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Topbar/NoHeaderNotification */ "./app/core/Topbar/NoHeaderNotification/index.js");
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/use-auth */ "./util/use-auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_CircularProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/CircularProgress */ "./app/components/CircularProgress/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _AppSidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AppSidebar */ "./app/core/Layout/AppSidebar.js");
var _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var getContainerClass = function getContainerClass(navStyle) {
  switch (navStyle) {
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DARK_HORIZONTAL"]:
      return "gx-container-wrap";
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
      return "gx-container-wrap";
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
      return "gx-container-wrap";
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_BELOW_HEADER"]:
      return "gx-container-wrap";
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_ABOVE_HEADER"]:
      return "gx-container-wrap";
    default:
      return '';
  }
};
var getNavStyles = function getNavStyles(navStyle) {
  switch (navStyle) {
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
      return __jsx(_Topbar_HorizontalDefault__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DARK_HORIZONTAL"]:
      return __jsx(_Topbar_HorizontalDark__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
      return __jsx(_Topbar_InsideHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_ABOVE_HEADER"]:
      return __jsx(_Topbar_AboveHeader__WEBPACK_IMPORTED_MODULE_6__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_BELOW_HEADER"]:
      return __jsx(_Topbar_BelowHeader__WEBPACK_IMPORTED_MODULE_7__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_FIXED"]:
      return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DRAWER"]:
      return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_MINI_SIDEBAR"]:
      return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]:
      return __jsx(_Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_10__["default"], null);
    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]:
      return __jsx(_Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_10__["default"], null);
    default:
      return null;
  }
};
var Content = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Content,
  Footer = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Footer;
var today = new Date();
var AppLayout = function AppLayout(_ref) {
  _s();
  var children = _ref.children;
  var _useAuth = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_11__["useAuth"])(),
    authUser = _useAuth.authUser,
    isLoadingUser = _useAuth.isLoadingUser,
    error = _useAuth.error;
  var themeType = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref2) {
    var settings = _ref2.settings;
    return settings.themeType;
  });
  var navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref3) {
    var settings = _ref3.settings;
    return settings.navStyle;
  });
  var layoutType = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref4) {
    var settings = _ref4.settings;
    return settings.layoutType;
  });
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["THEME_TYPE_DARK"]) {
      document.body.classList.add('dark-theme');
    } else if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
    }
  }, [themeType]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (layoutType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["LAYOUT_TYPE_FULL"]) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('full-layout');
    } else if (layoutType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["LAYOUT_TYPE_BOXED"]) {
      document.body.classList.remove('full-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('boxed-layout');
    } else if (layoutType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["LAYOUT_TYPE_FRAMED"]) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('full-layout');
      document.body.classList.add('framed-layout');
    }
  }, [layoutType]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DEFAULT_HORIZONTAL"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_DARK_HORIZONTAL"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_ABOVE_HEADER"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_9__["NAV_STYLE_BELOW_HEADER"]) {
      document.body.classList.add('full-scroll');
      document.body.classList.add('horizontal-layout');
    } else {
      document.body.classList.remove('full-scroll');
      document.body.classList.remove('horizontal-layout');
    }
  }, [navStyle]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', function () {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_14__["updateWindowWidth"])(window.innerWidth));
    });
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (error) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error.toString()).then(function (r) {
        return r;
      });
    }
  }, [error]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isLoadingUser) {
      if (!authUser && !Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_11__["isUnRestrictedRoute"])(router.pathname)) {
        router.push('/signin').then(function (r) {
          return r;
        });
      } else if (authUser && Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_11__["isUnRestrictedRoute"])(router.pathname)) {
        router.push('/dashboard').then(function (r) {
          return r;
        });
      }
    }
  }, [authUser, isLoadingUser, router.pathname]);
  if (isLoadingUser) {
    return __jsx("div", {
      className: "gx-loader-view"
    }, __jsx(_components_CircularProgress__WEBPACK_IMPORTED_MODULE_13__["default"], null));
  }
  return Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_11__["isUnRestrictedRoute"])(router.pathname) ? children : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    className: "gx-app-layout"
  }, __jsx(_AppSidebar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    navStyle: navStyle
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, getNavStyles(navStyle), __jsx(Content, {
    className: "gx-layout-content ".concat(getContainerClass(navStyle))
  }, __jsx("div", {
    className: "gx-main-content-wrapper"
  }, children))));
};
_s(AppLayout, "z4G4430rWMiedOb9ACsrx6GDxeQ=", false, function () {
  return [_util_use_auth__WEBPACK_IMPORTED_MODULE_11__["useAuth"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});
_c = AppLayout;
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);
var _c;
$RefreshReg$(_c, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbImdldENvbnRhaW5lckNsYXNzIiwibmF2U3R5bGUiLCJOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMIiwiTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCIsIk5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwiLCJOQVZfU1RZTEVfQkVMT1dfSEVBREVSIiwiTkFWX1NUWUxFX0FCT1ZFX0hFQURFUiIsImdldE5hdlN0eWxlcyIsIk5BVl9TVFlMRV9GSVhFRCIsIk5BVl9TVFlMRV9EUkFXRVIiLCJOQVZfU1RZTEVfTUlOSV9TSURFQkFSIiwiTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIiLCJOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIiLCJDb250ZW50IiwiTGF5b3V0IiwiRm9vdGVyIiwidG9kYXkiLCJEYXRlIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VBdXRoIiwiYXV0aFVzZXIiLCJpc0xvYWRpbmdVc2VyIiwiZXJyb3IiLCJ0aGVtZVR5cGUiLCJ1c2VTZWxlY3RvciIsInNldHRpbmdzIiwibGF5b3V0VHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJUSEVNRV9UWVBFX0RBUksiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsIkxBWU9VVF9UWVBFX0ZVTEwiLCJMQVlPVVRfVFlQRV9CT1hFRCIsIkxBWU9VVF9UWVBFX0ZSQU1FRCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJ0aGVuIiwiciIsImlzVW5SZXN0cmljdGVkUm91dGUiLCJwYXRobmFtZSIsInB1c2giXSwibWFwcGlu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ZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmI2ZDI2ZTBhZDQzODQyNzc3NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xheW91dCwgbWVzc2FnZX0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IEhvcml6b250YWxEZWZhdWx0IGZyb20gXCIuLi9Ub3BiYXIvSG9yaXpvbnRhbERlZmF1bHRcIjtcbmltcG9ydCBIb3Jpem9udGFsRGFyayBmcm9tIFwiLi4vVG9wYmFyL0hvcml6b250YWxEYXJrXCI7XG5pbXBvcnQgSW5zaWRlSGVhZGVyIGZyb20gXCIuLi9Ub3BiYXIvSW5zaWRlSGVhZGVyXCI7XG5pbXBvcnQgQWJvdmVIZWFkZXIgZnJvbSBcIi4uL1RvcGJhci9BYm92ZUhlYWRlclwiO1xuaW1wb3J0IEJlbG93SGVhZGVyIGZyb20gXCIuLi9Ub3BiYXIvQmVsb3dIZWFkZXJcIjtcbmltcG9ydCBUb3BiYXIgZnJvbSBcIi4uL1RvcGJhclwiO1xuaW1wb3J0IHtcbiAgTEFZT1VUX1RZUEVfQk9YRUQsXG4gIExBWU9VVF9UWVBFX0ZSQU1FRCxcbiAgTEFZT1VUX1RZUEVfRlVMTCxcbiAgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUixcbiAgTkFWX1NUWUxFX0JFTE9XX0hFQURFUixcbiAgTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTCxcbiAgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCxcbiAgTkFWX1NUWUxFX0RSQVdFUixcbiAgTkFWX1NUWUxFX0ZJWEVELFxuICBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMLFxuICBOQVZfU1RZTEVfTUlOSV9TSURFQkFSLFxuICBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIsXG4gIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSLFxuICBUSEVNRV9UWVBFX0RBUktcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcbmltcG9ydCBOb0hlYWRlck5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vVG9wYmFyL05vSGVhZGVyTm90aWZpY2F0aW9uXCI7XG5pbXBvcnQge2lzVW5SZXN0cmljdGVkUm91dGUsIHVzZUF1dGh9IGZyb20gXCIuLi8uLi8uLi91dGlsL3VzZS1hdXRoXCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQge3VwZGF0ZVdpbmRvd1dpZHRofSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IEFwcFNpZGViYXIgZnJvbSBcIi4vQXBwU2lkZWJhclwiO1xuXG5jb25zdCBnZXRDb250YWluZXJDbGFzcyA9IChuYXZTdHlsZSkgPT4ge1xuICBzd2l0Y2ggKG5hdlN0eWxlKSB7XG4gICAgY2FzZSBOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMOlxuICAgICAgcmV0dXJuIFwiZ3gtY29udGFpbmVyLXdyYXBcIjtcbiAgICBjYXNlIE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUw6XG4gICAgICByZXR1cm4gXCJneC1jb250YWluZXItd3JhcFwiO1xuICAgIGNhc2UgTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTDpcbiAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XG4gICAgY2FzZSBOQVZfU1RZTEVfQkVMT1dfSEVBREVSOlxuICAgICAgcmV0dXJuIFwiZ3gtY29udGFpbmVyLXdyYXBcIjtcbiAgICBjYXNlIE5BVl9TVFlMRV9BQk9WRV9IRUFERVI6XG4gICAgICByZXR1cm4gXCJneC1jb250YWluZXItd3JhcFwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmNvbnN0IGdldE5hdlN0eWxlcyA9IChuYXZTdHlsZSkgPT4ge1xuICBzd2l0Y2ggKG5hdlN0eWxlKSB7XG4gICAgY2FzZSBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMIDpcbiAgICAgIHJldHVybiA8SG9yaXpvbnRhbERlZmF1bHQvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwgOlxuICAgICAgcmV0dXJuIDxIb3Jpem9udGFsRGFyay8+O1xuICAgIGNhc2UgTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCA6XG4gICAgICByZXR1cm4gPEluc2lkZUhlYWRlci8+O1xuICAgIGNhc2UgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUiA6XG4gICAgICByZXR1cm4gPEFib3ZlSGVhZGVyLz47XG4gICAgY2FzZSBOQVZfU1RZTEVfQkVMT1dfSEVBREVSIDpcbiAgICAgIHJldHVybiA8QmVsb3dIZWFkZXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9GSVhFRCA6XG4gICAgICByZXR1cm4gPFRvcGJhci8+O1xuICAgIGNhc2UgTkFWX1NUWUxFX0RSQVdFUiA6XG4gICAgICByZXR1cm4gPFRvcGJhci8+O1xuICAgIGNhc2UgTkFWX1NUWUxFX01JTklfU0lERUJBUiA6XG4gICAgICByZXR1cm4gPFRvcGJhci8+O1xuICAgIGNhc2UgTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIgOlxuICAgICAgcmV0dXJuIDxOb0hlYWRlck5vdGlmaWNhdGlvbi8+O1xuICAgIGNhc2UgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSIDpcbiAgICAgIHJldHVybiA8Tm9IZWFkZXJOb3RpZmljYXRpb24vPjtcbiAgICBkZWZhdWx0IDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCB7Q29udGVudCwgRm9vdGVyfSA9IExheW91dDtcbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuY29uc3QgQXBwTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgY29uc3Qge2F1dGhVc2VyLCBpc0xvYWRpbmdVc2VyLCBlcnJvcn0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHRoZW1lVHlwZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy50aGVtZVR5cGUpO1xuICBjb25zdCBuYXZTdHlsZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZTdHlsZSk7XG4gIGNvbnN0IGxheW91dFR5cGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubGF5b3V0VHlwZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0aGVtZVR5cGUgPT09IFRIRU1FX1RZUEVfREFSSykge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLXRoZW1lJyk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay10aGVtZScpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstdGhlbWUnKTtcbiAgICB9XG4gIH0sIFt0aGVtZVR5cGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRV9GVUxMKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2JveGVkLWxheW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmcmFtZWQtbGF5b3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Z1bGwtbGF5b3V0Jyk7XG4gICAgfSBlbHNlIGlmIChsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRV9CT1hFRCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsLWxheW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmcmFtZWQtbGF5b3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JveGVkLWxheW91dCcpO1xuICAgIH0gZWxzZSBpZiAobGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEVfRlJBTUVEKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2JveGVkLWxheW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsLWxheW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdmcmFtZWQtbGF5b3V0Jyk7XG4gICAgfVxuICB9LCBbbGF5b3V0VHlwZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMIHx8XG4gICAgICBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTCB8fFxuICAgICAgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwgfHxcbiAgICAgIG5hdlN0eWxlID09PSBOQVZfU1RZTEVfQUJPVkVfSEVBREVSIHx8XG4gICAgICBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0JFTE9XX0hFQURFUikge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdmdWxsLXNjcm9sbCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsLWxheW91dCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwtc2Nyb2xsJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwtbGF5b3V0Jyk7XG4gICAgfVxuICB9LCBbbmF2U3R5bGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1cGRhdGVXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCkpO1xuICAgIH0pXG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBtZXNzYWdlLmVycm9yKGVycm9yLnRvU3RyaW5nKCkpLnRoZW4ociA9PiByKTtcbiAgICB9XG4gIH0sIFtlcnJvcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0xvYWRpbmdVc2VyKSB7XG4gICAgICBpZiAoIWF1dGhVc2VyICYmICFpc1VuUmVzdHJpY3RlZFJvdXRlKHJvdXRlci5wYXRobmFtZSkpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9zaWduaW4nKS50aGVuKHIgPT4gcik7XG4gICAgICB9IGVsc2UgaWYgKGF1dGhVc2VyICYmIGlzVW5SZXN0cmljdGVkUm91dGUocm91dGVyLnBhdGhuYW1lKSkge1xuICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpLnRoZW4ociA9PiByKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFthdXRoVXNlciwgaXNMb2FkaW5nVXNlciwgcm91dGVyLnBhdGhuYW1lXSk7XG5cbiAgaWYgKGlzTG9hZGluZ1VzZXIpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJneC1sb2FkZXItdmlld1wiPlxuICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MvPlxuICAgIDwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiBpc1VuUmVzdHJpY3RlZFJvdXRlKHJvdXRlci5wYXRobmFtZSkgPyBjaGlsZHJlbiA6IChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17YGd4LWFwcC1sYXlvdXRgfT5cbiAgICAgIDxBcHBTaWRlYmFyIG5hdlN0eWxlPXtuYXZTdHlsZX0vPlxuICAgICAgPExheW91dD5cbiAgICAgICAge2dldE5hdlN0eWxlcyhuYXZTdHlsZSl9XG4gICAgICAgIDxDb250ZW50IGNsYXNzTmFtZT17YGd4LWxheW91dC1jb250ZW50ICR7Z2V0Q29udGFpbmVyQ2xhc3MobmF2U3R5bGUpfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWFpbi1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPEZvb3Rlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbGF5b3V0LWZvb3Rlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgIENvcHlyaWdodCBDb21wYW55IE5hbWUgwqkge3RvZGF5LmdldEZ1bGxZZWFyKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvb3Rlcj4gKi99XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==