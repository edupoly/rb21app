import { Formik,Form, Field } from "formik"

import React from 'react'

function EmployeeForm() {
  return (
    <div className='border border-4 border-secondary m-2 p-2' >
        <h1>EmployeeForm</h1>
        <Formik initialValues={
            {
                firstname:'',
                lastname:'',
                doj:'',
                gender:''
            }
        } 
        
        onSubmit={
            (values)=>{console.log(values)}
        }>
            {
                ({handleSubmit,getFieldProps})=>{
                    return(
                        <Form>
                            <Field name="firstname"></Field><br></br>
                            <Field name="lastname"></Field><br></br>
                            <Field name="doj"></Field><br></br>
                            <Field type='radio' name='gender' value='male'></Field>:Male
                            <Field type='radio' name='gender' value='female'></Field>:Female
                            <Field type='radio' name='gender' value='other'></Field>:Other
                            <button>Save</button>
                        </Form>
                    )
                }
            }
        </Formik>
    </div>
  )
}

export default EmployeeForm