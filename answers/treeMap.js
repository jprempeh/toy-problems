/*
* treeMap
*   first start by creating a tree
*   using recursion make a base case first
*
*
* */

var treeMap = function(callback){
    var newTree = newTree(callback(this.value));
    for (var i = 0; i < this.children.length; i++) {
        newTree.addChild(this.children[i].map(callback)); //final step do newTree add child
    }

    // instead of for loop could also write
    newTree.children = this.children.map(function(child) {
        return child.map(callback);
    });

    return newTree;
};

var mapInPlace = function(callback){
    this.value = callback(this.value);

    this.children.forEach(function(child) {
        child.mapInPlace(callback);
    });
};