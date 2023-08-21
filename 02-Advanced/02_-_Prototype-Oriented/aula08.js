// Overwrite and Shadowing


const pessoa = {
    idade: 30
}

const luiz = {
    nome: 'luiz',  // if there was an idade attribute here, it would be the returned vlue first
    __proto__: pessoa
}

console.log(luiz.idade);


// Basically it runs all through object luiz and tries to find idade; if not found goes to prototype
// or a chain of prototypes