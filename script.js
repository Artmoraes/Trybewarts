const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');

function EntraSite() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botao.addEventListener('click', EntraSite);

const submitButton = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');

function submitInfo() {
  if (checkBox.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

checkBox.addEventListener('click', submitInfo);
