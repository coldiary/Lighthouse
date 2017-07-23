import React from 'react'
import classNames from 'classnames'

const Navbar = ({ dark, children }) => <nav className={classNames(['pt-navbar', { 'pt-dark': dark }])}>{children}</nav>
const NavbarGroup = ({ align, children }) => <div className={"pt-navbar-group " + (align ? "pt-align-" + align : '')}>{children}</div>
const NavbarDivider = () => <span className="pt-navbar-divider" />
const NavbarHeading = ({ children }) => <div className="pt-navbar-heading">{children}</div>

export { Navbar, NavbarGroup, NavbarDivider, NavbarHeading }