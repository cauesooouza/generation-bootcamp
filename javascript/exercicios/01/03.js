import * as readline from 'node:readline/promises';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log(`
Olá, este é o programa para calcular seu salario liquido.
    `)

const formatAsCurrency = (number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
}

const calculateRealWage = (salarioBruto, AdicionalNoturno, horasExtras, descontos) => {
    return (parseFloat(salarioBruto) + parseFloat(AdicionalNoturno) + (parseFloat(horasExtras) * 5) - parseFloat(descontos));
}

const valores = [];
const prompts = ["Digite seu salario bruto: ", "Adicional noturno: ", "Horas extras: ", "Descontos: "]


// mostrar erro pro pessoal;
// for await (let i = 1; i < 4; i++) {

// }

for await (let prompt of prompts) {
    let getInput = await rl.question(prompt);
    if(getInput.length < 1){
        console.error(`Não pode ser vazio, tenta novamente.`)
        rl.close();
        process.exit(0);
    }
    valores.push(getInput);
}

rl.close();

const salarioLiquido = formatAsCurrency(calculateRealWage(valores[0], valores[1], valores[2], valores[3]));

console.log("Aguarde calculando salario liquido... \n");

setTimeout(()=>{
    console.log(`Seu salario liquido é: ${salarioLiquido}`)
}, 1500)