import { signin } from "../data/users"
import { endFetch, errorFetch, startFetch } from "./statusActions"

export const SET_AUTH = 'SET_AUTH'

export function setAuth(user) {
    return {
        type: SET_AUTH,
        payload: user
    }
}

export async function fetchAuthAsync(dispatch, email, password) {
 
        try {
            dispatch(startFetch())

            const user = await signin(email, password)

            if (user) {
                dispatch(setAuth(user))
                dispatch(errorFetch(''))
                dispatch(endFetch())
            }
        } catch (error) {
            dispatch(setAuth(null))
            dispatch(errorFetch(error))
            dispatch(endFetch())
        }
    
}