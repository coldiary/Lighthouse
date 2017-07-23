import React from 'react'
import { Map } from '../../utils'
import firebase from 'firebase'
import { Card, HiddenPassword } from '../../Shared/Components'
import { InputGroup, Button } from '@blueprintjs/core'
import './Login.scss'

const send = e => {
    e.preventDefault()
    let data = (new Map(new FormData(e.target))).toObj()
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .catch(e => { console.error(`Firebase auth error: [${e.code}] ${e.message}`) })
}

const Login = () =>
    <div className="flex-frame center">
        <h1 className="logo"><img src="lighthouse.png" alt="logo"/><span>Lighthouse</span></h1>
        <Card>
            <form onSubmit={send}>
                <InputGroup name="email" placeholder="Email" leftIconName="user"/>
                <HiddenPassword name="password" placeholder="Enter your password..." />
                <Button iconName="log-in" type="submit">Login</Button>
            </form>
        </Card>
    </div>

export default Login