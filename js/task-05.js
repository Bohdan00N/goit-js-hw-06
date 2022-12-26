// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

let resultName = document.querySelector('#name-input');
resultName.addEventListener('input', onInputChange);

let output = document.querySelector('#name-output');

function onInputChange(event) {
  resultName = event.currentTarget.value;
  console.log(resultName);

  resultName !== ' ' ? (output.innerText = resultName.trim()) : 'Anonymous';
}