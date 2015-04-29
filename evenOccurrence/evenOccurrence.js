/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
    // we're getting an array of numbers
    // we should keep track of how often each number is in the array (maybe use an object)
    var occurances = {};
    var evens = [];
    for (var i = 0; i < arr.length; i++) {
        occurances[arr[i]] = (occurances[arr[i]] || 0) + 1;
    }

    for (var prop in occurances) {
        if (occurances[prop] % 2 === 0) {
            evens.push(prop);
        }
    }
    var results = [];

    for (var j = 0; j < evens.length; j++) {
        results.push(arr.indexOf(evens[j]));
    }

    return results;

    // as soon as the number occurs 2 times
    // return that number
    // if no numbers occur 2 times
    // return null
};


