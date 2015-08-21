(function(exports) {
  "use strict";
  function Game(player1Name, player2Name) {
    this.deck = new Deck();
    var shuffledDeck = this.deck.shuffle(this.deck.deck);
    var hands = this.deck.deal(shuffledDeck);
    this.players = [new Player(player1Name, hands[0])
                    , new Player(player2Name, hands[1])];
    this.winner = {};
  }
  exports.Game = Game;

  Game.prototype = {
    determineWinner: function() {
      console.log("determine winner");
      var player1 = this.players[0];
      var player2 = this.players[1];
      var hand1 = player1.hand;
      var hand2 = player2.hand;
      hand1.analyze(hand1);
      hand2.analyze(hand2);
      console.log("player " + player1.playerName + " high card = " + player1.hand.highCard);
      console.log("player " + player2.playerName + " high card = " + player2.hand.highCard);
      return player1.hand.highCard.pipCount > player2.hand.highCard.pipCount ? player1 : player2;

    }
  };

})(this);
