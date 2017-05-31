function oddElementsOf(arr) {
  var oddElements = [];

  for (var i = 1; i < arr.length; i += 2) {
    oddElements.push(arr[i]);
  }

  return oddElements;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits)); // Returns [8, 16, 42]