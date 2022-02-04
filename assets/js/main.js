var inputTarefa = document.querySelector('.input-tarefa');
var botaoCriarTarefa = document.querySelector('.botao-inserir');
var tarefas = document.querySelector('.tarefas-escrita');
var tarefaEscrita;
var numName = 1;

    //Funções
function criarTarefaEnter() {
    document.addEventListener('keypress', e => {
        if((e.keyCode === 13) && (inputTarefa.value)) {
            tarefaEscrita = '';
            tarefaEscrita = inputTarefa.value;
            
            var boxTarefa = document.createElement('div');
            boxTarefa.classList.add('box-tarefa');
            boxTarefa.classList.add(numName);
            
            
            var botaoExcluiTarefa = document.createElement('button');
            botaoExcluiTarefa.innerHTML = 'Excluir';
            botaoExcluiTarefa.classList.add('botao-exclui-tarefa');
            botaoExcluiTarefa.id = numName;

            var pTarefa = document.createElement('p');
            pTarefa.innerHTML = tarefaEscrita;
            
            boxTarefa.appendChild(pTarefa);
            boxTarefa.appendChild(botaoExcluiTarefa);

            tarefas.appendChild(boxTarefa);
            
            inputTarefa.value = '';
            inputTarefa.focus();
            numName++;
        }
    });
}

function criarTarefaClick() {
    botaoCriarTarefa.addEventListener('click', function() {
        if (inputTarefa.value) {
            tarefaEscrita = '';
            tarefaEscrita = inputTarefa.value;
            
            var boxTarefa = document.createElement('div');
            boxTarefa.classList.add('box-tarefa');
            boxTarefa.classList.add(numName);
            
            
            var botaoExcluiTarefa = document.createElement('button');
            botaoExcluiTarefa.innerHTML = 'Excluir';
            botaoExcluiTarefa.classList.add('botao-exclui-tarefa');
            botaoExcluiTarefa.id = numName;

            var pTarefa = document.createElement('p');
            pTarefa.innerHTML = tarefaEscrita;
            
            boxTarefa.appendChild(pTarefa);
            boxTarefa.appendChild(botaoExcluiTarefa);

            tarefas.appendChild(boxTarefa);
            
            inputTarefa.value = '';
            inputTarefa.focus();
            numName++;
        } else {
            alert('Insira uma tarefa no imput!');
        }
    });
}

function criarTarefa(){
    criarTarefaEnter();
    criarTarefaClick();
    removerTarefa();
}

function removerTarefa() {
    window.addEventListener('click', e => {
        var info = e.target.id;
        //console.log(info);
        if(info) {
            let tarefaPraExcluirColection = document.getElementsByClassName(info);
            let tarefaPraExcluir = tarefaPraExcluirColection[0];
            console.log(tarefaPraExcluir);
            tarefaPraExcluir.parentNode.removeChild(tarefaPraExcluir);
        }
    });

}


criarTarefa();





