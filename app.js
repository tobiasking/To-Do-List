function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerText = taskText;
    taskList.appendChild(li);

    taskInput.value = '';
}
