import { handleActions } from 'redux-actions'
import * as actions from '../Actions/user'

const user = handleActions({
  [actions.LOGIN]: (state, action) => action.payload,
  [actions.LOGOUT]: (state, action) => null,
  [actions.CHANGE_PIC]: (state, action) => ({ ...state, photoURL: action.payload })
}, null);

export default user;