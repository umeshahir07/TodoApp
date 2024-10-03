import React, { useState } from 'react';
import './TodoList.css'; // Import the CSS 

const TodoList = ({ onLogout }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState('');
  const [message, setMessage] = useState(''); // State for success messages

  const addTask = (e) => {
    e.preventDefault();
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
      setMessage('Task added successfully!');
      clearMessage();
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setMessage('Task deleted successfully!');
    clearMessage();
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  };

  const updateTask = (e) => {
    e.preventDefault();
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = editTask;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTask('');
    setMessage('Task updated successfully!');
    clearMessage();
  };

  // Function to clear the message after 3 seconds
  const clearMessage = () => {
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div>
      <h2>Todo List</h2>

      {/* Display success message */}
      {message && <p className="success-message">{message}</p>}

      <form onSubmit={editIndex !== null ? updateTask : addTask}>
        <input
          type="text"
          value={editIndex !== null ? editTask : newTask}
          onChange={(e) => (editIndex !== null ? setEditTask(e.target.value) : setNewTask(e.target.value))}
          placeholder={editIndex !== null ? 'Edit task' : 'Add a new task'}
          required
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>

      <button onClick={onLogout}>Logout</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => startEdit(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
