function duplicateArray(array){
    let getarray = [];
    for (let i of array){
        if(getarray.indexOf(i) === -1){
            // console.log(array);
            getarray.push(i);
        }
    }
    console.log(getarray);
}
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8,8,7,3,2,3,4,5,5]


duplicateArray(arr1);


// program to remove duplicate value from an array

function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);

// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string =" prompt('Enter a string:aji haaan ')";

const result = countVowel(string);

console.log(result);