(function(exports) {

  function WordCount(string) {
    this.string = string;
    this.dict = {};
  }

  WordCount.prototype.split = function() {
    return this.string = this.string.toLowerCase().split(/\W+/)
  };

  WordCount.prototype.createDictionary = function() {
    for (var i = 0; i < this.string.length; i++) {
      var word = this.string[i];
      if (!this.dict[word]) {
        this.dict[word] = 1;
      } else {
        this.dict[word] += 1;
      }
    }
  };

  WordCount.prototype.format = function() {
    this.split();
    this.createDictionary();
    console.log(this.dict);
  };

  exports.WordCount = WordCount;

})(this);
