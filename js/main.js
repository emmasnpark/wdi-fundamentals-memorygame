var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];
var checkForMath = function() {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again");
  }
}
var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId])
  cardsInPlay.push(cards[cardId]);

  /*var cardOne = cards[0];
  var cardTwo = cards[2];
  cardsInPlay.push(cardOne);
  cardsInPlay.push(cardTwo);
  if (cardsInPlay[0] === cardOne) {
    console.log("User flipped queen.")
  }
  if(cardsInPlay[1] === cardTwo) {
      console.log("User flipped king.")
  }
  */
  checkForMath();
}
flipCard(0);
flipCard(2);
