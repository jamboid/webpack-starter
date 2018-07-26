// Image Components module

// Imports
import PubSub from "pubsub-js";
import Events from "Modules/Events";
import {isElementInView as inView} from "Modules/Utils";
import imagesLoaded from "imagesloaded";

const selSmartImage = "[data-image-load]";
const selClickToLoadSmartImage = "[data-image-load=click]";
const selPlaceholderImage = "img";

/**
 * SmartImage - Class representing a Smart Image component that loads optimised images based on screen size
 */
class SmartImage {

  constructor(element) {
    this.smartImageElem = element;
    this.placeholderImage = this.smartImageElem.querySelector(selPlaceholderImage);
    this.loadingMethod = this.smartImageElem.getAttribute('data-image-load');
    this.config = JSON.parse(this.smartImageElem.getAttribute('data-image-config'));
    this.imageType = this.config.type || false;
    this.imageReloader = this.config.reload || false;
    this.imageTargetSel = this.smartImageElem.getAttribute('data-image-target') || null;
    this.imageLoaded = false;
    this.imageToAdd = document.createElement('img');
    this.srcSet = JSON.parse(this.smartImageElem.getAttribute('data-src-set')) || {};

    if (this.loadingMethod === 'pageload') {
      this.getImageFile();
    } else if (this.loadingMethod === 'view') {
      this.loadImageIfInView();
    }
  }


  /**
   * calculateImageBreakpointToUse - Description
   *
   * @returns {string} Description
   */
  calculateImageBreakpointToUse() {
    const pageWidth = window.innerWidth;
    let imageSrcKey = "max";

    for (let key in this.srcSet) {
      if (this.srcSet.hasOwnProperty(key)) {
        // If the current key is not 'max' check that the page width is less than it,
        // and it is less than the current value for imageSrcKey
        if(key !== 'max') {
          // If imageSrcKey is not set to 'max' check if the key
          // is greater or equal than the page width and also if it
          // is less than the current value of imageSrcKey
          if(imageSrcKey !== 'max') {
            if(parseInt(key) >= pageWidth && parseInt(key) < imageSrcKey) {
              imageSrcKey = key;
            }
          }
          // If imageSrcKey is still set to 'max' just check if the key
          // is greater or equal than the page width
          else {
            if(parseInt(key) > pageWidth) {
              imageSrcKey = key;
            }
          }
        }
      }
    }

    return imageSrcKey;
  }


  /**
   * Display a pre-loaded lazy image, adding atrributes set on
   * the sprite container
   * @function
   * @parameter path (String)
   */
  displayImageInContainer() {
    const imageAlt = this.smartImageElem.getAttribute('data-alt') || 'image';
    const imageWidth = this.smartImageElem.getAttribute('data-width');
    const imageClass = this.smartImageElem.getAttribute('data-class');

    // Add 'loading' class to SmartImage container
    this.smartImageElem.classList.add('ob_Image--loading');


    if(imageAlt.length > 0){
      this.imageToAdd.getAttribute('alt', imageAlt);
    }

    if(imageWidth) {
      this.imageToAdd.getAttribute('width', imageWidth);
    }

    if(imageClass) {
      this.imageToAdd.addClass(imageClass);
    }

    if(this.placeholderImage) {
      this.placeholderImage.getAttribute('src', this.imageToAdd.getAttribute('src'))
        .removeClass('placeholder')
        .removeAttr('width')
        .removeAttr('height');
    } else {

      if(this.imageTargetSel !== null){
        //this.smartImageElem.parent().find(imageTargetSel).eq(0).append(this.imageToAdd);
      } else {
        this.smartImageElem.insertBefore(this.imageToAdd, null);
      }

      this.placeholderImage = this.imageToAdd;
    }

    this.smartImageElem.classList.add('ob_Image--loaded');
    // Need to allow browser a moment to process the addition of the image before displaying it
    window.setTimeout(() => {
      this.smartImageElem.classList.add('ob_Image--displayed');
      PubSub.publish('content/update');
    }, 50);

    this.imageLoaded = true;
  }



  /**
   * displayImageAsBackground - Description
   *
   * @param {type} path Description
   *
   */
  displayImageAsBackground(path) {
    const smartImage = 'url(' + path + ')';
    const imageBackgroundPos = this.smartImageElem.getAttribute('data-position');
    const imageBackgroundColor = this.smartImageElem.getAttribute('data-background-color');

    this.smartImageElem.classList.add('ob_Image--loaded');
    this.smartImageElem.style.backgroundImage(smartImage);
    this.smartImageElem.classList.add(imageBackgroundPos);
    this.smartImageElem.style.backgroundColor(imageBackgroundColor);

    window.setTimeout(function () {
      this.smartImageElem.classList.add('ob_Image--displayed');
      PubSub.publish('content/update');
    }, 50);

    this.imageLoaded = true;
  }

