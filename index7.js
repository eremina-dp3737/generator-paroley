const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers   = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols   = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-'];
const allowedSymbols = []
const RandomSymbol = 0

lowercase.forEach((elems) => {
    allowedSymbols.push(elems)
})
uppercase.forEach((elements) => {
    allowedSymbols.push(elements)
})

const UserParol = +prompt("Сколько цифр в пароле нужно?") 

const Numbers = confirm("Нужны ли цифры?")
if (Numbers){
    numbers.forEach((el) => {
        allowedSymbols.push(el)
    })
}

const Symbols = confirm("Нужны ли спецсимволы?")
if (Symbols){
    symbols.forEach((els) => {
        allowedSymbols.push(els)
    })
}
const CompletePassword = []
for (let i = 0; i < UserParol; i++) {
    allowedSymbols.forEach((elms) => {
        const RandomSymbol = Math.floor(Math.random * allowedSymbols)
        CompletePassword.push(RandomSymbol)
    })
    
}
alert(`${CompletePassword}`)

