// Direct (explicit) invocation, Call, Apply and New Operator

function teste() {
    console.log('Teste')
}

teste()     // Direct invocation

// _________________________________________ //

const pessoa = {
    nome: 'Luiz',
    idade: 39
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)     // This function is not in the context of the object Pessoa
}


// The methods below apply context Pessoa to the function gritar
gritar.apply(pessoa, ['Olaaaa'])   // Apply method invocation
gritar.call(pessoa, 'Olaaaa')      // Callcmethod invocation


