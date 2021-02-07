const Mock = require('mockjs')
const { decode } = require("./utils")

const user = require('./interface/user')



const mocks = [
  ...user,
]

for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response)
}
Mock.setup({
  timeout:1000
})

