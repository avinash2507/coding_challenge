function num(min,max){
  return   Math.round(Math.random() * (max - min))+min;
}
 let a =num(1,9);
console.log(a);
function matchNum(){
if (a >3){
    console.log("your Num is greater  than 3");
}else if (a === a){
    console.log("your num is Absolutly right",a);
}
else{
    console.log("your Num is lower  than 3");
 } 
};
matchNum();
