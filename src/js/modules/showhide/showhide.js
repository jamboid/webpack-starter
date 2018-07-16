// Show/Hide Components module

import PubSub from "pubsub-js";
import * as events from "../events/events.js";
import * as animation from "../animation/animation.js";


const selectors =  {
        selComponent : "[data-showhide=component]",
        selAction : "[data-showhide=component] [data-showhide=toggle]",
        selContent : "[data-showhide=content]"
      },
      displayClass = 'is_Open';

/**
 * ShowHide - Class representing a Show/Hide DOM component
 */
class ShowHide {
  constructor(element) {
    this.compDOMElement = element;
    this.action = this.compDOMElement.querySelectorAll(selectors.selAction)[0];
    this.content = this.compDOMElement.querySelectorAll(selectors.selContent)[0];
    this.config = this.compDOMElement.getAttribute('data-showhide-config');
    this.animate = this.config.animate || false;
    this.speed = this.config.speed || 200;
    this.startState = this.config.open || false;

    this.bindCustomMessageEvents();
    this.setStartState();
  }

  toggleControl(e) {
    e.preventDefault();
    //this.compDOMElement.classList.toggle(displayClass);

    if(this.compDOMElement.classList.contains(displayClass)) {
      animation.collapseElement(this.content);
      this.compDOMElement.classList.remove(displayClass);
    } else {
      animation.expandElement(this.content);
      this.compDOMElement.classList.add(displayClass);
    }

    PubSub.publish(events.messages.contentChange);
  }

  setStartState() {
    if (this.startState === true){
      animation.expandElement(this.content);
      this.compDOMElement.classList.add(displayClass);
    }
  }

  bindCustomMessageEvents() {
    this.compDOMElement.addEventListener('toggleShowHide', this.toggleControl.bind(this));
  }
}


/**
 * delegateEvents - Create delegated event listeners for the components within this module
 *
 * @returns {type} Description
 */
function delegateEvents() {
  events.createDelegatedEventListener('click', selectors.selAction, 'toggleShowHide');
}


/**
 * initModule - Initialise this module and the components contained in it
 *
 * @returns {type} Description
 */
export function initModule() {
  // Create delegated event listeners for the components within this module
  delegateEvents();

  // Find and initialise Show/Hide components using the ShowHide class
  var showHideComponents = document.querySelectorAll(selectors.selComponent);
  Array.prototype.forEach.call(showHideComponents, function(element){
    const newShowHide = new ShowHide(element);
  });
}
