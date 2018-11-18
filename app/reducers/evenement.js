import { AJOUTER_EVENEMENT } from '../actions/evenement'


const initialState = {
    listEvenement: []
} 
export default (state = initialState, action) => {
switch (action.type) {
    case AJOUTER_EVENEMENT:
        return {
        ...state,
        listEvenement: [...state.listEvenement, action.evenement]
        }
    default:
        return state
    }
}  