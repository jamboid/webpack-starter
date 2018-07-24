// Image Components module

import Events from "Modules/Events";

const selSmartImage = "[data-image-load]";
const selPlaceholderImage = "img";


/**
 * SmartImage - Class representing a Smart Image component that loads optimised images based on screen size
 */
class SmartImage {
  /**
   * constructor - Description
   *
   * @param {type} element Description
   *
   * @returns {type} Description
   */
  constructor(element) {
    this.smartImageElem = element;
    this.placeholderImage = this.smartImageElem.querySelector(selPlaceholderImage);
    this.loadingMethod = this.smartImageElem.getAttribute('data-image-load');
    this.config = this.smartImageElem.getAttribute('data-showhide-config');
    this.imageType = this.config.type || false;
    this.imageReloader = this.config.reload || false;
    this.imageTargetSel = this.smartImageElem.getAttribute('data-image-target') || null;
    this.imageLoaded = false;
  }
}

/**
 * delegateEvents - Create delegated event listeners for the components managed within this module
 *
 * @returns {type} Description
 */
function delegateEvents() {
  Events.delegate('click', '[data-image-load=click]', 'loadSmartImageOnClick');
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
  const smartImages = document.querySelectorAll(selSmartImage);
  Array.prototype.forEach.call(smartImages, (element) => {
    const newSmartImage = new SmartImage(element);
  });

}

export default {initModule: initModule}
