(function(exports) {
  "use strict";
  function Game(player1Name, player2Name) {
    this.deck = new Deck();
    var shuffledDeck = this.deck.shuffle(this.deck);
    var hands = this.deck.deal(shuffledDeck);
    this.players = [new Player(player1Name, hands[0])
                    , new Player(player2Name, hands[1])];

  }
  exports.Game = Game;

  Game.prototype = {
    determineWinner: function(hand1, hand2) {
      
    }
  };

})(this);
