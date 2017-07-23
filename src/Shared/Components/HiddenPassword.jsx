import React from 'react'
import { Tooltip, Classes, Intent, InputGroup, Button } from '@blueprintjs/core'
import Control from '../Control'

const PasswordToggler = ({ show, toggle }) => 
    <Tooltip content={`${show ? "Hide" : "Show"} Password`}>
        <Button className={Classes.MINIMAL} intent={Intent.WARNING}
            iconName={show ? "eye-off" : "eye-open"} onClick={toggle} />
    </Tooltip>

const PasswordInput = ({ name, placeholder, toggle }, { show }) =>
    <InputGroup name={name} placeholder={placeholder} leftIconName="lock" 
                type={show ? "text" : "password"}
                rightElement={<PasswordToggler show={show} toggle={toggle} />}
    />

export const HiddenPassword = Control(
    { show: false },
    { toggle: ({ setState, state }) => { setState({ show: !state.show }) } }
)(PasswordInput)

