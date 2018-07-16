import "Sass/screen.scss";
import * as utils from "Modules/utils/utils.js";
import * as showhide from "Modules/showhide/showhide.js";
import * as events from "Modules/events/events.js";

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
