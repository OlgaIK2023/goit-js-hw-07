const categoriesNumber = document.querySelectorAll('.item').length;
console.log(categoriesNumber);

function getList() {
const categoriesList = document.querySelectorAll('h2');
result = [];
for (var i = 0; i < categoriesList.length; i++) {
    result.push(categoriesList[i].textContent);
}
console.log(result);
}



