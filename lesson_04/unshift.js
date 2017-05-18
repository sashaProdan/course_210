function unshift(array, value) {
  for (var i = array.length; i > 0; i--) { // 3
    array[i] = array[i - 1];
  }

  array[0] = value;
  return array.length;
}

var count = [1, 2, 3];
unshift(count, 0);        // 4
count;                    // [ 0, 1, 2, 3 ]