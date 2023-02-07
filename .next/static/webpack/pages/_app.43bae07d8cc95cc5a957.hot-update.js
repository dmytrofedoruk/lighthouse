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
    key: "page3"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/page3"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvU2lkZWJhci9TaWRlYmFyQ29udGVudC5qcyJdLCJuYW1lcyI6WyJTdWJNZW51IiwiTWVudSIsIk1lbnVJdGVtR3JvdXAiLCJJdGVtR3JvdXAiLCJTaWRlYmFyQ29udGVudCIsIm5hdlN0eWxlIiwidXNlU2VsZWN0b3IiLCJzZXR0aW5ncyIsInRoZW1lVHlwZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXROb0hlYWRlckNsYXNzIiwiTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIiLCJOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIiLCJnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyIsInVzZUVmZmVjdCIsInNldFBhdGhOYW1lIiwicGF0aG5hbWUiLCJzZWxlY3RlZEtleXMiLCJzdWJzdHIiLCJkZWZhdWx0T3BlbktleXMiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiVEhFTUVfVFlQRV9MSVRFIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDTDtBQUNMO0FBRVE7QUFDeUI7QUFDdEI7QUFDQTtBQUNNO0FBS0w7QUFDWTtBQUNGO0FBRW5ELElBQU1BLE9BQU8sR0FBR0MseUNBQUksQ0FBQ0QsT0FBTztBQUM1QixJQUFNRSxhQUFhLEdBQUdELHlDQUFJLENBQUNFLFNBQVM7QUFFcEMsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjLEdBQVM7RUFBQTtFQUMzQixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUM7SUFBQSxJQUFFQyxRQUFRLFFBQVJBLFFBQVE7SUFBQSxPQUFNQSxRQUFRLENBQUNGLFFBQVE7RUFBQSxFQUFDO0VBQy9ELElBQU1HLFNBQVMsR0FBR0YsK0RBQVcsQ0FBQztJQUFBLElBQUVDLFFBQVEsU0FB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O0VBQVUsR0FDbkIsaUJBQUc7SUFBRyxTQUFTLEVBQUM7RUFBbUIsRUFBRSxzQkFBTSxRQUFNLENBQU8sQ0FBSSxDQUN2RCxDQUNHLENBQ1AsQ0FDVSxFQUNuQjtJQUFLLFNBQVMscUNBQThCaEIsZ0JBQWdCLENBQUNSLFFBQVEsQ0FBQztFQUFHLEdBQ3ZFLE1BQUMsb0RBQVcsT0FBRSxDQUVWLENBQ0YsQ0FDUztBQUVyQixDQUFDO0FBQUMsR0F2RklELGNBQWM7RUFBQSxRQUNERSx1REFBVyxFQUNWQSx1REFBVyxFQUVaSSx1REFBVyxFQUNiRSxxREFBUztBQUFBO0FBQUEsS0FMcEJSLGNBQWM7QUF5RnBCQSxjQUFjLENBQUMwQixTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ2QxQiw2RUFBYyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQzYmFlMDdkOGNjOTVjYzVhOTU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtNZW51LCBCdXR0b259IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gXCIuLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnNcIjtcbmltcG9ydCBTaWRlYmFyTG9nbyBmcm9tIFwiLi9TaWRlYmFyTG9nb1wiO1xuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuL1VzZXJQcm9maWxlXCI7XG5pbXBvcnQgQXBwc05hdmlnYXRpb24gZnJvbSBcIi4vQXBwc05hdmlnYXRpb25cIjtcbmltcG9ydCB7XG4gIE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUixcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIsXG4gIFRIRU1FX1RZUEVfTElURVxufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtzZXRQYXRoTmFtZX0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgU3ViTWVudSA9IE1lbnUuU3ViTWVudTtcbmNvbnN0IE1lbnVJdGVtR3JvdXAgPSBNZW51Lkl0ZW1Hcm91cDtcblxuY29uc3QgU2lkZWJhckNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdlN0eWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdlN0eWxlKTtcbiAgY29uc3QgdGhlbWVUeXBlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLnRoZW1lVHlwZSk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IGdldE5vSGVhZGVyQ2xhc3MgPSAobmF2U3R5bGUpID0+IHtcbiAgICBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSIHx8IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIpIHtcbiAgICAgIHJldHVybiBcImd4LW5vLWhlYWRlci1ub3RpZmljYXRpb25zXCI7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IGdldE5hdlN0eWxlU3ViTWVudUNsYXNzID0gKG5hdlN0eWxlKSA9PiB7XG4gICAgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUikge1xuICAgICAgcmV0dXJuIFwiZ3gtbm8taGVhZGVyLXN1Ym1lbnUtcG9wdXBcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRQYXRoTmFtZShyb3V0ZXIucGF0aG5hbWUpKVxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcm91dGVyLnBhdGhuYW1lLnN1YnN0cigxKSB8fCAnZGFzaGJvYXJkJztcbiAgY29uc3QgZGVmYXVsdE9wZW5LZXlzID0gc2VsZWN0ZWRLZXlzLnNwbGl0KCcvJylbMV07XG5cbiAgY29uc29sZS5sb2coZGVmYXVsdE9wZW5LZXlzKTtcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRLZXlzKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTaWRlYmFyTG9nby8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXNpZGViYXItY29udGVudFwiPlxuICAgICAgIFxuICAgICAgIFxuICAgICAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1sYXlvdXQtc2lkZXItc2Nyb2xsYmFyXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46IFwiMHB4IDIwcHggMTJweCAyMHB4XCJ9fT5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZ3gtbWItMCBkZXNpZ24tYnV0dG9uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcIiNEM0YzNkJcIiwgYm9yZGVyOiBcIm5vbmVcIn19IGh0bWxUeXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICsgTG9yZW0gaXBzdW1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcIiNGOUZBRjVcIn19XG4gICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1tkZWZhdWx0T3BlbktleXNdfVxuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbc2VsZWN0ZWRLZXlzXX1cbiAgICAgICAgICAgIHRoZW1lPXt0aGVtZVR5cGUgPT09IFRIRU1FX1RZUEVfTElURSA/ICdsaXRlJyA6ICdkYXJrJ31cbiAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIj5cblxuICAgICAgICAgIFxuXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImRhc2hib2FyZFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPlxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi13aWRnZXRzXCIvPjxzcGFuPkRhc2hib2FyZDwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwicGFnZTJcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlMlwiPlxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi13aWRnZXRzXCIvPjxzcGFuPlBhZ2UgMjwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwicGFnZTNcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlM1wiPlxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi13aWRnZXRzXCIvPjxzcGFuPlBhZ2UgMzwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2FtcGxlM1wiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NhbXBsZTNcIj5cbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24td2lkZ2V0c1wiLz48c3Bhbj5QYWdlIDQ8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BneC1zaWRlYmFyLW5vdGlmaWNhdGlvbnMgJHtnZXROb0hlYWRlckNsYXNzKG5hdlN0eWxlKX1gfT5cbiAgICAgICAgICA8VXNlclByb2ZpbGUvPlxuICAgICAgICAgIHsvKiA8QXBwc05hdmlnYXRpb24vPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuU2lkZWJhckNvbnRlbnQucHJvcFR5cGVzID0ge307XG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyQ29udGVudDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==