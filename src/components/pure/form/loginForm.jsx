import React from 'react';
import  { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const loginSchema = yup.object().shape(
    {
        email: yup.string()
            .email('Invalid email')
            .required('email is requiered'),
        password: yup.string()
            .required('password description is required'),
    }
)

const Loginform = () => {

    function verifyingCredentials(values) {
        
        alert('hola')
        let user = JSON.parse(localStorage.getItem('credentials', values));
        alert('datos user' + user)
        values.email === 'empireeapp@gmail.com' && values.password === 'pass' ? alert('loggeado') : alert('nell')
    }

    let initualValues = {
        email: '',
        pass: ''
    }

    
    return (
        <Formik
            initialValues = { initualValues }
            validationSchema = { loginSchema }
            onSubmit={ (values) => {
                    alert(JSON.stringify(values))
                    verifyingCredentials(values)
                }}
        >
                <Form>
                    <label htmlFor="email">email</label>
                    <Field className='mb-2' id="email" type="text" name="email" placeholder="Enter your email" />
                    {/* emailErrors */}
                    {<ErrorMessage name="email" component='div'></ErrorMessage>}

                    <label htmlFor="password">password</label>
                    <Field className='mb-2' id="password" type="text" name="password" placeholder="Enter your password" />
                    {/* password Errors */}
                    {<ErrorMessage name="password" component='div'></ErrorMessage>}

                    <button type="submit" className='btn btn-primary ' >Loging</button>
                </Form>
            
        </Formik>
    );
}

export default Loginform;
