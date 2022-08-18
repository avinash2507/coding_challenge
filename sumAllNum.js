function sumAll (arr) {
  let min, max;
  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    max = arr[1];
    min = arr[0];
  }
  let sum = 0;
  for (let i = min ; i <= max; i++) {
    sum += i;
}
    return sum;
}

console.log(sumAll([6,9]));


function sumAdd(arr1){
    const min = arr1[0] < arr1[1] ? arr1[0] : arr1[1];
    const max = arr1[0] > arr1[1] ? arr1[0] : arr1[1];
    let sum = 0;
    console.log(min,max)
    for (let i = min ;i <= max ; i++) {
      sum += i;
  }
      return sum;
}
console.log(sumAdd([1,4]));
