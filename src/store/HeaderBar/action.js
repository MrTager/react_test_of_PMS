import * as sidebar from "./action-type";

export const telescopicSldebar = (key,value) => {
    return {
        type:sidebar.CHANGE_SIDEBAR,
        key,
        value
    }
    
}