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

/***/ }),

/***/ "./app/core/Sidebar/SidebarContent.js":
/*!********************************************!*\
  !*** ./app/core/Sidebar/SidebarContent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _SidebarLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SidebarLogo */ "./app/core/Sidebar/SidebarLogo.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserProfile */ "./app/core/Sidebar/UserProfile.js");
/* harmony import */ var _AppsNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppsNavigation */ "./app/core/Sidebar/AppsNavigation.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.js");
var _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;
var MenuItemGroup = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].ItemGroup;
var SidebarContent = function SidebarContent() {
  _s();
  var navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (_ref) {
    var settings = _ref.settings;
    return settings.navStyle;
  });
  var themeType = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (_ref2) {
    var settings = _ref2.settings;
    return settings.themeType;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var getNoHeaderClass = function getNoHeaderClass(navStyle) {
    if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  var getNavStyleSubMenuClass = function getNavStyleSubMenuClass(navStyle) {
    if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_10__["setPathName"])(router.pathname));
  }, [router.pathname]);
  var selectedKeys = router.pathname.substr(1) || 'dashboard';
  var defaultOpenKeys = selectedKeys.split('/')[1];
  console.log(defaultOpenKeys);
  console.log(selectedKeys);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SidebarLogo__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "gx-sidebar-content"
  }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-layout-sider-scrollbar"
  }, __jsx("div", {
    style: {
      margin: "0px 20px 12px 20px"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0 design-button",
    style: {
      background: "#D3F36B",
      border: "none"
    },
    htmlType: "button"
  }, "+ Lorem ipsum")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    style: {
      background: "#F9FAF5"
    },
    defaultOpenKeys: [defaultOpenKeys],
    selectedKeys: [selectedKeys],
    theme: themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["THEME_TYPE_LITE"] ? 'lite' : 'dark',
    mode: "inline"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "dashboard"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/dashboard"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "Dashboard")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "test"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/test"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "Page 2")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "sample2"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sample2"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "Page 3")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "sample3"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sample3"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "Page 4")))))), __jsx("div", {
    className: "gx-sidebar-notifications ".concat(getNoHeaderClass(navStyle))
  }, __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
};
_s(SidebarContent, "EatSLtibr+03jiOQpQSLf177G7o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});
_c = SidebarContent;
SidebarContent.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SidebarContent);
var _c;
$RefreshReg$(_c, "SidebarContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9hcHAvY29yZS9TaWRlYmFyL1NpZGViYXJDb250ZW50LmpzIl0sIm5hbWVzIjpbImdldENvbnRhaW5lckNsYXNzIiwibmF2U3R5bGUiLCJOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMIiwiTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCIsIk5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwiLCJOQVZfU1RZTEVfQkVMT1dfSEVBREVSIiwiTkFWX1NUWUxFX0FCT1ZFX0hFQURFUiIsImdldE5hdlN0eWxlcyIsIk5BVl9TVFlMRV9GSVhFRCIsIk5BVl9TVFlMRV9EUkFXRVIiLCJOQVZfU1RZTEVfTUlOSV9TSURFQkFSIiwiTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIiLCJOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIiLCJDb250ZW50IiwiTGF5b3V0IiwiRm9vdGVyIiwidG9kYXkiLCJEYXRlIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VBdXRoIiwiYXV0aFVzZXIiLCJpc0xvYWRpbmdVc2VyIiwiZXJyb3IiLCJ0aGVtZVR5cGUiLCJ1c2VTZWxlY3RvciIsInNldHRpbmdzIiwibGF5b3V0VHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJUSEVNRV9UWVBFX0RBUksiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsIkxBWU9VVF9UWVBFX0ZVTEwiLCJMQVlPVVRfVFlQRV9CT1hFRCIsIkxBWU9VVF9UWVBFX0ZSQU1FRCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJ0aGVuIiwiciIsImlzVW5SZXN0cmljdGVkUm91dGUiLCJwYXRobmFtZSIsInB1c2giLCJnZXRGdWxsWWVhciIsIlN1Yk1lbnUiLCJNZW51IiwiTWVudUl0ZW1Hcm91cCIsIkl0ZW1Hcm91cCIsIlNpZGViYXJDb250ZW50IiwiZ2V0Tm9IZWFkZXJDbGFzcyIsImdldE5hdlN0eWxlU3ViTWVudUNsYXNzIiwic2V0UGF0aE5hbWUiLCJzZWxlY3RlZEtleXMiLCJzdWJzdHIiLCJkZWZhdWx0T3BlbktleXMiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiVEhFTUVfVFlQRV9MSVRFIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0Y7QUFDZ0I7QUFFTztBQUNOO0FBQ0o7QUFDRjtBQUNBO0FBQ2pCO0FBZ0JVO0FBQ3lCO0FBQ0U7QUFDOUI7QUFDMkI7QUFDUjtBQUNuQjtBQUV0QyxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCLENBQUlDLFFBQVEsRUFBSztFQUN0QyxRQUFRQSxRQUFRO0lBQ2QsS0FBS0MsaUZBQXlCO01BQzVCLE9BQU8sbUJBQW1CO0lBQzVCLEtBQUtDLG9GQUE0QjtNQUMvQixPQUFPLG1CQUFtQjtJQUM1QixLQUFLQywwRkFBa0M7TUFDckMsT0FBTyxtQkFBbUI7SUFDNUIsS0FBS0MsOEVBQXNCO01BQ3pCLE9BQU8sbUJBQW1CO0lBQzVCLEtBQUtDLDhFQUFzQjtNQUN6QixPQUFPLG1CQUFtQjtJQUM1QjtNQUNFLE9BQU8sRUFBRTtFQUFDO0FBRWhCLENBQUM7QUFFRCxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJTixRQUFRLEVBQUs7RUFDakMsUUFBUUEsUUFBUTtJQUNkLEtBQUtFLG9GQUE0QjtNQUMvQixPQUFPLE1BQUMsaUVBQWlCLE9BQUU7SUFDN0IsS0FBS0QsaUZBQXlCO01BQzVCLE9BQU8sTUFBQyw4REFBYyxPQUFFO0lBQzFCLEtBQUtFLDBGQUFrQztNQUNyQyxPQUFPLE1BQUMsNERBQVksT0FBRTtJQUN4QixLQUFLRSw4RUFBc0I7TUFDekIsT0FBTyxNQUFDLDJEQUFXLE9BQUU7SUFDdkIsS0FBS0QsOEVBQXNCO01BQ3pCLE9BQU8sTUFBQywyREFBVyxPQUFFO0lBQ3ZCLEtBQUtHLHVFQUFlO01BQ2xCLE9BQU8sTUFBQywrQ0FBTSxPQUFFO0lBQ2xCLEtBQUtDLHdFQUFnQjtNQUNuQixPQUFPLE1BQUMsK0NBQU0sT0FBRTtJQUNsQixLQUFLQyw4RUFBc0I7TUFDekIsT0FBTyxNQUFDLCtDQUFNLE9BQUU7SUFDbEIsS0FBS0Msd0ZBQWdDO01BQ25DLE9BQU8sTUFBQyxxRUFBb0IsT0FBRTtJQUNoQyxLQUFLQyw0RkFBb0M7TUFDdkMsT0FBTyxNQUFDLHFFQUFvQixPQUFFO0lBQ2hDO01BQ0UsT0FBTyxJQUFJO0VBQUM7QUFFbEIsQ0FBQztBQUVELElBQU9DLE9BQU8sR0FBWUMsMkNBQU0sQ0FBekJELE9BQU87RUFBRUUsTUFBTSxHQUFJRCwyQ0FBTSxDQUFoQkMsTUFBTTtBQUN0QixJQUFNQyxLQUFLLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0FBRXhCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTLE9BQW1CO0VBQUE7RUFBQSxJQUFkQyxRQUFRLFFBQVJBLFFBQVE7RUFDMUIsZUFBeUNDLCtEQUFPLEVBQUU7SUFBM0NDLFFBQVEsWUFBUkEsUUFBUTtJQUFFQyxhQUFhLFlBQWJBLGFBQWE7SUFBRUMsS0FBSyxZQUFMQSxLQUFLO0VBQ3JDLElBQU1DLFNBQVMsR0FBR0MsK0RBQVcsQ0FBQztJQUFBLElBQUVDLFFBQVEsU0FBUkEsUUFBUTtJQUFBLE9BQU1BLFFBQVEsQ0FBQ0YsU0FBUztFQUFBLEVBQUM7RUFDakUsSUFBTXZCLFFBQVEsR0FBR3dCLCtEQUFXLENBQUM7SUFBQSxJQUFFQyxRQUFRLFNBQVJBLFFBQVE7SUFBQSxPQUFNQSxRQUFRLENBQUN6QixRQUFRO0VBQUEsRUFBQztFQUMvRCxJQUFNMEIsVUFBVSxHQUFHRiwrREFBVyxDQUFDO0lBQUEsSUFBRUMsUUFBUSxTQUFSQSxRQUFRO0lBQUEsT0FBTUEsUUFBUSxDQUFDQyxVQUFVO0VBQUEsRUFBQztFQUVuRSxJQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQUU7RUFDMUIsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBRTlCQyx1REFBUyxDQUFDLFlBQU07SUFDZCxJQUFJUixTQUFTLEtBQUtTLHVFQUFlLEVBQUU7TUFDakNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDM0MsQ0FBQyxNQUFNLElBQUlILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNFLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtNQUN6REosUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLFlBQVksQ0FBQztJQUM5QztFQUNGLENBQUMsRUFBRSxDQUFDZixTQUFTLENBQUMsQ0FBQztFQUVmUSx1REFBUyxDQUFDLFlBQU07SUFDZCxJQUFJTCxVQUFVLEtBQUthLHdFQUFnQixFQUFFO01BQ25DTixRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsY0FBYyxDQUFDO01BQzlDTCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsZUFBZSxDQUFDO01BQy9DTCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQzVDLENBQUMsTUFBTSxJQUFJVixVQUFVLEtBQUtjLHlFQUFpQixFQUFFO01BQzNDUCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsYUFBYSxDQUFDO01BQzdDTCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsZUFBZSxDQUFDO01BQy9DTCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUMsTUFBTSxJQUFJVixVQUFVLEtBQUtlLDBFQUFrQixFQUFFO01BQzVDUixRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsY0FBYyxDQUFDO01BQzlDTCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsYUFBYSxDQUFDO01BQzdDTCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQzlDO0VBQ0YsQ0FBQyxFQUFFLENBQUNWLFVBQVUsQ0FBQyxDQUFDO0VBRWhCSyx1REFBUyxDQUFDLFlBQU07SUFDZCxJQUFJL0IsUUFBUSxLQUFLRSxvRkFBNEIsSUFDM0NGLFFBQVEsS0FBS0MsaUZBQXlCLElBQ3RDRCxRQUFRLEtBQUtHLDBGQUFrQyxJQUMvQ0gsUUFBUSxLQUFLSyw4RUFBc0IsSUFDbkNMLFFBQVEsS0FBS0ksOEVBQXNCLEVBQUU7TUFDckM2QixRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO01BQzFDSCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7SUFDbEQsQ0FBQyxNQUFNO01BQ0xILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNHLE1BQU0sQ0FBQyxhQUFhLENBQUM7TUFDN0NMLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUNyRDtFQUNGLENBQUMsRUFBRSxDQUFDdEMsUUFBUSxDQUFDLENBQUM7RUFFZCtCLHVEQUFTLENBQUMsWUFBTTtJQUNkVyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO01BQ3RDZCxRQUFRLENBQUNlLHlFQUFpQixDQUFDRixNQUFNLENBQUNHLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRSxDQUFDaEIsUUFBUSxDQUFDLENBQUM7RUFFZEUsdURBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSVQsS0FBSyxFQUFFO01BQ1R3Qiw0Q0FBTyxDQUFDeEIsS0FBSyxDQUFDQSxLQUFLLENBQUN5QixRQUFRLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQUMsQ0FBQztRQUFBLE9BQUlBLENBQUM7TUFBQSxFQUFDO0lBQzlDO0VBQ0YsQ0FBQyxFQUFFLENBQUMzQixLQUFLLENBQUMsQ0FBQztFQUVYUyx1REFBUyxDQUFDLFlBQU07SUFDZCxJQUFJLENBQUNWLGFBQWEsRUFBRTtNQUNsQixJQUFJLENBQUNELFFBQVEsSUFBSSxDQUFDOEIsMkVBQW1CLENBQUN2QixNQUFNLENBQUN3QixRQUFRLENBQUMsRUFBRTtRQUN0RHhCLE1BQU0sQ0FBQ3lCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQ0osSUFBSSxDQUFDLFVBQUFDLENBQUM7VUFBQSxPQUFJQSxDQUFDO1FBQUEsRUFBQztNQUNyQyxDQUFDLE1BQU0sSUFBSTdCLFFBQVEsSUFBSThCLDJFQUFtQixDQUFDdkIsTUFBTSxDQUFDd0IsUUFBUSxDQUFDLEVBQUU7UUFDM0R4QixNQUFNLENBQUN5QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUNKLElBQUksQ0FBQyxVQUFBQyxDQUFDO1VBQUEsT0FBSUEsQ0FBQztRQUFBLEVBQUM7TUFDeEM7SUFDRjtFQUNGLENBQUMsRUFBRSxDQUFDN0IsUUFBUSxFQUFFQyxhQUFhLEVBQUVNLE1BQU0sQ0FBQ3dCLFFBQVEsQ0FBQyxDQUFDO0VBRTlDLElBQUk5QixhQUFhLEVBQUU7SUFDakIsT0FBTztNQUFLLFNBQVMsRUFBQztJQUFnQixHQUNwQyxNQUFDLHFFQUFnQixPQUFFLENBQ2Y7RUFDUjtFQUVBLE9BQU82QiwyRUFBbUIsQ0FBQ3ZCLE1BQU0sQ0FBQ3dCLFFBQVEsQ0FBQyxHQUFHakMsUUFBUSxHQUNwRCxNQUFDLDJDQUFNO0lBQUMsU0FBUztFQUFrQixHQUNqQyxNQUFDLG9EQUFVO0lBQUMsUUFBUSxFQUFFbEI7RUFBUyxFQUFFLEVBQ2pDLE1BQUMsMkNBQU0sUUFDSk0sWUFBWSxDQUFDTixRQUFRLENBQUMsRUFDdkIsTUFBQyxPQUFPO0lBQUMsU0FBUyw4QkFBdUJELGlCQUFpQixDQUFDQyxRQUFRLENBQUM7RUFBRyxHQUNyRTtJQUFLLFNBQVMsRUFBQztFQUF5QixHQUNyQ2tCLFFBQVEsQ0FDTCxFQUNOLE1BQUMsTUFBTSxRQUNMO0lBQUssU0FBUyxFQUFDO0VBQTBCLEdBQUMsOEJBQ2YsRUFBQ0gsS0FBSyxDQUFDc0MsV0FBVyxFQUFFLENBQ3pDLENBQ0MsQ0FDRCxDQUNILENBRVo7QUFDSCxDQUFDO0FBQUEsR0E3RktwQyxTQUFTO0VBQUEsUUFDNEJFLHVEQUFPLEVBQzlCSyx1REFBVyxFQUNaQSx1REFBVyxFQUNUQSx1REFBVyxFQUVmSSxzREFBUyxFQUNQRSx1REFBVztBQUFBO0FBQUEsS0FQeEJiLFNBQVM7QUErRkFBLHdFQUFTLEVBQUM7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9LYztBQUNMO0FBQ0w7QUFFUTtBQUN5QjtBQUN0QjtBQUNBO0FBQ007QUFLTDtBQUNZO0FBQ0Y7QUFFbkQsSUFBTXFDLE9BQU8sR0FBR0MseUNBQUksQ0FBQ0QsT0FBTztBQUM1QixJQUFNRSxhQUFhLEdBQUdELHlDQUFJLENBQUNFLFNBQVM7QUFFcEMsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjLEdBQVM7RUFBQTtFQUMzQixJQUFNMUQsUUFBUSxHQUFHd0IsK0RBQVcsQ0FBQztJQUFBLElBQUVDLFFBQVEsUUFBUkEsUUFBUTtJQUFBLE9BQU1BLFFBQVEsQ0FBQ3pCLFFBQVE7RUFBQSxFQUFDO0VBQy9ELElBQU11QixTQUFTLEdBQUdDLCtEQUFXLENBQUM7SUFBQSxJQUFFQyxRQUFRLFNBQVJBLFFBQVE7SUFBQSxPQUFNQSxRQUFRLENBQUNGLFNBQVM7RUFBQSxFQUFDO0VBRWpFLElBQU1NLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUM5QixJQUFNSCxNQUFNLEdBQUdDLDZEQUFTLEVBQUU7RUFFMUIsSUFBTStCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0IsQ0FBSTNELFFBQVEsRUFBSztJQUNyQyxJQUFJQSxRQUFRLEtBQUtVLHdGQUFnQyxJQUFJVixRQUFRLEtBQUtXLDRGQUFvQyxFQUFFO01BQ3RHLE9BQU8sNEJBQTRCO0lBQ3JDO0lBQ0EsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUVELElBQU1pRCx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQXVCLENBQUk1RCxRQUFRLEVBQUs7SUFDNUMsSUFBSUEsUUFBUSxLQUFLVSx3RkFBZ0MsRUFBRTtNQUNqRCxPQUFPLDRCQUE0QjtJQUNyQztJQUNBLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFFRHFCLHVEQUFTLENBQUMsWUFBTTtJQUNkRixRQUFRLENBQUNnQyxtRUFBVyxDQUFDbEMsTUFBTSxDQUFDd0IsUUFBUSxDQUFDLENBQUM7RUFDeEMsQ0FBQyxFQUFFLENBQUN4QixNQUFNLENBQUN3QixRQUFRLENBQUMsQ0FBQztFQUVyQixJQUFNVyxZQUFZLEdBQUduQyxNQUFNLENBQUN3QixRQUFRLENBQUNZLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXO0VBQzdELElBQU1DLGVBQWUsR0FBR0YsWUFBWSxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRWxEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsZUFBZSxDQUFDO0VBQzVCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsWUFBWSxDQUFDO0VBRXpCLE9BQ0UsTUFBQyw0Q0FBSyxDQUFDLFFBQVEsUUFDYixNQUFDLG9EQUFXLE9BQUUsRUFDZDtJQUFLLFNBQVMsRUFBQztFQUFvQixHQUdqQyxNQUFDLDhEQUFnQjtJQUFDLFNBQVMsRUFBQztFQUEyQixHQUN2RDtJQUFLLEtBQUssRUFBRTtNQUFDTSxNQUFNLEVBQUU7SUFBb0I7RUFBRSxHQUN2QyxNQUFDLDJDQUFNO0lBQUMsU0FBUyxFQUFDLHVCQUF1QjtJQUFDLEtBQUssRUFBRTtNQUFDQyxVQUFVLEVBQUUsU0FBUztNQUFFQyxNQUFNLEVBQUU7SUFBTSxDQUFFO0lBQUMsUUFBUSxFQUFDO0VBQVEsR0FBQyxlQUU1RyxDQUFTLENBQ0wsRUFDTixNQUFDLHlDQUFJO0lBQ0wsS0FBSyxFQUFFO01BQUNELFVBQVUsRUFBRTtJQUFTLENBQUU7SUFDN0IsZUFBZSxFQUFFLENBQUNMLGVBQWUsQ0FBRTtJQUNuQyxZQUFZLEVBQUUsQ0FBQ0YsWUFBWSxDQUFFO0lBQzdCLEtBQUssRUFBRXZDLFNBQVMsS0FBS2dELHVFQUFlLEdBQUcsTUFBTSxHQUFHLE1BQU87SUFDdkQsSUFBSSxFQUFDO0VBQVEsR0FJYixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFDLEdBQUcsRUFBQztFQUFXLEdBQ3hCLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUM7RUFBWSxHQUNyQixpQkFBRztJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFFLHNCQUFNLFdBQVMsQ0FBTyxDQUFJLENBQzFELENBQ0csRUFHWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFDLEdBQUcsRUFBQztFQUFNLEdBQ25CLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUM7RUFBTyxHQUNoQixpQkFBRztJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFFLHNCQUFNLFFBQU0sQ0FBTyxDQUFJLENBQ3ZELENBQ0csRUFHWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFDLEdBQUcsRUFBQztFQUFTLEdBQ3RCLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUM7RUFBVSxHQUNuQixpQkFBRztJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFFLHNCQUFNLFFBQU0sQ0FBTyxDQUFJLENBQ3ZELENBQ0csRUFHWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFDLEdBQUcsRUFBQztFQUFTLEdBQ3RCLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUM7RUFBVSxHQUNuQixpQkFBRztJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFFLHNCQUFNLFFBQU0sQ0FBTyxDQUFJLENBQ3ZELENBQ0csQ0FDUCxDQUNVLEVBQ25CO0lBQUssU0FBUyxxQ0FBOEJaLGdCQUFnQixDQUFDM0QsUUFBUSxDQUFDO0VBQUcsR0FDdkUsTUFBQyxvREFBVyxPQUFFLENBRVYsQ0FDRixDQUNTO0FBRXJCLENBQUM7QUFBQyxHQXZGSTBELGNBQWM7RUFBQSxRQUNEbEMsdURBQVcsRUFDVkEsdURBQVcsRUFFWk0sdURBQVcsRUFDYkYscURBQVM7QUFBQTtBQUFBLEtBTHBCOEIsY0FBYztBQXlGcEJBLGNBQWMsQ0FBQ2MsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNkZCw2RUFBYyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjdjMTkxM2JhZWYxYzE3YjI1MzE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMYXlvdXQsIG1lc3NhZ2V9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBIb3Jpem9udGFsRGVmYXVsdCBmcm9tIFwiLi4vVG9wYmFyL0hvcml6b250YWxEZWZhdWx0XCI7XG5pbXBvcnQgSG9yaXpvbnRhbERhcmsgZnJvbSBcIi4uL1RvcGJhci9Ib3Jpem9udGFsRGFya1wiO1xuaW1wb3J0IEluc2lkZUhlYWRlciBmcm9tIFwiLi4vVG9wYmFyL0luc2lkZUhlYWRlclwiO1xuaW1wb3J0IEFib3ZlSGVhZGVyIGZyb20gXCIuLi9Ub3BiYXIvQWJvdmVIZWFkZXJcIjtcbmltcG9ydCBCZWxvd0hlYWRlciBmcm9tIFwiLi4vVG9wYmFyL0JlbG93SGVhZGVyXCI7XG5pbXBvcnQgVG9wYmFyIGZyb20gXCIuLi9Ub3BiYXJcIjtcbmltcG9ydCB7XG4gIExBWU9VVF9UWVBFX0JPWEVELFxuICBMQVlPVVRfVFlQRV9GUkFNRUQsXG4gIExBWU9VVF9UWVBFX0ZVTEwsXG4gIE5BVl9TVFlMRV9BQk9WRV9IRUFERVIsXG4gIE5BVl9TVFlMRV9CRUxPV19IRUFERVIsXG4gIE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwsXG4gIE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwsXG4gIE5BVl9TVFlMRV9EUkFXRVIsXG4gIE5BVl9TVFlMRV9GSVhFRCxcbiAgTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCxcbiAgTkFWX1NUWUxFX01JTklfU0lERUJBUixcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxuICBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUixcbiAgVEhFTUVfVFlQRV9EQVJLXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XG5pbXBvcnQgTm9IZWFkZXJOb3RpZmljYXRpb24gZnJvbSBcIi4uL1RvcGJhci9Ob0hlYWRlck5vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHtpc1VuUmVzdHJpY3RlZFJvdXRlLCB1c2VBdXRofSBmcm9tIFwiLi4vLi4vLi4vdXRpbC91c2UtYXV0aFwiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IHt1cGRhdGVXaW5kb3dXaWR0aH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCBBcHBTaWRlYmFyIGZyb20gXCIuL0FwcFNpZGViYXJcIjtcblxuY29uc3QgZ2V0Q29udGFpbmVyQ2xhc3MgPSAobmF2U3R5bGUpID0+IHtcbiAgc3dpdGNoIChuYXZTdHlsZSkge1xuICAgIGNhc2UgTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTDpcbiAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XG4gICAgY2FzZSBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMOlxuICAgICAgcmV0dXJuIFwiZ3gtY29udGFpbmVyLXdyYXBcIjtcbiAgICBjYXNlIE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUw6XG4gICAgICByZXR1cm4gXCJneC1jb250YWluZXItd3JhcFwiO1xuICAgIGNhc2UgTkFWX1NUWUxFX0JFTE9XX0hFQURFUjpcbiAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XG4gICAgY2FzZSBOQVZfU1RZTEVfQUJPVkVfSEVBREVSOlxuICAgICAgcmV0dXJuIFwiZ3gtY29udGFpbmVyLXdyYXBcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBnZXROYXZTdHlsZXMgPSAobmF2U3R5bGUpID0+IHtcbiAgc3dpdGNoIChuYXZTdHlsZSkge1xuICAgIGNhc2UgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCA6XG4gICAgICByZXR1cm4gPEhvcml6b250YWxEZWZhdWx0Lz47XG4gICAgY2FzZSBOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMIDpcbiAgICAgIHJldHVybiA8SG9yaXpvbnRhbERhcmsvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwgOlxuICAgICAgcmV0dXJuIDxJbnNpZGVIZWFkZXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9BQk9WRV9IRUFERVIgOlxuICAgICAgcmV0dXJuIDxBYm92ZUhlYWRlci8+O1xuICAgIGNhc2UgTkFWX1NUWUxFX0JFTE9XX0hFQURFUiA6XG4gICAgICByZXR1cm4gPEJlbG93SGVhZGVyLz47XG4gICAgY2FzZSBOQVZfU1RZTEVfRklYRUQgOlxuICAgICAgcmV0dXJuIDxUb3BiYXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9EUkFXRVIgOlxuICAgICAgcmV0dXJuIDxUb3BiYXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIgOlxuICAgICAgcmV0dXJuIDxUb3BiYXIvPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSIDpcbiAgICAgIHJldHVybiA8Tm9IZWFkZXJOb3RpZmljYXRpb24vPjtcbiAgICBjYXNlIE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUiA6XG4gICAgICByZXR1cm4gPE5vSGVhZGVyTm90aWZpY2F0aW9uLz47XG4gICAgZGVmYXVsdCA6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3Qge0NvbnRlbnQsIEZvb3Rlcn0gPSBMYXlvdXQ7XG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbmNvbnN0IEFwcExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gIGNvbnN0IHthdXRoVXNlciwgaXNMb2FkaW5nVXNlciwgZXJyb3J9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB0aGVtZVR5cGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MudGhlbWVUeXBlKTtcbiAgY29uc3QgbmF2U3R5bGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2U3R5bGUpO1xuICBjb25zdCBsYXlvdXRUeXBlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxheW91dFR5cGUpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGhlbWVUeXBlID09PSBUSEVNRV9UWVBFX0RBUkspIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay10aGVtZScpO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstdGhlbWUnKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLXRoZW1lJyk7XG4gICAgfVxuICB9LCBbdGhlbWVUeXBlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEVfRlVMTCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib3hlZC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnJhbWVkLWxheW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdmdWxsLWxheW91dCcpO1xuICAgIH0gZWxzZSBpZiAobGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEVfQk9YRUQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnJhbWVkLWxheW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib3hlZC1sYXlvdXQnKTtcbiAgICB9IGVsc2UgaWYgKGxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFX0ZSQU1FRCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib3hlZC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbC1sYXlvdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZnJhbWVkLWxheW91dCcpO1xuICAgIH1cbiAgfSwgW2xheW91dFR5cGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCB8fFxuICAgICAgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwgfHxcbiAgICAgIG5hdlN0eWxlID09PSBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMIHx8XG4gICAgICBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0FCT1ZFX0hFQURFUiB8fFxuICAgICAgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9CRUxPV19IRUFERVIpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZnVsbC1zY3JvbGwnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbC1sYXlvdXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsLXNjcm9sbCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsLWxheW91dCcpO1xuICAgIH1cbiAgfSwgW25hdlN0eWxlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlV2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpKTtcbiAgICB9KVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgbWVzc2FnZS5lcnJvcihlcnJvci50b1N0cmluZygpKS50aGVuKHIgPT4gcik7XG4gICAgfVxuICB9LCBbZXJyb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNMb2FkaW5nVXNlcikge1xuICAgICAgaWYgKCFhdXRoVXNlciAmJiAhaXNVblJlc3RyaWN0ZWRSb3V0ZShyb3V0ZXIucGF0aG5hbWUpKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvc2lnbmluJykudGhlbihyID0+IHIpO1xuICAgICAgfSBlbHNlIGlmIChhdXRoVXNlciAmJiBpc1VuUmVzdHJpY3RlZFJvdXRlKHJvdXRlci5wYXRobmFtZSkpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKS50aGVuKHIgPT4gcik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbYXV0aFVzZXIsIGlzTG9hZGluZ1VzZXIsIHJvdXRlci5wYXRobmFtZV0pO1xuXG4gIGlmIChpc0xvYWRpbmdVc2VyKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbG9hZGVyLXZpZXdcIj5cbiAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cbiAgICA8L2Rpdj47XG4gIH1cblxuICByZXR1cm4gaXNVblJlc3RyaWN0ZWRSb3V0ZShyb3V0ZXIucGF0aG5hbWUpID8gY2hpbGRyZW4gOiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e2BneC1hcHAtbGF5b3V0YH0+XG4gICAgICA8QXBwU2lkZWJhciBuYXZTdHlsZT17bmF2U3R5bGV9Lz5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtnZXROYXZTdHlsZXMobmF2U3R5bGUpfVxuICAgICAgICA8Q29udGVudCBjbGFzc05hbWU9e2BneC1sYXlvdXQtY29udGVudCAke2dldENvbnRhaW5lckNsYXNzKG5hdlN0eWxlKX1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1haW4tY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbGF5b3V0LWZvb3Rlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgIENvcHlyaWdodCBDb21wYW55IE5hbWUgwqkge3RvZGF5LmdldEZ1bGxZZWFyKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xuXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtNZW51LCBCdXR0b259IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gXCIuLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnNcIjtcbmltcG9ydCBTaWRlYmFyTG9nbyBmcm9tIFwiLi9TaWRlYmFyTG9nb1wiO1xuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuL1VzZXJQcm9maWxlXCI7XG5pbXBvcnQgQXBwc05hdmlnYXRpb24gZnJvbSBcIi4vQXBwc05hdmlnYXRpb25cIjtcbmltcG9ydCB7XG4gIE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUixcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIsXG4gIFRIRU1FX1RZUEVfTElURVxufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtzZXRQYXRoTmFtZX0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgU3ViTWVudSA9IE1lbnUuU3ViTWVudTtcbmNvbnN0IE1lbnVJdGVtR3JvdXAgPSBNZW51Lkl0ZW1Hcm91cDtcblxuY29uc3QgU2lkZWJhckNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdlN0eWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdlN0eWxlKTtcbiAgY29uc3QgdGhlbWVUeXBlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLnRoZW1lVHlwZSk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IGdldE5vSGVhZGVyQ2xhc3MgPSAobmF2U3R5bGUpID0+IHtcbiAgICBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSIHx8IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIpIHtcbiAgICAgIHJldHVybiBcImd4LW5vLWhlYWRlci1ub3RpZmljYXRpb25zXCI7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IGdldE5hdlN0eWxlU3ViTWVudUNsYXNzID0gKG5hdlN0eWxlKSA9PiB7XG4gICAgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUikge1xuICAgICAgcmV0dXJuIFwiZ3gtbm8taGVhZGVyLXN1Ym1lbnUtcG9wdXBcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRQYXRoTmFtZShyb3V0ZXIucGF0aG5hbWUpKVxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcm91dGVyLnBhdGhuYW1lLnN1YnN0cigxKSB8fCAnZGFzaGJvYXJkJztcbiAgY29uc3QgZGVmYXVsdE9wZW5LZXlzID0gc2VsZWN0ZWRLZXlzLnNwbGl0KCcvJylbMV07XG5cbiAgY29uc29sZS5sb2coZGVmYXVsdE9wZW5LZXlzKTtcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRLZXlzKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTaWRlYmFyTG9nby8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXNpZGViYXItY29udGVudFwiPlxuICAgICAgIFxuICAgICAgIFxuICAgICAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1sYXlvdXQtc2lkZXItc2Nyb2xsYmFyXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46IFwiMHB4IDIwcHggMTJweCAyMHB4XCJ9fT5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZ3gtbWItMCBkZXNpZ24tYnV0dG9uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcIiNEM0YzNkJcIiwgYm9yZGVyOiBcIm5vbmVcIn19IGh0bWxUeXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICsgTG9yZW0gaXBzdW1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcIiNGOUZBRjVcIn19XG4gICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1tkZWZhdWx0T3BlbktleXNdfVxuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbc2VsZWN0ZWRLZXlzXX1cbiAgICAgICAgICAgIHRoZW1lPXt0aGVtZVR5cGUgPT09IFRIRU1FX1RZUEVfTElURSA/ICdsaXRlJyA6ICdkYXJrJ31cbiAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIj5cblxuICAgICAgICAgIFxuXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImRhc2hib2FyZFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPlxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi13aWRnZXRzXCIvPjxzcGFuPkRhc2hib2FyZDwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwidGVzdFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Rlc3RcIj5cbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24td2lkZ2V0c1wiLz48c3Bhbj5QYWdlIDI8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInNhbXBsZTJcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zYW1wbGUyXCI+XG4gICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXdpZGdldHNcIi8+PHNwYW4+UGFnZSAzPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJzYW1wbGUzXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2FtcGxlM1wiPlxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi13aWRnZXRzXCIvPjxzcGFuPlBhZ2UgNDwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9DdXN0b21TY3JvbGxiYXJzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGd4LXNpZGViYXItbm90aWZpY2F0aW9ucyAke2dldE5vSGVhZGVyQ2xhc3MobmF2U3R5bGUpfWB9PlxuICAgICAgICAgIDxVc2VyUHJvZmlsZS8+XG4gICAgICAgICAgey8qIDxBcHBzTmF2aWdhdGlvbi8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5TaWRlYmFyQ29udGVudC5wcm9wVHlwZXMgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJDb250ZW50O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9