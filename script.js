document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  // Função para adicionar uma nova tarefa
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
                <div class="task-content">
                    <input type="checkbox" class="task-checkbox">
                    <span class="task-text">${taskText}</span>
                </div>
                <button class="delete-btn">x</button>
            `;
      taskList.appendChild(li);
      taskInput.value = "";

      // Pega as referências do checkbox e do span do texto
      const checkbox = li.querySelector(".task-checkbox");
      const taskSpan = li.querySelector(".task-text"); // Apenas o span com o texto
      const deleteButton = li.querySelector(".delete-btn");

      // Adiciona evento de mudança para o checkbox
      checkbox.addEventListener("change", () => {
        taskSpan.classList.toggle("completed-text"); // Aplica o tachado APENAS ao span do texto
        li.classList.toggle("completed"); // Mantém a classe 'completed' no LI para outros estilos (ex: background)
      });

      // Adiciona evento de clique para o botão de excluir
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
      });
    }
  }

  // Adiciona tarefa ao clicar no botão "Adicionar"
  addButton.addEventListener("click", addTask);

  // Adiciona tarefa ao pressionar a tecla "Enter" no campo de input
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
