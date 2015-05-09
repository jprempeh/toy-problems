/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits
  var results = []; // array to store results

  var recurseFn = function(myString) {

    if
  }

  /*
  * Step 1: Take the first number in the argument and start with the first letter it corresponds to || if 0 or 1 use that number
  * Step 2: For each subsequent number
  *           If the number is 0 or 1, place that number in the result string
*             If the number is not 0 or 1, pick the first letter it could possibly be and use that for the permutation
*   Step 3: After creating all possible permutations for the last digit in the string, move up a digit and go to the next corresponding letter
            *   Repeat Step 2
  * Step 4: once you've done all possible permutations for the last 3 digits move to the next letter for the first digit
  * Step 5: Once you've done all permutations for all the numbers, return the array
  *
  *
  * */


};


