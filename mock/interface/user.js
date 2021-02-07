const Mock = require('mockjs')

const login = Mock.mock({
    "errorCode": 0,
    "message": "用户登录成功",
    "item": {
      "id": 2,
      "userName": "超级管理员",
      "serialCode": "99999",
      "mobile": "",
      "eMail": "",
      "role": {
        "id": 1,
        "name": "超级管理员",
        "remark": null,
        "addDateTime": "2020-12-16 10:08:49",
        "modifyDateTime": "2020-12-16 10:08:49",
        "permissions": [
          {
            "serialCode": "999"
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
    url: '/mocktest/login',
    type: 'post',
    response: config => {
      return login
    }
  },
]