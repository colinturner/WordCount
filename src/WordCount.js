(function(exports) {

  function WordCount(string) {
    this.string = string;
  }

  WordCount.prototype.split = function() {
    return this.string.split(/\W+/);
  };

  WordCount.prototype.format = function() {
    return this.split();
  };

  exports.WordCount = WordCount;

})(this);
