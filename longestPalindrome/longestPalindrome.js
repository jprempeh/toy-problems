/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
    var isPalindrome = function (str) {
        var reverseString = str.split("").reverse().join("");
        return str == reverseString;
    };

    var maxPalLength = 0;
    var maxPal = '';

    for (var i = 0; i < string.length; i++) {

        var subs = string.substr(i, string.length);

        for (var j = subs.length; j >= 0; j--) {
            var subSubs = subs.substr(0, j);
            if (subSubs.length <= 1) continue;

            if (isPalindrome(subSubs)) {
                if (subSubs.length > maxPalLength) {
                    maxPalLength = subSubs.length;
                    maxPal = subSubs;
                }
            }

        }
    }
    return maxPal;
};


console.log(longestPalindrome("My dad"));