import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
function StudentForm() {
    var studentFormik = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            age:0
        },
        validationSchema:Yup.object({
            firstname:Yup.string().required("Chusuko thammudu firstname kavali kada bro").matches(/^[a-z ,.'-]+$/i,'firstname is not in the desired way'),
            lastname:Yup.string().required('Last name is required').min(2,'lastname peddadi kali bro minimum 15 char undali bro'),
            age:Yup.number().min(23,'appude vaddu bro').test((a,b)=>{
                console.log(a,b);
                return b.createError({message:"inka undi bro"})
            })
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <div className='border border-2 border-info m-2 p-2'>
        {console.log(studentFormik)}
        <h1>StudentForm</h1>
        <form onSubmit={studentFormik.handleSubmit}>
            <input type="text" {...studentFormik.getFieldProps('firstname')} /><br></br>
            {studentFormik.errors && studentFormik.touched.firstname && studentFormik.errors.firstname}
            <br></br>
            <input type="text" {...studentFormik.getFieldProps('lastname')} /><br></br>
            {studentFormik.errors && studentFormik.touched.lastname && studentFormik.errors.lastname}
            <br />
            <input type="text"  {...studentFormik.getFieldProps('age')} /><br></br>
            {studentFormik.errors && studentFormik.touched.age && studentFormik.errors.age}
            <br></br>
            <button>Save</button>
        </form>
    </div>
  )
}

export default StudentForm