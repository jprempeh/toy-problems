/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var longestPalindrome = function (string) {
	//n^3

	var isPalindrome = function(string) {
		for(var i = 0; i < string.length/2; i++){
			if (string[i] !== string[string.length-i-1]) {
				return false;
			}
		}
		return true;
	};

	var longestPalindrome = function (string) {
		var longest = "";

		for (var i = 0; i < string.length; i++) {
			for (var j = 0; j < string.length; j++) {
				var subString = string.slice(i, j + 1);
				var palindrome = isPalindrome(subString);
				if (palindrome && longest.length < subString.length) {
					longest = subString;
				}
			}
		}

		return longest;
	};

};


console.log(longestPalindrome("My dad is a racecar athlete"));

//n^2 solution:

var longestPalindrome = function(string) {
	var length = string.length;
	var result = "";

	var _longestPalindrome = function(left, right) {
		// Three possible failures (exit while loop)
		// 1. runs out of letters to the left.
		// 2. runs out of letters to the right.
		// 3. string on the left and right (both equidistance from cemter) aren't equal.
		while (left >= 0 && right < length && string[left] === string[right]) {
			left-- && right++;
		}

		return string.slice(left+1, right);
	}

	for (var i = 0; i < length; i++) {
		var oddPalindrome = _longestPalindrome(i - 1, i + 1);
		var evenPalindrome = (i + 1 < length) ? _longestPalindrome(i, i + 1) : "";

		if (oddPalindrome.length > result.length) result = oddPalindrome;
		if (evenPalindrome.length > result.length) result = evenPalindrome;
	}

	return result;
};