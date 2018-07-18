// Base Carousel module

import PubSub from "pubsub-js";
import Events from "Modules/Events";

const selectors =  {
        selComponent : "[data-carousel=component]"
      };

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
class Fader extends Carousel {
  constructor(element) {
    super(element);
  }
}


class Scroll extends Carousel {
  constructor(element) {
    super(element);
  }
}
