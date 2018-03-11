module.exports = function getZerosCount(number, base) {
var subBase = base, newBase = base, subNumber = number, result = number, doubledBase, num;

  for (var i = 2; i <= base; i++) {
    if (subBase % i == 0) {
      doubledBase = 0;
    while (subBase % i == 0) {
      subBase = subBase/i;
      doubledBase++;
    }
  
      var prime = i;
      var subResult = 0;
      subNumber = number;
      while (subNumber >= prime) {
        subNumber = (subNumber - subNumber % prime)/prime;
        subResult = subResult + subNumber;
      }
      subResult = Math.floor(subResult / doubledBase);
      if (subResult < result) {
        result = subResult;
      }
    }
  }
  return result;
}
