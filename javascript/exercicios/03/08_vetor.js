const readline = require('readline-sync');

const array = [], arrayOdd = [], arrayEven = [];
let sumAll = 0, average = 0;

do {
    let number = readline.questionInt("Digite o numero que deseja guardar: ");

    array.push(number);

} while (array.length < 10);

for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
        arrayOdd.push(array[i]);
    }

    if (array[i] % 2 === 0) {
        arrayEven.push(array[i]);
    }

    sumAll += array[i];

}

average = sumAll / (array.length);

console.log(`Elementos nos índices ímpares:
${arrayOdd}
Elementos pares:
${arrayEven}
Soma: ${sumAll}
Média: ${average}
`)