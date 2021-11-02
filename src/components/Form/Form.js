import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik' // Com o Field já faz automaticamente a parte do Value nos Inputs. Subsituir.
import './Form.css'
import schema from '../schema'
import { useHistory } from 'react-router-dom'

const ComponentForm = () => {
  let history = useHistory()
  function onSubmit(values, actions) {
    // criando Objeto para enviar para o LocalStorage
    const formObject = {
      usuario: values.user,
      password: values.password
    }
    localStorage.setItem('usuário', JSON.stringify(formObject))

    actions.resetForm({
      values: {
        user: '',
        password: '',
        confirmPassword: ''
      }
    })
    history.push('/panel')
  }

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{ user: '', password: '', confirmPassword: '' }}
        // Com o values, o Formik ja faz a parte do State
        render={({ values, erros, touched, isValid }) => (
          <Form>
            <div className="user-form__group">
              <label htmlFor="user">Usuário *</label>
              <Field type="text" id="user" name="user" />
              <ErrorMessage name="user" />
            </div>
            <div className="user-form__group">
              <label htmlFor="password">Password *</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" />
            </div>
            <div className="user-form__group">
              <label htmlFor="confirmPassword">Confirmação Password *</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
              <ErrorMessage name="confirmPassword" />
              <div>
                <button type="submit" disabled={!isValid}>
                  Registrar
                </button>
              </div>
            </div>
          </Form>
        )}
      />
    </div>
  )
}

export default ComponentForm
