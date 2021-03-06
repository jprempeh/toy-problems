/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  var result = {},
			list = [],
	    i;

  for(i = 0; i < string.length; i++) {
    if(result[string[i]]) {
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }

	for(var key in result) {
		var arr = [];
		arr.push(key);
		arr.push(result[key]);
		list.push(arr);
	}

	list.sort(function (a,b) {
		if(a[1] > b[1]) return -1;
		else if (a[1] < b[1]) return 1;
		else if (a[0] < b[0]) return -1;
		else if (a[0] > b[0]) return 1;
		else return 0;
	});

	return list;
};

console.log(characterFrequency('mississippi'));
console.log(characterFrequency('miaaiaaippi'));

