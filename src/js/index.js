import "Sass/screen.scss";
import {ready} from "Modules/Utils";
import {initModule as initShowhide} from "Modules/Showhide";
import {initModule as initEvents} from "Modules/Events";

/**
 * initialiseComponentModules - call module init functions
 *
 * @returns {type} Description
 */
function initialiseComponentModules() {
  initShowhide();
  initEvents();
}

ready(initialiseComponentModules);
