//const
const arr = [];
arr.push(12);
arr.push(20);

// arr = []; we can not override or replace because we use const

console.log(arr);

// var

var a = 10;

if(true){
    var a = 20;
    console.log(a);
}
console.log(a);  
/*  our ans should be 10 but ans will be 20
because var is also accessible for block level outsite.
if we use let.... 
*/

//let

let b = 10;
if(true){
    let b = 20;
    console.log(b)
}
console.log(b);

