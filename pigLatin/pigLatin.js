/*

 Goal:
 Convert an english sentence in to Pig Latin

 Pig Latin Rules:
 1. Any word that starts with a consonant, move the first letter to the end of the word and add "ay" after that.
 2. Any word that starts with a vowel, add "way" to the end of the word.

 */

function capitalize(str) {
	if(str.charAt(0) === str.charAt(0).toUpperCase()) {
		return str.charAt(1).toUpperCase() + str.substr(2) + str.charAt(0).toLowerCase();
	} else {
		return str.substr(1) + str.charAt(0);
	}
}

function pigLatinize(str) {
	var arr = str.split(' '),
		vowels = ['a', 'e', 'i', 'o', 'u'],
		result = [];

	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === 0) {
			result.push(capitalize(arr[i]));
		} else if(vowels.indexOf(arr[i].charAt(0)) !== -1) { // if its a vowel
			result.push(arr[i] + 'way'); //correct
		} else {
			var word = capitalize(arr[i]) + 'ay';
			result.push(word);
		}
	}
	return result.join(' ');
}

function test() {
	console.assert(pigLatinize('that was an awesome party dude') === 'hattay asway anway awesomeway artypay udeday', 'Passed the party test');
	console.assert(pigLatinize('That was an awesome party dude') === 'Hattay asway anway awesomeway artypay udeday', 'Passed the party capitalization test');
	console.log('All tests complete!');
}

test();
