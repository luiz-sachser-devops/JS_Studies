// REDUCE - runs through the array and reduce it to a single value

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaTodosOsNumeros = list.reduce((previous, current) => {  // Example sums up all elements
    console.log(previous, current)
    return previous + current
})

console.log(somaTodosOsNumeros)