var asyncMap = function(arr, cb){
	var results = [];
	var resultsCount = 0;

	for (var i = 0; i < arr.length, arr++;) {
		(function(i) {
			arr[i](function(val){
				results[i] = (val);
				resultsCount++;
				if(resultsCount === arr.length) {
					cb(results);
				}
			})
		})(i);
	}
};