import { createContext } from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

const TasksContext = createContext(); 

function Provider({children}){
    const [tasks, settasks] = useState([])
    const createTask = async (title, taskDesc) => {
        const response = await axios.post('http://localhost:3004/tasks',{
        title,
        taskDesc
        });
        const createdTask = [...tasks, 
        response.data];
        settasks(createdTask);
    }
    const fetchTask = async () => {
        const response = await axios.get('http://localhost:3004/tasks')
        settasks(response.data);
    }
    const deleteTaskByID = async (id) => {
        await axios.delete(`http://localhost:3004/tasks/${id}`)
        const afterDeletingTasks = tasks.filter((task) => {
          return task.id !== id;
        });
        settasks(afterDeletingTasks);
    }
    const editTaskByID = async (id, updatedTitle, updatedTaskDesc) => {
        await axios.put(`http://localhost:3004/tasks/${id}`, {
          title:updatedTitle,
          taskDesc:updatedTaskDesc
        })
        const updatedTask = tasks.map((task) => {
          if (task.id === id) {
            return {id, title: updatedTitle, taskDesc: updatedTaskDesc}
          }
          return task;
        });
        settasks(updatedTask);
    }
    const sharedValuesAndMethods = {
        tasks,
        createTask,
        fetchTask,
        deleteTaskByID,
        editTaskByID
    }
    return (
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    )
}

export {Provider};
export default TasksContext;