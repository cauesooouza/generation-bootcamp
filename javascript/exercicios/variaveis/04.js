import * as readline from 'node:readline/promises';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log(`
Olá, este é o programa para calcular diferença entre um conjunto de numeros
você ira digitar 4 numeros e iremos mostrar a diferença do produto dos dois primeiros pelo os dois 
ou seja (n1 *n2) - (n3 * n4).
    `)

const valores = [];
const prompts = ["Digite o numero 1: ", "Digite o numero 2: ", "Digite o numero 3: ", "Digite o numero 4: "];

const calcularDiferenca = (array) => {
    const valorCalculado = ((array[0] * array[1]) - (array[2] * array[3]))
    return valorCalculado;
}

for await (let prompt of prompts) {
    let getInput = await rl.question(prompt);
    if(getInput.length < 1){
        console.error(`Não pode ser vazio, tenta novamente.`)
        rl.close();
        process.exit(0);
    }
    valores.push();
}

rl.close();

console.log("Aguarde calculando diferença... \n")

setTimeout(() => {
    console.log(`A diferença de n1, n2 por n3, n4 é: ${calcularDiferenca(valores)}`)
}, 1500)