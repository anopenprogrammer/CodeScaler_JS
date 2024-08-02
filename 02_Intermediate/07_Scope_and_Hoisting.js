// //Scope

let a = 10;
var b = 20;

if(true){
    var b = 30
    let a = 60;
}
console.log(a);
console.log(b);

// // Hoisting

function addone(num){
    return num+1;
}
addone(5);

let addtwo = function(num){
    return num+2;
}
addtwo(5);

