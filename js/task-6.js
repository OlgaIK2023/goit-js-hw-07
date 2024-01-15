function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputBox = document.querySelector("input");
const squaresDiv = document.getElementById("boxes");

createBtn.addEventListener("click", onCreateBtn);

let squares = [];
// squares.push(inputBox.value);
// console.log(squares);

function squareTemplate(obj) {
let color = obj.color;

return `<div class = "square" style="background-color:${color}">
</div>`;
}

function createSquares(amount) {
  let color = getRandomHexColor();
  for (let square of amount) {
    return `<div class = "square" style="background-color:${color}">
  </div>`;  
  }

  const squaresMarkup = amount.map(squareTemplate).join("");
  squaresDiv.innerHTML = squaresMarkup;
}

function onCreateBtn() {
  if (inputBox.value >= 1 && inputBox.value <= 100) {
    // squares.push(inputBox.value);
    createSquares(inputBox.value);
  }

  inputBox.value = "";
}
