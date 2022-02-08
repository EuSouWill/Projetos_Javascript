let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}
//Existem situações em que é útil verificar se uma palavra está dentro de um 
//texto. Por exemplo, pode ser necessário bloquear uma palavra inadequada.
 //O método indexOf nos ajuda com essa tarefa como podemos ver na Figura 4.