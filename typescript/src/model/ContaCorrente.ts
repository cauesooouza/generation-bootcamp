import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
    private _limite: number;


    constructor(numero:number, agencia: number, tipo: string, titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo)
        this._limite = limite
    }

    public get limite(): number {
        return this._limite;
    }
    public set limite(value: number) {
        this._limite = value;
    }

    public sacar(valor: number): boolean {
        if ((this.saldo + this._limite) >= valor) {
            this.saldo -= valor;
            return true;
        } else {
            console.log('\nSaldo insuficiente')
            return false;
        }
    }

    protected converterParaMoeda(valor: number): string {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Limite: ${this.converterParaMoeda(this._limite)} `)
    }
}