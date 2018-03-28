import { INCREMENT, DECREMENT, RESET, CHANGE_TEXT } from './actionTypes'

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const reset = () => ({
    type: RESET
})


export const changeText = (value) => ({
    type: CHANGE_TEXT,
    value
})