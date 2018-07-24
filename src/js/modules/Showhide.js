// Show/Hide Components module

import PubSub from "pubsub-js";
import Events from "Modules/Events";
import Animation from "Modules/Animation";

const selComponent = "[data-showhide=component]";
const selAction = "[data-showhide=component] [data-showhide=toggle]";
const selContent = "[data-showhide=content]";
const displayClass = 'is_Open';

/**
 * ShowHide - Class representing a Show/Hide DOM component
 */
class ShowHide {
  /**
   * constructor - Description
   *
   * @param {object} element DOM element
   *
   * @returns {type} Description
   */
  constructor(element) {
    this.compDOMElement = element;
    this.action = this.compDOMElement.querySelectorAll(selAction)[0];
    this.content = this.compDOMElement.querySelectorAll(selContent)[0];
    this.config = this.compDOMElement.getAttribute('data-showhide-config');
    this.animate = this.config.animate || false;
    this.speed = this.config.speed || 200;
    this.startState = this.config.open || false;

    this.bindCustomMessageEvents();
    this.setStartState();
  }

  toggleControl(event) {
    event.preventDefault();
    //this.compDOMElement.classList.toggle(displayClass);

    if (this.compDOMElement.classList.contains(displayClass)) {
      Animation.collapseElement(this.content);
      this.compDOMElement.classList.remove(displayClass);
    } else {
      Animation.expandElement(this.content);
      this.compDOMElement.classList.add(displayClass);
    }

    PubSub.publish(Events.messages.contentChange);
  }

  setStartState() {
    if (this.startState === true) {
      Animation.expandElement(this.content);
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
  Events.delegate('click', selAction, 'toggleShowHide');
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
  const showHideComponents = document.querySelectorAll(selComponent);
  Array.prototype.forEach.call(showHideComponents, (element) => {
    const newShowHide = new ShowHide(element);
  });
}

export default {initModule: initModule}
