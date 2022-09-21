"use strict";
const themes = document.querySelectorAll(".toggle");
themes.forEach((theme) => {
  theme.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  });
});
