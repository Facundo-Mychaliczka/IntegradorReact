import { Formik } from 'formik'
import React from 'react'
import {StyledFormValidationCode} from "./VerifyFormStyles"
import InputFormVerify from './Input/InputFormVerify'
import { INITIAL_VALUES_VERIFY,ValidationSchemaVerify } from './FormikData/FormikDataVerify'
import {verifyAccount} from "../../../axios/axiosVerify.js"
import SubmitButtonVerify from "./Button/SubmitButtonVerify"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { setVerify } from '../../../redux/user/userSlice.js'

const VerifyForm = () => {

  const navigate = useNavigate()
  const userEmail = useSelector((state) => state.user.currentUser.email)
  const userVerify = useSelector((state) => state.user.currentUser.verified)
  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={INITIAL_VALUES_VERIFY}
      validationSchema={ValidationSchemaVerify}
      

      onSubmit={async (values, actions) => {
        const verified = await verifyAccount(userEmail,values.code);
        userVerify = verified.verified
        actions.resetForm();
        if (verified) {
          dispatch(setVerify(verified))
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