// Given a number sequence, and an input map (dial pad on a phone), return all possible words from the sequence

// Input map:
// 2 - abc
// 3 - def
// 4 - ghi
// …

// E.g.
// Input: 2, Output: [a, b, c]
// Input: 23, Output: [ad, ae, af, bd, be, bf, cd, ce, cf]
// Input: 232, Output: [ada, adb, adc, aea, aeb, aec, afa, afb, afc, bda, bdb, bdc, bea, beb, bec, bfa, bfb, bfc, cda, cdb, cdc, cea, ceb, cec, cfa, cfb, cfc]

// create an input map

var map = {
	2: 'abc',
	3: 'def'
};

var words = function(string) {
	var results = [];

	var createWords = function(word, numbers){
		// word = 'a' numbers = 3
		if(numbers.length === 0) {
			results.push(word);
			return;
		}

		var currentNumber = numbers[0]; // =2 holds the current number
		// currentNumber = 3
		var remainNumbers = numbers.slice(1); // =3 holds the remaining numbers
		// remainNumbers = ''
		var letters = map[currentNumber].split(''); //= [a,b,c] holds the corresponding letters
		// letters = map[3] = 'def' = [d, e, f]
		for(var i = 0; i < letters.length; i++) {
			// i = 0
			createWords(word + letters[i], remainNumbers); // 'a b c' 3
		}

	};

	createWords('', string.split(''));

	return results;
};

console.log(words('23'));

// create the function
// create a container for the words
// select the current letter
