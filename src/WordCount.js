(function(exports) {

  function WordCount(string) {
    this.string = string;
    this.dict = {};
    this.keys = [];
  }

  WordCount.prototype.split = function() {
    return this.string = this.string.toLowerCase().split(/\W+/)
  };

  WordCount.prototype.createDictionary = function() {
    for (var i = 0; i < this.string.length; i++) {
      var word = this.string[i];
      if (!/\d+/.test(word)) {
        if (!this.dict[word]) {
          this.dict[word] = 1;
          this.keys.push(word);
        } else {
          this.dict[word] += 1;
        }
      }
    }
  };

  WordCount.prototype.sortArray = function() {
    var myDict = this.dict;
    var myKeys = this.keys;
    var compare = function(a,b) {
      return myDict[b] - myDict[a];
    };
    myKeys.sort(compare);
  };

  WordCount.prototype.format = function() {
    this.split();
    this.createDictionary();
    console.log(this.keys);
  };

  exports.WordCount = WordCount;

})(this);
