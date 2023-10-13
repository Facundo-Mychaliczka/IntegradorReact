import React from 'react'
import { ErrorMessageStyled, InputBox, InputLabel, InputStyled } from './InputFormBuyStyles'
import { ErrorMessage, Field } from 'formik'


const InputFormBuy = ({label, type, name }) => {
  return (
    <Field 
    name={name}   
    >
    
    {
      ({field, form: {errors, touched}}) =>(
        <InputBox>
     
        <InputLabel >{label}</InputLabel>

        <InputStyled
                type={type} 
                {...field} 
                isError={errors[field.name] && touched[field.name]}/>
        
        <ErrorMessage name={name} component={ErrorMessageStyled}/>
        {/* placeholder */}
      </InputBox >
     )
    }
</Field>
  )
}

export default InputFormBuy