const obj = {
    Name: 'MD AYUB SHAMIM',
    Email: 'ahmed1.ayub6717@gmail.com'
}
let { Name, Email } = obj;
console.log(Name, Email);

function print({Name, Email}){
    console.log(`Hello ${Name}; Email: ${Email}`);
}
print({Email,Name});

//==================

const arr = [19, 20, 32]; 
let [a, b, c] = arr;
console.log(a);
console.log(c);