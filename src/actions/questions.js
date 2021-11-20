export const GET_QUESTIONS = 'GET_QUESTIONS';

export function getQuestions(users){
    return{
        type:GET_QUESTIONS,
        users
    }
}
