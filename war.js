window.onload = function(){}
//Starts games upon loading
console.log("We're live and ready to go to WAR!");
//Variables to refer back to for the game
let suits = ["heart","diamond","spade","club"];
let ranks = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];

//create classes for card and player to reference later
class Card {
	constructor(suits, rank) {
		this.suits = suits;
		this.rank = rank;
		this.score = score;
			}
		}

class Player {
	constructor(name, hand){
		this.name = name;
		this.hand = hand;
	}
}

//Assemble Deck
let player1 = [];
let player2 = [];


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
//Shuffle cards 

function shuffleDeck(deck) {
    for(var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), 
    	x = deck[--i], deck[i] = deck[j], deck[j] = x);
			return deck;
}

shuffleDeck(deck);

// Deal out cards to two players

function dealDeck() {
	playerOneHand = deck.splice(0,26);
	playerTwoHand = deck.splice(0,26);
}


// Games rules

function playGame(playerOneHand, playerTwoHand) {
        while (playerOneHand.length !== 51 || playerTwoHand.length !== 51) {//Means the below code is active while a player doesn't yet have all cards
		console.log(`Player1 plays: ${player1Card.rank} of ${player1Card.suit}`);   
    	console.log(`Player2 plays: ${player2Card.rank} of ${player2Card.suit}`);
    		//The console.log up above is for all relevant plays below so it'll pop up separate of the alert		 
		{
			if (playerOneHand.score[0] > playerTwoHand.score[0]) {
				playerOneHand.push(playerTwoHand[0]);
				playerTwoHand.pop(); 
				alert(`Player 1 Has Won This Round! Player1 now has ${playerOneHand.length} !`);
					//Should move and remove card from player2 to player 1
	} else if (playerOneHand.score[0] < playerTwoHand.score[0]) {
				playerTwoHand.push(playerOneHand[0]);
				playerOneHand.pop(); 
				alert(`Player 2 Has Won This Round! Player2 now has ${playerTwoHand.length} !`);
					//Same as above but reversed position
}	else  (playerOneHand.score[0] === playerTwoHand.score[0])
		 		alert(`DRAW!`)
		 			war();
					}
				}
				playGame();
			}
	
		
// Function for war if cards are same value
function war(Player) {
	let warPlayerOne = playerOneHand.slice(0, 3);
	let warPlayerTwo = playerTwoHand.slice(0, 3); 
	if (playerOneHand.score[3] > playerTwoHand.score[3]) {
		playerOneHand.push(warPlayerOne);
		playerTwoHand.pop(warPlayerTwo);
		alert(`Player 1 Won This War! Player1 now has ${playerOneHand.length} !`)
	} else (playerTwoHand.score[3] > playerOneHand.score[3]) 
		playerTwoHand.push(warPlayerTwo);
		playerOneHand.pop(warPlayerOne);
		alert(`Player 2 Won This War! Player2 now has ${playerTwoHand.length} !`)
	} 


	function winner(){
			if (playerOneHand.length === 51) {
				alert(`PLAYER1 WINS!!`);
		} else if (playerTwoHand.length === 51) {
				alert(`PLAYER2 WINS!!`);
		} else {
				alert(`You have reached diplomacy`);
				}
		}
	






