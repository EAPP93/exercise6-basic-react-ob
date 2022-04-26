import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

/**impor class */
import {LEVELS} from '../../../models/levels.enum.js'
import Task from '../../../models/task.class.js';



const Taskform = ({addTask}) => {

    function createNewTask(values) {
        let newTask = new Task(values.name,values.description,false,values.level)
        addTask(newTask);
    }

    const initialValues ={
        name:'',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    };
    
    const taskSchema = yup.object().shape(
        {
            name: yup.string()
                .min(6, 'task name too short')
                .max(20, 'task name too long')
                .required('task is required'),
            description: yup.string()
                .min(6, 'task description too short')
                .max(500, 'task description too long')
                .required('task description is required'),
            level: yup.string()
                .oneOf([LEVELS.BLOCKING,LEVELS.NORMAL,LEVELS.URGENTE],'You must select a level: blocking, normal or urgente')
                .required('levels is required')
        }
    )

    return (
        <div className='p-4' style={{backgroundColor: 'lightblue'}}>
            <h4 className='text-center'>Formulario de Tareas</h4>
            <Formik

                // *** Initial values that the form will take
                initialValues = { initialValues }
                // *** Yup Validation Schema ***
                validationSchema = {taskSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    createNewTask(values)
                }}
            >

            {
                ({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur })=>(
                    <Form className='form row gy-1 p-2'>
                        <label htmlFor="name">Task</label>
                        <Field className='mb-2' id="name" type="text" name="name" placeholder="Enter your Task Name" />
                        {
                            /* task name Errors */
                            errors.name && touched.name && 
                            (
                                <ErrorMessage name="name" component='div'></ErrorMessage>
                            )
                        }
                        <label htmlFor="description">description</label>
                        <Field className='mb-2' id="description" type="textarea" name="description" placeholder="Enter the description of your task" rows='3' />
                        {
                            /*description task Errors */
                            errors.description && touched.description && 
                            (
                                <ErrorMessage name="description" component='div'></ErrorMessage>
                            )
                        }
                        <label htmlFor="level">Level</label>
                        <Field className='mb-4' as="select" name="level">
                            <option vvalue={LEVELS.NORMAL}>NORMAL</option>
                            <option value={LEVELS.BLOCKING}>BLOCKING</option>
                            <option value={LEVELS.URGENTE}>URGENTE</option>
                        </Field>
                        {
                            /* level task Errors */
                            errors.level && touched.level && 
                            (
                                <ErrorMessage name="level" component='div'></ErrorMessage>
                            )
                        }
                        <button type="submit" className='btn btn-primary ' >create task</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>): null}
                    </Form>
                )
            }
            </Formik>
        </div>
    );
}

export default Taskform;
