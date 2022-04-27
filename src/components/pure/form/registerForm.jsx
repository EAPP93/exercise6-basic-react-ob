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

{({
            values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur 
        })=>(
            <Form>
                <label htmlFor="name">name</label>
                <Field className='mb-2' id="name" type="text" name="name" placeholder="Enter your name" />
                {
                    /* task name Errors */
                    errors.name && touched.name && 
                    (
                        <ErrorMessage name="name" component='div'></ErrorMessage>
                    )
                }

                <label htmlFor="email">email</label>
                <Field className='mb-2' id="email" type="text" name="email" placeholder="Enter your email" />
                {
                    /* task name Errors */
                    errors.email && touched.email && 
                    (
                        <ErrorMessage name="email" component='div'></ErrorMessage>
                    )
                }

                <label htmlFor="password">password</label>
                <Field className='mb-2' id="password" type="text" name="password" placeholder="Enter your password" />
                {
                    /* task name Errors */
                    errors.password && touched.password && 
                    (
                        <ErrorMessage name="password" component='div'></ErrorMessage>
                    )
                }

                <button type="submit" className='btn btn-primary ' >Loging</button>
                {isSubmitting ? (<p>Sending your credentials...</p>): null}
            </Form>
        )}

        </Formik>
    );
}

export default Registerform;
