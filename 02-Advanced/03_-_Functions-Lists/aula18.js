// JOIN - join lists (objects) and transform them into strings using a separator

const list = [1, 2, 3]

console.log(list.join('/;'))

// Combining manipulating functions

const listNames = [{ nome: 'Jose' }, { nome: 'Maria' }, { nome: 'Ana' }, { nome: 'Andressa'}]

console.log(listNames.map((e) => e.nome).join('; '))

// Other example - elements that start with 'A'

console.log(listNames.map((e) => e.nome)
    .filter((e) => e.startsWith('A'))
    .join('; ')
    )

