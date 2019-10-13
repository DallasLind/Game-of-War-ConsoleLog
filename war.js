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



//Fill out user attributes here + if statements when they win







//Have the cards face-down, unknown to the other player

//Use splice() to add or remove from arrays to each other

//Actual ruleset of if/else statements depending on which card is played


//Alert for "win" when win state is achieved
//Print who won, the round itself, and how many cards they have now


//Bonus if time to spare: work on saving scores throughout matches
