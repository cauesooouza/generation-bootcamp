const readline = require('readline-sync');

const matriz = [], mediaNotasAlunos = [];
let nAlunos = 0, arrayTemp = [], notaAluno = 0, count = 1;

while (nAlunos < 2) {
    if (arrayTemp.length < 4) {
        let notaAluno = readline.questionFloat(`Digite a nota ${count} do aluno ${nAlunos + 1}: `);
        arrayTemp.push(notaAluno);
        count++;

    } else {
        matriz.push(arrayTemp);
        arrayTemp = [];
        nAlunos++;
        count = 1;
    }
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        notaAluno += matriz[i][j];
    }

    let mediaAluno = notaAluno / 4;
    mediaNotasAlunos.push(mediaAluno);
    notaAluno = 0
}

console.log(`Media da nota dos alunos:`)
console.table(mediaNotasAlunos)