import React from 'react'
import { Dialog, Button } from '@blueprintjs/core'
import Control from '../Control'

const DialogButtonTemplate = (props, state) =>
    <Button iconName={props.iconName} className={props.className}
        onClick={() => props.toggle(true)} text={props.buttonText}>
        <Dialog isOpen={state.open} onClose={() => props.toggle(false)} title={props.title}>
            <div className="pt-dialog-body">
                {props.children}
            </div>
            <div className="pt-dialog-footer">
                <div className="pt-dialog-footer-actions">
                    <Button text={props.cancelButtonText} onClick={() => props.toggle(false)}/>
                    <Button intent={props.intent} onClick={props.confirm} text={props.confirmButtonText} />
                </div>
            </div>
        </Dialog>
    </Button>

export const DialogButton = Control({ open: false }, {
    toggle: ({ setState }, open) => setState({ open }),
    confirm: ({ props }) => props.onConfirm()
})(DialogButtonTemplate)
