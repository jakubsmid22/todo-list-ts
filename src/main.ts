import TaskManager from "./index";
const form = document.getElementById("addTaskForm") as HTMLFormElement;
const textInput = document.getElementById("text") as HTMLInputElement;
const tasksList = document.getElementById("tasksList")!;
const taskManager = new TaskManager(tasksList);

form.addEventListener("submit", (e): void => {
  e.preventDefault();
  const text = textInput.value;
  if (!text) {
    alert("Please enter a text.");
    return;
  } else {
    taskManager.addTask(text);
    taskManager.renderTasks();
  }
  textInput.value = ""; 
});
