import React, { useState } from 'react';

function ToDoList() {
    const [task, setTask] = useState(["eat Breakfast", "study", "go to sleep"]);
    const [newtask, setNewTask] = useState("");

    function handleChange(event) {
        setNewTask(event.target.value);
    }

    function addtask() {
        if (newtask.trim() !== "") {
            setTask(t => [...t, newtask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }

    function movetaskup(index) {
        if (index > 0) {
            const updatedTasks = [...task];
            [updatedTasks[index - 1], updatedTasks[index]] = 
            [updatedTasks[index], updatedTasks[index - 1]];
            setTask(updatedTasks);
        }
    }

    function movetaskdown(index) {
        if (index < task.length - 1) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return (
        <div className="todolist">
            <h1>To Do List</h1>
            <div>
                <input 
                    type="text"
                    placeholder="Enter a task"
                    value={newtask}
                    onChange={handleChange}
                />
                <button 
                    className="addtask"
                    onClick={addtask}
                >
                    Add Task
                </button>
            </div>
            <ul>
                {task.map((item, index) => (
                    <li key={index}>
                        <span className="task">{item}</span>
                        <button 
                            className="remove"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button 
                            className="moveup"
                            onClick={() => movetaskup(index)}
                        >
                            Move Up
                        </button>
                        <button 
                            className="movedown"
                            onClick={() => movetaskdown(index)}
                        >
                            Move Down
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;