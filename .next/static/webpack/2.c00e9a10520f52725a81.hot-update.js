webpackHotUpdate_N_E(2,{

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
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post('https://reminiscent-chill-actress.glitch.me/signup', data).then(function (_ref3) {
      var data = _ref3.data;
      console.log(data);
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
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post('logout').then(function (_ref4) {
      var data = _ref4.data;
      if (data) {
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
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].get('me').then(function (_ref5) {
      var data = _ref5.data;
      if (data) {
        fetchSuccess();
        setAuthUser(data);
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
      // cookies.remove('token');
      // httpClient.defaults.headers.common['Authorization'] = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC91c2UtYXV0aC5qcyJdLCJuYW1lcyI6WyJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJhdXRoVXNlciIsInNldEF1dGhVc2VyIiwiaXNMb2FkaW5nVXNlciIsInNldExvYWRpbmdVc2VyIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaFN0YXJ0IiwiZmV0Y2hTdWNjZXNzIiwiZmV0Y2hFcnJvciIsInVzZXJMb2dpbiIsImRhdGEiLCJjYWxsYmFja0Z1biIsImh0dHBDbGllbnQiLCJwb3N0IiwidGhlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInRva2VuIiwiY29va2llcyIsIkNvb2tpZXMiLCJzZXQiLCJnZXRBdXRoVXNlciIsIm1lc3NhZ2UiLCJ1c2VyU2lnbnVwIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImFjY2Vzc190b2tlbiIsInVzZXJTaWduT3V0IiwicmVtb3ZlIiwiZ2V0IiwidXNlRWZmZWN0IiwidXNlciIsImlzVW5SZXN0cmljdGVkUm91dGUiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RTtBQUMzQztBQUNJO0FBRXJDLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXJDO0FBQ0E7O0FBRU8sU0FBU0MsWUFBWSxPQUFhO0VBQUE7RUFBQSxJQUFYQyxRQUFRLFFBQVJBLFFBQVE7RUFDcEMsSUFBTUMsSUFBSSxHQUFHQyxjQUFjLEVBQUU7RUFDN0IsT0FBTyxNQUFDLFdBQVcsQ0FBQyxRQUFRO0lBQUMsS0FBSyxFQUFFRDtFQUFLLEdBQUVELFFBQVEsQ0FBd0I7QUFDN0U7O0FBRUE7QUFDQTtBQUFB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RUFDQSxPQUFPO0lBQ0xELGFBQWEsRUFBYkEsYUFBYTtJQUNiRSxTQUFTLEVBQVRBLFNBQVM7SUFDVEosUUFBUSxFQUFSQSxRQUFRO0lBQ1JNLEtBQUssRUFBTEEsS0FBSztJQUNMTCxXQUFXLEVBQVhBLFdBQVc7SUFDWHVCLFdBQVcsRUFBWEEsV0FBVztJQUNYYixTQUFTLEVBQVRBLFNBQVM7SUFDVGUsVUFBVSxFQUFWQSxVQUFVO0lBQ1ZLLFdBQVcsRUFBWEE7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUFBLElBbklLbkMsY0FBYztBQXFJYixJQUFNd0MsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQixDQUFJQyxRQUFRLEVBQUs7RUFDL0MsT0FBT0EsUUFBUSxLQUFLLFNBQVMsSUFBSUEsUUFBUSxLQUFLLFNBQVMsSUFBSUEsUUFBUSxLQUFLLGtCQUFrQixJQUFJQSxRQUFRLEtBQUssaUJBQWlCO0FBQzlILENBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzIuYzAwZTlhMTA1MjBmNTI3MjVhODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtodHRwQ2xpZW50fSBmcm9tIFwiLi9BcGlcIjtcbmltcG9ydCB7Q29va2llc30gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG4vLyBQcm92aWRlciBjb21wb25lbnQgdGhhdCB3cmFwcyBhcHAgYW5kIG1ha2VzIGF1dGggb2JqZWN0IC4uXG4vLyAuLi4gYXZhaWxhYmxlIHRvIGFueSBjaGlsZCBjb21wb25lbnQgdGhhdCBjYWxscyB1c2VBdXRoKCkuXG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoe2NoaWxkcmVufSkge1xuICBjb25zdCBhdXRoID0gdXNlUHJvdmlkZUF1dGgoKTtcbiAgcmV0dXJuIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvYXV0aENvbnRleHQuUHJvdmlkZXI+O1xufVxuXG4vLyBIb29rIGZvciBjaGlsZCBjb21wb25lbnRzIHRvIGdldCB0aGUgYXV0aCBvYmplY3QgLi4uXG4vLyAuLi4gYW5kIHJlLXJlbmRlciB3aGVuIGl0IGNoYW5nZXMuXG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XG59O1xuXG5jb25zdCB1c2VQcm92aWRlQXV0aCA9ICgpID0+IHtcbiAgY29uc3QgW2F1dGhVc2VyLCBzZXRBdXRoVXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZ1VzZXIsIHNldExvYWRpbmdVc2VyXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgZmV0Y2hTdGFydCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKCcnKTtcbiAgfVxuXG4gIGNvbnN0IGZldGNoU3VjY2VzcyA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBzZXRFcnJvcignJyk7XG4gIH1cblxuICBjb25zdCBmZXRjaEVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgc2V0RXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgY29uc3QgdXNlckxvZ2luID0gKGRhdGEsIGNhbGxiYWNrRnVuKSA9PiB7XG4gICAgZmV0Y2hTdGFydCgpO1xuICAgIGh0dHBDbGllbnQucG9zdCgnbG9naW4nLCBkYXRhKVxuICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xuICAgICAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGRhdGEudG9rZW47XG4gICAgICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICAgICAgY29va2llcy5zZXQoJ3Rva2VuJywgZGF0YS50b2tlbik7XG4gICAgICAgICAgZ2V0QXV0aFVzZXIoKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIGNhbGxiYWNrRnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVzZXJTaWdudXAgPSAoZGF0YSwgY2FsbGJhY2tGdW4pID0+IHtcbiAgICBmZXRjaFN0YXJ0KCk7XG4gICAgaHR0cENsaWVudC5wb3N0KCdodHRwczovL3JlbWluaXNjZW50LWNoaWxsLWFjdHJlc3MuZ2xpdGNoLm1lL3NpZ251cCcsIGRhdGEpXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xuICAgICAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgICAgIGNvb2tpZXMuc2V0KCd0b2tlbicsIGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIGNhbGxiYWNrRnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVzZXJTaWduT3V0ID0gKGNhbGxiYWNrRnVuKSA9PiB7XG4gICAgZmV0Y2hTdGFydCgpO1xuICAgIGh0dHBDbGllbnQucG9zdCgnbG9nb3V0JylcbiAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgICBzZXRBdXRoVXNlcihmYWxzZSk7XG4gICAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XG4gICAgICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICAgICAgY29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZldGNoRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRBdXRoVXNlciA9ICgpID0+IHtcbiAgICBmZXRjaFN0YXJ0KCk7XG4gICAgaHR0cENsaWVudC5nZXQoJ21lJykudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgc2V0QXV0aFVzZXIoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XG4gICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU3Vic2NyaWJlIHRvIHVzZXIgb24gbW91bnRcbiAgLy8gQmVjYXVzZSB0aGlzIHNldHMgc3RhdGUgaW4gdGhlIGNhbGxiYWNrIGl0IHdpbGwgY2F1c2UgYW55IC4uLlxuICAvLyAuLi4gY29tcG9uZW50IHRoYXQgdXRpbGl6ZXMgdGhpcyBob29rIHRvIHJlLXJlbmRlciB3aXRoIHRoZSAuLi5cbiAgLy8gLi4uIGxhdGVzdCBhdXRoIG9iamVjdC5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcblxuICAgICAgaHR0cENsaWVudC5wb3N0KFwiYXV0aC9tZVwiKS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICAgIHNldEF1dGhVc2VyKGRhdGEudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZ1VzZXIoZmFsc2UpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIC8vIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xuICAgICAgICAvLyBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnJztcbiAgICAgICAgc2V0TG9hZGluZ1VzZXIoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSwgW11cbiAgKTtcblxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcbiAgcmV0dXJuIHtcbiAgICBpc0xvYWRpbmdVc2VyLFxuICAgIGlzTG9hZGluZyxcbiAgICBhdXRoVXNlcixcbiAgICBlcnJvcixcbiAgICBzZXRBdXRoVXNlcixcbiAgICBnZXRBdXRoVXNlcixcbiAgICB1c2VyTG9naW4sXG4gICAgdXNlclNpZ251cCxcbiAgICB1c2VyU2lnbk91dCxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzVW5SZXN0cmljdGVkUm91dGUgPSAocGF0aG5hbWUpID0+IHtcbiAgcmV0dXJuIHBhdGhuYW1lID09PSAnL3NpZ25pbicgfHwgcGF0aG5hbWUgPT09ICcvc2lnbnVwJyB8fCBwYXRobmFtZSA9PT0gJy9mb3Jnb3QtcGFzc3dvcmQnIHx8IHBhdGhuYW1lID09PSAnL3Jlc2V0LXBhc3N3b3JkJztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=