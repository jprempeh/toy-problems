
	Array.prototype.isSubsetOf = function(superset) {
		var results = {};
		for(var i = 0; i < this.length; i++) {
			// loop through input
			// if the input element is the same as any of the superset
			// mark in an object that is true
			for (var j = 0; j < superset.length; j++) {
				if (this[i] === superset[j]) {
					results[i] = true;
					break;
				} else {
					results[i] = false;
				}
			}
		}
		var container = [];
		for (var val in results) {
			if (results[val] === false) {
				return false;
			} else {
				container.push(true);
			}
		}
		var marker = false;
		for (var k = 0; k < container.length; k++) {
			if (container[k] === true) {
				marker = true;
			} else {
				marker = false;
			}
		}
		return marker;
	};



var result = ['cat', 'dog', 'cow'];
var supersuper = ['dog', 'cow', 'fox'];

console.log(result.isSubsetOf(supersuper));