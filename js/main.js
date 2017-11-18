var cards = [
  {
   rank: "queen",
   suit: "hearts",
   cardImage:"images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds"
  }
];
var cardsInPlay = [];
var checkForMath = function() {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again");
  }
}
var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank)
  console.log("User flipped " + cards[cardId].cardImage)
  console.log("User flipped " + cards[cardId].suit)
  cardsInPlay.push(cards[cardId].rank);

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
