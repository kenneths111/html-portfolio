var sum;
var yes = [
  "proceed pl",
  "k. tks.",
  "approved",
  "tks <eom>",
  "good work [insert name]",
];
var no = ["see me", "let's discuss", "edits pls", "comments pl"];

document.addEventListener("click", function () {
  rollDice();
  setTimeout(recommendation, 1200);
});

function recommendation() {
  var string;
  if (sum > 6) {
    string = yes[Math.floor(Math.random() * yes.length)];
    document.querySelector("body h1").style.color = "#4ECCA3";
  } else {
    string = no[Math.floor(Math.random() * no.length)];
    document.querySelector("body h1").style.color = "red";
  }
  document.querySelector("body h1").innerHTML = string;
}

function rollDice() {
  var count = 0;
  while (count < 10) {
    count++;
    setTimeout(shuffle, count * 100);
  }
}

function shuffle() {
  var n1 = Math.floor(Math.random() * 6) + 1;
  var n2 = Math.floor(Math.random() * 6) + 1;
  replaceDice(0, n1);
  replaceDice(1, n2);
  sum = n1 + n2;
  console.log(sum);
  return n1 + n2;
}

function replaceDice(dice, number) {
  if (number == 1) {
    document
      .querySelectorAll("img")
      [dice].setAttribute("src", "./images/dice1.png");
  } else if (number == 2) {
    document
      .querySelectorAll("img")
      [dice].setAttribute("src", "./images/dice2.png");
  } else if (number == 3) {
    document
      .querySelectorAll("img")
      [dice].setAttribute("src", "./images/dice3.png");
  } else if (number == 4) {
    document
      .querySelectorAll("img")
      [dice].setAttribute("src", "./images/dice4.png");
  } else if (number == 5) {
    document
      .querySelectorAll("img")
      [dice].setAttribute("src", "./images/dice5.png");
  } else if (number == 6) {
    document
      .querySelectorAll("img")
      [dice].setAttribute("src", "./images/dice6.png");
  }
}
