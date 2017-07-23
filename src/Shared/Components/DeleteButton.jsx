import React from 'react'
import { Intent } from '@blueprintjs/core'
import { DialogButton } from './DialogButton'

export const DeleteButton = ({ title, onConfirm, children, className }) =>
    <DialogButton iconName="trash" className={className}
        confirmButtonText="Delete" cancelButtonText={"Cancel"}
        title={title} onConfirm={onConfirm} intent={Intent.DANGER}>
        { children }
    </DialogButton>