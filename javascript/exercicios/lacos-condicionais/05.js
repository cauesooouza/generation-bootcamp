import readline from 'readline-sync';

const menuProdutos = [{
    id: 1,
    produto: 'Cachorro Quente',
    preco: 10.00
}, {
    id: 2,
    produto: 'X-Salada',
    preco: 15.00
}, {
    id: 3,
    produto: 'X-Bacon',
    preco: 18.00
}, {
    id: 4,
    produto: 'Bauru',
    preco: 12.00
}, {
    id: 5,
    produto: 'Refrigerante',
    preco: 8.00
}, {
    id: 6,
    produto: 'Suco de laranja',
    preco: 13.00
}]

console.log("Ola, seja bem vindo ao cominhadas javascripto, tome o cardapio:");
console.table(menuProdutos)
const pedido = readline.questionInt("Qual produto deseja? (Digite o numero do id) \n");
const unidades = readline.questionInt("Quantas unidades deseja? \n");

function imprimeComanda(numeroDoPedido){
    let { produto, preco } = menuProdutos.find(item => item.id == numeroDoPedido)
    console.log("Segue sua comanda abaixo:")
    console.log(`${unidades} ${produto}, total: R$${preco * unidades},00 `)
}

switch (pedido) {
    case 1:
        imprimeComanda(pedido)
        break;
    case 2:
        imprimeComanda(pedido)
        break;
    case 3:
        imprimeComanda(pedido)
        break;
    case 4:
        imprimeComanda(pedido)
        break;
    case 5:
        imprimeComanda(pedido)
        break;
    case 6:
        imprimeComanda(pedido)
        break;
    default:
        console.log("Produto não encontrado, digite um numero entre 1-6!")
        break;
}
