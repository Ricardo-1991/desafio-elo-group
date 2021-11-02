import React from 'react'
import './Panel.css'

const ComponentPanel = () => {
  return (
    <div>
      <header>
        <div className="panel-header">
          <img alt="imagem" src="" />
          <h3>Painel de Leads</h3>
        </div>
      </header>

      <div>
        <button>Novo Lead(+)</button>
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
              <td>1</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>4</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>7</td>
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
