class Card {
	constructor(suits, rank, score) {
		this.suits = suits;
		this.rank = rank;
		this.score = score;
			}
		}

class Deck {
	constructor(length, cards) {
		this.length = 52;
		this.cards = [];
	}	

function createDeck(suits, rank) {
	let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
	let rank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
		for (let i = 0; i < 13; i++) {
		for(let j = 0; j < 4; j++) {
		}
	} deck.push(suits[i]);
	}

function draw() {
		cards[Math.floor(Math.random()*cards.length)];
		}
// 14 = Ace/ 13 = King/ 12 = Queen/ 11 = Joker

//Fill out user attributes here + if statements when they win
let player1 = [];
let player2 = [];
let wins = [];


//Shuffle cards 



//Have the cards face-down, unknown to the other player

//Use splice() to add or remove from arrays to each other

//Actual ruleset of if/else statements depending on which card is played


//Alert for "win" when win state is achieved
//Print who won, the round itself, and how many cards they have now


//Bonus if time to spare: work on saving scores throughout matches
