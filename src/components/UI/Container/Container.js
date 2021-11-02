import React from 'react'
import './Container.css'

// O children funciona como uma props. (Uma tag filha dentro de uma tag mãe)
const UIContainer = ({ children }) => (
  <div className="ui-container">{children}</div>
)

export default UIContainer
