import * as login from './action-type';

// 保存表单数据
export const saveUserDate = (value, datatype) => {
  return {
    type: login.SAVE_USER_DATA,
    value,
    datatype,
  }
}
