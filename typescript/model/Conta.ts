import { UUID } from "crypto";

export class Conta {
    private _numero: UUID;
    private _agencia: number;
    private _tipo: string;
    private _titular: string;
    private _saldo: number;

    constructor(agencia: number, tipo: string, titular: string, saldo: number) {
        this._numero = crypto.randomUUID();
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    public get get_numero(): UUID {
        return this._numero;
    }
    public set set_numero(value: UUID) {
        this._numero = value;
    }

    public get get_agencia(): number {
        return this._agencia;
    }
    public set set_agencia(value: number) {
        this._agencia = value;
    }

    public get get_tipo(): string {
        return this._tipo;
    }
    public set set_tipo(value: string) {
        this._tipo = value;
    }

    public get get_titular(): string {
        return this._titular;
    }
    public set set_titular(value: string) {
        this._titular = value;
    }

    public get get_saldo(): number {
        return this._saldo;
    }
    public set set_saldo(value: number) {
        this._saldo = value;
    }

    public sacar(valor: number): boolean {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    public depositar(valor: number): void {
        this._saldo += valor;
    }

    protected converterParaMoeda(valor: number): string {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
    }

    public visualizar(): void {
        console.log(`********************************************************
        Dados da conta
********************************************************
Titular: ${this._titular}
Numero da conta: ${this._numero}
Agencia: ${this._agencia}
Tipo: ${this._tipo}
Saldo: ${this.converterParaMoeda(this._saldo)}
`)
    }
}