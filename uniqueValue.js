function uniqueValue(str) {
  let word = [];
  for (let letter of str) {
    // word = [...word, letter];
    if (word.indexOf(letter) !== -1) {
        return ("this is not an Unique word ");
    }
    
    word.push(letter);
  }
  return "This is An Unique word" ;
}
console.log(uniqueValue("greatest"));
console.log(uniqueValue("love"));