let lista = document.querySelector('ul');
let tarefa = document.querySelector('input#texto');
let botao = document.querySelector('input#botao');
let listaTarefas = JSON.parse(localStorage.getItem('lista')) || [];

renderLista();

function renderLista(){
    lista.innerHTML = '';
    for(list of listaTarefas){
        let item = document.createElement('li');
        let texto = document.createTextNode(list);
        let excluir = document.createElement('a');
        let pos = listaTarefas.indexOf(list);
        excluir.innerText = "Excluir";
        excluir.href = "#";
        excluir.setAttribute('onclick', 'removerTarefa('+pos+')');
        item.appendChild(texto);
        item.appendChild(excluir);
        lista.appendChild(item);
    }
}

function addTarefa(){
    tarefa.focus();
    let item = tarefa.value;
    if(item == ""){
        return;
    }else{
        listaTarefas.push(item);
        tarefa.value = '';
        renderLista();
        save();
    }
}

function removerTarefa(pos){
    listaTarefas.splice(pos, 1);
    renderLista();
    save();
}

function save(){
    localStorage.setItem('lista', JSON.stringify(listaTarefas));
}