import React from 'react';
import Loginform from '../pure/form/loginForm';

const Login = ({ verifyingCredentials }) => {
    return (
        <div style={{width:'30vw', height:'20vh',backgroundColor:'lightblue',margin:'0'}}>
            <Loginform verifyingCredentials={ verifyingCredentials }></Loginform>
        </div>
    );
}

export default Login;
