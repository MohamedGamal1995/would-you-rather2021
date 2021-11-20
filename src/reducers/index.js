import { combineReducers } from "redux";

import users from "./users";
import questions from "./questions";
import authedUser from "./userAuth";
import addedDone from "./addedDone";
import loading from "./loading";
import { loadingBarReducer } from 'react-redux-loading-bar'


export default combineReducers({
    users,
    questions,
    authedUser,
    addedDone,
    loading,
    loadingBar: loadingBarReducer
})