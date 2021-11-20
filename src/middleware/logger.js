const logger = (store)=>(next)=>(action)=>{
    console.group(action.type);
    console.log('the action is:', action);
    const result = next(action)
    console.log(store.getState())
    console.groupEnd()
    return result
} 

export default logger