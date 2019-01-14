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
/******/ 	__webpack_require__.p = ".";
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

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),

/***/ "./node_modules/delegate/src/closest.js":
/*!**********************************************!*\
  !*** ./node_modules/delegate/src/closest.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ "./node_modules/delegate/src/delegate.js":
/*!***********************************************!*\
  !*** ./node_modules/delegate/src/delegate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(/*! ./closest */ "./node_modules/delegate/src/closest.js");

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "./node_modules/imagesloaded/imagesloaded.js":
/*!***************************************************!*\
  !*** ./node_modules/imagesloaded/imagesloaded.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {

'use strict';

var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});


/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};
    root.PubSub = PubSub;

    var define = root.define;

    factory(PubSub);

    // AMD support
    if (typeof define === 'function' && define.amd){
        define(function() { return PubSub; });

        // CommonJS and Node.js module support
    } else if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1;

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( obj.hasOwnProperty(key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !messages.hasOwnProperty( matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( subscribers.hasOwnProperty(s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }
        };
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !messages.hasOwnProperty( message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;
        
        // return token for unsubscribing
        return token;
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( messages.hasOwnProperty(m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( messages.hasOwnProperty(value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( messages.hasOwnProperty( m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (message.hasOwnProperty(t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! Sass/screen.scss */ "./src/scss/screen.scss");

var _Utils = __webpack_require__(/*! Modules/Utils */ "./src/js/modules/Utils.js");

var _Showhide = __webpack_require__(/*! Modules/Showhide */ "./src/js/modules/Showhide.js");

var _Events = __webpack_require__(/*! Modules/Events */ "./src/js/modules/Events.js");

var _Modal = __webpack_require__(/*! Modules/Modal */ "./src/js/modules/Modal.js");

var _Image = __webpack_require__(/*! Modules/Image */ "./src/js/modules/Image.js");

/**
 * initialiseComponentModules - call module init functions
 *
 * @returns {type} Description
 */
function initialiseComponentModules() {
  (0, _Events.initModule)();
  (0, _Showhide.initModule)();
  (0, _Image.initModule)();
  (0, _Modal.initModule)();
}

(0, _Utils.ready)(initialiseComponentModules);

/***/ }),

/***/ "./src/js/modules/Animation.js":
/*!*************************************!*\
  !*** ./src/js/modules/Animation.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Animation module - functions to aid animating page elements */


//////////////////////
// Module Functions //
//////////////////////

/**
 * collapseElement - Collapses an element by setting its height to 0.
 *
 * @param {DOMElement} element - A single DOM element
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collapseElement = collapseElement;
exports.expandElement = expandElement;
function collapseElement(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;
  element.style.height = sectionHeight + "px";

  // temporarily disable all css transitions
  var elementTransition = element.style.transition;
  element.style.transition = '';

  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function () {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function () {
      element.style.height = 0 + 'px';
    });
  });
}

/**
 * expandElement - Expands an element with a height of 0 to its natural height by calculating this value.
 *
 * @param {DOMElement} element - A single DOM element
 */
function expandElement(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;

  // have the element transition to the height of its inner content
  element.style.height = sectionHeight + 'px';

  // when the next css transition finishes (which should be the one we just triggered)
  element.addEventListener('transitionend', function expansionEnds() {
    // remove this event listener so it only gets triggered once
    element.removeEventListener("transitionend", expansionEnds);
    // remove "height" from the element's inline styles, so it can return to its initial value
    element.style.height = null;
  });
}

exports.default = {
  collapseElement: collapseElement,
  expandElement: expandElement
};

/***/ }),

/***/ "./src/js/modules/Events.js":
/*!**********************************!*\
  !*** ./src/js/modules/Events.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
////////////////////
// Module Imports //
////////////////////


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = undefined;
exports.createDelegatedEventListener = createDelegatedEventListener;
exports.initModule = initModule;

var _debounce = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _delegate = __webpack_require__(/*! delegate */ "./node_modules/delegate/src/delegate.js");

