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
eval("\n\n__webpack_require__(/*! ../scss/screen.scss */ \"./src/scss/screen.scss\");\n\nvar _utils = __webpack_require__(/*! ./modules/utils.js */ \"./src/js/modules/utils.js\");\n\nvar utils = _interopRequireWildcard(_utils);\n\nvar show = _interopRequireWildcard(_utils);\n\nvar _showhide = __webpack_require__(/*! ./modules/showhide.js */ \"./src/js/modules/showhide.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction component() {\n  var element = document.createElement('div');\n\n  element.innerHTML = 'Hello Webpackers';\n  return element;\n}\n\nvar newElement = component();\ndocument.body.appendChild(newElement);\nwindow.console.log(utils.outerWidth(newElement));\n\n(0, _showhide.buildNippers)();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/events.js":
/*!**********************************!*\
  !*** ./src/js/modules/events.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addEventListenerToNodeList = addEventListenerToNodeList;\n// Events module\n\nfunction createCustomEvent(eventName, eventData) {\n  var event = void 0;\n\n  if (window.CustomEvent) {\n    event = new CustomEvent(eventName, { detail: { some: eventData } });\n  } else {\n    event = document.createEvent('CustomEvent');\n    event.initCustomEvent(eventName, true, true, { some: eventData });\n  }\n\n  return event;\n}\n\nfunction addEventListenerToNodeList(list, event, fn) {\n  for (var i = 0, len = list.length; i < len; i++) {\n    list[i].addEventListener(event, fn, false);\n  }\n}\n\nvar moduleInterface = {\n  addEventListenerToNodeList: addEventListenerToNodeList\n};\n\nexports.default = moduleInterface;\n\n//# sourceURL=webpack:///./src/js/modules/events.js?");

/***/ }),

/***/ "./src/js/modules/showhide.js":
/*!************************************!*\
  !*** ./src/js/modules/showhide.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Show/Hide Components module\n\n\nexports.buildNippers = buildNippers;\n\nvar _events = __webpack_require__(/*! ./events.js */ \"./src/js/modules/events.js\");\n\nvar events = _interopRequireWildcard(_events);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar selectors = {\n  selComponent: \"[data-showhide=component]\",\n  selAction: \"[data-showhide=component] [data-showhide=toggle]\",\n  selContent: \"[data-showhide=content]\"\n};\n\nvar displayClass = 'is_Open';\n\nvar ShowHide = function () {\n  function ShowHide(element) {\n    _classCallCheck(this, ShowHide);\n\n    this.nipper = element;\n    this.action = this.nipper.querySelectorAll(selectors.selAction);\n    this.content = this.nipper.querySelectorAll(selectors.selContent);\n    this.config = this.nipper.getAttribute('data-showhide-config');\n    this.animate = this.config.animate || false;\n    this.speed = this.config.speed || 200;\n    this.startState = this.config.open || false;\n\n    this.bindCustomMessageEvents();\n    this.setInitialState();\n  }\n\n  _createClass(ShowHide, [{\n    key: \"toggleControl\",\n    value: function toggleControl(element) {\n      element.classList.toggle(displayClass);\n    }\n  }, {\n    key: \"setInitialState\",\n    value: function setInitialState() {\n      if (this.startState === true) {\n        this.nipper.classList.add(displayClass);\n      }\n    }\n  }, {\n    key: \"bindCustomMessageEvents\",\n    value: function bindCustomMessageEvents() {\n      // this.nipper.addEventListener('toggleShowHide', function (e) {\n      //   e.preventDefault();\n      //   this.toggleControl();\n      // });\n      window.console.log(this.action);\n\n      events.addEventListenerToNodeList(this.action, 'click', this.toggleControl(this.nipper));\n    }\n  }]);\n\n  return ShowHide;\n}();\n\nfunction buildNippers() {\n  var nippers = document.querySelectorAll(selectors.selComponent);\n  Array.prototype.forEach.call(nippers, function (el, i) {\n    var newShowHide = new ShowHide(el);\n  });\n}\n\nvar moduleInterface = {\n  buildNippers: buildNippers\n};\n\nexports.default = moduleInterface;\n\n//# sourceURL=webpack:///./src/js/modules/showhide.js?");

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