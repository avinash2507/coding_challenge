// function string(strings){
//     strings.split(" ");
//     console.log(strings[0].toUpperCase());
// }
// console.log(string("ajkdhskjdh jsdjdk adsljei"));

// function avin(str){
//    let str2=  str.split("").reverse().join("");
//     return str.toLowerCase() === str2.toLowerCase()

// }
// console.log(avin("sanjana "));

function count(str) {
  let count = {};
  str.split("").forEach((char) => {
    count[char] = count[char] ? count[char] + 1 : 1;
  });
  let num = count;
//   return num;
  let maxx = 1;
  let chars = str[0]
     for(k in count){
     if (count[k] > maxx){
        maxx = count[k];
        chars = k
     }
     
    }
    return chars;

}

console.log(count("asaasjhgffffffffffffffgfdfgdytruid"));
