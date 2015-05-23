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
	// if x = 3 and y = 4
	// then that's 3 + 3 + 3 + 3
	var result = 0;
	for (var i = y; i > 0; i--) {
		result += x;
	}
	return result;
};

var divide = function(x, y) {
	// if x is 24 and y is 3 then result should be 8
	var zero = x;
	var remainder;
	var counter = 0;
	while (zero > 0 && zero >= y) {
		remainder = x - y;
		zero -= y;
		counter++;
	}
	return counter;
};

var modulo = function(x, y) {

};


console.log(multiply(3, 10));
console.log(multiply(10, 10));
console.log(divide(100, 10));
console.log(divide(64, 8));
console.log(divide(82, 9));


