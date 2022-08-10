function firstLetterCaps(str){
    let words = str.split(' ').map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    })    
    return words.join(' ');
}



console.log(firstLetterCaps("i am avinash vishwakarma. i lived in Bangalore."));
// console.log(longestWord("i am Narendra Maurya . i lived in Bangalore."));
