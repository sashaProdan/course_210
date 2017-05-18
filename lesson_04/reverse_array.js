var array = ['Red', 'Blue', 'Black', 23];

function reverseArray(arr) {
  var reversedArray = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

console.log(reverseArray(array));