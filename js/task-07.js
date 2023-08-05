const inputValue = document.querySelector("#font-size-control");
const textToResize = document.querySelector("#text");

console.log(textToResize);
const handler = (e) => {
  console.log(inputValue.value);
  textToResize.style.fontSize = `${inputValue.value}px`;
};
inputValue.addEventListener("input", handler);
