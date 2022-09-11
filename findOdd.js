// // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

// function findOdd(array) {
//     let result = [];
//     function helper(inputarray){
//         if(inputarray.length===0){
//             return;
//         }
//         if (inputarray[0] % 2!==0){
//             // console.log("odd is ");
//             result.push(inputarray[0])
//         }
//         helper(inputarray.slice(1));
//     }
//     helper(array);
//     return result;



// }


// let res = findOdd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
// console.log(res);

function findOdd(array) {
    let result = [];
    function helper (inputarray) {
        if (inputarray.length === 0 ){
            return;
            
        }
        if (inputarray[0] % 2 !== 0 ){
            result.push(inputarray[0]);
        }
        helper(inputarray.slice(1));
        
        
    }
    helper(array);
    return result;
}
let res = findOdd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19]);
console.log(res);