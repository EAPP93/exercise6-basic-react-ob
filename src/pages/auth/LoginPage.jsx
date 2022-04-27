import React from 'react';
import Login from '../../components/container/login';

const Loginpage = ({ verifyingCredentials }) => {
    return (
        <div >
            <h1 >Login Page</h1>
            <Login verifyingCredentials={ verifyingCredentials }></Login>
        </div>
    );
}

export default Loginpage;
