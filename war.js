let suits = ["heart","diamond","spade","club"]
let ranks = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]
let scores = [2,3,4,5,6,7,8,9,10,11,12,13,14]


class Card {
	constructor(suits, rank, score) {
		this.suits = suits;
		this.rank = rank;
		this.score = score;
			}
		}

class Player1 {
	constructor(hand){
		this.hand = [];
	}
}

let deck = [];

function allCards() {
    for(let i = 0; i < rank.length; i++) {
        for(let s = 0; s < suits.length; s++) {
               let rank = ranks[i]
               let suit = suits[s]
               let score = scores[i]
               let card = new Card(suits, rank, score)
               deck.push(card)
        }
    }
}


// 14 = Ace/ 13 = King/ 12 = Queen/ 11 = Joker

//Fill out user attributes here + if statements when they win



//Shuffle cards 



//Have the cards face-down, unknown to the other player

//Use splice() to add or remove from arrays to each other

//Actual ruleset of if/else statements depending on which card is played


//Alert for "win" when win state is achieved
//Print who won, the round itself, and how many cards they have now


//Bonus if time to spare: work on saving scores throughout matches
