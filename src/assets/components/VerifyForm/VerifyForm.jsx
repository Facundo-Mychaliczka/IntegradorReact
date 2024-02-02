import { Formik } from 'formik'
import React from 'react'
import {StyledFormValidationCode} from "./VerifyFormStyles"
import InputFormVerify from './Input/InputFormVerify'
import SubmitButtonVerify from "./Button/SubmitButtonVerify"


const VerifyForm = () => {
  return (
    <Formik
    >
        <StyledFormValidationCode>
          <InputFormVerify name="code" type="text" label="Código"/>
          <SubmitButtonVerify/>
        </StyledFormValidationCode>
    </Formik>
  )
}

export default VerifyForm