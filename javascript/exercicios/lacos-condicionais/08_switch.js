import readline from 'readline-sync';

let saldo = 1000.00;

const operacoes = [{
    'codigo': 1,
    'operação': 'saldo'
}, {
    'codigo': 2,
    'operação': 'saque'
}, {
    'codigo': 3,
    'operação': 'deposito'
},]

function formatAsCurrency(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
}

function validaSaldoSuficienteESaca(saldo, operacao, valor) {
    return operacao === '2' && saldo > valor ? `Novo Saldo: ${formatAsCurrency(saldo - valor)}` : 'Saldo Insuficiente!';
}

console.table(operacoes);
const operacao = readline.keyIn("Qual operacao deseja fazer(1-3)? ", { limit: '$<1-3>' });

switch (operacao) {
    case '1':
        console.log(`Operação - ${operacoes.find(op => op.codigo == operacao).operação}`);
        console.log(`   Saldo: ${formatAsCurrency(saldo, operacao)}`)
        break;
    case '2':
        console.log(`Operação - ${operacoes.find(op => op.codigo == operacao).operação}`);
        let valorSaque = readline.questionFloat("Digite o valor a ser sacado: ");
        console.log(`${validaSaldoSuficienteESaca(saldo, operacao, valorSaque)}`)
        break;
    case '3':
        console.log(`Operação - ${operacoes.find(op => op.codigo == operacao).operação}`);
        let valorDeposito = readline.questionFloat("Digite o valor a ser sacado: ");
        console.log(`   Saldo: ${formatAsCurrency(saldo + valorDeposito)}`)
        break;
    default:
        break;
}