// Function Expression and Function declaration

// Declaration

function nomeDaFuncao () {
    console.log('nomeDaFuncao')
}

//Expression

const nomeDeOutraDuncao = function() {
    console.log('nomeDaOutraFuncao')
}

// Invoking both would be the same

nomeDaFuncao()
nomeDeOutraDuncao()

// MAIN DIFFERENCE IS THE HOISTING

// *** ALL DECLARATION FUNCTIONS ARE HOISTED TO THE TOP ***

// ____________________________________________________________ //

// Arrow functions

function funcao1() {
    console.log(this)   // Shows the function context
}

const funcao2 = () => {
    console.log(this)
}

const luiz = {
    nome: 'Luiz',
    funcao1,
    funcao2
}

luiz.funcao1()
luiz.funcao2()