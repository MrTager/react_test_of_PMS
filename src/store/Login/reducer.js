import * as login from './action-type';

let defaultState = {
  userInfo:{},//用户信息
  lalal:{}
}
// 用户数据
export const userData = (state = defaultState , action = {}) => {
  switch(action.type){
    case login.SAVE_USER_DATA:
      console.log("duixiang",{...state, ...{[action.datatype]: action.value}})
      return {...state, ...{[action.datatype]: action.value}}
    default:
      return state;
  }
}

