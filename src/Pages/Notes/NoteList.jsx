import React from 'react'
import { Menu, MenuDivider, MenuItem } from '@blueprintjs/core'

const NoteList = ({ notes, add, select }) =>
    <Menu>
        <MenuDivider title="Notes"/>
        { notes.map(e => <MenuItem key={e.id} text={e.title} onClick={() => select(e)} />) }
        <MenuDivider />
        <MenuItem iconName="plus" text="New note" onClick={add}/>
    </Menu>

export default NoteList