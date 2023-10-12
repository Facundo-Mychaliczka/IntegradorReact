import React from 'react'
import FormRegister from '../../FormRegister/FormRegister'
import { RegisterPageWrapper, StyledRegisterForm } from './RegisterStyles'

const Register = () => {
  return (
    <RegisterPageWrapper>
        <StyledRegisterForm>
            <FormRegister/>
        </StyledRegisterForm>
    </RegisterPageWrapper>
  )
}

export default Register