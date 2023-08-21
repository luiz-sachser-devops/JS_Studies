// FILTER - creates a new list with the logic desired

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = list.filter((element, i, listRef) => {
    return (element % 2 === 0)
})

console.log(evenNumbers);