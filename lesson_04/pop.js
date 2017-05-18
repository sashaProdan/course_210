function pop(arr) {
  var newLength = arr.length - 1;
  var value = arr[newLength];
  arr.length = newLength;
  
  return value;

}

var count = [1, 2, 3];
console.log(pop(count));           // 3
console.log(count);                // [ 1, 2 ]