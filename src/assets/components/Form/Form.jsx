import React from 'react'
import InputFormBuy from '../InputFormBuy/InputFormBuy'
import { StyledForm } from './FormStyles'
import {Formik} from 'formik'
import SubmitButton from './SubmitButton/SubmitButton'
import { INITIAL_VALUES_FORMIK, validationSchema } from './FormikData/FormikData'
import { useSelector } from 'react-redux'
import { postOrder } from '../../../axios/axiosOrders'


const Form = () => {
  const currentUser = useSelector((state) => state.user.currentUser)

  return (
    <div>
        <h1>COMPLETA TU COMPRA</h1>
        <Formik
        initialValues={INITIAL_VALUES_FORMIK}
        validationSchema={validationSchema}
        onSubmit= { (values) => {
          const shippingDetails = values
          console.log(shippingDetails);
          
      }}
        >
                <StyledForm>
                    <InputFormBuy name='name' label='Nombre' type='text'/>
                    <InputFormBuy name='surname' label='Apellido'  type='text' />
                    <InputFormBuy name='location' label='Ciudad' type='text'/>
                    <InputFormBuy name='adress' label='Direccion' type='text' />
                    <InputFormBuy name='cellphone' label='Telefono' type='number'/>
                    <SubmitButton />
                </StyledForm>
        
        </Formik>
    </div>
  )
}

export default Form