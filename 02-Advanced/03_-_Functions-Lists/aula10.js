// First Class functions
//Higher order functions

function falarMeuNome() {
    console.log('Meu nome eh Luiz');    // Functions are OBJECTS
}

// const referenciaNova = falarMeuNome     // Assigns the function to a new variable

// referenciaNova()    // Calls this new function

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Sachser')
    return falarMeuNome
}

falarMeuNomeCompleto(falarMeuNome)()
