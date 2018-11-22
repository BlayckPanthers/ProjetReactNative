import { SHOW_DIALOG, HIDE_DIALOG } from '../actions/dialog'


const initialState = {
    showDialog: false
} 
export default (state = initialState, action) => {
switch (action.type) {
    case SHOW_DIALOG:
        return {
        ...state,
            showDialog: true
        }
    case HIDE_DIALOG:
        return {
            ...state,
            showDialog: false
        }
    default:
        return state
    }
}  