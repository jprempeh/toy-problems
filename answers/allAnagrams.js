var allAnagrams = function(string) {
    var anagrams = {};

    var generator = function(text, options) {
        // text is an empty string options is the whole strings
        // base case, never going to get
        if (text.length === string.length) {
            anagrams[text] = true;
        }
        for (var i = 0; i < options.length; i++) {
            generator(text + options[i], // this returns a new string because strings are immuatable
                options.slice(0, i) + options.slice(i + 1)); // text and options does not get mutated, these operations return a new string
        }
    };

    generator('', string);
    return Object.keys(anagrams);
};

/*
*
* An object is a great thing to use for unique permutations
* you can see if something has a key or keep track of a frequency
* you can use an object to store all the results to eliminate all
* binary means 2 decisions its either true or false
* */