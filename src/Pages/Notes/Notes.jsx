import React from 'react'
import { connect } from 'react-redux'
import { Card, Placeholder } from '../../Shared/Components'
import * as actions from '../../Store/Actions/notes'
import NoteList from './NoteList'
import Note from './Note'
import './Notes.scss'

const NotesTemplate = ({ notes, selected, select, update, add, remove }) =>
    <div className="Notes">
        <Card className="List">
            <NoteList notes={notes} add={add} select={select} />
        </Card>
        <Card className="content">
            { selected ?
                <Note note={selected} update={update} remove={remove} editorTheme="vs"/> :
                <Placeholder iconName="clipboard" title="No note selected"
                             description="Choose one in the list on the left"/> }
        </Card>
    </div>

const Notes = connect(
    state => ({ notes: state.note.notes, selected: state.note.selectedNote }),
    dispatch => ({
        add: () => dispatch(actions.ADD_NOTE()),
        select: note => dispatch(actions.SELECT_NOTE(note)),
        remove: note => {
            dispatch(actions.REMOVE_NOTE(note))
            dispatch(actions.UNSELECT_NOTE())
        },
        update: note => {
            dispatch(actions.UPDATE_NOTE(note))
            dispatch(actions.UPDATE_SELECTED_NOTE(note))
        }
    })
)(NotesTemplate)

export default Notes