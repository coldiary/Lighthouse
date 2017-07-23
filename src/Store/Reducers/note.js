import { _ } from '../../utils'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import * as actions from '../Actions/notes'

const MOCK_NOTES = [
    {id: _.uniqueId(), title: 'First note', content: 'This is a little note' },
    {id: _.uniqueId(), title: 'Second note', content: '### This is a little md note' },
]

const selectedNote = handleActions({
    [actions.SELECT_NOTE]: (state, action) => state = action.payload,
    [actions.UPDATE_SELECTED_NOTE]: (state, action) => ({...state, ...action.payload }),
    [actions.UNSELECT_NOTE]: (state, action) => null
}, null)

const notes = handleActions({
    [actions.ADD_NOTE]: (state, action) => [...state, { id: _.uniqueId(), title: 'new_note', content: '' }],
    [actions.UPDATE_NOTE]: (state, action) => _.updateWhere(state, action.payload, _.idCheck(action.payload.id)),
    [actions.REMOVE_NOTE]: (state, action) =>  _.reject(state, _.idCheck(action.payload.id)),
}, MOCK_NOTES)

const note = combineReducers({ notes, selectedNote })

export default note