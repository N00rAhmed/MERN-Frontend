import { useEffect, useState } from "react";
import TaskDetails from '../components/TaskDetails';
import TaskForm from '../components/TaskForm';
import { useTasksContext } from "../hooks/useTasksContext";

const Home = () => {
    const { tasks, dispatch } = useTasksContext();
    const [isLoading, setIsLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('https://apicrud-n1uz.onrender.com/api/tasks');
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: 'SET_TASKS', payload: json });
                }
            } catch (error) {
                console.error("Error fetching tasks:", error);
            } finally {
                setIsLoading(false); // Set loading to false whether successful or not
            }
        };
        fetchTasks();
    }, [dispatch]);

    return (
        <div className="home">
            <div className="tasks">
                {isLoading ? ( // Conditional rendering based on isLoading state while fetching
                    <p>Loading...</p>
                ) : (
                    tasks && tasks.map((task) => (
                        <TaskDetails key={task._id} task={task} />
                    ))
                )}
            </div>
            <TaskForm />
        </div>
    );
};

export default Home;
