import React from 'react'
import { InputLabel} from '../InputFormBuy/InputFormBuyStyles'
import { ErrorMessage, Field } from 'formik'
import { ErrorMessageStyledLogin, InputBoxLogin, InputStyledLogin } from './InputFormLoginStyles'

const InputFormLogin = ({label, type, name}) => {

  return (
      <Field    
          name={name} 
          >

            {
              ({field, form: {errors, touched}}) =>(
                <InputBoxLogin>
                    <InputLabel>{label}</InputLabel>
                    <InputStyledLogin 
                      type={type} 
                      {...field} 
                      isError={errors[field.name] && touched[field.name]}/>
                    <ErrorMessage name={name} component={ErrorMessageStyledLogin}/>
                </InputBoxLogin>
            )}
       </Field>
  )
}

export default InputFormLogin