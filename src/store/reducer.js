//此文件为纯函数文件，只承担计算state的功能，不适合承担其他功能，也承担不了，理论上，纯函数不能进行读写操作
import * as user from './action-type'
let defaultState = {

}
export default (state = defaultState, action = {}) => {
    switch (action.type) {
    //   case user.SAVE_USERINFO:
    //     return {
    //       ...state,
    //       userInfo: action.userInfo
    //     }
    //   case user.SAVE_ATTRINFO:
    //     return {...state, ...{[action.datatype]: action.value}};
    //   case user.MODIFY_USERINFO:
    //     return {...state, userInfo: {...state.userInfo, [action.key]: action.value}};
      default:
        return state
    }
  }