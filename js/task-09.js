// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


document.querySelector(".change-color").addEventListener("click", (event) => {
  const hexColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = hexColor;
  document.querySelector(".color").textContent = hexColor
});

