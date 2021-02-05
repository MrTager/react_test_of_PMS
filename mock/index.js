const Mock = require('mockjs')
const { decode } = require("./utils")

const user = require('./interface/user')

console.log("执行mock啦啦啦啦")

const mocks = [
    //some interface import here
    ...user
]

module.exports = {
    mocks
}