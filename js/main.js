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
var cardsFlipped = 0;
var score = 0;

function checkForMatch(){
	if(cards[cardsInPlay[0]].rank===cards[cardsInPlay[1]].rank){
		document.getElementById("match").textContent = "Match!";
		score++;
		document.getElementById("score").textContent = "Score: "+score;
		cardsInPlay = [];
	}
	else{
		document.getElementById("match").textContent = "Try Again";
		var cardsTemp = document.querySelectorAll('img');
		for(var i = 0;i<cards.length;i++){
			cardsTemp[i].removeEventListener("click",flipCard);
			cardsTemp[i].addEventListener("click",flipBack);
		}
	}
	
}

function flipCard(){
	//console.log(cardsFlipped);
	
	if (cardsFlipped===cards.length){
		resetBoard();
	}
	else if(this.getAttribute("src")==="images/back.png"){
		var cardId = this.getAttribute("data-id");
		cardsInPlay.push(cardId);
		this.setAttribute("src",cards[cardId].cardImage);
		cardsFlipped += 1;
		if (cardsInPlay.length===2){
			checkForMatch();
		}
	}
}

function flipBack(){
	var cardsTemp = document.querySelectorAll('img');
	for(var i = 0;i<cards.length;i++){
		if(cardsTemp[i].getAttribute("data-id")===cardsInPlay[0]||cardsTemp[i].getAttribute("data-id")===cardsInPlay[1]){
			cardsTemp[i].setAttribute("src","images/back.png");
		}
		cardsTemp[i].removeEventListener("click",flipBack);
		cardsTemp[i].addEventListener("click",flipCard);
	}
	document.getElementById("match").textContent = "";
	cardsInPlay = [];
	cardsFlipped -= 2;
}

function createBoard(){
	cards = shuffle(cards);
	for(var i = 0;i<cards.length;i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src","images/back.png");
		cardElement.setAttribute("data-id",i);
		cardElement.addEventListener("click",flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

function resetBoard(){
	cards = shuffle(cards);
	var cardsTemp = document.querySelectorAll('img');
	for(var i = 0;i<cards.length;i++){
		cardsTemp[i].setAttribute("src","images/back.png");
		cardsTemp[i].setAttribute("data-id",i);
	}
	document.getElementById("match").textContent = "";
	cardsInPlay = [];
	cardsFlipped = 0;
}

function shuffle(array){
	for(var i = array.length;i>0;i--){
		var rand = Math.floor(Math.random()*i);
		var temp = array[rand];
		array[rand] = array[i-1];
		array[i-1] = temp;
	}
	return array;
}

createBoard();