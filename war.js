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
	constructor(name, hand){
		this. name = name;
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

function playGame(player1Hand, player2Hand) {
	while (player1Hand.length !== 51 || player2Hand.length !== 51) //Means the below code is active while a player doesn't yet have all cards
		{
			if (player1Hand.score[0] > player2Hand.score[0]) {
				player1Hand.push(player2Hand[0]);
				player2Hand.pop(); 
				console.log()
				alert(`Player 1 Has Won This Round! Player1 now has ${player1Hand.length} !`);
					//Should move and remove card from player2 to player 1

			}
	} else if (player1Hand.score[0] < player2Hand.score[0]) {
				player2Hand.push(player1Hand[0]);
				player1Hand.pop(); 
				alert(`Player 2 Has Won This Round! Player2 now has ${player2Hand.length} !`);
					//Same as above but reversed positions
	}
}	else if (player1Hand.score[0] === player2Hand[0]) {
				alert("Time for war!");








} //Ending to onload 