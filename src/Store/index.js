import { createStore } from 'redux'
import * as actions from './Actions'
import reducers from './Reducers'

const devToolsEnabled = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let Store = createStore(reducers, devToolsEnabled)

export { actions }
export default Store