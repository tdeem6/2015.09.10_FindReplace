describe("replaceWord", function() {
  it("replaces userMatch with userReplacement if found in userString", function() {
    expect(replaceWord("Hello world", "world", "John")).to.equal("Hello John");
  });

  it("returns 'word has no match' if userMatch is not found in userString", function() {
    expect(replaceWord("Hello World", "pizza", "pie")).to.equal('word has no match');
  });

  it("replaces all matches of userMatch if found in userString", function() {
    expect(replaceWord("Hello world, the world is crazy", "world", "universe")).to.equal("Hello universe, the universe is crazy");
  });

  it("replaces all matches of userMatch in userString while being case insensitive", function() {
    expect(replaceWord("This WorLd can be a better wORld", "world", "universe")).to.equal("This universe can be a better universe");
  });
});
