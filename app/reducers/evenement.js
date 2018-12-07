import { ADD_EVENT } from '../actions/event'


const initialState = {
    listEvenement: []
} 

export default (state = initialState, action) => {
switch (action.type) {
    case ADD_EVENT:
        return {
        ...state,
        listEvenement: [...state.listEvenement, action.evenement]
        }
    default:
        return state
    }
}  