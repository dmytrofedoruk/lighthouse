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

  // console.log(defaultOpenKeys);
  // console.log(selectedKeys);

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
    key: "user-management"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/user-management"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "User Management")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "page3"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/page3"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, "Page 3")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "page4"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/page4"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvcmUvU2lkZWJhci9TaWRlYmFyQ29udGVudC5qcyJdLCJuYW1lcyI6WyJTdWJNZW51IiwiTWVudSIsIk1lbnVJdGVtR3JvdXAiLCJJdGVtR3JvdXAiLCJTaWRlYmFyQ29udGVudCIsIm5hdlN0eWxlIiwidXNlU2VsZWN0b3IiLCJzZXR0aW5ncyIsInRoZW1lVHlwZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXROb0hlYWRlckNsYXNzIiwiTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIiLCJOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIiLCJnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyIsInVzZUVmZmVjdCIsInNldFBhdGhOYW1lIiwicGF0aG5hbWUiLCJzZWxlY3RlZEtleXMiLCJzdWJzdHIiLCJkZWZhdWx0T3BlbktleXMiLCJzcGxpdCIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJib3JkZXIiLCJUSEVNRV9UWVBFX0xJVEUiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNMO0FBQ0w7QUFFUTtBQUN5QjtBQUN0QjtBQUNBO0FBQ007QUFLTDtBQUNZO0FBQ0Y7QUFFbkQsSUFBTUEsT0FBTyxHQUFHQyx5Q0FBSSxDQUFDRCxPQUFPO0FBQzVCLElBQU1FLGFBQWEsR0FBR0QseUNBQUksQ0FBQ0UsU0FBUztBQUVwQyxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsR0FBUztFQUFBO0VBQzNCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQztJQUFBLElBQUVDLFFBQVEsUUFBUkEsUUFBUTtJQUFBLE9BQU1BLFFBQVEsQ0FBQ0YsUUFBUTtFQUFBLEVBQUM7RUFDL0QsSUFBTUcsU0FBUyxHQUFHRiwrREFBVyxDQUFDO0lBQUEsSUFBRUMsUUFBUSxTQUFSQSxRQUFRO0lBQUEsT0FBTUEsUUFBUSxDQUFDQyxTQUFTO0VBQUEsRUFBQztFQUVqRSxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFDOUIsSUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUFFO0VBRTFCLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0IsQ0FBSVIsUUFBUSxFQUFLO0lBQ3JDLElBQUlBLFFBQVEsS0FBS1Msd0ZBQWdDLElBQUlULFFBQVEsS0FBS1UsNEZBQW9DLEVBQUU7TUFDdEcsT0FBTyw0QkFBNEI7SUFDckM7SUFDQSxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBRUQsSUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUF1QixDQUFJWCxRQUFRLEVBQUs7SUFDNUMsSUFBSUEsUUFBUSxLQUFLUyx3RkFBZ0MsRUFBRTtNQUNqRCxPQUFPLDRCQUE0QjtJQUNyQztJQUNBLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFFREcsdURBQVMsQ0FBQyxZQUFNO0lBQ2RSLFFBQVEsQ0FBQ1MsbUVBQVcsQ0FBQ1AsTUFBTSxDQUFDUSxRQUFRLENBQUMsQ0FBQztFQUN4QyxDQUFDLEVBQUUsQ0FBQ1IsTUFBTSxDQUFDUSxRQUFRLENBQUMsQ0FBQztFQUVyQixJQUFNQyxZQUFZLEdBQUdULE1BQU0sQ0FBQ1EsUUFBUSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVztFQUM3RCxJQUFNQyxlQUFlLEdBQUdGLFlBQVksQ0FBQ0csS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7RUFFbEQ7RUFDQTs7RUFFQSxPQUNFLE1BQUMsNENBQUssQ0FBQyxRQUFRLFFBQ2IsTUFBQyxvREFBVyxPQUFFLEVBQ2Q7SUFBSyxTQUFTLEVBQUM7RUFBb0IsR0FHakMsTUFBQyw4REFBZ0I7SUFBQyxTQUFTLEVBQUM7RUFBMkIsR0FDdkQ7SUFBSyxLQUFLLEVBQUU7TUFBQ0MsTUFBTSxFQUFFO0lBQW9CO0VBQUUsR0FDdkMsTUFBQywyQ0FBTTtJQUFDLFNBQVMsRUFBQyx1QkFBdUI7SUFBQyxLQUFLLEVBQUU7TUFBQ0MsVUFBVSxFQUFFLFNBQVM7TUFBRUMsTUFBTSxFQUFFO0lBQU0sQ0FBRTtJQUFDLFFBQVEsRUFBQztFQUFRLEdBQUMsZUFFNUcsQ0FBUyxDQUNMLEVBQ04sTUFBQyx5Q0FBSTtJQUNMLEtBQUssRUFBRTtNQUFDRCxVQUFVLEVBQUU7SUFBUyxDQUFFO0lBQzdCLGVBQWUsRUFBRSxDQUFDSCxlQUFlLENBQUU7SUFDbkMsWUFBWSxFQUFFLENBQUNGLFlBQVksQ0FBRTtJQUM3QixLQUFLLEVBQUVaLFNBQVMsS0FBS21CLHVFQUFlLEdBQUcsTUFBTSxHQUFHLE1BQU87SUFDdkQsSUFBSSxFQUFDO0VBQVEsR0FJYixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFDLEdBQUcsRUFBQztFQUFXLEdBQ3hCLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUM7RUFBWSxHQUNyQixpQkFBRztJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFFLHNCQUFNLFdBQVMsQ0FBTyxDQUFJLENBQzFELENBQ0csRUFHWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFDLEdBQUcsRUFBQztFQUFpQixHQUM5QixNQUFDLGdEQUFJO0lBQUMsSUFBSSxFQUFDO0VBQWtCLEdBQzNCLGlCQUFHO0lBQUcsU0FBUyxFQUFDO0VBQW1CLEVBQUUsc0JBQU0saUJBQWUsQ0FBTyxDQUFJLENBQ2hFLENBQ0csRUFHWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFDLEdBQUcsRUFBQztFQUFPLEdBQ3BCLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUM7RUFBUSxHQUNqQixpQkFBRztJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFFLHNCQUFNLFFBQU0sQ0FBTyxDQUFJLENBQ3ZELENBQ0csRUFHWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFDLEdBQUcsRUFBQztFQUFPLEdBQ3BCLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUM7RUFBUSxHQUNqQixpQkFBRztJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFFLHNCQUFNLFFBQU0sQ0FBTyxDQUFJLENBQ3ZELENBQ0csQ0FDUCxDQUNVLEVBQ25CO0lBQUssU0FBUyxxQ0FBOEJkLGdCQUFnQixDQUFDUixRQUFRLENBQUM7RUFBRyxHQUN2RSxNQUFDLG9EQUFXLE9BQUUsQ0FFVixDQUNGLENBQ1M7QUFFckIsQ0FBQztBQUFDLEdBdkZJRCxjQUFjO0VBQUEsUUFDREUsdURBQVcsRUFDVkEsdURBQVcsRUFFWkksdURBQVcsRUFDYkUscURBQVM7QUFBQTtBQUFBLEtBTHBCUixjQUFjO0FBeUZwQkEsY0FBYyxDQUFDd0IsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNkeEIsNkVBQWMsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNWVkMTY2ZDMzYjgwNjU1Y2M0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TWVudSwgQnV0dG9ufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XG5pbXBvcnQgU2lkZWJhckxvZ28gZnJvbSBcIi4vU2lkZWJhckxvZ29cIjtcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xuaW1wb3J0IEFwcHNOYXZpZ2F0aW9uIGZyb20gXCIuL0FwcHNOYXZpZ2F0aW9uXCI7XG5pbXBvcnQge1xuICBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIsXG4gIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSLFxuICBUSEVNRV9UWVBFX0xJVEVcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7c2V0UGF0aE5hbWV9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNvbnN0IFN1Yk1lbnUgPSBNZW51LlN1Yk1lbnU7XG5jb25zdCBNZW51SXRlbUdyb3VwID0gTWVudS5JdGVtR3JvdXA7XG5cbmNvbnN0IFNpZGViYXJDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBuYXZTdHlsZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZTdHlsZSk7XG4gIGNvbnN0IHRoZW1lVHlwZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy50aGVtZVR5cGUpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBnZXROb0hlYWRlckNsYXNzID0gKG5hdlN0eWxlKSA9PiB7XG4gICAgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUiB8fCBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSKSB7XG4gICAgICByZXR1cm4gXCJneC1uby1oZWFkZXItbm90aWZpY2F0aW9uc1wiO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcblxuICBjb25zdCBnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyA9IChuYXZTdHlsZSkgPT4ge1xuICAgIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIpIHtcbiAgICAgIHJldHVybiBcImd4LW5vLWhlYWRlci1zdWJtZW51LXBvcHVwXCI7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0UGF0aE5hbWUocm91dGVyLnBhdGhuYW1lKSlcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xuXG4gIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHJvdXRlci5wYXRobmFtZS5zdWJzdHIoMSkgfHwgJ2Rhc2hib2FyZCc7XG4gIGNvbnN0IGRlZmF1bHRPcGVuS2V5cyA9IHNlbGVjdGVkS2V5cy5zcGxpdCgnLycpWzFdO1xuXG4gIC8vIGNvbnNvbGUubG9nKGRlZmF1bHRPcGVuS2V5cyk7XG4gIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkS2V5cyk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U2lkZWJhckxvZ28vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1zaWRlYmFyLWNvbnRlbnRcIj5cbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtbGF5b3V0LXNpZGVyLXNjcm9sbGJhclwiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiBcIjBweCAyMHB4IDEycHggMjBweFwifX0+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTAgZGVzaWduLWJ1dHRvblwiIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjRDNGMzZCXCIsIGJvcmRlcjogXCJub25lXCJ9fSBodG1sVHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICArIExvcmVtIGlwc3VtXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjRjlGQUY1XCJ9fVxuICAgICAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbZGVmYXVsdE9wZW5LZXlzXX1cbiAgICAgICAgICAgIHNlbGVjdGVkS2V5cz17W3NlbGVjdGVkS2V5c119XG4gICAgICAgICAgICB0aGVtZT17dGhlbWVUeXBlID09PSBUSEVNRV9UWVBFX0xJVEUgPyAnbGl0ZScgOiAnZGFyayd9XG4gICAgICAgICAgICBtb2RlPVwiaW5saW5lXCI+XG5cbiAgICAgICAgICBcblxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJkYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24td2lkZ2V0c1wiLz48c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInVzZXItbWFuYWdlbWVudFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXItbWFuYWdlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi13aWRnZXRzXCIvPjxzcGFuPlVzZXIgTWFuYWdlbWVudDwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwicGFnZTNcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlM1wiPlxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi13aWRnZXRzXCIvPjxzcGFuPlBhZ2UgMzwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwicGFnZTRcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlNFwiPlxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi13aWRnZXRzXCIvPjxzcGFuPlBhZ2UgNDwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9DdXN0b21TY3JvbGxiYXJzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGd4LXNpZGViYXItbm90aWZpY2F0aW9ucyAke2dldE5vSGVhZGVyQ2xhc3MobmF2U3R5bGUpfWB9PlxuICAgICAgICAgIDxVc2VyUHJvZmlsZS8+XG4gICAgICAgICAgey8qIDxBcHBzTmF2aWdhdGlvbi8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5TaWRlYmFyQ29udGVudC5wcm9wVHlwZXMgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJDb250ZW50O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9