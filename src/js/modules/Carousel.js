// Base Carousel module
"use strict";


import PubSub from "pubsub-js";
import Events from "Modules/Events";

const selSlider = "[data-carousel-type=slider]";
const selFader = "[data-carousel-type=fader]";


/**
 * Carousel - Description
 */
class Carousel {
  constructor(element) {
    this.compDOMElement = element;
  }

  bindCustomMessageEvents() {
    this.compDOMElement.addEventListener('toggleShowHide', this.toggleControl.bind(this));
  }
}

/**
 * Fader - Description
 * @extends Carousel
 */
class Fader extends Carousel {
  constructor(element) {
    super(element);
  }
}

/**
 * Scroller - Description
 * @extends Carousel
 */
class Slider extends Carousel {
  constructor(element) {
    super(element);
  }
}

/**
 * delegateEvents - Create delegated event listeners for the components within this module
 *
 * @returns {type} Description
 */
function delegateEvents() {
  //Events.delegate("event", selector, "selectTab");
}

/**
 * initModule - Initialise this module and the components contained in it
 *
 * @returns {type} Description
 */
export function initModule() {
  // Create delegated event listeners for the components within this module
  delegateEvents();

  // Find and initialise Slider carousel components
  const sliders = document.querySelectorAll(selSlider);

  sliders.forEach(element => {
    const newSlider = new Slider(element);
  });

  // Find and initialise Fader carousel components
  const faders = document.querySelectorAll(selFader);

  faders.forEach(element => {
    const newFader = new Fader(element);
  });
}

export default {
  initModule: initModule
};