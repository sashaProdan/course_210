var arr = [1, 2, 3, 5];
var val = 4;

function firstInstance(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
      break
    }
  }

  return -1;
}

console.log(firstInstance(val, arr));