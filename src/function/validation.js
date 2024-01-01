function makeValid(element) {
  element.classList.remove("formInvalid");
  element.classList.add("formValid");
}
function makeInvalid(element) {
  element.classList.remove("formValid");
  element.classList.add("formInvalid");
}
/**
 * 주어진 메세지가 element의 validity 검사에 활용됩니다.
 * @param {node} element
 * @param {string} message
 */
function matchPassword(element) {
  const password = document.querySelector("#passwordInput");
  if (password.value !== element.value) {
    element.setCustomValidity("비밀번호는 무조건 일치해야 합니다.");
    makeInvalid(element);
  } else {
    element.setCustomValidity("");
    makeValid(element);
  }
}
function threeRequirement(element) {
  if (element.validity.tooLong) {
    element.setCustomValidity("5글자가 최대입니다.");
    makeInvalid(element);
  } else if (element.validity.valueMissing) {
    element.setCustomValidity("꼭 필요한 정보입니다.");
    makeInvalid(element);
  } else if (element.validity.patternMismatch) {
    element.setCustomValidity("pattern을 따르셔야 합니다!");
    makeInvalid(element);
  } else {
    makeValid(element);
    element.setCustomValidity("");
  }
}
function twoRequirement(element) {
  if (element.validity.valueMissing) {
    element.setCustomValidity("꼭 필요한 정보입니다.");
    makeInvalid(element);
  } else if (element.validity.patternMismatch) {
    element.setCustomValidity("pattern을 따르셔야 합니다!");
    makeInvalid(element);
  } else {
    makeValid(element);
    element.setCustomValidity("");
  }
}
function oneRequirement(element) {
  if (element.validity.valueMissing) {
    element.setCustomValidity("꼭 필요한 정보입니다.");
    makeInvalid(element);
  } else {
    makeValid(element);
    element.setCustomValidity("");
  }
}
export { threeRequirement, twoRequirement, oneRequirement, matchPassword };