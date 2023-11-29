 // Step 1
 const taskInput = document.getElementById('taskInput');
 const addTaskBtn = document.getElementById('addTaskBtn');
 const taskList = document.getElementById('taskList');

 // Step 2
 let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

 // Step 3
 function buildTaskItem(task) {
     const listItem = document.createElement('li');
     const textNode = document.createTextNode(task.name);
     listItem.appendChild(textNode);
     taskList.appendChild(listItem);

     // Step 4
     if (task.checked) {
         listItem.classList.add('ready');
     }

     // Step 5
     listItem.addEventListener('click', function() {
         listItem.classList.toggle('ready');
         task.checked = !task.checked;
         saveTasks();
     });
 }

 // Step 6
 function buildTaskList() {
     tasks = [];
     const listItems = document.querySelectorAll('#taskList li');
     listItems.forEach(item => {
         const task = {
             name: item.textContent,
             checked: item.classList.contains('ready')
         };
         tasks.push(task);
     });
     saveTasks();
 }

 // Step 7
 function saveTasks() {
     localStorage.setItem('tasks', JSON.stringify(tasks));
 }

 // Step 8
 window.addEventListener('load', function() {
     // Load tasks from local storage on page refresh
     tasks.forEach(task => {
         buildTaskItem(task);
     });

     // Add event listener for adding new tasks
     addTaskBtn.addEventListener('click', function() {
         const newTaskName = taskInput.value.trim();
         if (newTaskName !== '') {
             const newTask = {
                 name: newTaskName,
                 checked: false
             };
             tasks.push(newTask);
             buildTaskItem(newTask);
             taskInput.value = '';
             saveTasks();
         }
     });
 });

//  localStorage.clear()
