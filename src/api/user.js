import request from '../utils/request'

/**
 * 
 * @param {*} serial_code string 账号
 * @param {*} password string 密码
 */
export function login (serial_code,password){
    return request({
        url:'/user/login/',
        method:'post',
        data:{serial_code:serial_code,password:password}
    })
}
/**
 * 
 * @param {*} serial_code string 账号
 * @param {*} password string 密码
 */
export function getUserInfo (serial_code,password){
    return request({
        url:'\/user\/info\/',
        method:'get',
        params: { 'serial_code':serial_code,'password':password }
    })
}