import { colors } from './../util/Colors';
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    private listaDeContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarContaPorNumero(numeroDaConta: number): void {
        let resultado = this.encontrarConta(numeroDaConta);
        if (resultado != null) {
            resultado.visualizar()
        } else {
            console.log('Conta não encontrada')
        }
    }

    encontrarConta(numeroDaConta: number): Conta | null {
        for (let conta of this.listaDeContas) {
            if (conta.numero === numeroDaConta) {
                return conta
            }
        }
        return null;
    }

    listarTodas(): void {
        if (this.listaDeContas.length === 0) {
            console.log(`${colors.bg.black, colors.fg.red}Não há contas cadastradas.`)
        } else {
            for (let conta of this.listaDeContas) {
                conta.visualizar();
            }
        }
    }

    cadastrar(conta: Conta): void {
        this.listaDeContas.push(conta);
        console.log(`${colors.bg.black, colors.fg.green}Conta cadastrada com sucesso! ${colors.reset}`)
    }
    atualizar(numeroDaConta: number, opcaoAtualizar: number, entradaDeDado: string | number): void {
        let contaAtualizar = this.encontrarConta(numeroDaConta);

        if (contaAtualizar) {
            switch (opcaoAtualizar) {
                case 1:
                    if (typeof entradaDeDado === 'string') {
                        contaAtualizar.titular = entradaDeDado;
                        console.log('Alterado com sucesso!');
                    } else {
                        console.log('Você não pode inserir numeros como nome do titular!');
                    }
                    break;
                case 2:
                    if (typeof entradaDeDado === 'number') {
                        if (this.listaDeContas.findIndex(conta => conta.numero == entradaDeDado) == -1) {
                            contaAtualizar.numero = entradaDeDado;
                            console.log('Alterado com sucesso!');
                        } else {
                            console.log('Numero da conta ja atribuido, tente outro numero!');
                        }
                    } else {
                        console.log('Você não pode inserir string no numero da conta!');
                    }
                    break;
                case 3:
                    if (typeof entradaDeDado === 'number') {
                        contaAtualizar.agencia = entradaDeDado;
                        console.log('Alterado com sucesso!');
                    } else {
                        console.log('Você não pode inserir string no numero da conta!');
                    }
                    break;
                case 4:
                    if (typeof entradaDeDado === 'string') {
                        contaAtualizar.tipo = entradaDeDado;
                        console.log('Alterado com sucesso!');
                    } else {
                        console.log('Você não pode inserir numeros como tipo da conta!');
                    }
                    break;
                default:
                    break;
            }

        } else {
            console.log(`Conta: ${numeroDaConta}, não encontrada!`)
        }

    }
    deletar(numeroDaConta: number): void {
        let contaDeletar = this.listaDeContas.findIndex(conta => conta.numero === numeroDaConta);
        if (contaDeletar != -1) {
            this.listaDeContas.splice(contaDeletar, 1);
            console.log('Conta deletada com sucesso!');
        } else {
            console.log("Conta não encontrada")
        }
    }

    sacar(numeroDaConta: number, valor: number): void {
        let contaSacar = this.encontrarConta(numeroDaConta);

        if (contaSacar !== null) {
            if (contaSacar.sacar(valor)) {
                console.log('Saque efetuado com sucesso!');
            } else {
                console.log('Não foi possivel efetuar saque')
            }
        } else {
            console.log('Conta não encontrada');
        }

    }
    depositar(numeroDaConta: number, valor: number): void {
        let contaDepositar = this.encontrarConta(numeroDaConta);

        if (contaDepositar !== null) {
            contaDepositar.depositar(valor);
            console.log('Valor depositado com sucesso!')
        } else {
            console.log('Conta não encontrada');
        }
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.encontrarConta(numeroOrigem);
        let contaDestino = this.encontrarConta(numeroDestino);

        if (contaOrigem !== null && contaDestino !== null) {
            if (contaOrigem.sacar(valor)) {
                contaDestino.depositar(valor);
            } else {
                console.log('Não foi possivel fazer a transferencia, verifique seu saldo.');
            }
        } else {
            console.log('Conta não encontrada');
        }
    }

    public gerarNumeroDaConta(): number {
        return ++this.numero;
    }
}