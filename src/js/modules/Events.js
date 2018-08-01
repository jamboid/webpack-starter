"use strict";


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
  "load": "page/load",
  "contentChange": "page-content/change",
  "layoutChange": "layout/change",
  "breakChange" : "breakpoint/change"
}

/**
 * createCustomEvent - Returns a custom event object
 *
 * @param {string} eventName Name of the custom event
 * @param {object} eventData Associated data passed through as part of the event object
 *
 * @returns {object} Custom Event object
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
 * bindGlobalMessages - Binds event listeners to global browser events and fires global messages in response
 *
 * @returns {type} Description
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
 * createDelegatedEventListener - Simple factory function to bind a common delegated event listener to the <body> element
 *
 * @param {string} eventType      the event type we're listening for
 * @param {string} selector       the selector for the element event is triggered on
 * @param {string} eventToTrigger custom event we want to send back to target element
 */
export function createDelegatedEventListener(eventType, selector, eventToTrigger) {
  console.log(selector);
  delegate(document.body, selector, eventType, (e) => {
    e.preventDefault();
    e.stopPropagation();
    let customEvent = createCustomEvent(eventToTrigger, null);
    e.target.dispatchEvent(customEvent);
  }, false);
}

/**
 * initModule - Initialise this module and the components contained in it
 *
 * @returns {type} Description
 */
export function initModule() {
  bindGlobalMessages();
}

export default {
  initModule: initModule,
  messages:messages,
  delegate:createDelegatedEventListener,
  createCustomEvent:createCustomEvent,
}
