import "../scss/screen.scss";
import * as utils from "./modules/utils.js";
import * as showhide from "./modules/showhide.js";
import * as events from "./modules/events.js";

function component() {
  let element = document.createElement('div');

  element.innerHTML = 'Hello Webpackers';
  return element;
}

showhide.initModule();
events.initModule(); 


let newElement = component();
document.body.appendChild(newElement);
window.console.log(utils.outerWidth(newElement));
