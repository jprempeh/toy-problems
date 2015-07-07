Tree.prototype.countLeaves = function() {
    // recurse
    // Steps for creating a recursive algorithm:

    /*
    * Must have a base case
    * Define a solution in terms of a smaller version of itself
    * */
    if(this.children.length === 0) {
        return 1;
    }
    var numleaves = sum(
        this.children.map(function(child){
            return child.countLeaves();
        });
    );
    return numleaves;
};

var sum = function(array) {
    var total = 0;
    for(var i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
};