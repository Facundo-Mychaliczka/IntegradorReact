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
  const cartProducts = useSelector((state) => state.cart.cartItems)
  const price = cartProducts.reduce((acc, product) => {
            return (acc + product.value * product.quantity)
          }, 0)

  const items = cartProducts
  return (
    <div>
        <h1>COMPLETA TU COMPRA</h1>
        <Formik
        initialValues={INITIAL_VALUES_FORMIK}
        validationSchema={validationSchema}
        onSubmit= {async (values) => {
          
          const shippingDetails = values
          
          const order = {price, shippingDetails, items}
          await postOrder(order, currentUser)
          
      }}
        >
                <StyledForm>
                    <InputFormBuy name='name' label='Nombre' type='text'/>
                    <InputFormBuy name='surname' label='Apellido'  type='text' />
                    <InputFormBuy name='location' label='Ciudad' type='text'/>
                    <InputFormBuy name='address' label='Direccion' type='text' />
                    <InputFormBuy name='cellphone' label='Telefono' type='number'/>
                    <SubmitButton />
                </StyledForm>
        
        </Formik>
    </div>
  )
}

export default Form