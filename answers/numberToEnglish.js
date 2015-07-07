/**
 * Extend the Number prototype with a new method called `toEnglish`.
 * It should return the number as a string using English words.
 * Examples:
 *   (7).toEnglish(); // > "seven"
 *   (575).toEnglish(); // > "five hundred seventy-five"
 *   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
 *
 * Extra credit: Make your function support decimals.
 * Example:
 *   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
 *
 */

var numbersToWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
};
var numbersToPlace = {
    10: 'ten',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
    1000000000000000: 'quadrillion',
    1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function() {
    n = this.valueOf();
    if (numToWords[n]) {
        // numbers less than 20 or divisible by 10
        output = numToWords[n];
    } else if (n < 100) {
        // tens and a single digit, hyphenated
        numInPlace = Math.floor(n / 10);
        numLeft = n % 10;
        output = numToWords[numInPlace * 10] +'-'+
            (numLeft).toEnglish();
    } else {
        // combo of number and a place name
        if (n < 1000) {
            // the hundreds place is special
            place = 100;
        } else {
            // or multiple of 1000
            place = 1000;

            while (place * 1000 <= n) {
                place *= 1000;
            }
        }
        numInPlace = Math.floor(n / place);
        numLeft = n % place;
        // assemble this 1000s place
        output = numInPlace.toEnglish() +' '+
            numToPlace[place];
        // assemble the rest of the number
        restOfString = (numLeft).toEnglish();
        if (restOfString !== 'zero') {
            output += ' ' + restOfString;
        }
    }
};

Number.prototype.toEnglishfirstSolution = function (number) {
    // return my value as english words
    return number;
};

/*
* Three cases that you have to be aware of:
*
* 1 - 19 or mutiple of 10 and <100 with special names
* 20 - hundred 20 plus the ones
*
* the hundreds plus
* */

var firstSolution = function(number) {
    for (var key in numbersToWords) {
        if (number == key) {
            return numbersToWords[key];
        } else if ((number).toString().length == 2) {
            // if two digit number concat number to word for tenth place and sigle digit place
            var result;
            for (var key in numbersToWords) {
                if(number.toString().charAt(0) == key) {
                    result = numbersToWords[key];
                }
                // for second-digit number loop through numbers to Words and get the English word equivalent
            }
        }
        // for three digit, four digit, million, billion numbers, find the number to place
        // by looping through the numbers to place and numbers to words and finding right number values
        // and concatenate the words and return the result
    }
};

