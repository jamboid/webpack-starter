// Show/Hide Components module
import * as events from "./events.js";

const selectors =  {
        selComponent : "[data-showhide=component]",
        selAction : "[data-showhide=component] [data-showhide=toggle]",
        selContent : "[data-showhide=content]"
      },
      displayClass = 'is_Open';

/**
 * ShowHide class used to control show/hide components
 */
class ShowHide {
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
}



function delegateEvents() {
  events.createDelegatedEventListener('click', selectors.selAction, 'toggleShowHide');
}

export function buildNippers() {
  delegateEvents();

  var nippers = document.querySelectorAll(selectors.selComponent);

  Array.prototype.forEach.call(nippers, function(el, i){
    let newShowHide = new ShowHide(el);
  });
}

const moduleInterface = {
  buildNippers:buildNippers
}

export default moduleInterface;
