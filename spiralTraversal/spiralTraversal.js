/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
  var results = [];
  // use a while loop and keep track of min max row/column indices
  var startRowIndex = 0;
  var endRowIndex = matrix.length - 1;
  var startColIndex = 0;
  var endCOlIndex = matrix[0].length - 1;

  while(startRowIndex <= endRowIndex && startColIndex <= endCOlIndex) {
    for (var i = startColIndex; i <= endCOlIndex; i++) {
      results.push(matrix[startRowIndex[i]]);
    }
    startRowIndex++;

    for (var j = startRowIndex; j <= endRowIndex; j++) {
      results.push(matrix[j][endCOlIndex]);
    }
    endCOlIndex--;

    if (startRowIndex <= endRowIndex) {
      for (var k = endCOlIndex; k >= startColIndex; k--) {
        results.push(matrix[endRowIndex][k]);
      }
      endRowIndex--;
    }

    if (startColIndex <= endCOlIndex) {
    for (var m = endRowIndex; m >= startRowIndex; m--) {
      results.push(matrix[m][startColIndex]);
    }
    startColIndex++;
    }
  }


  return results;

};


var myMatrix = [
  [1, 2, 3,14],
  [4, 5, 6, 14],
  [7, 8, 9, 14],
  [10, 11, 12, 13]
];
console.log(spiralTraversal(myMatrix));