var _delegate2 = _interopRequireDefault(_delegate);

var _pubsubJs = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//////////////////////
// Module Constants //
//////////////////////

/**
 * Object containing global message strings
 * @constant
 */
var messages = exports.messages = {
  "resize": "page/resize",
  "scroll": "page/scroll",
  "load": "page/load",
  "contentChange": "page-content/change",
  "layoutChange": "layout/change",
  "breakChange": "breakpoint/change"

  /////////////////////////
  // Classes & Functions //
  /////////////////////////

  /**
   * createCustomEvent - Returns a custom event object
   *
   * @param {string} eventName Name of the custom event
   * @param {object} eventData Associated data passed through as part of the event object
   *
   * @returns {object} Custom Event object
   */
};function createCustomEvent(eventName, eventData) {
  var customEvent = void 0;

  if (window.CustomEvent) {
    customEvent = new CustomEvent(eventName, { detail: { some: eventData }, bubbles: true });
  } else {
    customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(eventName, true, true, { some: eventData });
  }

  return customEvent;
}

/**
 * bindGlobalMessages - Binds event listeners to global browser events and fires global messages in response
 *
 * @returns {type} Description
 */
function bindGlobalMessages() {
  // Handle page scroll
  window.addEventListener('scroll', function () {
    // Publish global message
    _pubsubJs2.default.publish(messages.scroll);
  });

  // Handle debounced resize
  window.onresize = (0, _debounce2.default)(function () {
    // Publish global  message
    _pubsubJs2.default.publish(messages.resize);
  }, 200);
}

/**
 * createDelegatedEventListener - Simple factory function to bind a common delegated event listener to the <body> element
 *
 * @param {string} eventType      the event type we're listening for
 * @param {string} selector       the selector for the element event is triggered on
 * @param {string} eventToTrigger custom event we want to send back to target element
 */
function createDelegatedEventListener(eventType, selector, eventToTrigger) {
  (0, _delegate2.default)(document.body, selector, eventType, function (e) {
    e.preventDefault();
    e.stopPropagation();
    var customEvent = createCustomEvent(eventToTrigger, null);
    e.target.dispatchEvent(customEvent);
  }, false);
}

/**
 * initModule - Initialise this module and the components contained in it
 *
 * @returns {type} Description
 */
function initModule() {
  bindGlobalMessages();
}

exports.default = {
  initModule: initModule,
  messages: messages,
  delegate: createDelegatedEventListener,
  createCustomEvent: createCustomEvent
};

/***/ }),

/***/ "./src/js/modules/Image.js":
/*!*********************************!*\
  !*** ./src/js/modules/Image.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Image Components module


////////////////////
// Module Imports //
////////////////////

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.initialiseSmartImages = initialiseSmartImages;
exports.initModule = initModule;

var _pubsubJs = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _imagesloaded = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");

var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

var _Events = __webpack_require__(/*! Modules/Events */ "./src/js/modules/Events.js");

var _Events2 = _interopRequireDefault(_Events);

var _Utils = __webpack_require__(/*! Modules/Utils */ "./src/js/modules/Utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//////////////////////
// Module Constants //
//////////////////////

// Selectors
var selSmartImage = "[data-image-load]";
var selClickToLoadSmartImage = "[data-image-load=click] img.placeholder";
var selPlaceholderImage = "img";

// Classes
var imageLoadingClass = "ob_Image--loading";
var imageLoadedClass = "ob_Image--loaded";
var imageDisplayedClass = "ob_Image--displayed";
var imageFlexClass = "ob_Image--flex";
var imageHiddenClass = "ob_Image--isHidden";

// Image Observer
var observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};

var imageObserver = void 0;

////////////////////////////////
// Module Classes & Functions //
////////////////////////////////

/**
 * SmartImage - Class representing a Smart Image component that loads optimised images based on screen size
 */

