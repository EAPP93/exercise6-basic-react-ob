import React from 'react';
import { Outlet } from 'react-router-dom';
import Loginform from './form/loginForm';

const Protectedroute = ({logged, verifyingCredentials}) => {
    return (
        logged ? <Outlet/> : <Loginform verifyingCredentials={ verifyingCredentials }/>
    );
}

export default Protectedroute;
