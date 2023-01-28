

export const resetReducer=(state,action)=>{

    if(action.type==="new password"){
        return{...state,newPassword:action.payload}
    }
    if(action.type==="confirm password"){
        return {...state,confirmPass:action.payload}
    }
    return state;
}
