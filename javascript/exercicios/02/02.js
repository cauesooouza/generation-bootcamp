import readline from 'readline-sync';

const numero = readline.questionInt("Digite um numero: ");

if ((numero % 2 === 0) && numero > 0) {
    console.log(`O Número ${numero} é par e positivo`);

} else if ((numero % 2 !== 0) && numero > 0) {
    console.log(`O Número ${numero} é impar e positivo`);

} else if ((numero % 2 == 0) && numero < 0) {
    console.log(`O Número ${numero} é par e negativo`);
    
} else if ((numero % 2 !== 0) && numero < 0) {
    console.log(`O Número ${numero} é impar e negativo`);
}