import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import PagesComponentForm from './Form/Form'
import PagesComponentPanel from './Panel/Panel'
import PagesComponentCreate from './Create/Create'

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PagesComponentForm />
        </Route>
        <Route path="/panel">
          <PagesComponentPanel />
        </Route>
        <Route path="/create">
          <PagesComponentCreate />
        </Route>

        <Route path="*">
          <h1>Página Não Encontrada</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default Root
