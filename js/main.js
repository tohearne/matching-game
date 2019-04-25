var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0]===cardsInPlay[1]){
		console.log("Match!");
	}
	else{
		console.log("Not a match.");
	}
}

function flipCard(cardId){
	console.log("User flipped "+cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length==2){
		checkForMatch();
	}
}

flipCard(1);
flipCard(2);


/*
var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
*/
//console.log("User flipped: "+cardsInPlay[0]);