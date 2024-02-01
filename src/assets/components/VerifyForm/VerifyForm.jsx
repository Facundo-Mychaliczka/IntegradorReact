import { Formik } from 'formik'
import React from 'react'
import {VerifyFormValidationCode} from "./VerifyFormStyles"

const VerifyForm = () => {
  return (
    <Formik>
        <VerifyFormValidationCode></VerifyFormValidationCode>
    </Formik>
  )
}

export default VerifyForm