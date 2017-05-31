function missing(arr) {
  var result = [];
  var lowest = arr[0];
  var highest = arr[arr.length - 1];

  for (var i = lowest; i < highest; i++) {
    if (arr.indexOf(i) === -1) {
      result.push(i);
    }
  }
  
  return result;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []