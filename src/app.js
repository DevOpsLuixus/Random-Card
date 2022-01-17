/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let numberArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let arrayIcon = ["\u2665", "\u2666", "\u2663", "\u2660"];

  function randoms(array) {
    let randomCard = Math.floor(Math.random() * array.length);
    return randomCard;
  }
  let numbersArray = numberArray[randoms(numberArray)];
  let arrayIcons = arrayIcon[randoms(arrayIcon)];

  if (arrayIcons == "\u2665" || arrayIcons == "\u2666") {
    document.querySelector("#leftIcon").style.color = "red";
    document.querySelector("#righIcon").style.color = "red";
    document.querySelector("#num").style.color = "red";
  } else {
    document.querySelector("#leftIcon").style.color = "black";
    document.querySelector("#righIcon").style.color = "black";
    document.querySelector("#num").style.color = "black";
  }

  document.getElementById("num").innerHTML = numbersArray;
  document.getElementById("leftIcon").innerHTML = arrayIcons;
  document.getElementById("righIcon").innerHTML = arrayIcons;
};
