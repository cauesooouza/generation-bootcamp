const readline = require('readline-sync');

const array = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const number = readline.questionInt('Digite o numero que voce deseja encontar: ');

for (let i = 0; i <= array.length; i++) {
    if (array[i] === number) {
        console.log(`O Número ${number} está localizado na posição: ${i}`)
    } else if (i === array.length) {
        console.log(`O número ${number} não foi encontrado!`)
    }
}