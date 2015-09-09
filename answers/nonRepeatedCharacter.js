var nonRepeatedCharacter = function(string) {
	// loop through string
	var counts = {};
	var results = [];
	for (var i = 0; i < string.length; i++) {
		if (!counts[string[i]]) {
			counts[string[i]] = 1;
			results.push(string[i]);
		} else if (counts[string[i]]) {
			counts[string[i]] += 1;
		}
	}
	var results2 = [];
	for (var prop in counts) {
		if(counts[prop] === 1) {
			results2.push(prop);
				}
			}

	if (results2.length === 0) {return 'sorry';} else { return results2[0]; }
};

console.log(nonRepeatedCharacter('ABCDBIRDUP'));
console.log(nonRepeatedCharacter('XXXXXXXXXXZ1'));