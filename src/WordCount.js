function WordCount(string) {
  console.log(string);
}

WordCount.prototype.split = function(text) {
  return text.split(" ")
};
