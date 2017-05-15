function indexOf(firstString, secondString) {
  var subString = '';
  for (var i = 0; i <= firstString.length; i++) {
    subString += firstString[i];
  }
  console.log(subString);
}
    indexOf('Some strings', 's');      // 5
    indexOf('Blue Whale', 'Whale');    // 5
    // indexOf('Blue Whale', 'Blute');    // -1
    // indexOf('Blue Whale', 'leB');      // -1
