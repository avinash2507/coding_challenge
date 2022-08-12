function uniqueValue(str) {
  let word = {};
  for (let letter of str) {
    if (word[letter]) {
      return true;
    }
    console.log(word);
    
    word[letter] = "exists";
    console.log(word);


    //     if (word.indexOf(letter) !== -1) {
    //         return ("this is not an Unique word ");
    //     }

    //     word.push(letter);
     }
     return "This is An Unique word";
  }

console.log(uniqueValue("greate"));
console.log(uniqueValue("love"));
