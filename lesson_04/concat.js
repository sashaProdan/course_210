function concat(arr1, arr2) {
  var newArray = [];

  for (var i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }
  
  for (var i = 0; i < arr2.length; i++) {
    newArray.push(arr2[i]);
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]