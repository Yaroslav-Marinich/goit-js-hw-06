// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
// перетягуючи повзунок, буде змінюватися розмір тексту.

document.getElementById('font-size-control').addEventListener('input', (event) => {
document.getElementById('text').style.fontSize = event.target.value + 'px';
})