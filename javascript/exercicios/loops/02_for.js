const readline = require('readline-sync');

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    let n = readline.questionInt(`Digite o ${i} numero: `);
    if ((n % 2) == 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`\nTotal de números pares: ${pares}`);
console.log(`\nTotal de números ímpares: ${impares}`);