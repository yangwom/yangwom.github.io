const listOdernada = document.querySelector('#lista-tarefas');

const bnt = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');

bnt.addEventListener('click', () => {
  const itemList = document.createElement('li');
  itemList.innerText = input.value;
  listOdernada.appendChild(itemList);
  input.value = '';
});

listOdernada.addEventListener('click', (e) => {
  for (let index = 0; index < listOdernada.children.length; index += 1) {
    listOdernada.children[index].style.backgroundColor = '';
  }
  e.target.style.backgroundColor = 'rgb(128,128,128)';
});
listOdernada.addEventListener('dblclick', (e) => {
  if (e.target.classList[0] === 'completed') {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
});
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    if (input.value.length === 0) {
      alert('escreva o seu texto');
    } else {
      const itemList = document.createElement('li');
      itemList.innerText = input.value;
      listOdernada.appendChild(itemList);
      input.value = '';
    }
  }
});

const clear = document.querySelector('#apaga-tudo');
clear.addEventListener('click', () => {
  const tarefa = document.querySelectorAll('li');
  for (let i = 0; i < tarefa.length; i += 1) {
    tarefa[i].remove();
  }
});

const apagarX = document.querySelector('#remover-finalizados');

apagarX.addEventListener('click', () => {
  const tarefa = document.querySelectorAll('li');
  for (let i = 0; i < tarefa.length; i += 1) {
    if (tarefa[i].classList.contains('completed')) {
      tarefa[i].remove();
    }
  }
});

const bntSalavar = document.querySelector('#salvar-tarefas');
bntSalavar.addEventListener('click', () => {
  localStorage.clear();
  for (let i = 0; i < listOdernada.children.length; i += 1) {
    localStorage.setItem(i, listOdernada.children[i].innerText);
    let chave = 'completed' + i;
    localStorage.setItem(chave,
      listOdernada.children[i].classList.contains('completed'));
  }
});

window.onload = () => {
  for (let i = 0; i < (localStorage.length) / 2; i += 1) {
    const listIntem = document.createElement('li');
    listIntem.innerText = localStorage.getItem(i);
    let chave = 'completed' + i;
    if (localStorage.getItem(chave) === 'true') {
      listIntem.className = 'completed';
    }
    listOdernada.appendChild(listIntem);
  }
};

// 6 - Ordene os itens da lista de tarefas por ordem de cria????o
// O que ser?? verificado:

// Tr??s itens ser??o criados na lista e ser?? checado se eles est??o ordenados por ordem de cria????o - ou seja, primeiro o primeiro item criado, depois o segundo, e assim por diante.

// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
// O que ser?? verificado:

// Ser?? verificado que, ao se carregar a p??gina, os itens da lista n??o tem o estilo CSS background-color: rgb(128, 128, 128)

// Ser?? verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS background-color: rgb(128, 128, 128)

// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser poss??vel desfazer essa a????o clicando novamente duas vezes no item
// Pontos importantes sobre este requisito:

// * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

// * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) ??s tarefas finalizadas.
// O que ser?? verificado:

// Ser?? verificado que, antes da a????o ser disparada, o elemento adicionado ?? lista n??o tem nem a classe completed nem o estilo line-through solid rgb(0, 0, 0).

// Ser?? verificado que a a????o pedida ?? disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe completed e a propriedade text-decoration com o valor line-through solid rgb(0, 0, 0)

// Ser?? verificado que, com um segundo duplo clique, um elemento completo deixa de s??-lo

// 10 - Adicione um bot??o com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
// O que ser?? verificado:

// Ser?? verificado que existe um elemento button com o id apaga-tudo

// Ser?? verificado que, dado que uma lista possui tarefas, um clique no bot??o a deixa vazia

// 11 - Adicione um bot??o com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
// O que ser?? verificado:

// Ser?? verificado que existe um elemento button com o id remover-finalizados

// Ser?? verificado que, ao clicar no bot??o, todos os elementos marcados como feitos s??o removidos da lista;

// 12 - Adicione um bot??o com id="salvar-tarefas" que salve o conte??do da lista. Se voc?? fechar e reabrir a p??gina, a lista deve continuar no estado em que estava
// O que ser?? verificado:

// Ser?? verificado que existe um elemento button com o id salvar-tarefas

// Ser?? verificado que, quando a lista tiver v??rios elementos, alguns dos quais marcados como finalizados, um recarregamento da p??gina mant??m a lista exatamente como est??.12 - Adicione um bot??o com id="salvar-tarefas" que salve o conte??do da lista. Se voc?? fechar e reabrir a p??gina, a lista deve continuar no estado em que estava
// O que ser?? verificado:

// Ser?? verificado que existe um elemento button com o id salvar-tarefas

// Ser?? verificado que, quando a lista tiver v??rios elementos, alguns dos quais marcados como finalizados, um recarregamento da p??gina mant??m a lista exatamente como est??.
