(function(exports) {
  "use strict";
  function Player(name, cardArray) {
    this.playerName = name || "Player";
    this.hand = new Hand(cardArray);
  }
  exports.Player = Player;
})(this);
