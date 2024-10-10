// src/components/TaskItem.js
import React from 'react';

function TaskItem({ task, toggleTask }) {
  return (
    <li onClick={() => toggleTask(task.id)}>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
    </li>
  );
}

export default TaskItem;
