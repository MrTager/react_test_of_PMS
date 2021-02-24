import {decodeParam} from "../../utils";
const Mock = require('mockjs')


const list = Mock.mock(require('./getProductListSuccess.json'))

// export default {
//   login,
// }
export default  [
  {
    url: RegExp('/product/list/' + ".*"),
    type: 'get',
    response: config => {
        const {page,rows} = decodeParam(config.url)
        return list
    }
  },
]
