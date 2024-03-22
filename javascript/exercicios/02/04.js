import inquirer from 'inquirer';


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