// Retrieve existing tasks from localStorage or create an empty array if none exist
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// DOM elements
const taskInput = document.getElementById('taskInput');
const taskDeadline = document.getElementById('taskDeadline');
const taskNameInput = document.getElementById('taskName');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const doneTasks = document.getElementById('doneTasks');
const notDoneTasks = document.getElementById('notDoneTasks');

// Function to render tasks in the appropriate section
function renderTasks() {
  taskList.innerHTML = ''; // Clear existing tasks in main list
  doneTasks.innerHTML = ''; // Clear the done tasks
  notDoneTasks.innerHTML = ''; // Clear the not done tasks

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    // Mark completed tasks
    if (task.completed) {
      taskItem.classList.add('completed');
    }

    // Check if the task is overdue
    const currentDate = new Date();
    const taskDeadlineDate = new Date(task.deadline);
    if (!task.completed && currentDate > taskDeadlineDate) {
      taskItem.classList.add('not-done');
    }

    // Task content
    const taskName = document.createElement('p');
    taskName.classList.add('name');
    taskName.innerText = task.name;

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task-description');
    taskDescription.innerText = task.description;

    const deadlineLabel = document.createElement('p');
    deadlineLabel.classList.add('deadline');
    deadlineLabel.innerText = `Due: ${task.deadline}`;

    // Checkbox for completing task
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = task.completed;
    checkBox.addEventListener('change', () => toggleTaskCompletion(index));

    // Remove button for task
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click', () => removeTask(index));

    // Append elements to task item
    taskItem.appendChild(checkBox);
    taskItem.appendChild(taskName);
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(deadlineLabel);
    taskItem.appendChild(removeBtn);

    // Append task item to appropriate section
    if (task.completed) {
      doneTasks.appendChild(taskItem);
    } else {
      notDoneTasks.appendChild(taskItem);
    }
  });
}

// Function to add a new task
function addTask() {
  const taskDescription = taskInput.value.trim();
  const taskDeadlineValue = taskDeadline.value;
  const taskNameValue = taskNameInput.value.trim();

  if (
    taskDescription === '' ||
    taskDeadlineValue === '' ||
    taskNameValue === ''
  ) {
    alert('Please provide a task description, deadline, and your name.');
    return;
  }

  const newTask = {
    name: taskNameValue,
    description: taskDescription,
    deadline: taskDeadlineValue,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  // Clear inputs
  taskInput.value = '';
  taskDeadline.value = '';
  taskNameInput.value = '';
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Function to save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Initialize the app by rendering the tasks on load
renderTasks();
