import { ADD_GAME } from '../actions/game'


const initialState = {
    listJeux: []
}
export default (state = initialState, action) => {
switch (action.type) {
    case ADD_GAME:
        return {
        ...state,
        listJeux: [...state.listJeux, action.jeux]
        }
    default:
        return state
    }
}  