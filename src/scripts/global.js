// Verificar se tem uma sessao valida, se tiver, esconder a parte de login e cadastro.

console.log("chamado!");

if (localStorage.getItem("@name")) {
  const AuthContainer = document.getElementsByClassName("logins-container")[0];
  AuthContainer.remove();
}