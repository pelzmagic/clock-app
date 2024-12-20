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
const city = document.querySelector(".city");
const timeZone = document.querySelector(".zone");
const dayOfWeek = document.querySelector(".no_of_day");
const numberOfDays = document.querySelector(".number_of_days");
const weekNumber = document.querySelector(".week_number");
const more = document.querySelector(".more");
const buttonWrapper = document.querySelector(".button_wrapper");
let clicked = true;
console.log(clicked);

arrowButton.addEventListener("click", () => {
  console.log("how are you?");
  if (clicked) {
    quoteSection.style.display = "none";
    clock.style.transform = "translateY(-120%)";
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
    arrow.style.transform = "rotate(180deg)";
    more.textContent = "Less";
    buttonWrapper.style.position = "absolute";
    buttonWrapper.style.zIndex = "12000";
    buttonWrapper.style.right = "0";
    clicked = false;
    console.log(clicked);
  } else {
    quoteSection.style.display = "block";
    clock.style.transform = "translateY(0%)";
    more.textContent = "More";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    arrow.style.transform = "rotate(0deg)";
    buttonWrapper.style.position = "absolute";
    buttonWrapper.style.zIndex = "12000";
    buttonWrapper.style.right = "0";
    clicked = true;
    console.log(clicked);
  }
});

async function getTime() {
  try {
    const response = await fetch("https://worldtimeapi.org/api/ip");
    if (!response.ok) {
      throw new Error("Failed to fetch time!");
    }
    const data = await response.json();
    console.log(data);
    const dateTime = new Date(data.datetime);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    if (hours > 5 && hours <= 12) {
      greeting.textContent = "GOOD MORNING, IT'S CURRENTLY";
      time.textContent = `${hours} : ${minutes < 10 ? `0${minutes}` : minutes}`;
    }
    if (hours > 12 && hours <= 18) {
      greeting.textContent = "GOOD AFTERNOON, IT'S CURRENTLY";
      time.textContent = `${hours} : ${minutes < 10 ? `0${minutes}` : minutes}`;
    }
    if (hours > 18 || hours <= 5) {
      greeting.textContent = "GOOD EVENING, IT'S CURRENTLY";
      time.textContent = `${hours} : ${minutes < 10 ? `0${minutes}` : minutes}`;
      body.style.background = "url('./assets/desktop/bg-image-nighttime.jpg')";
      sun.src = "./assets/desktop/icon-moon.svg";
    }

    dayOfWeek.textContent = data.day_of_week;
    numberOfDays.textContent = data.day_of_year;
    weekNumber.textContent = data.week_number;
  } catch (error) {
    console.error(error);
  }
}

getTime();

async function getLocation() {
  try {
    const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
    if (!response.ok) {
      throw new Error("Failed to fetch your location");
    }
    const data = await response.json();
    console.log(data);
    const state = data.city;
    const country = data.country;
    city.textContent = `IN ${state.toUpperCase()}, ${country.toUpperCase()}`;
    timeZone.textContent = data.timezone;
  } catch (error) {
    console.error(error);
  }
}

getLocation();
