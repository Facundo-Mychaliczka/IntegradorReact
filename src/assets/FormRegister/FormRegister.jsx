import { Formik } from 'formik'
import React from 'react'
import { LinkStyled, StyledFormRegister } from './FormRegisterStyles';
import { INITIAL_VALUES_REGISTER, validationSchemaRegister } from './FormikData/FormikDataRegister';
import InputFormRegister from './Input/InputFormRegister';
import SubmitButtonRegister from './Button/SubmitButtonRegister';
import { createUser } from '../../axios/axiosUser';
import {useDispatch} from 'react-redux'
import { setCurrentUser } from '../../redux/user/userSlice';
import { userRedirect } from '../../hooks/userRedirect';

const FormRegister = () => {

    const dispatch = useDispatch()

    userRedirect("/")


  return (
    <Formik
            initialValues= {INITIAL_VALUES_REGISTER}
            validationSchema= {validationSchemaRegister}
            onSubmit={async (values, actions) => {
                const user = await createUser(values.name, values.email, values.password);
                actions.resetForm();
                if (user) {
                    dispatch(setCurrentUser({
                        ...user.user,
                        token: user.token
                    }))
                }
            }}
    >
            <StyledFormRegister>
                <InputFormRegister name='name' type='string' label='Nombre'/>
                <InputFormRegister name='email' type='email' label='E-Mail'/>
                <InputFormRegister name='password' type='password' label='Contraseña'/>
                <SubmitButtonRegister />
                <LinkStyled to={"/login"} >¿Ya tienes una cuenta?</LinkStyled>
           </StyledFormRegister>      
    </Formik>
  )
}

export default FormRegister