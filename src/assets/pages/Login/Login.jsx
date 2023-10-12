import React from 'react'
import { LoginPageWrapper, StyledForm } from './LoginStyles'
import FormLogin from '../../components/FormLogin/FormLogin'

const Login = () => {
  return (
    <LoginPageWrapper>
        <StyledForm>
          <FormLogin/>
        </StyledForm>
    </LoginPageWrapper>
  )
}

export default Login