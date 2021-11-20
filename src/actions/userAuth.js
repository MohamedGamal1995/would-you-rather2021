export const USER_AUTH = 'USER_AUTH';
export const LOG_OUT = 'LOG_OUT';

export function userAuth (id){
    return{
        type: USER_AUTH,
        id
    }
}

export function logout(){
    return{
        type: LOG_OUT
    }
}