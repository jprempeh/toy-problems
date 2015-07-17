function fractionConverter(number) {
	if (number.toString().length === 1) {
		return "" + number + "/1";
	}
}
// solution
var toFraction = function (num) {
	var denom = 1;
	if (num < 0) {
		return ‘-’ +toFraction(-num)
	} else {
		while (num % 1 !== 0) {
			num = num * 10;
			denom = denom * 10;
		}
	}

	var gcd = 1
	for (var i = num; i > 0; i--) {
		if (num % i === 0 && denom % i === 0) {
			gcd = i;
			break;
		}
	}
	return num / gcd + ‘/’ + denom/g
	cd
};

var EulerGcd = function (a, b) {
	if (!b) {
		return a;
	}
	return EulerGcd(b, a % b);
};
// end solution
console.log(fractionConverter(1));
console.log(fractionConverter(3));
