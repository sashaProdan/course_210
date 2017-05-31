function repeatedCharacters(string) {
  var lowerCaseStr = string.toLowerCase();
  var repeatedChars = {};
  var currentChar;
  
  for (var i = 0; i < string.length; i++) {
    currentChar = lowerCaseStr[i];

    if (repeatedChars[currentChar]) {
      repeatedChars[currentChar] += 1;
    } else {
      repeatedChars[currentChar] = 1;
    }
  }

  for (var key in repeatedChars) {
    if (repeatedChars[key] < 2) {
      delete repeatedChars[key];
    }
  }

  return repeatedChars;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }