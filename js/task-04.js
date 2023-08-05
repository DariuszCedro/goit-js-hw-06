let counterValue = 0;

const buttonDec = document.querySelector(`button[data-action="decrement"]`);
const buttonInc = document.querySelector(`button[data-action="increment"]`);

let showCounter = document.querySelector("#value");

buttonDec.addEventListener("click", () => {
  counterValue -= 1;
  showCounter.innerHTML = `${counterValue}`;
});

buttonInc.addEventListener("click", () => {
  counterValue += 1;
  showCounter.innerHTML = `${counterValue}`;
});
