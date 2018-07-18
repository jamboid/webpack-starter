// Utilities Module

/**
 * Returns the nearest parent element matching the selector, with the option to return the starting
 * element if it matches.
 * source: https://blog.wearecolony.com/a-year-without-jquery/
 * @param   {Element}       el
 * @param   {string}        selector
 * @param   {boolean}       [includeSelf]
 * @return  {Element|null}
 */
export function closestParent(el, selector, includeSelf) {
  let parent = el.parentNode;

  if (includeSelf && el.matches(selector)) {
    return el;
  }

  while (parent && parent !== document.body) {
    if (parent.matches && parent.matches(selector)) {
      return parent;
    } else if (parent.parentNode) {
      parent = parent.parentNode;
    } else {
      return null;
    }
  }
  return null;
}

/**
 * outerWidth function that returns the width of an element including horizontal margins
 * @param {Element} el
 */

export function outerWidth(el) {
  let width = el.offsetWidth;
  const style = getComputedStyle(el);

  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
}

/**
 * outerWidth function that returns the height of an element including vertical margins
 * @param {Element} el
 */

export function outerHeight(el) {
  let height = el.offsetHeight;
  const style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

/**
 * Read a page's GET URL query string variables and return them as an associative array.
 * @return  {Array}
 */

export function getURLQueryString() {
  var vars = [],
    hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
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


/**
 * ready - Call a function when the page DOM is loaded and complete
 *
 * @param {function} fn Description
 */
export function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

export default {
  closestParent:closestParent,
  outerWidth:outerWidth,
  outerHeight:outerHeight,
  getURLQueryString:getURLQueryString,
  decodeCharacters:decodeCharacters,
  resetStyles:resetStyles,
  ready:ready
}
