import * as Yup from 'yup'


export const INITIAL_VALUES_FORMIK = {
            name: '',
            surname: '',
            address: '',
            location: '',
            cellphone: ''
}


const cellphoneValidation = /\d{10}$/;

export const validationSchema = Yup.object({
    name: Yup.string()
        .required("Este campo es obligatorio."),
    surname: Yup.string()
        .required("Este campo es obligatorio."),
    address: Yup.string()
        .required("Este campo es obligatorio."),
    location : Yup.string("este campo sólo requiere números.")
        .required("Este campo es obligarotio."),
    cellphone: Yup.string()
        .matches(cellphoneValidation, "Este campo requiere de 10 números.")
        .required("Este campo es obligatorio.")
})