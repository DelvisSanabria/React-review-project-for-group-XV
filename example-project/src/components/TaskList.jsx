
import React from 'react';
import TaskItem from './TaskItem';

/* 

function TaskList(...) {: Aquí se define un componente funcional de React llamado TaskList. Este componente acepta dos props que son desestructuradas directamente en la firma de la función:
tasks: Un arreglo de tareas, donde cada tarea es un objeto que probablemente contiene al menos id, name, y completed (aunque puede tener más propiedades).
toggleTask: Una función que se usa para marcar o desmarcar una tarea como completada. Se pasa como prop para que cada TaskItem pueda invocarla.

*/
function TaskList({ tasks, toggleTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
        /* 
        
        <TaskItem ... />: Por cada tarea, se renderiza un componente TaskItem. Este componente se encarga de mostrar la tarea y manejar las acciones relacionadas (como marcarla como completada).

        key={task.id}: La propiedad key es obligatoria en React cuando se renderizan listas de elementos. Debe ser única para cada ítem en la lista, y en este caso se utiliza el id de la tarea como la clave única. React usa la clave para identificar qué elementos han cambiado, se han agregado o eliminado de la lista, lo que optimiza la actualización del DOM.

        task={task}: Aquí se pasa el objeto task como prop al componente TaskItem. Esto permite que el componente TaskItem tenga acceso a toda la información sobre la tarea, como su nombre, estado de completado, etc.

        toggleTask={toggleTask}: Se pasa la función toggleTask como prop para que TaskItem pueda invocar esta función cuando se necesite cambiar el estado de la tarea (marcarla como completada o desmarcarla).

        */
      ))}
    </ul>
  );
}

export default TaskList;
