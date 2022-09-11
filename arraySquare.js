// function isSquareCheck(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] * arr1[i] === arr2[j]) {
//         isSquare = true;
//       }
//       if (j === arr2.length - 1) {
//         if (!isSquare) {
//           return (isSquare = false);
//         }
//       }
//     }
//   }
//   return true;
// }
// let result = isSquareCheck([1, 2, 3, 4, 5], [1, 4, 16,9, 25]);
// console.log(result);



function isSquareCheck(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        let isSquare= false;
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]* arr1[i]===arr2[j]){
                isSquare = true;
            }
            if (j === arr2.length - 1){
                 
            if(!isSquare){
                return (isSquare = false);
                        }            }
        }
    }
    return  true;
}
let result = isSquareCheck([1, 2, 3,  5], [1, 4, 16,9, 25,36]);
console.log(result);