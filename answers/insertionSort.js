/*
* INSERTION SORT
*
*
* the first one is already sorted. ignore it.
*
* look at next value, compare it to the previous value
* an outer loop will iterate over all elements of a given array, growing a sorted arrray behind the current element
* in this way each iteration of the loop gaurentees that array.slice(0, ix) is sorted and when ix===array.length
* we will have a sorted array.
*
* */

var insertionSort = function(array) {
    for (var ix = 1; ix < array.length; ix++) {
        // assume that array.slice (0, ix) is sorted..

        // grab the current element
    var val = array[ix];
    var hole = ix;
    // find the insertion point
    while (hole && val < array[hole - 1]) {
        array[hole] = array[hole - 1];
        hole -= 1;
    }

        // Insert the element
        array[hole] = val;
        /* at this point val has been inserted,
        and array.slice (0, ix + 1) is now sorted.
         */
    }
    return array;
};

// Time complexity
// two loops worst case quadratic O(n^2)
// best case O(n) its already sorted
// stability: stable sorting algorithms maintain the relative order of records with equal keys (i.e. values).