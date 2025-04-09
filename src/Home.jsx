import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function Home() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    const token = useSelector(state => state.auth.token);
    const userId = useSelector(state => state.auth.userID);
    const [taskId, setTaskId] = useState('');
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState( { title: '', description: '', userId: userId})

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const fetchTasks = async () => {
        try {
            const res = await axios.get(`${process.env.API_URL}/${userId}`, {headers})
            setTask(res.data || []);
            console.log(res.data)
        } catch(err){
            alert('failed to get task')
            setTask(null);
        }
    }

    const handleAddTask= async () => {
        try {
            const res = await axios.post(`${process.env.API_URL}`, newTask, {headers})
            setTask(prev => [...prev, res.data])
            setNewTask({ title: '', description: '', userId: userId});
            alert('task added successfully');
        } catch(err){
            alert('failed to add task')
        }
    }

    const handleDeleteTask = async (id) => {
        try {
            await axios.delete(`${process.env.API_URL}/${id}`, {headers})
            alert('task deleted');
            fetchTasks();
        } catch(err){
            alert('failed o delete task')
        }
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return (

        <div>
            <h2>Task Manager</h2>
            <h3>Your Tasks</h3>
            {task?.length === 0 ? (
                <p>No tasks</p>
            ) : (
                <ul>
                {task?.map(task => (
                    <li key={task.id}>
                    <strong>{task.title}</strong>: {task.description}
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
                </ul>
            )}

            <hr />

            <div>
                <h4>Create New Task</h4>
                <input
                placeholder="Title"
                value={newTask.title}
                onChange={e => setNewTask({ ...newTask, title: e.target.value })}
                />
                <input
                placeholder="Description"
                value={newTask.description}
                onChange={e => setNewTask({ ...newTask, description: e.target.value })}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            <hr />

        </div>
    );
}

export default Home;