var makeChange = function(total) {
    var currency = [1, 2, 5, 10, 20, 50, 100, 200];

    var counter = 0; // number of solutions we found

    (function recurse (index, remainder) {
        var coin = coins[index];
        // check to see if we've been through all the coins in the array
        if (index === 0)  {
            // our base case
            remainder % coin === 0 && counter++;
            return;
        }
        while (remainder >= 0) {
            recurse(index -1, remainder);
            remainder -= coin;
        }
    })(coins.length-1, total); // we'll invoke this only once let's walk through this list backwards
    // this are arguments for the function
    //
    return counter;
};

var makeChange = function(total, coins) {

    var counter = 0; // number of solutions we found
    coins.sort(function(a, b) {return a - b;});
    (function recurse (index, remainder) {
        var coin = coins[index];
        // check to see if we've been through all the coins in the array
        if (index === 0)  {
            // our base case
            remainder % coin === 0 && counter++;
            return;
        }
        while (remainder >= 0) {
            recurse(index -1, remainder);
            remainder -= coin;
        }
    })(coins.length-1, total); // we'll invoke this only once let's walk through this list backwards
    // this are arguments for the function
    //
    return counter;
};