//import * as utils from "./utils.js";
import debounce from "debounce";
import delegate from "delegate";
import PubSub from "pubsub-js";

/**
 * Object containing global message strings
 * @constant
 */
export const messages = {
  "resize": "page/resize",
  "scroll": "page/scroll",
  "contentChange": "page-content/change"
}

/**
 * Returns a custom event object
 * @function
 * @param {string} eventName
 * @param {any} eventData
 * &returns {Object}
 */
function createCustomEvent(eventName, eventData) {
  let customEvent;

  if (window.CustomEvent) {
    customEvent = new CustomEvent(eventName, {detail: {some: eventData}, bubbles: true});
  } else {
    customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(eventName, true, true, {some: eventData});
  }

  return customEvent;
}

/**
 * Binds event listeners to global browser events and fires global messages in response
 * @function
 */
function bindGlobalMessages() {
  // Handle page scroll
  window.addEventListener('scroll', function() {
    // Publish global message
    PubSub.publish(messages.scroll);
  });

  // Handle debounced resize
  window.onresize = debounce(function() {
    // Publish global  message
    PubSub.publish(messages.resize);
  }, 200);
}


/**
 * Simple factory function to bind a common delegated event listener to the <body> element
 * @function
 * @parameter eventType (string) - the event type we're listening for
 * @parameter selector (string) - the selector for the element event is triggered on
 * @parameter eventToTrigger (string) - custom event we want to send back to target element
 */
export function createDelegatedEventListener(eventType, selector, eventToTrigger) {
  delegate(document.body, selector, eventType, function(e) {
    e.preventDefault();
    e.stopPropagation();
    let customEvent = createCustomEvent(eventToTrigger, null);
    e.target.dispatchEvent(customEvent);
  }, false);
}

/**
 * Initialise this module and the components contained in it
 * @function
 * @param { }
 */
export function initModule() {
  bindGlobalMessages();
}
