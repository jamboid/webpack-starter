import "../scss/screen.scss";
import * as utils from "./modules/utils/utils.js";
import * as showhide from "./modules/showhide/showhide.js";
import * as events from "./modules/events/events.js";

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
