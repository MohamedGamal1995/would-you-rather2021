import { GET_DATA,ADD_ANSWER, ADD_QUESTION } from "../actions/share";

export default function users (state = {} , action ){
    switch (action.type){
        case GET_DATA:
            return {...state, ...action.users}
        case ADD_ANSWER:
            return{
                ...state,
                [action.answer.authedUser]:{
                    ...state[action.answer.authedUser],
                    answers:{
                        ...state[action.answer.authedUser].answers,
                        [action.answer.qsID]:action.answer.answer
                    }
                }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]:{
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.formatedQuestion.id])
                }
            }
        default:
            return state
    }
}