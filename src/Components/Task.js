import { BsTrash } from 'react-icons/bs'
import { BsPeopleCircle } from 'react-icons/bs'
import  moment from 'moment'
import { useState } from 'react' ;
import { BsCheckCircle } from 'react-icons/bs'
import { BsPencil } from 'react-icons/bs'

const Task = ({ task, onDelete, onEdit }) => {

    const [statusComplete, setStatusComplete] = useState(()=>'');
    const changeStatus = () => {
        setStatusComplete('Complete');
    }

    return (
        <div className='task' >
            <h5><div><BsPeopleCircle /> {task.assigned}  {' '} </div>
            {statusComplete === 'Complete' ? <div className='green' >Completed</div>: '' }</h5>
            <p>  Task:{' '} 
            {task.taskName} {' '} 
            </p>
            <p>{moment(task.date).format('DD/MM/YYYY')}
                <div >
                    {task.id }{task.priority}
                    <span><BsPencil onClick={()=> onEdit(task.id,task.taskName, task.date, task.assigned, task.priority)}  className='blue' /> </span> 
                    {statusComplete ==='' ? <span><BsCheckCircle onClick={changeStatus} className='green'  /> </span>: ''}
                    <BsTrash  onClick = { ()=> onDelete(task.id)} className='red' />
                </div>
            </p>
        </div>
    )
}

export default Task