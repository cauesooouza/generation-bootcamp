import * as readline from 'node:readline/promises';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const numeroA = await rl.question("Digite o valor de: ");
const numeroB = await rl.question("Digite o valor de: ");
const numeroC = await rl.question("Digite o valor de: ");



rl.close();

if((parseFloat(numeroA) + parseFloat(numeroB)) > parseFloat(numeroC)){
    console.log("A soma de A + B é mair que C")
} else if((parseFloat(numeroA) + parseFloat(numeroB)) < parseFloat(numeroC)){
    console.log("A soma de A+B é Menor que C");
} else if((parseFloat(numeroA) + parseFloat(numeroB)) === parseFloat(numeroC)){
    console.log("A soma de A+B é igual a C");
}

