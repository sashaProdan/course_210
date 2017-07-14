function capitalizeName(str) {
  return str.split(' ').map(function(word) {
      var firstLetter = word[0].toUpperCase();
      var partOfWord = word.slice(1, word.length);

      return firstLetter + partOfWord;
   }).join(' ');
}

function removeDots(str) {
  return str.split('.').join('');
}

function processBands(data) {
  return data.map(function(band) {
    return {
      name: capitalizeName(removeDots(band.name)),
      country: 'Canada',
      active: band.active
    }
  });
}

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));