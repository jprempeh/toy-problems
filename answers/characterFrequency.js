/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
    var letter = undefined, result = [], frequencies = {}, i;
    // store unique characters and their frequencies
    for (i = 0; i < string.length; i++) {
        letter = string.charAt(i);
        frequencies[letter] = frequencies[letter] || 0;
        frequencies[letter]++;
    }

    // push pairs into final result Array
    for(var letter in frequencies) {
        result.push([letter, frequencies[letter]]);
    }
    // sort pairs appropiately
    // pure native sort will fail us, must pass in a callback array
    // [1,11,4,9, 15].sort === [1, 11, 15, 4, 9] sorts lexigraphically
    // [1, 9, 11,4,5].sort(function(a, b) {return a-b})
    result.sort(function(a,b) {
	      console.log('a', a[1], a[0]);
        if (a[1] > b[1]) return -1;
        else if (a[1] < b[1]) return 1;
        else if (a[0] < b[0]) return -1;
        else if (a[0] > b[0]) return 1;
        return 0; // if none of the conditions are met return 0
    });

    return result;
};

// use an object to update the frequency since you can access the object's values easier

// loop thru input
// store ch
// sort first by frequency then by alphabetical order
// capital A is less than lower case a
// sort is not consistent across browsers

console.log(characterFrequency('mississippi'));
console.log(characterFrequency('joe'));
