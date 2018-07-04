// Events module

function createCustomEvent(eventName, eventData) {
  let event;

  if (window.CustomEvent) {
    event = new CustomEvent(eventName, {detail: {some: eventData}});
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, {some: eventData});
  }

  return event;
}

export function addEventListenerToNodeList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

const moduleInterface = {
  addEventListenerToNodeList: addEventListenerToNodeList
}

export default moduleInterface;
