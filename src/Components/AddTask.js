import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [taskName, setTaskName] = useState(() => '');
    const [date, setDate] = useState(() => new Date());
    const [assigned, setAssigned] = useState(() => '');
    const [priority,setPriority] = useState(() => 'Low');

    const onSubmit= (e) => {
        e.preventDefault();
        if(!taskName){
            alert('Please add task');
            return
        }
        onAdd({taskName, date, assigned, priority});

        setTaskName('');
        setDate(new Date());
        setAssigned('');
        setPriority("Low");
    }
  
    return (
        <form className="add-form " onSubmit={onSubmit}>
            <div className="form-control form-control-flex" >
                <label>Task</label>
                <input type='text' placeholder='Add new Task' id='taskNameId'
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} />
            </div>
            <div className="form-control form-control-flex">
                <label>Assign</label>
                <input type='text' placeholder='Assigned to' 
                value={assigned} 
                onChange={(e) => setAssigned(e.target.value)} />
            </div>
            <div className="form-control form-control-flex">
                <label> Due Date</label>
                <input type='date' placeholder='Select Date' 
                value={date} 
                onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-control form-control-check" >
                <label>Priority</label>
                <input type="radio" value="Low" name="priority" onChange={(e) => setPriority(e.target.value)} />Low
                <input type="radio" value="Medium" name="priority" onChange={(e) => setPriority(e.target.value)}/> Medium
                <input type="radio" value="High" name="priority" onChange={(e) => setPriority(e.target.value)}/> High
            </div>
            <div className="form-control form-control-flex">
                <label> </label>
                <input type='submit' value='Save Task' className='btn btn-block'/>
            </div>
        </form>
    )
}

export default AddTask
