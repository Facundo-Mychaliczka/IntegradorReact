import { Field } from 'formik'
import React from 'react'
import { ErrorMessageVerify } from './InputFormVerify'

const InputFormVerify = ({label, type, name}) => {
  return (
    <Field
            name={name}>    
          {
            ({field, form: {errors, touched}}) =>(
          <InputBoxRegister>

          <LabelStyled >{label}</LabelStyled>

          <InputRegister type={type} 
                {...field} 
                isError={errors[field.name] && touched[field.name]} 
                />

          <ErrorMessage name={name} component={ErrorMessageVerify}/>
          </InputBoxRegister>
            )
          }
       
    </Field>
  )
}

export default InputFormVerify