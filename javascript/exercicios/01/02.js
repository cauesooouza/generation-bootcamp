import * as readline from 'node:readline/promises';

console.log(`
Olá, este é o programa para calcular a media entre 4 notas.
    `)

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const getMedia = (array) => {
    const media = array.reduce((prev, curr) => parseFloat(prev) + parseFloat(curr)) / notas.length;

    return media;
}

const notas = [];
const prompts = ["Digite a primeira nota: ", "Digite a segunda  nota: ", "Digite a terceira nota: ", "Digite a quarta nota: "]

for await (let prompt of prompts){
    let getInput = await rl.question(prompt);
    if(getInput.length < 1){
        console.error(`Não pode ser vazio, tenta novamente.`)
        rl.close();
        process.exit(0);
    }
    notas.push(getInput);
}

rl.close();

const media = getMedia(notas);

console.log("Aguarde, calculando média... \n")

setTimeout(()=>{
    console.log(`A sua média foi ${media}`)
  }, 1500)