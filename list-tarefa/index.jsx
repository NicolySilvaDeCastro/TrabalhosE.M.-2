import './App.css'
import React, {useState, FlatList, View, Text} from 'react'

function App() {
  const tarefas = [
  { id: '1', content: 'Item 1', feito: false },
  { id: '2', content: 'Item 2', feito: false },
  { id: '3', content: 'Item 3', feito: false }
];

export default listaTarefa = (tarefa) => {
  const[tasks, setTasks] = useState(tarefas)
  function Lista(tarefa){
  tasks.find((task)) => tarefa.id == task.id
  task.feito = !task.feito
  }
  setTasks(tasks)
}



    return (
    <>  
<button onPress={()
}></button>
    </>
  )
}

export default App