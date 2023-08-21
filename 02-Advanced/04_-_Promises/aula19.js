// Creating new promise
const promiseOfARandomNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 3000)  // time in ms
})

console.log('Go! Go! Go!')

promiseOfARandomNumber
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('Finalized!')
    })

