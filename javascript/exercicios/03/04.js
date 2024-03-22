const readline = require('readline-sync');

let idades = 0,
    totalPessoas = 0,
    mediaIdade,
    pessoasDevBackend = 0,
    mulheresCisTransDevFront = 0,
    homenCisTransDevMobileMais40 = 0,
    naoBinariosDevFullstackMenos30 = 0,
    boleano = true

while (boleano) {

    let inputIdade = readline.questionInt("Idade: ");

    console.log(`\n1- Mulher Cis \n2 - Homem Cis \n3 - Não Binário \n4 - Mulher Trans \n5 - Homen Trans \n6 - Outros\n`)

    let inputGenero = readline.keyIn("Identidade de Genero(1-6): ", { limit: '$<1-6>' });

    console.log(`\n1- Backend\n2 - frontEnd \n3 - Mobile \n4 - FullStack \n`)

    let inputCategoria = readline.keyIn("Selecione a categoria que esta pessoa se encaixa (1-4): ");

    switch (inputCategoria) {
        case '1':
            pessoasDevBackend++;
            break;
        case '2':
            if (inputGenero == '1' || inputGenero == '4' || inputGenero == '6') {
                mulheresCisTransDevFront++
            }
            break;
        case '3':
            if ((inputGenero == '2' || inputGenero == '5' || inputGenero == '6') && inputIdade > 40) {
                homenCisTransDevMobileMais40++;
            }
            break;
        case '4':
            if (inputGenero == '3' && inputIdade < 30) {
                naoBinariosDevFullstackMenos30++;
            }
            break;
        default:
            break;
    }

    let inputContinua = readline.keyIn("\nDeseja continuar a leitura de dados (S ou N)? ", { limit: '$<s,n>' }).toUpperCase();

    idades += inputIdade;
    totalPessoas++

    if (inputContinua === 'N') {

        boleano = false;

        if (totalPessoas == 1) {
            mediaIdade = idades;
        } else {
            mediaIdade = idades / totalPessoas;
        }

        console.log(`\nTotal de pessoas desenvolvedoras Backend: ${pessoasDevBackend}
Total de mulhers cis e trans desenvolvedoras frontend: ${mulheresCisTransDevFront}
Total de homens cis e trans desenvolvedores Mobile maiores de 40 anos: ${homenCisTransDevMobileMais40}
Total de pessoas não binarias desenvolvedoras fullstack menores de 30 anos: ${naoBinariosDevFullstackMenos30}
O numero total de pessoas que responderam à pesquisa: ${totalPessoas}
A média de idade das pessoas que responderam à pesquisa: ${mediaIdade}`)
    }
}