let arr = new Array();
arr[0] ="aji"
arr[1] ="haan"
arr[2] ="suno be"
arr[3] ="bhaaad me jao"
// console.log(arr);
let arr2 = ["Narendra","anu","HappySingh","malhari","Amaan kumar","rishnaSoni"];
let comArr = arr.concat(arr2);
// console.log(comArr);
let comArr2 = arr2.concat(comArr);
// console.log(comArr2);
let allArr = comArr2.concat(arr,arr2);
// console.log(allArr);
// let sortArr =arr2.sort();

// console.log(arr2);
let arr4 = [3,4,5,6,25,128,323,2]
// arr4.forEach(item =>{
//  return arr4.sort((a,b) =>{
//     return b-a;
//  }) ;
// })
let arrmap = arr4.map(num => num+2)
console.log(arr4);
console.log(arrmap);
console.clear();

for (var  j = 1; j < 8; j++) {
for(var i = 1; i <= 10; i++) 
{
    var  table = j*i;
    // console.log(` ${j} * ${i} = ${table}`);
    console.log(` ${j} * ${i} = ${table}`);
}
}
console.clear();
let  numbers = 1;
let isPrime = true;
if(numbers === 1){
    console.log("this is not a prime or not composite number ");

}
else if (numbers > 1){
    for(let i = 2 ; i < numbers; i++){
 if (numbers % 1==0){
    isPrime = false;
    break;

 }
    }
    if (isPrime = true ){
        console.log(`${numbers}"this is prime"`);
    }
    else{

        console.log(`${numbers}"this is prime"`);
    }
}