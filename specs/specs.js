describe("wordArray", function (){
  it("will make a word into an array", function(){
    var testArray = new wordArray("hello");
    expect(testArray).to.eql(["h", "e", "l", "l", "o"]);
  });
});

describe("hangmanWord", function(){
  it("will create object with these specifications", function(){
    var testWord = new hangmanWord ("hello", 5, ["h", "e", "l", "l", "o"]);
    expect(testWord.word).to.equal("hello");
    expect(testWord.length).to.equal(5);
    expect(testWord.letters).to.eql(["h", "e", "l", "l", "o"]);
  });
});


  // it("will select letter chosen by user", function (){
  //   var testWord = new hangmanWord ("hello", ["h", "e", "l", "l", "o"]);
  //   expect(testword.userLetter).to.equal("e");
