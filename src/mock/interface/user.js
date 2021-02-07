const { config } = require('dotenv/types')
const Mock = require('mockjs')

const login = Mock.mock({
  "errorCode":0,
  "message":"用户登录成功",
  "params":"",
  "item":{
      "id":1,
      "userName":"张辉",
      "serialCode":"12531",
      "mobile":"13456781234",
      "eMail":"12531@honyar.com",
      "role":{
          "id":1,
          "name":"software",
          "remark":"软件开发",
          "addDateTime":"2021-01-11 13:56:25",
          "modifyDateTime":"2021-02-04 16:51:30",
          "permissions":[
              {
                  "serialCode":"0"
              }
          ]
      }
  }
})

const userInfo = Mock.mock({
  "errorCode": 0,
  "message": "获取用户信息成功",
  "params": "",
  "item": {
    "id": 1,
    "userName": "张辉",
    "serialCode": "12531",
    "mobile": "13456781234",
    "eMail": "12531@honyar.com",
    "role": {
      "id": 1,
      "name": "software",
      "remark": "软件开发",
      "addDateTime": "2021-01-11 13:56:25",
      "modifyDateTime": "2021-02-04 16:51:30",
      "permissions": [
        {
          "serialCode": "0"
        }
      ]
    }
  }
})

// export default {
//   login,
// }
module.exports = [
  {
    url: '/user/login/',
    type: 'post',
    response: config => {
      return login
    }
  },
  {
    url:'/user/info/',
    type:'get',
    response: config => {
      return userInfo
    }
  }
]