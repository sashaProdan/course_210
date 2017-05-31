// 1st
// 2nd
// 3rd
// 4-20 th

function dateSuffix(dayOfMonth) {
  var day = dayOfMonth.toString();
  var suffix = 'th';
  var digit = '';

  if (day.length === 1) {
    digit = day[0];
  } else if (day[0] !== '1'){
    digit = day[1];
  }

  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }
  
  return day + suffix;
}

console.log(dateSuffix(1));
console.log(dateSuffix(2));
console.log(dateSuffix(3));
console.log(dateSuffix(5));
console.log(dateSuffix(10));
console.log(dateSuffix(12));
console.log(dateSuffix(19));
console.log(dateSuffix(20));
console.log(dateSuffix(21));
console.log(dateSuffix(22));
console.log(dateSuffix(23));
console.log(dateSuffix(27));
