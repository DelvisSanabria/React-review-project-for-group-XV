// src/pages/Dashboard.js
import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import useTasks from '../hooks/useTasks';

function Dashboard() {
  const { tasks, addTask, toggleTask } = useTasks();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="dashboard">
      <h2>Vamos a crear una nueva tarea</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Agrega una nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar tareas</button>
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default Dashboard;
