import delay from './delay';

let todos = [
  {
    id: 'H1fjDs_Yf',
    content: "Discuss Graphic for UCSD Triton"
  },
  {
    id: 'ry7sPodtG',
    content: "Establish Potential Terms and Agreements"
  },
  {
    id: 'Hk-2wiuYz',
    content: "Propose Project Timeline"
  }
];

class TodoApi {
  
  static getAllTodos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], todos));
      }, delay);
    });
  }

  static createTodo(todo) {
    todo = Object.assign({}, todo); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minPostLength = 1;
        if (todo.content.length < minPostLength) {
          reject(`Todo must be at least ${minPostLength} characters.`);
        } else {
          todos.push(todo);
        }
        resolve(todo);
      }, delay);
    });
  }

  static removeTodo(todoId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTodoToDelete = todos.findIndex(t => {
          return t.id == todoId;
        });
        todos.splice(indexOfTodoToDelete, 1);
        console.log(todos);
        resolve(todoId);
      }, delay);
    });
  }
}

export default TodoApi;