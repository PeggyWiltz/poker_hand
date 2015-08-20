(function(exports) {
  "use strict";
  function Deck() {
    this.deck = [
      new Card("A", 14, "D"),
      new Card("2", 2, "D"),
      new Card("3", 3, "D"),
      new Card("4", 4, "D"),
      new Card("5", 5, "D"),
      new Card("6", 6, "D"),
      new Card("7", 7, "D"),
      new Card("8", 8, "D"),
      new Card("9", 9, "D"),
      new Card("10", 10, "D"),
      new Card("J", 11, "D"),
      new Card("Q", 12, "D"),
      new Card("K", 13, "D"),
      new Card("A", 14, "D"),
      new Card("2", 2, "H"),
      new Card("3", 3, "H"),
      new Card("4", 4, "H"),
      new Card("5", 5, "H"),
      new Card("6", 6, "H"),
      new Card("7", 7, "H"),
      new Card("8", 8, "H"),
      new Card("9", 9, "H"),
      new Card("10", 10, "H"),
      new Card("J", 11, "H"),
      new Card("Q", 12, "H"),
      new Card("K", 13, "H"),
      new Card("A", 14, "H"),
      new Card("2", 2, "C"),
      new Card("3", 3, "C"),
      new Card("4", 4, "C"),
      new Card("5", 5, "C"),
      new Card("6", 6, "C"),
      new Card("7", 7, "C"),
      new Card("8", 8, "C"),
      new Card("9", 9, "C"),
      new Card("10", 10, "C"),
      new Card("J", 11, "C"),
      new Card("Q", 12, "C"),
      new Card("K", 13, "C"),
      new Card("A", 14, "C"),
      new Card("2", 2, "S"),
      new Card("3", 3, "S"),
      new Card("4", 4, "S"),
      new Card("5", 5, "S"),
      new Card("6", 6, "S"),
      new Card("7", 7, "S"),
      new Card("8", 8, "S"),
      new Card("9", 9, "S"),
      new Card("10", 10, "S"),
      new Card("J", 11, "S"),
      new Card("Q", 12, "S"),
      new Card("K", 13, "S")
    ]
  }
  exports.Deck = Deck;

  Deck.prototype = {
    shuffle: function(deck) {
      var currentIdx = deck.length - 1;
      var randIdx = 0;
      var tempVal;

      while(currentIdx > 0) {
        randIdx = Math.floor(Math.random() * currentIdx);
        currentIdx--;

        tempVal = deck[currentIdx];
        deck[currentIdx] = deck[randIdx];
        deck[randIdx] = tempVal;
      }
      return deck;
    },
    deal: function(shuffledDeck) {

      var hands = [];
      var handSize = 5; //the game is 5-card stud
      var hand1 = [];
      var hand2 = [];

      for(var i = 0; i < handSize; i++) {
        hand1.push(shuffledDeck.shift());
        hand2.push(shuffledDeck.shift());
      }

      hands.push(hand1, hand2);
      return hands;
    }
  };
})(this);
