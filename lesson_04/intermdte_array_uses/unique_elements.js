function uniqueElements(arr) {
  var unique = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] - arr[i + 1] === 0) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4])); // Returns [1, 2, 4, 3, 5]