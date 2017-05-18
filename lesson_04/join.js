function join(array, delimiter) {
  var newString = '';
  
  for (var i = 0; i < array.length; i++) {
    newString += String(array[i]);

    if (i !== array.length - 1) {
      newString += delimiter;
    }
  }

  return newString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'