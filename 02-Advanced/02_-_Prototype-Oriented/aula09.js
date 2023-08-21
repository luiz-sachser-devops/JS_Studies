const pessoa = {
    genero: 'masculino'
}

const luiz = {
    nome: 'luiz',
    __proto__: pessoa
}

console.log(luiz.genero);

// Other form to access the object's attributes

const harti = Object.create(pessoa)         // No need to use __proto__
 console.log(harti.genero)

