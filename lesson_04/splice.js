function splice(array, begin, number) {
  var removedValues = [];
  
  for (var i = begin; i < array.length; i++) {
    if (i < begin + number) {
      push(removedValues, array[i]);
    }

    array[i] = array[i + number];
  }

  array.length = array.length - number;
  return removedValues;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));        // [ 3, 4, 5, 6, 7 ]
count;                                  // [ 1, 2, 8]