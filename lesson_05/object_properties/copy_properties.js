function copyProperties(original, copy) {
  var propertyName;
  var count = 0;

  for (propertyName in original) {
    copy[propertyName] = original[propertyName];
    count++;
  }

  return count;
}


var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};

console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }