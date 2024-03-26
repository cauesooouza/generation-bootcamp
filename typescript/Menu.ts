import readline = require('readline-sync');
import { Conta, } from './model/Conta';

const Menu = () => {

    console.log(`********************************************************
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
`)

    let opcao: number = readline.questionInt("Digite a opcao desejada: ");

    switch (opcao) {
        case 1:
            let nome = readline.question("Qual nome do cliente? ");
            console.log('1 - corrente   //    2 - poupança')
            let tipoDeConta = readline.keyIn("Qual tipo de conta? ", { limit: '$<1-2>' });
            let agencia = readline.questionInt("Digite o numero da agencia: ");
            let saldoInicial = readline.questionFloat("Deseja depositar saldo inicial? ");
            let novaConta: Conta = new Conta(agencia, tipoDeConta, nome, saldoInicial);

            console.log('Conta criada com sucesso');
            novaConta.visualizar();
            Menu();
        case 2:

            Menu();
        case 3:

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