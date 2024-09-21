import { v4 as uuidv4 } from "uuid";
class Task {
  tasks: Task[] = [];
  id: string;
  title: string;
  completed: boolean = false;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }
}

class TaskManager {
  tasks: Task[] = [];
  taskContainer: HTMLElement;

  constructor(taskContainer: HTMLElement) {
    this.taskContainer = taskContainer;
  }

  addTask(title: string): void {
    const id = uuidv4();
    const task = new Task(id, title);
    this.tasks.push(task);
    this.renderTasks();
  }

  removeTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.renderTasks();
  }

  renderTasks(): void {
    this.taskContainer.innerHTML = "";
    const ul = this.printTasks();
    this.taskContainer.appendChild(ul);
  }

  printTasks(): HTMLUListElement {
    const ul = document.createElement("ul");

    this.tasks.forEach((task) => {
      const taskLi = document.createElement("li");

      const taskContainer = document.createElement("div");

      taskContainer.classList.add("task");

      taskContainer.classList.add(task.completed ? "completed" : "not-completed");

      const text = document.createElement("p");
      text.textContent = task.title;

      const btn = document.createElement("button");
      btn.textContent = "Delete";
      btn.addEventListener("click", (): void => {
        this.removeTask(task.id);
      });

      const completeBtn = document.createElement("button");
      completeBtn.textContent = task.completed ? "Completed" : "Not Completed";
      completeBtn.addEventListener("click", (): void => {
        task.completed = !task.completed;
        this.renderTasks();
      });


      taskContainer.append(btn);
      taskContainer.append(text);
      taskContainer.append(completeBtn);

      taskLi.append(taskContainer);

      ul.append(taskLi);
    });

    return ul;
  }
}

export default TaskManager;
