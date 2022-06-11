import './todo.css';
import { useState } from 'react';


const Todo = () => {
    
    const [task, setTask] = useState({});
    const [allTasks, setAllTasks] = useState([]);

    const saveTask = () => {
        console.log('Saving Task');

        let copy = [...allTasks];
        copy.push(task);
        setAllTasks(copy);
        console.log(allTasks);
    }

    const addTask = (e) => {
        let title = e.target.name;
        let desc = e.target.description;

        let copy = { ...task };
        copy[title] = desc;
        setTask(copy)
    };

    return(
        <div className="todo-page">
        
            <h3>Shopping list</h3>
                <div className="container">
                    <div className="register-task">
                        <input type="text" name='title' onChange={addTask} placeholder='Task Name' />
                        <input type="text" name='description' onChange={addTask} placeholder='Task Description' />
                        <button onClick={saveTask}>Create Task</button>
                        <hr />
                    </div>
                        <ul>
                            {allTasks.map((t, index) => <li key={index}>{t.title}</li>)};
                        </ul>
                    <div className="display-task">

                    </div>
                </div>
        </div>
    );
};

export default Todo;