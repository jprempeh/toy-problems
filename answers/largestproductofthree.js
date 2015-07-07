/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */



var largestProductOfThree = function(array) {
	// if last 3 numbers are positive multiply the last 3 numbers
	// if last 3 numbers are not + multiply the largest two negative numbers with the largest positive number
	// given a sorted array
	// TO DO you need to write your own sort function because sort sorts lexigraphically

	array = array.slice().sort(function(a,b) {
		return a - b;
	});
	var n = array.length;

	var lastProduct = array[n - 1] * array[n-2] * array[n-3];

	var firstProduct = array[n-1] * array[0] * array[1];

	return Math.max(firstProduct, lastProduct);
};

console.log(largestProductOfThree([-1, -3, -5, 1,2,3,4]));

// time complexity is probably O(n) or O(n log n))