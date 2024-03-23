const readline = require('readline-sync');

var positiveNumbers = 0;

do {
    var number = readline.questionInt("Digite um numero: ");

    if (number > 0 && number !== 0) {
        positiveNumbers += number;
    }

} while (number !== 0);

console.log(`A Soma dos números positivos é: ${positiveNumbers}`);