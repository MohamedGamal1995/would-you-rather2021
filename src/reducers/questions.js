import { ADD_ANSWER, ADD_QUESTION, GET_DATA } from "../actions/share";

export default function questions (state = {} , action ){
    switch (action.type){
        case GET_DATA:
            return {...state, ...action.questions}
        
        case ADD_ANSWER:
            return{
                ...state,
                [action.answer.qsID]:{
                    ...state[action.answer.qsID],
                    [action.answer.answer]:{
                        ...state[action.answer.qsID][action.answer.answer],
                        votes: state[action.answer.qsID][action.answer.answer].votes.concat([action.answer.authedUser])
                    }
                }
            }
        
        case ADD_QUESTION:
            return{
                ...state,
                [action.question.formatedQuestion.id]:action.question.formatedQuestion
            }
        default:
            return state
    }
}