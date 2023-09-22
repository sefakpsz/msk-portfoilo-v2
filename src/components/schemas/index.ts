import * as yup from 'yup'

export const contactMeSchema = yup.object().shape({
    email: yup.string().email("This is not a valid email").required("Field is required"),
    message: yup.string().min(30, "Message needs to minimum 30 character").required("Field is required")
})