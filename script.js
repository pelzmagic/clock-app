"use strict";

const arrowButton = document.querySelector(".arrow");
const buttonText = document.querySelector(".more");
const overlay = document.querySelector(".overlay");
const quoteSection = document.querySelector(".quote-wrapper");
const clock = document.querySelector(".clock_details_wrapper");
const arrow = document.querySelector(".arrow_image");
const greeting = document.querySelector(".greeting");
const time = document.querySelector(".time");
const body = document.querySelector("body");
const sun = document.querySelector(".sun");

arrowButton.addEventListener("click", () => {
  console.log("how are you?");
  quoteSection.style.display = "none";
  clock.style.transform = "translateY(-120%)";
  overlay.style.opacity = "1";
  arrow.style.transform = "rotate(180deg)";
});

async function getTime() {
  try {
    const response = await fetch("https://worldtimeapi.org/api/ip");
    if (!response.ok) {
      throw new Error("Failed to fetch time!");
    }
    const data = await response.json();
    const dateTime = new Date(data.datetime);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    if (hours > 5 && hours <= 12) {
      greeting.textContent = "GOOD MORNING, IT'S CURRENTLY";
      time.textContent = `${hours} : ${minutes}`;
    }
    if (hours > 12 && hours <= 18) {
      greeting.textContent = "GOOD AFTERNOON, IT'S CURRENTLY";
      time.textContent = `${hours} : ${minutes}`;
    }
    if (hours > 18 && hours <= 5) {
      greeting.textContent = "GOOD EVENING, IT'S CURRENTLY";
      time.textContent = `${hours} : ${minutes}`;
      body.style.background = "url('./assets/desktop/bg-image-nighttime.jpg')";
      sun.src = "./assets/desktop/icon-moon.svg";
    }
  } catch (error) {
    console.error(error);
  }
}

getTime();

async function getLocation() {
  try {
    const response = await fetch("https://freegeoip.app");
    if (!response.ok) {
      throw new Error("Failed to fetch your location");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getLocation();
