describe("hangmanWord", function(){
  it("will create object with these specifications", function(){
    var testWord = new hangmanWord ("hello", 4);
    expect(testWord.word).to.equal("hello");
    expect(testWord.length).to.equal(4);
    expect(testWord.letters).to.eql([]);
  });
});
