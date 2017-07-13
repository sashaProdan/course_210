function octalToDecimal(numberString) {
  var decimalParts = numberString.split('').map(function(digitChar, index) {
    return Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  });

  return decimalParts.reduce(function(sum, number) {
    return sum + number;
  });
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9