import { Formik } from 'formik'
import React from 'react'
import {StyledFormValidationCode} from "./VerifyFormStyles"
import InputFormVerify from './Input/InputFormVerify'
import { INITIAL_VALUES_VERIFY,ValidationSchemaVerify } from './FormikData/FormikDataVerify'
import {verifyAccount} from "../../../axios/axiosVerify.js"
import SubmitButtonVerify from "./Button/SubmitButtonVerify"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

const VerifyForm = () => {

  const navigate = useNavigate()
  const userEmail = useSelector((state) => state.user.currentUser.email)

  return (
    <Formik
      initialValues={INITIAL_VALUES_VERIFY}
      validationSchema={ValidationSchemaVerify}
      

      onSubmit={async (values, actions) => {
        const verified = await verifyAccount(userEmail,values.code);
        actions.resetForm();
        if (verified) {
          navigate("/")
        }
      }}
    >
        <StyledFormValidationCode>
          <InputFormVerify name="code" type="text" label="Código"/>
          <p>Por favor, verifica tu bandeja de entrada de Mail, y coloca el código proporcionado para verificarte</p>
          <SubmitButtonVerify/>
        </StyledFormValidationCode>
    </Formik>
  )
}

export default VerifyForm