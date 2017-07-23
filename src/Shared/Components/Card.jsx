import React from 'react'
import cl from 'classnames'

export const Card = ({ className, children, noPadding, interactive, ...otherProps }) => 
    <div className={cl(["pt-card", className, {'pt-no-padding': noPadding, 'pt-interactive': interactive}])}
        {...otherProps}>{children}</div>