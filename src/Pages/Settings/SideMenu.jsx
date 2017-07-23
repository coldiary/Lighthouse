import React from 'react'
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core'

const SideMenu = () =>
    <Menu className="pt-elevation-1">
        <li className="pt-menu-header"><h6>Settings</h6></li>
        <MenuItem
            iconName="new-text-box"
            text="New text box"
        />
        <MenuItem
            iconName="new-object"
            text="New object"
        />
        <MenuItem
            iconName="new-link"
            text="New link"
        />
        <MenuDivider />
        <MenuItem text="Settings..." iconName="cog" />
    </Menu>