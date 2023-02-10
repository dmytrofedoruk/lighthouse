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
    console.log();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC91c2UtYXV0aC5qcyJdLCJuYW1lcyI6WyJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJhdXRoVXNlciIsInNldEF1dGhVc2VyIiwiaXNMb2FkaW5nVXNlciIsInNldExvYWRpbmdVc2VyIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaFN0YXJ0IiwiZmV0Y2hTdWNjZXNzIiwiZmV0Y2hFcnJvciIsInVzZXJMb2dpbiIsImRhdGEiLCJjYWxsYmFja0Z1biIsImh0dHBDbGllbnQiLCJwb3N0IiwidGhlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInRva2VuIiwiY29va2llcyIsIkNvb2tpZXMiLCJzZXQiLCJnZXRBdXRoVXNlciIsIm1lc3NhZ2UiLCJ1c2VyU2lnbnVwIiwicmVzdWx0IiwiYWNjZXNzX3Rva2VuIiwidXNlclNpZ25PdXQiLCJyZW1vdmUiLCJnZXQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImlzVW5SZXN0cmljdGVkUm91dGUiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RTtBQUMzQztBQUNJO0FBRXJDLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXJDO0FBQ0E7O0FBRU8sU0FBU0MsWUFBWSxPQUFhO0VBQUE7RUFBQSxJQUFYQyxRQUFRLFFBQVJBLFFBQVE7RUFDcEMsSUFBTUMsSUFBSSxHQUFHQyxjQUFjLEVBQUU7RUFDN0IsT0FBTyxNQUFDLFdBQVcsQ0FBQyxRQUFRO0lBQUMsS0FBSyxFQUFFRDtFQUFLLEdBQUVELFFBQVEsQ0FBd0I7QUFDN0U7O0FBRUE7QUFDQTtBQUFB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QUcsRUFBRTtNQUN4RGhCLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FDTjs7RUFFRDtFQUNBLE9BQU87SUFDTEQsYUFBYSxFQUFiQSxhQUFhO0lBQ2JFLFNBQVMsRUFBVEEsU0FBUztJQUNUSixRQUFRLEVBQVJBLFFBQVE7SUFDUk0sS0FBSyxFQUFMQSxLQUFLO0lBQ0xMLFdBQVcsRUFBWEEsV0FBVztJQUNYdUIsV0FBVyxFQUFYQSxXQUFXO0lBQ1hiLFNBQVMsRUFBVEEsU0FBUztJQUNUZSxVQUFVLEVBQVZBLFVBQVU7SUFDVkcsV0FBVyxFQUFYQTtFQUNGLENBQUM7QUFDSCxDQUFDO0FBQUEsSUFuSUtqQyxjQUFjO0FBcUliLElBQU13QyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CLENBQUlDLFFBQVEsRUFBSztFQUMvQyxPQUFPQSxRQUFRLEtBQUssU0FBUyxJQUFJQSxRQUFRLEtBQUssU0FBUyxJQUFJQSxRQUFRLEtBQUssa0JBQWtCLElBQUlBLFFBQVEsS0FBSyxpQkFBaUI7QUFDOUgsQ0FBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMGRiZGZhNTU2YjU2YzMxMDcxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2h0dHBDbGllbnR9IGZyb20gXCIuL0FwaVwiO1xuaW1wb3J0IHtDb29raWVzfSBmcm9tIFwicmVhY3QtY29va2llXCI7XG5cbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5cbi8vIFByb3ZpZGVyIGNvbXBvbmVudCB0aGF0IHdyYXBzIGFwcCBhbmQgbWFrZXMgYXV0aCBvYmplY3QgLi5cbi8vIC4uLiBhdmFpbGFibGUgdG8gYW55IGNoaWxkIGNvbXBvbmVudCB0aGF0IGNhbGxzIHVzZUF1dGgoKS5cblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7Y2hpbGRyZW59KSB7XG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbi8vIEhvb2sgZm9yIGNoaWxkIGNvbXBvbmVudHMgdG8gZ2V0IHRoZSBhdXRoIG9iamVjdCAuLi5cbi8vIC4uLiBhbmQgcmUtcmVuZGVyIHdoZW4gaXQgY2hhbmdlcy5cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcbn07XG5cbmNvbnN0IHVzZVByb3ZpZGVBdXRoID0gKCkgPT4ge1xuICBjb25zdCBbYXV0aFVzZXIsIHNldEF1dGhVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nVXNlciwgc2V0TG9hZGluZ1VzZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBmZXRjaFN0YXJ0ID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IoJycpO1xuICB9XG5cbiAgY29uc3QgZmV0Y2hTdWNjZXNzID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIHNldEVycm9yKCcnKTtcbiAgfVxuXG4gIGNvbnN0IGZldGNoRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBzZXRFcnJvcihlcnJvcik7XG4gIH1cblxuICBjb25zdCB1c2VyTG9naW4gPSAoZGF0YSwgY2FsbGJhY2tGdW4pID0+IHtcbiAgICBmZXRjaFN0YXJ0KCk7XG4gICAgaHR0cENsaWVudC5wb3N0KCdsb2dpbicsIGRhdGEpXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgZGF0YS50b2tlbjtcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuKTtcbiAgICAgICAgICBnZXRBdXRoVXNlcigpO1xuICAgICAgICAgIGlmIChjYWxsYmFja0Z1bikgY2FsbGJhY2tGdW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXNlclNpZ251cCA9IChkYXRhLCBjYWxsYmFja0Z1bikgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2F1dGgvcmVnaXN0ZXInLCBkYXRhKVxuICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyBkYXRhLnRva2VuLmFjY2Vzc190b2tlbjtcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuLmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZldGNoRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1c2VyU2lnbk91dCA9IChjYWxsYmFja0Z1bikgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2xvZ291dCcpXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgICAgc2V0QXV0aFVzZXIoZmFsc2UpO1xuICAgICAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICcnO1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgICAgIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xuICAgICAgICAgIGlmIChjYWxsYmFja0Z1bikgY2FsbGJhY2tGdW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0QXV0aFVzZXIgPSAoKSA9PiB7XG4gICAgZmV0Y2hTdGFydCgpO1xuICAgIGh0dHBDbGllbnQuZ2V0KCdtZScpLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgIHNldEF1dGhVc2VyKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICcnO1xuICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFN1YnNjcmliZSB0byB1c2VyIG9uIG1vdW50XG4gIC8vIEJlY2F1c2UgdGhpcyBzZXRzIHN0YXRlIGluIHRoZSBjYWxsYmFjayBpdCB3aWxsIGNhdXNlIGFueSAuLi5cbiAgLy8gLi4uIGNvbXBvbmVudCB0aGF0IHV0aWxpemVzIHRoaXMgaG9vayB0byByZS1yZW5kZXIgd2l0aCB0aGUgLi4uXG4gIC8vIC4uLiBsYXRlc3QgYXV0aCBvYmplY3QuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygpXG4gICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgIGNvbnN0IHRva2VuID0gY29va2llcy5nZXQoXCJ0b2tlblwiKTtcbiAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIHRva2VuO1xuXG4gICAgICBodHRwQ2xpZW50LnBvc3QoXCJhdXRoL21lXCIpLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS51c2VyKSB7XG4gICAgICAgICAgc2V0QXV0aFVzZXIoZGF0YS51c2VyKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRMb2FkaW5nVXNlcihmYWxzZSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICcnO1xuICAgICAgICBzZXRMb2FkaW5nVXNlcihmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9LCBbXVxuICApO1xuXG4gIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgYW5kIGF1dGggbWV0aG9kc1xuICByZXR1cm4ge1xuICAgIGlzTG9hZGluZ1VzZXIsXG4gICAgaXNMb2FkaW5nLFxuICAgIGF1dGhVc2VyLFxuICAgIGVycm9yLFxuICAgIHNldEF1dGhVc2VyLFxuICAgIGdldEF1dGhVc2VyLFxuICAgIHVzZXJMb2dpbixcbiAgICB1c2VyU2lnbnVwLFxuICAgIHVzZXJTaWduT3V0LFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgaXNVblJlc3RyaWN0ZWRSb3V0ZSA9IChwYXRobmFtZSkgPT4ge1xuICByZXR1cm4gcGF0aG5hbWUgPT09ICcvc2lnbmluJyB8fCBwYXRobmFtZSA9PT0gJy9zaWdudXAnIHx8IHBhdGhuYW1lID09PSAnL2ZvcmdvdC1wYXNzd29yZCcgfHwgcGF0aG5hbWUgPT09ICcvcmVzZXQtcGFzc3dvcmQnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==