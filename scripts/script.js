const input = document.querySelector("input");
const add_task_button = document.getElementById("add_task");
const todo_list = document.getElementById("todos");
const display_todo_section = document.getElementById("display_todo");
const task_count = document.getElementById("task-count");

let tasks = [];

let addTask = () => {
  if (input.value) {
    tasks.push({ task: input.value, done: false });
    input.value = "";
    renderTasks();
  }
};

let renderTasks = () => {
  display_todo_section.style.display = "flex";
  todo_list.innerHTML = "";
  not_done_tasks = tasks.filter((task) => !task.done);
  task_count.innerHTML = not_done_tasks.length;
  not_done_tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `<span class="task">
                        ${task.task}
                    </span>
                    <button class="completed"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                            fill="currentColor" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <polyline points="216 72 104 184 48 128" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                        </svg></button>
                    <button class="delete" onclick="deleteTask(${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                            viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <line x1="216" y1="56" x2="40" y2="56" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                            <line x1="88" y1="24" x2="168" y2="24" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                            <path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
                        </svg>
                    </button>`;
    todo_list.appendChild(li);
  });
};
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
input.addEventListener("input", () => {
  add_task_button.removeAttribute("disabled");
});
add_task_button.addEventListener("click", addTask);
