import { Formik } from 'formik'
import React from 'react'
import {StyledFormValidationCode} from "./VerifyFormStyles"
import InputFormVerify from './Input/InputFormVerify'
import { INITIAL_VALUES_VERIFY,ValidationSchemaVerify } from './FormikData/FormikDataVerify'
import {verifyAccount} from "../../../axios/axiosVerify.js"
import SubmitButtonVerify from "./Button/SubmitButtonVerify"
import { useNavigate } from "react-router-dom"

const VerifyForm = () => {

  const navigate = useNavigate()

  return (
    <Formik
      initialValues={INITIAL_VALUES_VERIFY}
      validationSchema={ValidationSchemaVerify}
      onSubmit={async (values, actions) => {
        const verified = await verifyAccount(values.code, values.email);
        actions.resetForm();
        if (verified) {
          navigate("/")
        }
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