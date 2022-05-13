const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const current = (move, e) => {
  e.preventDefault();

  if (move === "right") {
    itemsList.appendChild(itemsList.firstElementChild);
  } else {
    itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
  }
};

right.addEventListener("click", (e) => {
  current ("right", e);
});

left.addEventListener("click", (e) => {
  current ("left", e);
});
