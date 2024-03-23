const readline = require('readline-sync');

const n1 = readline.questionInt("Digite um numero: ");
const n2 = readline.questionInt("Digite um numero maior que o anterior: ");

if (n2 < n1) {
    console.log("O intervalo é invalido!")

} else {
    console.log(`No intervalo entre ${n1} e ${n2}: `)
    
    for (let i = n1; i <= n2; i++) {
        if (i !== 0 && (i % 3) == 0 && (i % 5) == 0) {
            console.log(`${i} é múltiplo de 3 e 5`);
        }
    }
}