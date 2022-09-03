// function abc(){
//     return 'sync fn'
// }

async function def(){
    sol = 'jfd'
    try {
        console.log(sol)
    } catch (error) {
        console.log(error)
    }
}

console.log(def())
// console.log(abc())

// setTimeout(() => {
//     console.log('async')
// }, 0);

// let pro = new Promise((res,rej)=>{
//     return res('promise')
// })

// pro.then((d)=>console.log(d))

// function* generatorFunc(){
//     yield 'a'
//     yield 'b'
// }

// console.log(generatorFunc().next().value)
// console.log(generatorFunc().next().value)
