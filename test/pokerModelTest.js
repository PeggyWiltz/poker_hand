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
      expect(hand.hasStraight).to.equal("0");
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
    it("with no straight, hasStraight should be 0", function() {
      var cardArray = [new Card("4", 4, "S")
                                , new Card("4", 4, "D")
                                , new Card("A", 14, "H")
                                , new Card("6", 6, "C")
                                , new Card("10", 10, "S")];
      var hand = new Hand(cardArray);

      result = hand.analyze(hand);
      expect(result.hasStraight).to.equal("0");
    });
    it("with straight, hasStraight should be high card value", function() {
      var cardArray = [new Card("4", 4, "S")
                                , new Card("3", 3, "D")
                                , new Card("6", 6, "H")
                                , new Card("5", 5, "C")
                                , new Card("10", 10, "S")];
      var hand = new Hand(cardArray);

      result = hand.analyze(hand);
      expect(result.hasStraight).to.equal("6");
    });
    it("with straight at top of list, hasStraight should be high card value", function() {
      var cardArray = [new Card("10", 10, "S")
                                , new Card("9", 9, "D")
                                , new Card("6", 6, "H")
                                , new Card("8", 8, "C")
                                , new Card("J", 11, "S")];
      var hand = new Hand(cardArray);

      result = hand.analyze(hand);
      expect(result.hasStraight).to.equal("J");
    });
    it("without flush, hasFlush should be false", function() {
      var cardArray = [new Card("10", 10, "S")
                                , new Card("9", 9, "D")
                                , new Card("6", 6, "H")
                                , new Card("8", 8, "C")
                                , new Card("J", 11, "S")];
      var hand = new Hand(cardArray);

      result = hand.analyze(hand);
      expect(result.hasFlush).to.equal(false);
    });
    it("with flush, hasFlush should be true", function() {
      var cardArray = [new Card("10", 10, "S")
                                , new Card("9", 9, "S")
                                , new Card("6", 6, "S")
                                , new Card("3", 3, "S")
                                , new Card("K", 13, "S")];
      var hand = new Hand(cardArray);

      result = hand.analyze(hand);
      expect(result.hasFlush).to.equal(true);
    });
  });
});
describe("Card", function() {
  describe("constructor", function() {
    it("should throw if any params are null", function() {
      expect(function() {
        (new Card("9", 9));
      }).to.throw(Error);
      expect(function() {
        (new Card(0, 9, "S"));
      }).to.throw(Error);
      expect(function() {
        (new Card("9", 0, "S"));
      }).to.throw(Error);
    });
    it("should throw if any params are out of range", function() {
      expect(function() {
        (new Card("11", 11, "S"));
      }).to.throw(Error);
      expect(function() {
        (new Card("J", 22, "S"));
      }).to.throw(Error);
      expect(function() {
        (new Card("J", 11, "X"));
      }).to.throw(Error);
    });
    it("should not throw if all params in range and not null", function() {
      expect(function() {
        (new Card("9", 9, "S"));
      }).to.not.throw(Error);
    });
  });
});
describe("Player", function() {
  describe("constructor", function() {
    it("with no player name, should have default player name", function() {
      var expectedName = "Player";
      var player = new Player();
      expect(player.playerName).to.equal(expectedName);
    });
    it("should set player name", function() {
      var expectedName = "Any Player";
      var player = new Player(expectedName);
      expect(player.playerName).to.equal(expectedName);
    });
    it("should contain a default hand", function() {
      var expectedName = "Any Player";
      var expectedHand = [new Card("A", 14, "S")
                                , new Card("A", 14, "D")
                                , new Card("8", 8, "S")
                                , new Card("8", 8, "D")
                                , new Card("8", 8, "H")];
      var player = new Player(expectedName);
      expect(player.hand.cards).to.deep.equal(expectedHand);
    });
    it("should set given hand", function() {
      var expectedName = "Any Player";
      var expectedHand = [new Card("K", 13, "D")
                                , new Card("8", 8, "S")
                                , new Card("9", 9, "S")
                                , new Card("6", 6, "C")
                                , new Card("8", 8, "C")];
      var player = new Player(expectedName, expectedHand);
      expect(player.hand.cards).to.deep.equal(expectedHand);
    });
  });
});
describe("Deck", function() {
  describe("constructor", function() {
    it("should have 52 cards in deck", function() {
      var deck = new Deck();
      var expectedNumberOfCards = 52;
      expect(deck.deck.length).to.equal(expectedNumberOfCards);
    });
  });
  describe("shuffle", function() {
    it("should have 52 cards in shuffled deck", function() {
      //need a better test for shuffle, but what?
      var deck = new Deck();
      var expectedNumberOfCards = 52;

      var result = deck.shuffle(deck.deck);

      expect(deck.deck.length).to.equal(expectedNumberOfCards);
    });
  });
  describe("deal", function() {
    it("should return 2 hands of five cards each", function() {
      var deck = new Deck();
      var expectedNumberOfHands = 2;
      var expectedSizeOfHands = 5;

      var shuffledDeck = deck.shuffle(deck.deck);
      var result = deck.deal(shuffledDeck);

      expect(result.length).to.equal(expectedNumberOfHands);
      expect(result[0].length).to.equal(expectedSizeOfHands);
      expect(result[1].length).to.equal(expectedSizeOfHands);

    });
  });
});
describe("Game", function() {
  describe("constructor", function() {
    it("should contain 2 players and one deck", function() {
      var game = new Game();

      expect(game.players).to.exist;
      expect(game.players.length).to.equal(2);
      expect(game.deck).to.exist;
    });
  });
});
