(function(exports) {

  function WordCount(string) {
    this.string = string;
    this.dict = {};
  }

  WordCount.prototype.split = function() {
    return this.string = this.string.split(/\W+/)
  };

  WordCount.prototype.createDictionary = function() {
    for (var i = 0; i < this.string.length; i++) {
      var word = this.string[i];
      if (this.dict[word] == undefined) {
        this.dict[word] = 1;
      } else {
        this.dict[word] += 1;
      }
    }
  };

  WordCount.prototype.format = function() {
    this.split();
    return this.createDictionary();
  };

  exports.WordCount = WordCount;

})(this);
