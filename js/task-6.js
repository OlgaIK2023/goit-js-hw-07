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
destroyBtn.addEventListener("click", onDestroyBtn);

function createSquares(amount) {
  onDestroyBtn();

  let startSize = 30;
  const step = 10;
  const squaresArray = [];

  for (let i = 0; i < amount; i++) {
    const newSquare = document.createElement("square");
    newSquare.style.width = `${startSize}px`;
    newSquare.style.height = `${startSize}px`;
    newSquare.style.backgroundColor = getRandomHexColor();

    squaresArray.push(newSquare);
    startSize += step;
  }

  squaresDiv.append(...squaresArray);
}

function onCreateBtn() {
  const amountSquares = Number(inputBox.value);

  if (amountSquares >= 1 && amountSquares <= 100) {
    inputBox.value = "";
    createSquares(amountSquares);
  }
}

function onDestroyBtn() {
  squaresDiv.innerHTML = "";
}
