const inputAction = document.querySelector("#name-input");
const showOutput = document.querySelector("#name-output");

const handler = (e) => {
  const value = e.currentTarget.value;
  console.log(value);

  if (value.length > 0) {
    showOutput.textContent = e.currentTarget.value;
  } else {
    showOutput.textContent = "Anonymous";
  }
};

inputAction.addEventListener("input", handler);
