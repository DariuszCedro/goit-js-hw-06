const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const array = [];
for (let i = 0; i < ingredients.length; i++) {
  const elementOfIngredients = document.createElement("li");
  elementOfIngredients.textContent = ingredients[i];
  elementOfIngredients.classList.add("item");
  array[i] = elementOfIngredients;
}
list.append(...array);
