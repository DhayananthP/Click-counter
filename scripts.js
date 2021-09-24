"use strict";

const querySelector = (id) => document.querySelector(id);

const addNumber = function () {
  querySelector("#count").textContent =
    querySelector("#increaseBy").value > 1
      ? Number(querySelector("#count").textContent) +
        Number(querySelector("#increaseBy").value)
      : Number(querySelector("#count").textContent) + 1;
};

querySelector("#heading").addEventListener("click", function () {
  addNumber();
});
querySelector("#count").addEventListener("click", function () {
  addNumber();
});

function reset() {
  querySelector("#count").textContent = 0;
}

function minusNumber() {
  if (Number(querySelector("#count").textContent) > 0)
    querySelector("#count").textContent =
      Number(querySelector("#count").textContent) - 1;
}
