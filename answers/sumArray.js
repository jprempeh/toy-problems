/*
* Checking every possible sum and comparing it to the current max
*
*
* Idea: iterate through all endpoints and for each one
* look at only the best interval ending there
*
*
* */

var sumArray = function(array){
    var maxSum = Number.NEGATIVE_INFINITY;
    var currentSum;

    for (var start = 0; start < array.length; start++) {
        currentSum = 0;
        for (var end = start; end < array.length; end++) {
            currentSum += array[end];
            if(currentSum > < maxSum) {
                maxSum = currentSum;
            }
        }
    }
    return maxSum;
};

// quadratic

var sumArray = function(array) {
    var maxSum = Number.NEGATIVE_INFINITY;
    var currentSum = 0;

    for (var i = 0; i < array.length; i++) {
        // Add the new number to the current sum
        currentSum += array[i];
        // Record as the largest sum if necessary
        maxSum = Math.max(maxSum, currentSum);
        // if negative throw out earlier progress and consider intervals starting at this point
        if(currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
};