/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sayHelloCustAction = undefined;
	
	var _MDS = __webpack_require__(1);
	
	var _MDS2 = _interopRequireDefault(_MDS);
	
	var _config = __webpack_require__(2);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sayHelloCustAction = exports.sayHelloCustAction = function sayHelloCustAction() {
	  // console.log('Hello from custom-action!');
	  var url = 'http://localhost:7777/scripts/say-hello-loader.bundle.js' + ((0, _MDS.mdsEnabled)() ? '' : '?' + encodeURIComponent(new Date().getTime()));
	  window.SP.SOD.registerSod('say-hello-loader.js', url);
	  window.SP.SOD.executeFunc('say-hello-loader.js', null, function () {
	    var SayHelloNamespace = _config2.default.getNamespace();
	    SayHelloNamespace.Loader(window);
	  });
	};
	
	(0, _MDS2.default)('/Style%20Library/scripts/say-hello-custom-action.bundle.js', sayHelloCustAction);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var enableMds = function enableMds(scriptRelativeUrl, entryFunc) {
	  // eslint-disable-next-line no-undef
	  if (typeof RegisterModuleInit == 'function') {
	    // console.log('RegisterModuleInit for ' + scriptRelativeUrl);
	    entryFunc();
	    // eslint-disable-next-line no-undef
	    RegisterModuleInit(scriptRelativeUrl, entryFunc);
	  } else {
	    // console.log('No RegisterModuleInit for ' + scriptRelativeUrl);
	    entryFunc();
	  }
	};
	
	var mdsEnabled = function mdsEnabled() {
	  return typeof RegisterModuleInit == 'function';
	};
	
	exports.default = enableMds;
	exports.mdsEnabled = mdsEnabled;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  getNamespace: function getNamespace() {
	    window.UserCustomActions = window.UserCustomActions || {};
	    window.UserCustomActions.SayHello = window.UserCustomActions.SayHello || {};
	
	    return window.UserCustomActions.SayHello;
	  }
	};
	
	exports.default = config;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDdkYWZjZDNjYTU4YWUwMmI3NWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXItY3VzdG9tLWFjdGlvbnMvc2F5LWhlbGxvL2N1c3RvbS1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01EUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlci1jdXN0b20tYWN0aW9ucy9zYXktaGVsbG8vY29uZmlnLmpzIl0sIm5hbWVzIjpbInNheUhlbGxvQ3VzdEFjdGlvbiIsInVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsIkRhdGUiLCJnZXRUaW1lIiwid2luZG93IiwiU1AiLCJTT0QiLCJyZWdpc3RlclNvZCIsImV4ZWN1dGVGdW5jIiwiU2F5SGVsbG9OYW1lc3BhY2UiLCJnZXROYW1lc3BhY2UiLCJMb2FkZXIiLCJlbmFibGVNZHMiLCJzY3JpcHRSZWxhdGl2ZVVybCIsImVudHJ5RnVuYyIsIlJlZ2lzdGVyTW9kdWxlSW5pdCIsIm1kc0VuYWJsZWQiLCJjb25maWciLCJVc2VyQ3VzdG9tQWN0aW9ucyIsIlNheUhlbGxvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7Ozs7O0FBRU8sS0FBTUEsa0RBQXFCLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUN0QztBQUNBLE9BQUlDLE1BQU0sOERBQThELHlCQUFlLEVBQWYsR0FBb0IsTUFBTUMsbUJBQW9CLElBQUlDLElBQUosRUFBRCxDQUFhQyxPQUFiLEVBQW5CLENBQXhGLENBQVY7QUFDQUMsVUFBT0MsRUFBUCxDQUFVQyxHQUFWLENBQWNDLFdBQWQsQ0FBMEIscUJBQTFCLEVBQWlEUCxHQUFqRDtBQUNBSSxVQUFPQyxFQUFQLENBQVVDLEdBQVYsQ0FBY0UsV0FBZCxDQUEwQixxQkFBMUIsRUFBaUQsSUFBakQsRUFBdUQsWUFBWTtBQUNqRSxTQUFNQyxvQkFBb0IsaUJBQU9DLFlBQVAsRUFBMUI7QUFDQUQsdUJBQWtCRSxNQUFsQixDQUF5QlAsTUFBekI7QUFDRCxJQUhEO0FBSUQsRUFSTTs7QUFVUCxvQkFBSSw0REFBSixFQUFrRUwsa0JBQWxFLEU7Ozs7Ozs7Ozs7O0FDYkEsS0FBTWEsWUFBWSxTQUFaQSxTQUFZLENBQVVDLGlCQUFWLEVBQTZCQyxTQUE3QixFQUF3QztBQUN4RDtBQUNBLE9BQUksT0FBT0Msa0JBQVAsSUFBOEIsVUFBbEMsRUFBOEM7QUFDNUM7QUFDQUQ7QUFDQTtBQUNBQyx3QkFBbUJGLGlCQUFuQixFQUFzQ0MsU0FBdEM7QUFDRCxJQUxELE1BS087QUFDTDtBQUNBQTtBQUNEO0FBQ0YsRUFYRDs7QUFhQSxLQUFNRSxhQUFhLFNBQWJBLFVBQWE7QUFBQSxVQUFNLE9BQU9ELGtCQUFQLElBQThCLFVBQXBDO0FBQUEsRUFBbkI7O21CQUVlSCxTO1NBRVBJLFUsR0FBQUEsVTs7Ozs7Ozs7Ozs7QUNqQlIsS0FBTUMsU0FBUztBQUNiUCxpQkFBYyx3QkFBTTtBQUNsQk4sWUFBT2MsaUJBQVAsR0FBMkJkLE9BQU9jLGlCQUFQLElBQTRCLEVBQXZEO0FBQ0FkLFlBQU9jLGlCQUFQLENBQXlCQyxRQUF6QixHQUFvQ2YsT0FBT2MsaUJBQVAsQ0FBeUJDLFFBQXpCLElBQXFDLEVBQXpFOztBQUVBLFlBQU9mLE9BQU9jLGlCQUFQLENBQXlCQyxRQUFoQztBQUNEO0FBTlksRUFBZjs7bUJBU2VGLE0iLCJmaWxlIjoic2F5LWhlbGxvLWN1c3RvbS1hY3Rpb24uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMDdkYWZjZDNjYTU4YWUwMmI3NWVcbiAqKi8iLCJpbXBvcnQgTURTLCB7bWRzRW5hYmxlZH0gZnJvbSAnLi4vLi4vTURTJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2F5SGVsbG9DdXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGN1c3RvbS1hY3Rpb24hJyk7XHJcbiAgdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0Ojc3Nzcvc2NyaXB0cy9zYXktaGVsbG8tbG9hZGVyLmJ1bmRsZS5qcycgKyAobWRzRW5hYmxlZCgpID8gJycgOiAnPycgKyBlbmNvZGVVUklDb21wb25lbnQoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSkpO1xyXG4gIHdpbmRvdy5TUC5TT0QucmVnaXN0ZXJTb2QoJ3NheS1oZWxsby1sb2FkZXIuanMnLCB1cmwpO1xyXG4gIHdpbmRvdy5TUC5TT0QuZXhlY3V0ZUZ1bmMoJ3NheS1oZWxsby1sb2FkZXIuanMnLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBTYXlIZWxsb05hbWVzcGFjZSA9IGNvbmZpZy5nZXROYW1lc3BhY2UoKTtcclxuICAgIFNheUhlbGxvTmFtZXNwYWNlLkxvYWRlcih3aW5kb3cpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuTURTKCcvU3R5bGUlMjBMaWJyYXJ5L3NjcmlwdHMvc2F5LWhlbGxvLWN1c3RvbS1hY3Rpb24uYnVuZGxlLmpzJywgc2F5SGVsbG9DdXN0QWN0aW9uKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91c2VyLWN1c3RvbS1hY3Rpb25zL3NheS1oZWxsby9jdXN0b20tYWN0aW9uLmpzXG4gKiovIiwiY29uc3QgZW5hYmxlTWRzID0gZnVuY3Rpb24gKHNjcmlwdFJlbGF0aXZlVXJsLCBlbnRyeUZ1bmMpIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICBpZiAodHlwZW9mKFJlZ2lzdGVyTW9kdWxlSW5pdCkgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1JlZ2lzdGVyTW9kdWxlSW5pdCBmb3IgJyArIHNjcmlwdFJlbGF0aXZlVXJsKTtcclxuICAgIGVudHJ5RnVuYygpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgICBSZWdpc3Rlck1vZHVsZUluaXQoc2NyaXB0UmVsYXRpdmVVcmwsIGVudHJ5RnVuYyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdObyBSZWdpc3Rlck1vZHVsZUluaXQgZm9yICcgKyBzY3JpcHRSZWxhdGl2ZVVybCk7XHJcbiAgICBlbnRyeUZ1bmMoKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBtZHNFbmFibGVkID0gKCkgPT4gdHlwZW9mKFJlZ2lzdGVyTW9kdWxlSW5pdCkgPT0gJ2Z1bmN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVuYWJsZU1kcztcclxuXHJcbmV4cG9ydCB7bWRzRW5hYmxlZH07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvTURTLmpzXG4gKiovIiwiY29uc3QgY29uZmlnID0ge1xyXG4gIGdldE5hbWVzcGFjZTogKCkgPT4ge1xyXG4gICAgd2luZG93LlVzZXJDdXN0b21BY3Rpb25zID0gd2luZG93LlVzZXJDdXN0b21BY3Rpb25zIHx8IHt9O1xyXG4gICAgd2luZG93LlVzZXJDdXN0b21BY3Rpb25zLlNheUhlbGxvID0gd2luZG93LlVzZXJDdXN0b21BY3Rpb25zLlNheUhlbGxvIHx8IHt9O1xyXG5cclxuICAgIHJldHVybiB3aW5kb3cuVXNlckN1c3RvbUFjdGlvbnMuU2F5SGVsbG87XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3VzZXItY3VzdG9tLWFjdGlvbnMvc2F5LWhlbGxvL2NvbmZpZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=