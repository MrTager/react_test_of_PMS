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
    //ergodic mock interface
    const mocksForServer = mocks.map(router => {
        return responseFake(route.url, route.type, route.response)
    })
    console.log(chalk.blue('lalal',mocksForServer))
    for (const mock of mocksForServer) {
        app[mock.type](mock.url, mock.response)
        mockLastIndex = app._router.stack.length
      }
      const mockRoutesLength = Object.keys(mocksForServer).length
      return {
        mockRoutesLength: mockRoutesLength,
        mockStartIndex: mockLastIndex - mockRoutesLength
      }
}

const responseFake = (url, type, respond) => {
    //chage url address on the basis of environment 
    let dynamicUrl = "";
    switch(process.env.NODE_ENV){
        case "development":
            dynamicUrl = "http://172.60.12.230:8000"
            break;
        case "production":
            dynamicUrl = "http://172.60.12.230:8000"
            break;
        case "test":
            dynamicUrl = "http://172.60.12.230:8000"
            break;
    }
    return {
        url: new RegExp(`${dynamicUrl}${url}`),
        type:type || 'get',
        response(req,res){
            console.log(chalk.yellow('request invoke:' + req.path))
            res.json(Mock.mock(respond instanceof Function ? respond(req,res) : respond))
        }
    }
}

module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended:true
    }))

    const mockRoutes = registerRoutes(app)
    var mockRoutesLength = mockRoutes.mockRoutesLength
    var mockStartIndex = mockRoutes.mockStartIndex
    chokidar.watch(mockDir, {
        ignored: /mock-server/,
        ignoreInitial: true
      }).on('all', (event, path) => {
        if (event === 'change' || event === 'add') {
          try {
            // remove mock routes stack
            app._router.stack.splice(mockStartIndex, mockRoutesLength)
    
            // clear routes cache
            unregisterRoutes()
    
            const mockRoutes = registerRoutes(app)
            mockRoutesLength = mockRoutes.mockRoutesLength
            mockStartIndex = mockRoutes.mockStartIndex
    
            console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
          } catch (error) {
            console.log(chalk.redBright(error))
          }
        }
      })
}