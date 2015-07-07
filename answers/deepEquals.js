/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures.
 *
 */
var deepEquals = function(apple, orange){
// var a = JSON.stringify(apple);
// var b = JSON.stringify(orange);
// return a===b;
// The solution doesn't work for objects with different order
	if (apple === orange){
		return true;
	}
	if (!orange || !apple) {
		return false;
	}
	if (!(apple instanceof Object) || !(orange instanceof Object))
	{return false;}
	// take all the keys and make it into array
	// use .constructor === Object
	var appleKeys = Object.keys(apple);
	var orangeKeys = Object.keys(orange);

	if (appleKeys.length !== orangeKeys.length){
		return false;
	}
	if (appleKeys.length === 0){
		return true;
	}

	for (var key in apple){
		if (!deepEquals(apple[key],orange[key])){
			return false;
		}
	}

	return true;
};