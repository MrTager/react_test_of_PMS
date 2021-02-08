import {decodeParam} from "../../utils";
const Mock = require('mockjs')


const login = Mock.mock(require('./userLoginSuccess.json'))
const login_fail = Mock.mock(require('./userLoginFail.json'))
const userInfo = Mock.mock(require('./getUserInfoSuccess.json'))

// export default {
//   login,
// }
export default  [
  {
    url: '/user/login/',
    type: 'post',
    response: config => {
      const {serial_code,password } = decodeParam(config.body)
      if(serial_code === '12531' && password === '12531'){
       return login
      }else{
        return login_fail
      }
      
    }
  },
  {
    url:'\/user\/info\/',
    type:'get',
    response: config => {
      console.log("lalal",config)
      return userInfo
    }
  }
]

