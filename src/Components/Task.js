import { BsFillTrashFill } from 'react-icons/bs'
import {BsPeopleCircle} from 'react-icons/bs'
import  moment from 'moment'

const Task = ({ task, onDelete, onEdit }) => {

    return (
        <div className='task' onDoubleClick = {() => onEdit(task.id)} >
            <div><BsPeopleCircle /> {task.assigned}  {' '} </div>
            <p>  Task:{' '} 
            {task.taskName} {' '} 
            
            </p>
            <h4>{moment(task.date).format('DD/MM/YYYY')}
             <BsFillTrashFill  onClick = { ()=> onDelete(task.id)} style={{color: 'red' , cursor:'pointer'}} /></h4>
        </div>
    )
}

export default Task