var SmartImage = function () {
  function SmartImage(element) {
    _classCallCheck(this, SmartImage);

    // Set properties
    this.smartImageElem = element;
    this.placeholderImage = this.smartImageElem.querySelector(selPlaceholderImage);
    this.loadingMethod = this.smartImageElem.dataset.imageLoad;
    this.config = JSON.parse(this.smartImageElem.dataset.imageConfig);
    this.imageType = this.config.type || false;
    this.imageReloader = this.config.reload || false;
    this.imageTargetSel = this.smartImageElem.dataset.imageTarget || null;
    this.imageLoaded = false;
    this.imageToAdd = document.createElement("img");
    this.srcSet = JSON.parse(this.smartImageElem.dataset.srcSet) || {};

    // Add Image Element to observer
    if (this.loadingMethod === 'view') {
      imageObserver.observe(this.smartImageElem);
    }

    // Call initial methods
    this.bindCustomMessageEvents();
    this.subscribeToEvents();

    if (this.loadingMethod === "pageload") {
      this.getImageFile();
    } else if (this.loadingMethod === "view") {
      this.loadImageIfInView();
    }
  }

  /**
   * calculateImageBreakpointToUse - Description
   *
   * @returns {string} Description
   */


  _createClass(SmartImage, [{
    key: "calculateImageBreakpointToUse",
    value: function calculateImageBreakpointToUse() {
      var pageWidth = window.innerWidth;
      var imageSrcKey = "max";

      for (var key in this.srcSet) {
        if (this.srcSet.hasOwnProperty(key)) {
          // If the current key is not 'max' check that the page width is less than it,
          // and it is less than the current value for imageSrcKey
          if (key !== "max") {
            // If imageSrcKey is not set to 'max' check if the key
            // is greater or equal than the page width and also if it
            // is less than the current value of imageSrcKey
            if (imageSrcKey !== "max") {
              if (parseInt(key) >= pageWidth && parseInt(key) < imageSrcKey) {
                imageSrcKey = key;
              }
            } else {
              // If imageSrcKey is still set to 'max' just check if the key
              // is greater or equal than the page width
              if (parseInt(key) > pageWidth) {
                imageSrcKey = key;
              }
            }
          }
        }
      }

      return imageSrcKey;
    }

    /**
     * updateImageAttributes - Description
     *
     * @param {Element} image <img> html element
     *
     */

  }, {
    key: "updateImageAttributes",
    value: function updateImageAttributes(image) {
      var imageAlt = this.smartImageElem.dataset.alt || "image";
      var imageWidth = this.smartImageElem.dataset.width;
      var imageClass = this.smartImageElem.dataset.class;

      if (imageAlt.length > 0) {
        image.alt = imageAlt;
      }

      if (imageWidth) {
        image.width = imageWidth;
      }

      if (imageClass) {
        image.classList.add(imageClass);
      }
    }

    /**
     * displayImageInContainer - Description
     *
     */

  }, {
    key: "displayImageInContainer",
    value: function displayImageInContainer() {
      var _this = this;

      // Add 'loading' class to SmartImage container
      this.smartImageElem.classList.add(imageLoadingClass);

      if (this.placeholderImage) {
        this.placeholderImage.src = this.imageToAdd.src;
        this.placeholderImage.classList.remove("placeholder");
        this.placeholderImage.removeAttribute("width");
        this.placeholderImage.removeAttribute("height");

        this.updateImageAttributes(this.placeholderImage);
      } else {
        this.updateImageAttributes(this.imageToAdd);

        if (this.imageTargetSel !== null) {
          //this.smartImageElem.parent().find(imageTargetSel).eq(0).append(this.imageToAdd);
        } else {
          this.smartImageElem.insertBefore(this.imageToAdd, null);
        }
        this.placeholderImage = this.imageToAdd;
      }

      this.smartImageElem.classList.add(imageLoadedClass);
      // Need to allow browser a moment to process the addition of the image before displaying it
      window.setTimeout(function () {
        _this.smartImageElem.classList.add(imageDisplayedClass);
        _pubsubJs2.default.publish("content/update");
      }, 50);

      this.imageLoaded = true;
      imageObserver.unobserve(this.smartImageElem);
    }

    /**
     * displayImageAsBackground - Description
     *
     * @param {string} path Description
     *
     */

  }, {
    key: "displayImageAsBackground",
    value: function displayImageAsBackground(path) {
      var _this2 = this;

      var smartImage = "url(" + path + ")";
      var imageBackgroundPos = this.smartImageElem.dataset.position;
      var imageBackgroundColor = this.smartImageElem.dataset.backgroundColor;

      this.smartImageElem.classList.add(imageLoadedClass);
      this.smartImageElem.style.backgroundImage = smartImage;
      this.smartImageElem.classList.add(imageBackgroundPos);
      this.smartImageElem.style.backgroundColor = imageBackgroundColor;

      window.setTimeout(function () {
        _this2.smartImageElem.classList.add(imageDisplayedClass);
        _pubsubJs2.default.publish(_Events2.default.messages.contentChange);
      }, 50);

      this.imageLoaded = true;
      imageObserver.unobserve(this.smartImageElem);
    }

    /**
     * getImageFile - Description
     *
     */

  }, {
    key: "getImageFile",
    value: function getImageFile() {
      var _this3 = this;

      var thisImageUrl = this.srcSet[this.calculateImageBreakpointToUse()];

      //Site.utils.cl("image url: " + thisImageUrl);

      if (thisImageUrl !== "none") {
        this.smartImageElem.classList.remove("is_Hidden");
        this.imageToAdd.src = thisImageUrl;

        var imageLoader = (0, _imagesloaded2.default)(this.imageToAdd);

        if (this.imageType === "inline") {
          imageLoader.on("done", function () {
            _this3.smartImageElem.classList.remove(imageLoadingClass);
            _this3.displayImageInContainer(_this3.imageToAdd);
          });
        } else if (this.imageType === "background") {
          // The imagesLoaded function is called for image we want to load.
          // There is no initial callback because everything we want to do can wait
          // until the image is fully downloaded.
          imageLoader.on("done", function () {
            _this3.smartImageElem.classList.add(imageFlexClass);
            _this3.displayImageAsBackground(thisImageUrl);
          });
        }
      } else {
        this.smartImageElem.classList.add(imageHiddenClass);
      }

      _pubsubJs2.default.publish(_Events2.default.messages.imageLoaded);
      _pubsubJs2.default.publish(_Events2.default.messages.layoutChange);
    }

    /**
     * Load and display a smart image - use this when being in view doesn't matter
     */

  }, {
    key: "loadImage",
    value: function loadImage() {
      if (this.imageType === "inline") {
        if (this.imageLoaded === false || this.imageReloader === true) {
          this.getImageFile(this.smartImageElem);
        }
      } else if (this.imageType === "background") {
        this.smartImageElem.classList.add(imageFlexClass);
        if (this.imageLoaded === false || this.imageReloader === true) {
          this.getImageFile(this.smartImageElem);
        }
      }
    }

    /**
     * loadImageIfInView - Check if
     */

  }, {
    key: "loadImageIfInView",
    value: function loadImageIfInView() {
      var component = this.smartImageElem;

      if (this.imageType === "background") {
        component = component.parentNode;
      }

      if ((0, _Utils.isElementInView)(component) && (this.imageLoaded === false || this.imageReloader === true)) {
        this.getImageFile(this.smartImageElem);
      }
    }

    /**
     * loadSmartImage - Description
     *
     * @param {event} e Description
     */

  }, {
    key: "loadSmartImage",
    value: function loadSmartImage(e) {
      e.preventDefault();

      if (this.imageLoaded === false) {
        this.loadImageIfInView(this.smartImageElem);
      }
    }

    /**
     * reloadImage - Description
     *
     * @param {event} e Description
     */

  }, {
    key: "reloadImage",
    value: function reloadImage(e) {
      e.preventDefault();

      if (this.imageLoaded === true && this.imageReloader === true) {
        this.getImageFile();
      }
    }

    /**
     * loadSmartImageOnClick - Description
     *
     * @param {event} e Description
     */

  }, {
    key: "loadSmartImageOnClick",
    value: function loadSmartImageOnClick(e) {
      e.preventDefault();

      if (this.imageLoaded === false) {
        this.loadImage(this.smartImageElem);
      }
    }

    /**
     * bindCustomMessageEvents - Binds custom event listeners to the Smart Image DOM Element
     *
     */

  }, {
    key: "bindCustomMessageEvents",
    value: function bindCustomMessageEvents() {
      this.smartImageElem.addEventListener("siLoad", this.loadSmartImage.bind(this));

      this.smartImageElem.addEventListener("siReload", this.reloadImage.bind(this));

      this.smartImageElem.addEventListener("siClickLoad", this.loadSmartImageOnClick.bind(this));
    }

    /**
     * subscribeToEvents - Subscribes the component to global messages and sets the component's responses via internal custom events
     *
     */

  }, {
    key: "subscribeToEvents",
    value: function subscribeToEvents() {
      var _this4 = this;

      if (this.loadingMethod === "view") {
        // Fallback to scroll event detection if browser doesn't support IntersectionObserver
        if (typeof window.IntersectionObserver === 'undefined') {
          _pubsubJs2.default.subscribe(_Events2.default.messages.scroll, function () {
            _this4.smartImageElem.dispatchEvent(_Events2.default.createCustomEvent("siLoad"));
          });
        }

        _pubsubJs2.default.subscribe(_Events2.default.messages.load, function () {
          _this4.smartImageElem.dispatchEvent(_Events2.default.createCustomEvent("siLoad"));
        });

        _pubsubJs2.default.subscribe(_Events2.default.messages.layoutChange, function () {
          _this4.smartImageElem.dispatchEvent(_Events2.default.createCustomEvent("siLoad"));
        });
      }

      _pubsubJs2.default.subscribe(_Events2.default.messages.resize, function () {
        _this4.smartImageElem.dispatchEvent(_Events2.default.createCustomEvent("siReload"));
      });

      _pubsubJs2.default.subscribe(_Events2.default.messages.breakChange, function () {
        _this4.smartImageElem.dispatchEvent(_Events2.default.createCustomEvent("siReload"));
      });
    }
  }]);

  return SmartImage;
}();

