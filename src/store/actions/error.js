
export const ADD_ERROR = 'ADD_ERROR'
export const REMOVE_ERROR = 'REMOVE_ERROR'

export const addError = (message) => {
    return {
        type:ADD_ERROR,
        payload: {
            message
            }
    }
}
export const removeError = (  ) => {
    return {
        type:REMOVE_ERROR,
        
    }
}