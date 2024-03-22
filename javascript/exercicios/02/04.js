// import readline from 'readline-sync';
import inquirer from 'inquirer';

// sem inquirer

// const tipo0 = readline.question("O animal e 'VERTEBRADO' ou 'INVERTEBRADO'?\n");
// const tipo1 = readline.question("O animal e 'AVE' ou 'MAMIFERO' ou 'INSETO' ou 'ANELIDEO'?\n");
// const tipo2 = readline.question("O animal e 'CARNIVORO' ou 'HERBIVORO' ou 'ONIVORO' ou 'HEMATOFAGO'?\n");

// if (tipo0 == 'vertebrado' || tipo0 == 'VERTEBRADO' || tipo0 == 'Vertebrado') {

//     if (tipo1 == 'Ave' || tipo1 == 'AVE' || tipo1 == 'ave') {
//         if (tipo2 == 'Carnivoro' || tipo2 == 'CARNIVORO' || tipo2 == 'carnivoro') {
//             console.log("Seu animal é 'Águia'!");
//         } else if (tipo2 == 'Onivoro' || tipo2 == 'onivoro' || tipo2 == 'ONIVORO') {
//             console.log("Seu animal é 'Pomba'!");
//         }

//     } else if (tipo1 == 'Mamifero' || tipo1 == 'MAMIFERO' || tipo1 == 'mamifero') {
//         if (tipo2 == 'Onivoro' || tipo2 == 'ONIVORO' || tipo2 == 'onivoro') {
//             console.log("Seu animal é 'Homem'!");
//         } else if (tipo2 == 'Herbivoro' || tipo2 == 'HERBIVORO' || tipo2 == 'herbivoro') {
//             console.log("Seu animal é 'Vaca'!");
//         }
//     }
// } else if (tipo0 == 'Invertebrado' || tipo0 == 'invertebrado' || tipo0 == 'INVERTEBRADO') {

//     if (tipo1 == 'Inseto' || tipo1 == 'INSETO' || tipo1 == 'inseto') {
//         if (tipo2 == 'Hematofago' || tipo2 == 'HEMATOFAGO' || tipo2 == 'hematofago') {
//             console.log("Seu animal é 'PULGA'!");
//         } else if (tipo2 == 'Herbivoro' || tipo2 == 'HERBIVORO' || tipo2 == 'herbivoro') {
//             console.log("Seu animal é 'Lagarta'!");
//         }

//     } else if (tipo1 == 'Anelideo' || tipo1 == 'ANELIDEO' || tipo1 == 'anelideo') {
//         if (tipo2 == 'Hematofago' || tipo2 == 'HEMATOFAGO' || tipo2 == 'hematofago') {
//             console.log("Seu animal é 'Sanguessuga'!");
//         } else if (tipo2 == 'Onivoro' || tipo2 == 'onivoro' || tipo2 == 'ONIVORO') {
//             console.log("Seu animal é 'Minhoca'!");
//         }
//     }
// }

// com inquirer

const { tipoDeVertebra } = await inquirer.prompt({
    name: 'tipoDeVertebra',
    type: 'list',
    message: 'Qual o tipo do animal?',
    choices: ["Vertebrado", "Invertebrado"]
})

if (tipoDeVertebra === 'Vertebrado') {

    const { tipoVertebrado } = await inquirer.prompt({
        name: 'tipoVertebrado',
        type: 'list',
        message: 'Este animal vertebrado é?',
        choices: ["Ave", "Mamifero"],
    })

    if (tipoVertebrado == 'Ave') {

        const { tipoAve } = await inquirer.prompt({
            name: 'tipoAve',
            type: 'list',
            message: "Esta ave é? ",
            choices: ["Carnivoro", "Onivoro"]
        })

        if (tipoAve == 'Carnivoro') {
            console.log("Seu animal é 'Águia'!");
        } else if (tipoAve == 'Onivoro') {
            console.log("Seu animal é 'Pomba'!");
        }

    } else if (tipoVertebrado == 'Mamifero') {

        const { tipoMamifero } = await inquirer.prompt({
            name: 'tipoMamifero',
            type: 'list',
            message: "Esta mamifero é? ",
            choices: ["Onivoro", "Herbivoro"]
        })

        if (tipoMamifero == 'Onivoro') {
            console.log("Seu animal é 'Homem'!");
        } else if (tipoMamifero == 'Herbivoro') {
            console.log("Seu animal é 'Vaca'!");
        }
    }
} else if (tipoDeVertebra === 'Invertebrado') {

    const { tipoInvertebrado } = await inquirer.prompt({
        name: 'tipoInvertebrado',
        type: 'list',
        message: 'Qual o tipo do animal?',
        choices: ["Inseto", "Anelideo"]
    })

    if(tipoInvertebrado == "Inseto"){

        const { tipoInseto } = await inquirer.prompt({
            name: 'tipoInseto',
            type: 'list',
            message: 'Qual o tipo do animal?',
            choices: ["Hematofago", "Herbivoro"]
        })

        if(tipoInseto == 'Hematofago'){
            console.log("Seu animal é 'PULGA'!");
        } else if(tipoInseto == 'Herbivoro'){
            console.log("Seu animal é 'LAGARTA'!")
        }

    } else if(tipoInvertebrado == "Anelideo"){

        const { tipoAnelideo } = await inquirer.prompt({
            name: 'tipoAnelideo',
            type: 'list',
            message: 'Qual o tipo do animal?',
            choices: ["Hematofago", "Onivoro"]
        })

        if(tipoAnelideo == 'Hematofago'){
            console.log("Seu animal é 'Pulga'!");
        }else if(tipoAnelideo == 'Onivoro'){
            console.log("Seu animal é 'Minhoca'!");
        }
    }
}