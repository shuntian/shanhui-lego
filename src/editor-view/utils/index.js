export const capitalizeFirstLetter = (letter) => {
  return letter.charAt(0).toUpperCase() + letter.slice(1);
}

export const getParentElement = (element, className) => {
  while(element) {
    if (element.classList && element.classList.contains(className)) {
      return element;
    } else {
      element = element.parentNode;
    }
  }
  return null;
};
