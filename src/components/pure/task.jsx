import React from 'react';

const TaskElement = ({task,index,remove,complete}) => {
    function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    return (
        <div className=' p-4 my-3' style={{backgroundColor:'lightgreen'}}>
            <p>{index+1}</p>
            <h4>{task.name}</h4>
            <p>{task.description}</p>
            <i>{task.level}</i>
            <i>{task.completed}</i>
            {taskCompletedIcon()}
            <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(task)}></i>
        </div>
    );
}

export default TaskElement;
