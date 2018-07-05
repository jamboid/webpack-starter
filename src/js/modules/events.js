import * as utils from "./utils.js";
import delegate from "delegate";

// Events module
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

const moduleInterface = {
  createDelegatedEventListener: createDelegatedEventListener
}

export default moduleInterface;
