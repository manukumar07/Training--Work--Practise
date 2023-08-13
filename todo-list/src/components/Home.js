import React, { useState } from 'react';
import './Home.css';
import { FaPencilAlt,FaTrash} from 'react-icons/fa';

const Home = () => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(null);
  const [editTodoText, setEditTodoText] = useState('');

  // store data in local storage

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  //   setTodos(storedTodos);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  // add a todo function
  const addTodo = () => {

    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  // delete a todo function
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const startEdit = (id, text) => {
    setEditTodo(id);
    setEditTodoText(text);
  };

  const saveEdit = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: editTodoText } : todo
    );
    setTodos(updatedTodos);
    setEditTodo(null);
    setEditTodoText('');
  };

  return (
    <div className="todo-list">
      <h1>To-do List</h1>
      <div className="input-container">
        <input type="text" placeholder="Add a task.." value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={addTodo}>Add..</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editTodo === todo.id ? (
              <>
                <input type="text" className='edit' value={editTodoText} onChange={(e) => setEditTodoText(e.target.value)}/>
                <button onClick={() => saveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                {todo.text}
                <FaPencilAlt
                className="edit-icon" onClick={() => startEdit(todo.id, todo.text)}/>
                <FaTrash
                className="delete-icon" onClick={() => deleteTodo(todo.id)} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;



