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
			stack.push(chr);
		} else if (chr === ']' || '}' || ')') {
			if(pairs[stack.pop()] !== chr) {
				return false;
			}
		}
	}
	//return false if any unclosed brackets remain
	return stack.length === 0
};