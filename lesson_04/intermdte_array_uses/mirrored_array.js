function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(mirroredArray(digits)); 
