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

            {({touched, errors}) => (
                <StyledForm>
                    <InputFormBuy 
                        name='name' 
                        label='Nombre' 
                        type='text' 
                        isError={errors.name && touched.name}                      
                    />
                    <InputFormBuy 
                        name='lastName' 
                        label='Apellido' 
                        type='text' 
                        isError={errors.lastName && touched.lastName}
                    />
                    <InputFormBuy 
                        name='adress' 
                        label='Direccion' 
                        type='text'
                        isError={errors.adress && touched.adress}                      
                    />
                    <InputFormBuy 
                        name='adressNumber' 
                        label='Numero de direccion' 
                        type='number'
                        isError={errors.adressNumber && touched.adressNumber}                        
                    />
                    <InputFormBuy 
                        name='email' 
                        label='Email' 
                        type='email'
                        isError={errors.email && touched.email}                       
                    />
                    <InputFormBuy 
                        name='cellphone' 
                        label='Telefono' 
                        type='number'
                        isError={errors.cellphone && touched.cellphone}                        
                    />
                    <SubmitButton />
                </StyledForm>
            )

             }
        
        </Formik>
    </div>
  )
}

export default Form