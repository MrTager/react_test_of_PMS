import request from '../utils/request'


export function login (data){
    return request({
        url:'/mocktest/login',
        method:'post',
        data
    })
}