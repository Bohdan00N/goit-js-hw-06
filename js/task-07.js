const slide = document.getElementById("font-size-control");
const result = document.getElementById("text");
slide.addEventListener("input", sizeRange);
function sizeRange(event) {
    result.style.fontSize = event.currentTarget.value + "px";
}