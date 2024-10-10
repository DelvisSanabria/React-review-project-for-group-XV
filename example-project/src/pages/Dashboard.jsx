import React, { useState } from 'react'; // Importamos React y useState de React
import TaskList from '../components/TaskList'; // Importamos el componente TaskList que muestra la lista de tareas
import useTasks from '../hooks/useTasks'; // Importamos el hook personalizado useTasks, que gestiona las tareas

// Componente principal del Dashboard
function Dashboard() {
  // Utilizamos el hook personalizado useTasks para obtener la lista de tareas,
  // la función para agregar tareas (addTask) y la función para alternar el estado de las tareas (toggleTask)
  const { tasks, addTask, toggleTask } = useTasks();

  // Estado local 'newTask' que almacena el valor del input para la nueva tarea.
  // 'setNewTask' es la función para actualizar ese estado.
  const [newTask, setNewTask] = useState('');

  // Función que se ejecuta cuando el usuario hace clic en el botón "Agregar tareas"
  const handleAddTask = () => {
    // Si la tarea ingresada no está vacía (después de quitar los espacios en blanco),
    // se llama a la función 'addTask' del hook useTasks, pasándole el nombre de la nueva tarea.
    if (newTask.trim()) {
      addTask(newTask); // Agrega la tarea a la lista
      setNewTask(''); // Resetea el campo de input para dejarlo vacío después de agregar la tarea
    }
  };

  return (
    <div className="dashboard">
      {/* Título del componente */}
      <h2>Vamos a crear una nueva tarea</h2>
      
      {/* Input controlado para ingresar el nombre de la nueva tarea */}
      <input
        type="text" // El tipo de campo es texto
        value={newTask} // El valor del input está vinculado al estado 'newTask'
        onChange={(e) => setNewTask(e.target.value)} // Actualiza 'newTask' cuando el usuario escribe en el input
        placeholder="Agrega una nueva tarea" // Texto que aparece dentro del input cuando está vacío
      />
      
      {/* Botón para agregar la tarea. Al hacer clic, ejecuta handleAddTask */}
      <button onClick={handleAddTask}>Agregar tareas</button>

      {/* Componente TaskList que muestra la lista de tareas.
          - 'tasks' contiene las tareas actuales.
          - 'toggleTask' es la función que permite alternar el estado de completado de una tarea.
       */}
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default Dashboard;

