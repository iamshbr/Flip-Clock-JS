"use-strict";

const clock = document.getElementById("clock");
const hour = document.querySelector(".clock__number--hours");
const minute = document.querySelector(".clock__number--minutes");

setInterval(() => {
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes();

  if (hours != hour.innerHTML) {
    hour.classList.add("flip");
  } else if (minutes != minute.innerHTML) {
    minute.classList.add("flip");
  }

  hour.innerHTML = hours;
  minute.innerHTML = minutes;

  if (hour.classList.contains("flip") || minute.classList.contains("flip")) {
    setTimeout(() => {
      hour.classList.remove("flip");
      minute.classList.remove("flip");
    }, 200);
  }
}, 1000);
