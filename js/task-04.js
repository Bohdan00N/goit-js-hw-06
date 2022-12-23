let counterValue = 0;
const minButton = document.querySelector('button[data-action="decrement"]');
const maxButton = document.querySelector('button[data-action="increment"]');

minButton.addEventListener('click', () =>{
    counterValue -=1;
    document.getElementById('value').textContent = counterValue;
})
maxButton.addEventListener('click', () =>{
    counterValue +=1;
    document.getElementById('value').textContent = counterValue;
})
