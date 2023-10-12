 import * as Yup from 'yup'

 export const INITIAL_VALUES_LOGIN = {
    email: '',
    password: '',
 }

 export const validationSchemaLogin = Yup.object ( {
    password: Yup.string("Este campo requiere una contraseña válida.")
        .required("Este campo es obligatorio."),
    email: Yup.string()
        .email("Este campo sólo requiere un e-mail")
        .required("Este campo es obligatorio"),
 })