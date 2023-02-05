/**
 * - transferir esses dados para tabela
 */

const form = document.querySelector("#form-create-task");
const tbodyTasks = document.querySelector("#tbody-tasks");

const KEY_TASKS_LOCAL_STORAGE = "tasks";

const tasks = [];

form.addEventListener("submit", (event) => {
    //previne que o submit do formulário atualize a página
    event.preventDefault();

    //pega os dados do formulário
    const { what, who, when, how, why, howmuch} = form;

    // insere um objeto no array tasks
    tasks.push({
        what: what.value,
        who: who.value,
        when: when.value,
        how: how.value,
        why: why.value,
        howmuch: howmuch.value
    });

    //zera os campos do formulário
    form.reset();
    

    //atualizar a tabela
    updateViewTable(tasks);
    //salva toda minha lista no local storage
    //saveTasksLocalStorage();
});

function updateViewTable(listaTarefas) {
    //zerar tbody
    tbodyTasks.innerHTML = "";

    //percore a lista para criar as tr's
    listaTarefas.forEach((tarefa, index) => {
        //criar tr (tag)
        const trElement = document.createElement("tr");

        //insere as colunas (td) dentro da tr (linha) criada
        trElement.innerHTML = `
         <td>${index + 1}</td>
            <td>${tarefa.what}</td>
            <td>${tarefa.who}</td>
            <td>${tarefa.when}</td>
            <td>${tarefa.how}</td>
            <td>${tarefa.why}</td>
            <td>${tarefa.howmuch}</td>
            
        `;

        //insere a tr dentro do tbody
        tbodyTasks.appendChild(trElement);
    });
}

function saveTasksLocalStorage() {
    const listTasksString = JSON.stringify(tasks);
    localStorage.setItem(KEY_TASKS_LOCAL_STORAGE, listTasksString);
}