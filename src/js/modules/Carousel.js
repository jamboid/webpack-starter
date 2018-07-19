// Base Carousel module

import PubSub from "pubsub-js";
import Events from "Modules/Events";

const selComponent = "[data-carousel=component]";

/**
 * Carousel - Class representing a Carousel DOM component
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
 * FadeCarousel - Class representing a Fade-type Carousel DOM component
 */
export class Fader extends Carousel {
  constructor(element) {
    super(element);
  }
}


export class Scroll extends Carousel {
  constructor(element) {
    super(element);
  }
}
