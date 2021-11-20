import { USER_AUTH } from "../actions/userAuth";
import { LOG_OUT } from "../actions/userAuth";

export default function authedUser (state = null , action){
    switch (action.type){
        case USER_AUTH:
            return action.id
        case LOG_OUT:
            return null
        default:
            return state
    }
}