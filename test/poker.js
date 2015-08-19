var expect = require("chai").expect;
var poker = require("../app/poker");

describe("Game", function() {
  describe("calculate card value", function() {
    it("with non-face card, figures the value of individual card", function() {
      var card = "2D";
      var expectedCardVal = 2;
      var result = poker.calculateCardValue(card);
      expect(result).to.equal(expectedCardVal);
    });
    it("with ace, figures the value of individual card", function() {
      var card = "AD";
      var expectedCardVal = 14;
      var result = poker.calculateCardValue(card);
      expect(result).to.equal(expectedCardVal);
    });

    it("with face card, figures the value of individual card", function() {
      var jack = "JD";
      var queen = "QD";
      var king = "KD";

      var expectedJackVal = 11;
      var expectedQueenVal = 12;
      var expectedKingVal = 13;

      var result1 = poker.calculateCardValue(jack);
      var result2 = poker.calculateCardValue(queen);
      var result3 = poker.calculateCardValue(king);

      expect(result1).to.equal(expectedJackVal);
      expect(result2).to.equal(expectedQueenVal);
      expect(result3).to.equal(expectedKingVal);
    });
    it("returns the suit of the individual card", function() {
      var card = "AD";
      var expectedSuit = "D";
      var result = poker.getSuit(card);
      expect(result).to.equal(expectedSuit);
    });
    it("returns -1 for values outside actual card values", function() {
      var lowCard = "0D";
      var highCard = "15S";
      var expectedCardVal = -1;

      var result1 = poker.calculateCardValue(lowCard);
      var result2 = poker.calculateCardValue(highCard);

      expect(result1).to.equal(expectedCardVal);
      expect(result2).to.equal(expectedCardVal);
    });
  });
  describe("calculate high card", function() {
    it("given five card array with all non-face cards , calculates high card", function() {
      var cardArray = ["3C", "2H", "5D", "6D", "7D"];
      var expectedHighCardValue = 7;
      var result = poker.calculateHighCard(cardArray);

      expect(result).to.equal(expectedHighCardValue);
    });
    it("given five card array with mixed cards, calculates high card", function() {
      var cardArray = ["AC", "2H", "KD", "6D", "JD"];
      var expectedHighCardValue = 14;
      var result = poker.calculateHighCard(cardArray);

      expect(result).to.equal(expectedHighCardValue);
    });
  });

});
