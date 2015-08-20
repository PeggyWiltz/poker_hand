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
    shuffle: function() {

    },
    deal: function() {
      var hands = [];
      return hands;
    }

  };

  function Card(pipStr, pipCount, suit) {
    this.pipStr = pipStr;
    this.pipCount = pipCount;
    this.suit = suit;
  }
  exports.Card = Card;

  function Hand(cardArray) {
    this.cards = cardArray || [new Card("A", 14, "S")
                              , new Card("A", 14, "D")
                              , new Card("8", 8, "S")
                              , new Card("8", 8, "D")
                              , new Card("8", 8, "H")];
    this.highCard = "";
    this.hasFourOfAKind = false;
    this.hasThreeOfAKind = false;
    this.hasPair = 0;
    this.hasStraight = "";  //high card value
    this.hasFlush = false;
    this.sortedCardValues = [] || [14, 14, 14, 8, 8];

  }
  exports.Hand = Hand;

  Hand.prototype = {
    analyze: function(target) {

      if (!target) {
        throw new Error("missing target");
      }
      var cards = target.cards;
      this.highCard = getHighCard(cards);
      var cardCounts = countCards(cards);

      for(var key in cardCounts) {
        if (cardCounts[key] === 4) {
          this.hasFourOfAKind = true;
        }
        if (cardCounts[key] === 3) {
          this.hasThreeOfAKind = true;
        }
        if (cardCounts[key] === 2) {
          this.hasPair += 1;
        }
      }

      function countCards(cards) {
        var counts = {};

        for(var i = 0; i< cards.length; i++) {
            var num = cards[i].pipCount;
            counts[num] = counts[num] ? counts[num]+1 : 1;
        }
        return counts;
      }

      function getHighCard(cards) {
        var sortedCards = cards.sort(sortCards);
        return sortedCards[cards.length - 1].pipStr;
      }

      function getNumericValueOfCard(cardDeets) {
        var cardVal = cardDeets[0];
        var cardNum = parseInt(cardDeets[0]);

        if (!isNaN(cardVal)) {
          if (cardNum < 2 || cardNum > 10) {
            return -1;
          }
          return cardNum;
        }

        return getNumericValue(cardVal);
      }

      function getNumericValue(cardVal) {
        var valueToReturn = 0;
        switch(cardVal) {
          case "A": {
            valueToReturn = 14;
            break;
          }
          case "K": {
            valueToReturn = 13;
            break;
          }
          case "Q": {
            valueToReturn = 12;
            break;
          }
          case "J": {
            valueToReturn = 11;
            break;
          }
          default: {
            return parseInt(cardVal);
          }
        }
        return valueToReturn;
      }

      function convertToFaceCardValue(cardVal) {
        var valueToReturn = "";
        switch(cardVal) {
          case 14: {
            valueToReturn = "A";
            break;
          }
          case 11: {
            valueToReturn = "J";
            break;
          }
          case 12: {
            valueToReturn = "Q";
            break;
          }
          case 13: {
            valueToReturn = "K";
            break;
          }
          default: {
            return cardVal;
          }
        }
        return valueToReturn;
      }

      function sortCards(a,b) {
        return a.pipCount - b.pipCount;
      }

      return this;
    }
  };
})(this);
