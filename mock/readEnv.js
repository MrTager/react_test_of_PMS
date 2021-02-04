//use file plug-in
const fs = require('fs')
const path = require('path');

//读取环境变量里的饿对象把它转换成对象
module.exports = (file) => {
    let fileName = path.join(__dirname, file);
    let data = fs.readFileSync(fileName,{encoding:'utf8'})
    let d = data.replace(/\r/g,',').replace(/\n/g,'')//换行和回车替换
    let arr = d.split(',').map(item => {
        return item.split('=')
    })
    let obj = {}
    arr.forEach(item => {
        obj[item[0]] = item[1]
    })
    return obj 
}