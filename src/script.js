const taskInput = document.querySelector("#task");
const btn = document.querySelector("#btn");
const taskContainer = document.querySelector("#task-container");

// Initialize tasks from local storage on page load
window.addEventListener("DOMContentLoaded", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => createTaskElement(task));
});

btn.addEventListener("click", () => {
  if (taskInput.value === "") {
    alert("There is no input!");
  } else {
    const task = taskInput.value;
    createTaskElement(task);
    saveTasksToLocalStorage();
    taskInput.value = "";
  }
});

function createTaskElement(task) {
  const card = document.createElement("div");
  const btnContainer = document.createElement("div");

  const taskSpan = document.createElement("span");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  taskSpan.textContent = task;
  taskSpan.setAttribute("class", "font-bold mr-36");
  editBtn.textContent = "Change Status";
  editBtn.setAttribute("class", "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 transition ease-out duration-300");
  deleteBtn.textContent = "Remove Task";
  deleteBtn.setAttribute("class", "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 transition ease-out duration-300");

  editBtn.onclick = () => taskSpan.classList.toggle("finish");
  deleteBtn.onclick = () => {
    card.remove();
    saveTasksToLocalStorage();
  };

  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn);

  card.appendChild(taskSpan);
  card.appendChild(btnContainer);
  card.setAttribute("class", "flex justify-between");

  taskContainer.appendChild(card);
}

function saveTasksToLocalStorage() {
  const tasks = Array.from(taskContainer.querySelectorAll("span")).map(span => span.textContent);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}