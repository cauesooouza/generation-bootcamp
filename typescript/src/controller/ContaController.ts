import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaConrtoller implements ContaRepository {
    private listaDeContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarPorNumero(numeroDaConta: number): void {
        this.listaDeContas[numeroDaConta].visualizar();
    }

    listarTodas(): void {
        for (let conta of this.listaDeContas) {
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
        this.listaDeContas.push(conta);
        console.log(`${colors.bg.black, colors.fg.green}CConta numero:${conta.numero} criada com sucesso ${colors.reset}`);
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    public gerarNumeroDaConta(): number {
        return ++this.numero;
    }

}