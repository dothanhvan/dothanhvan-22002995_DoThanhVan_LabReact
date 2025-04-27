import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/todoSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', textAlign: 'center' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              margin: '10px 0'
            }}
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ cursor: 'pointer', marginRight: '10px' }}
            >
              {todo.text}
            </span>
            <button style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              margin: '10px 0'
            }} onClick={() => dispatch(toggleTodo(todo.id))}>Hoàn thành</button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
