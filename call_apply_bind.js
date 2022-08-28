let name = {
    firstName:"ashok",
    lastName:"sahu"
}

// let getFullName = function(){
//     return this.firstName + ' ' + this.lastName
// }
let getFullName = function(village,state){
    return this.firstName + ' ' + this.lastName + ' '+ village+' '+state
}

console.log(getFullName.call(name,'girisola','odisha'))
console.log(getFullName.apply(name,['girisola','odisha']))

let bindCopy = getFullName.bind(name,'girisola','odisha')
console.log(bindCopy())