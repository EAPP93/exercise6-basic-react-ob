import React,{useEffect,useState} from 'react';
import Taskform from '../pure/form/taskform'
import TaskElement from '../pure/task';

/**impor class */
import {LEVELS} from '../../models/levels.enum.js'
import Task from '../../models/task.class.js';

const Taskslist = () => {

    const task1 = new Task('example', 'this is a example of input text description',false , LEVELS.NORMAL);
    const task2 = new Task('example2', 'this is a example 2 of input text description',false , LEVELS.BLOCKING);
    const task3 = new Task('example3', 'this is a example 3 of input text description',false , LEVELS.URGENTE);

    const [tasks, setTasks] = useState([task1,task2,task3]);

    useEffect(() => {
        return () => {
        };
    }, [tasks]);

    function add(newTask) {
        let temptasks = [...tasks];
        temptasks.push(newTask)
        setTasks(temptasks)
    }

    function remove(task) {
        let index = tasks.indexOf(task);
        let temptasks = [...tasks];
        temptasks.splice(index,1)
        setTasks(temptasks)
    }

    function complete(task) {
        let index = tasks.indexOf(task);
        let temptasks = [...tasks];
        temptasks[index].completed = !temptasks[index].completed
        setTasks(temptasks)
    }

    return (
        <div className='container p-0'>
            <header className='col-12'>
                <Taskform addTask={add}></Taskform>
            </header>
            <main className='col-12 m-0 p-4' style={{backgroundColor:'lightgray'}}>
                {tasks.length <= 0 ? 
                <p>Ingrese una tarea</p> : 
                tasks.map((el,index) => <TaskElement task={el} index={index} remove={remove} complete={complete}></TaskElement>)}
            </main>
        </div>
    );
}

export default Taskslist;
