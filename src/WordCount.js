function WordCount(string) {
  this.string = string;
}

WordCount.prototype.split = function(text) {
  return text.split(" ")
};
