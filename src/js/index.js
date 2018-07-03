import "../scss/screen.scss";

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = 'Hello Webpackers';

  return element;
}

document.body.appendChild(component());
