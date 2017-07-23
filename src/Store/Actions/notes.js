import { createAction } from 'redux-actions'

export const ADD_NOTE = createAction('ADD_NOTE')
export const REMOVE_NOTE = createAction('REMOVE_NOTE')
export const UPDATE_NOTE = createAction('UPDATE_NOTE')
export const SELECT_NOTE = createAction('SELECT_NOTE')
export const UPDATE_SELECTED_NOTE = createAction('UPDATE_SELECTED_NOTE')
export const UNSELECT_NOTE = createAction('UNSELECT_NOTE')
