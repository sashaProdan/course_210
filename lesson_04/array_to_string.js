var array = [1, 'a', 4];

function arrayToString(arr) {
  var newString = '';

  for (var i = 0; i < arr.length; i++) {
    newString += String(arr[i]);
  }
  
  return newString;
}

console.log(arrayToString(array));