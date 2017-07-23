import React from 'react'
import { Button, Alert } from '@blueprintjs/core'
import Control from '../Control'

const AlertButtonTemplate = (props, state) =>
    <Button iconName={props.iconName} className={props.className} onClick={() => props.toggle(true)}>
        <Alert intent={props.intent} isOpen={state.open}
            confirmButtonText={props.confirmButtonText} cancelButtonText={props.cancelButtonText}
            onConfirm={props.confirm} onCancel={() => props.toggle(false)} >
            {props.children}
        </Alert>
    </Button>

export const AlertButton = Control({ open: false }, {
    toggle: ({ setState }, open) => setState({ open }),
    confirm: ({ props }) => props.onConfirm()
})(AlertButtonTemplate)