module.exports = function getZerosCount(number, base) {
var subBase = base, subNumber = number, result = 0;
	for (var i = 2; i <= base; i++) {
		if (subBase % i == 0) {
			while (subBase % i == 0) {
				subBase = (subBase - subBase%i)/i;
			}
			
			subNumber = number;
			result = 0;
			while (subNumber/i > 0) {
				result = result + ((subNumber - subNumber%i) / i);
				subNumber = (subNumber - subNumber%i) / i;
			}
			if (subNumber > result) {
				subNumber = result;
			}
		}
	}
	return Math.floor(result);
}
