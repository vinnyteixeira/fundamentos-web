/*
por tag: getElementByTagName()
por id: getElementById()
por Nome: getElementsByName()
por classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome");

function mostraValor() {
  const limite = 30;
  let restante = nome.value.length;
  let vr = window.document.getElementById("vr");

  if (restante < 30) {
    vr.innerHTML = `Ainda faltam ${limite - restante} caracteres restantes`;
  }
}

let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome invalido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome valido";
    txtNome.style.color = "green";
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail invalido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail valido";
    txtEmail.style.color = "green";
  }
}
