const containerUl = document.querySelector("#categories");
const containerLi = document.querySelectorAll(".item");

const ulList = containerUl.children.length;
console.log(`Number of categories: ${ulList}`);

containerLi.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
