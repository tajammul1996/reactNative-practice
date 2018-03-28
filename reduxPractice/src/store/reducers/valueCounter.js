import { INCREMENT, DECREMENT, RESET, CHANGE_TEXT } from "../actions/actionTypes";

const initialState = {
    count: 0,
    text: 'counter'
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.value
            }
        default:
            return state;
    }
}

export default counterReducer;