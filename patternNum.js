let n = 5 ;
string = "";
for (var row = 1; row  <=n ; row++){
    for (var space = 0 ; space < n-row ; space++){
    string += " ";
    // console.log(" ");

    
    }
   for (var col = row; col>=1  ; col--){
    string += col;
}
for(var col = 2 ;col <=row; col++){
    string += col;
}
string += '\n';

}
console.log(string);