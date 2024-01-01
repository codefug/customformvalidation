import {
  matchPassword,
  oneRequirement,
  threeRequirement,
  twoRequirement,
} from "./function/validation";
import "./style.css";

(function start() {
  const nextButton = document.querySelector(".nextButton");
  const email = document.querySelector("#emailInput");
  const password = document.querySelector("#passwordInput");
  const zipcode = document.querySelector("#zipCode");
  const country = document.querySelector("#country");
  const passwordconfirm = document.querySelector("#passwordConfirm");
  email.addEventListener("input", () => twoRequirement(email));
  password.addEventListener("input", () => twoRequirement(password));
  country.addEventListener("input", () => oneRequirement(country));
  zipcode.addEventListener("input", () => threeRequirement(zipcode));
  passwordconfirm.addEventListener("input", () =>
    matchPassword(passwordconfirm),
  );
  const form = document.querySelector("form");
  nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    form.reportValidity();
  });
})();