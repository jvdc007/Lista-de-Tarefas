let lista = document.querySelector('ul');
let tarefa = document.querySelector('input#texto');
let botao = document.querySelector('input#botao');
let listaTarefas = [];

renderLista();

function renderLista(){
    lista.innerHTML = '';
    for(list of listaTarefas){
        let item = document.createElement('li');
        let texto = document.createTextNode(list);
        item.appendChild(texto);
        lista.appendChild(item);
    }
}

function addTarefa(){
    let item = tarefa.value;
    listaTarefas.push(item);
    tarefa.value = '';
    renderLista();
}