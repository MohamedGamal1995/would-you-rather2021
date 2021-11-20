export const ON_ADDING = 'ON_ADDING'
export const ADDED_DONE = 'ADDED_DONE'


export function onAdding(){
    return{
        type: ON_ADDING,
        done:true
    }
}

export function addedDone(){
    return{
        type: ADDED_DONE,
        done:false
    }
}