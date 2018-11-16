import { AJOUTER_JEUX } from '../actions/jeux'


const initialState = {
    listJeux: []
} 
export default (state = initialState, action) => {
switch (action.type) {
    case AJOUTER_JEUX:
        return {
        ...state,
        listJeux: [...state.listJeux, action.jeux]
        }
    default:
        return state
    }
}  