import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import './Create.css'
import elo from './createImgs/elo.jpeg'
import CreateSchema from '../CreateSchema'
import { useNavigate } from 'react-router-dom'

const ComponentCreate = () => {
  let navigate = useNavigate()
  function onSubmit(values, actions) {
    // criando Objeto para enviar para o LocalStorage
    const creatObject = {
      nome: values.nome,
      telefone: values.telefone,
      email: values.email,
      id: 'Cliente em potencial'
    }

    localStorage.setItem('Novo Lead', JSON.stringify(creatObject))
    alert('Lead incluído com sucesso!')

    actions.resetForm({
      values: {
        nome: '',
        telefone: '',
        email: ''
      }
    })
    navigate('/panel', { state: creatObject })
  }

  const [state, setState] = useState(false)

  const handleCheck = () => {
    setState(!state)
  }

  return (
    <div className="container">
      <div>
        <Formik
          validationSchema={CreateSchema}
          onSubmit={onSubmit}
          initialValues={{ nome: '', telefone: '', email: '' }}
        >
          {(values, erros, touched, isValid) => (
            <Form>
              <img className="create-img" src={elo} alt="imagem" />
              <div className="create-container-form">
                <label htmlFor="nome">Nome *</label>
                <Field type="text" id="nome" name="nome" />
                <ErrorMessage name="nome" />

                <label htmlFor="telefone">Telefone *</label>
                <Field type="number" id="telefone" name="telefone" />
                <ErrorMessage name="telefone" />

                <label htmlFor="nome">Email *</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" />
              </div>
              <div>
                <button
                  className="button-create"
                  type="submit"
                  disabled={isValid}
                >
                  Salvar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <h2>Novo Lead</h2>
      <div id="container" className="create-table__group">
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  name="all"
                  checked={state}
                  onChange={handleCheck}
                />
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="rpa"
                  checked={state ? true : false}
                  onChange={ev => ev.target.checked}
                />
              </td>
              <td>RPA</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="digitalProduct"
                  checked={state ? true : false}
                  onChange={ev => ev.target.checked}
                />
              </td>
              <td>Produto Digital</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="analitycs"
                  checked={state ? true : false}
                  onChange={ev => ev.target.checked}
                />
              </td>
              <td>Analytics</td>
            </tr>

            <tr>
              <td>
                <input
                  type="checkbox"
                  name="bpm"
                  checked={state ? true : false}
                  onChange={ev => ev.target.checked}
                />
              </td>
              <td>BPM</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComponentCreate
