import { combineReducers } from 'redux'

import jeux from './jeux'
import evenement from './evenement'
import dialog from './dialog'
import themes from './themes'

export default combineReducers({
    jeux,
    evenement,
    dialog,
    themes
})
