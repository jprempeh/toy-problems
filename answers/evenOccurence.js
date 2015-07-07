var evenOccurrence = function(arr) {
    var counter = {}, i;

    for(i = 0; i < arr.length; i++) {
        //being even or odd is a boolean
        // toggle the boolean if you see it first time set it to true then going thru it
        // again set it equal to false

        counter[arr[i]] = !counter[arr[i]];

        //return the first even occurrence
    }
    for (i = 0; i < arr.length; i++) {
        if (!counter[arr[i]]) {
            return arr[i];
        }
    }
    return null;
};