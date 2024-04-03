import readline = require('readline-sync');
import { colors } from './src/util/Colors';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

const contas: ContaController = new ContaController();

const esperaInputDoUsuario = () => {
    console.log(`${colors.bg.gray, colors.fg.blue}Pressione alguma tecla para voltar ao menu${colors.reset}`);
    let input = readline.prompt();

    Menu();
}

const Menu = () => {

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
                let limite = saldoInicial * (Math.floor(Math.random() * 2.5) + 1);
                contas.cadastrar(
                    new ContaCorrente(contas.gerarNumeroDaConta(), agencia, tipoDeConta, nome, saldoInicial, limite)
                );

            } else {
                let aniversario = readline.questionInt("Qual dia do seu aniverssario? ");
                if (aniversario > 31 || aniversario < 1) {
                    console.log(`${colors.bg.black, colors.fg.red}Dia invalido!${colors.reset}`)
                    esperaInputDoUsuario();
                }
                contas.cadastrar(
                    new ContaPoupanca(contas.gerarNumeroDaConta(), agencia, tipoDeConta, nome, saldoInicial, aniversario)
                );
            }


            esperaInputDoUsuario()

        case 2:

            contas.listarTodas();
            esperaInputDoUsuario()

        case 3:
            let numeroDConta: number = readline.questionInt("Qual numero da conta que deseja procurar? ")
            contas.procurarContaPorNumero(numeroDConta);
            esperaInputDoUsuario();
        case 4:
            let numeroDaContaAtualizar: number = readline.questionInt("Qual numero da conta que deseja atualizar? ");
            console.log(`1 - Nome  /  2 - Numero / 3 - Agencia / 4 - tipo`);
            let opcaoAtualizar: number = readline.questionInt("Digite o numero do que deseja atualizar:");
            if (opcaoAtualizar == 2 || opcaoAtualizar == 3) {
                let entradaDeDadoInt: number = readline.questionInt("Digite o dado atualizado: ");
                contas.atualizar(numeroDaContaAtualizar, opcaoAtualizar, entradaDeDadoInt);
            } else {
                let entradaDeDado: string = readline.question("Digite o dado atualizado: ");
                contas.atualizar(numeroDaContaAtualizar, opcaoAtualizar, entradaDeDado);
            }

            esperaInputDoUsuario()
        case 5:
            let contaDeletar = readline.questionInt("Qual numero da conta que deseja deletar? ");
            contas.deletar(contaDeletar);

            esperaInputDoUsuario()
        case 6:
            let contaSacar = readline.questionInt("Qual numero da conta que deseja sacar? ");
            let valorSaque = readline.questionFloat("Qual valor do saque? ");
            contas.sacar(contaSacar, valorSaque);

            esperaInputDoUsuario()
        case 7:
            let contaDepositar = readline.questionInt("Qual numero da conta que deseja depositar? ");
            let valorDeposito = readline.questionFloat('Qual valor do deposito? ');
            contas.depositar(contaDepositar, valorDeposito);

            esperaInputDoUsuario()
        case 8:
            let contaOrigem = readline.questionInt("Qual numero conta de origem da transferencia? ");
            let contaDestino = readline.questionInt("Qual numero conta de destino da transferencia? ");
            let valorTransferencia = readline.questionFloat('Qual valor da transferencia? ');
            contas.transferir(contaOrigem,contaDestino, valorTransferencia);

            esperaInputDoUsuario()
        case 9:
            process.exit();
        default:
            console.log(`${colors.bg.black, colors.fg.red}Opção: ${opcao} é invalida! ${colors.reset}`);
            break;
    }
}

Menu();