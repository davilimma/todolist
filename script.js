document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

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

      const checkbox = li.querySelector(".task-checkbox");
      const taskSpan = li.querySelector(".task-text");
      const deleteButton = li.querySelector(".delete-btn");

      checkbox.addEventListener("change", () => {
        taskSpan.classList.toggle("completed-text");
        li.classList.toggle("completed");
      });

      deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
      });
    }
  }

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
