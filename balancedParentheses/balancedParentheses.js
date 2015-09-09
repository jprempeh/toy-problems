function parenthesesAreBalanced(string) {
	var stack = [],
		pairs = {'{': '}',
						'(': ')',
						'[': ']'},
		i;
		for(i = 0; i < string.length; i++) {
			var character = string[i];
			if (pairs[character]) {
				stack.push(character);
			} else if (character === '}' || ')' || ']') {
				if(pairs[stack.pop()] !== character) {
					return false;
				}
			}
		}
	return stack.length === 0;
}

console.log(parenthesesAreBalanced('(){}'));
