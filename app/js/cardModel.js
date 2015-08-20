(function(exports) {
  "use strict";
  function Card(pipStr, pipCount, suit) {
    if( !pipStr ) {
      throw new Error("missing pip string");
    }
    if( !pipCount ) {
      throw new Error("missing pip count");
    }
    if( !suit ) {
      throw new Error("missing suit");
    }
    var allowedPipStr = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    if( allowedPipStr.indexOf(pipStr) < 0 ) {
      throw new Error("pip string out of range");
    }
    var allowedPipCount = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    if( allowedPipCount.indexOf(pipCount) < 0 ) {
      throw new Error("pip count out of range");
    }
    var allowedSuits = ["S","H","C","D"];
    if( allowedSuits.indexOf(suit) < 0 ) {
      throw new Error("suit out of range");
    }
    this.pipStr = pipStr;
    this.pipCount = pipCount;
    this.suit = suit;

  }
  exports.Card = Card;
})(this);
