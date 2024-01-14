function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');

let colorName = document.querySelector('.color');

const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener('click', onBtnClick);

function onBtnClick () {
  body.style.backgroundColor = getRandomHexColor();
  colorName.innerHTML = `red`;
}