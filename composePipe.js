var compose = function(){
	var fns = [].slice.call(arguments);

	return fns.reduceRight(function(memo,fn) {

		return function() {

			return memo(fn.apply(this, arguments));

		};

	});
};

var pipe = function(){
	var fns = [].slice.call(arguments);

	return fns.reduce(function(memo,fn) {

		return function() {

		return memo(fn.apply(this, arguments));
	};

});
};
