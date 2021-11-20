import { _getUsers,  _getQuestions, _saveQuestionAnswer,_saveQuestion } from "../_DATA";
import { onAdding,addedDone } from "./addedDone";
import { showLoading, hideLoading } from 'react-redux-loading-bar'



export const GET_DATA = 'GET_DATA'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

function getData (users,questions){
    return{
        type: GET_DATA,
        users,
        questions
    }
}

function addAnswer(answer){
    return{
        type:ADD_ANSWER,
        answer
    }
}

function addQuestion(question){
    return{
        type:ADD_QUESTION,
        question
    }
}

export  function handleInitialData(){
    return (dispatch)=>{
        Promise.all([_getUsers(),_getQuestions()])
        .then (([users,questions])=>{
            console.log(users,questions)
            dispatch(getData(users,questions));
        })
    }
}

export function setQuestionAnswer(authedUser,qsID,answer){
    return(dispatch)=>{
        dispatch(showLoading());
        _saveQuestionAnswer({authedUser:authedUser ,qid:qsID,answer:answer}).then(()=>{
            dispatch(addAnswer({authedUser,qsID,answer}))
        }).then(()=>dispatch(hideLoading()))
    }
}

export function addNewQuestion(optionOneText, optionTwoText, author){
    return(dispatch)=>{
        dispatch(showLoading())
        _saveQuestion({optionOneText:optionOneText, optionTwoText:optionTwoText, author:author}).then((formatedQuestion)=>{
            dispatch(addQuestion({author,formatedQuestion}))
            dispatch(onAdding())
        }).then(()=>{dispatch(hideLoading())}).then(()=>{
            dispatch(addedDone())
        })
    }
}