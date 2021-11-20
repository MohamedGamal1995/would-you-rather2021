import { GET_DATA,ADD_ANSWER,ADD_QUESTION } from "../actions/share";

export default function loading (state = true,action){
    switch (action.type){
        case GET_DATA:
            return false
        case ADD_QUESTION:
            return false
        case ADD_ANSWER:
            return false
        default:
            return state
    }
}