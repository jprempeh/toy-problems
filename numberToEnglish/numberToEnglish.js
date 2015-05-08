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

Number.prototype.toEnglish = function (number) {
  // return my value as english words
  return toEnglish(number);
};

Number.prototype.toEnglish = function (number) {
  // return my value as english words
  return number;
};

var toEnglish = function(number) {
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

