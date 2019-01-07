// define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// load event listeners function
function loadEventListeners() {
  // add task list
  form.addEventListener('submit', addTask);
}

// add task function
function addTask(e) {
  if (taskInput.value == '') {
    alert('Add a Task!');
  }

  // create li element
  const li = document.createElement('li');
  // add class to li
  li.className = 'collection-item';
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement('a');
  // add class to link
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link to li
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);

  // clear input
  taskInput.value = '';

  e.preventDefault();
}
