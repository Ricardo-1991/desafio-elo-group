import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PagesComponentForm from './Form/Form'
import PagesComponentPanel from './Panel/Panel'
import PagesComponentCreate from './Create/Create'

const Error = () => {
  return <h1>Página Não Encontrada</h1>
}

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesComponentForm />}></Route>
        <Route path="/panel" element={<PagesComponentPanel />}></Route>
        <Route path="/create" element={<PagesComponentCreate />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  )
}

export default Root
