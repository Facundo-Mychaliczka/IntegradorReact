import React from 'react'
import { Formik } from 'formik'
import { INITIAL_VALUES_LOGIN, validationSchemaLogin } from './FormikData/FormikDataLogin'
import InputFormLogin from '../InputFormLogin/InputFormLogin'
import { LoginSubmitButton, StyledFormLogin } from './FormLoginStyles'
import { StyledButton } from '../InputFormLogin/InputFormLoginStyles'

const FormLogin = () => {
  return (

    <Formik
        initialValues= {INITIAL_VALUES_LOGIN}
            validationSchema= {validationSchemaLogin}
            onSubmit={(values, {resetForm}) => {
                console.log(values);
                resetForm();
            }}
    >   
            <StyledFormLogin>
                <InputFormLogin name='email'label='E-mail'type='email'/>
                <InputFormLogin name='password' label='Contraseña' type='password'/>
                <LoginSubmitButton type='submit'>INGRESAR</LoginSubmitButton>
                <StyledButton to={"/register"}>¿No tienes una cuenta?</StyledButton>
            </StyledFormLogin>
            
        
    </Formik>
  )
}

export default FormLogin