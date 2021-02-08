const Mock = require('mockjs')

const user = require('./interface/User').default


const mocks = [
  ...user,
]
for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response)
}
Mock.setup({
  timeout:1000
})

