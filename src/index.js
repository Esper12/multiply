module.exports = function multiply(first, second) {
  var firstElement = first.split('').reverse();
  var secondElement = second.split('').reverse();

  var ranksValue = [];

  for(var i = 0; i < firstElement.length; i++) {
    for(var j = 0 ; j < secondElement.length; j++) {
      var multiply = firstElement[i]*secondElement[j];
      var rank = i + j;
      if(ranksValue[rank] != null) {
        ranksValue[rank] += multiply;
      } else {
        ranksValue[rank] = multiply;
      }
    }
  }

  for(var i = 0; i < ranksValue.length; i++) {
    var number = ranksValue[i] % 10;
    var numberUpperRank = Math.floor(ranksValue[i] / 10);
    ranksValue[i] = number;

    if(ranksValue[i + 1]) {
      ranksValue[i + 1] += numberUpperRank;
    } else if(numberUpperRank != 0) {
      ranksValue[i + 1] = numberUpperRank;
    }
  }
  return ranksValue.reverse().join('');
}