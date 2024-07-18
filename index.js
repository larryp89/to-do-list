class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class ToDoManager {
  constructor() {
    this.toDoList = [];
  }

  addToDo(toDo) {
    this.toDoList.push(toDo);
  }

  deleteToDo(toDo) {
    // removes the todo from its location
    const index = this.toDoList.indexOf(toDo);
    if (index > -1) {
      this.toDoList.splice(index, 1);
    }
  }
}

class AppLogic {
  createToDo(title, description, dueDate, priority) {
    const newToDo = new ToDo(title, description, dueDate, priority);
    return newToDo;
  }
}

const toDoManager = new ToDoManager();
const appLogic = new AppLogic();

const addButton = document.querySelector(".add-todo");
const dialog = document.querySelector("#add-todo-dialog");
const formSubmit = document.querySelector("#submit");
const backgroundOverlay = document.querySelector(".background-overlay");

addButton.addEventListener("click", function () {
  dialog.showModal();
  backgroundOverlay.style.display = "block";
});

formSubmit.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const date = document.querySelector("#date").value;
  const priority = document.querySelector("#priority").value;

  if (title && description && date && priority) {
    const toDo = appLogic.createToDo(title, description, date, priority);
    toDoManager.addToDo(toDo);
    console.log(toDoManager.toDoList);
    dialog.close();
  } else {
    alert("Please fill all fields");
  }
});

dialog.addEventListener("close", () => {
  backgroundOverlay.style.display = "none";
});
