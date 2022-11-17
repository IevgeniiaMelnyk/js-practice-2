// console.log('Задача 10 ДР вариант1') 
// const inputNum = document.querySelector("#controls>input");
// const btnCreate = document.querySelector("button[data-create]");
// const btnDestroy = document.querySelector("button[data-destroy]");
// const boxes = document.querySelector("#boxes");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const createBoxes = (amount) => {
//   const elementsToAdd = [];
//   for (let i = 0; i < amount; i++) {
//     const div = document.createElement("div");
//     div.style.height = `${30 + 10 * i}px`;
//     div.style.width = `${30 + 10 * i}px`;
//     div.style.background = getRandomHexColor();
//     elementsToAdd.push(div);
//   }
//   return elementsToAdd;
// };

// const destroyBoxes = () => {
//   boxes.innerHTML = "";
// };

// btnCreate.addEventListener("click", () => {
//   let boxesToAdd = createBoxes(inputNum.value);
//   boxes.append(...boxesToAdd);
// });

// console.log(inputNum.value);

// btnDestroy.addEventListener("click", () => {
//   destroyBoxes.call();
// });



// Вариант2

// function getRandomHexColor() {
//   return #${Math.floor(Math.random() * 16777215).toString(16)};
// }

// const refs = {
//   input: document.querySelector('input'),
//   buttonCreate: document.querySelector('button[data-create]'),
//   buttonDestroy: document.querySelector('button[data-destroy]'),
//   box: document.querySelector('#boxes'),
// };

// let amount = 0;
// const getAmount = event => {
//   amount = event.target.value;
// };

// function createBoxes(amount) {
//   let boxSize = 20;

//   for (let i = 1; i <= amount; i += 1) {
//     const newBoxes = document.createElement('div');

//     boxSize += 10;

//     newBoxes.style.width = ${boxSize}px;
//     newBoxes.style.height = ${boxSize}px;
//     newBoxes.style.backgroundColor = getRandomHexColor();
//     refs.box.append(newBoxes);
//   }
// }

// const handleClickButtonCreate = () => {
//   createBoxes(amount);
// };

// const destroyBoxes = () => {
//   refs.box.innerHTML = '';
// };

// refs.input.addEventListener('change', getAmount);
// refs.buttonCreate.addEventListener('click', handleClickButtonCreate);
// refs.buttonDestroy.addEventListener('click', destroyBoxes);



// Вариант 3 мой
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  input: document.querySelector('input[type="number"]'),
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('div[id="boxes"]'),
};

let amount = 0;

const getAmount = event => {
  amount = event.target.value;
};
  
function createBoxes(amount) {
  
  let markup = [];
 
  for (let i = 0; i < amount; i++) {
    let height = 30 + i * 10;
    let width = 30 + i * 10;
    const div = `<div style="height: ${height}px; width: ${width}px; background-color: ${getRandomHexColor()}" ></div>`
    markup.push(div);
  };
    refs.boxes.insertAdjacentHTML('afterbegin', markup.join(''));
};

const handleClickButtonCreate = () => {
  createBoxes(amount);
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = '';
};

refs.input.addEventListener('change', getAmount);
refs.create.addEventListener('click', handleClickButtonCreate);
refs.destroy.addEventListener('click', destroyBoxes);