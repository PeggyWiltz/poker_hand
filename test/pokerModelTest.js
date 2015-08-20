var expect = chai.expect;

describe("Hand", function() {
  describe("constructor", function() {
    it("should have a default (dead man's) hand", function() {
      var expectedCardArray = [new Card("A", 14, "S")
                                , new Card("A", 14, "D")
                                , new Card("8", 8, "S")
                                , new Card("8", 8, "D")
                                , new Card("8", 8, "H")];
      var hand = new Hand();
      expect(hand.cards).to.deep.equal(expectedCardArray);
    });
    it("should set card array from parameter", function() {
      var expectedCardArray = [new Card("4", 4, "S")
                                , new Card("8", 8, "D")
                                , new Card("5", 5, "S")
                                , new Card("A", 14, "S")
                                , new Card("10", 10, "S")];
      var hand = new Hand(expectedCardArray);
      expect(hand.cards).to.deep.equal(expectedCardArray);
    });
    it("should set default values for hand properties", function() {
      var cardArray = [new Card("4", 4, "S")
                                , new Card("8", 8, "D")
                                , new Card("5", 5, "S")
                                , new Card("A", 14, "S")
                                , new Card("10", 10, "S")];
      var hand = new Hand(cardArray);

      expect(hand.highCard).to.equal("");
      expect(hand.hasFourOfAKind).to.equal(false);
      expect(hand.hasThreeOfAKind).to.equal(false);
      expect(hand.hasPair).to.equal(0);
      expect(hand.hasStraight).to.equal("");
      expect(hand.hasFlush).to.equal(false);
      expect(hand.highCard).to.equal("");
    });
  });
  describe("Analyze", function() {
    it("should set correct value for high card", function() {
      var cardArray = [new Card("4", 4, "S")
                                , new Card("8", 8, "D")
                                , new Card("5", 5, "S")
                                , new Card("A", 14, "S")
                                , new Card("10", 10, "S")];
      var expectedCardValue = "A";
      var hand = new Hand(cardArray);

      result = hand.analyze(hand);
      expect(result.highCard).to.equal(expectedCardValue);
    });
    it("without any matches, all match properties should be false", function() {
      var cardArray = [new Card("4", 4, "S")
                                , new Card("8", 8, "D")
                                , new Card("5", 5, "S")
                                , new Card("A", 14, "S")
                                , new Card("10", 10, "S")];
      var hand = new Hand(cardArray);

      result = hand.analyze(hand);
      expect(result.hasFourOfAKind).to.equal(false);
      expect(result.hasThreeOfAKind).to.equal(false);
      expect(result.hasPair).to.equal(0);
    });
    it("with four of a kind, hasFourOfAKind should be true", function() {
      var cardArray = [new Card("4", 4, "S")
                                , new Card("4", 4, "D")
                                , new Card("4", 4, "H")
                                , new Card("4", 4, "C")
                                , new Card("10", 10, "S")];
      var hand = new Hand(cardArray);

      result = hand.analyze(hand);
      expect(result.hasFourOfAKind).to.equal(true);
    });
    it("with three of a kind, hasThreeOfAKind should be true", function() {
      var cardArray = [new Card("4", 4, "S")
                                , new Card("4", 4, "D")
                                , new Card("4", 4, "H")
                                , new Card("6", 6, "C")
                                , new Card("10", 10, "S")];
      var hand = new Hand(cardArray);

      result = hand.analyze(hand);
      expect(result.hasThreeOfAKind).to.equal(true);
    });
    it("with one pair, hasPair should be 1", function() {
      var cardArray = [new Card("4", 4, "S")
                                , new Card("4", 4, "D")
                                , new Card("6", 6, "H")
                                , new Card("A", 14, "C")
                                , new Card("10", 10, "S")];
      var hand = new Hand(cardArray);

      result = hand.analyze(hand);
      expect(result.hasPair).to.equal(1);
    });
    it("with two pair, hasPair should be 2", function() {
      var cardArray = [new Card("4", 4, "S")
                                , new Card("4", 4, "D")
                                , new Card("A", 14, "H")
                                , new Card("A", 14, "C")
                                , new Card("10", 10, "S")];
      var hand = new Hand(cardArray);

      result = hand.analyze(hand);
      expect(result.hasPair).to.equal(2);
    });
  });
});
