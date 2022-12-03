"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector(".score").textContent = score;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;
  if (score > 1) {
    if (!guess) {
      displayMessage("⛔ No number!");
    } else if (guess === secretNumber) {
      displayMessage("✅ You`re correct");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      displayMessage(
        guess > secretNumber
          ? "📈 Your number is higher than secret"
          : "📉 Your number is lower than secret"
      );
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("💥 You lost the game!");
    document.querySelector(".score").textContent = "0";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

/* } else if (guess > secretNumber) {
      displayMessage("📈 Your number is higher than secret");
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
      displayMessage("📉 Your number is lower than secret");
      score--;
      document.querySelector(".score").textContent = score;
    } */
