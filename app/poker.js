'use strict'

exports.calculateCardValue = function(card) {
  var cardDeets = getCardArray(card);
  return getNumericValueOfCard(cardDeets);
};

exports.calculateHighCard = function(hand) {
  var cardVals = [];
  console.log(hand);
  for (var i = 0; i < hand.length; i++) {
    var cardDeets = getCardArray(hand[i]);
    var cardVal = getNumericValueOfCard(cardDeets);
    cardVals.push(cardVal);
  }
  console.log(cardVals.sort(sortNumbers));
  return cardVals.sort(sortNumbers)[cardVals.length - 1];
}

exports.getSuit = function(card) {
  return getCardArray(card)[1];
};

function getFaceCardValue(cardVal) {
  var valueToReturn = 0;
  switch(cardVal) {
    case "A": {
      valueToReturn = 14;
      break;
    }
    case "J": {
      valueToReturn = 11;
      break;
    }
    case "Q": {
      valueToReturn = 12;
      break;
    }
    case "K": {
      valueToReturn = 13;
      break;
    }
    default: {
      return -1;
    }
  }
  return valueToReturn;
}

function getCardArray(card) {
  return card.split('');
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

  return getFaceCardValue(cardVal);
}

//utilities
function sortNumbers(a,b) {
  return a - b;
}
