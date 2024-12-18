"use strict";

const arrowButton = document.querySelector(".arrow");
const buttonText = document.querySelector(".more");
const overlay = document.querySelector(".overlay");
const quoteSection = document.querySelector(".quote-wrapper");
const clock = document.querySelector(".clock_details_wrapper");
const arrow = document.querySelector(".arrow_image");

arrowButton.addEventListener("click", () => {
  console.log("how are you?");
  quoteSection.style.display = "none";
  clock.style.transform = "translateY(-120%)";
  overlay.style.opacity = "1";
  arrow.style.transform = "rotate(180deg)";
});
