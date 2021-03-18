import { useState } from 'react' ;

import Header from './Components/Header';
import Footer from './Components/Footer';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';

function App() {
  //initialise useState hook for task, id and currentId
  const [tasks, setTask] = useState(()=>[]);
  const [id, setId] = useState(() => 1);
  const [currentId, setCurrentId] = useState(0);

  // save task
  const addTask = (task) =>{
    if(currentId !== 0){
      const newTask = {currentId, ...task}
      setTask([...tasks, newTask]);
    }else{
      setId(id+1);
      const newTask = {id, ...task}
      setTask([...tasks, newTask]);
    }
    setCurrentId(0);
  }
 // delete task
  const deleteTask = (id) =>{
    setTask(tasks.filter((task)=> task.id !== id))
  }
//edit task
  const editTask = (id) =>{
    setCurrentId(id);
  }

  return (
    // task form
    <div className="container-flex">
      <div className='container'>
            <Header title="Task Master"/>
            <AddTask onAdd={addTask}  />
            <Footer /> 
      </div>
     {/* task list */}
      <div className='container'>
          <Header title="Task List"/>
          <div className='scroll'>
          {tasks.length > 0 ? 
            (<TaskList tasks={tasks}  onDelete={deleteTask} onEdit = {editTask}  /> )
            : 'No Tasks to Show' }
          </div>
         
      </div>
    </div>
  
  );
}

export default App;
