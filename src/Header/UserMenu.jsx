import React from 'react'
import firebase from 'firebase'
import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core"
import { MenuLink } from '../Shared/Components'

const UserMenu = () => {
    const logout = () => firebase.auth().signOut()
    return (
        <Menu>
            <MenuLink to="/user" iconName="user">Profile</MenuLink>
            <MenuLink to="/settings" iconName="cog">Settings</MenuLink>
            <MenuDivider />
            <MenuItem text="Log out" iconName="power" onClick={logout} />
        </Menu>
    )
}

export default UserMenu