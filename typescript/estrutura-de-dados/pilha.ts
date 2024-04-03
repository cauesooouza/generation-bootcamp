interface PilhaRepository {
    adicionarLivro(livro: string): void;
    listarLivros(): void;
    retirarlivro(): void;
}

class Pilha implements PilhaRepository {
    private listaDeLivros: Array<string> = new Array<string>();

    adicionarLivro(livro: string): void {
        this.listaDeLivros.push(livro);
        console.log("Livro adicionado!");
    }
    listarLivros(): void {
        for(let livro of this.listaDeLivros){
            console.log(livro)
        }
    }
    retirarlivro(): void {
        let livroRetirado = this.listaDeLivros.pop();
        console.log(`Um livro foi retirado da pilha!`)
    }
}

const pilhaDeLivros = new Pilha();
pilhaDeLivros.adicionarLivro("O Auto da Compadecida");
pilhaDeLivros.adicionarLivro("O Alquimista");
pilhaDeLivros.adicionarLivro("Um Estudo em Vermelho");
pilhaDeLivros.listarLivros();
pilhaDeLivros.retirarlivro();
pilhaDeLivros.listarLivros();
