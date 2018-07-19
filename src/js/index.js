import "Sass/screen.scss";
import {ready} from "Modules/Utils";
import {initModule as initShowhide} from "Modules/Showhide";
import {initModule as initEvents} from "Modules/Events";
import {initModule as initModal} from "Modules/Modal";
import {initModule as initImage} from "Modules/Image";

/**
 * initialiseComponentModules - call module init functions
 *
 * @returns {type} Description
 */
function initialiseComponentModules() {
  initEvents();
  initShowhide();
  initImage();
  initModal();
}

ready(initialiseComponentModules);
