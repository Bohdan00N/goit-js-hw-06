const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// 1 вариант
// let foodList = document.getElementById("ingredients");
// const foodIngredients = ingredients.map((ingredient) => {
//   let item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add('item');
//   return item;
// });
// foodList.append(...foodIngredients);
// console.log(foodIngredients);
// 2 вариант
const foodList = document.getElementById("ingredients");
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add(`item`);
  foodList.append(li);
});
console.log(foodList);
