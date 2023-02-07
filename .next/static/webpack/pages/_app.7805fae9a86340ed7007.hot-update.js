webpackHotUpdate_N_E("pages/_app",{

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
    key: "page2"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/page2"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "Page 2")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "pag"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/pag"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvU2lkZWJhci9TaWRlYmFyQ29udGVudC5qcyJdLCJuYW1lcyI6WyJTdWJNZW51IiwiTWVudSIsIk1lbnVJdGVtR3JvdXAiLCJJdGVtR3JvdXAiLCJTaWRlYmFyQ29udGVudCIsIm5hdlN0eWxlIiwidXNlU2VsZWN0b3IiLCJzZXR0aW5ncyIsInRoZW1lVHlwZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXROb0hlYWRlckNsYXNzIiwiTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIiLCJOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIiLCJnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyIsInVzZUVmZmVjdCIsInNldFBhdGhOYW1lIiwicGF0aG5hbWUiLCJzZWxlY3RlZEtleXMiLCJzdWJzdHIiLCJkZWZhdWx0T3BlbktleXMiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiVEhFTUVfVFlQRV9MSVRFIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDTDtBQUNMO0FBRVE7QUFDeUI7QUFDdEI7QUFDQTtBQUNNO0FBS0w7QUFDWTtBQUNGO0FBRW5ELElBQU1BLE9BQU8sR0FBR0MseUNBQUksQ0FBQ0QsT0FBTztBQUM1QixJQUFNRSxhQUFhLEdBQUdELHlDQUFJLENBQUNFLFNBQVM7QUFFcEMsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjLEdBQVM7RUFBQTtFQUMzQixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUM7SUFBQSxJQUFFQyxRQUFRLFFBQVJBLFFBQVE7SUFBQSxPQUFNQSxRQUFRLENBQUNGLFFBQVE7RUFBQSxFQUFDO0VBQy9ELElBQU1HLFNBQVMsR0FBR0YsK0RBQVcsQ0FBQztJQUFBLElBQUVDLFFBQVEsU0FB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RUFBVSxHQUNuQixpQkFBRztJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFFLHNCQUFNLFFBQU0sQ0FBTyxDQUFJLENBQ3ZELENBQ0csQ0FDUCxDQUNVLEVBQ25CO0lBQUssU0FBUyxxQ0FBOEJoQixnQkFBZ0IsQ0FBQ1IsUUFBUSxDQUFDO0VBQUcsR0FDdkUsTUFBQyxvREFBVyxPQUFFLENBRVYsQ0FDRixDQUNTO0FBRXJCLENBQUM7QUFBQyxHQXZGSUQsY0FBYztFQUFBLFFBQ0RFLHVEQUFXLEVBQ1ZBLHVEQUFXLEVBRVpJLHVEQUFXLEVBQ2JFLHFEQUFTO0FBQUE7QUFBQSxLQUxwQlIsY0FBYztBQXlGcEJBLGNBQWMsQ0FBQzBCLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDZDFCLDZFQUFjLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzgwNWZhZTlhODYzNDBlZDcwMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge01lbnUsIEJ1dHRvbn0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xuaW1wb3J0IFNpZGViYXJMb2dvIGZyb20gXCIuL1NpZGViYXJMb2dvXCI7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcbmltcG9ydCBBcHBzTmF2aWdhdGlvbiBmcm9tIFwiLi9BcHBzTmF2aWdhdGlvblwiO1xuaW1wb3J0IHtcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxuICBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUixcbiAgVEhFTUVfVFlQRV9MSVRFXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge3NldFBhdGhOYW1lfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBTdWJNZW51ID0gTWVudS5TdWJNZW51O1xuY29uc3QgTWVudUl0ZW1Hcm91cCA9IE1lbnUuSXRlbUdyb3VwO1xuXG5jb25zdCBTaWRlYmFyQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgbmF2U3R5bGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2U3R5bGUpO1xuICBjb25zdCB0aGVtZVR5cGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MudGhlbWVUeXBlKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgZ2V0Tm9IZWFkZXJDbGFzcyA9IChuYXZTdHlsZSkgPT4ge1xuICAgIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIgfHwgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUikge1xuICAgICAgcmV0dXJuIFwiZ3gtbm8taGVhZGVyLW5vdGlmaWNhdGlvbnNcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MgPSAobmF2U3R5bGUpID0+IHtcbiAgICBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSKSB7XG4gICAgICByZXR1cm4gXCJneC1uby1oZWFkZXItc3VibWVudS1wb3B1cFwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldFBhdGhOYW1lKHJvdXRlci5wYXRobmFtZSkpXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcblxuICBjb25zdCBzZWxlY3RlZEtleXMgPSByb3V0ZXIucGF0aG5hbWUuc3Vic3RyKDEpIHx8ICdkYXNoYm9hcmQnO1xuICBjb25zdCBkZWZhdWx0T3BlbktleXMgPSBzZWxlY3RlZEtleXMuc3BsaXQoJy8nKVsxXTtcblxuICBjb25zb2xlLmxvZyhkZWZhdWx0T3BlbktleXMpO1xuICBjb25zb2xlLmxvZyhzZWxlY3RlZEtleXMpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNpZGViYXJMb2dvLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2lkZWJhci1jb250ZW50XCI+XG4gICAgICAgXG4gICAgICAgXG4gICAgICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LWxheW91dC1zaWRlci1zY3JvbGxiYXJcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogXCIwcHggMjBweCAxMnB4IDIwcHhcIn19PlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wIGRlc2lnbi1idXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0QzRjM2QlwiLCBib3JkZXI6IFwibm9uZVwifX0gaHRtbFR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgKyBMb3JlbSBpcHN1bVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmQ6IFwiI0Y5RkFGNVwifX1cbiAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17W2RlZmF1bHRPcGVuS2V5c119XG4gICAgICAgICAgICBzZWxlY3RlZEtleXM9e1tzZWxlY3RlZEtleXNdfVxuICAgICAgICAgICAgdGhlbWU9e3RoZW1lVHlwZSA9PT0gVEhFTUVfVFlQRV9MSVRFID8gJ2xpdGUnIDogJ2RhcmsnfVxuICAgICAgICAgICAgbW9kZT1cImlubGluZVwiPlxuXG4gICAgICAgICAgXG5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXdpZGdldHNcIi8+PHNwYW4+RGFzaGJvYXJkPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJwYWdlMlwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BhZ2UyXCI+XG4gICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXdpZGdldHNcIi8+PHNwYW4+UGFnZSAyPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJwYWdcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdcIj5cbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24td2lkZ2V0c1wiLz48c3Bhbj5QYWdlIDM8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInNhbXBsZTNcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zYW1wbGUzXCI+XG4gICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXdpZGdldHNcIi8+PHNwYW4+UGFnZSA0PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L0N1c3RvbVNjcm9sbGJhcnM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3gtc2lkZWJhci1ub3RpZmljYXRpb25zICR7Z2V0Tm9IZWFkZXJDbGFzcyhuYXZTdHlsZSl9YH0+XG4gICAgICAgICAgPFVzZXJQcm9maWxlLz5cbiAgICAgICAgICB7LyogPEFwcHNOYXZpZ2F0aW9uLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cblNpZGViYXJDb250ZW50LnByb3BUeXBlcyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckNvbnRlbnQ7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=