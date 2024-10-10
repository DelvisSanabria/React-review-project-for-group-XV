import { useState } from 'react';

// Creamos un hook personalizado llamado useTasks. Este hook administra una lista de tareas.
function useTasks() {
  // Declaramos un estado llamado 'tasks' que contendrá un array de tareas.
  // 'setTasks' es la función que utilizamos para actualizar este estado.
  // Inicialmente, 'tasks' es un array vacío.
  const [tasks, setTasks] = useState([]);

  // Función para agregar una nueva tarea.
  const addTask = (taskName) => {
    // Utilizamos 'setTasks' para actualizar la lista de tareas.
    // Al hacer 'setTasks', agregamos una nueva tarea al array de tareas actual.
    // Para ello, usamos el spread operator [...tasks] para copiar las tareas existentes
    // y luego añadimos un nuevo objeto que representa la nueva tarea.
    // - `id: Date.now()` asegura que cada tarea tenga un identificador único basado en el tiempo actual.
    // - `name: taskName` es el nombre de la tarea que pasamos como parámetro.
    // - `completed: false` establece el estado inicial de la tarea como no completada.
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  };

  // Función para alternar el estado de una tarea (completada o no completada).
  const toggleTask = (taskId) => {
    // Usamos 'setTasks' nuevamente para actualizar la lista de tareas.
    // La idea es encontrar la tarea con el 'id' que coincide con 'taskId' 
    // y cambiar su propiedad 'completed' al valor opuesto.
    setTasks(
      // Iteramos sobre el array de tareas con 'map' para generar un nuevo array.
      tasks.map((task) =>
        // Si encontramos la tarea con el 'id' que coincide con 'taskId':
        task.id === taskId
          // Devolvemos una nueva copia de la tarea, pero con 'completed' invertido.
          ? { ...task, completed: !task.completed }
          // Si no coincide el 'id', devolvemos la tarea tal como está, sin cambios.
          : task
      )
    );
  };

  // El hook retorna un objeto con tres elementos:
  // - 'tasks' que contiene la lista de tareas actuales.
  // - 'addTask', la función para agregar una nueva tarea.
  // - 'toggleTask', la función para alternar el estado de completado de una tarea.
  return { tasks, addTask, toggleTask };
}

export default useTasks;

