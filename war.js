window.onload = function(){
//Starts games upon loading
//Variables to refer back to for the game
let suits = ["heart","diamond","spade","club"];
let ranks = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];
let scores = [2,3,4,5,6,7,8,9,10,11,12,13,14];

//create classes for card and player to reference later
class Card {
	constructor(suits, rank, score) {
		this.suits = suits;
		this.rank = rank;
		this.score = score;
			}
		}

class Player {
	constructor(hand){
		this.hand = [];
	}
}

//Assemble Deck

let deck = [];

function allCards() {
    for(let i = 0; i < ranks.length; i++) {
        for(let s = 0; s < suits.length; s++) {
               let card = {Ranks: ranks[i], Suits: suits[i]};
               deck.push(card);
        }
    }
  }

allCards();

let player1Hand = Player.hand;
let player2Hand = Player.hand;

//Shuffle cards 

function shuffleDeck(deck) {
    for(var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), 
    	x = deck[--i], deck[i] = deck[j], deck[j] = x);
			return deck;
}

shuffleDeck(deck);

// Deal out cards to two players 
	player1Hand = deck.splice(0,26)
	player2Hand = deck.splice(0,26)

// Games rules

function playGame() {
	while (player1Hand.length !== 52 || player2Hand.length !== 51) //Means the below code is active while a player doesn't yet have all cards
		{
			if (player1Hand.score[0] > player2Hand.score[0]) {
				console.log("Player 1 Has Won This Round!");
			}
	} else if (player1Hand.score[0] < player2Hand.score[0]) {
				console.log("Player 2 Has Won This Round!");
	}
}	else if (player1Hand.score[0] === player2Hand[0]) {
				console.log("Time for war!");
}







} //Ending to onload 