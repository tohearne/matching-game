var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png"
}
];
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
	console.log("User flipped the "+cards[cardId].rank+" of "+cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length==2){
		checkForMatch();
	}
}

flipCard(1);
flipCard(0);


/*
var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
*/
//console.log("User flipped: "+cardsInPlay[0]);