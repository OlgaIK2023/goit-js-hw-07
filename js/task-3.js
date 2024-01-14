const inputBox = document.getElementById("name-input");
const greeting = document.getElementById("name-output");

inputBox.addEventListener("input", onInputType);
function onInputType() {

    

  if (inputBox.value === '') {
    greeting.innerHTML = `Anonymous`;
  
  }
  if (inputBox.value.trim() != '') 
  {
    greeting.innerHTML = inputBox.value.trim();
  }

}
