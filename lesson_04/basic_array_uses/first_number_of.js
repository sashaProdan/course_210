function firstNOf(arr, count) {
  var newArray = [];

  for (var i = 0; i < count; i++) {
    newArray[i] = arr[i];
  }

  return newArray;
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3)); // Returns [4, 8, 15]