const Mock = require('mockjs')

const user = require('./interface/User').default
const product = require('./interface/Product').default


const mocks = [
  ...user,
  ...product
]
for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response)
}
Mock.setup({
  timeout:1000
})

