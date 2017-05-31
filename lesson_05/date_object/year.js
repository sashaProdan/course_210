var today = new Date();

// 03:04,  15:30
function formatTime(date) {
  var hoursStr = String(date.getHours());
  var minutesStr = String(date.getMinutes());

  var hours = hoursStr.length === 2 ? hoursStr : '0' + hoursStr;
  var minutes = minutesStr.length === 2 ? minutesStr : '0' + minutesStr;
  
  
  return hours + ':' + minutes;
}

console.log(today.getFullYear());
console.log(today.getYear());
console.log(today.getTime());

var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

console.log(tomorrow);

var nextWeek = new Date(today.getTime());
nextWeek.setDate(today.getDay() + 7);

console.log(formatTime(today));