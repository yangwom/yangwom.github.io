// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

// O que será verificado:

//     Verifica se ao carregar a página deve ser possível pintar os pixels de preto

//     Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor

//     Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.
const pixelart = document.querySelectorAll('.pixel');
const colors = document.querySelectorAll('.color');
const colorPai = document.querySelector('#pixel-board');

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', () => {
    for (let ii = 0; ii < colors.length; ii += 1) {
      colors[ii].classList.remove('selected');
    }

    colors[i].classList.add('selected');
  });
}

colorPai.addEventListener('click', (e) => {
  const selected = document.querySelector('.selected');
  e.target.style.backgroundColor = selected.getAttribute('value');
});

// O método getAttribute () retorna o valor do atributo com o nome especificado de um elemento.

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

// O que será verificado:

//     Verifica se o botão tem o id denominado clear-board

//     Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels

//     Verifica se o texto do botão é 'Limpar'

//     Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco

const bntLimpar = document.querySelector('#clear-board');
bntLimpar.addEventListener('click', () => {
  for (let index = 0; index < 25; index += 1) {
    pixelart[index].style.backgroundColor = 'white';
  }
});

// 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
// Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de N pixels de largura e N pixels de altura, onde N é o número inserido no input;

// Ou seja, se o valor passado para o input for 7, ao clicar no botão, vai ser gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);

// O input deve ter o id denominado board-size e o botão deve ter o id denominado generate-board;

// O input só deve aceitar número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento input;

// O botão deve conter o texto "VQV";

// O input deve estar posicionado entre a paleta de cores e o quadro de pixels;

// O botão deve estar posicionado ao lado do input;

// Se nenhum valor for colocado no input ao clicar no botão, mostre um alert com o texto: "Board inválido!";

// O novo quadro deve ter todos os pixels preenchidos com a cor branca.

// O que será verificado:

// Verifica se existe um input com o id board-size

// Verifica se existe um botão com o id generate-board

// Verifica se o input só aceita número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento input

// Verifica se o botão contém o texto 'VQV'

// Verifica se o input está posicionado entre a paleta de cores e o quadro de pixels

// Verifica se o botão está posicionado ao lado do input

// Verifica se nenhum valor for colocado no input ao clicar no botão, um alert é exibido com o texto: 'Board inválido!'

// Verifica se ao clicar no botão com um valor preenchido, o tamanho do board muda.

// Verifica se o novo quadro tem todos os pixels preenchidos com a cor branca
