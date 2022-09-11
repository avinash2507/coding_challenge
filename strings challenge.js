function countLetters(str) {
let tempArr = str.split("");
let letter = [];
let count = 1;
 for (let i = 0; i < tempArr.length; i++){
    if(tempArr[i]===tempArr[i+1]){
        count++;
    }
    else{
        let value = `${count}${tempArr[i]}`
        letter = [...letter,value];
        count =1;
    }
 }



    return letter.join("");


}
console.log(countLetters("ffffrrreeeuuuaaattt"));




function repeatLetter(str){
    let temArr1 =str.split("");
    let map = {};
   let ss=str.split("")
   let aa=ss.forEach(Element => {
    map[Element] = map[Element]?map[Element]+1:1;
   });
let max = 1;
char = str[0];
    for(let k in map) {
        if(map[k] > max) {
            max = map[k];
            char = `${map[k]}${k}`;
        
        }}
        return char;
}
function reverse(string){
     
    return string.split('').reverse("").join("");
    

    

}
console.log(reverse(("ajih aaan")));
      
    

    console.log(repeatLetter('avinash nareaaaandra maurya vishwakarmA'));