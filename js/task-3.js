const inputBox = document.getElementById('name-input');
const greeting = document.getElementById('name-output');

inputBox.addEventListener('input', onInputType);
function onInputType () {
    
    greeting.innerHTML = inputBox.value;
}