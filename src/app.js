/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let h1number = document.getElementById("number");
  let firstEmoji_ = document.getElementById("firstEmoji");
  let secondEmoji_ = document.getElementById("secondEmoji");

  let cartas = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];
  let emojis = ["♦", "&#9829;", "♠", "♣"];

  let cartaRandom = cartas[Math.floor(Math.random() * cartas.length)];
  let emojisRandom = emojis[Math.floor(Math.random() * emojis.length)];

  if (emojisRandom == "&#9829;" || emojisRandom == "♦") {
    firstEmoji_.style.color = "red";
    secondEmoji_.style.color = "red";
  }

  h1number.innerHTML = cartaRandom;
  firstEmoji_.innerHTML = emojisRandom;
  secondEmoji_.innerHTML = emojisRandom;
};