  /**
   * Create and preload a new image based on a sprite src
   * then call a function once the image is loaded into memory
   * @function
   */
  getImageFile() {
    const thisImageUrl = this.srcSet[this.calculateImageBreakpointToUse()];

      //Site.utils.cl("image url: " + thisImageUrl);

      if(thisImageUrl !== 'none'){
        this.smartImageElem.classList.remove('is_Hidden');
        this.imageToAdd.setAttribute('src',thisImageUrl);

        const imageLoader = imagesLoaded(this.imageToAdd);

        if(this.imageType === 'inline') {
          imageLoader.on('done',() => {
            this.smartImageElem.classList.remove('ob_Image--loading');
            this.displayImageInContainer(this.imageToAdd);
            // We send a Global message indicating a change in page layout
            PubSub.publish(Events.messages.imageLoaded);
            PubSub.publish(Events.messages.layoutChange);

          });

        } else if (this.imageType === 'background') {

          // The imagesLoaded function is called for image we want to load.
          // There is no initial callback because everything we want to do can wait
          // until the image is fully downloaded.
          imageLoader.on('done',() => {
            // Add the class that gives the container its layout
            this.smartImageElem.classList.add('ob_Image--flex');
            // We call the function that adds the correct CSS to the the container
            this.displayImageAsBackground(thisImageUrl);
            // We send a Global message indicating a change in page layout
            PubSub.publish(Events.messages.imageLoaded);
            PubSub.publish(Events.messages.layoutChange);
          });
        }
      } else {
        this.smartImageElem.addClass('is_Hidden');
      }
  }



  /**
   * Load and display a smart image - use this when being in view doesn't matter
   * @function
   */
  loadImage() {
    if(this.imageType === 'inline') {
      if(this.imageLoaded === false || this.imageReloader === true){
        this.getImageFile(this.smartImageElem);
      }
    } else if(this.imageType === 'background') {
      this.smartImageElem.classList.add('ob_Image--flex');
      if(this.imageLoaded === false || this.imageReloader === true){
        this.getImageFile(this.smartImageElem);
      }
    }
  }

  /**
   * loadImageIfInView - Description
   *
   */
  loadImageIfInView() {
    console.log('here');

    if(this.imageType === 'inline') {
      if(inView(this.smartImageElem) && (this.imageLoaded === false || this.imageReloader === true)){
        this.getImageFile(this.smartImageElem);
      }
    } else if(this.imageType === 'background') {
      if(inView(this.smartImageElem.parentNode) && (this.imageLoaded === false || this.imageReloader === true)){
        this.getImageFile(this.smartImageElem);
      }
    }
  }


  /**
   * loadSmartImage - Description
   *
   * @param {event} e Description
   */
  loadSmartImage(e) {
    e.preventDefault();

    if(this.imageLoaded === false){
      this.loadImageIfInView(this.smartImageElem);
    }
  }


  /**
   * reloadImage - Description
   *
   * @param {event} e Description
   */
  reloadImage(e) {
    e.preventDefault();

    if(this.imageLoaded === true && this.imageReloader === true){
      this.getImageFile();
    }
  }


  /**
   * loadSmartImageOnClick - Description
   *
   * @param {event} e Description
   */
  loadSmartImageOnClick(e) {
    e.preventDefault();

    if(this.imageLoaded === false){
      this.loadImage(this.smartImageElem);
    }
  }


  /**
   * bindCustomMessageEvents - Binds custom event listeners to the Smart Image DOM Element
   *
   */
  bindCustomMessageEvents() {
    this.smartImageElem.addEventListener('siLoad', this.loadSmartImage().bind(this));
    this.smartImageElem.addEventListener('siReload', this.reloadImage().bind(this));
    this.smartImageElem.addEventListener('siClickLoad', this.loadSmartImageOnClick().bind(this));
  }


  /**
   * subscribeToEvents - Subscribes the component to global messages and sets the component's responses via internal custom events
   *
   */
  subscribeToEvents() {
    if(this.loadingMethod === 'view') {
      PubSub.subscribe(Events.messages.scroll, () => { this.smartImageElem.dispatchEvent(Events.createCustomEvent('siLoad'));});
      PubSub.subscribe(Events.messages.load, () => { this.smartImageElem.dispatchEvent(Events.createCustomEvent('siLoad'));});
      PubSub.subscribe(Events.messages.layoutChange, () => { this.smartImageElem.dispatchEvent(Events.createCustomEvent('siLoad'));});
    }

    PubSub.subscribe(Events.messages.resize, () => { this.smartImageElem.dispatchEvent(Events.createCustomEvent('siReload'));});
    PubSub.subscribe(Events.messages.breakChange, () => { this.smartImageElem.dispatchEvent(Events.createCustomEvent('siReload'));});
  }
}

/**
 * delegateEvents - Create delegated event listeners for the components managed within this module
 *
 * @returns {type} Description
 */
function delegateEvents() {
  Events.delegate('click', selClickToLoadSmartImage, 'siClickLoad');
}

export function initialiseSmartImages() {
  const smartImages = document.querySelectorAll(selSmartImage);
  Array.prototype.forEach.call(smartImages, (element) => {
    const newSmartImage = new SmartImage(element);
  });
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
  initialiseSmartImages();
}

export default {initModule: initModule}
