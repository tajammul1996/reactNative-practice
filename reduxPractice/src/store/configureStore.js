import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/valueCounter'

const store = createStore(combineReducers({
    counter: counterReducer
}))

export default store;