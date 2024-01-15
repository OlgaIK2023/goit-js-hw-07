function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputBox = document.querySelector('input');
const squaresDiv = document.getElementById("boxes");



createBtn.addEventListener('click', onCreateBtn);


function squareTemplate (obj) {

  const color = obj.color;

  return `<div class = "square" style="background=color: ${color}">
  </div>`;

};

let squares = [];

for (let squares >= 1 i++)


function renderSquares () {
  const squaresMarkup = squares.map(squareTemplate).join('');
  squaresElem.insertAdjacentHTML("beforeend", squaresMarkup);
}




function onCreateBtn () {
if (inputBox.value >= 1 && inputBox.value <=100) {
  renderSquares();
};

  inputBox.value = '';
}