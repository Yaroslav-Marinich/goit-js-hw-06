const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients');

// ingredients.forEach((ingredientsItem) => {
//   const liEl = document.createElement('li');
//   liEl.className = "item";
//   liEl.innerHTML = ingredientsItem;

//   container.append(liEl)
// })

for (const element of ingredients) {
  const liEl = document.createElement('li');
  liEl.className = "item";
  liEl.innerHTML = element;
  container.append(liEl);
}
