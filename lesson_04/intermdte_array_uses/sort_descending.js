function sortDescending(arr) {
  var sorted = arr.slice();
  
  sorted.sort(function(a, b) {
    return b - a;
  });

  return sorted;
}

var array = [23, 4, 16, 42, 8, 15]
var result = sortDescending(array); // Returns [42, 23, 16, 15, 8, 4]
console.log(result);   // Logs [42, 23, 16, 15, 8, 4]
console.log(array);    // Logs [23, 4, 16, 42, 8, 15])