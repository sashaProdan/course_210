function greetings(name, object) {
  var nameStatus = 'Hello, ' + name.join(' ') + '!';
  var titleStatus = 'Nice to have a ' + object.title + ' ' + object.occupation + ' around.';

  return nameStatus + ' ' + titleStatus;
}

console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.