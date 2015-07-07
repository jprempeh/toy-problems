/*
* Telephone Words
*
* Start drawing a tree
* Recursion
*
*
*
* */

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
    var words = [];

    var lettersForDigits = function(word, digits) {


        // what's the base case? when you've ran out of digits
        if (digits.length === 0) {
            words.push(words);
            return;
        }



        // what's the function do?
        var currentDigit = digits[0];
        var remainDigits = digits.slice(1);
        var letters = phoneDigitsToLetters[currentDigit].split('');
        for(var i = 0; i < letters.length; i++) {
            lettersForDigits(word + letters[i], remainDigits);
        }
    };



    lettersForDigits('', digitString.split(''));
    return words;
};