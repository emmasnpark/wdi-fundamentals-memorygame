var card = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = card[0];
var cardTwo = card[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
if (cardsInPlay[0] === cardOne) {
  console.log("User flipped queen.")
}
if(cardsInPlay[1] === cardTwo) {
    console.log("User flipped king.")
}
if(cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again");
}
