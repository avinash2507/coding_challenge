function sumPairZero(arr){
    let left = 0 ;
    let right = arr.length-1;
    while(left < right){
        sum = arr[left] + arr[  right ] ;
        if (sum === 0 ){
            return [arr[left], arr[right]];
        }
        else if (sum >0 ){
            right--;
        }
        else{
            left++;
        }
    }
}
const result = sumPairZero([-5,-4,-3,-2,-1,13,4,8,6]).sort();
console.log(result);
console.clear();


var a =[1,2]
 b= [a];
 b.push(3);
 console.log(a);
 console.log(b);