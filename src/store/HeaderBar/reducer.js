import * as sidebar from "./action-type";

let defaultSate = {
    collapsed:true
}

export const HeaderBar = (state = defaultSate ,action = {}) => {
    switch(action.type){
        case sidebar.CHANGE_SIDEBAR:
            return {...state,...{[action.key]:!action.value}}
        default:
            return state
    }
}