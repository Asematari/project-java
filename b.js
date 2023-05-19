const prompt=require("prompt-sync")({sigint:true}); 
function Task(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
  var taskList = [];
  function addTask() {
    console.log("Enter task details:");
    var description = prompt("Description:");
    var dueDate = prompt("Due Date:");
    var priority = prompt("Priority (low, medium, high):");
    var newTask = new Task(description, dueDate, priority);
    taskList.push(newTask);
    console.log("Task added successfully!");
  }
  
  function listAllTasks() {
    console.log("All tasks:");
    taskList.forEach(function(task, index) {
      console.log(`Task ${index + 1}:`);
      console.log("Description:", task.description);
      console.log("Due Date:", task.dueDate);
      console.log("Priority:", task.priority);
      console.log("Completed:", task.completed);
    });
  }
  
  function listCompletedTasks() {
    console.log("Completed tasks:");
    var completedTasks = taskList.filter(function(task) {
      return task.completed === true;
    });
    completedTasks.forEach(function(task, index) {
      console.log(`Task ${index + 1}:`);
      console.log("Description:", task.description);
      console.log("Due Date:", task.dueDate);
      console.log("Priority:", task.priority);
      console.log("------------------------");
    });
  }
  
  function markTaskAsDone() {
    console.log("Enter task number to mark as done:");
    var taskNumber = prompt("Task Number:");
    var index = taskNumber - 1;
    if (index >= 0 && index < taskList.length) {
      taskList[index].completed = true;
      console.log("Task marked as done!");
    } else {
      console.log("Invalid task number!");
    }
  }
  
  function deleteTask() {
    console.log("Enter task number to delete:");
    var taskNumber = prompt("Task Number:");
    var index = taskNumber - 1;
    if (index >= 0 && index < taskList.length) {
      taskList.splice(index, 1);
      console.log("Task deleted successfully!");
    } else {
      console.log("Invalid task number!");
    }
  }
  
  function sortTasksByDueDate() {
    taskList.sort(function(a, b) {
      var dateA = new Date(a.dueDate);
      var dateB = new Date(b.dueDate);
      return dateA - dateB;
    });
  
    console.log("Tasks sorted by due date!");
  }
  
  function sortTasksByPriority() {
    var priorityOrder = {
      low: 1,
      medium: 2,
      high: 3
    };
  
    taskList.sort(function(a, b) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  
    console.log("Tasks sorted by priority!");
  }
  
  function clearAllTasks() {
    taskList = [];
    console.log("All tasks cleared");
  }
  
  function displayMenu() {
    console.log("Welcome to JS TODO-APP");
    console.log("***************************");
    console.log("Select an action:");
    console.log("1) Add a new task");
    console.log("2) List all tasks");
    console.log("3) List completed tasks");
    console.log("4) Mark a task as done");
    console.log("5) Delete a task");
    console.log("6) Sort tasks by due date");
    console.log("7) Sort tasks by priority");
    console.log("8) Clear all tasks");
  }
  function startApp() {
    displayMenu();
    var choice = prompt("Enter your choice:");
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        listAllTasks();
        break;
      case "3":
        listCompletedTasks();
        break;
      case "4":
        markTaskAsDone();
        break;
      case "5":
        deleteTask();
        break;
      case "6":
        sortTasksByDueDate();
        break;
      case "7":
        sortTasksByPriority();
        break;
      case "8":
        clearAllTasks();
        break;
      default:
        console.log("Invalid choice! Please try again.");
    }
  }
  startApp();
  