/**
 * delegateEvents - Create delegated event listeners for the components managed within this module
 *
 * @returns {type} Description
 */


function delegateEvents() {
  _Events2.default.delegate("click", selClickToLoadSmartImage, "siClickLoad");
}

function initialiseSmartImages() {
  var smartImages = document.querySelectorAll(selSmartImage);
  Array.prototype.forEach.call(smartImages, function (element) {
    var newSmartImage = new SmartImage(element);
  });
}

function handleIntersection(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0) {
      entry.target.dispatchEvent(_Events2.default.createCustomEvent("siLoad"));
    }
  });
}

function initialiseImageObserver() {
  imageObserver = new IntersectionObserver(handleIntersection, observerOptions);
}

/**
 * initModule - Initialise this module and the components contained in it
 *
 * @returns {type} Description
 */
function initModule() {
  // Create delegated event listeners for the components within this module
  delegateEvents();

  // Initialise an observer object to detect when smart image elements are in view
  initialiseImageObserver();

  // Find and initialise Show/Hide components using the ShowHide class
  initialiseSmartImages();
}

exports.default = { initModule: initModule };

/***/ }),

/***/ "./src/js/modules/Modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/Modal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Modal Components Module


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initModule = initModule;

var _pubsubJs = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _Events = __webpack_require__(/*! Modules/Events */ "./src/js/modules/Events.js");

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var selAction = '[data-modal="link"]';
var templateModal = "\n  <div class=\"cp_Modal\" data-modal=\"component\">\n    <div class=\"cp_Modal__screen\"></div>\n    <div class=\"cp_Modal__content\"></div>\n  </div>\n";

