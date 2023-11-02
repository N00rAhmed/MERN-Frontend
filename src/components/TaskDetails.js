import { useTasksContext } from "../hooks/useTasksContext";

const TaskDetails = ({task}) => {
    const { dispatch } = useTasksContext()
    const handleClick = async () => {
        const response = await fetch('https://apicrud-n1uz.onrender.com/api/tasks/' + task._id, {
            method: 'DELETE'
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
            <span onClick={handleClick}>delete</span>
        </div>

    )
}

export default TaskDetails