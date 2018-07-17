import "Sass/screen.scss";
import * as utils from "Modules/Utils";
import * as showhide from "Modules/Showhide";
import * as events from "Modules/Events";

/**
 * initialiseComponentModules - call module init functions
 *
 * @returns {type} Description
 */
function initialiseComponentModules() {
  showhide.initModule();
  events.initModule();
}

utils.ready(initialiseComponentModules);
