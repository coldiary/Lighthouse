import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './Header/Navbar'
import Topbar from './Header/Topbar'
import Routes from './Routes'
import { LOGIN } from './Store/Actions'
import Login from './Pages/Login/Login'
import './assets'

export const App = ({ user, login }) => {
    if (!user)
        return <Login login={() => login()} />
    return (
        <Router>
            <div className="flex-frame">
                <header><Topbar /></header>
                <main><Routes /></main>
                <footer><Navbar dark><span>© 2017 - Coldiary</span></Navbar></footer>
            </div>
        </Router>
    )
}

const mapStateToProps = state => ({ user: state.user })
const mapDispatchToProps = dispatch => ({ login: user => dispatch(LOGIN(user)) })

const AuthApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default AuthApp