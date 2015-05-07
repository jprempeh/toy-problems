/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
    // create variables to hold the current sum and the maximum possible sum
    var maximumSum = 0;
    var currentSum = 0;
    var arrayLength = array.length;

    // if the array is empty return nothing
    if (!arrayLength) {
        return null;
    }
    // loop through the array
    for (var i = 0; i < arrayLength; i++) {
        // check the current sum by checking the current number and adding it to the current sum and taking the max
        currentSum = Math.max((currentSum + array[i]), array[i]);
        // check if the maximum greatest summer would be this current sum or the previous maximum sum
        maximumSum = Math.max(currentSum, maximumSum);
    }
    // return the answer
    return maximumSum;
};
