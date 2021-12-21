import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { GuardedRoute, GuardProvider, GuardRoute } from 'react-router-guards'
import Protected from './Protected'
import Unprotected from './Unprotected'
import Home from './Home'
import Loading from './Loading'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const Login = () => {
    setIsAuthenticated(true);
  }

  const Logout = () => {
    setIsAuthenticated(false)
  }

  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (isAuthenticated) {
        next();
      }
      next.redirect('/login');
    } else {
      next();
    }
  };

  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>
                Link to Home Page
              </Link>
            </li>
            <li>
              <Link to='/protected'>
                Link to Protected Page
              </Link>
            </li>
            <li>
              <Link to='/unprotected'>
                Link to Unprotected Page
              </Link>
            </li>f
          </ul>
          <button onClick={Login}>Login</button>
          <br />
          <button onClick={Logout}>Logout</button>
        </div>
        <GuardProvider guards={[requireLogin]} loading={Loading}>
          <Routes>
            <GuardedRoute exact path='/' element={<Home />} />
            <GuardedRoute exact path='/protected' element={<Protected />} meta={{ auth: true }} />
            <GuardedRoute exact path='/unprotected' element={<Unprotected />} />
          </Routes>
        </GuardProvider>
      </Router>
    </>
  )
}

export default App
