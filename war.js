console.log("We're live and ready to go to WAR!");
let values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];

//Shuffle deck of cards

function shuffle(array){
  let currentI = array.length;
  let randomI;
  let temporaryValue;
  while(currentI > 0){
    randomI   = Math.floor(Math.random() * currentI);
    currentI -= 1;
	temporaryValue       = array[currentI];
    array[currentI]  = array[randomI];
    array[randomI]   = temporaryValue;
  }
  return array;
}

//build deck

function buildDeck(){
  let deck = [];
  for(let suitI = 0; suitI < suits.length; suitI++){
    for(let valueIndex = 0; valueIndex < values.length; valueIndex++){
      deck.push({
        "suit"  : suits[suitI],
        "value" : values[valueIndex]
      });
    }
  }
  return deck;
}

function Player(){
  this.deck     = [];
  this.discard  = [];
  this.card     = [];
  this.total    = function(){
    return this.deck.length + this.discard.length;
  };
}

//draw cards

function draw(){
  for(let x in players){
    let player  = players[x];
    if(player.deck.length === 0 && player.discard.length !== 0){
      player.deck     = shuffle(player.discard);
      player.discard  = [];
    }else if(player.total() === 0){
      return false;
    }
    player.card = player.deck.shift();
    pot.push(player.card);
    console.log(x + " DRAWS " + player.card["value"] + " TOTAL " + (player.total() + 1));
  }
}

//dictate winner

function winner(which){
  let winner = players[which];
  winner.discard = winner.discard.concat(pot);
  pot = [];
}

//Who has which turn 

function turn(){
  do{
    draw();
    cardA = values.indexOf(players["a"].card["value"]);
    cardB = values.indexOf(players["b"].card["value"]);
    if(cardA > cardB){
      winner("a");
    }else if(cardA < cardB){
      winner("b");
    }else{
      console.log("IT'S TIME FOR WAR!");
      for(let x = 0; x < 2; x++){
        draw();
      }
    }
  }while(pot.length > 0);
}


//new game

let deck    = shuffle(buildDeck());
let players = {"a" : new Player(), "b" : new Player()};
let pot     = [];
let turns   = 0;

for(let x in players){
  players[x].deck = deck.splice(0,26);
}
while(players["a"].total() !== 52 && players["a"].total() !== 0){
  turns += 1;
  console.log("TURN " + turns);
  turn();
}
console.log("GAME OVER!");
