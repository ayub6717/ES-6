function sum (...num){
    return num.reduce((a,b) => a+b);
}
let xum = sum(10, 20, 30, 40, 50, 60);
console.log(xum);