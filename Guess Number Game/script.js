"use strict";

// console.log(document.querySelector(".message").textContent);
// console.log(document.querySelector(".message").innerHTML);
// console.log(document.querySelector(".message").innerText);

// console.log(document.getElementsByClassName(".message"));

// document.querySelector(".message").textContent = "Correct Number !";

// console.log(document.querySelector(".message").textContent);
// ## .Value 😎
// document.querySelector(".guess").value = 23;

// const input = document.querySelector(".guess").value;
// console.log(input);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;
let message = document.querySelector(".message");
let number = document.querySelector(".number");

const btn = document.querySelector(".check");
btn.addEventListener("click", () => {
  new Audio("mouse sound.wav").play();
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = "⛔ No Number!";
  } else if (guess === secretNumber) {
    let audioc = new Audio("DUN DUN DUNNN.mp3");
    audioc.play();

    message.textContent = "🥳 Correct Number ";

    number.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#326d97";
    number.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    let audiow = new Audio("Wrong Clakson Sound Effect.mp3");
    audiow.play();
    score--;
    document.querySelector(".score").textContent = score;
    if (score > 0) {
      message.textContent =
        guess > secretNumber ? " 🙄 Too high! " : " 🤨 Too Low! ";
    } else {
      message.textContent = " 😭 You Lost The Game !";
    }
  }
});
// let again = document.querySelector(".again");
// again.addEventListener("click", function () {
//   location.reload();
// });

// ## another way of again button

let again = document.querySelector(".again");
again.addEventListener("click", function () {
  new Audio("mouse sound.wav").play();

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start gussing...";
  document.querySelector(".score").textContent = "20";
  number.textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
});
