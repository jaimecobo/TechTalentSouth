
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//////////////////////////////////////////////////////////////////////////// 

// Author: Jaime Cobo Nayar 
// Note: This code has been written as part of an OOP JavaScript project, the idea of the project is to replicate the WAR cards game,
// using classes and its corresponding instances, everything was made for educational purposes only. 

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//////////////////////////////////////////////////////////////////////////// 

//

class Game{
    gameName = "";
    decksNumber = 0;
    cardsDeck = [1, 2];
    oppot01_Cards = [];
    oppot02_Cards = [];

    constructor(gameName, number){
        this.gameName = gameName;
        this.decksNumber = number;
        // this.oppot01_Cards = oppot01_Cards;
        // this.oppot02_Cards = oppot02_Cards;
    }



    deckForGame = function(num){
        let newDeck = [];
        for(let i = 0; i < num; i++) {
            newDeck = newDeck.concat(this.cardsDeck);
        }
        // console.log(newDeck);
        return newDeck;
    }


        //The method shuffle belongs to to class Game because may different games may require this function
        shuffle =  function(deck2020) {
            // Creates  a collection of cards conformed of the amount of decks based on the amount of players
            let currentDeckSize = deck2020.length;
            let randomIndex;
          
            // While there are remaining items (cards) to shuffle
            while (0 !== currentDeckSize) {
          
              // Assings the item to [randomIndex] from randomnized selection in currentDeckSize
              randomIndex = Math.floor(Math.random() * currentDeckSize);
              currentDeckSize--;
          
              // Swap elements
              [deck2020[currentDeckSize], deck2020[randomIndex]] = [
                deck2020[randomIndex], deck2020[currentDeckSize]];
            }
          
            return deck2020;
          }


          dealCards = function(newSetOfCards){
              for (let i = 0; i<newSetOfCards.length; i++){
                  console.log(newSetOfCards.length);
                this.oppot01_Cards.push(newSetOfCards[i]);
                i++;
                this.oppot02_Cards.push(newSetOfCards[i]);
              }
              return [this.oppot01_Cards, this.oppot02_Cards];
          }

}




class War{
    name = "War";
    player01_name;
    player02_name;
    player01_cards;
    player02_cards;
    player01_score;
    player02_score;
    winner = "";
    drawCounterX = 0;
    drawCounterY = 0;
    cardsOnTable = [];
    numOfCardsOnTable = 0;
    clickEnabled;

    constructor(player01, player02, booleamParam){
        this.player01_name = player01.name;
        this.player02_name = player02.name;
        this.player01_cards = player01.playerSet;
        this.player02_cards = player02.playerSet;
        this.player01_score = player01.score;
        this.player02_score = player02.score;
        this.clickEnabled = booleamParam;
        }
     


    
    
    
    drawButton = function(){
        if (this.clickEnabled === true){
            this.battle( this.player01_cards[0], this.player02_cards[0] );
            // this.battle( this.player01_cards[this.drawCounterX], this.player02_cards[this.drawCounterX] );
            // this.drawCounterX = this.drawCounterX + 1;
            this.drawCounterY++;
            console.log("ROUND NUMBER: \'\' " + this.drawCounterY + " \'\'");
        }
    }

    battle = function(player_one_card, player_two_card){  


        // if (this.clickEnabled === true){

    
                let cardsDeckSize = this.player01_cards.length + this.player02_cards.length;
                console.log("THE SIZE OF THE DECK OF CARDS IS: " + cardsDeckSize + " CARDS");
            
                console.log("Cards of " + this.player01_name + " before putting a card on the table " + this.player01_cards);
                let cardOnTable_01 = this.player01_cards.shift();
                console.log(this.player01_name + " just put this card on the table: " + cardOnTable_01);
                console.log("Cards of " + this.player01_name + " after putting the card on the table " + this.player01_cards);
    
                console.log("Cards of " + this.player02_name + " before putting a card on the table " + this.player02_cards);
                let cardOnTable_02 = this.player02_cards.shift();
                console.log(this.player02_name +" just put this card on the table: " + cardOnTable_02);
                console.log("Cards of " + this.player02_name + " after putting the card on the table " + this.player02_cards);
            
            
                if(player_one_card === player_two_card){
                    this.numOfCardsOnTable += 2;
                    this.cardsOnTable.push(player_one_card, player_two_card);
                    console.log(" ################################### This are the cards on the table right now: " + this.cardsOnTable);
                    console.group("The number of cards on the table is: " + this.numOfCardsOnTable);
                    console.log("This are the cards on the table right now: " + this.cardsOnTable);
                    console.log("TIE");
                
                }else if(player_one_card > player_two_card){
                    this.numOfCardsOnTable += 2;
                    this.cardsOnTable.push(player_one_card, player_two_card);
                    console.log(" ################################### This are the cards on the table right now: " + this.cardsOnTable);
                    this.player01_cards = this.player01_cards.concat(this.cardsOnTable);
                    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ This are the cards that " + this.player01_name + " now has: " + this.player01_cards);
                    this.cardsOnTable = [];
                    this.numOfCardsOnTable = 0;
                    console.log(this.player01_name + " wins this round! " +  "now has "  + this.player01_cards.length + " cards");
                
                }else if(player_one_card < player_two_card){
                    this.numOfCardsOnTable += 2;
                    this.cardsOnTable.push(player_one_card, player_two_card);
                    console.log(" ################################### This are the cards on the table right now: " + this.cardsOnTable);
                    this.player02_cards = this.player02_cards.concat(this.cardsOnTable);
                    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ This are the cards that " + this.player02_name + " now has: " + this.player02_cards);
                    this.cardsOnTable = [];
                    this.numOfCardsOnTable = 0;
                    console.log(this.player02_name + " wins this round " +  "now has "  + this.player02_cards.length + " cards");

                }
                            
                if( (this.player01_cards.length === 0) && (this.player02_cards.length === 0) ){
                    console.log("THERE WAS A TIE, NO ONE WINS, BOTH PLAYERS RUN OUT OF CARDS!");
                    this.clickEnabled = false;
                }            
                
                if(this.player01_cards.length === 0){
                    console.log(this.player01_name + " RUN OUT OF CARDS!");
                    this.clickEnabled = false;
                }

                if(this.player02_cards.length === 0){
                    console.log(this.player02_name + " RUN OUT OF CARDS!");
                    this.clickEnabled = false;
                }
                    
                
                
                if(this.player01_cards.length === cardsDeckSize){
                    this.player01_score += 1;
                    this.winner = this.player01_name;
                    // document.getElementById('draw_button').onclick = null;
                    console.log("THE WINNER OF THIS BATTLE IS: " + "\"\"\" " + this.winner + " \"\"\"" );
                }else if (this.player02_cards.length === cardsDeckSize){
                    this.player02_score += 1;
                    this.winner = this.player02_name;
                    // document.getElementById('draw_button').onclick = null;
                    console.log("THE WINNER OF THIS BATTLE IS: " + "\"\"\" " + this.winner + " \"\"\"" );
                }

            }
        // }

}



