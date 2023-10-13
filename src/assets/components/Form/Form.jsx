import React from 'react'
import InputFormBuy from '../InputFormBuy/InputFormBuy'
import { StyledForm } from './FormStyles'
import {Formik} from 'formik'
import SubmitButton from './SubmitButton/SubmitButton'
import { INITIAL_VALUES_FORMIK, validationSchema } from './FormikData/FormikData'


const Form = () => {

  return (
    <div>
        <h1>COMPLETA TU COMPRA</h1>
        <Formik
        initialValues={INITIAL_VALUES_FORMIK}
        validationSchema={validationSchema}
        onSubmit= {(values, {resetForm}) => {
                    console.log(values);
                    resetForm()
                 }}
        >
                <StyledForm>
                    <InputFormBuy name='name' label='Nombre' type='text'/>
                    <InputFormBuy name='lastName' label='Apellido'  type='text' />
                    <InputFormBuy name='adress' label='Direccion' type='text' />
                    <InputFormBuy name='adressNumber' label='Numero de direccion' type='number'/>
                    <InputFormBuy name='email' label='Email' type='email' />
                    <InputFormBuy name='cellphone' label='Telefono' type='number'/>
                    <SubmitButton />
                </StyledForm>
        
        </Formik>
    </div>
  )
}

export default Form