import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './app/App'
import Users from './users/users'
import Contact from './contact/contact'
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))