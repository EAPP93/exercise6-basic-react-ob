import React from 'react';
import Taskslist from '../../components/container/tasksList';

const Profilepage = ({logged,logger}) => {
    return (
        <div style={{backgroundColor:'#D2FBFF', display:'flex', flexDirection:'column',alignItems:'center'}}>
            <h2>hola mi perfil</h2>
            <Taskslist></Taskslist>
            {logged ? <button onClick={()=>{logger(false)}} style={{padding:'10px 100px',borderRadius:'15px', margin:'20px', backgroundColor:'greenyellow'}}>logout</button>: <p>please logger</p>}
        </div>
    );
}

export default Profilepage;
