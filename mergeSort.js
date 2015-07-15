var mergeSort = function(array) {
	if (array.length <= 1) { return array; }

	var half = Math.floor(array.length / 2);
	left = array.slice(0, half);
	right = array.slice(half);

	var merge = function(left, right) {
		var i = 0, j = 0, result = [];
		while (i < left.length && j < right.length) {
			if (left[i] < right[j]) {
				result.push(left[i++]);
			} else {
				result.push(right[j++]);
			}
		}
		var remaining = i === left.length ? right.slice(j) : left.slice(i);
		return result.concat(remaining);
	};
	return merge(mergeSort(left), mergeSort(right));
};