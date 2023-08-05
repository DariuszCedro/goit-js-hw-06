function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button");
const text = document.querySelector("span.color");

const handler = (e) => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = `${randomColor}`;
  text.innerHTML = `${randomColor}`;
  //console.log(randomColor);
};

button.addEventListener("click", handler);
