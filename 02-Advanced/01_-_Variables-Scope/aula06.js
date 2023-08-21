/*
    Objects are a collection of key-value attributes
*/

const x = {   // literal object
    nome: "Luiz",
    idade: 30,
    "teste teste": 10
} 

x.surname = 'Sachser'   // one way to add a key-value to an object

console.log(typeof x);
console.log(x)

// accessing attributes
console.log(x.nome);    // RECOMMENDED THIS WAY
console.log(x['nome']);

// Reassign values alternative
x['nome'] = 'Harti'
console.log(x.nome);
console.log(x)

// Objects can also receive a FUNCTION

x.falar = function() {  // Creates a function inside the object
    console.log('Function Test')
}

x.falar()
console.log(x)

// ALTERNATIVELY

const pessoa = {   
    nome: "Luiz",
    idade: 30,
    speak: function() {
        console.log(`My name is ${this.nome}`) // 'this' is used within scope
    }
}

pessoa.speak();
console.log(pessoa);