/**
 * Modal - Class that reper
 */

var Modal = function Modal() {
  _classCallCheck(this, Modal);
};

/**
 * ModalLinkManager - Class for managing links that generate page modals
 */


var ModalLinkManager = function ModalLinkManager() {
  _classCallCheck(this, ModalLinkManager);
};

/**
 * delegateEvents - Create delegated event listeners for the components managed within this module
 *
 * @returns {type} Description
 */


function delegateEvents() {
  _Events2.default.delegate('click', selAction, 'toggleShowHide');
}

/**
 * initModule - Initialise this module and the components contained in it
 *
 * @returns {type} Description
 */
function initModule() {
  // Create delegated event listeners for the components within this module
  delegateEvents();
}

exports.default = { initModule: initModule };

/***/ }),

/***/ "./src/js/modules/Showhide.js":
/*!************************************!*\
  !*** ./src/js/modules/Showhide.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Show/Hide Components module


////////////////////
// Module Imports //
////////////////////

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.initModule = initModule;

var _pubsubJs = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _Events = __webpack_require__(/*! Modules/Events */ "./src/js/modules/Events.js");

var _Events2 = _interopRequireDefault(_Events);

var _Animation = __webpack_require__(/*! Modules/Animation */ "./src/js/modules/Animation.js");

