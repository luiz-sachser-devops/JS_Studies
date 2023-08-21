/*
    In JS we do inheritance and polymorphism using prototypes, as opposed to Java
    .NET etc.. where it is a natively object oriented language
*/

const pessoa = {
    genero: 'masculino'
}    

const luiz = {
    nome: 'Luiz',
    age: 39,
    __proto__: pessoa   // Prototype of luiz is pessoa means luiz will inherit
                        // properties of pessoa
}

 

console.log(luiz.genero);  // it will search attributes in luiz and then in pessoa
                           // or other prototypes


// CONSTRUCTOR FUNCTIONS AND CLASSES                           
                           
function Pessoa(nome, idade) {      // Constructor function
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome eh: ${this.nome}`)    // Adds a method to the constructor function
}

/*
    SAME AS:

    class Pessoa {
        constructor(nome, idade) {
            this.nome = nome
            this.idade = idade
        }

        falar() {
            console.log(`Meu nome eh: ${this.nome}`)
        }
    }
*/

const harti = new Pessoa('harti', 40);

console.log(harti);
harti.falar();