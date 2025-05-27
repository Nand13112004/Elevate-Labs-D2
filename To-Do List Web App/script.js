const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const pendingTaskList = document.getElementById('pending-task-list');
const completedTaskList = document.getElementById('completed-task-list');

function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.className = 'complete-btn';

  completeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    pendingTaskList.removeChild(li);
    li.removeChild(completeBtn);
    li.classList.add('completed');
    completedTaskList.appendChild(li);
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (li.parentElement) {
      li.parentElement.removeChild(li);
    }
  });

  li.appendChild(completeBtn);
  li.appendChild(removeBtn);

  return li;
}

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const taskElement = createTaskElement(taskText);
  pendingTaskList.appendChild(taskElement);
  taskInput.value = '';
});
