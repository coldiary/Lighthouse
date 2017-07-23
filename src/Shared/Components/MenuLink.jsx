import React from 'react'
import cl from 'classnames'
import { Link } from 'react-router-dom'

export const MenuLink = ({ to, iconName, children, ...otherProps }) => {
    let classes = cl(["pt-menu-item","pt-popover-dismiss", {[`pt-icon-${iconName}`]: iconName}]);
    return <li><Link to={to} className={classes} {...otherProps}>{children}</Link></li>
}