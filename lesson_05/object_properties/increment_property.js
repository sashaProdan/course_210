function incrementProperty(object, propertyName) {
  var properties = Object.keys(object);

  if (properties.indexOf(propertyName) !== -1) {
    return object[propertyName] += 1;
  } else {
    return object[propertyName] = 1;
  }
} 

var wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }