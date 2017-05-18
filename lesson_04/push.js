function push(arr, value) {
  var index = arr.length;

  arr[index] = value;
  
  return arr.length;
}

var count = [1, 2, 3];
console.log(push(count, 4));   // 4
count;            // [ 1, 2, 3, 4 ]