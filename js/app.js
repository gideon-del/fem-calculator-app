"use strict";
const themes = document.querySelectorAll(".toggle");
const keys = document.querySelectorAll("[data-key]");
const main = document.querySelector("[data-main]");
const text = document.querySelector("[data-text]");
const screen = document.querySelector("[data-screen]");
const calcBg = document.querySelector("[data-calc]");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
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
  });
});
console.log(del, reset);
