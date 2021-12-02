import React from 'react'
import './Panel.css'
import { useNavigate, useLocation } from 'react-router-dom'
import elo from './panelImgs/elo.jpeg'

const ComponentPanel = () => {
  let navigate = useNavigate()
  let { state } = useLocation()

  const CreateLeads = () => {
    navigate('/create')
  }

  const dragStart = e => {
    const target = e.target
    e.dataTransfer.setData('text', target.id)
  }

  const dragOvering = e => {
    e.stopPropagation()
  }

  const drop = e => {
    e.preventDefault()
    const inner = document.getElementById('row_id')
    const inner2 = document.getElementById('row2_id')
    inner2.innerText = inner.innerText
    inner.innerText = ''
  }

  const dragOver = e => {
    e.preventDefault()
  }

  return (
    <div>
      <header>
        <div className="panel-header">
          <img alt="imagem" src={elo} />
          <h3>Painel de Leads</h3>
        </div>
      </header>

      <div>
        <button type="submit" onClick={CreateLeads}>
          Novo Lead(+)
        </button>
      </div>
      <div id="container">
        <table className="panel-table__group" border="1">
          <thead>
            <tr>
              <th>Cliente em Potencial</th>
              <th>Dados Confirmados</th>
              <th>Reunião Agendada</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                id="row_id"
                draggable
                onDragStart={dragStart}
                onDragOver={dragOvering}
              >
                {state && state.nome}
              </td>
              <td id="row2_id" onDrop={drop} onDragOver={dragOver}></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComponentPanel
