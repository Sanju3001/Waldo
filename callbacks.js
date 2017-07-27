var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

function map (words, someFunction) {

  var newWord = [];

  words.forEach(function (currentValue, index, array) {

    newWord.push(currentValue.length);

  });

console.log(newWord);

}

