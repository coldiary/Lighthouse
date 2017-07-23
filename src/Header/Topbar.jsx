import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core'
import { Navbar, NavbarGroup, NavbarDivider, NavbarHeading } from './Navbar'
import NavLinkBP from './NavLinkBP'
import UserMenu from './UserMenu'
import Notifications from './Notifications'

const TopbarTemplate = ({ username, logout }) =>
        <Navbar dark>
            <NavbarGroup align="left">
                <NavbarHeading>Lighthouse</NavbarHeading>
                <NavLinkBP path="/" label="Home" icon="home" exact/>
                <NavLinkBP path="/projects" label="Projects" icon="projects"/>
                <NavLinkBP path="/notes" label="Notes" icon="clipboard"/>
                <NavLinkBP path="/todos" label="Todos" icon="property"/>
            </NavbarGroup>
            <NavbarGroup align="right">
                <input className="pt-input" placeholder="Search files..." type="text" />
                <NavbarDivider />
                <Popover content={Notifications} position={Position.BOTTOM_RIGHT}
                        popoverClassName="pt-popover-content-sizing"
                        interactionKind={PopoverInteractionKind.HOVER}>
                    <button className="pt-button pt-minimal pt-icon-notifications"></button>
                </Popover>
                <Popover content={<UserMenu />} position={Position.BOTTOM_RIGHT}
                        interactionKind={PopoverInteractionKind.CLICK}>
                    <button className="pt-button pt-minimal pt-icon-user">{username}</button>
                </Popover>
            </NavbarGroup>
        </Navbar>

const Topbar = withRouter(connect(state => ({ username: state.user.displayName }))(TopbarTemplate))

export default Topbar