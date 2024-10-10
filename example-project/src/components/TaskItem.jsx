
import React from 'react';

/* 

function TaskItem(...) {: Define el componente funcional TaskItem. Este componente recibe dos props que se desestructuran directamente en la firma de la función:
task: Un objeto que contiene la información de una tarea, como su nombre y si está completada o no.
toggleTask: Una función que probablemente sirve para marcar una tarea como completada o desmarcarla. Se invoca cuando se hace clic en el ítem de la lista.

*/
function TaskItem({ task, toggleTask }) {
  return (
    /* 
    
    <li>: Este es un elemento HTML que representa un ítem de una lista no ordenada. En este caso, cada tarea será un elemento de lista.

    onClick={() => toggleTask(task.id)}: Aquí se define un manejador de eventos de clic (un onClick). Cuando el usuario hace clic en el ítem de la lista (<li>), se ejecuta la función toggleTask pasando como argumento el id de la tarea (task.id).

    toggleTask(task.id): La función toggleTask cambiará el estado de la tarea, probablemente entre "completada" y "no completada". Al pasarle el id de la tarea, se asegura que la acción se realiza en la tarea correcta.
        
    */
    <li onClick={() => toggleTask(task.id)}>
      {/* 
      
      <span>: Este es un elemento HTML en línea que envuelve el texto del nombre de la tarea.

      style={{ textDecoration: task.completed ? 'line-through' : 'none' }}: Aquí se aplica un estilo en línea usando el atributo style de JSX. El estilo depende de si la tarea está completada:

      task.completed ? 'line-through' : 'none': Se evalúa la propiedad task.completed. Si es true (la tarea está completada), se aplica el estilo line-through (una línea que atraviesa el texto, indicando que la tarea ha sido realizada). Si es false (la tarea no está completada), no se aplica ningún subrayado (se deja con none).
            
      */}
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
    </li>
  );
}

export default TaskItem;
