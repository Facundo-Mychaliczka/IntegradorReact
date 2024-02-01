import * as Yup from "yup"

export const INITIAL_VALUES_VERIFY = {
    code: ""
}

export const ValidationSchemaVerify = Yup.object ({
    code: Yup.string().required("Este campo es obligatorio.")
})