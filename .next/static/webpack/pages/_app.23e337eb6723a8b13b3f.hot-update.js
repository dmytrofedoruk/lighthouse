webpackHotUpdate_N_E("pages/_app",{

/***/ "./util/use-auth.js":
/*!**************************!*\
  !*** ./util/use-auth.js ***!
  \**************************/
/*! exports provided: AuthProvider, useAuth, isUnRestrictedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnRestrictedRoute", function() { return isUnRestrictedRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api */ "./util/Api.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
var _s = $RefreshSig$(),
  _s2 = $RefreshSig$(),
  _s3 = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

// Provider component that wraps app and makes auth object ..
// ... available to any child component that calls useAuth().

function AuthProvider(_ref) {
  _s();
  var children = _ref.children;
  var auth = useProvideAuth();
  return __jsx(authContext.Provider, {
    value: auth
  }, children);
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
_s(AuthProvider, "XNU4Jn8u4aVzJknlKOHFJq03xMo=", false, function () {
  return [useProvideAuth];
});
_c = AuthProvider;
var useAuth = function useAuth() {
  _s2();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(authContext);
};
_s2(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var useProvideAuth = function useProvideAuth() {
  _s3();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    authUser = _useState[0],
    setAuthUser = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
    isLoadingUser = _useState2[0],
    setLoadingUser = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    isLoading = _useState3[0],
    setLoading = _useState3[1];
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    error = _useState4[0],
    setError = _useState4[1];
  var fetchStart = function fetchStart() {
    setLoading(true);
    setError('');
  };
  var fetchSuccess = function fetchSuccess() {
    setLoading(false);
    setError('');
  };
  var fetchError = function fetchError(error) {
    setLoading(false);
    setError(error);
  };
  var userLogin = function userLogin(data, callbackFun) {
    fetchStart();
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post('login', data).then(function (_ref2) {
      var data = _ref2.data;
      if (data) {
        fetchSuccess();
        _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
        var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
        cookies.set('token', data.token);
        getAuthUser();
        console.log(callbackFun);
        if (callbackFun) callbackFun();
      } else {
        fetchError(data.error);
      }
    })["catch"](function (error) {
      fetchError(error.message);
    });
  };
  var userSignup = function userSignup(data, callbackFun) {
    fetchStart();
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post('auth/register', data).then(function (_ref3) {
      var data = _ref3.data;
      if (data.result) {
        fetchSuccess();
        _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;
        var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
        cookies.set('token', data.token.access_token);
        if (callbackFun) callbackFun();
      } else {
        fetchError(data.error);
      }
    })["catch"](function (error) {
      fetchError(error.message);
    });
  };
  var userSignOut = function userSignOut(callbackFun) {
    fetchStart();
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post('auth/logout').then(function (_ref4) {
      var data = _ref4.data;
      if (data.result) {
        fetchSuccess();
        setAuthUser(false);
        _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = '';
        var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
        cookies.remove('token');
        if (callbackFun) callbackFun();
      } else {
        fetchError(data.error);
      }
    })["catch"](function (error) {
      fetchError(error.message);
    });
  };
  var getAuthUser = function getAuthUser() {
    fetchStart();
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post("me").then(function (_ref5) {
      var data = _ref5.data;
      if (data.user) {
        fetchSuccess();
        setAuthUser(data.user);
      } else {
        fetchError(data.error);
      }
    })["catch"](function (error) {
      _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = '';
      fetchError(error.message);
    });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
    var token = cookies.get("token");
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = 'Bearer ' + token;
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post("auth/me").then(function (_ref6) {
      var data = _ref6.data;
      if (data.user) {
        setAuthUser(data.user);
      }
      setLoadingUser(false);
    })["catch"](function (error) {
      cookies.remove('token');
      _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = '';
      setLoadingUser(false);
    });
  }, []);

  // Return the user object and auth methods
  return {
    isLoadingUser: isLoadingUser,
    isLoading: isLoading,
    authUser: authUser,
    error: error,
    setAuthUser: setAuthUser,
    getAuthUser: getAuthUser,
    userLogin: userLogin,
    userSignup: userSignup,
    userSignOut: userSignOut
  };
};
_s3(useProvideAuth, "661ftY5PjkpjamoRde4e7mP5Gco=");
var isUnRestrictedRoute = function isUnRestrictedRoute(pathname) {
  return pathname === '/signin' || pathname === '/signup' || pathname === '/forgot-password' || pathname === '/reset-password';
};
var _c;
$RefreshReg$(_c, "AuthProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC91c2UtYXV0aC5qcyJdLCJuYW1lcyI6WyJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJhdXRoVXNlciIsInNldEF1dGhVc2VyIiwiaXNMb2FkaW5nVXNlciIsInNldExvYWRpbmdVc2VyIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaFN0YXJ0IiwiZmV0Y2hTdWNjZXNzIiwiZmV0Y2hFcnJvciIsInVzZXJMb2dpbiIsImRhdGEiLCJjYWxsYmFja0Z1biIsImh0dHBDbGllbnQiLCJwb3N0IiwidGhlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInRva2VuIiwiY29va2llcyIsIkNvb2tpZXMiLCJzZXQiLCJnZXRBdXRoVXNlciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwidXNlclNpZ251cCIsInJlc3VsdCIsImFjY2Vzc190b2tlbiIsInVzZXJTaWduT3V0IiwicmVtb3ZlIiwidXNlciIsInVzZUVmZmVjdCIsImdldCIsImlzVW5SZXN0cmljdGVkUm91dGUiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RTtBQUMzQztBQUNJO0FBRXJDLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXJDO0FBQ0E7O0FBRU8sU0FBU0MsWUFBWSxPQUFhO0VBQUE7RUFBQSxJQUFYQyxRQUFRLFFBQVJBLFFBQVE7RUFDcEMsSUFBTUMsSUFBSSxHQUFHQyxjQUFjLEVBQUU7RUFDN0IsT0FBTyxNQUFDLFdBQVcsQ0FBQyxRQUFRO0lBQUMsS0FBSyxFQUFFRDtFQUFLLEdBQUVELFFBQVEsQ0FBd0I7QUFDN0U7O0FBRUE7QUFDQTtBQUFBLEdBTmdCRCxZQUFZO0VBQUEsUUFDYkcsY0FBYztBQUFBO0FBQUEsS0FEYkgsWUFBWTtBQVFyQixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBTyxHQUFTO0VBQUE7RUFDM0IsT0FBT0Msd0RBQVUsQ0FBQ1AsV0FBVyxDQUFDO0FBQ2hDLENBQUM7QUFBQyxJQUZXTSxPQUFPO0FBSXBCLElBQU1ELGNBQWMsR0FBRyxTQUFqQkEsY0FBYyxHQUFTO0VBQUE7RUFDM0IsZ0JBQWdDRyxzREFBUSxDQUFDLElBQUksQ0FBQztJQUF2Q0MsUUFBUTtJQUFFQyxXQUFXO0VBQzVCLGlCQUF3Q0Ysc0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBL0NHLGFBQWE7SUFBRUMsY0FBYztFQUNwQyxpQkFBZ0NKLHNEQUFRLENBQUMsS0FBSyxDQUFDO0lBQXhDSyxTQUFTO0lBQUVDLFVBQVU7RUFDNUIsaUJBQTBCTixzREFBUSxDQUFDLEVBQUUsQ0FBQztJQUEvQk8sS0FBSztJQUFFQyxRQUFRO0VBRXRCLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQVM7SUFDdkJILFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDaEJFLFFBQVEsQ0FBQyxFQUFFLENBQUM7RUFDZCxDQUFDO0VBRUQsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVksR0FBUztJQUN6QkosVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNqQkUsUUFBUSxDQUFDLEVBQUUsQ0FBQztFQUNkLENBQUM7RUFFRCxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVSxDQUFJSixLQUFLLEVBQUs7SUFDNUJELFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDakJFLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO0VBQ2pCLENBQUM7RUFFRCxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBUyxDQUFJQyxJQUFJLEVBQUVDLFdBQVcsRUFBSztJQUN2Q0wsVUFBVSxFQUFFO0lBQ1pNLCtDQUFVLENBQUNDLElBQUksQ0FBQyxPQUFPLEVBQUVILElBQUksQ0FBQyxDQUMzQkksSUFBSSxDQUFDLGlCQUFZO01BQUEsSUFBVkosSUFBSSxTQUFKQSxJQUFJO01BQ1YsSUFBSUEsSUFBSSxFQUFFO1FBQ1JILFlBQVksRUFBRTtRQUNkSywrQ0FBVSxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsR0FBR1AsSUFBSSxDQUFDUSxLQUFLO1FBQzVFLElBQU1DLE9BQU8sR0FBRyxJQUFJQyxvREFBTyxFQUFFO1FBQzdCRCxPQUFPLENBQUNFLEdBQUcsQ0FBQyxPQUFPLEVBQUVYLElBQUksQ0FBQ1EsS0FBSyxDQUFDO1FBQ2hDSSxXQUFXLEVBQUU7UUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUNiLFdBQVcsQ0FBQztRQUN4QixJQUFJQSxXQUFXLEVBQUVBLFdBQVcsRUFBRTtNQUNoQyxDQUFDLE1BQU07UUFDTEgsVUFBVSxDQUFDRSxJQUFJLENBQUNOLEtBQUssQ0FBQztNQUN4QjtJQUNGLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBVUEsS0FBSyxFQUFFO01BQ3RCSSxVQUFVLENBQUNKLEtBQUssQ0FBQ3FCLE9BQU8sQ0FBQztJQUMzQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBSWhCLElBQUksRUFBRUMsV0FBVyxFQUFLO0lBQ3hDTCxVQUFVLEVBQUU7SUFDWk0sK0NBQVUsQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRUgsSUFBSSxDQUFDLENBQ25DSSxJQUFJLENBQUMsaUJBQVk7TUFBQSxJQUFWSixJQUFJLFNBQUpBLElBQUk7TUFDVixJQUFJQSxJQUFJLENBQUNpQixNQUFNLEVBQUU7UUFDZnBCLFlBQVksRUFBRTtRQUNkSywrQ0FBVSxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsR0FBR1AsSUFBSSxDQUFDUSxLQUFLLENBQUNVLFlBQVk7UUFDekYsSUFBTVQsT0FBTyxHQUFHLElBQUlDLG9EQUFPLEVBQUU7UUFDN0JELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLE9BQU8sRUFBRVgsSUFBSSxDQUFDUSxLQUFLLENBQUNVLFlBQVksQ0FBQztRQUM3QyxJQUFJakIsV0FBVyxFQUFFQSxXQUFXLEVBQUU7TUFDaEMsQ0FBQyxNQUFNO1FBQ0xILFVBQVUsQ0FBQ0UsSUFBSSxDQUFDTixLQUFLLENBQUM7TUFDeEI7SUFDRixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQVVBLEtBQUssRUFBRTtNQUN0QkksVUFBVSxDQUFDSixLQUFLLENBQUNxQixPQUFPLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXLENBQUlsQixXQUFXLEVBQUs7SUFDbkNMLFVBQVUsRUFBRTtJQUNaTSwrQ0FBVSxDQUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQzNCQyxJQUFJLENBQUMsaUJBQVk7TUFBQSxJQUFWSixJQUFJLFNBQUpBLElBQUk7TUFDVixJQUFJQSxJQUFJLENBQUNpQixNQUFNLEVBQUU7UUFDZnBCLFlBQVksRUFBRTtRQUNkUixXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2xCYSwrQ0FBVSxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUU7UUFDeEQsSUFBTUUsT0FBTyxHQUFHLElBQUlDLG9EQUFPLEVBQUU7UUFDN0JELE9BQU8sQ0FBQ1csTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN2QixJQUFJbkIsV0FBVyxFQUFFQSxXQUFXLEVBQUU7TUFDaEMsQ0FBQyxNQUFNO1FBQ0xILFVBQVUsQ0FBQ0UsSUFBSSxDQUFDTixLQUFLLENBQUM7TUFDeEI7SUFDRixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQVVBLEtBQUssRUFBRTtNQUN0QkksVUFBVSxDQUFDSixLQUFLLENBQUNxQixPQUFPLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU1ILFdBQVcsR0FBRyxTQUFkQSxXQUFXLEdBQVM7SUFDeEJoQixVQUFVLEVBQUU7SUFDWk0sK0NBQVUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsaUJBQVk7TUFBQSxJQUFWSixJQUFJLFNBQUpBLElBQUk7TUFDL0IsSUFBSUEsSUFBSSxDQUFDcUIsSUFBSSxFQUFFO1FBQ2J4QixZQUFZLEVBQUU7UUFDZFIsV0FBVyxDQUFDVyxJQUFJLENBQUNxQixJQUFJLENBQUM7TUFDeEIsQ0FBQyxNQUFNO1FBQ0x2QixVQUFVLENBQUNFLElBQUksQ0FBQ04sS0FBSyxDQUFDO01BQ3hCO0lBQ0YsQ0FBQyxDQUFDLFNBQU0sQ0FBQyxVQUFVQSxLQUFLLEVBQUU7TUFDeEJRLCtDQUFVLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRTtNQUN4RFQsVUFBVSxDQUFDSixLQUFLLENBQUNxQixPQUFPLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0VBQ0osQ0FBQzs7RUFFRDtFQUNBO0VBQ0E7RUFDQTs7RUFFQU8sdURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTWIsT0FBTyxHQUFHLElBQUlDLG9EQUFPLEVBQUU7SUFDN0IsSUFBTUYsS0FBSyxHQUFHQyxPQUFPLENBQUNjLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDbENyQiwrQ0FBVSxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsR0FBR0MsS0FBSztJQUV2RU4sK0NBQVUsQ0FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsaUJBQVk7TUFBQSxJQUFWSixJQUFJLFNBQUpBLElBQUk7TUFDcEMsSUFBSUEsSUFBSSxDQUFDcUIsSUFBSSxFQUFFO1FBQ2JoQyxXQUFXLENBQUNXLElBQUksQ0FBQ3FCLElBQUksQ0FBQztNQUN4QjtNQUNBOUIsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUN2QixDQUFDLENBQUMsU0FBTSxDQUFDLFVBQVVHLEtBQUssRUFBRTtNQUN4QmUsT0FBTyxDQUFDVyxNQUFNLENBQUMsT0FBTyxDQUFDO01BQ3ZCbEIsK0NBQVUsQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFO01BQ3hEaEIsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUN2QixDQUFDLENBQUM7RUFDSixDQUFDLEVBQUUsRUFBRSxDQUNOOztFQUVEO0VBQ0EsT0FBTztJQUNMRCxhQUFhLEVBQWJBLGFBQWE7SUFDYkUsU0FBUyxFQUFUQSxTQUFTO0lBQ1RKLFFBQVEsRUFBUkEsUUFBUTtJQUNSTSxLQUFLLEVBQUxBLEtBQUs7SUFDTEwsV0FBVyxFQUFYQSxXQUFXO0lBQ1h1QixXQUFXLEVBQVhBLFdBQVc7SUFDWGIsU0FBUyxFQUFUQSxTQUFTO0lBQ1RpQixVQUFVLEVBQVZBLFVBQVU7SUFDVkcsV0FBVyxFQUFYQTtFQUNGLENBQUM7QUFDSCxDQUFDO0FBQUEsSUFuSUtuQyxjQUFjO0FBcUliLElBQU13QyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CLENBQUlDLFFBQVEsRUFBSztFQUMvQyxPQUFPQSxRQUFRLEtBQUssU0FBUyxJQUFJQSxRQUFRLEtBQUssU0FBUyxJQUFJQSxRQUFRLEtBQUssa0JBQWtCLElBQUlBLFFBQVEsS0FBSyxpQkFBaUI7QUFDOUgsQ0FBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yM2UzMzdlYjY3MjNhOGIxM2IzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2h0dHBDbGllbnR9IGZyb20gXCIuL0FwaVwiO1xuaW1wb3J0IHtDb29raWVzfSBmcm9tIFwicmVhY3QtY29va2llXCI7XG5cbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5cbi8vIFByb3ZpZGVyIGNvbXBvbmVudCB0aGF0IHdyYXBzIGFwcCBhbmQgbWFrZXMgYXV0aCBvYmplY3QgLi5cbi8vIC4uLiBhdmFpbGFibGUgdG8gYW55IGNoaWxkIGNvbXBvbmVudCB0aGF0IGNhbGxzIHVzZUF1dGgoKS5cblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7Y2hpbGRyZW59KSB7XG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbi8vIEhvb2sgZm9yIGNoaWxkIGNvbXBvbmVudHMgdG8gZ2V0IHRoZSBhdXRoIG9iamVjdCAuLi5cbi8vIC4uLiBhbmQgcmUtcmVuZGVyIHdoZW4gaXQgY2hhbmdlcy5cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcbn07XG5cbmNvbnN0IHVzZVByb3ZpZGVBdXRoID0gKCkgPT4ge1xuICBjb25zdCBbYXV0aFVzZXIsIHNldEF1dGhVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nVXNlciwgc2V0TG9hZGluZ1VzZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBmZXRjaFN0YXJ0ID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IoJycpO1xuICB9XG5cbiAgY29uc3QgZmV0Y2hTdWNjZXNzID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIHNldEVycm9yKCcnKTtcbiAgfVxuXG4gIGNvbnN0IGZldGNoRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBzZXRFcnJvcihlcnJvcik7XG4gIH1cblxuICBjb25zdCB1c2VyTG9naW4gPSAoZGF0YSwgY2FsbGJhY2tGdW4pID0+IHtcbiAgICBmZXRjaFN0YXJ0KCk7XG4gICAgaHR0cENsaWVudC5wb3N0KCdsb2dpbicsIGRhdGEpXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgZGF0YS50b2tlbjtcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuKTtcbiAgICAgICAgICBnZXRBdXRoVXNlcigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNhbGxiYWNrRnVuKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIGNhbGxiYWNrRnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVzZXJTaWdudXAgPSAoZGF0YSwgY2FsbGJhY2tGdW4pID0+IHtcbiAgICBmZXRjaFN0YXJ0KCk7XG4gICAgaHR0cENsaWVudC5wb3N0KCdhdXRoL3JlZ2lzdGVyJywgZGF0YSlcbiAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgZGF0YS50b2tlbi5hY2Nlc3NfdG9rZW47XG4gICAgICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICAgICAgY29va2llcy5zZXQoJ3Rva2VuJywgZGF0YS50b2tlbi5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgIGlmIChjYWxsYmFja0Z1bikgY2FsbGJhY2tGdW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXNlclNpZ25PdXQgPSAoY2FsbGJhY2tGdW4pID0+IHtcbiAgICBmZXRjaFN0YXJ0KCk7XG4gICAgaHR0cENsaWVudC5wb3N0KCdhdXRoL2xvZ291dCcpXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xuICAgICAgICAgIHNldEF1dGhVc2VyKGZhbHNlKTtcbiAgICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnJztcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgICAgICBjb29raWVzLnJlbW92ZSgndG9rZW4nKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIGNhbGxiYWNrRnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldEF1dGhVc2VyID0gKCkgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoXCJtZVwiKS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgIGlmIChkYXRhLnVzZXIpIHtcbiAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgIHNldEF1dGhVc2VyKGRhdGEudXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XG4gICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU3Vic2NyaWJlIHRvIHVzZXIgb24gbW91bnRcbiAgLy8gQmVjYXVzZSB0aGlzIHNldHMgc3RhdGUgaW4gdGhlIGNhbGxiYWNrIGl0IHdpbGwgY2F1c2UgYW55IC4uLlxuICAvLyAuLi4gY29tcG9uZW50IHRoYXQgdXRpbGl6ZXMgdGhpcyBob29rIHRvIHJlLXJlbmRlciB3aXRoIHRoZSAuLi5cbiAgLy8gLi4uIGxhdGVzdCBhdXRoIG9iamVjdC5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcblxuICAgICAgaHR0cENsaWVudC5wb3N0KFwiYXV0aC9tZVwiKS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICAgIHNldEF1dGhVc2VyKGRhdGEudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZ1VzZXIoZmFsc2UpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xuICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnJztcbiAgICAgICAgc2V0TG9hZGluZ1VzZXIoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSwgW11cbiAgKTtcblxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcbiAgcmV0dXJuIHtcbiAgICBpc0xvYWRpbmdVc2VyLFxuICAgIGlzTG9hZGluZyxcbiAgICBhdXRoVXNlcixcbiAgICBlcnJvcixcbiAgICBzZXRBdXRoVXNlcixcbiAgICBnZXRBdXRoVXNlcixcbiAgICB1c2VyTG9naW4sXG4gICAgdXNlclNpZ251cCxcbiAgICB1c2VyU2lnbk91dCxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzVW5SZXN0cmljdGVkUm91dGUgPSAocGF0aG5hbWUpID0+IHtcbiAgcmV0dXJuIHBhdGhuYW1lID09PSAnL3NpZ25pbicgfHwgcGF0aG5hbWUgPT09ICcvc2lnbnVwJyB8fCBwYXRobmFtZSA9PT0gJy9mb3Jnb3QtcGFzc3dvcmQnIHx8IHBhdGhuYW1lID09PSAnL3Jlc2V0LXBhc3N3b3JkJztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=