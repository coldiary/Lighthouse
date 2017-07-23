import firebase from 'firebase'
import Store, { actions } from './Store'
import config from './config'

firebase.initializeApp(config.firebase)

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const { email, displayName, photoURL } = user
    Store.dispatch(actions.LOGIN({ email, displayName, photoURL }))
  } else if (Store.getState().user)
    Store.dispatch(actions.LOGOUT())
})