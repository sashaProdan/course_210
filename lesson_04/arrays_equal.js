function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  var match = 0;

    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        match += 1;
      }
    }

  return match === arr1.length;
}

arraysEqual([1], [1]);                               // true
arraysEqual([1], [2]);                               // false
arraysEqual([1, 2], [1, 2, 3]);                      // false
arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false