'use strict';

describe("WordCount", function() {
  var words;

  beforeEach(function() {
    words = new WordCount("This is a string");
  });

  describe("#split", function(){
    it("separates a string into an array of words", function(){
      expect(words.split()).toEqual(["This", "is", "a", "string"])
    });
  });

})
