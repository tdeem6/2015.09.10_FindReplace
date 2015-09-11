describe("replaceWord", function() {
  it("returns word entered in the input field", function() {
    expect(replaceWord("something", "replace")).to.equal("replace");
  });

  it("shows returned word if it finds a match in the given sentence", function() {
    expect(replaceWord("something", "replace", "Something")).to.equal("found");
  });

  it("will not show replacement word if not found in sentence", function() {
    expect(replaceWord("something", "replace", "Something")).to.equal("doggy");
  });

  it("replaces the word input by user if found in sentence with the replacement word", function() {
    expect(replaceWord("This test is so hard", "hard", "easy")).to.equal("This test is so easy");
  });

  it("tell user there is no matching word to replace", function() {
    expect(replaceWord("This test is so hard", "Ralph", "Nader")).to.equal("Obama");
  });

});
