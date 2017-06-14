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

  WordCount.prototype.displayDivs = function () {
    console.log(this.keys);
    for (var i = 0; i < this.keys.length; i++) {
      var key = this.keys[i];
      var node = document.createElement("LI");
      var textnode = document.createTextNode(key);
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
    }
  };

  WordCount.prototype.format = function() {
    this.split();
    this.createDictionary();
    this.sortArray();
    this.displayDivs();
  };

  exports.WordCount = WordCount;

})(this);
