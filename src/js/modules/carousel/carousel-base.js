// Base Carousel module

import PubSub from "pubsub-js";
import * as events from "../events/events.js";

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
