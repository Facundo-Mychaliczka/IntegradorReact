import * as Yup from 'yup'

export const INITIAL_VALUES_REGISTER = {
    name: '',
    email: '',
    password: ''
}

export const validationSchemaRegister = Yup.object ({
    name: Yup.string().required("Este Campo es obligatorio."),
    email: Yup.string().email("este campo acepta solo emails.").required("Este Campo es obligatorio."),
    password: Yup.string().required("Este Campo es obligatorio."),
})