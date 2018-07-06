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

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Returns a function, that, as long as it continues to be invoked, will not\n * be triggered. The function will be called after it stops being called for\n * N milliseconds. If `immediate` is passed, trigger the function on the\n * leading edge, instead of the trailing. The function also has a property 'clear' \n * that is a function which will clear the timer to prevent previously scheduled executions. \n *\n * @source underscore.js\n * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/\n * @param {Function} function to wrap\n * @param {Number} timeout in ms (`100`)\n * @param {Boolean} whether to execute at the beginning (`false`)\n * @api public\n */\n\nmodule.exports = function debounce(func, wait, immediate){\n  var timeout, args, context, timestamp, result;\n  if (null == wait) wait = 100;\n\n  function later() {\n    var last = Date.now() - timestamp;\n\n    if (last < wait && last >= 0) {\n      timeout = setTimeout(later, wait - last);\n    } else {\n      timeout = null;\n      if (!immediate) {\n        result = func.apply(context, args);\n        context = args = null;\n      }\n    }\n  };\n\n  var debounced = function(){\n    context = this;\n    args = arguments;\n    timestamp = Date.now();\n    var callNow = immediate && !timeout;\n    if (!timeout) timeout = setTimeout(later, wait);\n    if (callNow) {\n      result = func.apply(context, args);\n      context = args = null;\n    }\n\n    return result;\n  };\n\n  debounced.clear = function() {\n    if (timeout) {\n      clearTimeout(timeout);\n      timeout = null;\n    }\n  };\n  \n  debounced.flush = function() {\n    if (timeout) {\n      result = func.apply(context, args);\n      context = args = null;\n      \n      clearTimeout(timeout);\n      timeout = null;\n    }\n  };\n\n  return debounced;\n};\n\n\n//# sourceURL=webpack:///./node_modules/debounce/index.js?");

/***/ }),

/***/ "./node_modules/delegate/src/closest.js":
/*!**********************************************!*\
  !*** ./node_modules/delegate/src/closest.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var DOCUMENT_NODE_TYPE = 9;\n\n/**\n * A polyfill for Element.matches()\n */\nif (typeof Element !== 'undefined' && !Element.prototype.matches) {\n    var proto = Element.prototype;\n\n    proto.matches = proto.matchesSelector ||\n                    proto.mozMatchesSelector ||\n                    proto.msMatchesSelector ||\n                    proto.oMatchesSelector ||\n                    proto.webkitMatchesSelector;\n}\n\n/**\n * Finds the closest parent that matches a selector.\n *\n * @param {Element} element\n * @param {String} selector\n * @return {Function}\n */\nfunction closest (element, selector) {\n    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {\n        if (typeof element.matches === 'function' &&\n            element.matches(selector)) {\n          return element;\n        }\n        element = element.parentNode;\n    }\n}\n\nmodule.exports = closest;\n\n\n//# sourceURL=webpack:///./node_modules/delegate/src/closest.js?");

/***/ }),

/***/ "./node_modules/delegate/src/delegate.js":
/*!***********************************************!*\
  !*** ./node_modules/delegate/src/delegate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var closest = __webpack_require__(/*! ./closest */ \"./node_modules/delegate/src/closest.js\");\n\n/**\n * Delegates event to a selector.\n *\n * @param {Element} element\n * @param {String} selector\n * @param {String} type\n * @param {Function} callback\n * @param {Boolean} useCapture\n * @return {Object}\n */\nfunction _delegate(element, selector, type, callback, useCapture) {\n    var listenerFn = listener.apply(this, arguments);\n\n    element.addEventListener(type, listenerFn, useCapture);\n\n    return {\n        destroy: function() {\n            element.removeEventListener(type, listenerFn, useCapture);\n        }\n    }\n}\n\n/**\n * Delegates event to a selector.\n *\n * @param {Element|String|Array} [elements]\n * @param {String} selector\n * @param {String} type\n * @param {Function} callback\n * @param {Boolean} useCapture\n * @return {Object}\n */\nfunction delegate(elements, selector, type, callback, useCapture) {\n    // Handle the regular Element usage\n    if (typeof elements.addEventListener === 'function') {\n        return _delegate.apply(null, arguments);\n    }\n\n    // Handle Element-less usage, it defaults to global delegation\n    if (typeof type === 'function') {\n        // Use `document` as the first parameter, then apply arguments\n        // This is a short way to .unshift `arguments` without running into deoptimizations\n        return _delegate.bind(null, document).apply(null, arguments);\n    }\n\n    // Handle Selector-based usage\n    if (typeof elements === 'string') {\n        elements = document.querySelectorAll(elements);\n    }\n\n    // Handle Array-like based usage\n    return Array.prototype.map.call(elements, function (element) {\n        return _delegate(element, selector, type, callback, useCapture);\n    });\n}\n\n/**\n * Finds closest match and invokes callback.\n *\n * @param {Element} element\n * @param {String} selector\n * @param {String} type\n * @param {Function} callback\n * @return {Function}\n */\nfunction listener(element, selector, type, callback) {\n    return function(e) {\n        e.delegateTarget = closest(e.target, selector);\n\n        if (e.delegateTarget) {\n            callback.call(element, e);\n        }\n    }\n}\n\nmodule.exports = delegate;\n\n\n//# sourceURL=webpack:///./node_modules/delegate/src/delegate.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../scss/screen.scss */ \"./src/scss/screen.scss\");\n\nvar _utils = __webpack_require__(/*! ./modules/utils.js */ \"./src/js/modules/utils.js\");\n\nvar utils = _interopRequireWildcard(_utils);\n\nvar _showhide = __webpack_require__(/*! ./modules/showhide.js */ \"./src/js/modules/showhide.js\");\n\nvar showhide = _interopRequireWildcard(_showhide);\n\nvar _events = __webpack_require__(/*! ./modules/events.js */ \"./src/js/modules/events.js\");\n\nvar events = _interopRequireWildcard(_events);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// Initialise Modules\nshowhide.initModule();\nevents.initModule();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/events.js":
