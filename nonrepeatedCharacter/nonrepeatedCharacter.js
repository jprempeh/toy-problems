/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
	var strArray = string.split('');
	var results = {};
	for (var i = 0; i < strArray.length; i++){
		if(results[strArray[i]] === undefined) {
			results[strArray[i]] = 0;
		} else {
			results[strArray[i]] += 1;
		}
	}
	var results2 = [];
	for (var prop in results) {
		if(results[prop] === 0) {
			results2.push(prop);
		}
	}
	return results2[0] || 'sorry';
};

console.log(firstNonRepeatedCharacter('XXXXXXXXXX'));
