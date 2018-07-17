// Base Carousel module

import PubSub from "pubsub-js";
import * as events from "Modules/Events";

const selectors =  {
        selComponent : "[data-carousel=component]"
      };

/**
 * Carousel - Class representing a Carousel DOM component
 */
class Carousel {
  constructor(element) {
    this.domElement = element;
  }
}

/**
 * FadeCarousel - Class representing a Fade-type Carousel DOM component
 */
class FadeCarousel extends Carousel {
  constructor(element) {
    super(element);
  }
}
