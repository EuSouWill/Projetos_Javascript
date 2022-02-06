let email_acesso = "william@email.com";

let email_cadastro = "WILLIAm@email.com";

if( email_acesso.toLowerCase() == email_cadastro.toLocaleLowerCase() ) {
    console.log("foi enviado um link de ativação para seu email");

}  else {
    console.log("esse email nao existe em nossa base de dados");
}