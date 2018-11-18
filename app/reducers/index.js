import { combineReducers } from 'redux'

import jeux from './jeux'
import evenement from './evenement'

export default combineReducers({
    jeux,
    evenement
})
