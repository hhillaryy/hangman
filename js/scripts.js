var wordArray = function(word) {
  var emptyArray = [];
  for(var index = 0; index < word.length; index ++) {
    emptyArray.push(word.slice(index, index + 1));
  }
return emptyArray;
}

function hangmanWord (word, length, letters) {
  this.word = word;
  this.length = word.length;
  this.letters = wordArray(word);
}

//
// hangmanWord.prototype.userLetter = function() {
//
//   for(var index = 0; index <= word.length; index += 1) {
//     if(index === this.userLetter) {
//       return "e";
//     } else {
//       return "x";
//     };
//   }
// }
