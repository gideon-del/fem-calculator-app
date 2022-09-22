"use strict";
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
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operator = ["-", "+", "/", "*"];
themes.forEach((theme) => {
  theme.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const themeNum = +e.target.dataset.value;
    keys.forEach((key) => (key.dataset.key = `${themeNum}`));
    main.dataset.main = `${themeNum}`;
    text.dataset.text = `${themeNum}`;
    screen.dataset.screen = `${themeNum}`;
    calcBg.dataset.calc = `${themeNum}`;
    del.dataset.del = `${themeNum}`;
    reset.dataset.del = `${themeNum}`;
    equal.dataset.equal = `${themeNum}`;
  });
});
console.log(del, reset);
keys.forEach((key) => {
  key.addEventListener("click", function (e) {
    let num = e.target.dataset.value;

    if (!num) return;
    if (+num) {
      if (screenVal != "0" || !screenVal) {
        screenVal = `${screenVal}${num}`;
      } else {
        screenVal = num;
      }
    }
    if (operator.includes(num) && screenVal != "0" && screenVal) {
      let lastchild = screenVal.charAt(screenVal.length - 1);
      if (operator.includes(lastchild)) return;
      screenVal = `${screenVal}${num}`;
    }
    screen.querySelector("span").textContent = screenVal;
  });
});
del.addEventListener("click", function () {
  screenVal = screenVal.substring(0, screenVal.length - 1);
  screen.querySelector("span").textContent = screenVal;
});
// const test = "200+";
// console.log(test.charAt(test.length - 1));
equal.addEventListener("click", function () {
  if (screenVal == "0" || !screenVal) return;
  let lastchild = screenVal.charAt(screenVal.length - 1);
  let sign = "";
  if (operator.includes(lastchild)) {
    sign = lastchild;
    screenVal = screenVal.substring(0, screenVal.length - 1);
  }
  screenVal = eval(screenVal);
  screenVal = `${screenVal}${sign}`;
  screen.querySelector("span").textContent = screenVal;
});
reset.addEventListener("click", function () {
  screenVal = "0";
  screen.querySelector("span").textContent = screenVal;
});
