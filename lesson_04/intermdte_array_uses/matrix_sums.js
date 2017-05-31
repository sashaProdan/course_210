function matrixSums(arr) {
  var sums = [];

  for (var i = 0; i < arr.length; i++) {
    var currentSum = 0;

    for (var j = 0; j < arr[i].length; j++) {
      currentSum += arr[i][j];
    }
    sums.push(currentSum);
  }

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]])); // Returns [15, 60, 12]