/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../scss/screen.scss */ \"./src/scss/screen.scss\");\n\nvar _utils = __webpack_require__(/*! ./modules/utils.js */ \"./src/js/modules/utils.js\");\n\nvar utils = _interopRequireWildcard(_utils);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction component() {\n  var element = document.createElement('div');\n\n  element.innerHTML = 'Hello Webpackers';\n\n  return element;\n}\n\nvar newElement = component();\n\ndocument.body.appendChild(newElement);\n\nwindow.console.log(utils.outerWidth(newElement));\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/utils.js":
/*!*********************************!*\
  !*** ./src/js/modules/utils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.outerWidth = outerWidth;\nexports.outerHeight = outerHeight;\nexports.getURLQueryString = getURLQueryString;\nexports.decodeCharacters = decodeCharacters;\nexports.resetStyles = resetStyles;\n// Utilities Module\n\n/**\n * outerWidth function that returns the width of an element including horizontal margins\n * @variables\n */\nfunction outerWidth(el) {\n  var width = el.offsetWidth;\n  var style = getComputedStyle(el);\n\n  width += parseInt(style.marginLeft) + parseInt(style.marginRight);\n  return width;\n}\n\n/**\n * outerWidth function that returns the height of an element including vertical margins\n * @variables\n */\nfunction outerHeight(el) {\n  var height = el.offsetHeight;\n  var style = getComputedStyle(el);\n\n  height += parseInt(style.marginTop) + parseInt(style.marginBottom);\n  return height;\n}\n\n/**\n * Read a page's GET URL query string variables and return them as an associative array.\n * @function\n */\nfunction getURLQueryString() {\n  var vars = [],\n      hash;\n  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');\n  for (var i = 0; i < hashes.length; i++) {\n    hash = hashes[i].split('=');\n    vars.push(hash[0]);\n    vars[hash[0]] = hash[1];\n  }\n  return vars;\n}\n\n/**\n * Convert any encoded characters in a string to their unencoded versions\n * - e.g. &amp to &\n * @function\n */\nfunction decodeCharacters(text) {\n  var elem = document.createElement('textarea');\n  elem.innerHTML = text;\n  return elem.value;\n}\n\n/**\n * Remove the style attribute from an element\n * @function\n */\nfunction resetStyles(element) {\n  element.setAttribute('style', '');\n}\n\n//# sourceURL=webpack:///./src/js/modules/utils.js?");

/***/ }),

/***/ "./src/scss/screen.scss":
/*!******************************!*\
  !*** ./src/scss/screen.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/screen.scss?");

/***/ })

/******/ });