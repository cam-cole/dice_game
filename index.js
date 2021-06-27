//Generate Dice Image for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

// Changes Dice Image for Player 1
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1)

//Generate Dice Image for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Changes Dice Image for Player 2
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

//Conditionals to determine the Winner

// Player 1 Wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

// Player 2 Wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

// Draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
