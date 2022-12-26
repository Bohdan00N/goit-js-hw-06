function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColor = document.querySelector(".change-color");
const getBody = document.querySelector("body");
const changeColor = document.querySelector(".color");
btnChangeColor.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  getBody.style.backgroundColor = currentColor;
  changeColor.textContent = currentColor;
}
)