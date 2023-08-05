const validationInput = document.querySelector("#validation-input");

const passwordMinLength = document.querySelector(
  "#validation-input[data-length]"
);
const passwordLength = passwordMinLength.dataset.length;

const handler = (e) => {
  const value = e.currentTarget.value;

  if (value.length < passwordLength) {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  } else {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  }
};

validationInput.addEventListener("blur", handler);
