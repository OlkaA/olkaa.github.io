const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const classes = [
  "style-color-1",
  "style-color-2",
  "style-color-3",
  "style-color-4",
];

const number_box = document.getElementById("number_box");
const click_shuffle = document.getElementById("click_shuffle");
const click_sort = document.getElementById("click_sort");

const fillList = (arr) => {
  number_box.textContent = "";
  arr.forEach((item, index) => {
    const randomClass = classes[index % classes.length];
    let li = document.createElement("li");
    li.innerHTML = item;
    li.setAttribute("class", randomClass);
    number_box.appendChild(li);
  });
};

const shuffleArray = (arr) => {
  newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[randomIndex]] = [newArr[randomIndex], newArr[i]];
  }
  fillList(newArr);
};

click_shuffle.addEventListener("click", () => shuffleArray(numbers));
click_sort.addEventListener("click", () => fillList(numbers));

fillList(numbers);
