interface FilaRepository {
    adicionarCliente(cliente: string): void;
    listarCliente(): void;
    chamarCliente(): void;
}

class Fila implements FilaRepository {
    private listaClientes: Array<string> = new Array<string>();


    adicionarCliente(cliente: string): void {
        this.listaClientes.push(cliente);
        console.log("cliente adicionado");
    }
    listarCliente(): void {
        for (let cliente of this.listaClientes) {
            console.log(`${cliente}`);
        }
    }
    chamarCliente(): void {
        let clienteChamado = this.listaClientes.shift();
        console.log(`O cliente ${clienteChamado} foi chamado!`)
    }
}

const testeFila = new Fila();

testeFila.adicionarCliente("João");
testeFila.adicionarCliente("Maria")
testeFila.adicionarCliente("Ana");
testeFila.listarCliente();
testeFila.chamarCliente();
testeFila.listarCliente();