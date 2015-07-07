/*
Power Set
Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

	Make sure your code does the following:
	1. All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 3. Duplicate characters in strings should be ignored; for example, 'obama' should be evaluated as if it only contained one 'a'. See the result below.

	Parameters:
string (required) - a string.

	Examples
Input	Output
string:
	"a"	[ "", "a" ]
string:
	"ab"	[ "", "a", "ab", "b" ]
string:
	"horse"	[ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]
string:
	"obama"	[ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]
*/


function powerSet (string) {
	// remove all duplicate characters
	// use sort to sort alphabetically
	// create a results array
	var find_unique_characters = string.split('').filter(function(item, index, array) {
		return array.indexOf(item) === index;
	}).sort();

	var getCombinations = function(chars) {
		var result = [];
		result.push("");
		var f = function(prefix, chars) {
			for (var i = 0; i < chars.length; i++) {
				result.push(prefix + chars[i]);
				f(prefix + chars[i], chars.slice(i + 1));
			}
		};
		f('', chars);
		return result;
	};

	return getCombinations(find_unique_characters);

}

console.log(powerSet("sickkkk"));
