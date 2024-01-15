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
createBtn.addEventListener("click", onDestroyBtn);

function squareTemplate() {
  const height = "30";
  const width = "30";
  let color = getRandomHexColor();
  
  return `<div class = "square" style="background-color:${color} height="${height}" width="${width}">
</div>`;
}

console.log(squareTemplate());

function createSquares(amount) {
  let color = getRandomHexColor();
  const height = 30;
  const width = 30;

  let heightNew = height+10;
  let widthNew = width+10;
  for (let i = 1; i < amount; i+=1) 
  {
  return `<div class = "square" style="background-color:${color} height="${heightNew}" width="${widthNew}">
  </div>`
  }
  
}

  console.log(createSquares());
  
  
//   const squaresMarkup = squares.map(squareTemplate).join("");
//   squaresDiv.innerHTML = squaresMarkup;
// }

function onCreateBtn() {
  if (inputBox.value >= 1 && inputBox.value <= 100) {

    createSquares();
  }

  inputBox.value = "";
}

function onDestroyBtn() {
  squaresDiv.remove;
}
