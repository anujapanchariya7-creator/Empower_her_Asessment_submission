// Key used in localStorage
const TODOS_KEY = "masai_todos";

// DOM elements
const fetchBtn = document.getElementById("fetch-btn");
const todosContainer = document.getElementById("todos-container");
const emptyMessage = document.getElementById("empty-message");

// -------- Core functions --------

// 1. Fetch todos from API and store first 20 in localStorage
async function fetchAndStoreTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json(); // array of todos
    const firstTwenty = data.slice(0, 20);
    saveTodosToLocalStorage(firstTwenty);
    renderTodos(firstTwenty);
  } catch (err) {
    console.error("Error fetching todos:", err);
  }
}

// 2. Save todos array to localStorage
function saveTodosToLocalStorage(todos) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// 3. Get todos array from localStorage
function getTodosFromLocalStorage() {
  const raw = localStorage.getItem(TODOS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

// 4. Delete a todo by id
function deleteTodo(id) {
  let todos = getTodosFromLocalStorage();
  todos = todos.filter((todo) => todo.id !== id);
  saveTodosToLocalStorage(todos);
  renderTodos(todos);
}

// 5. Toggle completed status (bonus)
function toggleTodoCompleted(id) {
  const todos = getTodosFromLocalStorage();
  const updated = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  saveTodosToLocalStorage(updated);
  renderTodos(updated);
}

// 6. Render todos on UI
function renderTodos(todos) {
  todosContainer.innerHTML = "";

  if (!todos || todos.length === 0) {
    emptyMessage.style.display = "block";
    return;
  } else {
    emptyMessage.style.display = "none";
  }

  todos.forEach((todo) => {
    const card = document.createElement("div");
    card.className = "todo-item";
    if (todo.completed) card.classList.add("completed");

    const infoDiv = document.createElement("div");
    infoDiv.className = "todo-info";

    const titleP = document.createElement("p");
    titleP.className = "todo-title";
    titleP.textContent = todo.title;

    const statusP = document.createElement("p");
    statusP.className = "todo-status";
    statusP.textContent = "Status: " + (todo.completed ? "Completed" : "Pending");

    infoDiv.appendChild(titleP);
    infoDiv.appendChild(statusP);

    const actionsDiv = document.createElement("div");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

    // Toggle / Mark Complete button (bonus)
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = todo.completed ? "Mark Pending" : "Mark Complete";
    toggleBtn.addEventListener("click", () => toggleTodoCompleted(todo.id));

    actionsDiv.appendChild(toggleBtn);
    actionsDiv.appendChild(deleteBtn);

    card.appendChild(infoDiv);
    card.appendChild(actionsDiv);

    todosContainer.appendChild(card);
  });
}

// -------- Event listeners & initial load --------

// Button to fetch from API again (overwrites localStorage)
fetchBtn.addEventListener("click", fetchAndStoreTodos);

// On page load, show todos already in localStorage (if any)
window.addEventListener("load", () => {
  const todos = getTodosFromLocalStorage();
  renderTodos(todos);
});
