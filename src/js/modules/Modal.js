// Modal Components Module

const selAction = '[data-modal="link"]';
const templateModal = `
  <div class="cp_Modal" data-modal="component">
    <div class="cp_Modal__screen"></div>
    <div class="cp_Modal__content"></div>
  </div>
`;


/**
 * Modal - Class that reper
 */
class Modal {
  constructor() {

  }
}


/**
 * ModalLinkManager - Class for managing links that generate page modals
 */
class ModalLinkManager {
  constructor() {

  }
}

/**
 * delegateEvents - Create delegated event listeners for the components managed within this module
 *
 * @returns {type} Description
 */
function delegateEvents() {
  //Events.createDelegatedEventListener('click', selAction, 'toggleShowHide');
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
  const showHideComponents = document.querySelectorAll(selComponent);
  Array.prototype.forEach.call(showHideComponents, (element) => {
    const newShowHide = new ShowHide(element);
  });


}

export default {initModule: initModule}
