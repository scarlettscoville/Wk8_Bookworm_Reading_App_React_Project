import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import LoginButton from '../components/LoginButton';
import TextField from '@mui/material/TextField';

const FormSchema = Yup.object(
    {
        name:Yup.string().required()
    }
)

const initialValues={
    name:''
}

const handleSubmit=(values)=>{
    console.log(values)
}

export default function LoginForm(){
    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{handleSubmit(values)}
    })
    
    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                name="name"
                fullWidth
                sx={{mb:2, mt:2}}
                label="name"
                placeholder="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            
            <LoginButton type="submit" sx={{width:"100%"}}>Login</LoginButton>
        </form>
    )
}