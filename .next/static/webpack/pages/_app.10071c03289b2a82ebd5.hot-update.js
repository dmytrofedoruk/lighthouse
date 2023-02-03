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
  }, children), __jsx(Footer, null, __jsx("div", {
    className: "gx-layout-footer-content"
  }, "Copyright Company Name \xA9 ", today.getFullYear())))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbImdldENvbnRhaW5lckNsYXNzIiwibmF2U3R5bGUiLCJOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMIiwiTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCIsIk5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwiLCJOQVZfU1RZTEVfQkVMT1dfSEVBREVSIiwiTkFWX1NUWUxFX0FCT1ZFX0hFQURFUiIsImdldE5hdlN0eWxlcyIsIk5BVl9TVFlMRV9GSVhFRCIsIk5BVl9TVFlMRV9EUkFXRVIiLCJOQVZfU1RZTEVfTUlOSV9TSURFQkFSIiwiTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIiLCJOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIiLCJDb250ZW50IiwiTGF5b3V0IiwiRm9vdGVyIiwidG9kYXkiLCJEYXRlIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VBdXRoIiwiYXV0aFVzZXIiLCJpc0xvYWRpbmdVc2VyIiwiZXJyb3IiLCJ0aGVtZVR5cGUiLCJ1c2VTZWxlY3RvciIsInNldHRpbmdzIiwibGF5b3V0VHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJUSEVNRV9UWVBFX0RBUksiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsIkxBWU9VVF9UWVBFX0ZVTEwiLCJMQVlPVVRfVFlQRV9CT1hFRCIsIkxBWU9VVF9UWVBFX0ZSQU1FRCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJ0aGVuIiwiciIsImlzVW5SZXN0cmljdGVkUm91dGUiLCJwYXRobmFtZSIsInB1c2giLCJnZXRGdWxs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QVcsRUFDWkEsdURBQVcsRUFDVEEsdURBQVcsRUFFZkksc0RBQVMsRUFDUEUsdURBQVc7QUFBQTtBQUFBLEtBUHhCYixTQUFTO0FBK0ZBQSx3RUFBUyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjEwMDcxYzAzMjg5YjJhODJlYmQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMYXlvdXQsIG1lc3NhZ2V9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBIb3Jpem9udGFsRGVmYXVsdCBmcm9tIFwiLi4vVG9wYmFyL0hvcml6b250YWxEZWZhdWx0XCI7XG5pbXBvcnQgSG9yaXpvbnRhbERhcmsgZnJvbSBcIi4uL1RvcGJhci9Ib3Jpem9udGFsRGFya1wiO1xuaW1wb3J0IEluc2lkZUhlYWRlciBmcm9tIFwiLi4vVG9wYmFyL0luc2lkZUhlYWRlclwiO1xuaW1wb3J0IEFib3ZlSGVhZGVyIGZyb20gXCIuLi9Ub3BiYXIvQWJvdmVIZWFkZXJcIjtcbmltcG9ydCBCZWxvd0hlYWRlciBmcm9tIFwiLi4vVG9wYmFyL0JlbG93SGVhZGVyXCI7XG5pbXBvcnQgVG9wYmFyIGZyb20gXCIuLi9Ub3BiYXJcIjtcbmltcG9ydCB7XG4gIExBWU9VVF9UWVBFX0JPWEVELFxuICBMQVlPVVRfVFlQRV9GUkFNRUQsXG4gIExBWU9VVF9UWVBFX0ZVTEwsXG4gIE5BVl9TVFlMRV9BQk9WRV9IRUFERVIsXG4gIE5BVl9TVFlMRV9CRUxPV19IRUFERVIsXG4gIE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwsXG4gIE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwsXG4gIE5BVl9TVFlMRV9EUkFXRVIsXG4gIE5BVl9TVFlMRV9GSVhFRCxcbiAgTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCxcbiAgTkFWX1NUWUxFX01JTklfU0lERUJBUixcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxuICBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUixcbiAgVEhFTUVfVFlQRV9EQVJLXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XG5pbXBvcnQgTm9IZWFkZXJOb3RpZmljYXRpb24gZnJvbSBcIi4uL1RvcGJhci9Ob0hlYWRlck5vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHtpc1VuUmVzdHJpY3RlZFJvdXRlLCB1c2VBdXRofSBmcm9tIFwiLi4vLi4vLi4vdXRpbC91c2UtYXV0aFwiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IHt1cGRhdGVXaW5kb3dXaWR0aH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCBBcHBTaWRlYmFyIGZyb20gXCIuL0FwcFNpZGViYXJcIjtcblxuY29uc3QgZ2V0Q29udGFpbmVyQ2xhc3MgPSAobmF2U3R5bGUpID0+IHtcbiAgc3dpdGNoIChuYXZTdHlsZSkge1xuICAgIGNhc2UgTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTDpcbiAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XG4gICAgY2FzZSBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMOlxuICAgICAgcmV0dXJuIFwiZ3gtY29udGFpbmVyLXdyYXBcIjtcbiAgICBjYXNlIE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUw6XG4gICAgICByZXR1cm4gXCJneC1jb250YWluZXItd3JhcFwiO1xuICAgIGNhc2UgTkFWX1NUWUxFX0JFTE9XX0hFQURFUjpcbiAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XG4gICAgY2FzZSBOQVZfU1RZTEVfQUJPVkVfSEVBREVSOlxuICAgICAgcmV0dXJuIFwiZ3gtY29udGFpbmVyLXdyYXBcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBnZXROYXZTdHlsZXMgPSAobmF2U3R5bGUpID0+IHtcbiAgc3dpdGNoIChuYXZTdHlsZSkge1xuICAgIGNhc2UgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCA6XG4gICAgICByZXR1cm4gPEhvcml6b250YWxEZWZhdWx0Lz47XG4gICAgY2FzZSBOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMIDpcbiAgICAgIHJldHVybiA8SG9yaXpvbnRhbERhcmsvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwgOlxuICAgICAgcmV0dXJuIDxJbnNpZGVIZWFkZXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9BQk9WRV9IRUFERVIgOlxuICAgICAgcmV0dXJuIDxBYm92ZUhlYWRlci8+O1xuICAgIGNhc2UgTkFWX1NUWUxFX0JFTE9XX0hFQURFUiA6XG4gICAgICByZXR1cm4gPEJlbG93SGVhZGVyLz47XG4gICAgY2FzZSBOQVZfU1RZTEVfRklYRUQgOlxuICAgICAgcmV0dXJuIDxUb3BiYXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9EUkFXRVIgOlxuICAgICAgcmV0dXJuIDxUb3BiYXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIgOlxuICAgICAgcmV0dXJuIDxUb3BiYXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSIDpcbiAgICAgIHJldHVybiA8Tm9IZWFkZXJOb3RpZmljYXRpb24vPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUiA6XG4gICAgICByZXR1cm4gPE5vSGVhZGVyTm90aWZpY2F0aW9uLz47XG4gICAgZGVmYXVsdCA6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3Qge0NvbnRlbnQsIEZvb3Rlcn0gPSBMYXlvdXQ7XG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbmNvbnN0IEFwcExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gIGNvbnN0IHthdXRoVXNlciwgaXNMb2FkaW5nVXNlciwgZXJyb3J9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB0aGVtZVR5cGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MudGhlbWVUeXBlKTtcbiAgY29uc3QgbmF2U3R5bGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2U3R5bGUpO1xuICBjb25zdCBsYXlvdXRUeXBlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxheW91dFR5cGUpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGhlbWVUeXBlID09PSBUSEVNRV9UWVBFX0RBUkspIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay10aGVtZScpO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstdGhlbWUnKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLXRoZW1lJyk7XG4gICAgfVxuICB9LCBbdGhlbWVUeXBlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEVfRlVMTCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib3hlZC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnJhbWVkLWxheW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdmdWxsLWxheW91dCcpO1xuICAgIH0gZWxzZSBpZiAobGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEVfQk9YRUQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnJhbWVkLWxheW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib3hlZC1sYXlvdXQnKTtcbiAgICB9IGVsc2UgaWYgKGxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFX0ZSQU1FRCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib3hlZC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZnJhbWVkLWxheW91dCcpO1xuICAgIH1cbiAgfSwgW2xheW91dFR5cGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCB8fFxuICAgICAgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwgfHxcbiAgICAgIG5hdlN0eWxlID09PSBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMIHx8XG4gICAgICBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0FCT1ZFX0hFQURFUiB8fFxuICAgICAgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9CRUxPV19IRUFERVIpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZnVsbC1zY3JvbGwnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbC1sYXlvdXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsLXNjcm9sbCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsLWxheW91dCcpO1xuICAgIH1cbiAgfSwgW25hdlN0eWxlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlV2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpKTtcbiAgICB9KVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgbWVzc2FnZS5lcnJvcihlcnJvci50b1N0cmluZygpKS50aGVuKHIgPT4gcik7XG4gICAgfVxuICB9LCBbZXJyb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNMb2FkaW5nVXNlcikge1xuICAgICAgaWYgKCFhdXRoVXNlciAmJiAhaXNVblJlc3RyaWN0ZWRSb3V0ZShyb3V0ZXIucGF0aG5hbWUpKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvc2lnbmluJykudGhlbihyID0+IHIpO1xuICAgICAgfSBlbHNlIGlmIChhdXRoVXNlciAmJiBpc1VuUmVzdHJpY3RlZFJvdXRlKHJvdXRlci5wYXRobmFtZSkpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKS50aGVuKHIgPT4gcik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbYXV0aFVzZXIsIGlzTG9hZGluZ1VzZXIsIHJvdXRlci5wYXRobmFtZV0pO1xuXG4gIGlmIChpc0xvYWRpbmdVc2VyKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbG9hZGVyLXZpZXdcIj5cbiAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cbiAgICA8L2Rpdj47XG4gIH1cblxuICByZXR1cm4gaXNVblJlc3RyaWN0ZWRSb3V0ZShyb3V0ZXIucGF0aG5hbWUpID8gY2hpbGRyZW4gOiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e2BneC1hcHAtbGF5b3V0YH0+XG4gICAgICA8QXBwU2lkZWJhciBuYXZTdHlsZT17bmF2U3R5bGV9Lz5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtnZXROYXZTdHlsZXMobmF2U3R5bGUpfVxuICAgICAgICA8Q29udGVudCBjbGFzc05hbWU9e2BneC1sYXlvdXQtY29udGVudCAke2dldENvbnRhaW5lckNsYXNzKG5hdlN0eWxlKX1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1haW4tY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbGF5b3V0LWZvb3Rlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgIENvcHlyaWdodCBDb21wYW55IE5hbWUgwqkge3RvZGF5LmdldEZ1bGxZZWFyKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9