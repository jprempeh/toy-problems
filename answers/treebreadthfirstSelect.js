Tree.prototype.BFSelect = function(filter) {
	var queue = new Queue();

	var results = [];

	queue.enqueue({tree: this, depth: 0});

	while (current = queue.dequeue()) {
		if (filter(current.tree.value, current.depth)) {
			results.push(current.tree.value);
		}

	current.tree.children.forEach(function (child) {
		queue.enqueue({tree: child, depth: depth + 1});
	})
	}
	return results;
};