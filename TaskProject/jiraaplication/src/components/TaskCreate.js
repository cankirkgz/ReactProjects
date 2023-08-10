import {useState} from "react";
import { useContext } from 'react';
import TasksContext from '../context/Task';
function TaskCreate({ task, isTaskUpdate, onUpdate}) {
    const{createTask, editTaskByID} = useContext(TasksContext)

    const [title, settitle] = useState(isTaskUpdate ? task.title : '')
    const [taskDesc, settaskDesc] = useState(isTaskUpdate ? task.taskDesc : '')
    const handleTitleChange = (event) => {
        settitle(event.target.value);
    }
    const handleTaskChange = (event) => {
        settaskDesc(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isTaskUpdate) {
            onUpdate(task.id, title, taskDesc);
        } else {
            createTask(title, taskDesc);
        }
        settitle('');
        settaskDesc('');
    }
    return ( 
        <div>
            {
            isTaskUpdate ? 
            <div className="task-update-div">
                <h3>Lütfen taskı düzenleyiniz.</h3>
                <form className="task-form">
                    <label className="task-label">Başlığı düzenleyiniz</label>
                    <input value={title} onChange={handleTitleChange} className="task-input"></input>
                    <label className="task-label">Taskı düzenleyiniz</label>
                    <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5} ></textarea>
                    <button className="task-button" onClick={handleSubmit}>Güncelle</button>
                </form>
            </div> :
            <div className="task-create-div">
                <h3>Lütfen task ekleyiniz.</h3>
                <form className="task-form">
                    <label className="task-label">Başlık</label>
                    <input value={title} onChange={handleTitleChange} className="task-input"></input>
                    <label className="task-label">Task Giriniz!</label>
                    <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5} ></textarea>
                    <button className="task-button" onClick={handleSubmit}>Oluştur</button>
                </form>
            </div> 
            }
        </div>
        
    );
}

export default TaskCreate;