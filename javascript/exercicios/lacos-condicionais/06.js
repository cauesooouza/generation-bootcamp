import readline from 'readline-sync';

const cargosEmpresa = [{
    id: 1,
    cargo: 'Gerente',
    reajuste: 10
}, {
    id: 2,
    cargo: 'Vendedor',
    reajuste: 7
}, {
    id: 3,
    cargo: 'Supervisor',
    reajuste: 9
}, {
    id: 4,
    cargo: 'Motorista',
    reajuste: 6
}, {
    id: 5,
    cargo: 'Estoquista',
    reajuste: 5
}, {
    id: 6,
    cargo: 'Técnico de TI',
    reajuste: 8
}]


const nomeColaborador = readline.question('Digite o nome do colaborador: ');
console.table(cargosEmpresa);
const codigoColaborador = readline.keyIn('Digite o codigo do cargo (1-6): ', { limit: '$<1-6>' });
const salarioColaborador = readline.questionFloat('Digite o salario do colaborador: ');

const calculaEImprimeReajuste = (idColaborador) => {
    let { cargo, reajuste } = cargosEmpresa.find(cargo => cargo.id == idColaborador);
    let salarioComReajuste = ((salarioColaborador * reajuste) / 100) + salarioColaborador;
    let salarioFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(salarioComReajuste)

    let colaborador = {
        'Nome do colaborador': nomeColaborador,
        'Cargo': cargo,
        'Salário': salarioFormatado
    }

    console.table(colaborador);
}

switch (codigoColaborador) {
    case '1':
        calculaEImprimeReajuste(1);
        break;
    case '2':
        calculaEImprimeReajuste(2);
        break;
    case '3':
        calculaEImprimeReajuste(3);
        break;
    case '4':
        calculaEImprimeReajuste(4);
        break;
    case '5':
        calculaEImprimeReajuste(5);
        break;
    case '6':
        calculaEImprimeReajuste(6);
        break;
    default:
        console.log('ERRO: Digite um numero valido');
        break;
}