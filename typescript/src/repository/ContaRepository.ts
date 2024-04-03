import { Conta } from "../model/Conta";

export interface ContaRepository {
	procurarContaPorNumero(numeroDaConta: number): void;
	encontrarConta(numeroDaConta: number): Conta | null;
	listarTodas(): void;
	cadastrar(conta: Conta): void;
	atualizar(numeroDaConta: number, opcaoAtualizar: number, entradaDeDado: string | number): void;
	deletar(numeroDaConta: number): void;
	sacar(numeroDaConta: number, valor: number): void;
	depositar(numeroDaConta: number, valor: number): void;
	transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}