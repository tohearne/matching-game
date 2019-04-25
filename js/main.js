var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

//console.log("User flipped: "+cardsInPlay[0]);

if (cardsInPlay.length==2){
	if(cardsInPlay[0]===cardsInPlay[1]){
		console.log("Match!");
	}
	else{
		console.log("Not a match.");
	}
}