/*!**********************************!*\
  !*** ./src/js/modules/events.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createDelegatedEventListener = createDelegatedEventListener;\nexports.initModule = initModule;\n\nvar _utils = __webpack_require__(/*! ./utils.js */ \"./src/js/modules/utils.js\");\n\nvar utils = _interopRequireWildcard(_utils);\n\nvar _debounce = __webpack_require__(/*! debounce */ \"./node_modules/debounce/index.js\");\n\nvar _debounce2 = _interopRequireDefault(_debounce);\n\nvar _delegate = __webpack_require__(/*! delegate */ \"./node_modules/delegate/src/delegate.js\");\n\nvar _delegate2 = _interopRequireDefault(_delegate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// Events module\nfunction createCustomEvent(eventName, eventData) {\n  var customEvent = void 0;\n\n  if (window.CustomEvent) {\n    customEvent = new CustomEvent(eventName, { detail: { some: eventData }, bubbles: true });\n  } else {\n    customEvent = document.createEvent('CustomEvent');\n    customEvent.initCustomEvent(eventName, true, true, { some: eventData });\n  }\n\n  return customEvent;\n}\n\nfunction bindGlobalMessages() {\n  // Handle page scroll\n  window.addEventListener('scroll', function () {\n    // Publish global message\n\n  });\n\n  // Handle debounced resize\n  window.onresize = (0, _debounce2.default)(function () {\n    // Publish global  message\n\n  }, 200);\n}\n\n/**\n * Simple factory function to bind a common delegated event listener to the <body> element\n * @function\n * @parameter eventType (string) - the event type we're listening for\n * @parameter selector (string) - the selector for the element event is triggered on\n * @parameter eventToTrigger (string) - custom event we want to send back to target element\n */\nfunction createDelegatedEventListener(eventType, selector, eventToTrigger) {\n  (0, _delegate2.default)(document.body, selector, eventType, function (e) {\n    e.preventDefault();\n    e.stopPropagation();\n    var customEvent = createCustomEvent(eventToTrigger, null);\n    e.target.dispatchEvent(customEvent);\n  }, false);\n}\n\nfunction initModule() {\n  bindGlobalMessages();\n}\n\n//# sourceURL=webpack:///./src/js/modules/events.js?");

/***/ }),

