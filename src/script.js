const taskInput = document.querySelector("#task");
const btn = document.querySelector("#btn");
const taskContainer = document.querySelector("#task-container");

btn.addEventListener("click", () => {
    if (taskInput.value === "") {
        alert("There is no input!");
    } else {
        const card = document.createElement("div");
        const btnContainer = document.createElement("div");

        const task = document.createElement("span");
        const editBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");

        task.textContent = taskInput.value; 
        task.setAttribute("class", "font-bold mr-36");
        editBtn.textContent = "Change Status";
        editBtn.setAttribute("class", "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 transition ease-out duration-300");
        deleteBtn.textContent = "Remove Task";
        deleteBtn.setAttribute("class", "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 transition ease-out duration-300");

        editBtn.onclick = () => {
            task.classList.toggle("finish");
        };
        deleteBtn.onclick = () => {
            card.remove();
        }
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);

        card.appendChild(task);
        card.appendChild(btnContainer);
        card.setAttribute("class", "flex justify-between");

        taskContainer.appendChild(card);

        taskInput.value = "";
    }
});

