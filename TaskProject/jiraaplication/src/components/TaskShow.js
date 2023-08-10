import { useState } from "react";
import TaskCreate from "./TaskCreate";

import { useContext } from 'react';
import TasksContext from '../context/Task';

function TaskShow({task}) {
    const{deleteTaskByID, editTaskByID} = useContext(TasksContext)
    const [showEdit, setshowEdit] = useState(false)
    const handleDeleteClick = () => {
        deleteTaskByID(task.id);
    }
    const handleEditClick = () => {
        setshowEdit(!showEdit);
    }
    const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
        setshowEdit(false);
        editTaskByID(id, updatedTitle, updatedTaskDesc);
    }
    return ( 
    <div className="task-show">
        {showEdit ? <TaskCreate task={task} isTaskUpdate={true} onUpdate={handleSubmit}/>: 
        <div>
            <h3>Göreviniz</h3>
            <p>{task.title}</p>
            <h3>Yapılacaklar</h3>
            <p>{task.taskDesc}</p>
            <div>
                <button className="task-show-button task-button-delete" onClick={handleDeleteClick}>Sil</button>
                <button className="task-show-button task-button-update" onClick={handleEditClick}>Güncelle</button>
            </div>
        </div>}
        
    </div> );
}

export default TaskShow;