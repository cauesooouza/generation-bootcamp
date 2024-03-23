const readline = require('readline-sync');

let menorDe21 = 0;
let maiorDe50 = 0;
let boleano = true;

while (boleano) {
    let idade = readline.question(`Digite uma idade: `);

    if (idade < 0) {
        boleano = false;
    } else if (idade < 21 && idade > 0) {
        menorDe21++;
    } else if (idade > 50) {
        maiorDe50++;
    }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menorDe21}`);
console.log(`\nTotal de pessoas maiores de 50 anos: ${maiorDe50}`);