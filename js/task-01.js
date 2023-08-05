/* -----------Number of categories--------------------- */
const categories = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);

/* ----<h2> text + number of elements in each <li>----- */
for (let i = 0; i < categories.length; i++) {
  const categoryName = categories[i].querySelector("h2");
  const numberOfElements = categories[i].querySelectorAll("li");
  console.log("\nCategory: ", categoryName.textContent);
  console.log("Elements: ", numberOfElements.length);
}
