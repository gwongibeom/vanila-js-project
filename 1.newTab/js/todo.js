let todos = JSON.parse(localStorage.getItem('newTabTodoList')) ?? []
const $todolistUl = document.querySelector('.todolist-ul')

const addTodo = (newTodo) => {
  todos = JSON.parse(localStorage.getItem('newTabTodoList')) ?? []
  const newTodos = [newTodo, ...todos]
  localStorage.setItem('newTabTodoList', JSON.stringify(newTodos))
  render()
}

const deleteTodo = (todo) => {
  todos = JSON.parse(localStorage.getItem('newTabTodoList')) ?? []
  const newTodos = todos.filter((item) => String(item) !== String(todo))
  localStorage.setItem('newTabTodoList', JSON.stringify(newTodos))
  render()
}

const render = () => {
  while ($todolistUl.firstChild) {
    $todolistUl.removeChild($todolistUl.firstChild)
  }

  todos = JSON.parse(localStorage.getItem('newTabTodoList')) ?? []
  todos.forEach((todo) => {
    const $todoItem = document.createElement('li')
    const $span = document.createElement('span')
    $span.textContent = todo
    const $button = document.createElement('button')
    $button.textContent = 'X'
    $button.addEventListener('click', (e) => {
      const value = e.target.parentElement.children[0].textContent
      deleteTodo(value)
    })
    $todoItem.appendChild($span)
    $todoItem.appendChild($button)
    $todolistUl.appendChild($todoItem)
  })
}

const todoForm = document.querySelector('.todo-form')
todoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const newTodo = e.target.children[0].value
  addTodo(newTodo)
  e.target.children[0].value = '' // 입력 필드 비우기
})
