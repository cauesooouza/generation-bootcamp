const readline = require('readline-sync');

const matriz = [], elementosDiagonalPrincipal = [], elementosDiagonalSecundaria = [];
let arrayTemp = [], somaElementosDiagonalPrincipal = 0, somaElementosDiagonalSecundaria = 0;

while (matriz.length < 3) {
        if (arrayTemp.length < 3) {
            let inputNumber = readline.questionInt("Digite um numero a ser guardado: ");
            arrayTemp.push(inputNumber);

        } else {
            matriz.push(arrayTemp)
            arrayTemp = [];
        }
}

let count = matriz.length - 1;

for (let i = 0; i < matriz.length; i++) {
    elementosDiagonalPrincipal.push(matriz[i][i]);
    somaElementosDiagonalPrincipal += matriz[i][i]

    if (i > 0) {
        elementosDiagonalSecundaria.push(matriz[i][count])
        somaElementosDiagonalSecundaria += matriz[i][count]
        count--;
    } else {
        elementosDiagonalSecundaria.push(matriz[i][count])
        somaElementosDiagonalSecundaria += matriz[i][count]
        count--;
    }
}

console.log(`Elementos da diagonal principal: ${elementosDiagonalPrincipal}
Elementos da diagonal secundaria: ${elementosDiagonalSecundaria}
Soma dos elementos da diagonal principal: ${somaElementosDiagonalPrincipal}
Soma dos elementos da diagonal secundaria: ${somaElementosDiagonalSecundaria}`)