class Player {
    name = "";
    playerSet = []
    score = 0;
    constructor(name, pl_set) {
      this.name = name;
      this.playerSet = pl_set;
    };

}




class Card{
    constructor(value, suit, power){
      this.card_value = value;
      this.card_suit = suit;
      this.card_power = power;
    };
}
  
class Deck{
    constructor(card){
        this.deck.push(card);
    };
}  

let card;
let deck = new Deck();

// Anonymous function to create the deck of cards
(function() {

    const SUITS = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const VALUES = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    // for(let i=0; i < SUITS.length; i++){
    for (let suit in SUITS) {
        for (let value in VALUES) {
            let power = 0;
            if(VALUES[value] === 'Ace'){
                power = 13;
            }else if(VALUES[value] === 'Jack'){
                power = 10;
            }else if(VALUES[value] === 'Queen'){
                power = 11;
            }else if(VALUES[value] === 'King'){
                power = 12;
            }else{
                power = VALUES[value];
            }
            card = new Card(VALUES[value], SUITS[suit], power);
            console.log(card);
            deck(card);
        };
        console.log(deck);
    }
      
})();



// function sleep (time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
//   }


// let newGame = new Game("war1", 2);
// console.log("newGame values are:");
// console.log(newGame);


// let toShuffle = newGame.deckForGame(2);
// console.log("The decks to shuffle are:");
// console.log(toShuffle);
// let shuffled = newGame.shuffle(toShuffle);
// console.log("The new deck of cards for the game completely shuffled looks like:");
// console.log(shuffled);


console.log("######################################################################");


    console.log("##########################################################");
    console.log("############ This are the values for the war #############");
    console.log("##########################################################");
    console.log("");
    let newWar01;
    console.log(newWar01);
    // console.log(newWar01.battle());
    let newGame;

function letsPlay(){ 
    newGame = undefined;
    newGame = new Game("war1", 2);
    console.log("newGame values are:");
    console.log(newGame);

    let toShuffle = newGame.deckForGame(2);
    console.log("The decks to shuffle are:");
    console.log(toShuffle);
    let shuffled = newGame.shuffle(toShuffle);
    console.log("The new deck of cards for the game completely shuffled looks like:");
    console.log(shuffled);


    let indiviualSets =  newGame.dealCards(shuffled);
    console.log(indiviualSets);

    //Creates new player named Luke
    let player01 = new Player("Luke", indiviualSets[0]);
    console.log("The name of player 1 is:");
    console.log(player01.name);
    console.log(player01.playerSet);
    console.log(player01.score);


    //Creates new player named Joda
    let player02 = new Player("Joda", indiviualSets[1]);
    console.log("The name of player 2 is:");
    console.log(player02.name);
    console.log(player02.playerSet);
    console.log(player02.score);

    // console.log("##########################################################");
    // console.log("############ This are the values for the war #############");
    // console.log("##########################################################");
    // console.log("");
    // let newWar01 = new War(player01, player02);
    // console.log(newWar01);
    // console.log(newWar01.battle());
    newWar01 = new War(player01, player02, true);

    // Reactivates DRAW button for new PLAY
    // document.getElementById('draw_button').onclick = ;



    let playerScore1 = document.getElementById("playerscore");
    playerScore1.innerText = "Cards remaining = " + player01.score;

    let playerScore2 = document.getElementById("npcscore");
    playerScore2.innerText = "Cards remaining = " + player02.score;

}

function drawButtonOutFunct(){
    newWar01.drawButton();
}






// //////////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 












