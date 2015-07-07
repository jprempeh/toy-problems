/*
*
* if a number is not evenly divisible by any number other than 1 or iteself then we check
* every number from 2 to n-1
* any number greater than n will not divide evenly into n
*
*
*
* */

var primeTester = function(n) {
    if (typeof n !== 'number' || n <=1 || n % 1 !==0) {
        return false;
    }


    for (var i = 2; i <= n; i+=1) {
        if (n % i === 0) {
            return false
        }
    }
    return true;

};
// we don't need to check every number bigger than n/2
// we can be confident that n will not be divisible by any number larger than n/2


var primeTester2 = function(n) {
    if (typeof n !== 'number' || n <=1 || n % 1 !==0) {
        return false;
    }


    for (var i = 2; i <= n/2; i+=1) {
        if (n % i === 0) {
            return false
        }
    }
    return true;

};


var primeTester3 = function(n) {
    if (typeof n !== 'number' || n <=1 || n % 1 !==0) {
        return false;
    }


    for (var i = 2; i <= Math.sqrt(n); i+=1) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;

};