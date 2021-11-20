import { ON_ADDING } from "../actions/addedDone";
import { ADDED_DONE } from "../actions/addedDone";

export default function addedDone (state = false,action){
    switch (action.type) {
        case ON_ADDING:
            return action.done
        
        case ADDED_DONE:
            return action.done
        default:
            return state
    }
}