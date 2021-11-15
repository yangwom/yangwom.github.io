const bntEntrar = document.querySelector('.btn-enter');
const inputSenha = document.querySelector('.pass');
const inputEmail = document.querySelector('.email');
bntEntrar.addEventListener('click', () => {
  if (
    inputSenha.value === '123456' && inputEmail.value === 'tryber@teste.com'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const bntEnviar = document.querySelector('#submit-btn');
const inputagry = document.querySelector('#agreement');
inputagry.addEventListener('click', () => {
  if (bntEnviar.disabled === true) {
    bntEnviar.disabled = false;
  } else {
    bntEnviar.disabled = true;
  }
});

const textCount = document.querySelector('#textarea');
const contarL = document.querySelector('#counter');

textCount.addEventListener('input', () => {
  contarL.innerHTML = 500 - textCount.value.length;
});
const apagarForm = document.querySelector('#evaluation-form');
bntEnviar.addEventListener('click', () => {
  apagarForm.innerHTML = '';
});
