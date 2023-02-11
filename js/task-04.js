// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = 0;

const btnIncr = document.querySelector('button[data-action="increment"]');
const btnDecr = document.querySelector('button[data-action="decrement"]');
const viewAria = document.querySelector("#value");
btnIncr.addEventListener('click', () => {
  counterValue += 1;
  viewAria.textContent = counterValue;
});

btnDecr.addEventListener("click", () => {
  counterValue -= 1;
  viewAria.textContent = counterValue;
});


