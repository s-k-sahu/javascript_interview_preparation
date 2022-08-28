// function sum(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c)
//         }
//     }
// }

// let sum = function(a){
//     return function (b){
//         return function(c){
//             return sum(a+b+c)
//         }
//     }
// }

// console.log(sum(1)(2)(3))


let sum = a=>b=>b?sum(a+b):a
console.log(sum(1)(2)())

