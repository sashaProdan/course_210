// iterate through each array element
// find the area of a every rectangle in array (length * width)
// sum all the areas

function totalArea(array) {
  var areas = array.map(function(element) {
    return element[0] * element[1];
  })

  return areas.reduce(function(sum, area) {
    return sum += area;
  })
}

function totalSquareArea(array) {
  var squareRectangles = array.filter(function(rectangle) {
    return rectangle[0] === rectangle[1];
  })

  return totalArea(squareRectangles);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles)); // 121
console.log(totalArea(rectangles));      // 141
