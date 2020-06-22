document.addEventListener('DOMContentLoaded', function() {
  const newTodoInput = document.getElementById('newTodo'); //입력한 창
  const todoList = document.getElementById('todoList'); //결과 리스트
  const addTodo = document.getElementById('addTodo'); //버튼
  
  addTodo.addEventListener('click', function() {
    let currentTodoList = todoList.innerHTML;
    currentTodoList += `<li>${newTodoInput.value}</li>`;
    console.log('currentTodoList : ', currentTodoList)
    todoList.innerHTML = currentTodoList;
    
    newTodoInput.value = '';
  });
})
