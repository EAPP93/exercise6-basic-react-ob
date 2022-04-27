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

const Loginform = ({verifyingCredentials}) => {
    let initualValues = {
        email: '',
        password: ''
    }

    return (
        <Formik
            initialValues = { initualValues }
            validationSchema = { loginSchema }
            onSubmit= {async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    verifyingCredentials(values)
                }}
        >
        {({
            touched,
            errors,
            isSubmitting
        })=>(
            <Form>
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

export default Loginform;
