(function(exports) {

  function WordCount(string) {
    this.originalString = string;
    this.myString = string;
    this.dictCount = {};
    this.keys = [];
    this.dictSentence = {};
  }

  WordCount.prototype.split = function() {
    return this.myString = this.myString.toLowerCase().split(/[^\w\u00C0-\u00ff]+/g)
  };

  WordCount.prototype.getData = function() {
    console.log(this.myString);
    for (var i = 0; i < this.myString.length; i++) {
      var word = this.myString[i];
      if (!/\d+/.test(word)) {
        if (!this.dictCount[word]) {
          this.dictCount[word] = 1;
          this.keys.push(word);
        } else {
          this.dictCount[word] += 1;
        }
      }
    }
  };

  WordCount.prototype.sortArray = function() {
    var myDict = this.dictCount;
    var myKeys = this.keys;
    var compare = function(a,b) {
      return myDict[b] - myDict[a];
    };
    myKeys.sort(compare);
  };

  WordCount.prototype.displayDivs = function () {
    for (var i = 0; i < this.keys.length; i++) {
      var key = this.keys[i];
      var node = document.createElement("DIV");
      var textnode = document.createTextNode((i + 1) + '. "' + key + '"' + " appears " + this.dictCount[key] + " times. Sentence: " + this.getExampleSentence(key));
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
    }
  };

  WordCount.prototype.getExampleSentence = function(word) {
    let re = new RegExp("[^.?!]*(?:[.?,\s!])(" + word + ")(?=[\s.?!,])[^.?!]*[.?!]");
    return this.originalString.match(re);
  }

  WordCount.prototype.format = function() {
    this.split();
    this.getData();
    this.sortArray();
    this.displayDivs();
  };

  exports.WordCount = WordCount;

})(this);
