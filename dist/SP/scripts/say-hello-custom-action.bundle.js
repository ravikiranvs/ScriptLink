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
	
	var _MDS = __webpack_require__(1);
	
	var _MDS2 = _interopRequireDefault(_MDS);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sayHelloCustAction = function sayHelloCustAction() {
	  console.log('Hello from custom-action!');
	  var url = 'http://localhost:7777/scripts/say-hello-loader.bundle.js' + ((0, _MDS.mdsEnabled)() ? '' : '?' + encodeURIComponent(new Date().getTime()));
	  SP.SOD.registerSod('say-hello-loader.js', url);
	  SP.SOD.executeFunc('say-hello-loader.js', null, function () {
	    console.log('Hello from custom-action-executeFunc!');
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
	    console.log('RegisterModuleInit for ' + scriptRelativeUrl);
	    entryFunc();
	    // eslint-disable-next-line no-undef
	    RegisterModuleInit(scriptRelativeUrl, entryFunc);
	  } else {
	    console.log('No RegisterModuleInit for ' + scriptRelativeUrl);
	    entryFunc();
	  }
	};
	
	var mdsEnabled = function mdsEnabled() {
	  return typeof RegisterModuleInit == 'function';
	};
	
	exports.default = enableMds;
	exports.mdsEnabled = mdsEnabled;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWZkNjRjODMyOTRiZjI3NWRkMDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXItY3VzdG9tLWFjdGlvbnMvc2F5LWhlbGxvL2N1c3RvbS1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01EUy5qcyJdLCJuYW1lcyI6WyJzYXlIZWxsb0N1c3RBY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidXJsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiRGF0ZSIsImdldFRpbWUiLCJTUCIsIlNPRCIsInJlZ2lzdGVyU29kIiwiZXhlY3V0ZUZ1bmMiLCJlbmFibGVNZHMiLCJzY3JpcHRSZWxhdGl2ZVVybCIsImVudHJ5RnVuYyIsIlJlZ2lzdGVyTW9kdWxlSW5pdCIsIm1kc0VuYWJsZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBLEtBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0JDLFdBQVFDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBLE9BQUlDLE1BQU0sOERBQThELHlCQUFlLEVBQWYsR0FBb0IsTUFBTUMsbUJBQW9CLElBQUlDLElBQUosRUFBRCxDQUFhQyxPQUFiLEVBQW5CLENBQXhGLENBQVY7QUFDQUMsTUFBR0MsR0FBSCxDQUFPQyxXQUFQLENBQW1CLHFCQUFuQixFQUEwQ04sR0FBMUM7QUFDQUksTUFBR0MsR0FBSCxDQUFPRSxXQUFQLENBQW1CLHFCQUFuQixFQUEwQyxJQUExQyxFQUFnRCxZQUFZO0FBQzFEVCxhQUFRQyxHQUFSLENBQVksdUNBQVo7QUFDRCxJQUZEO0FBR0QsRUFQRDs7QUFTQSxvQkFBSSw0REFBSixFQUFrRUYsa0JBQWxFLEU7Ozs7Ozs7Ozs7O0FDWEEsS0FBTVcsWUFBWSxTQUFaQSxTQUFZLENBQVVDLGlCQUFWLEVBQTZCQyxTQUE3QixFQUF3QztBQUN4RDtBQUNBLE9BQUksT0FBT0Msa0JBQVAsSUFBOEIsVUFBbEMsRUFBOEM7QUFDNUNiLGFBQVFDLEdBQVIsQ0FBWSw0QkFBNEJVLGlCQUF4QztBQUNBQztBQUNBO0FBQ0FDLHdCQUFtQkYsaUJBQW5CLEVBQXNDQyxTQUF0QztBQUNELElBTEQsTUFLTztBQUNMWixhQUFRQyxHQUFSLENBQVksK0JBQStCVSxpQkFBM0M7QUFDQUM7QUFDRDtBQUNGLEVBWEQ7O0FBYUEsS0FBTUUsYUFBYSxTQUFiQSxVQUFhO0FBQUEsVUFBTSxPQUFPRCxrQkFBUCxJQUE4QixVQUFwQztBQUFBLEVBQW5COzttQkFFZUgsUztTQUVQSSxVLEdBQUFBLFUiLCJmaWxlIjoic2F5LWhlbGxvLWN1c3RvbS1hY3Rpb24uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZWZkNjRjODMyOTRiZjI3NWRkMDVcbiAqKi8iLCJpbXBvcnQgTURTLCB7bWRzRW5hYmxlZH0gZnJvbSAnLi4vLi4vTURTJztcclxuXHJcbmNvbnN0IHNheUhlbGxvQ3VzdEFjdGlvbiA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBjdXN0b20tYWN0aW9uIScpO1xyXG4gIHZhciB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo3Nzc3L3NjcmlwdHMvc2F5LWhlbGxvLWxvYWRlci5idW5kbGUuanMnICsgKG1kc0VuYWJsZWQoKSA/ICcnIDogJz8nICsgZW5jb2RlVVJJQ29tcG9uZW50KChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkpKTtcclxuICBTUC5TT0QucmVnaXN0ZXJTb2QoJ3NheS1oZWxsby1sb2FkZXIuanMnLCB1cmwpO1xyXG4gIFNQLlNPRC5leGVjdXRlRnVuYygnc2F5LWhlbGxvLWxvYWRlci5qcycsIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGN1c3RvbS1hY3Rpb24tZXhlY3V0ZUZ1bmMhJyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5NRFMoJy9TdHlsZSUyMExpYnJhcnkvc2NyaXB0cy9zYXktaGVsbG8tY3VzdG9tLWFjdGlvbi5idW5kbGUuanMnLCBzYXlIZWxsb0N1c3RBY3Rpb24pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3VzZXItY3VzdG9tLWFjdGlvbnMvc2F5LWhlbGxvL2N1c3RvbS1hY3Rpb24uanNcbiAqKi8iLCJjb25zdCBlbmFibGVNZHMgPSBmdW5jdGlvbiAoc2NyaXB0UmVsYXRpdmVVcmwsIGVudHJ5RnVuYykge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gIGlmICh0eXBlb2YoUmVnaXN0ZXJNb2R1bGVJbml0KSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjb25zb2xlLmxvZygnUmVnaXN0ZXJNb2R1bGVJbml0IGZvciAnICsgc2NyaXB0UmVsYXRpdmVVcmwpO1xyXG4gICAgZW50cnlGdW5jKCk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICAgIFJlZ2lzdGVyTW9kdWxlSW5pdChzY3JpcHRSZWxhdGl2ZVVybCwgZW50cnlGdW5jKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ05vIFJlZ2lzdGVyTW9kdWxlSW5pdCBmb3IgJyArIHNjcmlwdFJlbGF0aXZlVXJsKTtcclxuICAgIGVudHJ5RnVuYygpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG1kc0VuYWJsZWQgPSAoKSA9PiB0eXBlb2YoUmVnaXN0ZXJNb2R1bGVJbml0KSA9PSAnZnVuY3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW5hYmxlTWRzO1xyXG5cclxuZXhwb3J0IHttZHNFbmFibGVkfTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9NRFMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9