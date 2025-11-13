const form = document.getElementById("cadastroForm");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
const btnEnviar = document.getElementById("btnEnviar");

// Função para mostrar erro
function mostrarErro(campo, mensagem) {
  const erro = document.getElementById(`erro${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`);
  erro.textContent = mensagem;
  campo.style.borderColor = mensagem ? "red" : "#ccc";
}

// Validações individuais
function validarNome() {
  if (nome.value.trim().length < 3) {
    mostrarErro(nome, "O nome deve ter pelo menos 3 caracteres.");
    return false;
  }
  mostrarErro(nome, "");
  return true;
}

function validarEmail() {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!regex.test(email.value)) {
    mostrarErro(email, "E-mail inválido.");
    return false;
  }
  mostrarErro(email, "");
  return true;
}

function validarSenha() {
  if (senha.value.length < 8) {
    mostrarErro(senha, "A senha deve ter no mínimo 8 caracteres.");
    return false;
  }
  mostrarErro(senha, "");
  return true;
}

function validarConfirmarSenha() {
  if (senha.value !== confirmarSenha.value) {
    mostrarErro(confirmarSenha, "As senhas não conferem.");
    return false;
  }
  mostrarErro(confirmarSenha, "");
  return true;
}

// Verifica todos os campos e habilita o botão
function validarFormulario() {
  const valido = validarNome() && validarEmail() && validarSenha() && validarConfirmarSenha();
  btnEnviar.disabled = !valido;
}

// Eventos de validação em tempo real
[nome, email, senha, confirmarSenha].forEach(campo => {
  campo.addEventListener("input", validarFormulario);
});

// Evita envio se houver erros
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validarNome() && validarEmail() && validarSenha() && validarConfirmarSenha()) {
    alert("Formulário enviado com sucesso!");
    form.reset();
    btnEnviar.disabled = true;
  }
});
