function shift(array) {
  var first = array[0];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return first;
}

var count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]