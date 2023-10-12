import React from 'react'
import { ErrorMessageStyled, InputBox, InputLabel, InputStyled } from './InputFormBuyStyles'
import { ErrorMessage, Field } from 'formik'


const InputFormBuy = ({label, type, name, isError }) => {
  return (
    <InputBox>
        <InputLabel >{label}</InputLabel>
        <Field as={InputStyled} type={type} name={name} error={isError} id={label} />

        <ErrorMessage name={name} component={ErrorMessageStyled}/>
        {/* placeholder */}
    </InputBox >
  )
}

export default InputFormBuy