const categoriesNumber = document.querySelectorAll(".item").length;
console.log(categoriesNumber);

const categoriesList = document.querySelectorAll("h2");
const result = [];
for (var i = 0; i < categoriesList.length; i++) {
  result.push(categoriesList[i].textContent);
}
console.log(result);
