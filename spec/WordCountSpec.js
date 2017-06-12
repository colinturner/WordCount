'use strict';

describe("WordCount", function() {
  var wordcount;

  beforeEach(function() {
    wordcount = new WordCount();
  });

  describe("#split", function(){
    it("separates a string into an array of words", function(){
      var myText = "This is a string";
      expect(wordcount.split(myText)).toEqual(["This", "is", "a", "string"])
    });
  });

})
