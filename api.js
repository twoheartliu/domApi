window.dom = {
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  style(element, styleName, value) {
    if (arguments.length === 3) {
      element.style[styleName] = value;
    } else if (arguments.length === 2) {
      if (typeof styleName === "string") {
        return element.style[styleName];
      } else if (styleName instanceof Object) {
        const obj = styleName;
        for (let i in obj) {
          element.style[i] = obj[i];
        }
      }
    }
  },
  each(element, callback) {
    for (let i = 0; i < element.length; i++) {
      callback.call(null, element[i]);
    }
  }
};
