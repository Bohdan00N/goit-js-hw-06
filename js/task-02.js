const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let foodList = document.getElementById('ingredients');
const foodIngredients = ingredients.map((ingredient) => {
  let item = document.createElement('li');
  item.textContent = ingredient;
  return item;
  
});
foodList.append(...foodIngredients);

console.log(foodIngredients);