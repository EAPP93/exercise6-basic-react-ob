import React from 'react';
import {Formik, Form, Field,ErrorMessage} from 'formik'
import User from '../../../models/user.class'
import * as yup from 'yup'

const registerSchema = yup.object().shape(
    {
        name: yup.string()
                .required('name is required'),
        email: yup.string()
                .email('invalid email')
                .required('email is required'),
        password: yup.string()
                .required('password is required')
    }
)

const Registerform = () => {

    
    
    function createUser(values) {
        const user = new User(values.name, values.email, values.password)
        localStorage.setItem('credentials', user)
    }

    const initualValues = {
        name: '',
        email: '',
        password: ''
    }

    return (
        <Formik
            initialValues = { initualValues }
            validationSchema = { registerSchema }
            onSubmit={ (values) => {
                    alert(JSON.stringify(values))
                    localStorage.setItem('credentials', values);
                    createUser(values)
                }}
        >

            {({errors,touched,isSubmitting}) => {
                <Form>
                    <label htmlFor="name">name</label>
                    <Field className='mb-2' id="name" type="text" name="name" placeholder="Enter your name" />
                    {
                        /* name Errors */
                        errors.name && touched.name && 
                        (
                            <ErrorMessage name="name" component='div'></ErrorMessage>
                        )
                    }

                    <label htmlFor="email">Task</label>
                    <Field className='mb-2' id="email" type="text" name="email" placeholder="Enter your email" />
                    {
                        /* emailErrors */
                        errors.email && touched.email && 
                        (
                            <ErrorMessage name="email" component='div'></ErrorMessage>
                        )
                    }

                    <label htmlFor="password">Task</label>
                    <Field className='mb-2' id="password" type="text" name="password" placeholder="Enter your password" />
                    {
                        /* password Errors */
                        errors.password && touched.password && 
                        (
                            <ErrorMessage name="password" component='div'></ErrorMessage>
                        )
                    }

                    <button type="submit" className='btn btn-primary ' >Loging</button>
                    { isSubmitting ? (<p> verifying your credentials...</p>): null }
                </Form>
            }}
        </Formik>
    );
}

export default Registerform;
