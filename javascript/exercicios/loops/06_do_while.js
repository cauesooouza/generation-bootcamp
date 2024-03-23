const readline = require('readline-sync');

var inputs = 0;
var averageAllNumbers = 0;

do {
    var number = readline.questionInt("Digite um numero: ");

    if ((number % 3) === 0 && number !== 0) {
        inputs++;
        averageAllNumbers += number;
    }

} while (number !== 0);

averageAllNumbers = averageAllNumbers / inputs

console.log(`A média de todos os números múltiplos de 3 é: ${averageAllNumbers}`)