const containerUl = document.querySelector("#categories");
const containerLi = document.querySelectorAll(".item");

const ulList = containerUl.children.length;
console.log(`Number of categories: ${ulList}`);

containerLi.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
