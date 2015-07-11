function longestRun (string) {
// are we in a run
// if yes:
	var max = [0,0];
	var current = [0,0];
	for (var i = 1; i < string.length; i++) {
		if(string[i-1] === string[i]) {
			current[1] = i;
			if (current[1] - current[0] > max[1] - max[0]) {
				max = current;
			}
			// is this the longest run
			// if yes, mark this as the mark
		} else {
			current = [i, i]
		}
// if no reset the run
	}
	return max;
}
