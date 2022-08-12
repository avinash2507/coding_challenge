function sorting(arr){
    const sorted = arr.sort((a,b) => {
        return a-b;
    });
    let largest = sorted.pop()
    let number = 0;
    sorted.map(item => ( number += item));
    {
return largest ===number;
        
    }
}
console.log(sorting([1,5,3,4,8,2,23]));
console.log(sorting([2,5,3,6,1,8,34,23]));