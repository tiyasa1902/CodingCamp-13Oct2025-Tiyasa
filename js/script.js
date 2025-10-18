///Databese simulation
let tasksDB = [];

///Add functionality
function addTasks() {
    ///Get input values
    const taskInput = document.getElementById ('todo-input');
    const taskDate = document.getElementById ('todo-date');

    if (!validateInput(taskInput.value, taskDate.value)) {
       ///Create new task object
        const newTask = {
            task: taskInput.value,
            date: taskDate.value
        }
        ///Add to database
        tasksDB.push(newTask);

        renderTasks

        ///Clear input fields
        taskInput.value ='' ;
        taskDate.value ='' ;
    }
}

function renderTasks() { 
    const taskList = document.getElementById('todo-list');
    taskList.innerHTML = '';
    
    tasksDB.forEach((taskObj, index) => {
        taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date}
        <button onclick="deleteTask(${index})">Delete</button>
        </li>`;
    });
}

function deleteAllTasks() {
    tasksDB = [];
    renderTasks();
}
 

function filterTasks() {
    const filterDate = document.getElementById('filter-date').value;

 }

function validateInput(task,date) {
    if (task.trim() === '' || date.trim() === '') {
        alert('Please enter both a task and a date');
        return false;
    }
    return true;
}