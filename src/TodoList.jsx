function TodoList() {
  const todoList = [
    {id: 1, title: "Item 1"},
    {id: 2, title: "Item 2"},
    {id: 3, title: "Item 3"},
  ]

  return (
    <ul>
      {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  );
}

export default TodoList;