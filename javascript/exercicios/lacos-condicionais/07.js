import readline from 'readline-sync';

const operacoes = [{
    codigo: 1,
    'Operação': 'soma'
}, {
    codigo: 2,
    'Operação': 'subtração'
}, {
    codigo: 3,
    'Operação': 'multiplicação'
}, {
    codigo: 4,
    'Operação': 'divisão'
}]


const numero1 = readline.questionFloat("Digite o 1 numero: ");
const numero2 = readline.questionFloat("Digite o 2 numero: ");
console.table(operacoes)
const operacao = readline.keyIn('Qual operacao voce deseja realizar (1-4)? ', { limit: '$<1-4>' });

switch (operacao) {
    case '1':
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case '2':
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    case '3':
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;
    case '4':
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    default:
        console.log('Operação invalida');
        break;
}