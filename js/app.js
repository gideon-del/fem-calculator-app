"use strict";
// Ellements
const themes = document.querySelectorAll(".toggle");
const keys = document.querySelectorAll("[data-key]");
const main = document.querySelector("[data-main]");
const text = document.querySelector("[data-text]");
const screen = document.querySelector("[data-screen]");
const calcBg = document.querySelector("[data-calc]");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const equal = document.querySelector("[data-equal]");
let screenVal = screen.dataset.value;
let curTheme = localStorage.getItem("theme") ?? 1;

const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operator = ["-", "+", "/", "*", "."];
// Functions
const addtheme = (theme = 1) => {
  const currentTheme = document.querySelector(".active");
  const newTheme = document.querySelector(`[data-value="${theme}"]`);
  if (currentTheme !== newTheme) {
    currentTheme.classList.remove("active");
    newTheme.classList.add("active");
  }
  keys.forEach((key) => (key.dataset.key = `${theme}`));
  main.dataset.main = `${theme}`;
  text.dataset.text = `${theme}`;
  screen.dataset.screen = `${theme}`;
  calcBg.dataset.calc = `${theme}`;
  del.dataset.del = `${theme}`;
  reset.dataset.del = `${theme}`;
  equal.dataset.equal = `${theme}`;
};

console.log(del, reset);
const addToScreen = (val) => {
  let num = val;

  // if (!num) return;
  if (+num || num == "0") {
    console.log(num);
    screenVal = `${screenVal}${num}`;
  }
  if (operator.includes(num) && screenVal.length > 0 && screenVal) {
    let lastchild = screenVal.charAt(screenVal.length - 1);
    if (operator.includes(lastchild)) return;
    screenVal = `${screenVal}${num}`;
  }
  screen.querySelector("span").textContent = screenVal;
};
const deleteVal = () => {
  screenVal = screenVal.substring(0, screenVal.length - 1);
  screen.querySelector("span").textContent = screenVal;
};

const resetVal = () => {
  screenVal = "";
  screen.querySelector("span").textContent = screenVal;
};
const clac = () => {
  if (!screenVal) return;
  let lastchild = screenVal.charAt(screenVal.length - 1);
  let sign = "";
  if (operator.includes(lastchild)) {
    sign = lastchild;
    screenVal = screenVal.substring(0, screenVal.length - 1);
  }
  screenVal = eval(screenVal);
  screenVal = `${screenVal}${sign}`;
  screen.querySelector("span").textContent = screenVal;
};
// Events
window.addEventListener("load", function () {
  addtheme(curTheme);
});
themes.forEach((theme) => {
  theme.addEventListener("click", function (e) {
    localStorage.setItem("theme", `${+e.target.dataset.value}`);
    curTheme = localStorage.getItem("theme");
    addtheme(curTheme);
  });
});
keys.forEach((key) => {
  key.addEventListener("click", function (e) {
    addToScreen(e.target.dataset.value);
  });
});
del.addEventListener("click", deleteVal);

equal.addEventListener("click", clac);
reset.addEventListener("click", resetVal);
window.addEventListener("keydown", function (e) {
  if (operator.includes(e.key) || number.includes(e.key)) {
    addToScreen(e.key);
  }
  if (e.key === "Backspace") {
    deleteVal();
  }
  if (e.key == "=" || e.key == "Enter") {
    clac();
  }
});
