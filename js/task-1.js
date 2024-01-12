const categoriesNumber = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesNumber}`);

const ul = document.querySelector('ul#categories');


const items = ul.querySelectorAll('li.item');


items.forEach(item => {
  
  const title = item.querySelector('h2').textContent;

  
  const count = item.querySelectorAll('li').length;

  
  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
});