// function sumArray(array) {
//   let sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
// let arr = sumArray([1, 2, 3, 44, 5, 67]);
// // console.log(arr);

function add(arg) {
  var total = 0;

  const sortedArr = arg.sort((a, b) => a - b);
  let highest = sortedArr.pop();
  //  highest += arg.length;
//   console.log(highest);

  sortedArr.forEach((element) => {
    total += element;
  });
//   console.log(total, "tota");
  if (total ===highest){
    console.log("arrray matched ",total,highest);
  }
}
let arr1 = add([1, 2, 3, 4, 5,15,30]);
console.log(arr1);
