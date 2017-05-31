var today = new Date();

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

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  return "Today's day is " + day + ', ' + month + ' ' + dateSuffix(date.getDate());
}

console.log(formattedDate(today));