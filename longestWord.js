// let longestWord = (str) => {
//   let words = str.split(" ");
//   let longestWord = "";
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };
function longestWord(str){
    let words = str.split(" ");
    let longestWord ="";
 for(let word of words){
    if(word.length > longestWord.length) { 
        longestWord = word;       
 }
}
return longestWord;
};
console.log(longestWord("i am avinash vishwakarma. i lived in Bangalore."));
console.log(longestWord("i am Narendra Maurya . i lived in Bangalore."));
