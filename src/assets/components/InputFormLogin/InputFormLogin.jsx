import React from 'react'
import { InputLabel} from '../InputFormBuy/InputFormBuyStyles'
import { ErrorMessage, Field } from 'formik'
import { ErrorMessageStyledLogin, InputBoxLogin, InputStyledLogin } from './InputFormLoginStyles'

const InputFormLogin = ({label, type, name, isError}) => {

  return (
    <InputBoxLogin>
        <InputLabel>{label}</InputLabel>
        <Field 
        as={InputStyledLogin} 
        type={type} 
        name={name} 
        error={isError} 
        id={label} 
        />

        <ErrorMessage name={name} component={ErrorMessageStyledLogin}/>
    </InputBoxLogin>
  )
}

export default InputFormLogin