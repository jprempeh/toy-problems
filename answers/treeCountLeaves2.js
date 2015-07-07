var Tree = function(value){
    this.value = value;
    this.children = [];
};

Tree.prototype.addChild = function(child){
    if (!child || !(child instanceof Tree)){
        child = new Tree(child);
    }

    if(!this.isDescendant(child)){
        this.children.push(child);
    }else {
        throw new Error("That child is already a child of this tree");
    }
    // return the new child node for convenience
    return child;
};

Tree.prototype.isDescendant = function(child){
    if(this.children.indexOf(child) !== -1){
        // `child` is an immediate child of this tree
        return true;
    }else{
        for(var i = 0; i < this.children.length; i++){
            if(this.children[i].isDescendant(child)){
                // `child` is descendant of this tree
                return true;
            }
        }
        return false;
    }
};

Tree.prototype.countLeaves = function () {
    // This is our base case. Why do we need it? What does it do for us?
    if(this.children.length === 0) {
        return 1;
    }

    // sum of countLeaves of all the children
    var numleaves = sum(
        this.children.map(function (child) {
            return child.countLeaves();
        })
    );

    // numLeaves is the result of invoking sum with the result of mapping over the children of the current node and calling countLeaves on each child. What might you do to make this code more readable?

    return numleaves;
};

// In class, we rewrote our countLeaves to use reduce instead of this sum function. Can you replicate what we did in class on your own?
var sum = function (array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
};

// Random test cases. This is ugly & don't do it. :P
var test = function() {
    var t = new Tree();
    t.addChild(1)
    t.addChild(2)
    t.addChild(3)
    console.log(t.countLeaves(), 3)

    t = new Tree();
    t.addChild(1)
    t.children[0].addChild(2)
    t.addChild(3)
    console.log(t.countLeaves(), 2)

    var root = new Tree();
    console.log(root.countLeaves(), 1); // 1
    root.addChild(new Tree());
    console.log(root.countLeaves(), 1); // still 1
    root.addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].children[0].addChild(new Tree());
    console.log(root.countLeaves(), 3); // 3
}

test();