var spiralTraversal = function(matrix){

  var results = [];
  var startRowIndex = 0;
  var endRowIndex = matrix.length-1;
  var startColIndex = 0;
  var endColIndex = matrix[0].length-1;

  while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {

    for (var i = startColIndex; i <= endColIndex; i++) {
      results.push(matrix[startRowIndex][i]);
    }
    startRowIndex++;

    for (var j = startRowIndex; j <= endRowIndex; j++) {
      results.push(matrix[j][endColIndex]);
    }
    endColIndex--;

    if (startRowIndex <= endRowIndex) {
      for (var k = endColIndex; k >= startColIndex; k--) {
        results.push(matrix[endRowIndex][k]);
      }
      endRowIndex--;
    }

    if (startColIndex <= endColIndex) {
      for (var m = endRowIndex; m >= startRowIndex; m--) {
        results.push(matrix[m][startColIndex]);
      }
      startColIndex++;
    }
  }

  return results;
};
