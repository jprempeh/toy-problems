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
  var result = [];
  var matrixLength = matrix.length;
  var arrayLength = matrix[0].length;
  for (var i = 0; i < arrayLength; i++) {
    result.push(matrix[0][i]);
  }
  for (var j = 1; j < matrix.length; j++) {
    result.push(matrix[j][arrayLength - 1]);
  }
  for (var k = arrayLength - 2; k >= 0; k--) {
    result.push(matrix[matrixLength - 1][k]);
  }
  for (var l = 0; l <= arrayLength - 2; l++) {
    var midArray = Math.floor(matrixLength / 2);
    result.push(matrix[midArray][l]);
  }

  return result;
};


var myMatrix = [
  [1, 2, 3,14],
  [4, 5, 6, 14],
  [7, 8, 9, 14],
  [10, 11, 12, 13]
];
console.log(spiralTraversal(myMatrix));