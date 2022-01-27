let alunos = [
    {id: 1, nome: "Valentina Catunda", media: 8},
    {id: 2, nome: "Louise Catunda", media: 7},
    {id: 3, nome: "Kassia Catunda", media: 5},
    {id: 4, nome: "Kamille Catunda", media: 4},
    {id: 5, nome: "William Regis", media: 10},
];

let contador = 0;

while ( contador < alunos.length ) {

    let aluno = alunos[contador];

    contador++;

    if ( aluno.media < 6 ) {
        continue;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");
}