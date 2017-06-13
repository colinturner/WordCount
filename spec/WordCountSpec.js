'use strict';

describe("WordCount", function() {
  var words;

  beforeEach(function() {
    words = new WordCount();
  });

  describe("#split", function(){
    it("separates a string into an array of words", function(){
      var myText = "This is a string";
      expect(words.split(myText)).toEqual(["This", "is", "a", "string"])
    });

    it("joins separates txt lines together", function(){
      var myText = "Hello\nthere";
      expect(words.joinLines(myText)).toEqual("Hellothere")
    });

  });

})
