import "../scss/screen.scss";
import * as utils from "./modules/utils.js";
import * as show from "./modules/utils.js";
import { buildNippers } from "./modules/showhide.js";

function component() {
  let element = document.createElement('div');

  element.innerHTML = 'Hello Webpackers';
  return element;
}

let newElement = component();
document.body.appendChild(newElement);
window.console.log(utils.outerWidth(newElement));

buildNippers();
