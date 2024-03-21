import * as readline from "node:readline/promises";

console.log(`
Olá, este é o programa para calcular seu salario junto ao abono
você devera escrever seu salario, e seu abono.
    `)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const formatAsCurrency = (number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
}

const prompts = ["Digite o salário: ", "Digite o abono: "];
const valores = [];

for await (let prompt of prompts){
  let getInput = await rl.question(prompt);
  if(getInput.length < 1){
    console.error(`Não pode ser vazio, tenta novamente.`)
    rl.close();
    process.exit(0);
}
  valores.push(getInput);
}

rl.close();

const novoSalario = parseFloat(valores[0]) + parseFloat(valores[1]);

console.log("Aguarde, calculando salario... \n")

setTimeout(()=>{
  console.log(`Novo salario: ${formatAsCurrency(novoSalario)}`);
}, 1500)