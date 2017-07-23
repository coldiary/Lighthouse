import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinkBP = ({ path, label, icon, exact, location }) =>
    <NavLink to={path} {...{exact}}
        activeClassName="pt-active"
        className={"pt-button pt-minimal pt-icon-" + icon}>
        {label}
    </NavLink>

export default NavLinkBP