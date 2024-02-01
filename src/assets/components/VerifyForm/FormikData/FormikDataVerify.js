import * as Yup from "yup"

export const ValidationSchemaVerify = Yup.object ({
    code: Yup.string().required("Este campo es obligatorio.")
})