/***/ "./src/js/modules/showhide.js":
/*!************************************!*\
  !*** ./src/js/modules/showhide.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Show/Hide Components module\n\n\nexports.initModule = initModule;\n\nvar _events = __webpack_require__(/*! ./events.js */ \"./src/js/modules/events.js\");\n\nvar events = _interopRequireWildcard(_events);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar selectors = {\n  selComponent: \"[data-showhide=component]\",\n  selAction: \"[data-showhide=component] [data-showhide=toggle]\",\n  selContent: \"[data-showhide=content]\"\n},\n    displayClass = 'is_Open';\n\n/**\n * ShowHide class used to control show/hide components\n */\n\nvar ShowHide = function () {\n  _createClass(ShowHide, [{\n    key: \"toggleControl\",\n    value: function toggleControl(e) {\n      e.preventDefault();\n      this.compDOMElement.classList.toggle(displayClass);\n    }\n  }, {\n    key: \"setStartState\",\n    value: function setStartState() {\n      if (this.startState === true) {\n        this.compDOMElement.classList.add(displayClass);\n      }\n    }\n  }, {\n    key: \"bindCustomMessageEvents\",\n    value: function bindCustomMessageEvents() {\n      this.compDOMElement.addEventListener('toggleShowHide', this.toggleControl.bind(this));\n    }\n  }]);\n\n  function ShowHide(element) {\n    _classCallCheck(this, ShowHide);\n\n    this.compDOMElement = element;\n    this.action = this.compDOMElement.querySelectorAll(selectors.selAction);\n    this.content = this.compDOMElement.querySelectorAll(selectors.selContent);\n    this.config = this.compDOMElement.getAttribute('data-showhide-config');\n    this.animate = this.config.animate || false;\n    this.speed = this.config.speed || 200;\n    this.startState = this.config.open || false;\n\n    this.bindCustomMessageEvents();\n    this.setStartState();\n  }\n\n  return ShowHide;\n}();\n\nfunction delegateEvents() {\n  events.createDelegatedEventListener('click', selectors.selAction, 'toggleShowHide');\n}\n\nfunction initModule() {\n  delegateEvents();\n\n  var showHideComponents = document.querySelectorAll(selectors.selComponent);\n\n  Array.prototype.forEach.call(showHideComponents, function (element, i) {\n    var newShowHide = new ShowHide(element);\n  });\n}\n\n//# sourceURL=webpack:///./src/js/modules/showhide.js?");

/***/ }),

/***/ "./src/js/modules/utils.js":
/*!*********************************!*\
  !*** ./src/js/modules/utils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.closestParent = closestParent;\nexports.outerWidth = outerWidth;\nexports.outerHeight = outerHeight;\nexports.getURLQueryString = getURLQueryString;\nexports.decodeCharacters = decodeCharacters;\nexports.resetStyles = resetStyles;\n// Utilities Module\n\n/**\n * Returns the nearest parent element matching the selector, with the option to return the starting\n * element if it matches.\n * source: https://blog.wearecolony.com/a-year-without-jquery/\n * @param   {Element}       el\n * @param   {string}        selector\n * @param   {boolean}       [includeSelf]\n * @return  {Element|null}\n */\n\nfunction closestParent(el, selector, includeSelf) {\n  var parent = el.parentNode;\n\n  if (includeSelf && el.matches(selector)) {\n    return el;\n  }\n\n  while (parent && parent !== document.body) {\n    if (parent.matches && parent.matches(selector)) {\n      return parent;\n    } else if (parent.parentNode) {\n      parent = parent.parentNode;\n    } else {\n      return null;\n    }\n  }\n  return null;\n}\n\n/**\n * outerWidth function that returns the width of an element including horizontal margins\n * @param {Element} el\n */\n\nfunction outerWidth(el) {\n  var width = el.offsetWidth;\n  var style = getComputedStyle(el);\n\n  width += parseInt(style.marginLeft) + parseInt(style.marginRight);\n  return width;\n}\n\n/**\n * outerWidth function that returns the height of an element including vertical margins\n * @param {Element} el\n */\n\nfunction outerHeight(el) {\n  var height = el.offsetHeight;\n  var style = getComputedStyle(el);\n\n  height += parseInt(style.marginTop) + parseInt(style.marginBottom);\n  return height;\n}\n\n/**\n * Read a page's GET URL query string variables and return them as an associative array.\n * @return  {Array}\n */\n\nfunction getURLQueryString() {\n  var vars = [],\n      hash;\n  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');\n  for (var i = 0; i < hashes.length; i++) {\n    hash = hashes[i].split('=');\n    vars.push(hash[0]);\n    vars[hash[0]] = hash[1];\n  }\n  return vars;\n}\n\n/**\n * Convert any encoded characters in a string to their unencoded versions\n * - e.g. &amp to &\n * @function\n */\n\nfunction decodeCharacters(text) {\n  var elem = document.createElement('textarea');\n  elem.innerHTML = text;\n  return elem.value;\n}\n\n/**\n * Remove the style attribute from an element\n * @function\n */\n\nfunction resetStyles(element) {\n  element.setAttribute('style', '');\n}\n\n//# sourceURL=webpack:///./src/js/modules/utils.js?");

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