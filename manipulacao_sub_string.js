let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";

if( tamanho > 100 ){

    resumo = conteudo.substr(0, 97);//subtraindo os primeiros 97 caracteres para formar o resumo 
    resumo += "...";

} else {

    resumo = conteudo;

}

console.log(resumo);

// ` temos uma variavel que representa o conteudo e nao queremos exibir tudo.
//caso esse conteudo tenha mais de 100 caracteres é extraida uma parte desse dele para 
//ser transformada em texto`