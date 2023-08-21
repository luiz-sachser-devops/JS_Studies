// MAP - converts the list (object) into something else

class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const list = [new Pessoa('Renan'), new Pessoa('Maria'), new Pessoa('Jorge'), new Pessoa('Ana'),]

const nameList = list.map((element) => {
    return element.name
})

console.log(nameList)