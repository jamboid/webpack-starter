// Show/Hide Components module
import * as events from "./events.js";

const selectors =  {
        selComponent : "[data-showhide=component]",
        selAction : "[data-showhide=component] [data-showhide=toggle]",
        selContent : "[data-showhide=content]"
      },
      displayClass = 'is_Open';

/**
 * Class representing a Show/Hide DOM component
 */
class ShowHide {
  toggleControl(e) {
    e.preventDefault();
    this.compDOMElement.classList.toggle(displayClass);
  }

  setStartState() {
    if (this.startState === true){
      this.compDOMElement.classList.add(displayClass);
    }
  }

  bindCustomMessageEvents() {
    this.compDOMElement.addEventListener('toggleShowHide', this.toggleControl.bind(this));
  }

  constructor(element) {
    this.compDOMElement = element;
    this.action = this.compDOMElement.querySelectorAll(selectors.selAction);
    this.content = this.compDOMElement.querySelectorAll(selectors.selContent);
    this.config = this.compDOMElement.getAttribute('data-showhide-config');
    this.animate = this.config.animate || false;
    this.speed = this.config.speed || 200;
    this.startState = this.config.open || false;

    this.bindCustomMessageEvents();
    this.setStartState();
  }
}

/**
 * Create delegated event listeners for the components within this module
 * @function
 */
function delegateEvents() {
  events.createDelegatedEventListener('click', selectors.selAction, 'toggleShowHide');
}

/**
 * Initialise this module and the components contained in it
 * @function
 * @param { }
 */
export function initModule() {
  // Create delegated event listeners for the components within this module
  delegateEvents();

  // Find and initialise Show/Hide components using the ShowHide class
  var showHideComponents = document.querySelectorAll(selectors.selComponent);
  Array.prototype.forEach.call(showHideComponents, function(element, i){
    const newShowHide = new ShowHide(element);
  });
}
