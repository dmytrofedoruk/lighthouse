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
      if (data.result) {
        fetchSuccess();
        _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;
        var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
        cookies.set('token', data.token.access_token);
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
    _Api__WEBPACK_IMPORTED_MODULE_1__["httpClient"].post("auth/me").then(function (_ref5) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC91c2UtYXV0aC5qcyJdLCJuYW1lcyI6WyJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJhdXRoVXNlciIsInNldEF1dGhVc2VyIiwiaXNMb2FkaW5nVXNlciIsInNldExvYWRpbmdVc2VyIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaFN0YXJ0IiwiZmV0Y2hTdWNjZXNzIiwiZmV0Y2hFcnJvciIsInVzZXJMb2dpbiIsImRhdGEiLCJjYWxsYmFja0Z1biIsImh0dHBDbGllbnQiLCJwb3N0IiwidGhlbiIsInJlc3VsdCIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInRva2VuIiwiYWNjZXNzX3Rva2VuIiwiY29va2llcyIsIkNvb2tpZXMiLCJzZXQiLCJnZXRBdXRoVXNlciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwidXNlclNpZ251cCIsInVzZXJTaWduT3V0IiwicmVtb3ZlIiwidXNlciIsInVzZUVmZmVjdCIsImdldCIsImlzVW5SZXN0cmljdGVkUm91dGUiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RTtBQUMzQztBQUNJO0FBRXJDLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXJDO0FBQ0E7O0FBRU8sU0FBU0MsWUFBWSxPQUFhO0VBQUE7RUFBQSxJQUFYQyxRQUFRLFFBQVJBLFFBQVE7RUFDcEMsSUFBTUMsSUFBSSxHQUFHQyxjQUFjLEVBQUU7RUFDN0IsT0FBTyxNQUFDLFdBQVcsQ0FBQyxRQUFRO0lBQUMsS0FBSyxFQUFFRDtFQUFLLEdBQUVELFFBQVEsQ0FBd0I7QUFDN0U7O0FBRUE7QUFDQTtBQUFB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QU0sQ0FBQyxPQUFPLENBQUM7TUFDdkJsQiwrQ0FBVSxDQUFDSSxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUU7TUFDeERqQixjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRSxFQUFFLENBQ047O0VBRUQ7RUFDQSxPQUFPO0lBQ0xELGFBQWEsRUFBYkEsYUFBYTtJQUNiRSxTQUFTLEVBQVRBLFNBQVM7SUFDVEosUUFBUSxFQUFSQSxRQUFRO0lBQ1JNLEtBQUssRUFBTEEsS0FBSztJQUNMTCxXQUFXLEVBQVhBLFdBQVc7SUFDWHlCLFdBQVcsRUFBWEEsV0FBVztJQUNYZixTQUFTLEVBQVRBLFNBQVM7SUFDVG1CLFVBQVUsRUFBVkEsVUFBVTtJQUNWQyxXQUFXLEVBQVhBO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFBQSxJQW5JS25DLGNBQWM7QUFxSWIsSUFBTXdDLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUIsQ0FBSUMsUUFBUSxFQUFLO0VBQy9DLE9BQU9BLFFBQVEsS0FBSyxTQUFTLElBQUlBLFFBQVEsS0FBSyxTQUFTLElBQUlBLFFBQVEsS0FBSyxrQkFBa0IsSUFBSUEsUUFBUSxLQUFLLGlCQUFpQjtBQUM5SCxDQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI1OWY4NDdhY2Q0MmRlNzI0NjdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7aHR0cENsaWVudH0gZnJvbSBcIi4vQXBpXCI7XG5pbXBvcnQge0Nvb2tpZXN9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuLy8gUHJvdmlkZXIgY29tcG9uZW50IHRoYXQgd3JhcHMgYXBwIGFuZCBtYWtlcyBhdXRoIG9iamVjdCAuLlxuLy8gLi4uIGF2YWlsYWJsZSB0byBhbnkgY2hpbGQgY29tcG9uZW50IHRoYXQgY2FsbHMgdXNlQXV0aCgpLlxuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuLy8gSG9vayBmb3IgY2hpbGQgY29tcG9uZW50cyB0byBnZXQgdGhlIGF1dGggb2JqZWN0IC4uLlxuLy8gLi4uIGFuZCByZS1yZW5kZXIgd2hlbiBpdCBjaGFuZ2VzLlxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xufTtcblxuY29uc3QgdXNlUHJvdmlkZUF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IFthdXRoVXNlciwgc2V0QXV0aFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmdVc2VyLCBzZXRMb2FkaW5nVXNlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGZldGNoU3RhcnQgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcignJyk7XG4gIH1cblxuICBjb25zdCBmZXRjaFN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgc2V0RXJyb3IoJycpO1xuICB9XG5cbiAgY29uc3QgZmV0Y2hFcnJvciA9IChlcnJvcikgPT4ge1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIHNldEVycm9yKGVycm9yKTtcbiAgfVxuXG4gIGNvbnN0IHVzZXJMb2dpbiA9IChkYXRhLCBjYWxsYmFja0Z1bikgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2xvZ2luJywgZGF0YSlcbiAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgZGF0YS50b2tlbi5hY2Nlc3NfdG9rZW47XG4gICAgICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICAgICAgY29va2llcy5zZXQoJ3Rva2VuJywgZGF0YS50b2tlbi5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgIGdldEF1dGhVc2VyKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coY2FsbGJhY2tGdW4pO1xuICAgICAgICAgIGlmIChjYWxsYmFja0Z1bikgY2FsbGJhY2tGdW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXNlclNpZ251cCA9IChkYXRhLCBjYWxsYmFja0Z1bikgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2F1dGgvcmVnaXN0ZXInLCBkYXRhKVxuICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyBkYXRhLnRva2VuLmFjY2Vzc190b2tlbjtcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuLmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZldGNoRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1c2VyU2lnbk91dCA9IChjYWxsYmFja0Z1bikgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2F1dGgvbG9nb3V0JylcbiAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgICAgc2V0QXV0aFVzZXIoZmFsc2UpO1xuICAgICAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICcnO1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgICAgIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xuICAgICAgICAgIGlmIChjYWxsYmFja0Z1bikgY2FsbGJhY2tGdW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0QXV0aFVzZXIgPSAoKSA9PiB7XG4gICAgZmV0Y2hTdGFydCgpO1xuICAgIGh0dHBDbGllbnQucG9zdChcImF1dGgvbWVcIikudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICBpZiAoZGF0YS51c2VyKSB7XG4gICAgICAgIGZldGNoU3VjY2VzcygpO1xuICAgICAgICBzZXRBdXRoVXNlcihkYXRhLnVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICcnO1xuICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFN1YnNjcmliZSB0byB1c2VyIG9uIG1vdW50XG4gIC8vIEJlY2F1c2UgdGhpcyBzZXRzIHN0YXRlIGluIHRoZSBjYWxsYmFjayBpdCB3aWxsIGNhdXNlIGFueSAuLi5cbiAgLy8gLi4uIGNvbXBvbmVudCB0aGF0IHV0aWxpemVzIHRoaXMgaG9vayB0byByZS1yZW5kZXIgd2l0aCB0aGUgLi4uXG4gIC8vIC4uLiBsYXRlc3QgYXV0aCBvYmplY3QuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgY29uc3QgdG9rZW4gPSBjb29raWVzLmdldChcInRva2VuXCIpO1xuICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgdG9rZW47XG5cbiAgICAgIGh0dHBDbGllbnQucG9zdChcImF1dGgvbWVcIikudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnVzZXIpIHtcbiAgICAgICAgICBzZXRBdXRoVXNlcihkYXRhLnVzZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNldExvYWRpbmdVc2VyKGZhbHNlKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb29raWVzLnJlbW92ZSgndG9rZW4nKTtcbiAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XG4gICAgICAgIHNldExvYWRpbmdVc2VyKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0sIFtdXG4gICk7XG5cbiAgLy8gUmV0dXJuIHRoZSB1c2VyIG9iamVjdCBhbmQgYXV0aCBtZXRob2RzXG4gIHJldHVybiB7XG4gICAgaXNMb2FkaW5nVXNlcixcbiAgICBpc0xvYWRpbmcsXG4gICAgYXV0aFVzZXIsXG4gICAgZXJyb3IsXG4gICAgc2V0QXV0aFVzZXIsXG4gICAgZ2V0QXV0aFVzZXIsXG4gICAgdXNlckxvZ2luLFxuICAgIHVzZXJTaWdudXAsXG4gICAgdXNlclNpZ25PdXQsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBpc1VuUmVzdHJpY3RlZFJvdXRlID0gKHBhdGhuYW1lKSA9PiB7XG4gIHJldHVybiBwYXRobmFtZSA9PT0gJy9zaWduaW4nIHx8IHBhdGhuYW1lID09PSAnL3NpZ251cCcgfHwgcGF0aG5hbWUgPT09ICcvZm9yZ290LXBhc3N3b3JkJyB8fCBwYXRobmFtZSA9PT0gJy9yZXNldC1wYXNzd29yZCc7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9