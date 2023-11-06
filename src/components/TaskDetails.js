import { useTasksContext } from "../hooks/useTasksContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { BsTrash } from 'react-icons/bs';

const TaskDetails = ({task}) => {

    const { dispatch } = useTasksContext()
    const { user } = useAuthContext()

    const handleClick = async () => {

        if (!user){
            return
        }

        const response = await fetch('https://apicrud-n1uz.onrender.com/api/tasks/' + task._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_TASK', payload: json})
        }
    }
    return(
        <div className="task-details">
            <h4>{task.title}</h4>
            <p><strong>description: </strong>{task.description}</p>
            <p>{task.createdAt}</p>
            <span onClick={handleClick}><BsTrash style={{ display:"flex", justifyContent:"center", fontSize: 25}}/></span>
        </div>

    )
}

export default TaskDetails