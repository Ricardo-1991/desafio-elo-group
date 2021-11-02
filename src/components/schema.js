import * as Yup from 'yup'

export default Yup.object().shape({
  user: Yup.string().required('Este campo é obrigatório*'),
  password: Yup.string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
      message:
        'A senha deve conter pelo menos 8 caracteres, 1 numeral, 1 caractere especial e 1 caractere alfanumérico.'
    })
    .required('Este campo é obrigatório*'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'O campo "Confirmação Password" deve ser igual ao campo "Password".'
  )
})
