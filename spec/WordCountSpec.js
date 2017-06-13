'use strict';

describe("WordCount", function() {
  var words;

  beforeEach(function() {
    words = new WordCount("This is a string; great, this, stuff");
  });

  describe("#split", function() {
    it("separates a string into an array of lowercase words", function() {
      expect(words.split()).toEqual(["this", "is", "a", "string", "great", "this", "stuff"]);
    });
  });

  describe("#createDictionary", function() {
    it("creates dictionary with words and their counts", function() {
      words.split();
      words.createDictionary();
      expect(words.dict).toEqual({"this": 2, "is": 1, "a": 1, "string": 1, "great": 1, "stuff": 1});
    });
  });

})