var _Animation2 = _interopRequireDefault(_Animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//////////////////////
// Module Constants //
//////////////////////

var selComponent = "[data-showhide=component]";
var selAction = "[data-showhide=component] [data-showhide=toggle]";
var selContent = "[data-showhide=content]";
var displayClass = "is_Open";

////////////////////////////////
// Module Classes & Functions //
////////////////////////////////

/**
 * ShowHide - Class representing a Show/Hide DOM component
 */

var ShowHide = function () {
  /**
   * constructor - Description
   *
   * @param {object} element DOM element
   *
   * @returns {type} Description
   */
  function ShowHide(element) {
    _classCallCheck(this, ShowHide);

    // Set properties
    this.element = element;
    this.action = this.element.querySelectorAll(selAction)[0];
    this.content = this.element.querySelectorAll(selContent)[0];
    this.config = this.element.getAttribute("data-showhide-config");
    this.animate = this.config.animate || false;
    this.speed = this.config.speed || 200;
    this.startState = this.config.open || false;

    // Call initial methods
    this.bindCustomMessageEvents();
    this.setStartState();
  }

  /**
   * toggleControl - Description
   *
   * @param {type} event Description
   */


  _createClass(ShowHide, [{
    key: "toggleControl",
    value: function toggleControl(event) {
      event.preventDefault();

      if (this.element.classList.contains(displayClass)) {
        _Animation2.default.collapseElement(this.content);
        this.element.classList.remove(displayClass);
      } else {
        _Animation2.default.expandElement(this.content);
        this.element.classList.add(displayClass);
      }

      _pubsubJs2.default.publish(_Events2.default.messages.contentChange);
    }

    /**
     * setStartState - Description
     *
     * @returns {type} Description
     */

  }, {
    key: "setStartState",
    value: function setStartState() {
      if (this.startState === true) {
        _Animation2.default.expandElement(this.content);
        this.element.classList.add(displayClass);
      }
    }

    /**
     * bindCustomMessageEvents - Description
     *
     * @returns {type} Description
     */

  }, {
    key: "bindCustomMessageEvents",
    value: function bindCustomMessageEvents() {
      this.element.addEventListener("toggleShowHide", this.toggleControl.bind(this));
    }
  }]);

  return ShowHide;
}();

/**
 * delegateEvents - Create delegated event listeners for the components within this module
 *
 * @returns {type} Description
 */


function delegateEvents() {
  _Events2.default.delegate("click", selAction, "toggleShowHide");
}

/**
 * initModule - Initialise this module and the components contained in it
 *
 * @returns {type} Description
 */
function initModule() {
  // Create delegated event listeners for the components within this module
  delegateEvents();

  // Find and initialise Show/Hide components using the ShowHide class
  var showHideComponents = document.querySelectorAll(selComponent);

  Array.prototype.forEach.call(showHideComponents, function (element) {
    var newShowHide = new ShowHide(element);
  });
}

exports.default = {
  initModule: initModule
};

/***/ }),

