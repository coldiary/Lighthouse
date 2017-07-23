import React from 'react'
import cl from 'classnames'

export const Icon = ({ name, size, intent, className, ...otherProps }) => {
    const classes = cl({
        [`pt-icon-${size}`]: size,
        [`pt-icon-${name}`]: name,
        [`pt-intent-${intent}`]: intent,
        [className]: true
    })
    return <span className={classes} {...otherProps}></span>
}