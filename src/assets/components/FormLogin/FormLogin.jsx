import React from 'react'
import { Formik } from 'formik'
import { INITIAL_VALUES_LOGIN, validationSchemaLogin } from './FormikData/FormikDataLogin'
import InputFormLogin from '../InputFormLogin/InputFormLogin'
import { LoginSubmitButton, StyledFormLogin } from './FormLoginStyles'
import { StyledButton } from '../InputFormLogin/InputFormLoginStyles'
import { loginUser } from '../../../axios/axiosUser'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../../redux/user/userSlice'
import { userRedirect } from '../../../hooks/userRedirect'

const FormLogin = () => {

  const dispatch = useDispatch()
  userRedirect("/")

  return (

    <Formik
        initialValues= {INITIAL_VALUES_LOGIN}
            validationSchema= {validationSchemaLogin}
            onSubmit={ async(values) => {
                const user = await loginUser(values.email, values.password);
                if (user) {
                  dispatch(setCurrentUser({
                    ...user.usuario,
                    token: user.token
                  }))
                }
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