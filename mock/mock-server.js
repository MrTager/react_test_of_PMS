console.log("已经进入mockserver了")


//use file listening plug-in
const chokidar = require('chokidar')
//use body middleware
//before deal program,decode response body from middleware
const bodyParser = require('body-parser')
//use a plug-in to change log colors
const chalk = require('chalk');
var path = require("path");
const Mock = require('mockjs');
const { Router } = require('react-router-dom');

//process.cwd() : get node working file path
const mockDir = path.join(process.cwd(), 'mock')
console.log("working path",mockDir)

function registerRoutes(app) {
    let mockLastIndex;
    const { mocks } = require("./index.js");
    const mocksForServer = mocks.map(router => {
        return responseFake(route.url, route.type, route.response)
    })
}

// const responseFake = (url, type, respond) => {
//     return {
//         url: new RegExp(``),
//     }
// }