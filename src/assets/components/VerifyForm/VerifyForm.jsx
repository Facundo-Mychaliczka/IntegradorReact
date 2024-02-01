import { Formik } from 'formik'
import React from 'react'
import {StyledFormValidationCode} from "./VerifyFormStyles"
import InputFormVerify from './Input/InputFormVerify'
import { ValidationSchemaVerify } from './FormikData/FormikDataVerify'
import {verifyAccount} from "../../../axios/axiosVerify.js"
import SubmitButtonVerify from "./Button/SubmitButtonVerify"

const VerifyForm = () => {
  return (
    <Formik
      initialValues={code = ""}
      validationSchema={ValidationSchemaVerify}
      onSubmit={async (values, actions) => {
        const verified = await verifyAccount(values.email, values.code);
        actions.resetForm()
      }}
    >
        <StyledFormValidationCode>
          <InputFormVerify name="code" type="text" label="Código"/>
          <SubmitButtonVerify/>
        </StyledFormValidationCode>
    </Formik>
  )
}

export default VerifyForm