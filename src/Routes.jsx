import React from 'react'
import { Route } from 'react-router-dom'
import User from './Pages/User/User'
import Notes from './Pages/Notes/Notes'

const Home = () => <div>Home</div>
const Projects = () => <div>Projects</div>
const Todos = () => <div>Todos</div>
const Settings = () => <div>Settings</div>

const Routes = () =>
    <div>
        <Route path="/"         component={Home} exact />
        <Route path="/projects" component={Projects} />
        <Route path="/notes"    component={Notes} />
        <Route path="/todos"    component={Todos} />
        <Route path="/user"     component={User} />
        <Route path="/settings" component={Settings} />
    </div>

export default Routes