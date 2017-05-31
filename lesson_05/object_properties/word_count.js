function wordCount(text) {
  var count = {};
  var words = text.split(' ');
  var word;

  for (var i = 0; i < words.length; i++) {
    word = words[i];
    if (!count[word]) {
      count[word] = 0;
    }

    count[word] += 1;
  }

  return count;
}



console.log(wordCount('box car cat bag box'));   

// { box: 2, car: 1, cat: 1, bag: 1 }