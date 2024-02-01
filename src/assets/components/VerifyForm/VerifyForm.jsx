import { Formik } from 'formik'
import React from 'react'
import {StyledFormValidationCode} from "./VerifyFormStyles"

const VerifyForm = () => {
  return (
    <Formik>
        <StyledFormValidationCode></StyledFormValidationCode>
    </Formik>
  )
}

export default VerifyForm