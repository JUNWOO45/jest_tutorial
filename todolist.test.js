test('Check addTodo', () => {
  document.addEventListener('DOMContentLoaded', function() {
    document.body.innerHTML = `
      <input id="newTodoInput" />
      <button id="addTodoBtn">Add todo</button>
      <ol id="todoList"></ol>
    `;
    require('./todolist');
  
    const newTodoInput = document.getElementById('newTodoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todolist = document.getElementById('todoList');
  
    newTodoInput.value = 'New todolist!';
    addTodoBtn.click();
  
    expect(todolist.innerHTML).toBe('<li>New todolist!</li>');
  });
});
