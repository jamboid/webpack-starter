// Utilities Module

/**
 * outerWidth function that returns the width of an element including horizontal margins
 * @variables
 */
export function outerWidth(el) {
  let width = el.offsetWidth;
  const style = getComputedStyle(el);

  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
}

/**
 * outerWidth function that returns the height of an element including vertical margins
 * @variables
 */
export function outerHeight(el) {
  let height = el.offsetHeight;
  const style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

/**
 * Read a page's GET URL query string variables and return them as an associative array.
 * @function
 */
export function  getURLQueryString() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

/**
 * Convert any encoded characters in a string to their unencoded versions
 * - e.g. &amp to &
 * @function
 */
export function decodeCharacters(text) {
  var elem = document.createElement('textarea');
  elem.innerHTML = text;
  return elem.value;
}

/**
 * Remove the style attribute from an element
 * @function
 */
export function resetStyles(element) {
  element.setAttribute('style', '');
}
