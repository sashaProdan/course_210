// get each message
// iterate through each message and divide it into 5 parts
// The five parts are:

//   - Sender
//   - Subject
//   - Date
//   - Recipient
//   - Body

// select date parts
// compare date parts
// output email count
// output date range


function getDateObjects(dates) {
  var dates = dates.map(function(date) {
    return date.split(' ')[1].split('-');  
  })

  return dates.map(function(date) {
    var month = parseInt(date[0] - 1);
    var day = parseInt(date[1]);
    var year = parseInt(date[2]);
    return new Date(year, month, day);
  })
}

function compareDates(dates) {
  return dates.sort(function(date1, date2) {
    return date1.getTime() - date2.getTime();
  })
}

function mailCount(emailData) {
  var messages = emailData.split('##||##')

  var dates = messages.map(function(message) {
    return message.split('#/#')[2];
  })

  var dateRange = compareDates(getDateObjects(dates));

  console.log('Count of Email: ' + messages.length);
  console.log('Date Range: ' + dateRange[0].toDateString() + ' - ' + dateRange[dateRange.length - 1].toDateString());
}

mailCount(emailData);
