import { Field } from 'formik'
import React from 'react'
import { ErrorMessageVerify, InputBoxVerify, InputVerify } from './InputFormVerifyStyles'
import { LabelStyled } from '../../../FormRegister/Input/InputFormRegisterStyles'


const InputFormVerify = ({label, type, name}) => {
  return (
    <Field
            name={name}>    
          {
            ({field, form: {errors, touched}}) =>(
          <InputBoxVerify>

          <LabelStyled >{label}</LabelStyled>

          <InputVerify type={type} 
                {...field} 
                isError={errors[field.name] && touched[field.name]} 
                />

          <ErrorMessageVerify name={name} component={ErrorMessageVerify}/>
          </InputBoxVerify>
            )
          }
       
    </Field>
  )
}

export default InputFormVerify