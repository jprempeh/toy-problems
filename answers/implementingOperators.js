// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
	var result = 0;
	if (x < 0 ^ y < 0) {
		return -multiply(Math.abs(x), Math.abs(y));
	}
	if (x < 0 && y < 0){
		return multiply(Math.abs(x), Math.abs(y));
	}
	while(y--) {
		result+= x;
	}
	return result;
	// if x or y are 0
		// return -
	//if either x or y but not both are negative
	//mutiply their absolute values and return its opposite
	//if x and y are negative multiply their absolute values and return
};

var divide = function(x, y) {
	// if x is 24 and y is 3 then result should be 8
	var counter = 0;
	while (x>=y) {
		x -= y;
		counter++
	}
	return counter;
	// if x is 0
	// return 0
	// handle edge cases
	if (x === 0) return 0;
	if (x < 0 ^ y < 0) {
		return divide(Math.abs(x), Math.abs(y));
	}
};

var modulo = function(x, y) {
	// if x = 11 and y = 4 result should be 3
	var remainder;
	if (x < 0) {
		remainder = Math.abs(x);
	} else {
		remainder = x;
	}

	if (y < 0) {y = -y;}

	while (remainder >= y) { remainder -=y; }

	if (x<0) {
		return -remainder;
	} else {
		return remainder;
	}
};

var divideremainder = function(x, y) {
	// recursive divide function

}
// 10/7 quotient 1, remainder 3


console.log(multiply(3, 10));
console.log(multiply(10, 10));
console.log(divide(100, 10));
console.log(divide(64, 8));
console.log(divide(82, 9));
console.log(modulo(102, 10));

