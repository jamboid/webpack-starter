// Show/Hide Components module
import * as events from "./events.js";

const selectors =  {
  selComponent : "[data-showhide=component]",
  selAction : "[data-showhide=component] [data-showhide=toggle]",
  selContent : "[data-showhide=content]"
}

const displayClass = 'is_Open';

class ShowHide {
  constructor(element) {
    this.nipper = element;
    this.action = this.nipper.querySelectorAll(selectors.selAction);
    this.content = this.nipper.querySelectorAll(selectors.selContent);
    this.config = this.nipper.getAttribute('data-showhide-config');
    this.animate = this.config.animate || false;
    this.speed = this.config.speed || 200;
    this.startState = this.config.open || false;

    this.bindCustomMessageEvents();
    this.setInitialState();
  }

  toggleControl(element) {
    element.classList.toggle(displayClass);
  }

  setInitialState() {
    if (this.startState === true){
      this.nipper.classList.add(displayClass);
    }
  }

  bindCustomMessageEvents() {
    // this.nipper.addEventListener('toggleShowHide', function (e) {
    //   e.preventDefault();
    //   this.toggleControl();
    // });
    window.console.log(this.action);

    events.addEventListenerToNodeList(this.action, 'click', this.toggleControl(this.nipper));
  }
}

export function buildNippers() {
  var nippers = document.querySelectorAll(selectors.selComponent);
  Array.prototype.forEach.call(nippers, function(el, i){
    let newShowHide = new ShowHide(el);
  });
}



const moduleInterface = {
  buildNippers:buildNippers
}

export default moduleInterface;
