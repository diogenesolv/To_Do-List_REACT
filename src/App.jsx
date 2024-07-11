import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [textareavalue, setTextareaValue] = useState('')

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '',
      description: ''
    },
    // {
    //   id: 2,
    //   title: '',
    //   description: ''
    // },
    // {
    //   id: 3,
    //   title: '',
    //   description: ''
    // }
  ])
  function handleAddNewTodo(event){
    event.preventDefault()

    setTodos((todos) => {
      const newTodo = {
        title: inputValue,
        description: textareavalue
      }
      return[ ...todos, newTodo]
    })

    setInputValue('')
    setTextareaValue('')


  }

  function handleRemoveTodo(id){
    const newTodoList = todos.filter((todo) => todo.id !== id )
    setTodos(newTodoList)
  }

  return (
    <>
    <header>
      <h1>ToDo List</h1>
    </header>

    <main>
      <div>
        <form onSubmit={handleAddNewTodo}>
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" placeholder='Adicionar um titulo' 
          className='Todo-input' />

          <textarea value={textareavalue} onChange={(event) => setTextareaValue(event.target.value)} type="text" placeholder='Adicionar uma descrição' 
          className='Todo-textarea' />

          <button type="submit">Adicionar</button>
        </form>
      </div>
      <div className='todo-list-container'>
          {todos?.map((todo, index) => (
            <div key={index}>
              <input type="checkbox" id={todo.title} onClick={() => handleRemoveTodo(todo.id)} />
              <label htmlFor={todo.title}>{todo.title}</label>
              <p>{todo.description}</p>
            </div>
          ))}
      </div>
    </main>

    <footer>
      <p>&copy; Todos os direitos reservados.</p>
    </footer>


    </>
  )
}

export default App
