import readline = require('readline-sync');
import { colors } from './src/util/Colors';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaConrtoller } from './src/controller/ContaController';

const Menu = () => {
    let contas: ContaConrtoller = new ContaConrtoller();

    console.log(`${colors.bg.black, colors.fg.yellow} 
********************************************************
                Banco dos cria
********************************************************

            1 - Criar conta 
            2 - Listar todas as contas
            3 - Buscar conta por numero
            4 - Atualizar dados da conta
            5 - Apagar conta
            6 - Sacar
            7 - Depositar
            8 - Transferir valores entre contas
            9 - Sair
${colors.reset}
`)

    let opcao: number = readline.questionInt("Digite a opcao desejada: ");

    switch (opcao) {
        case 1:
            let nome = readline.question("Qual nome do cliente? ");
            console.log('1 - corrente   //    2 - poupança')
            let tipoDeConta = readline.keyIn("Qual tipo de conta? ", { limit: '$<1-2>' });
            let agencia = readline.questionInt("Digite o numero da agencia: ");
            let saldoInicial = readline.questionFloat("Deseja depositar saldo inicial? ");
            if (tipoDeConta === '1') {
                let limite = saldoInicial * 2.5;
                contas.cadastrar(
                    new ContaCorrente(contas.gerarNumeroDaConta(), agencia, tipoDeConta, nome, saldoInicial, limite)
                )
            } else {
                let aniversario = readline.questionInt("Digite o dia do seu aniversário: ")
                let novaConta: ContaPoupanca = new ContaPoupanca(contas.gerarNumeroDaConta(), agencia, tipoDeConta, nome, saldoInicial, aniversario);
                novaConta.visualizar();
            }


            Menu();
        case 2:
            contas.listarTodas();
            Menu();
        case 3:
            let numeroDConta: number = readline.questionInt("Qual numero da conta que deseja procurar? ")
            contas.procurarPorNumero(numeroDConta)
            Menu();
        case 4:

            Menu();
        case 5:

            Menu();
        case 6:

            Menu();
        case 7:

            Menu();
        case 8:

            Menu();
        case 9:
            process.exit();

        default:
            console.log(`Opção: ${opcao} é invalida!`)
            break;
    }
}

Menu();