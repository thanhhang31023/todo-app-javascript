const tasks = [];

const taskList = document.querySelector("#task-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

todoForm.onsubmit = function (e) {
    e.preventDefault();

    const value = todoInput.value.trim();

    if (!value) {
        return alert("Please write something!");
    }

    const newTask = {
        title: value,
        completed: false,
    };

    tasks.push(newTask);

    // re-render
    render();

    // clear input
    todoInput.value = "";
};

function render() {
    const html = tasks
        .map(
            (task) => `
    <li class="task-item ${task.completed ? "completed" : ""}">
        <span class="task-title">${task.title}</span>
        <div class="task-action">
            <button class="task-btn edit">Edit</button>
            <button class="task-btn done">${
                task.completed ? "Mark as undone" : "Mark as done"
            }</button>
            <button class="task-btn delete">Delete</button>
        </div>
    </li>
`
        )
        .join("");

    taskList.innerHTML = html;
}

render();
