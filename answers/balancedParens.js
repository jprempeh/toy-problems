var balancedParens = function(input){
	var stack = [];
	var pairs = {
		'{' : '}',
		'(' : ')',
		'[' : ']'
	};
	for(var i = 0; i < input.length; i++) {
		var chr = input[i];

		if (pairs[chr]){
			stack.push(chr); // if { then push
		} else if (chr === ']' || '}' || ')') {
			if(pairs[stack.pop()] !== chr) { // if pairs [{] does not equal }
				return false;
			}
		}
	}
	//return false if any unclosed brackets remain
	return stack.length === 0
};

console.log(balancedParens('(){}[]'))

// other solution

function parenthesesAreBalanced(string) {
	var parentheses = "[]{}()",
		stack = [],
		i, character, bracePosition;

	for(i = 0; character = string[i]; i++) {
		bracePosition = parentheses.indexOf(character);

		if(bracePosition === -1) {
			continue;
		}

		if(bracePosition % 2 === 0) {
			stack.push(bracePosition + 1); // push next expected brace position
		} else {
			if(stack.length === 0 || stack.pop() !== bracePosition) {
				return false;
			}
		}
	}

	return stack.length === 0;
}