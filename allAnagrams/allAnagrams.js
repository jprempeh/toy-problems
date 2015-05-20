/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
    var start = '';
    var string = string;
    var inRecurse = function(start, string) {
        var result = [];
        if (string.length === 1) {
            result.push(start + string);
            return result;
        } else {
            for (var i = 0; i < string.length; i++) {
                var recurse = inRecurse(string[i], string.substr(0, i) + string.substr(i + 1));
                for (var j = 0; j < recurse.length; j++) {
                    result.push(start + recurse[j]);
                }
            }
        }
        return result;
    };
    return inRecurse(start, string);
};