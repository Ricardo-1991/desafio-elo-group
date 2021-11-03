import * as Yup from 'yup'

export default Yup.object().shape({
  nome: Yup.string().required('Este campo é obrigatório*'),
  telefone: Yup.number().required('Este campo é obrigatório*'),
  email: Yup.string().required('Este campo é obrigatório*')
})
