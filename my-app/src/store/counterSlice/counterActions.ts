import { Action } from "../../types"

export const increaseCounter = (): Action => {
    return {
        type: 'INCREASE',
        payload: {message: 'Increase the counter'}
    }
}

export const decreaseCounter = (): Action => {
    return {
        type: 'DECREASE',
        payload: {message: 'Decrease the counter'}
    }
}