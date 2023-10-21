"use strict";
class ToDolist {
    constructor() {
        this.inputTarefa = document.querySelector(".input-tarefa");
        this.botaoCriarTarefa = document.querySelector(".botao-inserir");
        this.tarefas = document.querySelector(".tarefas-escrita");
        this.tarefaEscrita = "";
        this.numName = 1;
    }
    criarTarefa() {
        this.criarTarefaEnter();
        this.criarTarefaClick();
        this.removerTarefa();
    }
    criarTarefaEnter() {
        document.addEventListener("keypress", (e) => {
            if (this.inputTarefa && e.keyCode === 13 && this.inputTarefa.value) {
                this.tarefaEscrita = this.inputTarefa.value;
                var boxTarefa = document.createElement("div");
                boxTarefa.classList.add("box-tarefa");
                boxTarefa.classList.add(this.numName.toString());
                var botaoExcluiTarefa = document.createElement("button");
                botaoExcluiTarefa.innerHTML = "Excluir";
                botaoExcluiTarefa.classList.add("botao-exclui-tarefa");
                botaoExcluiTarefa.id = this.numName.toString();
                var pTarefa = document.createElement("p");
                pTarefa.innerHTML = this.tarefaEscrita;
                boxTarefa.appendChild(pTarefa);
                boxTarefa.appendChild(botaoExcluiTarefa);
                if (this.tarefas)
                    this.tarefas.appendChild(boxTarefa);
                this.inputTarefa.value = "";
                this.inputTarefa.focus();
                this.numName++;
            }
        });
    }
    criarTarefaClick() {
        if (this.botaoCriarTarefa)
            this.botaoCriarTarefa.addEventListener("click", (e) => {
                if ((e.target instanceof HTMLInputElement && e.target.value) ||
                    this.inputTarefa ||
                    this.inputTarefa === e.target) {
                    this.tarefaEscrita = "";
                    if (this.inputTarefa && this.inputTarefa.value !== '') {
                        this.tarefaEscrita = this.inputTarefa.value;
                        var boxTarefa = document.createElement("div");
                        boxTarefa.classList.add("box-tarefa");
                        boxTarefa.classList.add(this.numName.toString());
                        var botaoExcluiTarefa = document.createElement("button");
                        botaoExcluiTarefa.innerHTML = "Excluir";
                        botaoExcluiTarefa.classList.add("botao-exclui-tarefa");
                        botaoExcluiTarefa.id = this.numName.toString();
                        var pTarefa = document.createElement("p");
                        pTarefa.innerHTML = this.tarefaEscrita;
                        boxTarefa.appendChild(pTarefa);
                        boxTarefa.appendChild(botaoExcluiTarefa);
                        if (this.tarefas)
                            this.tarefas.appendChild(boxTarefa);
                        this.inputTarefa.value = "";
                        this.inputTarefa.focus();
                        this.numName++;
                    }
                }
                else {
                    alert("Insira uma tarefa no imput!");
                }
            });
    }
    removerTarefa() {
        window.addEventListener("click", (e) => {
            console.log("Cliquei");
            if (e.target && e.target instanceof HTMLButtonElement) {
                let info = e.target.id;
                if (info) {
                    let tarefaPraExcluirColection = document.getElementsByClassName(info);
                    let tarefaPraExcluir = tarefaPraExcluirColection[0];
                    if (tarefaPraExcluir.parentNode)
                        tarefaPraExcluir.parentNode.removeChild(tarefaPraExcluir);
                }
            }
        });
    }
}
new ToDolist().criarTarefa();
