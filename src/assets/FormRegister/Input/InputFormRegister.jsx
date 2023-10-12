import React from 'react'
import { ErrorMessageRegister, InputBoxRegister, InputRegister, LabelStyled } from './InputFormRegisterStyles'
import { ErrorMessage, Field } from 'formik'

const InputFormRegister = ({label,type, name}) => {
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

          <ErrorMessage name={name} component={ErrorMessageRegister}/>
          </InputBoxRegister>
            )
          }
       
    </Field>
  )
}

export default InputFormRegister