import './App.css'

function App() {
  const todoList = [
    {id: 1, title: "Item 1"},
    {id: 2, title: "Item 2"},
    {id: 3, title: "Item 3"},
  ]

  return (
    <div>
      <h1>My Tasks</h1>
      <ul>
        {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default App
