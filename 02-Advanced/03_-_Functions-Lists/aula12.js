// Closures

function soma(x) {
    return function(y) {
        return x + y
    }
}

const somaParcial = soma(10)

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))

// It kept x = 10 and then somaParcial incremented y only