function slice(arr, start, end) {
  var newArr = [];

  for (var i = start; i < end; i++) {
    newArr[newArr.length] = arr[i];
  }

  return newArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                         // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));     // [ 'b', 'c' ]