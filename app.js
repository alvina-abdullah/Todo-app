const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Add a new task
function addTask() {
  const task = input.value.trim();

  if (task === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => li.remove();

  li.appendChild(taskText);
  li.appendChild(deleteButton);
  list.appendChild(li);

  input.value = ''; // Clear the input
}

// Remove a task (handled inline with the `onclick` above)