/***/ "./src/js/modules/Utils.js":
/*!*********************************!*\
  !*** ./src/js/modules/Utils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Utilities Module


/**
 * Returns the nearest parent element matching the selector, with the option to return the starting element if it matches.
 * source: https://blog.wearecolony.com/a-year-without-jquery/
 * @param   {Element}       el
 * @param   {string}        selector
 * @param   {boolean}       [includeSelf]
 * @return  {Element|null}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closestParent = closestParent;
exports.isElementInView = isElementInView;
exports.outerWidth = outerWidth;
exports.outerHeight = outerHeight;
exports.getURLQueryString = getURLQueryString;
exports.decodeCharacters = decodeCharacters;
exports.resetStyles = resetStyles;
exports.getOffset = getOffset;
exports.ready = ready;
function closestParent(el, selector, includeSelf) {
  var parent = el.parentNode;

  if (includeSelf && el.matches(selector)) {
    return el;
  }

  while (parent && parent !== document.body) {
    if (parent.matches && parent.matches(selector)) {
      return parent;
    } else if (parent.parentNode) {
      parent = parent.parentNode;
    } else {
      return null;
    }
  }
  return null;
}

/**
 * isElementInView - Description
 *
 * @param {object} element Description
 *
 * @returns {boolean} Description
 */
function isElementInView(element) {
  var windowHeight = window.innerHeight;
  var scrollTop = window.scrollY;
  var elementOffset = element.getBoundingClientRect();
  var elementTop = elementOffset.top;
  var elementHeight = element.offsetHeight;

  if (elementTop < scrollTop + windowHeight && elementTop + elementHeight > scrollTop) {
    return true;
  } else if (elementTop + elementHeight > scrollTop && elementTop + elementHeight < scrollTop + windowHeight) {
    return true;
  } else {
    return false;
  }
}

/**
 * outerWidth - function that returns the width of an element including horizontal margins
 *
 * @param {object} el - Single DOM element
 *
 * @returns {int} calculated outer width of el
 */
function outerWidth(el) {
  var width = parseInt(el.offsetWidth);
  var style = getComputedStyle(el);

  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
}

/**
 * outerWidth function that returns the height of an element including vertical margins
 * @param {Element} el
 */

function outerHeight(el) {
  var height = parseInt(el.offsetHeight);
  var style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

/**
 * Read a page's GET URL query string variables and return them as an associative array.
 * @return  {Array}
 */
function getURLQueryString() {
  var vars = [],
      hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

/**
 * decodeCharacters - Convert any encoded characters in a string to their unencoded versions - e.g. &amp to &
 *
 * @param {string} text
 *
 * @returns {string}
 */
function decodeCharacters(text) {
  var elem = document.createElement('textarea');
  elem.innerHTML = text;
  return elem.value;
}

/**
 * resetStyles - Remove the style attribute from an element
 *
 * @param {type} element Description
 *
 * @returns {type} Description
 */
function resetStyles(element) {
  element.setAttribute('style', '');
}

/**
 * getOffset - Return an object with the top and left offsets of an element
 *
 * @param {element} el Single DOM element
 *
 * @returns {object} Simple object with left and top properties
 */
function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  };
}

/**
 * ready - Call a function when the page DOM is loaded and complete
 *
 * @param {function} fn Description
 */
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

exports.default = {
  closestParent: closestParent,
  isElementInView: isElementInView,
  outerWidth: outerWidth,
  outerHeight: outerHeight,
  getURLQueryString: getURLQueryString,
  decodeCharacters: decodeCharacters,
  resetStyles: resetStyles,
  getOffset: getOffset,
  ready: ready
};

/***/ }),

/***/ "./src/scss/screen.scss":
/*!******************************!*\
  !*** ./src/scss/screen.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=site.js.map