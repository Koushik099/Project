"use strict";
//  Selecting elements
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
let score0El = document.querySelector("#score--0");
let score1El = document.getElementById("score--1");
let diceEL = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");

let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";
  diceEL.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  playing = true;
};
init();

const switchPlayer = () => {
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
  // score0El.textContent = currentScore;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

//  Rolling dice functionality

btnRoll.addEventListener("click", () => {
  if (playing) {
    new Audio("move.wav").play();
    // generating dice roll and display it
    const dice = Math.trunc(Math.random() * 6 + 1);
    // console.log(dice);
    diceEL.src = `dice-${dice}.png`;
    diceEL.classList.remove("hidden");
    //   add score
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. add curent score to player score
    scores[activePlayer] += currentScore;
    // console.log(scores[activePlayer]);
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      diceEL.classList.add("hidden");
      // finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      activePlayer =
        activePlayer === 0
          ? (document.getElementById("name--0").textContent = "WINNER 🥇")
          : (document.getElementById("name--1").textContent = "WINNER 🥇");
      0;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
